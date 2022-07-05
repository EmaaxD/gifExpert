import { CardGif } from "../UI/CardGif";
import { TitleCardGif } from "../UI/Titltes";

export const GifResult = ({ id, title, gifs }) => {
  return (
    <>
      <div className="flex flex-col gap-2 pt-5 pb-10">
        <TitleCardGif text={title} />

        <div className="flex flex-wrap gap-2">
          {gifs?.map((item, index) => (
            <CardGif key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
