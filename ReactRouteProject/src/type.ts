export type VanType = {
  id: string;
  name: string;
  description:string;
  price: number;
  imageUrl: string;
  type: "Simple" | "Luxury" | "Rugged";
  hostId:string
}[];

 export class FetchError extends Error {
  status: number;
  statusText: string;

  constructor(message: string, status: number, statusText: string) {
    super(message);
    this.status = status;
    this.statusText = statusText;
  }
}