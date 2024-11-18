import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import '../css/FeaturedCarousel.css'

const FeaturedCarousel = ({products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],    
    }
    return (
        <div className="carousel-container">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="carousel-item">
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <img src={product.image} alt={product.title} className="carousel-image" />
                  <h4>{product.title}</h4>
                  <p>${product.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      );
};

export default FeaturedCarousel;

