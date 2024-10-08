import * as Pages from '@/pages';

export const routes = [
  // Home
  { path: '/', component: <Pages.Home /> },

  // Not Found
  { path: '*', component: <Pages.NotFound /> },
];

export default routes;
