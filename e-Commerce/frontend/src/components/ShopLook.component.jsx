import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/pagination'; // Optional: For pagination dots
import './css/ShopLook.css'; // Custom styles for positioning hotspots
import { Pagination } from "swiper/modules";

const ShopLook = () => {
    return (
        <div className="text-center" style={{ overflowX: "hidden", marginTop:"7rem", marginBottom:"6rem" }}>
            {/* Title Section */}
            <h2 className="mb-2">Shop the look</h2>
            <p className="text-muted">
                Inspire and let yourself be inspired, from one unique fashion to another.
            </p>

            {/* Image Section */}
            <div className="d-none d-md-flex row mt-4 no-gutters">
                {/* Left Image */}
                <div className="col-md-6 position-relative image-container mb-4 mb-md-0">
                    <img
                        src="src/assets/lookbook-3.jpg"
                        alt="Fashion 1"
                        className="w-100"
                    />
                    <div className="hotspot" style={{ top: '62%', left: '45%' }}>
                        <span></span>
                    </div>
                    <div className="hotspot" style={{ top: '81%', left: '60%' }}>
                        <span></span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-6 position-relative image-container">
                    <img
                        src="src/assets/lookbook-4.jpg"
                        alt="Fashion 2"
                        className="w-100"
                    />
                    <div className="hotspot" style={{ top: '17%', left: '55%' }}>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* Swiper for smaller screens */}
            <div className="d-md-none mt-4">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="shoplook-swiper "
                >
                    <SwiperSlide className=' position-relative image-container'>
                        <img
                            src="src/assets/lookbook-3.jpg"
                            alt="Fashion 1"
                            className="img-fluid"
                        />
                        <div className="hotspot" style={{ top: '62%', left: '45%' }}>
                            <span></span>
                        </div>
                        <div className="hotspot" style={{ top: '81%', left: '60%' }}>
                            <span></span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' position-relative image-container'>
                        <img
                            src="src/assets/lookbook-4.jpg"
                            alt="Fashion 2"
                            className="img-fluid"
                        />
                        <div className="hotspot" style={{ top: '17%', left: '55%' }}>
                            <span></span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ShopLook;