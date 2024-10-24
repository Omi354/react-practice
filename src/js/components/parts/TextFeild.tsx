import * as React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "date";
};

export const TextFlild: React.FC<Props> = ({
  label,
  value,
  onChange,
  type,
}) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        className="border"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};
