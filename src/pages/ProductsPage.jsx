import { useEffect, useState } from 'react';
import Header from '../components/header/Header';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simulate fetching products from an API
        const fetchProducts = async () => {
        try {
            // Replace with actual API call
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchProducts();
    }, []);
    
    return (
        <>
        <Header />
        <div>
            {loading ? (
            <p>Loading products...</p>
            ) : (
            <ul>
                {products.map((product) => (
                <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            )}
        </div>
        </>
    );

}

export default ProductsPage;
