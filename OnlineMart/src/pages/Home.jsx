import {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {

    // home page product state
    const [products, setProducts] = useState([]);

    // load the data when mounted
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className='product-grid'>
                {products.map(product => (<ProductCard key={product.id} product={product}/>
            ))}
            </div>

        </div>
    );
};

export default Home;