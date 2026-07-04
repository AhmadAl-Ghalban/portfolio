import { z } from "zod";

const NAME_MIN_LENGTH = 2;
const SUBJECT_MIN_LENGTH = 3;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 2000;

export const contactFormSchema = z.object({
  name: z.string().min(NAME_MIN_LENGTH, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().min(SUBJECT_MIN_LENGTH, "Please add a short subject."),
  message: z
    .string()
    .min(MESSAGE_MIN_LENGTH, `Please write at least ${MESSAGE_MIN_LENGTH} characters.`)
    .max(MESSAGE_MAX_LENGTH, `Please keep it under ${MESSAGE_MAX_LENGTH} characters.`),
  /** Honeypot — hidden from real users; any value marks the submission as a bot. */
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
