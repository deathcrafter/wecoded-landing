import { useEffect, useRef, useState } from "react";
import { RandomHumaan } from "./components/HummansLoader";
import { useAnimate, useMotionValue, useMotionValueEvent } from "motion/react";
import HeroSection from "./sections/Hero";
import WinnersSection from "./sections/Winners";
import { AboutSection } from "./sections/About";
import PostsSection from "./sections/Posts";
import JoinSection from "./sections/Join";
import AttributionsSection from "./sections/Attributions";

function App() {
  const hummanRef = useRef<{ update: () => void }>(null!);

  const maxFrames = 50;
  const frame = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const [intialAnimationRunning, setInitialAnimationRunning] = useState(true);

  useEffect(() => {
    animate(frame, [1, maxFrames], {
      type: "keyframes",
      duration: 3,
      ease: function easeInCubic(x: number): number {
        return x * x * x;
      },
    });
  });

  const frameRef = useRef(frame.get());
  useMotionValueEvent(frame, "change", () => {
    if (frameRef.current !== Math.ceil(frame.get())) {
      frameRef.current = Math.ceil(frame.get());
      hummanRef.current?.update();
    }
    if (frame.get() === maxFrames) {
      setInitialAnimationRunning(false);
    }
  });

  return (
    <div className="w-full lg:w-5xl mx-auto">
      {intialAnimationRunning ? (
        <div ref={scope} className="flex justify-center items-center h-screen">
          <RandomHumaan ref={hummanRef} />
        </div>
      ) : (
        <div className="relative">
          <HeroSection />
          <div className="p-8 backdrop-blur-2xl backdrop-brightness-125 border-2 border-dev-brand rounded-2xl mb-10">
            <AboutSection />
          </div>
          <div className="p-8 backdrop-blur-2xl border-2 border-dev-brand rounded-2xl mb-10">
            <PostsSection />
          </div>
          <div className="p-8 backdrop-blur-2xl border-2 border-dev-brand rounded-2xl mb-10">
            <JoinSection />
          </div>
          <div className="p-8 backdrop-blur-2xl border-2 border-dev-brand rounded-2xl mb-10">
            <WinnersSection />
          </div>
          <div className="p-8 backdrop-blur-2xl border-2 border-dev-brand rounded-2xl mb-10">
            <AttributionsSection />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
