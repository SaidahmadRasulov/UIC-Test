<template>
  <div>
    <ControlPanel :title="title" :item="item" />
    <div class="items_content px-4">
      <Todo v-for="todo in item.tasks" :item="item" />
    </div>
  </div>
</template>
<script>
import ControlPanel from "@/components/layout/ControlPanel.vue";
import { ref } from "vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useMainStore } from "@/stores";
import Todo from "@/components/Todo.vue";
export default defineComponent({
  setup() {
    let title = ref("Search or Add New Task");
    const route = useRoute();
    const id = route.params.id;
    const store = useMainStore();
    let item = store.getElement(id);
    console.log(item)
    return {
      title,
      item,
    };
  },
});
</script>
<style lang=""></style>
