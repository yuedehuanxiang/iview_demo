<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <slot>
                {{item.text}}
            </slot>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "todo-list",
        props:{
            list:{
                type:Array
            }
        }
    }
</script>

<style scoped>

</style>
