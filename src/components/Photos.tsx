import { Photo } from "@/contentful/types";
import LightboxComponent from "./LightBox";
interface Props {
  photos: Photo[];
}
export default function Photos({ photos }: Props) {
  return <LightboxComponent images={photos} />;
}
