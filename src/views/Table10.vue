<template>
    <div id="table10" style="padding: 32px 64px">
        <h1>动态修改任意单元格 class</h1>
        <Table :columns="columns1" :data="data1"></Table>
        <Button @click="handleChangeName">设置class</Button>
    </div>
</template>

<script>
    export default {
        name: "Table10",
        methods: {
            handleChangeName () {
                this.data1[1].cellClassName.name = 'table-red';
            }
        },
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        cellClassName: {
                            name: 'table-red'
                        }
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        cellClassName: {
                            name: ''
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #table10 >>> .table-red {
        color: red;
    }
</style>
