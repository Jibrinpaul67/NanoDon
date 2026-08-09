import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Eye,
  Radio,
  Shield,
  Terminal,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Join() {
    const [online, setOnline] = useState(true);
   
     useEffect(() => {
       const t = setInterval(() => setOnline((v) => !v), 4000);
       return () => clearInterval(t);
     }, []);

  return (
    <main className="min-h-screen bg-[#f4f3ee] text-[#11130f]">

      {/* ================= HEADER ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f4f3ee]/90 backdrop-blur-md">
          <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-md md:px-10">
  <a href="/" className="tracking-[0.28em]">
  <img
    src="/stroke.png"
    alt="Caracal"
    className="h-10 w-auto object-contain"
  />
</a>

  <div className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-black/55 md:flex">
   <div className="flex items-center gap-4">

  {/* Home */}
  <Link to="/" className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">
   Home
  </Link>

  {/* Schedule a Demonstration */}
  <Link
    to="/request"
    className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black"
  >
    <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
    <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
    <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-black/50 transition-all duration-300 group-hover:h-3 group-hover:w-3" />

    Schedule a Demonstration
  </Link>

</div>
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
      </header>


      {/* ================= HERO ================= */}

      <section className="px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-black/30" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              Careers / Collaboration
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1.3fr_.7fr] lg:items-end">

            <div>
              <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] md:text-8xl">
                Build what
                <br />
                goes first.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-7 text-black/55 md:text-base">
                Caracal brings together engineers, researchers, designers,
                and problem-solvers working across robotics, artificial
                intelligence, autonomous systems and advanced technology.
              </p>

              <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-black/35">
                <span className="h-2 w-2 rounded-full bg-lime-700" />
                Open to builders
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHO WE ARE LOOKING FOR ================= */}

      <section className="border-y border-black/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-black/30" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                  Who we need
                </span>
              </div>

              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                People who
                <br />
                build things.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-black/60">
                We are interested in people who can take difficult problems,
                understand them deeply, and turn ideas into working systems.
              </p>

              <p className="mt-6 text-sm leading-7 text-black/40">
                You don't have to fit perfectly into one category. If your
                background is in engineering, research, robotics, AI, design,
                security, hardware or another technical discipline, we want
                to hear you.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= DISCIPLINES ================= */}

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-black/30" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                Areas of work
              </span>
            </div>

            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Different disciplines.
              <br />
              One system.
            </h2>
          </div>


          <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">

            <Role
              icon={<Cpu size={20} />}
              title="Robotics"
              description="Build machines capable of sensing, navigating, and operating in complex physical environments."
            />

            <Role
              icon={<Terminal size={20} />}
              title="Software Engineering"
              description="Develop the software infrastructure connecting autonomous platforms, sensors, data, and operators."
            />

            <Role
              icon={<Eye size={20} />}
              title="AI & Computer Vision"
              description="Develop systems that turn sensor data into useful information and machine perception."
            />

            <Role
              icon={<Radio size={20} />}
              title="Embedded Systems"
              description="Engineer the low-level systems responsible for sensing, communication, control, and computation."
            />

            <Role
              icon={<Shield size={20} />}
              title="Security"
              description="Build resilient systems designed to remain trustworthy in demanding environments."
            />

            <Role
              icon={<Users size={20} />}
              title="Product & Design"
              description="Design interfaces and experiences that make complex technical systems understandable and usable."
            />

          </div>
        </div>
      </section>


      {/* ================= WHAT WE VALUE ================= */}

      <section className="border-t border-black/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-black/30" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                  What we value
                </span>
              </div>

              <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
                How we
                <br />
                think.
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">

              <Value
                number="01"
                title="Curiosity"
                text="Ask better questions. Investigate the problem before deciding what the solution should be."
              />

              <Value
                number="02"
                title="Ownership"
                text="Take responsibility for the problem, not just the piece of code or component assigned to you."
              />

              <Value
                number="03"
                title="Depth"
                text="Understand how the systems you build actually work. Surface-level knowledge isn't enough."
              />

              <Value
                number="04"
                title="Discipline"
                text="Build carefully. When technology operates around people, reliability and responsibility matter."
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden border border-black/10 p-8 md:p-14">

            {/* Corner marks */}

            <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-black/50" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-black/50" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-black/50" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-black/50" />

            <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

              <div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
                  Start a conversation
                </span>

                <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
                  Have something
                  <br />
                  to contribute?
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-black/50">
                  Tell us what you build, what you understand and what you
                  want to solve. You don't need to fit neatly into a job title.
                </p>

              </div>

              <a
                href="mailto:careers@caracal.tech"
                className="group inline-flex items-center gap-4 bg-[#11130f] px-7 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-black"
              >
                Get in touch

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-black/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Caracal. All rights reserved</span>
           <a href="#robot" className="hover:text-black">Robot</a>
            <Link to="/join" className="hover:text-black">Join Us</Link>
          <span>RECONNAISSANCE · RESCUE · HAZARD RESPONSE</span>
</div>
      </footer>

    </main>
  );
}


/* ================= COMPONENTS ================= */

function Role({ icon, title, description }) {
  return (
    <div className="group bg-[#f4f3ee] p-8 transition hover:bg-white md:p-10">

      <div className="mb-12 flex h-10 w-10 items-center justify-center border border-black/10 text-black/45 transition group-hover:border-black/30 group-hover:text-black">
        {icon}
      </div>

      <h3 className="text-xl font-medium tracking-tight">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-black/45">
        {description}
      </p>

    </div>
  );
}


function Value({ number, title, text }) {
  return (
    <div className="border-t border-black/10 pt-5">

      <div className="flex items-center justify-between">

        <span className="text-[9px] tracking-[0.25em] text-black/30">
          {number}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

      </div>

      <h3 className="mt-8 text-xl font-medium">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-black/45">
        {text}
      </p>

    </div>
  );
}