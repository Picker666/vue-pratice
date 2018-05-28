<template>
    <div class="slotContent">
        <h3 v-text="title"></h3>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <slot :item="item">{{index}}</slot>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'slotScope',
        props: {
            title: {
                type: String,
                default: '插槽内容'
            },
            list: {
                type: Array,
                default: []
            }
        },
        data: function () {
            return {
                
            };
        }
    }
</script>

<style scoped>
    .slotContent {
        background-color: #fefefe;
        width: 600px;
        margin: 10px auto;
        padding: 10px;
    }
</style>


