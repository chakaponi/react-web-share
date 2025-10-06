import React from "react";

import { IconItem, PartialIconItem, SocialIconsProps } from "../interfaces";
import { CloseButton } from "./close";
import { Header } from "./header";
import Icon from "./icon";

export const SocialIcons = ({
  onClose,
  sites,
  data,
  closeText,
  onClick,
  customUrlOpener
}: SocialIconsProps) => (
  <section
    role="dialog"
    aria-modal="true"
    className="rws-container web-share-fade-in-up"
  >
    <Header title={data.title} />
    <div className="rws-icons">
      {Object.entries(sites).map(([name, iconProps]: [string, PartialIconItem]) => (
        <Icon
          name={name}
          key={name}
          data={data}
          onClose={onClose}
          onClick={onClick}
          customIconProps={iconProps}
          customUrlOpener={customUrlOpener}
        />
      ))}
    </div>
    <CloseButton onClose={onClose} closeText={closeText} />
  </section>
);
