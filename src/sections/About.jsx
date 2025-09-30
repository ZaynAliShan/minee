import { useRef } from "react";
import Card from "../components/Card";
import Globe from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import Frameworks from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
      {/* Grid 1 */}
      <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
      <img
        src="assets/COVER.webp"
        className="
          absolute inset-0 w-full h-full object-cover z-0
          object-center          /* default for smaller screens */
          xl:object-[44%_center] /* shift focus when ≥1200px */
        "
        alt="Cover"
      />


        {/* Overlay visible on ALL screens */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{ backgroundColor: "rgba(38, 40, 71, 0.7)" }} // #262847 @ 60% opacity
        />

        <div className="z-10 relative p-4">
          <p className="headtext">Hi, I'm Hamna Jalil</p>
          <p className="subtext">
            <span style={{ color: "white" }}>            
            Results-driven Game Production professional skilled in project
            management, team coordination, and delivering high-quality player
            experiences. 🚀</span>

          </p>
        </div>

        <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
      </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-gray-500">
              PLANS DRIVE SUCCESS
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Issue Tracking"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="AGILE"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Workflows"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Project Planning"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Whiteboarding"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/jira.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/miro.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/confluence.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/notion.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "10%", left: "85%" }}
              image="assets/logos/jira-2.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              <span style={{ color: "white" }}>I'm based in Lahore, Pakistan, and open to hybrid, and remote work worldwide.</span>
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              <span style={{ color: "white" }}>I specialize in agile methodologies, precise scheduling, 
                and cross-functional coordination to build high-quality products.</span>
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
