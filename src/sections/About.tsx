import { motion } from "motion/react";
import StorySvg from "../assets/graphics/story.svg?react";
export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.55 } }}
    >
      <StorySvg className="absolute w-40 -top-36 -left-3" />
      <h1 className="font-serif text-4xl font-bold text-dev-complement mb-6">
        Our Story
      </h1>
      <p className="text-lg font-medium">
        <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
          #wecoded
        </span>{" "}
        is a yearly event that started six years ago with SheCoded. We have
        since evolved our message but our goal has remained the same— to create
        a space for women, transgender, nonbinary, gender-nonconforming, and
        two-spirit folks to share stories, knowledge, and make new connections
        on DEV.
        <br />
        <br />
        we_coded is our little love letter to the community, one that hopes for
        a more diverse, equitable, and inclusive future for the tech world. In
        year’s past, we have used this time to look at accomplishments from our
        community, ask questions, share space, and celebrate the achievements of
        others.
      </p>
    </motion.section>
  );
}
