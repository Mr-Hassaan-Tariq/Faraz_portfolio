import HeroSection from "@/app/components/services/hero-section";
import ServiceOverview from "@/app/components/services/services-overview";
import DesignProcess from "@/app/components/services/design-process";
import Companies from "@/app/components/services/companies";
import OurWorks from "@/app/components/home/our-works";
import Contact from "@/app/components/home/contact";

import LandscapeImage from "../../../../public/logos/landscape-hero.png";
import LandscapeServiceImage from "../../../../public/logos/landscape-service.png";

import DesignProcess1 from "../../../../public/logos/landscape-design-process-1.png";
import DesignProcess2 from "../../../../public/logos/landscape-design-process-2.png";
import DesignProcess3 from "../../../../public/logos/landscape-design-process-3.png";
import DesignProcess4 from "../../../../public/logos/landscape-design-process-4.png";
import DesignProcess5 from "../../../../public/logos/landscape-design-process-5.png";

export default function LandscapeDesign() {
  return (
    <>
      <HeroSection
        image={LandscapeImage}
        title="Landscape Design"
        description="Designing Outdoor Spaces That Inspire"
      />

      <ServiceOverview
        title="Service Overview"
        subtitle="Creating Functional & Aesthetic Outdoor Environments"
        description="A well-designed landscape is more than greenery — it enhances lifestyle, provides relaxation, and increases the value of a property. Whether it’s a residential garden, a commercial courtyard, or a large green area, I design spaces that blend natural beauty with structural harmony."
        listItems={[
          "Residential gardens & courtyards",
          "Green areas & outdoor seating layouts",
          "Commercial & recreational landscapes",
          "Sustainable planting schemes",
          "Hardscape design (walkways, patios, decks)",
        ]}
        image={LandscapeServiceImage}
        buttonText="Start Your Project"
      />

      <DesignProcess
        sectionTitle="My Design Process"
        heading="My Landscape Design Process"
        steps={[
          {
            title: "Site Analysis & Consultation",
            description:
              "Evaluating site conditions, climate, and client requirements to create a design strategy tailored to the space.",
            image: DesignProcess1,
          },
          {
            title: "Conceptual Planning",
            description:
              "Developing layout ideas that balance greenery, circulation, and usability while integrating natural elements.",
            image: DesignProcess2,
            reverse: true,
          },
          {
            title: "Plant & Material Selection",
            description:
              "Selecting plants, trees, textures, and hardscape elements that bring both sustainability and aesthetic appeal.",
            image: DesignProcess3,
          },
          {
            title: "3D Visualization & Walkthroughs",
            description:
              "Presenting realistic landscape renders and walkthroughs so you can experience the outdoor design before execution.",
            image: DesignProcess4,
            reverse: true,
          },
          {
            title: "Final Documentation & Execution Plan",
            description:
              "Preparing detailed construction-ready drawings, planting guides, and layout plans to ensure flawless implementation.",
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
