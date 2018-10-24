<template>
    <div style="padding: 32px 64px">
        <h1>新建和修改</h1>
        <br>
        <br>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <span>{{item.name}}</span>
                <Divider type="vertical"></Divider>
                <span>{{item.age}}</span>
                <Divider type="vertical"></Divider>
                <span>{{item.city}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
    import TodoList from './todo-list'
    export default {
        name: "Table",
        components:{TodoList},
        data(){
            return {
                list: [
                    {
                        name:'张三',
                        age:18,
                        city:'北京'
                    },
                    {
                        name:'李四',
                        age:19,
                        city:'上海'
                    }
                ]

            }
        }
    }
</script>

<style scoped>

</style>
