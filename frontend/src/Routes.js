import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewsPage from './containers/ReviewsPage/ReviewsPage';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import HomePage from './containers/HomePage/HomePage';
import LandingPage from './containers/LandingPage/LandingPage';
import AboutUsPage from './containers/AboutUsPage/AboutUsPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';

export default function Routes() {
    return (
        <Router>
            {/* Here will be all the paths
                For more details visit: https://reactrouter.com/web/guides/quick-start
            */}
            <Switch>
                <Route path="/reviews" exact component={ReviewsPage}></Route>
                <Route path="/profile" exact component={ProfilePage}></Route>
                <Route path="/home" exact component={HomePage}></Route>
                <Route path="/" exact component={LandingPage}></Route>
                <Route path="/aboutus" exact component={AboutUsPage}></Route>
                <Route path="/login" exact component={LoginPage}></Route>
                <Route path="/register" exact component={RegisterPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </Router>
    );
}
