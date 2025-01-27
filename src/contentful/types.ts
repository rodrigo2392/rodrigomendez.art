export interface Category {
  fields: {
    name: string;
    description: string;
  };
  sys: {
    id: string;
  };
}

export interface Photo {
  fields: {
    title: string;
    description: string;
    slug: string;
    aspect: "horizontal" | "vertical" | "square";
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    category: Category;
  };
  sys: {
    id: string;
    createdAt: string;
  };
}

export interface Section {
  fields: {
    title: string;
    photos: Photo[];
    fitPosition: number;
    position: number;
    border: boolean;
    category?: Category;
  };
  sys: {
    id: string;
  };
}
