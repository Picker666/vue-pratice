<template>
    <input type="text" class="defaultClass" placeholder="你可以随便填......" v-model="value">
</template>

<script>
    export default {
        name: 'test-input',
        props: {
            propsValue: [String, Number],
            type: {type: String, default: ''},
            changeValue: Function
        },
        data: function () {
            return {
                value: this.propsValue
            }
        },
        mounted: function () {
            this.value = this.propsValue;
        },
        watch: {
            value: function (value) {
                this.$emit('changeValue', value);
            }
        }
    }
</script>

<style scoped>
    .defaultClass {
        background-color: lightblue;
    }
    .random {
		background-color: red;
	}
</style>


