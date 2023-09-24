import { createRouter, createWebHistory } from 'vue-router';

import Api from '/src/pages/HelloWorld.vue';
import File from '/src/pages/FileInput.vue';

const routes = [
    {
      path: '/api',
      name: 'Api',
      component: Api,
    },
    {
      path: '/file',
      name: 'File',
      component: File,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;