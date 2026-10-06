import type { ImageResponse } from "next/og";
import { ogImageAlt, ogImageSize, renderOgImage } from "@/components/OgImage";

export const dynamic = "force-static";
export const alt = ogImageAlt("es");
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpengraphImage(): ImageResponse {
  return renderOgImage("es");
}
