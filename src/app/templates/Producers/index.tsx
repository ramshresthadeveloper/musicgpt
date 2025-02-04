import image1 from "@app/assets/images/image1.png";
import image2 from "@app/assets/images/image2.jpg";
import image3 from "@app/assets/images/image3.png";
import AppCarousel from "@app/components/Carousel";
import Item from "./Item";
import { AppType } from "@app/types/app";
const Producers = () => {
    const items: AppType.Producer[] = [
        {
            image: image1,
            name: "Drake",
            likes: 3000000,
            link: "#"
        },
        {
            image: image2,
            name: 'Candy Beats',
            likes: 300000,
            link: "#"
        },
        {
            image: image3,
            name: "Drake",
            likes: 500000,
            link: "#"
        },
        {
            image: image1,
            name: 'Candy Beats',
            likes: 300000,
            link: "#"
        },
        {
            image: image2,
            name: "Drake",
            likes: 300000,
            link: "#"
        },
        {
            image: image3,
            name: 'Candy Beats',
            likes: 5000000,
            link: "#"
        },
        {
            image: image1,
            name: "Drake",
            likes: 3000000,
            link: "#"
        },
        {
            image: image2,
            name: 'Candy Beats',
            likes: 3000000,
            link: "#"
        },
        {
            image: image3,
            name: "Drake",
            likes: 5000000,
            link: "#"
        }
    ];
    return (
        <>
            <div className="py-5">
                <div className="title-section mb-3">
                    <h2 className="text-white text-[20px]">Top Producers</h2>
                    <p className="text-[#777A80]">Most successful producers on MusicGPT</p>
                </div>
                <AppCarousel itemsPerPage={8} loop={false}>
                    {items?.length > 0 && items.map((item, index: number) => (<Item key={index} item={item} />))}
                </AppCarousel>
            </div>
        </>
    );
}
export default Producers;