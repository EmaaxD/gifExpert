import { useContext } from "react";
import Fade from "react-reveal/Fade";

import { gifContext } from "../../context/actions/GifsProvider";

export const InputSearch = ({ value, onHandleChange, onHandleSubmit }) => {
  const { error } = useContext(gifContext);

  return (
    <>
      <div className="w-full lg:w-1/2 h-28 rounded-lg px-8 flex flex-col justify-center items-center container-input">
        <form className="w-full" onSubmit={onHandleSubmit}>
          <input
            className="w-full bg-transparent text-gray-700 text-lg md:text-sm font-medium border border-gray-50 p-2 rounded-full transition-all hover:bg-gray-50 focus:outline-none"
            type="text"
            name="search"
            value={value}
            placeholder="Buscar gif..."
            onChange={onHandleChange}
          />

          <button type="submit" className="hidden">
            send
          </button>
        </form>

        {error && (
          <Fade bottom collapse>
            <div className="flex py-2">
              <p className="text-red-400 text-lg md:text-xs font-medium">
                {error}.
              </p>
            </div>
          </Fade>
        )}
      </div>
    </>
  );
};
