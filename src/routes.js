import Acasa from './components/index.vue'
import Forum from './components/forum.vue'
import Magazin from './components/shop.vue'
import Vot from './components/vote.vue'
import LogIn from './components/login.vue'
import LogOut from './components/logout.vue'
import Register from './components/register.vue'

export default[
  {path: '/', component: Acasa},
  {path: '/forum', component: Forum},
  {path: '/magazin', component: Magazin},
  {path: '/vot', component: Vot},
  {path: '/log-in', component: LogIn},
  {path: '/log-out', component: LogOut},
  {path: '/register', component: Register}
]
