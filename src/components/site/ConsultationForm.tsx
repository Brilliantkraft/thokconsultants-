import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { buildMailto, consultationSchema } from "@/lib/consultation";
import { consultationServices, contact } from "@/lib/site";
import { btn } from "./ui";

const field =
  "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export function ConsultationForm({ defaultService }: { defaultService?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = consultationSchema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setSent(false);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(contact.email, r.data);
    setSent(true);
  }

  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1 text-sm text-destructive">{errors[k]}</p> : null);

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
      <h2 className="text-2xl font-medium text-primary">Consultation Form</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-primary">First name *
          <input name="first" className={field} autoComplete="given-name" aria-invalid={!!errors["first"]} />
          <Err k="first" />
        </label>
        <label className="text-sm font-semibold text-primary">Last name *
          <input name="last" className={field} autoComplete="family-name" aria-invalid={!!errors["last"]} />
          <Err k="last" />
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-primary">Email *
        <input name="email" type="email" className={field} autoComplete="email" aria-invalid={!!errors["email"]} />
        <Err k="email" />
      </label>
      <label className="mt-5 block text-sm font-semibold text-primary">Service Request *
        <select name="service" defaultValue={defaultService ?? ""} className={field} aria-invalid={!!errors["service"]}>
          <option value="" disabled>Select a service</option>
          {consultationServices.map((s) => <option key={s}>{s}</option>)}
        </select>
        <Err k="service" />
      </label>
      <label className="mt-5 block text-sm font-semibold text-primary">Comment or Message *
        <textarea name="message" rows={5} className={field} aria-invalid={!!errors["message"]} />
        <Err k="message" />
      </label>
      <button type="submit" className={`${btn("accent")} mt-8 w-full sm:w-auto`}>Submit <Send className="h-4 w-4" /></button>
      {sent && (
        <p role="status" className="mt-5 flex items-start gap-2 rounded-xl bg-accent-soft p-4 text-sm text-primary">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          Your email app should now open with your request ready to send to {contact.email}. If it didn't, please email us directly.
        </p>
      )}
    </form>
  );
}
