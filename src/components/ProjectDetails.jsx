import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto"
      // Animate backdrop itself
      initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.3)" }}
      exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0)" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-full max-w-2xl mx-4 sm:mx-6 md:mx-0 max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 transform-gpu will-change-transform will-change-opacity"
        initial={{ opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.9 }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          aria-label="Close"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>

        {/* Project image */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          {/* Tags + View Project link */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <div className="flex flex-wrap gap-3 mb-2 mt-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium cursor-pointer whitespace-nowrap hover-animation"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="Open link" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
