import { motion } from "motion/react";
// import Trophy from "../assets/graphics/trophy.svg?react";
import WinnerSvg from "../assets/graphics/winner.svg?react";
import styled from "styled-components";

const GloryBox = styled.div`
  @property --bg-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: "<angle>";
  }

  @keyframes spin {
    to {
      --bg-angle: 360deg;
    }
  }

  animation: spin 5s infinite linear;
  border-radius: 1rem;
  background: linear-gradient(to bottom, white, white) padding-box,
    conic-gradient(
        from var(--bg-angle) in oklch longer hue,
        oklch(0.85 0.37 0) 0 0
      )
      border-box;
`;

interface WinnerProps {
  post: {
    banner?: string;
    title: string;
    author: {
      name: string;
      avatar: string;
      profile: string;
    };
    href: string;
  };
  position: number;
}
function Winner({ post, position }: WinnerProps) {
  return (
    <GloryBox
      className={`overflow-hidden ${
        position === 1 ? "border-4 border-transparent" : ""
      }`}
    >
      <div className="relative w-full h-full flex flex-col gap-2 p-2 md:p-4 bg-sky-100">
        {post.banner ? (
          <div className="relative aspect-[48/9] rounded-lg overflow-hidden">
            <div
              className={
                "absolute top-2 left-2 flex gap-1 items-end pl-1 pt-1 pr-2.5 pb-2.5 rounded-sm bg-dev-brand/70 text-white"
              }
            >
              <p className="text-4xl">{["🥇", "🥈", "🥉"][position - 1]}</p>
              <p className="text-2xl font-bold">
                {["1st", "2nd", "3rd"][position - 1]} Place
              </p>
            </div>
            <img src={post.banner} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-fit pl-1 pt-1 pr-2.5 pb-2.5 rounded-sm flex items-end gap-1 bg-dev-brand/70 text-white">
            <p className="text-4xl">{["🥇", "🥈", "🥉"][position - 1]}</p>
            <p className="text-2xl font-bold">
              {["1st", "2nd", "3rd"][position - 1]} Place
            </p>
          </div>
        )}
        <div className="flex gap-3 mt-4 items-center">
          <img src={post.author.avatar} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col justify-center">
            <a
              href={post.author.profile}
              className="text-base text-slate-900 font-bold"
            >
              {post.author.name}
            </a>
            <p className="text-sm text-slate-800 font-medium">
              Mar 5 (3 days ago)
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <div className="w-10 h-10"></div>
          <div className="flex flex-col gap-0.5">
            <a href={post.href} className="text-2xl font-bold text-black">
              {post.title}
            </a>
            <p className="flex flex-wrap gap-1 text-sm text-slate-700 mb-2">
              #tag1 #tag2 #tag3
            </p>
          </div>
        </div>
      </div>
    </GloryBox>
  );
}

export default function WinnersSection() {
  return (
    <motion.section id="winners" className="relative">
      <WinnerSvg className="absolute w-40 -top-30 -right-20" />
      <h1 className="text-4xl font-bold text-sky-800 mb-6">
        Winners from{" "}
        <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
          #wecoded
        </span>{" "}
        Challenge 2025
      </h1>
      <div className="flex grow flex-col gap-4">
        <Winner
          post={{
            author: {
              name: "Visakha Pandey",
              avatar: "https://placehold.co/200x200/?text=VP",
              profile: "https://dev.to/visakhapandey",
            },
            banner:
              "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feyluoleqpiqdwu7asazo.jpg",
            title:
              "Current hurdles of equality in job market for women and how we are overcoming it",
            href: "https://dev.to/visakhapandey/current-hurdles-of-equality-in-job-market-for-women-and-how-we-are-overcoming-it-4f0l",
          }}
          position={1}
        />
        <Winner
          post={{
            author: {
              name: "Maria José",
              avatar: "https://placehold.co/200x200/?text=MJ",
              profile: "https://dev.to/mariajose",
            },
            title: "Standing up, against everything that holds me back",
            href: "https://dev.to/mariajose/standing-up-against-everything-that-holds-me-back-3g2o",
          }}
          position={2}
        />
        <Winner
          post={{
            author: {
              name: "Prakriti Singhal",
              avatar: "https://placehold.co/200x200/?text=PS",
              profile: "https://dev.to/prakritisinghal",
            },
            banner:
              "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feyluoleqpiqdwu7asazo.jpg",
            title:
              "How I manage personal and proffesional life, being a mother of two children!",
            href: "https://dev.to/prakritisinghal/how-i-manage-personal-and-proffesional-life-being-a-mother-of-two-children-3o0o",
          }}
          position={3}
        />
      </div>
    </motion.section>
  );
}
