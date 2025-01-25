"use client";

import { Category, Photo } from "@/contentful/types";
import LightboxComponent from "@/components/LightBox";
import { useState } from "react";
import localFont from "next/font/local";

interface Props {
  categories: Category[];
  photos: Photo[];
}

const Styrinea = localFont({ src: "../app/styrenea.woff2" });
export default function CategoriesList({ categories, photos }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <div
        className={`mt-20 mb-10 flex flex-1 flex-row gap-4 justify-center ${Styrinea.className}`}
      >
        <div>
          <a
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory("");
            }}
            className={`text-md ${
              selectedCategory === "" &&
              "underline-offset-8 decoration-1 underline"
            } hover:text-grey transition-colors duration-300 cursor-pointer tracking-widest`}
          >
            TODAS
          </a>
        </div>
        {categories.map((el) => (
          <div key={el.sys.id}>
            <a
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(el.sys.id);
              }}
              className={`text-md ${
                selectedCategory === el.sys.id &&
                "underline-offset-8 decoration-1 underline"
              } hover:text-grey transition-colors duration-300 cursor-pointer tracking-[0.05em]`}
            >
              {el.fields.name.toUpperCase()}
            </a>
          </div>
        ))}
      </div>

      {photos && (
        <LightboxComponent
          selectedCategory={selectedCategory}
          images={photos}
        />
      )}
    </>
  );
}
