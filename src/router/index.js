import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login';
import MainPage from '@/components/main-page';
import Hello from '@/components/hello-world';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: MainPage,
      children: [
        {
          path: 'hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: '*',
          component: Hello
        }
      ]
    }
  ]
});
