import Fade from "react-reveal/Fade";

import { CardGif } from "../UI/CardGif";
import { TitleCardGif } from "../UI/Titltes";

export const GifResult = ({ id, title, gifs }) => {
  return (
    <>
      <Fade bottom collapse>
        <div className="flex flex-col gap-2 pt-5 pb-10">
          <TitleCardGif text={title} idGroupGif={id} />

          <div className="flex justify-between flex-wrap gap-5 mt-5">
            {gifs?.map((item, index) => (
              <CardGif key={index} {...item} />
            ))}
          </div>
        </div>
      </Fade>
    </>
  );
};
