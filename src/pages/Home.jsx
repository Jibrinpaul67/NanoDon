import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Eye, Radio, Volume2, Wind, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const specs = [
  ["01", "Nano-scale frame", "Compact airframe designed for confined and hazardous environments."],
  ["02", "Live perception", "Streams visual, thermal and acoustic information to an authorized operator."],
  ["03", "Remote command", "Human-directed navigation and mission control with no autonomous use of force."],
  ["04", "Hazard mapping", "Builds a live picture of unstable terrain, smoke, structures and movement."],
];

export default function App() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setOnline((v) => !v), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e9e6df] text-[#10120f] font-sans">
      <section className="relative min-h-screen border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(100,115,76,.22),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(58,62,51,.10),transparent_25%)]" />
    <nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-md md:px-10">
  <a href="/" className="tracking-[0.28em]">
  <img
    src="/stroke.png"
    alt="Caracal"
    className="h-10 w-auto object-contain"
  />
</a>

  <div className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-black/55 md:flex">
    <a href="#mission"  className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">   Mission </a>
    <a href="#systems"  className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">  Systems</a>
    <a href="#field"  className="group relative inline-block px-4 py-2 text-black/70 transition hover:text-black">  Field Use </a>
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

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_1.1fr] md:px-10 md:pt-24">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
              Hazard-zone autonomous reconnaissance
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-3xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] md:text-[8rem]">
              Caracal<br />Agents
            </motion.h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-black/65 md:text-lg">
              A nano-class reconnaissance platform built to enter places humans should not. Caracal agents gives operators eyes, ears and environmental awareness before they commit people to the scene.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#robot" className="rounded-full bg-[#10120f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:scale-[1.02]">Explore Robot</a>
              <a href="#field" className="rounded-full border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-black/5">Field profile</a>
            </div>
          </div>


          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#dad6cc] shadow-[0_30px_80px_rgba(0,0,0,.12)]">

  {/* Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,18,15,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,18,15,.07)_1px,transparent_1px)] bg-[size:42px_42px]" />

  {/* Terrain-style subtle background */}
  <div className="absolute inset-0 opacity-40">
    <div className="absolute left-[15%] top-[20%] h-32 w-32 rounded-full bg-[#8c927c]/20 blur-3xl" />
    <div className="absolute right-[15%] bottom-[20%] h-40 w-40 rounded-full bg-[#59604d]/20 blur-3xl" />
  </div>

  {/* Animated surveillance area */}
  <div className="absolute inset-0">

    {/* Moving target */}
    <motion.div
      animate={{
        left: [
          "25%",
          "72%",
          "58%",
          "30%",
          "78%",
          "42%",
          "25%"
        ],
        top: [
          "30%",
          "22%",
          "68%",
          "76%",
          "48%",
          "38%",
          "30%"
        ],
      }}
      transition={{
        duration: 18,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="absolute z-30"
    >

      {/* Target glow */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-lime-400/20 blur-md"
      />

      {/* Green target */}
      <div className="relative h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full red shadow-[0_0_18px_rgba(170,230,120,.95)]">

        {/* Crosshair */}
        <div className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 bg-lime-400/70" />

        <div className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 bg-lime-400/70" />

      </div>

    </motion.div>


    {/* Tracking eye / sensor reticle */}
    <motion.div
      animate={{
        left: [
          "25%",
          "72%",
          "58%",
          "30%",
          "78%",
          "42%",
          "25%"
        ],
        top: [
          "30%",
          "22%",
          "68%",
          "76%",
          "48%",
          "38%",
          "30%"
        ],
        scale: [
          0.8,
          1,
          1,
          1.08,
          1,
          1,
          0.8
        ],
      }}
      transition={{
        duration: 18,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
    >

      {/* Outer tracking ring */}
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        className="relative h-24 w-24 rounded-full border border-lime-500/50 md:h-32 md:w-32"
      >

        {/* Corner brackets */}
        <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-lime-400" />
        <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-lime-400" />
        <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-lime-400" />
        <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-lime-400" />

      </motion.div>


      {/* Inner eye */}
      <motion.div
        animate={{
          scale: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-300/70 bg-[#252822]/80 shadow-[0_0_25px_rgba(170,230,120,.35)]"
      >

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(170,230,120,.9)]" />

      </motion.div>

    </motion.div>


    {/* Scanning radar line */}
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 h-1/2 w-px origin-bottom bg-gradient-to-t from-lime-400/50 to-transparent"
    />

  </div>


  {/* Status HUD */}
  <div className="absolute left-5 top-5 z-40 rounded-xl border border-black/10 bg-white/30 px-3 py-2 backdrop-blur-md">

    <div className="flex items-center gap-2">

      <motion.span
        animate={{
          opacity: [1, .4, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="h-2 w-2 rounded-full bg-lime-600"
      />

      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/60">
        Tracking
      </span>

    </div>

  </div>


  {/* Bottom telemetry panel */}
  <div className="absolute bottom-5 left-5 right-5 z-40 flex items-end justify-between rounded-2xl bg-white/35 p-4 backdrop-blur-md">

    <div>

      <div className="text-[10px] uppercase tracking-[0.25em] text-black/45">
        Prototype visualisation
      </div>

      <div className="mt-1 font-mono text-xs">
        Angel-N057 / RECON CONFIGURATION
      </div>

      <div className="mt-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-black/45">

        <span className="h-1.5 w-1.5 rounded-full bg-lime-600" />

        Sensor tracking active

      </div>

    </div>

    <div className="text-right font-mono text-[10px] leading-5 text-black/55">

      LIVE FEED
      <br />
      LAT 09.0765
      <br />
      LON 07.3986

    </div></div></div></div>

        <div className="absolute bottom-8 left-6 md:left-10"><ArrowDown className="h-5 w-5 animate-bounce" /></div>
      </section>


{/* mission  */}
<section
  id="mission"
  className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36"
>
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="/black.png"
      alt=""
      className="h-full w-full object-cover opacity-60"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 grid gap-14 md:grid-cols-[.7fr_1.3fr]">

    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-black/45">
        01 / Mission
      </p>

      <h2 className="mt-4 text-4xl tracking-[-0.04em] md:text-6xl">
        Keep people out of the unknown.
      </h2>
    </div>

    <div className="max-w-3xl text-xl leading-9 text-black md:text-2xl">
      <p>
        Caracal Agents are designed around a simple principle:
        <span className="text-black/65"> send the machine before the human.</span>
      </p>

      <p className="mt-8">
        It is built to enter environments where sending people first could
        put them at unnecessary risk. Its compact, low-profile design enables
        discreet reconnaissance, capturing visual and audio intelligence from
        hazardous or uncertain environments and delivering it to teams before
        they commit personnel.
      </p>

      <p className="mt-8">
        Every mission remains human-directed.
      </p>
    </div>

  </div>
</section>


      <section id="systems" className="border-y border-black/10 bg-[#dcd8ce]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div><p className="text-xs uppercase tracking-[0.28em] text-black/45">02 / Systems</p><h2 className="mt-3 text-4xl tracking-[-0.04em] md:text-6xl">Small frame.<br />Serious awareness.</h2></div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-2">
            {specs.map(([n, title, body]) => (
              <article key={n} className="bg-[#e9e6df] p-8 md:p-10">
                <div className="font-mono text-xs text-black/35">{n}</div>
                <h3 className="mt-8 text-2xl tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 max-w-md leading-7 text-black/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="field" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-[#151815] p-8 text-white md:col-span-2 md:p-12">
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">03 / Field profile</p>
            <h2 className="mt-5 max-w-2xl text-4xl tracking-[-0.045em] md:text-6xl">Built for the places that make humans hesitate.</h2>
            <div className="mt-12 grid gap-7 sm:grid-cols-2">
              <div className="flex gap-4"><Eye className="mt-1 h-5 w-5 shrink-0" /><div><div className="font-medium">Visual awareness</div><p className="mt-1 text-sm leading-6 text-white/50">Live operator-view imagery for reconnaissance and assessment.</p></div></div>
              <div className="flex gap-4"><Volume2 className="mt-1 h-5 w-5 shrink-0" /><div><div className="font-medium">Acoustic sensing</div><p className="mt-1 text-sm leading-6 text-white/50">Audio cues help operators understand activity beyond line of sight.</p></div></div>
              <div className="flex gap-4"><Radio className="mt-1 h-5 w-5 shrink-0" /><div><div className="font-medium">Resilient comms</div><p className="mt-1 text-sm leading-6 text-white/50">Remote command and status telemetry for controlled missions.</p></div></div>
              <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0" /><div><div className="font-medium">Hazard mapping</div><p className="mt-1 text-sm leading-6 text-white/50">Marks points of interest and environmental hazards for response teams.</p></div></div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#e3dfd5] p-8 md:p-10">
            <Wind className="h-6 w-6 text-black/40" strokeWidth={1.5} />
            <div className="mt-14 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">Operating principle</div>
            <div className="mt-4 text-3xl tracking-[-0.04em]">Human decision.<br />Machine reach.</div>
            <div className="mt-10 border-t border-black/10 pt-6 font-mono text-[10px] leading-5 text-black/45">NON-LETHAL RECON CONFIGURATION<br />HUMAN-IN-THE-LOOP CONTROL<br />DESIGNED FOR HAZARDOUS ENVIRONMENTS</div>
          </div>
        </div>
      </section>

      <section id="importance" className="bg-[#f4f3ee] px-6 py-24 md:px-10 lg:py-32">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20 max-w-3xl">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-black/30" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-black/45">
          Why Caracal
        </span>
      </div>
    </div>

    {/* THREE REASONS */}
    <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 lg:grid-cols-3">

      <div className="group bg-[#f4f3ee] p-8 transition-colors duration-500 hover:bg-white md:p-10">

        {/* NUMBER */}
        <div className="mb-14 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.25em] text-black/35">
            01
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-black/25">
            Risk Architecture
          </span>
        </div>

        {/* TITLE */}
        <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em]">
          It changes the
          <br />
          risk equation.
        </h3>

        {/* SUB REASONS */}
        <div className="mt-12 divide-y divide-black/10">

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Risk separation
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              The machine can enter hazardous environments while personnel
              remain outside the immediate risk zone.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Reversible loss
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Losing a reconnaissance platform is materially different from
              losing a trained human operator.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Unknown environments
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Teams can gather preliminary information before committing
              personnel to unfamiliar spaces.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Reduced uncertainty
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Visual and audio observations help establish what exists inside
              an environment before entry.
            </p>
          </div>

        </div>
      </div>


      {/* ========================= */}
      {/* 02 — INFORMATION */}
      {/* ========================= */}

      <div className="group bg-[#f4f3ee] p-8 transition-colors duration-500 hover:bg-white md:p-10">

        <div className="mb-14 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.25em] text-black/35">
            02
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-black/25">
            Information Systems
          </span>
        </div>

        <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em]">
          It turns uncertainty
          <br />
          into information.
        </h3>
        <div className="mt-12 divide-y divide-black/10">

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Remote perception
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Observe environments without requiring personnel to physically
              enter them.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Multimodal intelligence
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Visual and audio observations provide complementary information
              about the environment.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Persistent observation
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              A machine can maintain an observation position without requiring
              a person to continuously occupy it.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Evidence creation
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Recorded observations provide a reference for later analysis and
              review.
            </p>
          </div>
        </div>
      </div>


      {/* ========================= */}
      {/* 03 — DECISION */}
      {/* ========================= */}

      <div className="group bg-[#f4f3ee] p-8 transition-colors duration-500 hover:bg-white md:p-10">

        <div className="mb-14 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.25em] text-black/35">
            03
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-black/25">
            Decision Systems
          </span>
        </div>

        <h3 className="max-w-sm text-2xl font-medium leading-tight tracking-[-0.02em]">
          It improves the
          <br />
          quality of decisions.
        </h3>

        <div className="mt-12 divide-y divide-black/10">

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Human-machine complementarity
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Machines handle reconnaissance and sensing while humans retain
              responsibility for interpretation and decisions.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Decision latency
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Remote information can reduce the time required to establish an
              initial understanding of an environment.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Prioritisation
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Early observations can help teams determine which areas require
              attention first.
            </p>
          </div>

          <div className="py-5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
              Decision traceability
            </span>
            <p className="mt-2 text-xs leading-5 text-black/55">
              Recorded observations provide a factual basis for subsequent
              analysis, review, and improvement.
            </p>
          </div>

        </div>
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
