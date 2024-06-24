import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="work">
      <h1 className="heading">
        My <span className="text-purple">recent achievements</span>
      </h1>
      <BentoGrid className="w-full py-20">
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
            spareImg={item.spareImg}
            leftLists={item.leftLists}
            rightLists={item.rightLists}
            pdf = {item.pdf}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
