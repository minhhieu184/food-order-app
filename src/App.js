import React from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

import Basic from './Basic'

function App() { 

    return (
        <CartProvider>
            <Header />
            <Meals />
        </CartProvider>

        // <Basic></Basic>
    );
}

export default App;
