<template>
<div>
  <div class="wrapper">
    <div class='month-head'>
      <div class='month-header'>
        <h2 class='month-name'> November </h2>
      </div>
      <div class='task-list'>
        <div class='task-priority'>
          Priority: 
          <div class='low'>
            Low
          </div>
          <div class='medium'>
            Medium
          </div>
          <div class='high'>
            High
          </div>
        </div>
        <div class='task-name'>
          Responible Employee:
          <div class='Sadie'>
            Sadie
          </div>
          <div class='Tyler'>
            Tyler
          </div>
          <div class='Jeffery'>
            Jeffery
          </div>
          <div class='Daniel'>
            Daniel
          </div>
        </div>
      </div>
    </div>
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
.month-head{
  display: flex;
  width: 100%;
  flex-direction: column;
}
.month-header{
  display: flex;
  width: 100%;
  justify-content: center;
}
.task-list{
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
}
.task-priority{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
}
.task-name{
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  align-items: center;
}
.low, .medium, .high{
  display: flex;
}
.Tyler, .Sadie, .Daniel, .Jeffery{
	display: flex;
	justify-content: center;
	align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 25px;
  width: 50%;
}
.Tyler{
	background-color: rgb(0, 128, 255, .2);
}
.Sadie{
	background-color: rgb(255, 102, 255, .2);
}
.Daniel{
	background-color: rgb(0, 204, 0, .2);
}
.Jeffery{
	background-color: rgb(255, 255, 51, .2);
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
.low{
	display: flex;
	justify-content: center;
	color: green;
}
.medium{
	display: flex;
	justify-content: center;
	color: orange;
}
.high{
	display: flex;
	justify-content: center;
	color: red;
}
@media (min-width: 768px) {
  .task-list{
    flex-direction: row;
    font-size: 20px;
  }
  .task-priority{
    flex-direction: column;
    width: 50%;
  }
  .Tyler, .Sadie, .Daniel, .Jeffery{
    height: 40px;
    width: 60%;
  }
  .month-head h2{
    font-size: 32px;
  }
}
@media (min-width: 1280px){
  .task-list{
    flex-direction: row;
    font-size: 30px;
  }
  .task-priority{
    flex-direction: row;
    width: 50%;
  }
  .task-name{
    flex-direction: row;
  }
  .Tyler, .Sadie, .Daniel, .Jeffery{
    height: 40px;
    width: 25%;
  }
  .month-head h2{
    font-size: 32px;
  }
}
</style>
