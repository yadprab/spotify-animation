import { motion, MotionValue } from "framer-motion";
import { ButtonComp } from "./ButtonComp";
import { data } from "./data";
import { Projects } from "./Projects";

const BottomWrap = ({ y }: { y: MotionValue<any> }) => {
  return (
    <motion.div
      className="bottom-wrapper"
       style={{ y }}
      drag="y"
      dragConstraints={{ top: -1080, bottom: 0 }}
      dragElastic={0.5}
      transition={{ duration: 1.5 }}
     
    >
      <ButtonComp />
      <Projects data={data} />
    </motion.div>
  );
};
export { BottomWrap };
