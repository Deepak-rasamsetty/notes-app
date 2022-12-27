import React from "react";

export default function Gallery() {
  return (
    <div className="container" >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height={500}
              width={200}
              crop="crop"
              src="https://media.gettyimages.com/id/90777322/photo/english-electric-developed-several-notable-pioneering-computers-during-the-1950s-the-deuce.jpg?s=612x612&w=0&k=20&c=uVFbjjA-nzMlya3I5IapHZM6k1ySoGLgAH0ZX9Pny7Q="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              height={500}
              width={200}
              crop="crop"
              src="https://media.gettyimages.com/id/469050860/photo/a-working-enigma-cipher-machine-that-along-with-the-1942-56-page-notebook-belonging-to.jpg?s=612x612&w=0&k=20&c=kq6DgaPmBZM8O5lgyP_uC9AdJrercyCusuuTomlOAuk="
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              height={500}
              width={200}
              src="https://media.gettyimages.com/id/467506807/photo/bletchley-park-tour.jpg?s=612x612&w=0&k=20&c=0ZPVHMyuGVlpYQX6q8isBOmUUHVahvbH43em3GzDwCM="
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
