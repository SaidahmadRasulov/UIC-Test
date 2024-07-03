<template>
  <div>
    <ControlPanel :title="title" />
    <Items />
  </div>
</template>
<script>
import Items from "@/components/Items.vue";
import ControlPanel from "@/components/layout/ControlPanel.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let title = ref("Search or Add New Project");
    return {
        title
    }
  },
});
</script>
<style lang=""></style>
