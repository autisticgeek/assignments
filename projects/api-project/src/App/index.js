
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import UTAFrontrunner from "./images/UTA-Frontrunner.png";
import UTAtrax from "./images/UTA-Trax.png";

import Frontrunner from "./Frontrunner";
import Blue from "./Blue";
import Red from "./Red";
import Green from "./Green";
import All from "./All";

function App(props) {
    return (
        <div>
            <nav className="flex-around">
                <Link to="/"><img src={UTAFrontrunner} alt="" style={{"display":"block"}}/>Frontrunner</Link>
                <Link to="/blue"><img src={UTAtrax} alt="" style={{"display":"block"}}/>Blue Line</Link>
                <Link to="/red"><img src={UTAtrax} alt="" style={{"display":"block"}}/>Red Line</Link>
                <Link to="/green"><img src={UTAtrax} alt="" style={{"display":"block"}}/>Green Line</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Frontrunner} />
                <Route path="/blue" component={Blue} />
                <Route path="/red" component={Red} />
                <Route path="/green" component={Green} />
                <Route path="/all" component={All} />

            </Switch>
        </div>
    )
}

export default App;