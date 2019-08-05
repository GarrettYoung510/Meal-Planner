import React, { Component } from 'react';
import Axios from 'axios';
import 'pure-react-carousel/dist/react-carousel.es.css';

class BreakfastMealSelect extends Component {

    mealSelect = () => {
        Axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast")
            .then(response => {
                return response.meals
            })
            .catch(error => {
            console.log(error)
            })
    }

}

export default BreakfastMealSelect;