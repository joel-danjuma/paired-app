import { SVGProps } from "react";
import { type ClientUploadedFileData } from "uploadthing/types";

export interface UploadedFile<T = unknown> extends ClientUploadedFileData<T> {}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
