<template>
	<div class="wrapper">
		<div class="todoItems">
			<div class="todoItem" v-for="todoItem in todoItems" :key="todoItem.id">
				<div class="info">
					<div class="header">
						<h2>{{todoItem.name}} -- {{todoItem.date}}</h2>
					</div>
					<div class='desc'>
						<h3> {{todoItem.desc}}</h3>
						<div class="check">
							<input type="checkbox" id=todoItem.done name=todoItem.id value="True">
							<label for=todoItem.id> Completed Task</label><br>
						</div>
					</div>
					<div v-bind:class='{"high": todoItem.priority === "high","medium": todoItem.priority === "medium","low": todoItem.priority === "low",}'>
						<h4> {{todoItem.priority}} </h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoList',
		props: {
			todoItems: Array
		},

	}
</script>

<style scoped>
.todoItem{
	border: 1px solid black
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
.check{
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	width: 30%;
}
</style>