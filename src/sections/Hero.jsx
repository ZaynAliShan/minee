// Hero.jsx
"use client";

import HoverBorderGradient from "../components/HoverBorderGradient";

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.8-.25.8-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.37-3.88-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.2-3.07-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.17.93-.26 1.93-.39 2.93-.39s2 .13 2.93.39c2.22-1.48 3.19-1.17 3.19-1.17.63 1.58.23 2.75.11 3.04.75.8 1.2 1.82 1.2 3.07 0 4.41-2.68 5.37-5.24 5.66.42.36.8 1.06.8 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.81.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
    />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9.33V9.75h3.41v1.46h.05c.47-.89 1.63-1.83 3.36-1.83 3.59 0 4.25 2.36 4.25 5.42v5.65ZM5.34 8.29a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 12.16h3.56V9.75H3.56v10.7ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate h-[100svh] w-screen overflow-hidden bg-[#030412]"
      aria-label="Intro"
    >
      {/* background layers (kept behind everything) */}
      {/* <Boxes className="-z-20" /> */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#030412]/50 via-transparent to-[#030412]/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[18vh] -z-10 bg-gradient-to-t from-transparent via-[#030412]/30 to-[#030412]/95" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18vh] -z-10 bg-gradient-to-b from-transparent via-[#030412]/30 to-[#030412]/95" />

      {/* centered content */}
      <div className="relative z-20 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        {/* Avatar */}
        <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10 shadow-2xl shadow-black/40 md:h-32 md:w-32">
          {/* Put your image in /public/assets/avatar/me.jpeg */}
          <img
            src="/assets/avatar/me.webp"
            alt="Hamna Jalil"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
          Hamna Jalil
        </h1>

        {/* Subtitle */}
        <p className="mt-2 max-w-xl text-sm  md:text-base text-white">
          Hey, I am a Product Manager
        </p>

        {/* Socials */}
        <div className="mt-5 flex items-center gap-4">
        <a
          href="mailto:HamnaJalil@gmail.com"
          className="flex items-center gap-3 underline"
        >
          <img src="/assets/logos/gmail.png" alt="Email" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamnabukhari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 underline"
        >
          <img src="/assets/logos/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
        </a>
        </div>

        {/* CTA (animated gradient border) */}
        <div className="mt-6">
          <HoverBorderGradient
            as="a"
            href="#contact"
            containerClassName="border-white/15 shadow-lg shadow-fuchsia-500/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
            className="bg-fuchsia-500 hover:bg-fuchsia-400 md:px-6 md:py-2.5 px-5 py-2 text-sm font-semibold"
            aria-label="Hire me"
            title="Hire me"
          >
            Hire me
          </HoverBorderGradient>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="mb-3 text-xs text-slate-400 md:text-sm">Scroll Down</p>
          <div className="mx-auto h-6 w-4 rounded-full border border-slate-500/60">
            <div className="mx-auto mt-1 h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400/90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
