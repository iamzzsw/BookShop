export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

// export interface ExtendedBook {
//   error: string;
//   title: string;
//   subtitle: string;
//   authors: string;
//   publisher: string;
//   isbn10: string;
//   isbn13: string;
//   pages: string;
//   year: string;
//   rating: string;
//   desc: string;
//   price: string;
//   image: string;
//   url: string;
//   language: string;
//   pdf: {
//     "Chapter 2": string;
//     "Chapter 5": string;
//   };
//   count?: number;
// }
export interface ExtendedBook {
  error?: string;
  title: string;
  subtitle?: string;
  authors: string;
  publisher?: string;
  isbn10?: string;
  isbn13: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price: string;
  image: string;
  url: string;
  pdf?: {
    "Chapter 2": string;
    "Chapter 5": string;
  };
  language?: string;
}

export interface UserDefault {
  name: string;
  email: string;
  password: number;
}
