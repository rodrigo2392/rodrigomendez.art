"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import NextJsImage from "@/components/NextImage";
import { useEffect, useState } from "react";
import { Photo } from "@/contentful/types";

interface Props {
  images: Photo[];
  selectedCategory: string;
}
interface nextPhoto {
  src: string;
  width: number;
  heoght: number;
}
export default function LightboxComponent({ images, selectedCategory }: Props) {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<nextPhoto[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const newPhotos: nextPhoto[] = [];
    images?.map((el) => {
      const img = {
        src: el.fields.image.fields.file.url,
        width: 1200,
        heoght: 1200,
      };
      newPhotos.push(img);
    });
    setPhotos(newPhotos);
  }, [images]);
  return (
    <>
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
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((el, index) =>
          selectedCategory === "" ||
          selectedCategory === el.fields.category.sys.id ? (
            <div
              key={el.sys.id}
              className="px-4 mt-4 hover:opacity-50 cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Image
                alt={el.fields.titulo}
                src={`https:${el.fields.image.fields.file.url}`}
                width={1280}
                height={1280}
                className="w-full"
              />
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
