<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center" v-if="store.allArticles.length === 0">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Ничего нет =(</h1>
        <p class="py-6">Добавьте статью, и она отобразится в списке</p>
        <NuxtLink to="/articles/create">
          <button class="btn btn-primary">Создать</button>
        </NuxtLink>
      </div>
    </div>
    <div v-else>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl my-4"
        v-for="article in articlesOnPage"
        v-bind:key="article.id">
          <div class="card-body">
            <h2 class="card-title">{{ article.title.slice(0, 30) }}</h2>
            <p>{{ article.description.slice(0, 200) }}</p>
            <div class="card-actions justify-end">
              <NuxtLink :to="`/articles/${article.id}`"><button class="btn btn-primary">Открыть статью</button></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center join mt-6">
        <button class="join-item btn" v-if="page > 2" @click="page = 1">1</button>
        <button class="join-item btn" v-if="page > 1" @click="page = page - 1">
          {{ page - 1 }}
        </button>
        <button class="join-item btn btn-active">{{ page }}</button>
        <button
          class="join-item btn"
          v-if="totalPages > page"
          @click="page = page + 1"
        >
          {{ page + 1 }}
        </button>
        <button class="join-item btn" v-if="totalPages > page + 1">...</button>
        <button
          class="join-item btn"
          v-if="page < totalPages - 1"
          @click="page = totalPages"
        >
          {{ totalPages }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useArticlesStore } from '@/stores/articles'

const store = useArticlesStore()

const page = ref(1)

const totalPages = computed(() => {
  return Math.ceil(store.articlesCount / 10)
})

const articlesOnPage = computed(() => {
  return store.allArticles.slice((page.value - 1) * 10, page.value * 10)
})

</script>
