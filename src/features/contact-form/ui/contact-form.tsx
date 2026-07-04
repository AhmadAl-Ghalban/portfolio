"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, MailCheck, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { siteConfig } from "@/shared/config";
import { Button, Input, Label, Textarea } from "@/shared/ui";

import { sendContactEmail } from "../api/send-contact-email";
import { contactFormSchema, type ContactFormValues } from "../model/schema";

type FormStatus = "idle" | "sent" | "error" | "mailto";

function buildMailtoUrl(values: ContactFormValues): string {
  const subject = encodeURIComponent(values.subject);
  const body = encodeURIComponent(`${values.message}\n\n—\n${values.name}\n${values.email}`);
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

type ContactFormProps = {
  /** True when the server has a Resend API key; otherwise the form falls back to mailto. */
  emailEnabled: boolean;
};

export function ContactForm({ emailEnabled }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (!emailEnabled) {
      window.location.assign(buildMailtoUrl(values));
      setStatus("mailto");
      return;
    }
    const result = await sendContactEmail(values);
    if (result.status === "sent") {
      reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="text-xs text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id="contact-email-error" role="alert" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-subject">Subject</Label>
        <Input
          id="contact-subject"
          placeholder="What's this about?"
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject ? (
          <p id="contact-subject-error" role="alert" className="text-xs text-destructive">
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          placeholder="Tell me about your project, role, or question…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people (and screen readers), tempting for bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:self-start">
          <Send aria-hidden />
          {isSubmitting ? "Sending…" : emailEnabled ? "Send message" : "Compose email"}
        </Button>
        <p aria-live="polite" className="text-sm text-muted-foreground">
          {status === "sent" ? (
            <span className="inline-flex items-center gap-1.5">
              <MailCheck className="size-4" aria-hidden />
              Message sent — thanks! I&apos;ll get back to you soon.
            </span>
          ) : status === "error" ? (
            <span className="inline-flex items-center gap-1.5">
              <AlertCircle className="size-4" aria-hidden />
              Couldn&apos;t send right now — please email me directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                {siteConfig.email}
              </a>
              .
            </span>
          ) : status === "mailto" ? (
            <span className="inline-flex items-center gap-1.5">
              <MailCheck className="size-4" aria-hidden />
              Your email app should have opened with the message ready to send.
            </span>
          ) : emailEnabled ? (
            "Your message lands directly in my inbox."
          ) : (
            "Submitting opens your email app with the message pre-filled."
          )}
        </p>
      </div>
    </form>
  );
}
