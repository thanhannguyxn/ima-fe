import { useEffect, useState } from 'react';
import Header from '../components/header/Header';

const InventoryInPage = () => {
  const [inventoryIn, setInventoryIn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching inventory in data from an API
    const fetchInventoryIn = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/inventory-in');
        const data = await response.json();
        setInventoryIn(data);
      } catch (error) {
        console.error('Error fetching inventory in:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventoryIn();
  }, []);

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading inventory in...</p>
        ) : (
          <ul>
            {inventoryIn.map((item) => (
              <li key={item.id}>{item.name} - {item.quantity}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default InventoryInPage;