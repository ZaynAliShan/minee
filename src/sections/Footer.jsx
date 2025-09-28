import { mySocials } from "../constants";
import TrueFocus from "../components/TrueFocus";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-7 text-sm text-white c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Animated tagline */}
      <div className="flex gap-2">
        <TrueFocus
          sentence="Planning Powers Success"
          manualMode={false}
          blurAmount={5}
          borderColor="rgb(196, 140, 45)"
          glowColor="rgba(196, 140, 45, 0.6)" // subtle glowing effect
          animationDuration={1}
          pauseBetweenAnimations={0.4}
        />
      </div>

      {/* Social icons */}
      <div className="flex gap-3">
        <a
          href="mailto:HamnaJalil@gmail.com"
          className="flex items-center gap-3 underline"
        >
          <img
            src="/assets/logos/gmail.png"
            alt="Email"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/hamnabukhari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 underline"
        >
          <img
            src="/assets/logos/linkedin.png"
            alt="LinkedIn"
            className="w-6 h-6 transition-transform duration-200 hover:scale-110"
          />
        </a>
      </div>

      <p>© {currentYear}. Hamna Jalil</p>
    </section>
  );
};

export default Footer;
