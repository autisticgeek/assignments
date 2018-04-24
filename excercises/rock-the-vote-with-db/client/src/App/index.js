import React from 'react';
import allArticles from './allArticles';
import articleFull from './articleFull';
import newArticle from './newArticle';
import Header from './header'

import { Route, Switch } from 'react-router';

const App = () => {
    return (<div>
        <Header />
        <Switch>
            <Route exact path='/' component={allArticles} />
            <Route path='/article/:id' component={articleFull} />
            <Route path='/new' component={newArticle} />
        </Switch></div>
    )
}

export default App;