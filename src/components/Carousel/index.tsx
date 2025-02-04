import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
interface CarouselProps {
    itemsPerPage: number;
    loop?: boolean;
    children: React.ReactNode
    className?: string;
}
const AppCarousel = ({ itemsPerPage = 1, loop = true, children, className }: CarouselProps) => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className={className}
            containerClass="container-with-dots"
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite={loop}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: itemsPerPage,
                    partialVisibilityGutter: 40
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {children}
        </Carousel>
    );
}
export default AppCarousel;