import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import ItemList from './Layout/ItemList/ItemList';
import ItemDetails from './Layout/ItemDetails/ItemDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={ItemList} />
          <Route path="/items/:id" exact component ={ItemDetails} />
          <Route render={() => <h1>(404) This file cannot be found</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
