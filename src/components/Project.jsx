import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { AnimatePresence } from "motion/react"; // ⬅️ add this

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  // --- Desktop hover preview only ---
  const handlePointerEnter = (e) => {
    if (e.pointerType === "mouse" && !isHidden) setPreview(image);
  };
  const handlePointerLeave = (e) => {
    if (e.pointerType === "mouse" && !isHidden) setPreview(null);
  };

  // --- Modal handling ---
  const openModal = () => {
    setPreview(null);
    setIsHidden(true);
  };
  const closeModal = () => {
    setPreview(null);
    setIsHidden(false);
  };

  return (
    <>
      <div
        className="py-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <div className="min-w-0 flex flex-col gap-3">
          <p className="text-2xl font-semibold">{title}</p>

          {/* inline image on phones & tablets; hidden on large desktops */}
          <img
            src={image}
            alt={title}
            className="block lg:hidden w-full max-h-40 object-cover rounded-lg"
            loading="lazy"
            decoding="async"
          />

          {/* TAGS — responsive, wrap cleanly */}
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="inline-flex items-center gap-2 rounded-md ring-1 ring-white/10 bg-white/5 px-2 py-1"
              >
                {tag.path && (
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="h-4 w-4 shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="text-sm leading-none text-[rgb(196,140,45)] break-words">
                  {tag.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* On phones & tablets this sits BELOW (column layout).
            On large screens it moves to the right (row layout). */}
        <button
          onClick={openModal}
          className="inline-flex items-center gap-1 self-start lg:self-auto cursor-pointer hover-animation"
          aria-label={`Read more about ${title}`}
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* ⬇️ Smooth unmounts */}
      <AnimatePresence mode="wait">
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
