<template>
<div>
  <div class="wrapper">
    <h2 class='month-name'> November </h2>
  </div>
  <calendarView :todoItems="todoItems" />
</div>
</template>

<script>
import CalendarView from '../components/calendarView.vue';
export default {
  name: 'Home',
  components: {
    CalendarView
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
