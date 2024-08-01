import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Weight training classes are designed to help you build strength, tone muscle, and improve overall fitness. These classes typically involve moving heavy objects or your own body in a way that creates resistance, which is used to build strength and muscle mass.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
    "Our yoga classes are designed to help you cultivate physical, mental, and emotional well-being. Through a combination of postures, breathing techniques, and meditation, you'll embark on a journey of self-discovery and transformation.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our Ab Core Classes are designed to help you build a strong, stable, and toned core, which is essential for overall fitness, athletic performance, and everyday life. With a focus on functional exercises and dynamic movements, our classes will challenge your core muscles and help you achieve a more balanced and efficient body.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our Adventure Classes are designed to promote learning through adventure-centered experiences. These classes are perfect for all skill levels and offer a unique opportunity to develop new skills, challenge yourself, and have fun while doing it.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Our Fitness Classes are designed to help you achieve your fitness goals, whether you're a beginner or a seasoned athlete. With a variety of classes to choose from, you'll find the perfect workout to suit your style, schedule, and fitness level.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our Training Classes are designed to help you acquire new skills, enhance your knowledge, and advance your career. With a focus on practical application and hands-on learning, our classes provide a comprehensive and engaging learning experience.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
            Get fit, feel great, and reach your goals with our variety of gym classes! Our classes are designed to suit all fitness levels and interests, from high-energy cardio workouts to strength training and flexibility exercises.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
