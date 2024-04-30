import { useState } from "react";

export default function Button(props: { children: string }) {
  const [disabled, setDisabled] = useState<boolean>();

  return (
    <button
      className={`p-2 rounded-lg text-white bg-blue-700 ${
        disabled ? "bg-gray-400" : "hover:bg-blue-500"
      }`}
      onClick={() => setDisabled(true)}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
}
