import Login from '../../components/Login'
import Register from '../../components/Register'

export default [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*', redirect: '/'
  },
]