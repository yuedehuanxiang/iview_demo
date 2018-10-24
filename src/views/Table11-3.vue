<template>
    <div style="padding: 32px 64px">
        <h1>自定义列模板的三种方法</h1>
        <Table border :columns="columns" :data="data" ref="table">
            <template slot-scope="props" slot="action">
                <Select>
                    <Option :value="props.name">{{props.name}}</Option>
                    <Option :value="props.age">{{props.age}}</Option>
                    <Option :value="props.address">{{props.address}}</Option>
                    <Option :value="props.date">{{props.date}}</Option>
                </Select>
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "Table11-2",
        data() {
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
                        render: (h, {row}) => {
                            return h('div',
                                this.$refs.table.$scopedSlots.action({
                                    name: row.name,
                                    age: row.age,
                                    address: row.address,
                                    date: row.date
                                })
                            )

                        }
                    }
                ],
                data:[

                ]
            }
        },
        mounted() {
            this.data = [
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
</script>

<style scoped>

</style>
