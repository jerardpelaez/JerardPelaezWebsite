<script setup>
useHead({
  title: 'Certificates',
})


const images = [
  { id: 1, src: '/images/cert1.jpg' },
  { id: 2, src: '/images/cert10.jpg' },
  { id: 3, src: '/images/cert11.jpg' },
  { id: 4, src: '/images/cert12.jpg' },
  { id: 5, src: '/images/cert13.jpg' },
  { id: 6, src: '/images/cert2.jpg' },
  { id: 7, src: '/images/cert3.jpg' },
  { id: 8, src: '/images/cert4.jpg' },
  { id: 9, src: '/images/cert5.jpg' },
  { id: 10, src: '/images/cert6.jpg' },
  { id: 11, src: '/images/cert7.jpg' },
  { id: 12, src: '/images/cert8.jpg' },
  { id: 13, src: '/images/cert9.jpg' },
]
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.certificates') }}
      </h2>
    </header>


    <section class="clients">
      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <div class="flex-container">
            <div style="margin-right: 1em;" v-for="image in images" :key="image.id" class="child">
              <img :src="image.src" alt="Certificate Item" size>
            </div>
          </div>
        </li>
      </ul>
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
  max-width: 40em;
  height: auto;
  padding: 2em;
}

img {
  border-radius: 20px;
}
</style>