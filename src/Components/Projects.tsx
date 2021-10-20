import { IData } from "../Interface/interface";
import { Icon } from "./Icon";

const Projects = ({ data }: { data: IData["state"] }) => {
  return (
    <>
      {data.map((d) => {
        return (
          <div className="project--wrapper" key={d.id}>
            <div className="inner--wrapper">
              <img src={d.thumbnail} alt="thumbnail" />
              <div className="project--info">
                <p>{d.project}</p>
                <small>{d.type}</small>
              </div>
            </div>
            <Icon />
          </div>
        );
      })}
    </>
  );
};
export { Projects };
