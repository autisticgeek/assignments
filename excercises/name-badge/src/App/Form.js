import React from "react";
import { connect } from "react-redux";
import {addBadge} from "../redux";

const mapStateToProps = state => {
    return state
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            givenName: '',
            familyName: '',
            email: '',
            PoB: '',
            phone: '',
            food: '',
            about: ''
        }
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    handleSubmit(event) {
        event.preventDefault();
        const { givenName, familyName, email, PoB, phone, food, about } = event.target
        const newState ={
            givenName: givenName.value,
            familyName: familyName.value,
            email: email.value,
            PoB: PoB.value,
            phone: phone.value,
            food: food.value,
            about: about.value
        };
        this.setState(newState);
        this.props.addBadge(newState);
        this.setState(this.initialState);
        
    }
    render() {
        const { givenName, familyName, email, PoB, phone, food, about } = this.state;
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Given Name" name="givenName" autoComplete='given-name' defaultValue={givenName} />
                <input type="text" placeholder="Family Name" name="familyName" autoComplete='family-name' defaultValue={familyName} />
                <input type="email" placeholder="Email" name="email" autoComplete='email' defaultValue={email} />
                <input type="text" placeholder="Place of Birth" name="PoB" defaultValue={PoB} />
                <input type="text" placeholder="phone" name="phone" autoComplete='tel-national' defaultValue={phone} />
                <input type="text" placeholder="FAVORITE FOOD" name="food" defaultValue={food} />
                <textarea placeholder="Tell us about yourself" rows="5" name="about" defaultValue={about}></textarea>
                <div style={{gridColumn:"span 2", textAlign:"center"}}><input type="submit" /></div>
            </form>
        )
    }
}


export default connect(mapStateToProps, { addBadge })(Form);