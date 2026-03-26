import { Router } from "express";
import { logger } from "../lib/logger.js";

const router = Router();

const MAILERLITE_GROUP_ID = "183029744309110008";
const MAILERLITE_API_URL = "https://connect.mailerlite.com/api";

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7;
}

router.post("/subscribe", async (req, res) => {
  const body = req.body as Record<string, string>;

  // Server-side phone validation
  if (body.phone && !validatePhone(body.phone)) {
    return res.status(400).json({ success: false, error: "Invalid phone number" });
  }

  const emailValue = (body.email || "").trim().toLowerCase();
  const fullName =
    body.name ||
    [body.first_name, body.last_name].filter(Boolean).join(" ") ||
    "";

  // MailerLite built-in subscriber fields
  const fields: Record<string, string> = {};
  if (fullName) fields.name = fullName;
  if (body.last_name) fields.last_name = body.last_name;
  if (body.phone) fields.phone = String(body.phone);

  // Custom fields
  if (body.address) fields.address = body.address;
  if (body.city) fields.city = body.city;
  if (body.state) fields.state = body.state;
  if (body.zip) fields.zip = body.zip;
  if (body.project_type) fields.project_type = body.project_type;
  if (body.timeline) fields.timeline = body.timeline;
  if (body.message) fields.message = body.message;
  const ownerVal = body.owner || body["property-owner"];
  if (ownerVal) fields["property-owner"] = ownerVal;

  // Tracking / attribution fields (stored as custom fields)
  const trackingFields = [
    "source","utm_source","utm_medium","utm_campaign","utm_term","utm_content",
    "gclid","fbclid","landing_page","referrer","page_url","page_title",
    "device_type","timestamp","location",
  ];
  trackingFields.forEach(key => {
    if (body[key]) fields[key === "source" ? "lead-source" : key] = body[key];
  });

  if (!emailValue) {
    logger.info({ name: fullName, phone: body.phone }, "Lead captured (no email — skipped MailerLite)");
    return res.json({ success: true });
  }

  try {
    const mlRes = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: emailValue,
        fields,
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    if (!mlRes.ok) {
      const errText = await mlRes.text();
      logger.warn(
        { status: mlRes.status, body: errText },
        "MailerLite API non-OK response"
      );
    } else {
      logger.info({ email: emailValue, name: fullName }, "MailerLite subscriber added");
    }
  } catch (err) {
    logger.error({ err }, "MailerLite fetch error");
  }

  return res.json({ success: true });
});

export default router;
