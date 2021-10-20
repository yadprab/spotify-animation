import { motion, MotionValue, useTransform } from "framer-motion";
import Img from "../Images/profile.png";

const TopComp = ({ y }: { y: MotionValue<any> }) => {
  const scale = useTransform(y, [-1080, 0], [0, 1]);
  const opacity = useTransform(y, [-1080, 0], [0, 1]);

  return (
    <motion.div className="Top--wrapper" style={{ opacity: opacity }}>
      <motion.div
        className="profile--wrapper"
        style={{ scale: scale, opacity: opacity }}
      >
        <img src={Img} alt="PROFILE" />
        <div className="info--wrapper">
          <h1>Theresa Webb</h1>
          <p>UI & UX DESIGNER</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
export { TopComp };
