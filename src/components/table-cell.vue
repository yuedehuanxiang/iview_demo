<template>
    <Select>
        <Option :value="row.name">{{ row.name }}</Option>
        <Option :value="row.age">{{ row.age }}</Option>
        <Option :value="row.address">{{ row.address }}</Option>
        <Option :value="row.date">{{ row.date }}</Option>
    </Select>
</template>

<script>
    export default {
        name: "table-cell",
        props: {
            row: Object
        }
    }
</script>

<style scoped>

</style>
