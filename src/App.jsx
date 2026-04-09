import LightRays from "@/components/LightRays";
import SplitText from "@/components/SplitText";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <main className="dark relative h-dvh w-screen overflow-hidden bg-[#06081a] md:bg-[#05070d] text-white">
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9fc3ff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={0.6}
          fadeDistance={1.25}
          followMouse
          mouseInfluence={0.3}
          saturation={2}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_50%_20%,rgba(120,160,255,0.16),transparent_44%),radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 hidden md:block bg-[linear-gradient(to_bottom,rgba(2,6,23,0.15),rgba(2,6,23,0.75)_52%,rgba(2,6,23,0.95))]" />

      <section className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 py-12 text-center sm:px-6 md:px-10">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center">
          <SplitText
            text="COMING SOON"
            tag="h3"
            splitType="chars"
            delay={28}
            duration={0.8}
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
            className="mb-6 text-xs font-semibold tracking-[0.42em] text-white/65 sm:text-sm"
            textAlign="center"
          />

          <SplitText
            text="Callybre"
            tag="h1"
            splitType="chars"
            delay={45}
            duration={0.9}
            from={{ opacity: 0, y: 34, filter: "blur(6px)" }}
            to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            textAlign="center"
          />

          <SplitText
            text="Callybre. Reliability, Delivered."
            tag="p"
            splitType="words,chars"
            delay={55}
            duration={0.95}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            className="mt-6 text-base font-medium leading-relaxed text-blue-100/85 sm:mt-8 sm:text-lg md:text-xl"
            textAlign="center"
          />
        </div>
      </section>
      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default App;
