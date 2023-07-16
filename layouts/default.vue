<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n({ useScope: 'global' })

useHead({
  htmlAttrs: {
    lang: locale,
  },
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - Jerard Pelaez ` : 'Jerard Pelaez'
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Personal site about Jerard Pelaez.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', content: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/328655063_1343717913047071_5090388974252053977_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEdof3yc2EJv1rnHxBBHXTfX6upwD5AQFFfq6nAPkBAUdIc9GsxfsIKPhKnTFUHP2psF7JNUKgPh4dJES7oupcr&_nc_ohc=NRgGnFyLc5QAX-H1SY3&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfBC_UgM6HnMwxKbymPvDDh4GUj8sFFTGBTyvJPFyGLVTQ&oe=64B8EC1F' }
    ],
  link: [
    {
      rel: 'icon', type: 'image/png', href: '../images/icon.jpg',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
    <CookieBar />
  </main>
</template>
