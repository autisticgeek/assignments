import React from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
       const initState = {
        }
        this.state = initState;

    }

    componentDidMount() {
        axios.get('https://ipapi.co/json').then(response => {
            this.setState(() => response.data)
        })
    }
    render() {
        return (
            <footer>
                <div className="container flex-around">
                    <div>&copy; Steven M Blakely</div>
                    <div><a href="mailto:email@autisticgeek.com"><i class="far fa-envelope-open"></i></a></div>
                    <div style={{display:"flex", justifyContent:"space-between", minWidth:"2.5cm"}}>
                        <a href="https://github.com/autisticgeek"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/sblakely1/"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/autisticgeek"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/autisticgeek"><i class="fab fa-facebook-f"></i></a>
                        </div>
                </div>
            </footer>
        )
    }
}