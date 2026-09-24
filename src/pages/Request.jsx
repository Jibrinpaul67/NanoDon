import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  Upload,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const REQUEST_TYPES = [
  "Request a Caracal Demo",
  "Deployment Inquiry",
  "Partnership",
  "Research / Development",
  "Media / Press",
  "Other",
];

const TECHNOLOGIES = [
  "Autonomous Reconnaissance",
  "Threat Detection",
  "Situational Awareness",
  "Remote Monitoring",
  "Robotics / Autonomous Systems",
  "Security Technology",
  "Custom Integration",
];

const ENVIRONMENTS = [
  "Industrial",
  "Construction",
  "Security",
  "Research",
  "Infrastructure",
  "Remote / Hazardous",
  "Unknown / Unstructured",
  "Other",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Research phase / No fixed timeline",
];

const BUDGETS = [
  "Not yet determined",
  "Under $10,000",
  "$10,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

function CornerFrame({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* top left */}
      <span className="absolute -left-3 -top-3 h-4 w-4 border-l border-t border-[#657052]" />

      {/* top right */}
      <span className="absolute -right-3 -top-3 h-4 w-4 border-r border-t border-[#657052]" />

      {/* bottom left */}
      <span className="absolute -left-3 -bottom-3 h-4 w-4 border-l border-b border-[#657052]" />

      {/* bottom right */}
      <span className="absolute -right-3 -bottom-3 h-4 w-4 border-r border-b border-[#657052]" />

      {children}
    </div>
  );
}

