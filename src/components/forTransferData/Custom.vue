<template>
    <div class="wrapper">
        <h2 v-text="title"></h2>
        <test-input @changeValue="changeValue" :propsValue="value" ></test-input>
        <h3 v-text="value" class="inputShadow"></h3>
        <test-checkbox v-model="checkboxValue"></test-checkbox>
        <h3 v-text="checkboxValue" class="inputShadow"></h3>
        <r-footer
			from="Base Pratice"
			to="Slot Demo"
			previousPath="/basePratice"
			nextPath="/slotSection"
		></r-footer>
    </div>
</template>

<script>
    import Input from "./Input";
    import Checkbox from './Checkbox';
    import Footer from '../common/Footer';

    export default {
        name: 'custom',
        data: function () {
            return {
                title: 'this is custom component for testing data transfer...',
                value: '666',
                checkboxValue: ''
            }
        },
        components: {
            'test-input': Input,
            'test-checkbox': Checkbox,
            'r-footer': Footer
        },
        methods: {
            changeValue: function (newValue) {
                this.value = newValue;
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding: 10px 10px 20px;
        background-color: lightblue;
    }
    .inputShadow {
        background-color: orange;
        border: solid 1px orange;
    }
</style>

