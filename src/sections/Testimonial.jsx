import { useState, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import ReviewModal from "../components/ReviewModal";

// ⬇️ Your original card kept visually identical (see next block) but we pass onOpen
const ReviewCard = ({ img, name, username, body, link, onOpen }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onClick={(e) => {
        // only open modal on plain left-click
        const isPlainLeftClick =
          e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
        if (isPlainLeftClick) {
          e.preventDefault();
          onOpen?.({ img, name, username, body, link });
        }
      }}
    >
      <figure
        className={twMerge(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
        )}
      >
        {/* Header */}
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full bg-white/10"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col min-w-0">
            <figcaption className="text-sm font-medium text-white truncate">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/40 truncate">
              {username}
            </p>
          </div>
        </div>

        {/* Body snippet with fixed height */}
        <blockquote className="mt-2 text-sm line-clamp-6 h-30">
          {body}
        </blockquote>

        {/* View More cue */}
        <div className="mt-5 text-xs font-medium text-[rgb(196,140,45)]">
          View More →
        </div>
      </figure>
    </a>
  );
};


export default function Testimonial() {
  const [activeReview, setActiveReview] = useState(null);

  const openModal = useCallback((review) => setActiveReview(review), []);
  const closeModal = useCallback(() => setActiveReview(null), []);

  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Recommendations</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] py-10">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} onOpen={openModal} />
          ))}
        </Marquee>

        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>

      {/* Modal that mimics ProjectDetails visuals/animation */}
      <ReviewModal review={activeReview} onClose={closeModal} />
    </div>
  );
}
