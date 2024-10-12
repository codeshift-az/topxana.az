import * as Pages from '@/pages';

export const routes = [
  // Home
  { path: '/', component: <Pages.Home /> },

  //Contact
  { path: '/contact', component: <Pages.Contact /> },

  // Not Found
  { path: '*', component: <Pages.NotFound /> },
];

export default routes;
