<template>
    <div style="padding: 32px 64px">
        <h1>初始化时应用过滤，并持久化存储</h1>
        <Table :columns="columns" :data="data" @on-filter-change="handleFilterChange"  border>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "Table9",
        methods: {
            handleFilterChange (col) {
                console.log(col);
                const filterChecked = col._filterChecked;
                const key = col.key;

                localStorage.setItem(`table-demo-filter-${key}`, JSON.stringify(filterChecked));


            }

        },
        data () {
            const filterAge = JSON.parse(localStorage.getItem('table-demo-filter-age'));
            const filterAddress = JSON.parse(localStorage.getItem('table-demo-filter-address'));

            let filterAgeValue = [2];
            let filterAddressValue = ['London', 'Sydney'];

            if (filterAge) filterAgeValue = filterAge;
            if (filterAddress) filterAddressValue = filterAddress;

            const columns = [
                {
                    title: 'Date',
                    key: 'date',

                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age',
                    filters: [
                        {
                            label: 'Greater than 25',
                            value: 1
                        },
                        {
                            label: 'Less than 25',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    },
                },
                {
                    title: 'Address',
                    key: 'address',
                    filters: [
                        {
                            label: 'New York',
                            value: 'New York'
                        },
                        {
                            label: 'London',
                            value: 'London'
                        },
                        {
                            label: 'Sydney',
                            value: 'Sydney'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.address.indexOf(value) > -1;
                    },
                }
            ];

            if (filterAgeValue.length) columns[2].filteredValue = filterAgeValue;
            if (filterAddressValue.length) columns[3].filteredValue = filterAddressValue;

            return {
                columns: columns,
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
