import { createRouter, createWebHistory } from 'vue-router'
import QuizNewView from "@/views/QuizNewView";
import QuizView from "@/views/1QuizView";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'quiz-new',
      component: QuizNewView
    },

    {
      path: '/:lang/:id',
      name: 'quiz',
      component: QuizView
    },

  ]
})

export default router
