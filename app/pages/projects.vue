<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('project').all())
</script>

<template>
  <h1>Projects</h1>
  <ul class="project-grid">
    <li v-for="p in projects" :key="p.path">
      <ProjectCard
        :name="p.name"
        :description="p.description"
        :image="p.image"
        :tags="p.tags"
        :path="p.path"
      />
    </li>
  </ul>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-5);
  margin: 0 0 var(--space-7);
  padding: 0;
  list-style: none;
}
</style>
