import { defineStore } from 'pinia'
export const useArticlesStore = defineStore('articles', () => {
  const allArticles = reactive([])

  const articlesCount = computed(() => {
    return allArticles.length
  })

  function addArticle(article) {
    allArticles.push(article)
  }


  return { allArticles, articlesCount, addArticle }
})