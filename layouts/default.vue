<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><NuxtLink to="/"><a>Главная</a></NuxtLink></li>
          <li><NuxtLink to="/articles"><a>Статьи</a></NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/articles"><a class="btn btn-ghost normal-case text-xl">Articles</a></NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/"><a>Главная</a></NuxtLink></li>
        <li><NuxtLink to="/articles"><a>Статьи</a></NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/articles/create"><a class="btn">Создать статью</a></NuxtLink>
    </div>
  </div>
  <slot/>
</template>
<script setup>

</script>
