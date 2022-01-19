import React from 'react';
import './Home.css';
import Background from '../../assets/background.jpg';
import Background2 from '../../assets/background2.jpg';
import Background3 from '../../assets/background3.PNG';
import Products from '../Products/Products';

export default function Home() {
    return (
        <div className="hero">
             <div>
                <form class="form-outer">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Products here...." aria-label="Search" />
                    <button class="btn  btn-outline-dark my-sm-0 " id="search" type="submit"><i className="fa fa-search me-1"></i></button>
                </form>
            </div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={Background3} class="d-block w-100" alt="First Slider" height="550px" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="fw-bolder">Children's Fashion</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Background2} class="d-block w-100" alt="Second Slider" height="550px" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="fw-bolder">Men's Fashion</h1>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Background} class="d-block w-100" alt="Third Slider" height="550px"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="fw-bolder">Women's Fashion</h1>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <Products />
        </div>
    )
}
