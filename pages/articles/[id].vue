<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="card w-96 lg:w-1/2 bg-base-100 shadow-xl m-6">
      <div class="card-body">
        <h2 class="card-title">{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useArticlesStore } from '@/stores/articles'
const route = useRoute()

const store = useArticlesStore()

const article = store.allArticles.find((ar) => ar.id === route.params.id)
</script>
