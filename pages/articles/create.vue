<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Создание статьи</h1>
        <p class="py-6">Добавьте статью, и она отобразится в списке</p>
        <form>
          <input
            type="text"
            placeholder="Название"
            class="input input-bordered w-full max-w-xs m-2"
            v-model="articleForm.title"
          />
          <textarea
            class="textarea textarea-bordered w-full max-w-xs m-2"
            placeholder="Текст статьи"
            v-model="articleForm.description"
          />
        </form>
        <button class="btn btn-primary"
        @click="addArticle">Создать</button>
      </div>
    </div>
  </div>

</template>
<script setup>

import { useArticlesStore } from '@/stores/articles'
const store = useArticlesStore()
const router = useRouter()

const articleForm = reactive({
  title: "",
  description: "",
  id: Math.random().toString(36).substring(2, 8)
})

function addArticle() {
  store.addArticle(articleForm)
  router.push({ path: `/articles/${articleForm.id}` })
}
</script>
