export interface DataItem {
    id: number;
    img: {
        src: string;
        alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
}
export type CardProps = {
    img: { src: string; alt: string };
    country: string;
    googleMapsLink: string;
    title: string;
    dates: string;
    text: string;
};