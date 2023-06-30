import {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import WOW from 'wowjs';
import { Autoplay,Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './services.css';


const img1 = require('./img/testimonials-1.jpg');
const img2 = require('./img/testimonials-2.jpg');
const img3 = require('./img/testimonials-3.jpg');
const img4 = require('./img/testimonials-4.jpg');
const img5 = require('./img/testimonials-5.jpg');


export const Services = ()=>{

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    },[]);


    return(
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s">
                            <div className="icon"><i className="fas fa-desktop"></i></div>
                            <h4 className="title"><span>Lorem Ipsum</span></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".1s">
                            <div className="icon"><i className="fas fa-chart-bar"></i></div>
                            <h4 className="title"><span>Dolor Sitema</span></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".2s">
                            <div className="icon"><i className="fas fa-globe-africa"></i></div>
                            <h4 className="title"><span>Sed ut perspiciatis</span></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
                            <div className="icon"><i className="fas fa-image"></i></div>
                            <h4 className="title"><span>Magni Dolores</span></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".4s">
                            <div className="icon"><i className="fas fa-sliders-h"></i></div>
                            <h4 className="title"><span>Nemo Enim</span></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box wow slideInUp" data-wow-duration="1.4s" data-wow-delay=".5s">
                            <div className="icon"><i className="fas fa-sticky-note"></i></div>
                            <h4 className="title"><span>Eiusmod Tempor</span></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>
                </div>
            </section>
           
            <Testimonials />
        </>
    )
}


const Testimonials = ()=>{
    return(
        <section id="testimonials" className="testimonials section-bg">
            <div className="container" style={{paddingBottom:50}}>
    
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
        
                    <Swiper
                        breakpoints={{
                            640: {
                           
                            slidesPerView: 1,
                            },
                            768: {
                          
                            slidesPerView: 2,
                            },
                            1024: {
                          
                            slidesPerView: 3,
                            },
                        }}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[Autoplay,Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testimonial-item wow slideInUp">
                                <p>
                                    <i className="fas fa-quote-left me-1"></i>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <i className="fas fa-quote-right ms-1"></i>
                                </p>
                                <img src={img1} className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item wow slideInUp" data-wow-delay=".1s">
                                <p>
                                    <i className="fas fa-quote-left me-1"></i>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <i className="fas fa-quote-right ms-1"></i>
                                </p>
                                <img src={img2} className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item wow slideInUp" data-wow-delay=".2s">
                                <p>
                                    <i className="fas fa-quote-left me-1"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className="fas fa-quote-right ms-1"></i>
                                </p>
                                <img src={img3} className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item wow slideInUp" data-wow-delay=".3s">
                                <p>
                                    <i className="fas fa-quote-left me-1"></i>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    <i className="fas fa-quote-right ms-1"></i>
                                </p>
                                <img src={img4} className="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item wow slideInUp" data-wow-delay=".4s">
                                <p>
                                    <i className="fas fa-quote-left me-1"></i>
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <i className="fas fa-quote-right ms-1"></i>
                                </p>
                                <img src={img5} className="testimonial-img" alt="" />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                            </div>
                        </SwiperSlide>
                    
                    </Swiper>
            </div>
      </section>
    )
}