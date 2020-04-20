export interface IItems {
  title: string;
  description: string;
  galery: string[];
}

export interface ICategory {
  category: string;
  list: IItems[];
}
