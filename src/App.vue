<template>
  <NavbarLayout />
  <v-container>
    <RouterView />
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import NavbarLayout from "@/components/layout/NavbarLayout.vue";
export default defineComponent({
  components: { NavbarLayout },
});
</script>
<style lang=""></style>
