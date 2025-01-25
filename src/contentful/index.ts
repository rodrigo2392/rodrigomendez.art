import { createClient } from "contentful";
import { Photo, Category } from "./types";
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const environment = process.env.NEXT_PUBLIC__ENVIRONMENT || "";

const client = createClient({
  accessToken,
  space,
  environment,
});

export const getCAtegories = async () => {
  const response = await client.getEntries({
    content_type: "category",
  });

  return response.items as unknown as Category[];
};

export const getPhotos = async () => {
  const response = await client.getEntries({
    content_type: "photo",
  });

  return response.items as unknown as Photo[];
};

export const getPhoto = async (id: string) => {
  const response = await client.getEntries({
    content_type: "photo",
    "fields.id": id,
  });

  return response.items;
};
