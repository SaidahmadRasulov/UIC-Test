<template>
  <div class="items_control_panel ga-6 justify-center w-75 mx-auto">
    <div class="w-50 mx-auto">
      <v-text-field
        :label="title"
        v-model="global_input"
        @input="searchProject"
      ></v-text-field>
    </div>
    <div class="d-flex align-center justify-center ga-2">
      <v-checkbox v-model="task_checkbox" label="Completed"></v-checkbox>
      <v-btn class="bg-teal-darken-1" @click="addProject">Add</v-btn>
      <v-btn class="bg-cyan-darken-1" @click="setTitle">Set Page Title</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMainStore } from "@/stores";

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
    title: {
      type: String,
      required: true,
    },
    item: {
      type: Object as () => Item,
      required: true,
    },
  },
  setup(props) {
    const title = props.title;
    const item = props.item;
    const global_input = ref("");
    const task_checkbox = ref(false);
    const store = useMainStore();

    const addProject = () => {
      const inputTitle = global_input.value.trim();

      if (inputTitle.includes("task")) {
        let new_todo: Todo = {
          id: Date.now(),
          title: inputTitle,
          complete: task_checkbox.value,
        };

        if (item && new_todo.title !== "") {
          store.addTodoToProject(item.id, new_todo);
        }
      } else {
        let new_task: Item = {
          id: Date.now(),
          title: inputTitle,
          complete: task_checkbox.value,
          tasks: [],
        };

        if (new_task.title !== "") {
          store.addNewProject(new_task);
        }
      }

      global_input.value = "";
      task_checkbox.value = false;
    };

    const setTitle = () => {
      store.setTitle(global_input.value);
    };

    const searchProject = () => {
      store.searchProject(global_input.value);
    };

    return {
      addProject,
      setTitle,
      searchProject,
      global_input,
      task_checkbox,
      title,
    };
  },
});
</script>

<style lang=""></style>
