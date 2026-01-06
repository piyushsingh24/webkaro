import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState("default"); 
  // default | text | heading | button

  useEffect(() => {
    // Disable cursor on mobile
    if (window.innerWidth < 768) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const detectHover = (e) => {
      if (e.target.closest("button, a")) {
        setHoverType("button");
      } else if (e.target.closest("h1, h2, h3")) {
        setHoverType("heading");
      } else if (
        e.target.closest("p, span, li, h4, h5, h6")
      ) {
        setHoverType("text");
      } else {
        setHoverType("default");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", detectHover);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", detectHover);
    };
  }, []);

  // Cursor size logic
  const ringSize =
    hoverType === "heading"
      ? 120
      : hoverType === "button"
      ? 100
      : hoverType === "text"
      ? 80
      : 48;

  return (
    <>
      {/* INNER DOT */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)`,
        }}
      >
        <div
          className={`rounded-full bg-[#4DFFF3] transition-all duration-150
          ${
            hoverType !== "default"
              ? "w-3 h-3"
              : "w-2 h-2"
          }`}
        />
      </div>

      {/* OUTER RING */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none border-[#1C7ED6]/60"
        style={{
          transform: `translate(${pos.x - ringSize / 2}px, ${
            pos.y - ringSize / 2
          }px)`,
        }}
      >
        <div
          className={`
            rounded-full
            border border-[#1C7ED6]/60
            mix-blend-difference
            transition-all duration-300 ease-out
          `}
          style={{
            width: ringSize,
            height: ringSize,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
