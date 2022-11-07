<template>
	<div>
		<div class="row">
			<Banner />
		</div>

		<div class="row">
			<!-- 借助router-link实现路由的切换 -->
			<div>
				<router-link class="not_check" active-class="checked" to="/about">About</router-link>
			</div>
			<div>
				<router-link class="not_check" active-class="checked" to="/home">Home</router-link>
			</div>
		</div>

		<div>
			<!-- 指定组件的呈现位置 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Banner from './components/Banner'

export default {
	name: 'App',
	components: { Banner },
	data() {
		return {

		}
	},
}
</script>

<style>
.not_check {
	color: blue
}

.checked {
	color: brown;
}
</style>
