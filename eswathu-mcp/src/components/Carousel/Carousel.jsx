import { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides = [], className = '' }) => {
  const [current, setCurrent] = useState(0);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__slide">
        <div className="carousel__content">
          {slide.subtitle && <p className="carousel__subtitle">{slide.subtitle}</p>}
          {slide.heading && <h2 className="carousel__heading">{slide.heading}</h2>}
          {slide.description && <p className="carousel__desc">{slide.description}</p>}
          {slide.actions && (
            <div className="carousel__actions">
              {slide.actions}
            </div>
          )}
        </div>
      </div>

      {slides.length > 1 && (
        <div className="carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

