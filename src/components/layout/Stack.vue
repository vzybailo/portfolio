<template>
  <section class="stack-tags">
    <ul class="flex flex-wrap mb-4">
      <li v-for="(tag, index) in tags" :key="index" class="tag transition duration-300 py-1 mr-6">
        {{ tag }}
      </li>
    </ul>
    <div>{{ $t('about.stackWP') }}</div>
  </section>
</template>

<script setup>
const tags = [
  // UI Frameworks & Platforms
  '[⚛️] React',
  '[🖼️] Vue',
  '[💨] Next.js',
  '[💊] Nuxt.js',
  '[🌐] WordPress',

  // Styling & Design
  '[🌬️] Tailwind CSS',
  '[💅] Sass',
  '[🎨] Figma',

  // Languages & Environment
  '[📐] TypeScript',
  '[🪄] Node.js',

  // Tooling & Build
  '[📦] Vite',
  '[🛠️] Webpack',
  '[👨‍💻] Git',
  '[🔎] ESLint',
  '[🎯] Prettier',

  // State & API Handling
  '[🔁] React Query',

  // Testing
  '[🧪] Jest',
  '[🧪] Testing Library',

  // DevOps & Monitoring
  '[☁️] Amazon AWS',
  '[🧰] Docker',
  '[🚦] GitHub Actions',
]
</script>

<style lang="scss">
.tag:hover {
    color: $blueBtn;
  }
</style>
