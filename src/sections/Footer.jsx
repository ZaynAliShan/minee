import { mySocials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-7 text-sm text-white c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      
      <div className="flex gap-3">
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
      
      <p>© {currentYear} Hamna Jalil. All rights reserved.</p>
    </section>
  );
};

export default Footer;
