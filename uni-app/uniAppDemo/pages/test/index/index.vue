<template>
	<view>
		<uni-list>
			<uni-list-item  title="列表文字" ></uni-list-item>
			<uni-list-item :disabled="true" title="列表禁用状态" ></uni-list-item>
		</uni-list>
		
		<uni-list>
			<uni-list-item title="开启点击反馈" clickable  @click="onClick" ></uni-list-item>
			<uni-list-item title="默认 navigateTo 方式跳转页面" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
			<uni-list-item title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
