import HeroSection from "@/app/components/services/hero-section";
import ServiceOverview from "@/app/components/services/services-overview";
import DesignProcess from "@/app/components/services/design-process";
import Companies from "@/app/components/services/companies";
import OurWorks from "@/app/components/home/our-works";
import Contact from "@/app/components/home/contact";

import InteriorImage from "../../../../public/logos/interior-hero.webp";
import InteriorServiceImage from "../../../../public/logos/interior-1.webp";

import DesignProcess1 from "../../../../public/logos/interior-design-process-1.webp";
import DesignProcess2 from "../../../../public/logos/interior-design-process-2.webp";
import DesignProcess3 from "../../../../public/logos/interior-design-process-3.webp";
import DesignProcess4 from "../../../../public/logos/interior-design-process-4.webp";
import DesignProcess5 from "../../../../public/logos/interior-design-process-5.webp";

export default function InteriorDesign() {
  return (
    <>
      <HeroSection
        image={InteriorImage}
        title="Interior Design"
        description="Designing Interiors That Define Your Lifestyle"
      />

      <ServiceOverview
        title="Service Overview"
        subtitle="Crafting Interiors with Character & Functionality"
        description="Great interiors go beyond furniture and finishes — they tell a story, enhance mood, and support how people live and work. With expertise in both residential and commercial spaces, I bring balance between aesthetics and practicality, ensuring every corner is thoughtfully designed."
        listItems={[
          "Residential interiors (living rooms, bedrooms, kitchens)",
          "Commercial interiors (offices, restaurants, retail spaces)",
          "Lighting design and color consultation",
          "Furniture layouts and custom solutions",
          "Thematic interiors aligned with client personality",
        ]}
        image={InteriorServiceImage}
        buttonText="Start Your Project"
      />

      <DesignProcess
        sectionTitle="My Design Process"
        heading="My Interior Design Process"
        steps={[
          {
            title: "Consultation & Inspiration",
            description:
              "Understanding your lifestyle, brand, or business needs while collecting inspirations that reflect your vision.",
            image: DesignProcess1,
          },
          {
            title: "Space Planning & Layouts",
            description:
              "Creating functional layouts that maximize usability, comfort, and visual appeal while ensuring smooth circulation.",
            image: DesignProcess2,
            reverse: true,
          },
          {
            title: "Material & Color Selection",
            description:
              "Curating palettes, finishes, and textures to bring warmth, personality, and harmony to each space.",
            image: DesignProcess3,
          },
          {
            title: "3D Visualization & Mood Boards",
            description:
              "Presenting photorealistic 3D renders and mood boards that allow you to experience the interior before execution.",
            image: DesignProcess4,
            reverse: true,
          },
          {
            title: "Execution Guidelines",
            description:
              "Delivering detailed plans, furniture layouts, and specifications that guide contractors and vendors for flawless implementation.",
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
