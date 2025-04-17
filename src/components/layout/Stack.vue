<template>
  <div class="stack-tags grid grid-cols-1 md:grid-cols-3 gap-4">
    <div
      v-for="(group, index) in techStack"
      :key="index"
    >
      <span class="text-green-400">// {{ group.category }}</span>
      <ul class="list-none mt-2">
        <li v-for="(tech, techIndex) in group.items" :key="techIndex">
          [{{ tech }}]
        </li>
      </ul>
    </div>
    <div class="md:col-span-3 mt-2">{{ $t('about.stackWP') }}</div>
  </div>
</template>

<script setup>
const techStack = [
  {
    category: '🧩 Frameworks & Platforms',
    items: [
      '⚛️ React',
      '🖼️ Vue',
      '🔂 Next.js',
      '🌱 Nuxt.js',
      '🌐 WordPress'
    ]
  },
  {
    category: '🎨 Styling & Design',
    items: [
      '🌬️ Tailwind CSS',
      '💅 Sass',
      '🎨 Figma'
    ]
  },
  {
    category: '🧪 Testing & State',
    items: [
      '🔁 React Query',
      '🧪 Jest',
      '🧫 Testing Library'
    ]
  },
  {
    category: '⚙️ Tooling & Build',
    items: [
      '📐 TypeScript',
      '🌀 Vite',
      '📦 Webpack',
      '👨‍💻 Git',
      '🔎 ESLint',
      '🎯 Prettier'
    ]
  },
  {
    category: '☁️ DevOps',
    items: [
      '👑 Node.js',
      '☁️ Amazon AWS',
      '🐳 Docker',
      '⚙️ GitHub Actions'
    ]
  }
]
</script>

<style lang="scss">
.text-green-400 {
  color: $limeHighlight;
}
</style>
