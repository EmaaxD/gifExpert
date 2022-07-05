import Fade from "react-reveal/Fade";

export const CardGif = ({ gif, title }) => {
  return (
    <>
      <Fade cascade>
        <div className="w-full md:w-72 bg-white flex flex-col rounded-lg shadow-md p-2 cursor-pointer group transition-all hover:scale-105">
          <div className="w-full h-96 md:h-44">
            <img
              src={gif}
              className="w-full h-full object-cover rounded-md"
              loading="lazy"
              alt="gif image"
            />
          </div>

          <div className="py-3 text-center">
            <h4 className="text-gray-600 text-sm">{title}</h4>
          </div>
        </div>
      </Fade>
    </>
  );
};
