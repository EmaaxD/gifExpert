import { TrashIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

export const TitlteApp = () => {
  return (
    <>
      <Fade top>
        <div className="flex flex-col py-5 px-5 text-center">
          <h1 className="text-3xl font-bold">Git Expert App</h1>
          <h5 className="text-black text-sm font-medium">
            Todos los gifs que quieras!!!
          </h5>
        </div>
      </Fade>
    </>
  );
};

export const TitleCardGif = ({ text }) => {
  return (
    <>
      <Fade right>
        <div className="flex justify-between items-center">
          <h4 className="text-black text-2xl md:text-lg font-semibold first-letter:uppercase">
            {text}
          </h4>
          <button type="button">
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </Fade>
    </>
  );
};
