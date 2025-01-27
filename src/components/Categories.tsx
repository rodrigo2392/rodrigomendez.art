"use client";
import { Category } from "@/contentful/types";
import localFont from "next/font/local";
import Link from "next/link";

interface Props {
  categories: Category[];
  isMain?: boolean;
  currentId?: string;
}

const Styrinea = localFont({ src: "../app/styrenea.woff2" });

export default function CategoriesList({
  categories,
  isMain,
  currentId,
}: Props) {
  return (
    <>
      <div
        className={`mt-5 md:mt-20 md:mb-10 flex flex-1 flex-row gap-4 justify-center ${Styrinea.className}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10  text-center">
          {categories.map((el, index) => (
            <div key={el.sys.id}>
              <Link
                href={
                  el.sys.id === "2EdUXN7bhIAFYTyZ5Gm0nn"
                    ? `/`
                    : `/category/${el.sys.id}`
                }
                className={`text-sm md:text-md ${
                  ((isMain && index === 0) || el.sys.id === currentId) &&
                  "underline-offset-8 decoration-1 underline"
                } hover:text-grey transition-colors duration-300 cursor-pointer tracking-[0] md:tracking-[0.05em]`}
              >
                {el.fields.name.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
