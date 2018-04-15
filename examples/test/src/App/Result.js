import React from "react";
import axios from "axios"

class Result extends React.Component {
    constructor(props) {
        super();
        this.state ={
            fullURL:''
        }
    }

    componentDidMount() {
         function getAllUrlParams() {
             // get query string from url (optional) or window
            let queryString = window.location.search.slice(1);
            // we'll store the parameters here
            let obj = {};
            // if query string exists
            if (queryString) {
                 // stuff after # is not part of query string, so get rid of it
                queryString = queryString.split('#')[0];
                // split our query string into its component parts
                let arr = queryString.split('&');
                for (let i = 0; i < arr.length; i++) {
                    // separate the keys and the values
                    let a = arr[i].split('=');
                    // in case params look like: list[]=thing1&list[]=thing2
                    let paramNum = undefined;
                    let paramName = a[0].replace(/\[\d*\]/, function (v) {
                        paramNum = v.slice(1, -1);
                        return '';
                    });

                    // set parameter value (use 'true' if empty)
                    let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                    // (optional) keep case consistent
                    paramName = paramName.toLowerCase();
                    paramValue = paramValue.toLowerCase();

                    // if parameter name already exists
                    if (obj[paramName]) {
                        // convert value to array (if still string)
                        if (typeof obj[paramName] === 'string') {
                            obj[paramName] = [obj[paramName]];
                        }
                        // if no array index number specified...
                        if (typeof paramNum === 'undefined') {
                            // put the value on the end of the array
                            obj[paramName].push(paramValue);
                        }
                        // if array index number specified...
                        else {
                            // put the value at that index number
                            obj[paramName][paramNum] = paramValue;
                        }
                    }
                    // if param name doesn't exist yet, set it
                    else {
                        obj[paramName] = paramValue;
                    }
                }
            }

            return obj;
        }
    


const query = getAllUrlParams().q
this.setState({fullURL : `https://vschool-cors.herokuapp.com?url=https://api.musixmatch.com/ws/1.1/artist.search?page_size=3&apikey=e0ce8f51b72f1a24a9b489dc2941f37c&q_artist=${query}`})
let resultArr
axios.get(this.state.fullURL).then(responce => {
    resultArr = responce.data.message.body
    console.log("resultArr", resultArr)
})
    }

render(){
    return (
        <div>


            {this.state.fullURL}


        </div>
    )
}}
export default Result