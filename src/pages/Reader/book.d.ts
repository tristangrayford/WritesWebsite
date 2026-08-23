export type BookMeta = {
  id: string;
  author: string;
  bookId: string;
  title: string;
  blurb: string;
  thumbUrl: string;
};

export type Chapter = {
  index: number;
  title: string;
  content: string;
  bookId: string;
};
