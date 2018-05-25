<template>
    <div class="pratice">
    	<h1 v-html="msg">
		</h1>
        <input  type="text" v-model="itemNew" v-on:keyup.enter="addNew"/>
        <button @click="addNew" :class="{hideBtn: !itemNew}">submit</button>
        <liItem v-bind:items="items" v-bind:handleClick="turnRed"></liItem>
		<r-footer
			from="Hello"
			to="transfer Data"
			previousPath="/hello"
			nextPath="/transferData"
		></r-footer>
    </div>
</template>

<script>
//使用ES6特性引入 helper 储存脚本，命名为 Storage
import Storage from '../helper'
//引入 Hello.vue 组件，命名为 Hello
import LiItem from './LiItem';
import Footer from '../common/Footer';
//ES6语法，相当于 
//new Vue({})
export default {
	name: 'basePratice',//name属性作为组件名称，全局 ID 自动作为组件的 name
	data () {
		return {
			msg:'this is a demo for pratice...',
			items: Storage.fetch(),//获取存在 storage 里面的键值对
			itemNew:''
		}
	},
	components:{
		LiItem,
		'r-footer': Footer
	},
	methods:{
		turnRed: function (item) {
			//逆反布尔值
			item.student = !item.student;
		},
		addNew:function () {
			this.items.push({
				name : this.itemNew,
				student : true 
			});
			//清空文本栏
			this.itemNew = null;
		}
	},
	watch:{
		items:{
			handler: function (items) {
				Storage.save(items);//监控li变化，将新增的值存入 sessionStorage 里
			},										//sessionStorage 里的数据将在页面关闭后删除
			deep:true							//深度监视，只要 items 有一点改变就会触发回调函数handler
		}
	}
}
</script>

<style scoped>
	.hideBtn {
		display: none;
	}
	.subhead {
		text-align: right;
	}
	.pratice {
		border: solid 5px green;
		border-radius: 10px;
		padding: 15px;
	}
</style>
