import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Blog from "./blog";
import BlogArticle from "./blog-article";
import Directory from "./directory";
import Landing from "./landing";
import Pricing from "./pricing";
import DirectorySearch from "./directory-search";
import FeaturesNotes from "./features-notes";
import FeaturesOnlineSession from "./features-online-session";
import FeaturesPage from "./features-page";
import FeaturesPayment from "./features-payment";
import FeaturesScheduling from "./features-scheduling";
import HelpArticle from "./help-article";
import HelpCenter from "./help-center";
import HelpCenterDetail from "./help-center-detail";
import ViewProvider from "./view-provider";
import FeaturesOnlineDevices from "./features-devices";
import WhyUs from "./why-us";
import HelpSearchResults from "./help-searh-results";
import Contacts from "./contacts";
import RequestDemo from "./request-demo";


function Body() {
    return (
        <Switch>
            <Route
                path='/home'
                component={Landing}
            />
            <Route
                path='/help-center'
                component={HelpCenter}
             />
            <Route
                path='/help-article/:id'
                component={HelpArticle}
            />
            <Route
                path='/help-center-detail/:slug'
                component={HelpCenterDetail}
            />
            <Route
                path='/help-search-results/:slug'
                component={HelpSearchResults}
            />
            <Route
                path='/blog/:slug?'
                component={Blog}
            />
            <Route
                path='/blog-article/:id'
                component={BlogArticle}
             />
            <Route
                path='/why-us'
                component={WhyUs}
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
                path='/features-online-devices'
                component={FeaturesOnlineDevices}
            />

            <Route
                path='/view-provider/:id?'
                component={ViewProvider}
            />
            <Route
                path='/directory-search/:slug?'
                component={DirectorySearch}
            />
            <Route
                path='/pricing'
                component={Pricing}
            />
            <Route
                path='/directory'
                component={Directory}
            />
            <Route
                path="/contact"
                component={Contacts}
            />
            <Route
                path="/request-demo"
                component={RequestDemo}
            />

            <Redirect
                to='/home'
            />
        </Switch>
    );
}

export default Body;
