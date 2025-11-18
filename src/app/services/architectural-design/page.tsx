import HeroSection from "@/app/components/services/hero-section";
import DesignProcess from "@/app/components/services/design-process";
import Companies from "@/app/components/services/companies";
import OurWorks from "@/app/components/home/our-works";
import Contact from "@/app/components/home/contact";

import ArchitecturalImage from "../../../../public/logos/architectural-hero.webp";
import ArchitecturalServiceImage from "../../../../public/logos/architectural-service.webp";
import ServiceOverview from "@/app/components/services/services-overview";

import DesignProcess1 from "../../../../public/logos/design-process-1.webp";
import DesignProcess2 from "../../../../public/logos/design-process-2.webp";
import DesignProcess3 from "../../../../public/logos/design-process-3.webp";
import DesignProcess4 from "../../../../public/logos/design-process-4.webp";
import DesignProcess5 from "../../../../public/logos/design-process-5.webp";

export default function ArchitecturalDesign() {
  return (
    <>
      <HeroSection
        image={ArchitecturalImage}
        title="Architectural Design"
        description="Designing Structures That Inspire and Endure"
      />

      <ServiceOverview
        title="Service Overview"
        subtitle="Crafting Spaces with Precision"
        description="Architectural design is the foundation of every great space. With expertise in both technical precision and creative expression, I deliver comprehensive designs that meet modern requirements while reflecting your unique vision. From residential homes to commercial developments, my goal is to ensure every design is practical, sustainable, and aesthetically captivating."
        listItems={[
          "Building planning and space optimization",
          "Floor plan drafting and layout detailing",
          "Façade and exterior design concepts",
          "Construction-ready documentation",
          "Sustainable and eco-friendly design practices",
        ]}
        image={ArchitecturalServiceImage}
        buttonText="Start Your Project"
      />

      <DesignProcess
        sectionTitle="My Design Process"
        heading="My Architectural Design Process"
        steps={[
          {
            title: "Consultation & Discovery",
            description:
              "We begin with an in-depth consultation to fully understand your requirements, lifestyle needs, and the site’s potential. This stage is all about aligning your vision with practical design possibilities.",
            image: DesignProcess1,
          },
          {
            title: "Concept Development",
            description:
              "At this stage, I translate your ideas into initial sketches and conceptual layouts. Multiple options are explored to ensure creativity, feasibility, and alignment with your desired aesthetics.",
            image: DesignProcess2,
            reverse: true,
          },
          {
            title: "Floor Plan & Drafting",
            description:
              "Detailed architectural drawings are created, optimizing space usage, circulation, and functionality. Façade concepts are developed to bring visual identity and structural harmony to the project.",
            image: DesignProcess3,
          },
          {
            title: "3D Visualization",
            description:
              "Your design comes to life with realistic 3D renders and walkthroughs. This helps you visualize the project before construction, ensuring clarity and confidence in every design decision.",
            image: DesignProcess4,
            reverse: true,
          },
          {
            title: "Final Documentation",
            description:
              "Comprehensive technical drawings, material details, and construction-ready documentation are prepared. These serve as precise guidelines for builders and contractors to execute the project seamlessly.",
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
