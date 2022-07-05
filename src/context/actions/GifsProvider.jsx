import { useEffect, createContext, useReducer } from "react";

import { LOADING_GIFS, SET_GIFS, ERROR_GIFS, REMOVE_GIFS } from "../types";
import { gifReducer, initialState } from "../redurcer/gifReducer";
import { getId } from "../../utils/getId";
import axios from "axios";

export const gifContext = createContext();

export const GifsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gifReducer, initialState);

  useEffect(() => {
    (function () {
      if (state.gifs.length === 0) {
        handleGetGifs();
      }
    })();
  }, []);

  const handleGetGifs = async (gifTitle = "dragon") => {
    let repet = false;

    state.gifs.forEach((gif) => {
      if (gif.title.includes(gifTitle.toLocaleLowerCase())) {
        repet = true;
        return;
      }
    });

    if (repet) {
      repet = false;
      dispatch({
        type: ERROR_GIFS,
        payload: "No se puede ingresar el mismo gifs dos veces :c",
      });
      return;
    }

    try {
      dispatch({
        type: LOADING_GIFS,
      });

      const url = `https://api.giphy.com/v1/gifs/search?api_key=QfonFp71pACWWvndr2VNR2dcivRY2stX&q=${gifTitle}&limit=10`;

      const {
        data: { data },
      } = await axios.get(url);

      const resultGif = {
        id: getId(),
        title: gifTitle.toLocaleLowerCase(),
        gifs: data.map((img) => ({
          gif: img.images.downsized_medium.url,
          title: img.title,
        })),
      };

      dispatch({
        type: SET_GIFS,
        payload: resultGif,
      });
    } catch (error) {
      console.log("error get gifs", error);
      dispatch({
        type: ERROR_GIFS,
        payload: error.message,
      });
    }
  };

  return (
    <gifContext.Provider
      value={{
        firstLoading: state.firstLoading,
        loading: state.loading,
        gifs: state.gifs,
        error: state.error,
        handleGetGifs,
      }}
    >
      {children}
    </gifContext.Provider>
  );
};
