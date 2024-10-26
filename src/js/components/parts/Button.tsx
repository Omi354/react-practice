import * as React from "react";

type Props = {
  onClick: () => void;
  color: "red" | "blue";
};

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  onClick,
  color,
  children,
}) => {
  const style = color === "red" ? "bg-red-400" : "bg-cyan-300";
  console.log("Buttonコンポーネントのレンダー");

  return (
    <button
      className={`border ml-2 ${style} px-2 rounded w-16 whitespace-nowrap w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
