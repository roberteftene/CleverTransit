import react from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewsPage from './containers/ReviewsPage/ReviewsPage'

export default function Routes() {
    return (
        <Router>

            {/* Here will be all the paths
                For more details visit: https://reactrouter.com/web/guides/quick-start
            */}
            <Route path="/reviews" exact component={ReviewsPage}></Route>

        </Router>


    )
}