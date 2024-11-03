'use client ';
import { useState, useEffect } from 'react';

async function fetchMealsIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const firstKey = Object.keys(data)[0];
    const meals = data[firstKey];
    return meals || [];
  } catch (error) {
    console.error('Failed to fetch meal ideas:', error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    loadMeals(ingredient);
  }, [ingredient]);

  function loadMeals(ingredient) {
    fetchMealsIdeas(ingredient)
      .then((meals) => {
        setMeals(meals);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h2>Meal Ideas</h2>
      <div className='flex flex-row-reverse space-y-4 just '>
        <ul className='flex flex-row flex-wrap border-2 w-48 justify-center  space-x-4'>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className='flex  text-xs text-wrap rounded-s hover:text-green-600 hover:text-base hover:bg-red-600/50 flex-col items-center hover:scale-150'>
              <img
                className='w-28 h-28 object-cover rounded-lg '
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
