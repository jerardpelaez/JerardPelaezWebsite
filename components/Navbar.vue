<script setup>

</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/experience" class="navbar-link">
          {{ $t('pageTitles.experience') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/projects" class="navbar-link">
          {{ $t('pageTitles.projects') }}
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/certificates" class="navbar-link">
          {{ $t('pageTitles.certificates') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
