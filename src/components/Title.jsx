import React from "react";

const title = ({ mainTitle, subTitle }) => {
  return (
    <div className="px-2 pt-6">
      <h1 className="text-3.5xl font-black text-white">{mainTitle}</h1>
      {subTitle && (
        <span className="block text-sm mt-3 text-black break-keep pr-9">
          {subTitle}
        </span>
      )}
    </div>
  );
};

export default title;
