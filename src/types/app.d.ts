import { StaticImageData } from "next/image";

declare namespace AppType {
    interface PlayList {
        image: StaticImageData;
        likes: number;
        link: string;
    }
    interface Producer {
        image: StaticImageData;
        name: string;
        likes: number;
        link: string;
    }
}