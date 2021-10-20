import { useSpring } from "framer-motion";
import { BottomWrap } from "./BottomWrap";
import { TopComp } from "./TopComp";

const Main = () => {
  const y = useSpring(0);
  return (
    <div className="outer--wrapper">
      <main id="main">
        <BottomWrap y={y} />
        <TopComp y={y} />
      </main>
    </div>
  );
};
export { Main };