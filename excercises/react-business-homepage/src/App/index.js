import React from 'react';
import Nav from "./Nav/";
import Header from "./Header/";
import Main from "./Main/"
import Footer from "./Footer/"

function App() {
    return (
        <div className="wrapper">
            <Nav/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );


}

export default App