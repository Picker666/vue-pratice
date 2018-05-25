<template>
	<div class="hello">
		<img src="../assets/logo.png" alt="">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<r-footer
			to="Base Pratice"
			nextPath="/basePratice"
		></r-footer>
	</div>
</template>

<script>
	import Footer from './common/Footer';
	export default {
		name: 'hello',
		components: {
			'r-footer': Footer
		},
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}
</style>
