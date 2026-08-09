import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Upload,
} from "lucide-react";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    country: "",
    requestType: "",
    technology: "",
    projectName: "",
    objective: "",
    environment: "",
    timeline: "",
    budget: "",
    requirements: "",
    contactPreference: "Email",
  });

  const update = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0b0d0b] text-[#e9eadf] flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#aeb59b]/30 bg-[#aeb59b]/10">
            <Check size={28} />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#aeb59b]">
            Request Received
          </p>

          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
            Your request is in.
          </h1>

          <p className="mt-6 text-sm leading-7 text-white/50">
            Thank you for providing the project details. Our team will review
            the information and contact you using your preferred communication
            method.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-10 inline-flex items-center gap-3 border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Submit another request
            <ArrowRight size={15} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0d0b] text-[#e9eadf]">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
            href="/"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to platform
          </a>

        </div>
      </header>

      {/* FORM */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <form onSubmit={handleSubmit} className="space-y-16">
          {/* CONTACT */}
          <FormSection
            number="01"
            title="Your details"
            description="Tell us who is submitting this request."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Full name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />

              <Input
                label="Organization"
                required
                value={form.organization}
                onChange={(e) => update("organization", e.target.value)}
              />

              <Input
                label="Role / Position"
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
              />

              <Input
                label="Email address"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />

              <Input
                label="Phone number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />

              <Input
                label="Country / Region"
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
              />
            </div>
          </FormSection>

          {/* REQUEST */}
          <FormSection
            number="02"
            title="Request"
            description="Help us understand what you're looking for."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Select
                label="Request type"
                required
                value={form.requestType}
                onChange={(e) => update("requestType", e.target.value)}
                options={[
                  "Technology consultation",
                  "Product demonstration",
                  "Procurement inquiry",
                  "Research collaboration",
                  "Technical support",
                  "Partnership",
                  "Deployment support",
                  "Other",
                ]}
              />

              <Select
                label="Technology area"
                required
                value={form.technology}
                onChange={(e) => update("technology", e.target.value)}
                options={[
                  "Artificial Intelligence",
                  "Robotics",
                  "Autonomous Systems",
                  "Cybersecurity",
                  "Computer Vision",
                  "Communications",
                  "Surveillance & Monitoring",
                  "Logistics & Asset Management",
                  "Data & Intelligence",
                  "Other",
                ]}
              />

              <div className="md:col-span-2">
                <Textarea
                  label="What are you trying to achieve?"
                  required
                  placeholder="Describe the problem, objective, or capability you are looking for..."
                  value={form.objective}
                  onChange={(e) => update("objective", e.target.value)}
                />
              </div>
            </div>
          </FormSection>

          {/* REQUIREMENTS */}
          <FormSection
            number="03"
            title="Requirements"
            description="Give us the technical context we need."
          >
            <div className="space-y-6">
              <Select
                label="Operating environment"
                value={form.environment}
                onChange={(e) => update("environment", e.target.value)}
                options={[
                  "Field",
                  "Urban",
                  "Industrial",
                  "Maritime",
                  "Aerial",
                  "Remote ",
                  "Research",
                  "Enterprise",
                  "Other",
                ]}
              />

              <Textarea
                label="Technical requirements"
                placeholder="Describe relevant integrations, hardware, software, APIs, infrastructure, compatibility requirements, or constraints..."
                value={form.requirements}
                onChange={(e) => update("requirements", e.target.value)}
              />

            </div>
          </FormSection>

          {/* FILE */}
          <FormSection
            number="04"
            title="Supporting material"
            description="Optional documents that help explain your request."
          >
            <label className="group flex cursor-pointer flex-col items-center justify-center border border-dashed border-white/15 px-8 py-16 text-center transition hover:border-white/30 hover:bg-white/[0.02]">
              <Upload
                size={22}
                className="mb-5 text-white/40 transition group-hover:text-white"
              />

              <span className="text-sm text-white/70">
                Upload supporting files
              </span>

              <span className="mt-2 text-xs text-white/30">
                PDF, DOCX, PNG, JPG — optional
              </span>

              <input
                type="file"
                multiple
                className="hidden"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />
            </label>

            <div className="mt-5 flex gap-3 text-xs leading-5 text-white/30">
              <FileText size={15} className="mt-0.5 shrink-0" />

              <p>
                Do not upload classified information, credentials,
                vulnerabilities, operational plans, or other information that
                should not be submitted through a public website.
              </p>
            </div>
          </FormSection>

          {/* CONTACT PREFERENCE */}
          <FormSection
            number="05"
            title="Next step"
            description="Tell us how you'd prefer to continue the conversation."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {["Email"].map((method) => (
                <button
                  type="button"
                  key={method}
                  onClick={() => update("contactPreference", method)}
                  className={`border px-5 py-4 text-left text-sm transition ${
                    form.contactPreference === method
                      ? "border-[#aeb59b] bg-[#aeb59b]/10 text-white"
                      : "border-white/10 text-white/50 hover:border-white/25"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </FormSection>

          {/* SUBMIT */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs leading-6 text-white/30">
                  By submitting this request, you confirm that the information
                  provided is accurate and appropriate for submission through
                  this platform.
                </p>
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-4 bg-[#d8dccb] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0b0d0b] transition hover:bg-white"
              >
                Submit request
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FormSection({ number, title, description, children }) {
  return (
    <section className="border-t border-white/10 pt-10">
      <div className="mb-10 grid gap-6 md:grid-cols-[120px_1fr]">
        <span className="text-xs tracking-[0.25em] text-white/25">
          {number}
        </span>

        <div>
          <h2 className="text-2xl tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-white/35">{description}</p>
        </div>
      </div>

      <div className="md:ml-[120px]">{children}</div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
        {required && <span className="ml-1 text-[#aeb59b]">*</span>}
      </span>

      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#aeb59b]"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
        {required && <span className="ml-1 text-[#aeb59b]">*</span>}
      </span>

      <textarea
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={6}
        className="w-full resize-none border border-white/10 bg-white/[0.02] p-5 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#aeb59b]"
      />
    </label>
  );
}

function Select({ label, value, onChange, options, required = false }) {
  return (
    <label className="relative block">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-white/35">
        {label}
        {required && <span className="ml-1 text-[#aeb59b]">*</span>}
      </span>

      <select
        required={required}
        value={value}
        onChange={onChange}
        className="w-full appearance-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition focus:border-[#aeb59b]"
      >
        <option value="" className="bg-[#0b0d0b]">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0b0d0b]"
          >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        className="pointer-events-none absolute bottom-4 right-0 text-white/30"
      />
    </label>
  );
}