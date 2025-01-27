import { getCategories, getPhotos } from "@/contentful";
import CategoriesList from "@/components/Categories";
import localFont from "next/font/local";
import Photos from "@/components/Photos";
const Styrinea = localFont({ src: "./styrenea.woff2" });
const FamilyNormal = localFont({ src: "./family-light.woff2" });
const FamilyItalic = localFont({ src: "./family-light-italic.woff2" });

export default async function Home() {
  const categories = await getCategories();
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
      {categories && <CategoriesList isMain categories={categories} />}
      {photos && <Photos photos={photos} />}
      <div className="border-b pb-8 md:pb-16 space-y-8 md:space-y-16"></div>
      <div className="w-full text-center mt-10">
        <h1 className={`text-4xl  ${Styrinea.className}`}>SOBRE MÍ</h1>
      </div>
      <div className="flex flex-1">
        <div className={` text-2xl  ${Styrinea.className} mt-10`}>
          <p className="px-6 text-xl xl:px-0">
            Soy Rodrigo Méndez, vivo en Guadalajara Jalisco México, soy un
            apasionado fotógrafo con 2 años de experiencia, especializado en
            capturar la esencia de productos, la belleza de los viajes, la
            autenticidad de las personas y la personalidad única de las
            mascotas. Mi objetivo es contar historias a través de cada imagen,
            logrando que quienes las vean se conecten con ellas y se sientan
            bien consigo mismos. Cada sesión fotográfica es una oportunidad para
            transmitir emociones y crear recuerdos inolvidables.
          </p>
          <div className="mt-10 px-6 xl:px-0">
            <p>Contacto:</p>
            <p className="pt-4">
              <a href="mailto:rmendez.foto@gmail.com">rmendez.foto@gmail.com</a>
            </p>
            <p className="pt-4">
              <a href="https://wa.me/+523321214680">Whatsapp</a>
            </p>
            <p className="pt-4">
              <a href="tel:+523321214680">Número de teléfono</a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
