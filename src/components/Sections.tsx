import { Section } from "@/contentful/types";
import LightboxComponent from "./LightBox";
import localFont from "next/font/local";
interface Props {
  section: Section;
}

const Styrinea = localFont({ src: "../app/styrenea.woff2" });

export default function Photos({ section }: Props) {
  return (
    <div
      className={`${
        section.fields.border ? "border-b border-black pb-8" : ""
      }  text-center ${Styrinea.className}`}
    >
      {section.fields.title && (
        <h1 className="text-3xl mb-10 mt-10 tracking-widest">
          {section.fields.title?.toLocaleUpperCase()}
        </h1>
      )}
      <LightboxComponent images={section.fields.photos} />
      <div className="text-right mt-10">
        {section.fields.category && (
          <a
            className="text-lg tracking-widest "
            href={`category/${section.fields.category.sys.id}`}
          >
            VER MÁS
          </a>
        )}
      </div>
    </div>
  );
}
