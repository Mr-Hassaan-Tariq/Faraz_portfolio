import HeroSection from "@/app/components/services/hero-section";
import DesignProcess from "@/app/components/services/design-process";
import Companies from "@/app/components/services/companies";
import OurWorks from "@/app/components/home/our-works";
import Contact from "@/app/components/home/contact";

import AnimationImage from "../../../../public/logos/animation-hero.png";
import AnimationServiceImage from "../../../../public/logos/animation-service.png";
import ServiceOverview from "@/app/components/services/services-overview";

import DesignProcess1 from "../../../../public/logos/animation-design-process-1.png";
import DesignProcess2 from "../../../../public/logos/animation-design-process-2.png";
import DesignProcess3 from "../../../../public/logos/animation-design-process-3.png";
import DesignProcess4 from "../../../../public/logos/animation-design-process-4.png";
import DesignProcess5 from "../../../../public/logos/animation-design-process-5.png";

export default function AnimationDesign() {
  return (
    <>
      <HeroSection
        image={AnimationImage}
        title="Animation Services"
        description="Bringing Designs to Life with Animation"
      />

      <ServiceOverview
        title="Service Overview"
        subtitle="Visualizing Designs With Precision & Detail"
        description="Animation transforms static designs into dynamic experiences. By simulating movement, light, and user interaction, animations allow you and your stakeholders to explore a project before it’s built. These visual stories help communicate design intent more effectively and leave a stronger impact."
        listItems={[
          "Architectural walkthrough animations",
          "Interior flythroughs",
          "Exterior aerial animations",
          "Product and furniture animations",
          "Concept presentation videos",
        ]}
        image={AnimationServiceImage}
        buttonText="Start Your Project"
      />

      <DesignProcess
        sectionTitle="My Design Process"
        heading="My Animation Process"
        steps={[
          {
            title: "Storyboarding & Planning",
            description:
              "Defining animation goals, movement paths, and camera angles for impactful storytelling.",
            image: DesignProcess1,
          },
          {
            title: "3D Modeling & Environment Setup",
            description:
              "Creating accurate 3D models with detailed environments, lighting, and textures.",
            image: DesignProcess2,
            reverse: true,
          },
          {
            title: "Animation & Motion Setup",
            description:
              "Animating camera paths, object interactions, and natural elements like lighting or water flow.",
            image: DesignProcess3,
          },
          {
            title: "Rendering & Post-Production",
            description:
              "Rendering sequences into high-quality videos, refined with effects, sound, and transitions.",
            image: DesignProcess4,
            reverse: true,
          },
          {
            title: "Final Delivery",
            description:
              "Delivering a polished, ready-to-use animation that enhances presentations and client approvals.",
            image: DesignProcess5,
          },
        ]}
      />

      <Companies />
      <OurWorks />
      <Contact />
    </>
  );
}
