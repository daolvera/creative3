<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <todoList :todoItems="todoItems" />
</div>
</template>

<script>
import todoList from "../components/todoList.vue"
export default {
  name: 'Home',
  components: {
    todoList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    todoItems() {
      return this.$root.$data.todoItems.filter(todoItem => todoItem.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  background-color: #d3d3d3;
}
</style>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
