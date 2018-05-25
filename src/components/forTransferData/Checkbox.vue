<template>
    <input type="text"
        :value="currentValue"
        @input="$emit('change', $event.target.value)"
    />
</template>

<script>
    export default {
        name: 'checkbox',
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            checked: [String, Number]
        },
        data: function () {
            return {
                currentValue: this.value
            }
        }
    }
</script>

<style scoped>

</style>

