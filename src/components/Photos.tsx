import { Photo } from "@/contentful/types";
import LightboxComponent from "./LightBox";
interface Props {
  photos: Photo[];
  wall?: boolean;
}
export default function Photos({ photos, wall }: Props) {
  return <LightboxComponent wall={wall} images={photos} />;
}
