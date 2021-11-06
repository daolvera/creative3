<template>
	<div class="wrapper">
		<div class="calendar">
			<div class="calendar-day" v-for="currDay in 30" :key="currDay">
				<div class="calendar-date">
					<p> {{currDay}}</p>
				</div>
				<div class="todoItems" id="1">
					<div class="todoItem" v-for="todoItem in todoItems" :key="todoItem.id">
						<div class="task" v-if="currDay === todoItem.day">
							<div v-bind:class='{"high": todoItem.priority === "high","medium": todoItem.priority === "medium","low": todoItem.priority === "low", "Daniel": todoItem.name === "Daniel", "Sadie": todoItem.name === "Sadie", "Tyler": todoItem.name === "Tyler","Jeffery": todoItem.name === "Jeffery", }'>
								<a href="#1" @click="alert(todoItem.name, todoItem.desc, todoItem.date)"> {{todoItem.desc}}</a>
							</div>
						</div>
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
		methods:{
			alert(name, desc, date){
				this.$alert(date +" - " + desc, name);
			}
		}

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
	width: 150px;
	height: 150px;
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
	justify-content: center;
	align-items: center;

}
.todoItem{
	display: flex;
	justify-content: center;
}
.task{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75px;
	border:1px solid black;
	height: 40px;
	padding: 1px;
	font-size: 12px;
}
.task a{
	text-decoration: none;
}
.Tyler, .Sadie, .Daniel, .Jeffery{
	height: 40px;
	justify-content: center;
	align-items: center;

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
.info{
	display:flex;
	flex-direction: column;

}
.low{
	display: flex;
	justify-content: center;
	color: green;
}
.low a{
	color: green;
}
.medium{
	display: flex;
	justify-content: center;
}
.medium a{
	color: orange;
}
.high{
	display: flex;
	justify-content: center;
	color: red;
}
.high a{
	color: red;
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
@media (min-width: 768px) {
	.calendar-day{
		width: 250px;
		height: 250px;
	}
	.calendar-date{
		height: 25px;
		font-size: 23px;
	}
	.todoItems{
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		margin-top: 30px;
	}
	.task{
		width: 200px;
		height: 40px;
		font-size: 18px;
		margin-bottom: 5px;
	}
	.Tyler, .Sadie, .Daniel, .Jeffery{
		width: 100%;
	}
}
@media (min-width: 1280px){

}
</style>