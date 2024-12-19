import React from "react";

const Dots = ({ imgIdx, setImgIdx, imgs }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIdx(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIdx ? "bg-neutral-950" : "bg-neutral-400"
          }`}
        />
      ))}
    </div>
  );
};

export default Dots;
