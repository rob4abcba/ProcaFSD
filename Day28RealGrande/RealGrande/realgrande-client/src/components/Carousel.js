const Carousel = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/imgs/1.jpg" class="d-block w-100" alt="1.jpg" />
          </div>
          <div class="carousel-item">
            <img src="/imgs/2.jpg" class="d-block w-100" alt="2.jpg" />
          </div>
          <div class="carousel-item">
            <img src="/imgs/3.jpg" class="d-block w-100" alt="3.jpg" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
