<script setup lang="ts">
const colorMode = useColorMode()
function toggleTheme() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="site-header">
    <nav aria-label="Main">
      <NuxtLink to="/" class="brand">david64.dev</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/projects">projects</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <button
          type="button"
          class="theme-toggle"
          :aria-label="`Switch to ${colorMode.preference === 'dark' ? 'light' : 'dark'} theme`"
          @click="toggleTheme"
        >
          theme: {{ colorMode.preference }}
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--background);
  border-bottom: var(--border-width) solid var(--border);
  padding-block: var(--space-2);
  margin-bottom: var(--space-5);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.brand {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--foreground);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.nav-links a {
  color: var(--foreground);
  text-decoration: none;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.theme-toggle {
  font: inherit;
  color: var(--foreground);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.15rem var(--space-2);
  cursor: pointer;
}

.theme-toggle:hover {
  background: var(--primary);
  color: var(--primary-foreground);
}
</style>
