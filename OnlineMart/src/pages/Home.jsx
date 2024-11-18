import {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/Home.css'
import FeaturedCarousel from '../components/FeaturedCarousel';

const Home = () => {

    // home page product state
    const [products, setProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    // load the data when mounted
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => 
            {
                setProducts(response.data);
                setFeaturedProducts(response.data.slice(0, 5));
        
            }
        )
        .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div className='home-container'>
            <FeaturedCarousel products={featuredProducts}/>
            <h2>All Products</h2>
            <div className='product-grid'>
                {products.map(product => (<ProductCard key={product.id} product={product}/>
            ))}
            </div>

        </div>
    );
};

export default Home;