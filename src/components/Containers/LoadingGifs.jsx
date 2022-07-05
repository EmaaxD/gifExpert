import Fade from "react-reveal/Fade";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingGifs = () => {
  return (
    <>
      <Fade>
        <div className="flex flex-col gap-2 pt-5 pb-10">
          <Skeleton className="md:w-40" baseColor="#E2E2E2" />

          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1].map((item, index) => (
              <Fade cascade key={index}>
                <Skeleton className="w-full md:w-80 h-40" baseColor="#E2E2E2" />
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </>
  );
};

export const InputLoading = () => {
  return (
    <>
      <Fade>
        <Skeleton
          className="w-full md:w-80 h-20 rounded-lg px-8 flex flex-col justify-center items-center container-input"
          baseColor="#E2E2E2"
        />
      </Fade>
    </>
  );
};
