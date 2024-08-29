import Navbar from './Navigation/Navbar';
import Recommended from './Recommended/Recommended';
import Products from './Products/Products';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import { useState } from 'react';
import data from './Assets/data';

function App() {
    const [selected, setSelected] = useState(null);
    const [quary, setQuary] = useState('');

    // input filter
    const getValue = (e) => {
        setQuary(e.target.value);
    };

    const filtered = data.filter(({ title }) => title.toLowerCase().includes(quary.toLowerCase()));

    // Recommended selected
    const onClick = (e) => {
        setSelected(e.target.value);
    };

    // Category, price, color value get
    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    // filtering data by value
    function fetchData(selected, data, filtered) {
        let totalItems = data;

        if (selected) {
            totalItems = totalItems.filter(
                ({ color, company, category, newPrice }) => color === selected || category === selected || company.toLowerCase() === selected.toLowerCase() || newPrice === selected
            );
        }

        if (selected === 'all products' || selected === 'all') {
            totalItems = data;
        }

        if (quary) {
            totalItems = filtered;
        }

        return totalItems;
    }

    const products = fetchData(selected, data, filtered);

    return (
        <div className="App">
            <div className="sidebar-conatiner">
                <Sidebar handleChange={handleChange} />
            </div>
            <div className="main-container">
                <Navbar getValue={getValue} />
                <Recommended onClick={onClick} />
                <Products products={products} />
            </div>
        </div>
    );
}

export default App;
