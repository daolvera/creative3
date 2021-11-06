<template>
	<div class="wrapper">
		<div class="news">
			<div class="news-item" v-show="news[1]" id="1">
				<div class='news-info'>
					<div class="news-header">
						<h2> Happy Happy Birthday </h2>
						<a @click="close('1')" href="#1" class="close">X</a>
					</div>
					<div class='image'>
						<img src="/images/birthday.jpg">
					</div>
					<p>This month's Birthdays are: </p>
					<p> Elroy | Jim | Leonard | Phyllis </p>
					<p> Wish them a Happy Birthday! </p>
				</div>
			</div>
			<div class="news-item" v-show="news[2]" id="2">
				<div class='news-info'>
					<div class="news-header">
						<h2> Happy Thanksgiving </h2>
						<a @click="close('2')" href="#2" class="close" >X</a>
					</div>
					<div class='image'>
						<img src="/images/thanksgiving.jpg">
					</div>
					<p>With Thanksgiving coming up, just remember to submit time-off requests to HR! Happy Holidays!</p>
				</div>
			</div>
			<div class="news-item" v-show="news[3]" id="3">
				<div class='news-info'>
					<div class="news-header">
						<h2> Its Golfin' Season </h2>
						<a @click="close('3')" href="#3" class="close">X</a>
					</div>
					<div class='image'>
						<img src="/images/golf.jpg">
					</div>
					<p>This month we are raffling off free rounds of GOLF so make sure to tune in to those weekly drawings</p>
				</div>
			</div>
			<div class='empty-news' v-show="empty">
				<h2> No News Currently </h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'News',
  data() {
	return {
		news :{
			1: true,
			2: true,
			3: true,
		},
		empty: false
	}
  },
  methods: {
	close(number) {
		this.news[number] = false;
		if (!(this.news[1] || this.news[2] || this.news[3])){
			this.empty = true;
		}
	},
  },
  
}
</script>

<style scoped>
.news{
	display:flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-around;
}
.empty-news{
	display: flex;

}
.news-item{
	display: flex;
	margin: 10px;
	width: 90%;
	height: 500px;
	border: 2px solid black;
}
.news-header{
	display: flex;
	justify-content: space-between;
	margin: 5px;
}
.news-header h2{
	margin-left: 5px;
}
.news-header a{
	text-decoration: none;
	height: 5px;
}
.news-info{
	display:flex;
	flex-direction: column;	
	justify-content: flex-start;
}
.image{
	display: flex;

}
.image img{

	width: 100%;
}
@media (min-width: 768px) {
	.news-item{
		margin: 10px;
		width: 90%;
		height: 1000px;
		font-size: 25px;
	}
	.news-header{
		margin: 15px;
	}
	.news-header h2{
		margin-left:20%;
	}
	.news-info{
		padding: 5px;
	}
	.news-header a{
		font-size: 25px;
	}
	.empty-news{
		font-size: 25px;
	}
}
@media (min-width: 1280px){
	.news{
		flex-direction: row;
		margin-top: 10px;
	}
	.news-item{
		margin: 10px;
		margin-top: 25px;
		margin-bottom: 25px;
		width: 40%;
		height: 900px;
		font-size: 35px;
		padding: 10px;
	}
	.image{
		justify-content: center;
	}
	.image img{
		width: 70%;
	}
	.news-header{
		margin: 15px;
	}
	.news-info{
		justify-content: flex-start;
		width: 90%;
	}
	.news-header h2{
		margin-left:20%;
	}
	.news-header a{
		font-size: 35px;
	}
	.empty-news{
		font-size: 30px;
	}
}
</style>