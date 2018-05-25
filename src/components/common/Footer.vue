<template>
    <footer class="footerClass">
        <p class="subheadLeft">
			<span v-if="from">上一页：</span>
            <button  v-if="from" v-text="from" @click="deliver(previousPath)"></button>
            <span class="by">
                &nbsp;-- by <span v-text="by"></span>
            </span>
		</p>
        <p class="subheadRight" v-if="to">
			下一页：<button @click="deliver(nextPath)" v-text="to"></button>
		</p>
    </footer>
</template>

<script>
    export default {
        name: 'footerEl',
        props: {
            nextPath: {
                type: String,
                default: ''
            },
            previousPath: {
                type: String,
                default: ''
            },
            from: {
                type:String,
                default: ''
            },
            to: {
                type: String,
                default: 'Next'
            }
        },
        data: function () {
            return {
                by: 'Click Link'
            }
        },
        mounted: function () {
            this.by = this.$route.query.from && this.from || this.by;
        },
        methods: {
            deliver: function (path) {
                path && this.$router.push({path, query: {from: this.by}})
            }
        }
    }
</script>

<style scoped>
    .footerClass {
        position: relative;
        padding: 10px;
    }
    .by {
        font-size: 14px;
        color: #aaa;
        position: absolute;
        bottom: 10px;
    }
    .footerClass p {
        margin: 0;
    }
    .subheadLeft {
        text-align: left;
    }
    .subheadRight {
		text-align: right;
        position: absolute;
        right: 0;
        top: 10px;
	}
</style>

