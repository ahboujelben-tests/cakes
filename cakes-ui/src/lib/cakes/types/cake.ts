export interface Cake {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: YumFactor;
}

type YumFactor = 1 | 2 | 3 | 4 | 5;