function FormSection({ number, title, description, children }) {
  return (
    <section className="border-t border-[#182019]/20 pt-10">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-5">
          <span className="pt-1 font-mono text-[11px] font-semibold tracking-[0.2em] text-[#182019]">
            {number}
          </span>

          <CornerFrame className="inline-block">
            <h2 className="px-2 py-1 text-2xl font-semibold tracking-[-0.03em] text-[#182019] md:text-3xl">
              {title}
            </h2>
          </CornerFrame>
        </div>

        {description && (
          <p className="max-w-md text-sm leading-6 text-[#182019] md:text-right">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#182019]">
      {children}
      {required && <span className="ml-1 text-[#657052]">*</span>}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border border-[#182019]/25 bg-[#f7f8f2] px-4 py-3.5 text-sm text-[#182019] outline-none transition placeholder:text-[#182019]/55 focus:border-[#657052] focus:ring-1 focus:ring-[#657052]"
    />
  );
}

function Select({ value, onChange, options, required = false }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none border border-[#182019]/25 bg-[#f7f8f2] px-4 py-3.5 pr-10 text-sm text-[#182019] outline-none transition focus:border-[#657052] focus:ring-1 focus:ring-[#657052]"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#182019]"
      />
    </div>
  );
}

function Textarea({ value, onChange, placeholder, required = false }) {
  return (

    
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={6}
      className="w-full resize-none border border-[#182019]/25 bg-[#f7f8f2] px-4 py-3.5 text-sm leading-6 text-[#182019] outline-none transition placeholder:text-[#182019]/55 focus:border-[#657052] focus:ring-1 focus:ring-[#657052]"
    />
  );
}

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
   const [online, setOnline] = useState(true);

     useEffect(() => {
       const t = setInterval(() => setOnline((v) => !v), 4000);
       return () => clearInterval(t);
     }, []);

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

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      ...form,
      files,
    });

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f1f2eb] px-5 py-16 text-[#182019] md:px-10 md:py-24">
        
        <div className="mx-auto max-w-5xl">
          {/* top system line */}

          <div className="max-w-3xl">
            <CornerFrame className="inline-block">
              <h1 className="px-3 py-2 text-5xl font-semibold tracking-[-0.05em] text-[#182019] md:text-7xl">
                Request received.
              </h1>
            </CornerFrame>

            <p className="mt-10 max-w-xl text-base leading-7 text-[#182019] md:text-lg">
              Your request has been logged. A member of the Caracal team will
              review the information and follow up using your preferred contact
              method.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#182019]/20 bg-[#f7f8f2] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Check size={16} className="text-[#657052]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#182019]">
                    Request status
                  </span>
                </div>

                <p className="text-sm font-medium text-[#182019]">
                  Successfully submitted
                </p>
              </div>

              <div className="border border-[#182019]/20 bg-[#f7f8f2] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Mail size={16} className="text-[#657052]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#182019]">
                    Contact
                  </span>
                </div>

                <p className="text-sm font-medium text-[#182019]">
                  {form.contactPreference}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-10 inline-flex items-center gap-3 border border-[#182019] bg-[#182019] px-6 py-3.5 text-sm font-semibold text-[#f7f8f2] transition hover:bg-[#657052]"
            >
              Submit another request
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f2eb] text-[#182019]">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        {/* HEADER */}
        <header className="border-b border-[#182019]/20 pb-8">
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-md md:px-10">
  <a href="/" className="tracking-[0.28em]">
  <img
    src="/stroke.png"
    alt="Caracal"
    className="h-10 w-auto object-contain"
  />
</a>

  <div className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-black/55 md:flex">
    <a href="/"  className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">  Systems</a>
    <Link to="/join" className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">Join Us</Link>
    <Link to="/request" className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black" >
      <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
      <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
      Schedule a Demonstration
    </Link>
  </div>

  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
    <span
      className={`h-2 w-2 rounded-full ${
        online ? "bg-lime-700" : "bg-orange-600"
      }`}
    />
    {online ? "System online" : "Standby"}
  </div>
</nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#657052]" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#182019]">
                  FIELD REQUEST // 001
                </span>
              </div>

              <CornerFrame className="inline-block max-w-full">
                <h1 className="px-3 py-2 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#182019] sm:text-6xl md:text-8xl">
                  Put Caracal
                  <br />
                  in the field.
                </h1>
              </CornerFrame>
            </div>

            {/* TELEMETRY */}
            <div className="border-l border-[#182019]/20 pl-6">
              <div className="mb-6 flex items-center gap-2">
                <Shield size={15} className="text-[#657052]" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#182019]">
                  REQUEST TELEMETRY
                </span>
              </div>

              <div className="space-y-4 font-mono text-[10px] uppercase tracking-[0.12em]">
                <div className="flex justify-between gap-4">
                  <span className="text-[#182019]">System</span>

                  <span className="font-bold text-[#182019]">
                    CARACAL-01
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#182019]">Availability</span>

                  <span className="font-bold text-[#657052]">OPEN</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#182019]">Request type</span>

                  <span className="font-bold text-[#182019]">
                    FIELD / R&amp;D
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#182019]">Response</span>

                  <span className="font-bold text-[#182019]">
                    MANUAL REVIEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-6xl py-14 md:py-20"
        >
          {/* OPERATOR */}
          <FormSection
            title="Operator"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <FieldLabel required>Full name</FieldLabel>

                <Input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              </div>

              <div>
                <FieldLabel required>Organization</FieldLabel>

                <Input
                  value={form.organization}
                  onChange={(e) =>
                    updateField("organization", e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <FieldLabel>Role</FieldLabel>

                <Input
                  value={form.role}
                  onChange={(e) => updateField("role", e.target.value)}
                />
              </div>

              <div>
                <FieldLabel required>Email</FieldLabel>

                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <FieldLabel>Phone</FieldLabel>

                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+234..."
                />
              </div>

              <div>
                <FieldLabel>Country</FieldLabel>

                <Input
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                />
              </div>
            </div>
          </FormSection>

          {/* REQUEST */}
          <div className="mt-20">
            <FormSection
              number="02"
              title="Mission"
              description="Give us enough context to understand what you want Caracal to do."
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <FieldLabel required>Request type</FieldLabel>

                  <Select
                    value={form.requestType}
                    onChange={(e) =>
                      updateField("requestType", e.target.value)
                    }
                    options={REQUEST_TYPES}
                    required
                  />
                </div>

                <div>
                  <FieldLabel>Project name</FieldLabel>

                  <Input
                    value={form.projectName}
                    onChange={(e) =>
                      updateField("projectName", e.target.value)
                    }
                    placeholder="Project / deployment name"
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel required>Primary objective</FieldLabel>

                  <Textarea
                    value={form.objective}
                    onChange={(e) =>
                      updateField("objective", e.target.value)
                    }
                    placeholder="What do you need Caracal Agents to accomplish?"
                    required
                  />
                </div>

                <div>
                  <FieldLabel>Technology / capability</FieldLabel>

                  <Select
                    value={form.technology}
                    onChange={(e) =>
                      updateField("technology", e.target.value)
                    }
                    options={TECHNOLOGIES}
                  />
                </div>

                <div>
                  <FieldLabel>Environment</FieldLabel>

                  <Select
                    value={form.environment}
                    onChange={(e) =>
                      updateField("environment", e.target.value)
                    }
                    options={ENVIRONMENTS}
                  />
                </div>
              </div>
            </FormSection>
          </div>

          {/* ENVIRONMENT */}
          <div className="mt-20">
            <FormSection
              title="Operating Conditions"
              description="Understanding the environment helps us determine what the system needs to encounter."
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <FieldLabel>Deployment timeline</FieldLabel>

                  <Select
                    value={form.timeline}
                    onChange={(e) =>
                      updateField("timeline", e.target.value)
                    }
                    options={TIMELINES}
                  />
                </div>

                <div>
                  <FieldLabel>Estimated budget</FieldLabel>

                  <Select
                    value={form.budget}
                    onChange={(e) =>
                      updateField("budget", e.target.value)
                    }
                    options={BUDGETS}
                  />
                </div>

                <div className="md:col-span-2">
                  <FieldLabel>Environment details</FieldLabel>

                  <Textarea
                    value={form.requirements}
                    onChange={(e) =>
                      updateField("requirements", e.target.value)
                    }
                    placeholder="Describe terrain, infrastructure, access limitations, hazards, operating conditions, existing systems or other relevant requirements."
                  />
                </div>
              </div>
            </FormSection>
          </div>

          {/* FILES */}
          <div className="mt-20">
            <FormSection
              title="System Data"
              description="Share documents, diagrams, images or other information that helps explain the mission."
            >
              <div>
                <label
                  htmlFor="file-upload"
                  className="group flex min-h-[190px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#182019]/35 bg-[#f7f8f2] px-6 text-center transition hover:border-[#657052] hover:bg-[#eef0e7]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#182019]/25">
                    <Upload
                      size={19}
                      className="text-[#182019] transition group-hover:text-[#657052]"
                    />
                  </div>

                  <span className="text-sm font-semibold text-[#182019]">
                    Upload supporting files
                  </span>

                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between gap-4 border border-[#182019]/20 bg-[#f7f8f2] px-4 py-3"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <FileText
                            size={16}
                            className="shrink-0 text-[#657052]"
                          />

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-[#182019]">
                              {file.name}
                            </p>

                            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#182019]">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="shrink-0 text-[#182019] transition hover:text-[#657052]"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X size={17} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FormSection>
          </div>

          {/* CONTACT */}
          <div className="mt-20">
            <FormSection
              title="Communication"
              description="Choose how you would prefer the Caracal team to follow up."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    updateField("contactPreference", "Email")
                  }
                  className={`flex items-center gap-4 border p-5 text-left transition ${
                    form.contactPreference === "Email"
                      ? "border-[#657052] bg-[#e9ece1]"
                      : "border-[#182019]/20 bg-[#f7f8f2] hover:border-[#182019]/40"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center border ${
                      form.contactPreference === "Email"
                        ? "border-[#657052]"
                        : "border-[#182019]/25"
                    }`}
                  >
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#182019]">
                      Email
                    </p>

                    <p className="mt-1 text-xs text-[#182019]">
                      Written response
                    </p>
                  </div>

                  {form.contactPreference === "Email" && (
                    <Check
                      size={16}
                      className="ml-auto text-[#657052]"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateField("contactPreference", "Phone")
                  }
                  className={`flex items-center gap-4 border p-5 text-left transition ${
                    form.contactPreference === "Phone"
                      ? "border-[#657052] bg-[#e9ece1]"
                      : "border-[#182019]/20 bg-[#f7f8f2] hover:border-[#182019]/40"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center border ${
                      form.contactPreference === "Phone"
                        ? "border-[#657052]"
                        : "border-[#182019]/25"
                    }`}
                  >
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#182019]">
                      Phone
                    </p>

                    <p className="mt-1 text-xs text-[#182019]">
                      Direct conversation
                    </p>
                  </div>

                  {form.contactPreference === "Phone" && (
                    <Check
                      size={16}
                      className="ml-auto text-[#657052]"
                    />
                  )}
                </button>
              </div>

              {/* FINAL SUBMIT AREA */}
              <div className="mt-12 border-t border-[#182019]/20 pt-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-md">
                    <div className="mb-3 flex items-center gap-3">
                      <MapPin size={15} className="text-[#657052]" />

                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#182019]">
                        FIELD OPERATIONS
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-[#182019]">
                      Every request is reviewed individually so we can
                      understand the environment, mission requirements and
                      potential system configuration.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-4 bg-[#182019] px-7 py-4 text-sm font-semibold text-[#f7f8f2] transition hover:bg-[#657052]"
                  >
                    Transmit request

                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </FormSection>
          </div>
        </form>

     
      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-black/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Caracal. All rights reserved</span>
          <span>RECONNAISSANCE · RESCUE · HAZARD RESPONSE</span>
</div>
      </footer>
      </div>
    </main>
  );
}