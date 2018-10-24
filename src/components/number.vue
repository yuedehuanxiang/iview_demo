<template>
    <div>
        <button @click="increase(-1)">减一</button>
        <span style="color: red;padding: 6px">{{currentValue}}</span>
        <button @click="increase(1)">加一</button>
    </div>
</template>

<script>
    import Emitter from 'iview/src/mixins/emitter';
    export default {
        name: "number",
        mixins: [ Emitter ],
        props: {
          value: {
              type: Number
          }
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        watch: {
          value (val) {
              this.currentValue = val;
          }
        },
        methods: {
            increase (val) {
                this.currentValue += val;
                this.$emit('input', this.currentValue);
                this.dispatch('FormItem','on-form-change',this.currentValue);
            }
        }
    }
</script>

<style scoped>

</style>
