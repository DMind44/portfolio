<script setup lang="ts">
defineProps<{
  name: string
  description?: string
  image?: string
  tags?: string[]
  path: string
}>()
</script>

<template>
  <NuxtLink :to="path" class="project-card">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="`Cover art for ${name}`"
      width="640"
      loading="lazy"
      class="project-card__img"
    />
    <div class="project-card__body">
      <h2 class="project-card__title">{{ name }}</h2>
      <p v-if="description" class="project-card__desc">{{ description }}</p>
      <ul v-if="tags?.length" class="project-card__tags">
        <li v-for="t in tags" :key="t">{{ t }}</li>
      </ul>
    </div>
  </NuxtLink>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--card);
  color: var(--card-foreground);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-decoration: none;
}

.project-card__img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.project-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
}

.project-card__title {
  margin: 0;
  font-size: 1.25rem;
  color: var(--card-foreground);
}

.project-card__desc {
  margin: 0;
  color: var(--muted-foreground);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin: var(--space-1) 0 0;
  padding: 0;
  list-style: none;
}

.project-card__tags li {
  background: var(--secondary);
  color: var(--secondary-foreground);
  border-radius: var(--radius);
  padding: 0.1rem var(--space-2);
  font-size: 0.8125rem;
}

/* chips alternate the two riso inks: orange, teal */
.project-card__tags li:nth-child(2n) {
  background: var(--accent);
  color: var(--accent-foreground);
}

.project-card:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: no-preference) {
  .project-card {
    transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  }

  .project-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-lg);
  }
}
</style>
