import React, { Component } from 'react';
import Axios from 'axios';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MainCourseDropDown from './../../MainCourseDropDown'

class EntreMealSelect extends Component {
  
    state = {
      entre: []
    };

    mealSelect = () => {
        let select = MainCourseDropDown.state.choice;
        Axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + select)
            .then((res) => {
                this.setState({
                    entre = res
                })
            })
            .catch(error => {
            console.log(error)
            })
    }
}

export default EntreMealSelect;