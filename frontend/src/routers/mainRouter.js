import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import allRoutes from '../routers/allRoutes';

const MainRouter = () => (
    <Router>
        <Switch>
            {allRoutes.map((route, idx) => {
                if(route.path === "/") return <Route exact key={idx} {...route} />
                return <Route key={idx} {...route} />
            })}
        </Switch>
    </Router>
);

export default MainRouter;