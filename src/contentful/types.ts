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
    titulo: string;
    description: string;
    slug: string;
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
