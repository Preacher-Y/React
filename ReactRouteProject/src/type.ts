export type VanType = {
  id: string;
  name: string;
  description:string;
  price: number;
  imageUrl: string;
  type: "Simple" | "Luxury" | "Rugged";
}[];