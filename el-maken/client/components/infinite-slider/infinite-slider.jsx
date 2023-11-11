"use client"
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./slider.css"
const Slider = () => {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel.children];
        console.log(wrapper);
        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3000);
        }
        autoPlay();
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);
    }, [])

    return (
        <div className="body">
            <div className="wrapper">
                <i id="left" className="fas fa-angle-left"></i>
                <ul className="carousel">
                    <li className="card">
                        <div className="img">
                            <img src="alumni 1.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 2.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 3.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 4.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 5.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 6.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 7.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img" >
                            <img src="alumni 8.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 9.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 10.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 11.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 12.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 13.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 14.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 15.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                    <li className="card">
                        <div className="img">
                            <img src="alumni 16.webp" alt="img" draggable="false" />
                        </div>
                    </li>
                </ul>
                <i id="right" className="fas fa-angle-right"></i>
            </div>
        </div>
    )
}
export default Slider;