<template>
    <div class="slotContent">
        <h3 v-text="title"></h3>
        <slot>默认的slot</slot>
        <slot name="slot1">默认的slot1</slot>
        <slot name="slot2">默认的slot2</slot>
    </div>
</template>

<script>
    export default {
        name: 'slotContent',
        props: {
            title: {
                type: String,
                default: '插槽内容'
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
        background-color: lightgray;
        width: 600px;
        margin: 10px auto;
        padding: 10px;
    }
</style>


