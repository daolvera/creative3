<template>
	<div class="wrapper">
		<div class="todoItems">
			<div class="todoItem" v-for="todoItem in todoItems" :key="todoItem.id">
				<div class="info">
					<h2>{{todoItem.name}}</h2>
					<h3> {{todoItem.desc}}</h3>
					<h3> {{todoItem.date}} </h3>
					<h4> {{todoItem.priority}} </h4>
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