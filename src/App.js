import React, { Component } from 'react';
import '../src/assets/css/index.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

import Blog from "./components/blog";
import BlogArticle from "./components/blog-article";
import Directory from "./components/directory";
import DirectorySearch from "./components/directory-search";
import FeaturesNotes from "./components/features-notes";
import FeaturesOnlineSession from "./components/features-online-session";
import FeaturesPage from "./components/features-page";
import FeaturesPayment from "./components/features-payment";
import FeaturesScheduling from "./components/features-scheduling";
import HelpCenter from "./components/help-center";
import HelpArticle from "./components/help-article";
import HelpCenterDetail from "./components/help-center-detail";
import Home from "./components/home";
import Pricing from "./components/pricing";
import ViewProvider from "./components/view-provider";
import Landing from "./components/landing";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route
                path='/'
                component={Home}
            />
            <Route
                path='/home'
                component={Landing}
            />
            <Route
                path='/help-article'
                component={HelpArticle}
            />
            <Route
                path='/help-center-detail'
                component={HelpCenterDetail}
            />
            <Route
                path='/help'
                component={HelpCenter}
            />
            <Route
                path='/blog'
                component={Blog}
            />
            <Route
                path='/blog-article'
                component={BlogArticle}
            />
            <Route
                path='/features-payment'
                component={FeaturesPayment}
            />
            <Route
                path='/features-scheduling'
                component={FeaturesScheduling}
            />
            <Route
                path='/features-page'
                component={FeaturesPage}
            />
            <Route
                path='/features-notes'
                component={FeaturesNotes}
            />
            <Route
                path='/features-online-session'
                component={FeaturesOnlineSession}
            />
            <Route
                path='/view-provider'
                component={ViewProvider}
            />
            <Route
                path='/directory-search'
                component={DirectorySearch}
            />
            <Route
                path='/directory'
                component={Directory}
            />
            <Route
                path='/pricing'
                component={Pricing}
            />
            <Redirect
                to='/'
            />

          </Switch>
        </Router>
    );
  }
}
export default App;
