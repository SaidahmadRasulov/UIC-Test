<template>
  <div class="item" @click="$emit('click')">
    <h3>{{ item.title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

interface Item {
  id: number;
  title: string;
  complete: boolean;
  tasks: Todo[];
}

export default defineComponent({
  props: {
    item: {
      type: Object as () => Item,
      required: true,
    },
  },
});
</script>

<style scoped>
.item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: white;
  cursor: pointer;
}
</style>
