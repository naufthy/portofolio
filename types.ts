
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  objectPosition?: string;
}

export interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  postUrl: string;
}
