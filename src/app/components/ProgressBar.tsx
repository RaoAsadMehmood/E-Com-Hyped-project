import { useState } from "react";

export default function ProgressSlider() {
  const [progress, setProgress] = useState(25); // Initial progress (in %)

  const increase = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decrease = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div className="flex items-center justify-between w-full max-w-4xl px-4 py-4 bg-[#F5FCFD] rounded">
      {/* Left Arrow */}
      <button
        onClick={decrease}
        className="bg-[#F7A51E] w-10 h-10 flex items-center justify-center rounded text-white text-lg font-bold"
      >
        ←
      </button>

      {/* Progress Bar */}
      <div className="flex-1 mx-4 h-2 rounded-full  relative overflow-hidden">
        <div
          className="h-full bg-[#F7A51E] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={increase}
        className="bg-[#F7A51E] w-10 h-10 flex items-center justify-center rounded text-white text-lg font-bold"
      >
        →
      </button>
    </div>
  );
}
