import { JSX } from 'react'; 

export interface ShareData {
  text?: string;
  title?: string;
  url?: string;
}

export type PartialIconItem = Partial<IconItem> | boolean;

export interface Sites {
  [key: string]: PartialIconItem;
}

export interface RWebShareProps {
  children: any;
  closeText?: string;
  data: ShareData;
  sites?: Sites;
  onClick?;
  disableNative?;
  customUrlOpener?;
}

export interface SocialIconsProps {
  onClose;
  closeText?: string;
  sites: Sites;
  data: Required<ShareData>;
  onClick?;
  customUrlOpener?;
}

export interface IconProps {
  onClose;
  name: string;
  data: Required<ShareData>;
  onClick?;
  customIconProps?: PartialIconItem;
  customUrlOpener?;
}

export interface IconItem {
  path: JSX.Element;
  e;
  color: string;
  viewBox?: string;
}
