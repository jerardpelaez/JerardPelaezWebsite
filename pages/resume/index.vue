<script setup>
useHead({
  title: 'Resume',
})

const resume = '/images/resume-new.jpg'

</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>


    <section class="clients">
      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <div class="flex-container">
            <div style="margin-right: 1em;" class="child">
              <img style="filter: none !important;" :src="resume" alt="Certificate Item" size>
            </div>
          </div>
        </li>
      </ul>
      <h1 style="color: white"><a :href="`https://drive.google.com/file/d/1Q0bZ9BuiFYPHeWCl2ZFYsRr_W9q7I0pC/view?usp=sharing`" download="download" target="_blank">Download Resume</a></h1>
    </section>
  </article>
</template>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.child {
  width: 100%;
  height: auto;
  padding: 2em;
}

img {
  border-radius: 20px;
}
</style>