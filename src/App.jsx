import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Eye, Radio, Shield, Volume2, Wind, MapPin } from "lucide-react";

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
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
          <div className="tracking-[0.28em] text-sm font-semibold">DONKILLS®</div>
          <div className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-black/55 md:flex">
            <a href="#mission" className="hover:text-black">Mission</a>
            <a href="#systems" className="hover:text-black">Systems</a>
            <a href="#field" className="hover:text-black">Field Use</a>
            <a href="#field" className="hover:text-black">Schedule a Demonstration</a>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
            <span className={`h-2 w-2 rounded-full ${online ? "bg-lime-700" : "bg-orange-600"}`} />
            {online ? "System online" : "Standby"}
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_1.1fr] md:px-10 md:pt-24">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs uppercase tracking-[0.35em] text-black/45">
              Hazard-zone autonomous reconnaissance
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="max-w-3xl text-6xl font-medium leading-[0.9] tracking-[-0.055em] md:text-[8rem]">
              DON<br />KILLS
            </motion.h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-black/65 md:text-lg">
              A nano-class reconnaissance platform built to enter places humans should not. DonKills gives operators eyes, ears and environmental awareness before they commit people to the scene.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#mission" className="rounded-full bg-[#10120f] px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:scale-[1.02]">Explore system</a>
              <a href="#field" className="rounded-full border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-black/5">Field profile</a>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#dad6cc] shadow-[0_30px_80px_rgba(0,0,0,.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,18,15,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(16,18,15,.07)_1px,transparent_1px)] bg-[size:42px_42px]" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20 bg-[#252822] shadow-2xl md:h-64 md:w-64">
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-200/40 bg-[#3a4036] shadow-[inset_0_0_30px_rgba(150,180,110,.12)] md:h-28 md:w-28" />
              {[0, 90, 180, 270].map((r) => <div key={r} style={{ transform: `translate(-50%, -50%) rotate(${r}deg) translateY(-48%)` }} className="absolute left-1/2 top-1/2 h-16 w-2 rounded-full bg-[#161916] md:h-24" />)}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_20px_rgba(170,230,120,.75)]" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl bg-white/35 p-4 backdrop-blur-md">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-black/45">Prototype visualisation</div>
                <div className="mt-1 font-mono text-xs">DK-N01 / RECON CONFIGURATION</div>
              </div>
              <div className="text-right font-mono text-[10px] leading-5 text-black/55">LIVE FEED<br />LAT 09.0765<br />LON 07.3986</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 md:left-10"><ArrowDown className="h-5 w-5 animate-bounce" /></div>
      </section>

      <section id="mission" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">01 / Mission</p>
            <h2 className="mt-4 text-4xl tracking-[-0.04em] md:text-6xl">Keep people out of the first unknown.</h2>
          </div>
          <div className="max-w-3xl text-xl leading-9 text-black/65 md:text-2xl">
            <p>DonKills is designed around a simple principle: <span className="text-black">send the machine before the human.</span> Enter collapsed structures, smoke-filled corridors and contaminated or otherwise hazardous spaces to collect information and help teams make safer decisions.</p>
            <p className="mt-8">Every mission remains human-directed. The platform is built for perception, communication, navigation and retrieval—not autonomous use of force.</p>
          </div>
        </div>
      </section>

      <section id="systems" className="border-y border-black/10 bg-[#dcd8ce]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div><p className="text-xs uppercase tracking-[0.28em] text-black/45">02 / Systems</p><h2 className="mt-3 text-4xl tracking-[-0.04em] md:text-6xl">Small frame.<br />Serious awareness.</h2></div>
            <Shield className="hidden h-12 w-12 text-black/35 md:block" strokeWidth={1} />
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

      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-black/40 md:flex-row md:items-center md:justify-between">
          <span>DONKILLS® / CONCEPT PLATFORM</span>
          <span>RECONNAISSANCE · RESCUE · HAZARD RESPONSE</span>
        </div>
      </footer>
    </main>
  );
}
