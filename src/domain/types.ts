export interface Article {
  id: string;
  title: string;
  body: string;
  published: Date;
}

export interface Admin {
  id: string;
  name: string;
  description?: string;
}
