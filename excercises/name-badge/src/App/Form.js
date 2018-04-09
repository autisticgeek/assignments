import React from "react";
import { connect } from "react-redux";
import addBadge from "../redux";



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
        this.setState({
            givenName:event.target
        })
        //   this.props.addBadge(this.state);
        //   this.setState(this.initialState);
        console.log(this.state)                
    }
    render() {
        const { givenName, familyName, email, PoB, phone, food, about } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Given Name" name="givenName" autoComplete='given-name' defaultValue={givenName} />
                <input type="text" placeholder="Family Name" name="familyName" autoComplete='family-name' defaultValue={familyName} />
                <input type="email" placeholder="Email" name="email" autoComplete='email' defaultValue={email} />
                <input type="text" placeholder="Place of Birth" name="PoB" defaultValue={PoB} />
                <input type="text" placeholder="phone" name="phone" autoComplete='tel' defaultValue={phone} />
                <input type="text" placeholder="FAVORITE FOOD" name="food" defaultValue={food} />
                <textarea placeholder="Tell us about yourself" rows="5" name="about" defaultValue={about}></textarea>
                <input type="submit" />
            </form>
        )
    }
}


export default connect(null, { addBadge })(Form);