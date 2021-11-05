<template>
	<div class="wrapper">
		<div class="news">
			<div class="news-item">
			</div>
			<div class="news-item">
			</div>
			<div class="news-item">
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'News',
}
</script>

<style scoped>
.news{
	display:flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-around;
}
.news-item{
	display: flex;
	margin: 10px;
	width: 40%;
	height: 200px;
	border: 2px solid black;
}
</style>