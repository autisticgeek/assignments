import React from "react";
import { connect } from "react-redux";
import { addBadge } from "../redux";

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
        this.enableSubmit = this.enableSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const { givenName, familyName, email, PoB, phone, food, about } = event.target
        const newState = {
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
        event.target.reset()

    }
    enableSubmit(event) {
        const { name, value } = event.target
        this.setState(() => {
            return { [name]: value }
        })
        console.log(this.state)
        if (this.state.givenName.length < 3 && this.state.familyName.length < 3) {
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('submit').disabled = true;
        }

    }
    render() {
        const { givenName, familyName, email, PoB, phone, food, about } = this.state;
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit} id="form">
                <input type="text" placeholder="Given Name" name="givenName" autoComplete='given-name' defaultValue={givenName} onChange={this.enableSubmit} />
                <input type="text" placeholder="Family Name" name="familyName" autoComplete='family-name' defaultValue={familyName} onChange={this.enableSubmit} />
                <input type="email" placeholder="Email" name="email" autoComplete='email' defaultValue={email} onChange={this.enableSubmit} />
                <input type="text" placeholder="Place of Birth" name="PoB" defaultValue={PoB} onChange={this.enableSubmit} />
                <input type="text" placeholder="phone" name="phone" autoComplete='tel-national' defaultValue={phone} onChange={this.enableSubmit} />
                <input type="text" placeholder="FAVORITE FOOD" name="food" defaultValue={food} onChange={this.enableSubmit} />
                <textarea placeholder="Tell us about yourself" rows="5" name="about" defaultValue={about} onChange={this.enableSubmit} ></textarea>
                <div style={{ gridColumn: "span 2", textAlign: "center" }}><input id="submit" type="submit" disabled="true" /></div>
            </form>
        )
    }
}


export default connect(mapStateToProps, { addBadge })(Form);