"use client";

import React from "react";
import Slider from "react-slick";

function Reviews({ styles }) {
  const reviews = [
    {
      id: 1,
      name: "Malcom",
      job: "Optical Doctor ",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      name: "Tiffany",
      job: "Software enginner",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 3,
      name: "Adegoke",
      job: "Fire fighter",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={` ${styles.sliders}`}>
      <Slider className="col-12 " {...settings}>
        {reviews.map(({ id, name, job, comment }) => (
          <section className={`${styles.contents} col-12`} key={id}>
            <p className="mb-5"> {comment} </p>
            <h6> {name} </h6>
            <small> {job} </small>
          </section>
        ))}
      </Slider>
    </div>
  );
}

export default Reviews;
