import { defineStore } from "pinia";

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

export const useMainStore = defineStore("main", {
  state: () => ({
    items: [] as Item[],
    filteredItems: [] as Item[],
    input_title: "" as string,
  }),
  actions: {
    addNewProject(new_task: Item) {
      if (new_task.title !== "") {
        this.items.push(new_task);
        this.filteredItems = this.items;
        console.log(this.items);
      } else {
        alert("Please fill all the gaps");
      }
    },
    addTodoToProject(projectId: number, new_todo: Todo) {
      const project = this.items.find(item => item.id === projectId);
      if (project) {
        project.tasks.push(new_todo);
        this.filteredItems = this.items;
        console.log('Todos: ',this.items);
      } else {
        alert("Project not found");
      }
    },
    searchProject(name: string) {
      if (name) {
        this.filteredItems = this.items.filter((item) =>
          item.title.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        this.filteredItems = this.items;
      }
    },
    handleToggleComplete(todo: Todo) {
      const item = this.items.find(item => item.tasks.includes(todo));
      if (item) {
        const task = item.tasks.find(t => t.id === todo.id);
        if (task) {
          task.complete = !task.complete;
        }
      }
    },
    handleDeleteItem(todo: Todo) {
      const item = this.items.find(item => item.tasks.includes(todo));
      if (item) {
        item.tasks = item.tasks.filter(t => t.id !== todo.id);
        this.filteredItems = this.items;
      }
    },
    setTitle(title: string) {
      document.title = title;
    },
    getElement(id: number) {
      return this.items.filter((item) => item.id == id);
    },
  },
  persist: true,
});
