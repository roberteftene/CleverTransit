import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReviewsPage from './containers/ReviewsPage/ReviewsPage'
import ProfilePage from './containers/ProfilePage/ProfilePage';
import HomePage from './containers/HomePage/HomePage';
import AboutUsPage from './containers/AboutUsPage/AboutUsPage';

export default function Routes() {
    return (
        <Router>

            {/* Here will be all the paths
                For more details visit: https://reactrouter.com/web/guides/quick-start
            */}
            <Route path="/reviews" exact component={ReviewsPage}></Route>
            <Route path="/profile" exact component={ProfilePage}></Route>
            <Route path="/aboutus" exact component={AboutUsPage}></Route>
            <Route path="/" exact component={HomePage}></Route>

        </Router>


    )
}