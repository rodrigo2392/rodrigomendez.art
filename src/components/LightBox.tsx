"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import NextJsImage from "@/components/NextImage";
import { useEffect, useState } from "react";
import { Photo } from "@/contentful/types";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

interface Props {
  images: Photo[];
}
interface nextPhoto {
  src: string;
  width: number;
  height: number;
}
interface wallPhoto {
  id: string | number;
  src: string;
  alt: string;
}
export default function LightboxComponent({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<nextPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      const newPhotos: nextPhoto[] = [];
      const newWallPhotos: wallPhoto[] = [];
      images?.map((el) => {
        const img = {
          id: el.sys.id,
          alt: el.fields.title ?? "",
          src: `${el.fields.image.fields.file.url}`,
          // 1368 * 2048
          width:
            el.fields.aspect === "horizontal" || el.fields.aspect === "square"
              ? 2048
              : 1368,
          height:
            el.fields.aspect === "vertical" || el.fields.aspect === "square"
              ? 2048
              : 1368,
        };
        newPhotos.push(img);
        newWallPhotos.push(img);
      });
      setPhotos(newPhotos);
    }
  }, [images]);
  return (
    <>
      {typeof window !== undefined && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={photos}
          index={currentIndex}
          render={{ slide: NextJsImage }}
          className="bg-white"
          styles={{
            container: { backgroundColor: "rgba(255,255,255,0.8)" },
            root: { backgroundColor: "rgba(255,255,255,0.1)" },
            navigationNext: { color: "#000" },
            navigationPrev: { color: "#000" },
            button: { color: "#000" },
          }}
          plugins={[Zoom, Fullscreen]}
          fullscreen={{ auto: false }}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 1,
          }}
        />
      )}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {images.map((el, index) => (
          <div
            key={el.sys.id}
            className={`${
              el.fields.aspect === "horizontal" && "col-span-2"
            } px-2 mb-5 hover:opacity-50 cursor-pointer`}
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          >
            <Image
              alt={el.fields.title}
              loading="eager"
              src={`https:${el.fields.image.fields.file.url}`}
              placeholder="blur"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg=="
              }
              width={
                // 352 * 440
                // 1368 * 2048
                el.fields.aspect === "horizontal" ||
                el.fields.aspect === "square"
                  ? 2048
                  : 1368
              }
              height={
                el.fields.aspect === "vertical" || el.fields.aspect === "square"
                  ? 2048
                  : 1368
              }
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
