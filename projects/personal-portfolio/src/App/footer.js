import React from "react";
//import { Link } from 'react-router-dom';
import axios from "axios"

let clientCity = null;
export default class Footer extends React.Component {
    // constructor(props) {
    //     super(props);

    // }

    componentDidMount() {
        axios.get('https://ipapi.co/json').then(response => {
            console.log(response.data)
            clientCity = response.data.city;
        })
    }
    render() {
        return (
            <footer>
                <div className="container flex-around">
                    <div>&copy; Steven Blakely</div>
                    <div><a href="">EMAIL</a></div>
                    <div>{clientCity}</div>
                </div>
            </footer>
        )
    }
}