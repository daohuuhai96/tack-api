import Home from '../components/HelloWorld'
import user from './modules/user'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuthenticated
  },
  ...user
]

function requireAuthenticated(to, from, next) {
  const loggedIn = localStorage.getItem('user');

  if (!loggedIn) {
    return next('/login');
  }

  next();
}