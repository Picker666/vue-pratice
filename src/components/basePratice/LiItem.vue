<template>
  <ul>
		<li
			v-for="(item, index) in items"
			:class="{isStudent: item.student, gray: index%2 === 0}"
			@click="handleClick(item)"
			:key="item.name + Math.random()"
			class="everyLi"
		>
			<!-- onchange 事件会在失去焦点时候触发 
				在此使用v-model会使dom重新加载，失去焦点	
			-->
			<input
				type="text"
				:value="item.name"
				v-if="item.isModify"
				@change="handleChange(item, $event)"
				@keyup.enter="handleChange(item, $event)"
				@click="handleInputClick"
			/>
			<span v-else>
				{{item.name}}
			</span>
			<button class="btn" @click="confirmItem(item)" v-if="item.isModify">Confirm</button>
			<button class="btn" @click="modifyItem(item)" v-else>Modify</button>
			<button class="btn" @click="deleteItme(item)">delete</button>
		</li>
  </ul>
</template>

<script>
	import Storage from '../helper';
	export default {
		name: 'LiItem',
		props:['items', 'handleClick'],
		data () {
			return {
				itemData: this.items,
				modifyValue: ''
			}
		},
		methods: {
			deleteItme (item) {
				this.itemData.splice(this.itemData.indexOf(item), 1);
			},
			modifyItem (item) {
				const newItem = { ...item, isModify: true}
				const otherItem = this.itemData.filter(item => item.isModify)[0] || '';
				this.itemData.splice(this.itemData.indexOf(item), 1, newItem);
				if (otherItem) {
					this.itemData.splice(this.itemData.indexOf(otherItem), 1, {...otherItem, isModify: false});
				}
				this.modifyValue = item.name;
			},
			handleChange (item, e) {
				this.modifyValue = e.target.value;
				this.confirmItem(item);
			},
			confirmItem (item) {
				const newItem = { ...item, isModify: false, name: this.modifyValue };
				this.itemData.splice(this.itemData.indexOf(item), 1, newItem);
			},
			handleInputClick (e) {
				e.stopPropagation();
			}
		},
		watch:{
			itemData: {
				handler (itemData) {
					Storage.save(itemData);
				},
				deep:true
			}
		},
		beforeCreate: function () {
			console.log('this is beforeCreate....');
		},
		created: function () {
			console.log('this is created...');
		},
		beforeMount: function () {
			console.log('this is beforeMount...');
		},
		mounted: function () {
			console.log('this is mounted...');
		},
		beforeUpdate: function () {
			console.log('this is beforeUpdata...');
		},
		updated: function () {
			console.log('this is updated...');
		},
		beforeDestory: function () {
			console.log('this is beforeDestory...');
		},
		destoryed: function () {
			console.log('this is destoryed...');
		}
	}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}
	.isStudent {
		color: red;
	}
	.btn {
		visibility: hidden;
	}
	.gray {
		background-color: #eee;
	}
	.everyLi {
		padding: 10px;
	}
	.everyLi:hover .btn {
		visibility: visible;
	}

</style>
