import HomePage from '../pages/homePage';
import Login from '../pages/login';
import Register from '../pages/register'

const publicRoutes = [
    {path: '/', component: HomePage},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
]

// const privateRoutes = [
//     {path: '/login', component: LoginView},
//     {path: '/logout', component: LogoutView},
// ]

// const error_route_group = [
//     {component: Error404View}   // No path required
// ]

const allRoutes = [
    ...publicRoutes,
]

export default allRoutes;