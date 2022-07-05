import { useContext } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import Fade from "react-reveal/Fade";

import { gifContext } from "../../context/actions/GifsProvider";

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

export const TitleCardGif = ({ idGroupGif, text }) => {
  const { gifs, handleRemoveGifs } = useContext(gifContext);

  return (
    <>
      <Fade right>
        <div className="flex justify-between items-center">
          <h4 className="text-black text-2xl md:text-lg font-semibold first-letter:uppercase">
            {text}
          </h4>

          {gifs.length > 1 && (
            <button
              type="button"
              className="w-fit bg-red-500 p-2 rounded-full shadow-md transition-all hover:shadow-lg"
              onClick={() => handleRemoveGifs(idGroupGif)}
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </Fade>
    </>
  );
};
