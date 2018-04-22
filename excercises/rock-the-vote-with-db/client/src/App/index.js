import React from 'react';
import allArticles from './allArticles'
import articleFull from './articleFull'

import { Route, Switch } from 'react-router';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={allArticles} />
            <Route path='/article/:id' component={articleFull} />  </Switch>
    )
}

export default App;