import { describe, expect, it } from "vitest";
import { buildMailto, consultationSchema } from "@/lib/consultation";

const valid = { first: "Ada", last: "Obi", email: "ada@example.com", service: "HR Outsourcing", message: "Hello" };

describe("consultation form", () => {
  it("rejects an invalid email", () => {
    expect(consultationSchema.safeParse({ ...valid, email: "nope" }).success).toBe(false);
  });
  it("only accepts the services listed on the original booking form", () => {
    expect(consultationSchema.safeParse({ ...valid, service: "Tax Advice" }).success).toBe(false);
    expect(consultationSchema.safeParse({ ...valid, service: "Website Development" }).success).toBe(true);
  });
  it("addresses the request to the THOK contact email", () => {
    expect(buildMailto("contact@theokconsulting.com", valid)).toMatch(/^mailto:contact@theokconsulting\.com\?subject=/);
  });
});
