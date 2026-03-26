import { Router } from "express";
import { logger } from "../lib/logger.js";

const router = Router();

const MAILERLITE_GROUP_ID = "183029744309110008";
const MAILERLITE_API_URL = "https://connect.mailerlite.com/api";

router.post("/subscribe", async (req, res) => {
  const {
    email,
    name,
    first_name,
    last_name,
    phone,
    address,
    city,
    state,
    zip,
    project_type,
    timeline,
    source,
  } = req.body;

  const emailValue = (email || "").trim();
  const fullName =
    name ||
    [first_name, last_name].filter(Boolean).join(" ") ||
    "";

  const fields: Record<string, string> = {};
  if (fullName) fields.name = fullName;
  if (phone) fields.phone = String(phone);
  if (city) fields.city = city;
  if (state) fields.state = state;
  if (zip) fields.zip = zip;
  if (project_type) fields.project_type = project_type;
  if (timeline) fields.timeline = timeline;
  if (address) fields.last_name = address;
  if (source) fields.company = source;

  if (emailValue) {
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
  } else {
    logger.info({ name: fullName, phone }, "Lead captured (no email — skipped MailerLite)");
  }

  return res.json({ success: true });
});

export default router;
