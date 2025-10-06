import React from "react";

import { IconProps } from "../../interfaces";
import { IconList } from "./list";

export default function Icon({ name, data, onClose, onClick, customIconProps, customUrlOpener }: IconProps) {
  const { path, viewBox = "0 0 24 24", color, e } = Object.assign({}, IconList[name], customIconProps);

  const standartOpener = (URL) => window.open(URL, "_blank", "noopener");

  const urlOpener = customUrlOpener || standartOpener;

  const handleOnButtonClicked = () => {
    onClick && onClick(name); // callback
    e(urlOpener, encodeURIComponent(data.url), data.text, data.title);
    onClose();
  };

  return (
    <button
      onClick={handleOnButtonClicked}
      aria-label={name}
      className="rws-icon"
      style={{ background: color }}
    >
      <svg fill="white" viewBox={viewBox}>
        {path}
      </svg>
    </button>
  );
}
