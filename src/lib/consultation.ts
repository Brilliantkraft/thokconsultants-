import { z } from "zod";
import { consultationServices } from "./site";

export const consultationSchema = z.object({
  first: z.string().trim().min(1, "First name is required").max(80),
  last: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(200),
  service: z.enum(consultationServices as [string, ...string[]], { errorMap: () => ({ message: "Choose a service" }) }),
  message: z.string().trim().min(1, "Please add a comment or message").max(2000),
});

export type Consultation = z.infer<typeof consultationSchema>;

export function buildMailto(to: string, d: Consultation) {
  const subject = `Consultation Request: ${d.service}`;
  const body = `Name: ${d.first} ${d.last}\nEmail: ${d.email}\nService Request: ${d.service}\n\n${d.message}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
