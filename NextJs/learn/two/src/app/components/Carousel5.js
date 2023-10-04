import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const BreakpointSlides = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const Carousel5 = ({ deviceType }) => {


    return (
        <Carousel
            responsive={BreakpointSlides}
            ssr
            deviceType={deviceType}
            infinite
            itemClass="carousel-item"
            autoPlay
        >
            <Image
                alt="Gundam"
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                priority
                layout="responsive"
                width={700}
                height={475}
            />
            <Image
                alt="Musgo"
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                priority
                layout="responsive"
                width={700}
                height={475}
            />
            <Image
                alt="Musgo"
                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                priority
                layout="responsive"
                width={700}
                height={475}
            />
        </Carousel>
    );
};


export default Carousel5;
