<template>
    <div style="padding: 32px 64px">
        <h1>自定义列模板的三种方法</h1>
        <Table border :columns="columns" :data="data"></Table>

    </div>
</template>

<script>
    import TableCell from '../components/table-cell'
    export default {
        name: "Table11-2",
        data () {
            return {
                columns: [
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
                    },
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: '操作',
                        render: (h, { row }) => {
                            return h(TableCell, {
                                props: {
                                    row
                                }
                            })

                        }
                    }
                ],
                data: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
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

</style>
