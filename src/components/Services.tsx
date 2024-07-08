import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Services = () => {
  return (
    <section id="services" className="w-full relative bg-grid-white/[0.05]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="h-[50vh] absolute w-full"
      style={{
        background: "linear-gradient(0deg, rgba(22,26,66,0) 0%, rgba(0,0,0,1) 85%)"
      }}
       />

      <BentoGrid className="container py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            descriptionClassName={item.descriptionClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;