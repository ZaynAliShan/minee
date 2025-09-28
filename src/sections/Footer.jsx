import { mySocials } from "../constants";
import DecryptedText from "../components/DecryptedText";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-7 text-sm text-white c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Animated tagline (DecryptedText) */}
      <div className="flex gap-2">
        <DecryptedText
          text="Planning Powers Success"
          // animation behavior
          animateOn="view"            // "hover" | "view" | "both"
          revealDirection="start"     // "start" | "end" | "center"
          sequential={true}           // reveal one-by-one
          speed={100}                  // lower = faster steps
          maxIterations={12}          // used when sequential=false

          // styling
          parentClassName="font-semibold tracking-wide"
          className="text-[1.05rem] md:text-[1.15rem] leading-tight 
                     text-[rgb(255,255,255)]"           // revealed letters (gold)
          encryptedClassName="text-[1.05rem] md:text-[1.15rem] leading-tight 
                              text-white/30"           // encrypted letters (dim)

          // optional: scramble from this character set
          characters="люблютебяДжаан"
        />
      </div>

      {/* Socials */}
      <div className="flex gap-3">
        <a href="mailto:HamnaJalil@gmail.com" className="flex items-center gap-3 underline">
          <img src="/assets/logos/gmail.png" alt="Email" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamnabukhari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 underline"
        >
          <img src="/assets/logos/linkedin.png" alt="LinkedIn" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
        </a>
      </div>

      <p>© {currentYear} | Hamna Jalil</p>
    </section>
  );
};

export default Footer;
