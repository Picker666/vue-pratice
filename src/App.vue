<template>
	<div id="app">
		<nav class="nav">
			<router-link
				v-for="(route, index) in routerData"
				:to="route.path"
				:key="index"
				v-text="route.dispalyName"
				class="link"
				:class="{linkActive: route.isActive}"
			>
			</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import { ROUTE } from './constant';

	export default {
		name: 'app',
		data: function () {
			return {
				routerData: ROUTE
			}
		},
		methods: {
			updateLink: function (path) {
				this.routerData.forEach(item => {
					item.isActive = item.path === path;
				});
			}
		},
		mounted: function () {
			this.updateLink(this.$route.path);
		},
		watch: {
			'$route': function (to, from) {
				this.updateLink(to.path);
			}
		}
	}
</script>


<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.nav {
		padding: 10px 0;
	}
	.link {
		padding:0 20px;
		color: lightblue;
		text-decoration: none;
	}
	.linkActive {
		color: blue;
	}
</style>

