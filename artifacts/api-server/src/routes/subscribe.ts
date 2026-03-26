import { Router } from "express";
import { logger } from "../lib/logger.js";

const router = Router();

const MAILERLITE_GROUP_ID = "183029744309110008";
const MAILERLITE_API_URL = "https://connect.mailerlite.com/api";

router.post("/subscribe", async (req, res) => {
  const body = req.body as Record<string, string>;

  const emailValue = (body.email || "").trim().toLowerCase();
  const fullName =
    body.name ||
    [body.first_name, body.last_name].filter(Boolean).join(" ") ||
    "";

  // MailerLite built-in fields
  const fields: Record<string, string> = {};
  if (fullName) fields.name = fullName;
  if (body.last_name) fields.last_name = body.last_name;
  if (body.phone) fields.phone = String(body.phone);

  // Custom fields (must be created in MailerLite → Subscribers → Fields)
  if (body.address) fields.address = body.address;
  if (body.city) fields.city = body.city;
  if (body.state) fields.state = body.state;
  if (body.zip) fields.zip = body.zip;
  if (body.project_type) fields.project_type = body.project_type;
  if (body.timeline) fields.timeline = body.timeline;
  if (body.source) fields.source = body.source;
  if (body.message) fields.message = body.message;

  if (!emailValue) {
    logger.info({ name: fullName }, "Lead captured (no email — skipped MailerLite)");
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
      logger.info({ email: emailValue }, "MailerLite subscriber added");
    }
  } catch (err) {
    logger.error({ err }, "MailerLite fetch error");
  }

  return res.json({ success: true });
});

export default router;
