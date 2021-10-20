import { useMotionValue } from "framer-motion";
import { BottomWrap } from "./BottomWrap";
import { TopComp } from "./TopComp";

const Main = () => {
  const y = useMotionValue(0);

  return (
    <div className="outer--wrapper">
      <main id="main">
        <TopComp y={y} />
        <BottomWrap y={y} />
      </main>
    </div>
  );
};
export { Main };
