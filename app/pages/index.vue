<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-index', () =>
  queryCollection('project').order('name', 'ASC').all())

// frontmatter `featured: true` wins; otherwise the first three alphabetically
const cards = computed(() => {
  const all = projects.value ?? []
  const flagged = all.filter(p => p.featured)
  return (flagged.length ? flagged : all).slice(0, 3)
})
</script>

<template>
  <section class="hero">
    <h1>David Mindlin</h1>
    <p class="tagline">
      Full-stack software engineer — web platforms, live systems, and game UX.
    </p>
    <p class="lede">
      LA-based. Platform and infrastructure work at Datadog and Unified
      Residential Management; M.S. in Game Design &amp; Development at USC, where
      I performed game design, programming, UX, and usability for a variety of games projects.
    </p>
    <p class="cta">
      <NuxtLink to="/projects">browse the projects →</NuxtLink>
    </p>
  </section>

  <section aria-labelledby="selected-work">
    <h2 id="selected-work">Selected work</h2>
    <ul class="project-grid">
      <li v-for="p in cards" :key="p.path">
        <ProjectCard
          :name="p.name"
          :description="p.description"
          :image="p.image"
          :tags="p.tags"
          :path="p.path"
        />
      </li>
    </ul>
    <p><NuxtLink to="/projects">all projects →</NuxtLink></p>
  </section>

  <section aria-labelledby="contact">
    <h2 id="contact">Find me elsewhere</h2>
    <ul class="contact-links">
      <li><a href="mailto:davidmindlin4@gmail.com">davidmindlin4@gmail.com</a></li>
      <li><a href="https://github.com/dmind44">github.com/dmind44</a></li>
      <li><a href="https://www.linkedin.com/in/david-mindlin">linkedin.com/in/david-mindlin</a></li>
    </ul>
  </section>
</template>

<style scoped>
.hero {
  padding-block: var(--space-5) var(--space-6);
}

.hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.2rem);
  margin-block: 0 var(--space-3);
}

.tagline {
  font-size: 1.25rem;
  color: var(--muted-foreground);
  margin: 0 0 var(--space-3);
}

.lede {
  max-width: 40rem;
  margin: 0 0 var(--space-4);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-5);
  margin: 0 0 var(--space-4);
  padding: 0;
  list-style: none;
}

.contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
