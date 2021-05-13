<template>
  <div>
    <div class="container">
      <Header />
      <slide-y-down-transition :duration="700">
        <Nuxt />
      </slide-y-down-transition>
    </div>
  </div>
</template>

<script>
import Header from "@/layouts/default-components/header.vue";
import { SlideYDownTransition } from "vue2-transitions";
export default {
  components: {
    SlideYDownTransition,
    Header
  }
};
</script>
