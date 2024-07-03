<template>
  <div class="items_content px-4" v-if="store.filteredItems.length > 0">
    <Item
      draggable="true"
      v-for="item in store.filteredItems"
      :key="item.id"
      :item="item"
      @click="handleReplace(item)"
    />
  </div>
  <div v-else>
    <img src="" alt="Rasm" />
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Item from "./Item.vue";

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
  components: {
    Item,
  },
  setup() {
    const store = useMainStore();
    const router = useRouter();

    const handleReplace = (item: Item) => {
      router.replace(`/${item.id}`);
    };

    const startDrag = (item: Item) => {
      console.log("Item ", item);
    };

    return {
      store,
      startDrag,
      handleReplace,
    };
  },
});
</script>

<style>
.items_content {
  height: 60vh;
  background-color: #00897b;
  width: 50%;
  margin: 0 auto;
  min-height: 10vh;
}
</style>
