<template>
	<div class="wrapper">
		<div class="calendar">
			<div class="calendar-day" v-for="day in 30" :key="day">
				<div class="calendar-date">
					<p> {{day}}</p>
				</div>
				<div class="todoItems">
					<div class="todoItem" v-for="todoItem in todoItems" :key="todoItem.id">
					</div>
					<div class="tasks" v-if="day === todoItem.day">
						<p> {{todoItem.day}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CalendarView',
		props: {
			todoItems: Array
		},

	}
</script>

<style scoped>

.calendar{
	display: flex;
	flex-wrap: wrap;
	margin: 5px;
	margin-bottom: 15px;
	justify-content: center;
}
.calendar-day{
	display: flex;
	width: 100px;
	height: 100px;
	border: 1px solid black;
	padding: 5px;
}
.calendar-date{
	display: flex;
	height: 20px;
	justify-content: center;
	align-items: center;
}
.todoItems{
	display: flex;
	flex-wrap: wrap;

}
.todoItem{
	display: flex;
	border: 1px solid black;
	width: 40%;
}
.info{
	display:flex;
	flex-direction: column;

}
.low{
	display: flex;
	justify-content: center;
	background-color: green;
}
.medium{
	display: flex;
	justify-content: center;
	background-color: orange;
}
.high{
	display: flex;
	justify-content: center;
	background-color: red;
}
.header{
	display: flex;
	justify-content: center;
}
.desc{
	display: flex;
	justify-content: space-around;
	align-content: center;
}
</style>