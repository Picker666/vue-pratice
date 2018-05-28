<template>
    <section>
        <h3 v-text="title"></h3>
        <button @click="isShowFirstTransition=!isShowFirstTransition">toggle</button>
        <transition name='firstTransition'>
            <p v-if='isShowFirstTransition'>fasdfafddsfasdfs</p>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'r-transition',
        data: function () {
            return {
                title: 'Transition',
                isShowFirstTransition: false
            }
        }
    }
</script>

<style scoped>
    .firstTransition-enter-active, .firstTransition-leave-active {
        transition: opacity 3s;
    }
    .firstTransition-enter, .firstTransition-leave-to {
        opacity: 0;
    }
</style>
