<template>
<div class='wrapper'>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Daniel')" href="#" class="pure-menu-link">Daniel</a></li>
      <li class="pure-menu-item"><a @click="select('Sadie')" href="#" class="pure-menu-link">Sadie</a></li>
      <li class="pure-menu-item"><a @click="select('Tyler')" href="#" class="pure-menu-link">Tyler</a></li>
      <li class="pure-menu-item"><a @click="select('Jeffery')" href="#" class="pure-menu-link">Jeffery</a></li>
    </ul>
  </div>
  <todoList :todoItems="todoItems" />
</div>
</template>

<script>
import todoList from "../components/todoList.vue"
export default {
  name: 'Browse',
  components: {
    todoList
  },
  data() {
    return {
      name: '',
    }
  },
  computed: {
    todoItems() {
      return this.$root.$data.todoItems.filter(todoItem => todoItem.name === this.name);
    }
  },
  methods: {
    select(name) {
      this.name = name;
    }
  }
}
</script>