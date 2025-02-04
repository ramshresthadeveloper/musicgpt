import image1 from "@app/assets/images/image1.png";
import image2 from "@app/assets/images/image2.jpg";
import image3 from "@app/assets/images/image3.png";
import AppCarousel from "@app/components/Carousel";
import Item from "./Item";
import { AppType } from "@app/types/app";
const Featured = () => {
    const items: AppType.PlayList[] = [
        {
            image: image1,
            likes: 3000000,
            link: "#"
        },
        {
            image: image2,
            likes: 300000,
            link: "#"
        },
        {
            image: image3,
            likes: 500000,
            link: "#"
        },
        {
            image: image1,
            likes: 300000,
            link: "#"
        },
        {
            image: image2,
            likes: 300000,
            link: "#"
        },
        {
            image: image3,
            likes: 5000000,
            link: "#"
        },
        {
            image: image1,
            likes: 3000000,
            link: "#"
        },
        {
            image: image2,
            likes: 3000000,
            link: "#"
        },
        {
            image: image3,
            likes: 5000000,
            link: "#"
        }
    ];
    return (
        <>
            <div className="py-5">
                <AppCarousel itemsPerPage={6} loop={false}>
                    {items?.length > 0 && items.map((item, index: number) => (<Item key={index} item={item} />))}
                </AppCarousel>
            </div>
        </>
    );
}
export default Featured;