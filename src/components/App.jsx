import useGifs from "../hooks/useGifs";

import { TitlteApp } from "./UI/Titltes";
import { MainContainer } from "./Containers/MainContainer";
import { InputSearch } from "./UI/InputSearch";
import { GifResult } from "./Containers/GifResult";
import { InputLoading, LoadingGifs } from "./Containers/LoadingGifs";

function App() {
  const { firstLoading, loading, gifs, input, handleChange, handleSubmit } =
    useGifs();

  return (
    <div className="flex flex-col">
      <TitlteApp />

      <MainContainer>
        <div className="w-full flex justify-center">
          {firstLoading ? (
            <>
              <InputLoading />
            </>
          ) : (
            <InputSearch
              value={input}
              onHandleChange={handleChange}
              onHandleSubmit={handleSubmit}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 divide-y mt-20">
          {loading ? (
            <LoadingGifs />
          ) : (
            <>
              {gifs.map((item) => (
                <GifResult key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
