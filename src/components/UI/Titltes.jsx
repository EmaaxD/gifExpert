import { TrashIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

export const TitlteApp = () => {
  return (
    <>
      <Fade top>
        <div className="flex justify-between items-center">
          <div className="flex flex-col py-5 px-5 text-center">
            <h1 className="text-3xl font-bold">Git Expert App</h1>
            <h5 className="text-black text-sm font-medium">
              Todos los gifs que quieras!!!
            </h5>
          </div>

          <div>
            <TrashIcon className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </Fade>
    </>
  );
};

export const TitleCardGif = ({ text }) => {
  return (
    <>
      <Fade right>
        <h4 className="text-black text-2xl md:text-lg font-semibold first-letter:uppercase">
          {text}
        </h4>
      </Fade>
    </>
  );
};
