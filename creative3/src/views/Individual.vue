<template>
<div class='wrapper'>
  <div class="individual-menu">
    <div class="menu-header">
      <p> Sort By Employee </p>
    </div>
    <div class="menu-list">
      <div class="menu-item"><a @click="select('Daniel')" href="#" class="menu-link">Daniel</a></div>
      <div class="menu-item"><a @click="select('Sadie')" href="#" class="menu-link">Sadie</a></div>
      <div class="menu-item"><a @click="select('Tyler')" href="#" class="menu-link">Tyler</a></div>
      <div class="menu-item"><a @click="select('Jeffery')" href="#" class="menu-link">Jeffery</a></div>
    </div>
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
      name: 'Daniel',
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
    },
  }
}
</script>

<style scoped>
.individual-menu{
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  border-bottom: 5px solid #31475e;
}
.menu-list{
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.menu-list a{
  font-size: 15px;
  text-decoration: none;
}
.menu-header{
  display: flex;
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
}
.menu-item{
  display: flex;
}

@media (min-width: 768px) {
  .menu-header{
    font-size: 30px;
  }
  .menu-list a{
    font-size: 22px;
  }
}
@media (min-width: 1280px){
  .menu-header{
    font-size: 35px;
  }
  .menu-list a{
    font-size: 28px;
  }
}
</style>