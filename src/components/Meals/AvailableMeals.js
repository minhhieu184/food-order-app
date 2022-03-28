import React from 'react';
import { useState, useEffect } from 'react';
import useHttp from '../../hooks/useHttp';

import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);

    const {
        fetchData: fetchMeals,
        isLoading,
        error
    } = useHttp('https://udemy-http-request-85169-default-rtdb.firebaseio.com/meals.json')

    useEffect(() => {
        const fetchData = async () => {
            const dataRespond = await fetchMeals()
            const dataConverted = Object.keys(dataRespond).map(id => ({
                ...dataRespond[id + ''],
                id,
                price: dataRespond[id + ''].price * 1
            }))
            setMeals(dataConverted)
        }
        fetchData()
    }, [])

    let content
    if(isLoading){
        content = <p className={styles.loading}>Loading...</p>
    } else if (error){
        content = <p className={styles.error}>{error}</p>
    } else {
        content =
            <ul>
                {meals.map(meal => (
                    <MealItem
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                ))}
            </ul>
    }

    return (
        <Card className={styles.meals}>
            {content}
        </Card>
    );
}

export default AvailableMeals;
