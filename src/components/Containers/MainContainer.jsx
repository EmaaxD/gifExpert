import React from "react";

export const MainContainer = ({ children }) => {
  return (
    <div className="w-full md:w-4/5 lg:w-2/3 mx-auto mt-10">
      <div className="px-10 md:px-3">{children}</div>
    </div>
  );
};
