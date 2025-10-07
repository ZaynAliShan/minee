import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ReviewModal({ review, onClose }) {
  // ESC to close + lock body scroll
  useEffect(() => {
    if (!review) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [review, onClose]);

  return (
    <AnimatePresence>
      {review && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.3)" }}
          exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            aria-describedby="review-modal-body"
            className="relative mx-4 my-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-sm transform-gpu will-change-transform will-change-opacity flex flex-col min-h-0
                       max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh]"
            initial={{ opacity: 0, y: 12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* SINGLE close button (absolute) */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 rounded-sm bg-midnight p-2 hover:bg-gray-500"
              aria-label="Close"
            >
              <img src="assets/close.svg" className="h-6 w-6" alt="Close" />
            </button>

            {/* Header — reserve space on the right so text never sits under the close button */}
            <div className="flex items-center gap-3 p-5 pt-6 pr-14"> {/* pr-14 ≈ 56px */}
              <img
                src={review.img}
                alt=""
                className="size-10 rounded-full bg-white/10 shrink-0"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0 flex-1">
                <h5 id="review-modal-title" className="truncate text-lg font-semibold text-white">
                  {review.name}
                </h5>
                <p className="truncate text-sm text-neutral-400">{review.username}</p>
              </div>
            </div>

            {/* Content — scrolls within the card */}
            <div
              id="review-modal-body"
              className="flex-1 overflow-y-auto px-5 pb-5"
              style={{
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
              }}
            >
              <p className="leading-relaxed font-normal text-neutral-300 whitespace-pre-line">
                {review.body}
              </p>

              <div className="mt-6 flex items-center justify-start">
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium whitespace-nowrap cursor-pointer hover-animation"
                >
                  View Source
                  <img src="/assets/logos/linkedin.png" className="size-5" alt="Open link" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
