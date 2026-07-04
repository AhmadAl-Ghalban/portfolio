"use server";

import { Resend } from "resend";

import { siteConfig } from "@/shared/config";

import { contactFormSchema, type ContactFormValues } from "../model/schema";

export type SendContactEmailResult = { status: "sent" } | { status: "error"; message: string };

const DEFAULT_FROM = "Portfolio Contact <onboarding@resend.dev>";

export async function sendContactEmail(values: ContactFormValues): Promise<SendContactEmailResult> {
  // Honeypot: real users never see this field, bots fill it. Pretend success.
  if (values.company) return { status: "sent" };

  const parsed = contactFormSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", message: "Invalid form data." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "error", message: "Email sending is not configured." };
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? DEFAULT_FROM,
    to: siteConfig.email,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return { status: "error", message: "The email service rejected the message." };
  }
  return { status: "sent" };
}
