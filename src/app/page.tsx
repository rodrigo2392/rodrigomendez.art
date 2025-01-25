import { getCAtegories, getPhotos } from "@/contentful";
import CategoriesList from "@/components/Categories";
import localFont from "next/font/local";
const Styrinea = localFont({ src: "./styrenea.woff2" });
const FamilyNormal = localFont({ src: "./family-light.woff2" });
const FamilyItalic = localFont({ src: "./family-light-italic.woff2" });

export default async function Home() {
  const categories = await getCAtegories();
  const photos = await getPhotos();
  return (
    <div className="pb-28 max-w-screen-2xl m-auto">
      <div className={`mt-4 flex flex-1 justify-center gap-2`}>
        <h1 className={`text-text-h1  ${FamilyNormal.className}`}>Rodrigo</h1>
        <h1 className={`text-text-h1  ${FamilyItalic.className}`}> Méndez</h1>
      </div>

      <div className={`mt-5 flex flex-1 justify-center ${Styrinea.className}`}>
        <h1 className="text-4xl">FOTOGRAFÍA</h1>
      </div>
      {categories && <CategoriesList photos={photos} categories={categories} />}
    </div>
  );
}
