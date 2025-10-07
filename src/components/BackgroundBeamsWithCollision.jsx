// src/components/BackgroundBeamsWithCollision.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const BackgroundBeamsWithCollision = ({ className = "", children }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    { initialX: 10,   translateX: 10,   duration: 7,  repeatDelay: 3,  delay: 2 },
    { initialX: 600,  translateX: 600,  duration: 3,  repeatDelay: 3,  delay: 4 },
    { initialX: 100,  translateX: 100,  duration: 7,  repeatDelay: 7,                className: "h-6"  },
    { initialX: 400,  translateX: 400,  duration: 5,  repeatDelay: 14, delay: 4 },
    { initialX: 800,  translateX: 800,  duration: 11, repeatDelay: 2,                className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4,  repeatDelay: 2,                className: "h-12" },
    { initialX: 1200, translateX: 1200, duration: 6,  repeatDelay: 4,  delay: 2,     className: "h-6"  },
  ];

  return (
    <div
      ref={parentRef}
      className={
        // Full-bleed, behind content, dark-friendly subtle wash
        `absolute inset-0 -z-10 overflow-hidden pointer-events-none
         bg-gradient-to-b from-transparent via-[#0b0f28]/30 to-transparent
         ${className}`
      }
    >
      {/* beam layer */}
      {beams.map((beam) => (
        <CollisionMechanism
          key={`${beam.initialX}-beam`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {/* very soft neon aura wash */}
      <div className="absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_35%,rgba(168,85,247,0.20),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_35%_at_50%_65%,rgba(6,182,212,0.12),transparent_70%)]" />
      </div>

      {/* invisible bottom “collider” line; its TOP is used for collision */}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0"
        style={{ height: 0 }}
      />
      {children}
    </div>
  );
};

const CollisionMechanism = React.forwardRef(
  ({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({ detected: false, coordinates: null });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

    useEffect(() => {
      const checkCollision = () => {
        if (
          beamRef.current &&
          containerRef.current &&
          parentRef.current &&
          !cycleCollisionDetected
        ) {
          const beamRect = beamRef.current.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const parentRect = parentRef.current.getBoundingClientRect();

          if (beamRect.bottom >= containerRect.top) {
            const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
            const relativeY = beamRect.bottom - parentRect.top;
            setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
            setCycleCollisionDetected(true);
          }
        }
      };

      const animationInterval = setInterval(checkCollision, 50);
      return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, parentRef]);

    useEffect(() => {
      if (collision.detected && collision.coordinates) {
        const t1 = setTimeout(() => {
          setCollision({ detected: false, coordinates: null });
          setCycleCollisionDetected(false);
        }, 2000);
        const t2 = setTimeout(() => {
          setBeamKey((prevKey) => prevKey + 1);
        }, 2000);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    }, [collision]);

    return (
      <>
        <motion.div
          key={beamKey}
          ref={beamRef}
          animate="animate"
          initial={{
            translateY: beamOptions.initialY || "-200px",
            translateX: beamOptions.initialX || "0px",
            rotate: beamOptions.rotate || 0,
          }}
          variants={{
            animate: {
              translateY: beamOptions.translateY || "1800px",
              translateX: beamOptions.translateX || "0px",
              rotate: beamOptions.rotate || 0,
            },
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: beamOptions.delay || 0,
            repeatDelay: beamOptions.repeatDelay || 0,
          }}
          // thin neon beam tuned for dark bg
          className={`absolute left-0 top-20 m-auto w-px h-14 rounded-full
                      bg-gradient-to-t from-indigo-500/70 via-fuchsia-500/70 to-transparent
                      blur-[0.5px] ${beamOptions.className || ""}`}
          style={{ boxShadow: "0 0 18px rgba(168,85,247,.35)" }}
        />
        <AnimatePresence>
          {collision.detected && collision.coordinates && (
            <Explosion
              key={`${collision.coordinates.x}-${collision.coordinates.y}`}
              style={{
                left: `${collision.coordinates.x}px`,
                top: `${collision.coordinates.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
);
CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = (props) => {
  const spans = Array.from({ length: 18 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div
      {...props}
      className={`absolute z-20 h-2 w-2 ${props.className || ""}`}
    >
      {/* core flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full
                   bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent blur-sm"
      />
      {/* particles */}
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.3 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-fuchsia-500 to-indigo-500"
          style={{ filter: "drop-shadow(0 0 6px rgba(168,85,247,.4))" }}
        />
      ))}
    </div>
  );
};
