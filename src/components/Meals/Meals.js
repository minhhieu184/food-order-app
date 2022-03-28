import React from 'react';

import MealSumary from './MealSumary'
import AvailableMeals from './AvailableMeals';

import useCart from '../../hooks/useCart';

const Meals = () => {

    return (
        <>
            <MealSumary />
            <AvailableMeals />
        </>
    );
}

export default Meals;
