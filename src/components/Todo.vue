<template>
  <div
    class="border-b-sm d-flex justify-between w-100 align-center"
  >
    <h1
      :class="{ 'text-decoration-line-through': todo.complete }"
      class="w-100 text-white"
    >
      {{ todo.title }}
    </h1>
    <div class="item_control text-h5 d-flex ga-2">
      <i
        class="bx bx-trash pa-2 text-white rounded-lg cursor-pointer"
        @click="handleDeleteItem(todo)"
      ></i>
      <i
        @click="handleToggleComplete(todo)"
        :class="
          todo.complete
            ? 'bx bx-check-square cursor-pointer text-white rounded-lg pa-2'
            : 'bx bx-checkbox text-white cursor-pointer rounded-lg pa-2'
        "
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores";
import { defineComponent } from "vue";

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}


export default defineComponent({
  props: {
    item: {
      type: Object as () => Todo,
      required: true,
    },
  },
  setup(props) {
    const store = useMainStore();
    let todo = props.item

    const handleToggleComplete = (todo: Todo) => {
      store.handleToggleComplete(todo);
    };

    const handleDeleteItem = (todo: Todo) => {
      store.handleDeleteItem(todo);
    };

    return {
      handleToggleComplete,
      handleDeleteItem,
    };
  },
});
</script>
