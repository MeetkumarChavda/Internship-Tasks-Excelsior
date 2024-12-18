import Swiper from './Swiper.component'


import { BsArrowUpRightCircle } from "react-icons/bs";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const ShopByCategory = () => {
    
  return (
    <section className='position-relative p-2 p-md-3'>
        <div className='fw-bold d-flex gap-3 py-3 justify-content-md-start justify-content-between'>
            <div className='d-none d-md-flex'>
                <AiOutlineLeftCircle className='fs-1 me-2' id='nav-left'/>
                <AiOutlineRightCircle className='fs-1 me-2' id='nav-right'/>
            </div>
            <h1 className='text-uppercase fs-2 fw-bold'>ShOp BY CATEGORIES</h1>
            <div className='d-md-none ms-1'>
                <AiOutlineLeftCircle className='fs-1 me-1'id='nav-left' />
                <AiOutlineRightCircle className='fs-1 me-1' id='nav-right'/>
            </div>
        </div>
        <div className='row g-2 '>
            <div className='col-12 col-md-8 col-lg-9'>
                <Swiper />
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-4">
                <div
                    className="rounded-3 p-lg-4 p-md-5 w-100 d-flex flex-lg-column flex-md-column align-items-center justify-content-md-center justify-content-lg-center justify-content-sm-around flex-sm-row discover-section justify-content-around"
                    style={{border:"2px solid black", height:'96%'}}
                >
                    <p className="fw-bold mb-3 text-center fs-5 fs-md-5  pt-sm-3 pt-3">
                        Discover all new items
                    </p>
                    <button className="btn">
                        <span style={{ fontSize: "1.5rem" }}>
                            <BsArrowUpRightCircle size={"40px"} />
                        </span>
                    </button>
                </div>
            </div>
        </div>       
    </section>
  )
}

export default ShopByCategory