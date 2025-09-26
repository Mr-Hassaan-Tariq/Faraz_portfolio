import HeroSection from "@/app/components/services/hero-section";
import DesignProcess from "@/app/components/services/design-process";
import Companies from "@/app/components/services/companies";
import OurWorks from "@/app/components/home/our-works";
import Contact from "@/app/components/home/contact";

import VisualizationImage from "../../../../public/logos/visualization-hero.png";
import VisualizationServiceImage from "../../../../public/logos/visualization-service.png";
import ServiceOverview from "@/app/components/services/services-overview";

import DesignProcess1 from "../../../../public/logos/visualization-design-process-1.png";
import DesignProcess2 from "../../../../public/logos/visualization-design-process-2.png";
import DesignProcess3 from "../../../../public/logos/visualization-design-process-3.png";
import DesignProcess4 from "../../../../public/logos/visualization-design-process-4.png";
import DesignProcess5 from "../../../../public/logos/visualization-design-process-5.png";

export default function VisualizationDesign() {
  return (
    <>
      <HeroSection
        image={VisualizationImage}
        title="3D Visualization & Rendering"
        description="Turning Ideas Into Realistic Visuals"
      />

      <ServiceOverview
        title="Service Overview"
        subtitle="Visualizing Designs With Precision & Detail"
        description="3D visualization bridges the gap between imagination and reality. I create photorealistic renders that help clients and stakeholders truly experience a design before it’s built. From interiors to architectural exteriors, my renders highlight textures, materials, lighting, and ambiance, providing clarity and confidence in every project decision."
        listItems={[
          "3D architectural exteriors",
          "Photorealistic interior renders",
          "Lighting & material visualization",
          "Day & night scene rendering",
          "Walkthrough animations (optional add-on)",
        ]}
        image={VisualizationServiceImage}
        buttonText="Start Your Project"
      />

      <DesignProcess
        sectionTitle="My Design Process"
        heading="My 3D Visualization Process"
        steps={[
          {
            title: "Gathering Design Inputs",
            description:
              "Collecting architectural drawings, sketches, or concepts to begin the visualization process.",
            image: DesignProcess1,
          },
          {
            title: "3D Modeling",
            description:
              "Building accurate 3D models of spaces, structures, and layouts using industry-standard tools.",
            image: DesignProcess2,
            reverse: true,
          },
          {
            title: "Material & Lighting Setup",
            description:
              "Applying realistic textures, materials, and lighting conditions to create lifelike effects.",
            image: DesignProcess3,
          },
          {
            title: "Rendering & Post-Processing",
            description:
              "Producing high-resolution renders and enhancing them with professional post-processing.",
            image: DesignProcess4,
            reverse: true,
          },
          {
            title: "Final Delivery",
            description:
              "Providing photorealistic images and walkthroughs that showcase the design in its full potential.",
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
