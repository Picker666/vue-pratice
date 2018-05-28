<template>
    <section class="transitionAnimateCls">
        <h2 v-text="title"></h2>
        <r-transition></r-transition>
        <r-animate></r-animate>
    </section>
</template>

<script>
    import Transition from './Transition';
    import Animate from './Animate';
    export default {
        name: 'TransitionAnimate',
        data: function () {
            return {
                title: 'TransitionAnimate'
            }
        },
        components: {
            'r-transition': Transition,
            'r-animate': Animate
        }
    }
</script>

<style scoped>
    .transitionAnimateCls {
        background-color: lightblue;
        padding: 10px;
    }
</style>

