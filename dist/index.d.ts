import React, { JSX } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ShareData {
    text?: string;
    title?: string;
    url?: string;
}
type PartialIconItem = Partial<IconItem> | boolean;
interface Sites {
    [key: string]: PartialIconItem;
}
interface RWebShareProps {
    children: any;
    closeText?: string;
    data: ShareData;
    sites?: Sites;
    onClick?: any;
    disableNative?: any;
    customUrlOpener?: any;
}
interface IconItem {
    path: JSX.Element;
    e: any;
    color: string;
    viewBox?: string;
}

declare const RWebShare: React.MemoExoticComponent<(props: RWebShareProps) => react_jsx_runtime.JSX.Element>;

interface IconListObject {
    [key: string]: IconItem;
}
declare const IconList: IconListObject;

export { IconList, RWebShare, type RWebShareProps };
