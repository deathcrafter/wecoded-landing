import SpeakerPhone from "../assets/graphics/speakerphone.svg?react";

export default function JoinSection() {
  return (
    <section className="relative">
      <SpeakerPhone className="absolute w-40 -top-46 -left-0" />
      <h1 className="font-serif text-4xl font-bold text-yellow-600">
        Be Heard...
      </h1>
      <p className="font-serif text-sm text-gray-800 mb-6 font-semibold">
        by a community that believes, that cares, and that is here for you.
      </p>
      <p className="text-lg font-medium mb-10">
        <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
          #wecoded
        </span>{" "}
        is a celebration of individuals who are underrepresented and otherwise
        marginalized in software development on the basis of gender: including
        women, transgender, nonbinary, gender non-conforming, and two spirit
        people. Join us to celebrate, learn, and grow together.
      </p>
      <a
        target="_blank"
        href="https://dev.to/new/wecoded"
        className="bg-yellow-600 text-white text-lg font-medium px-4 py-2 rounded-full mb-2"
      >
        Write a #wecoded post
      </a>
    </section>
  );
}
