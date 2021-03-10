<template>
  <li class="lead">
    <span class="fa-li">
      <i class="fas fa-angle-right"></i>
    </span>
    <a
      :class="{
        'text-primary': link.active,
        'text-secondary': !link.active
      }"
      :href="link.path">
      {{ link.name }}
    </a>
  </li>
</template>

<script>
  export default {
    name: 'NavMenuItem',
    props: {
      link: {
        type: Object,
        required: true
      }
    }
  }
</script>