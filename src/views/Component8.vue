<template>
    <div style="padding: 32px 500px">
        <h1>DatePicker 设置仅当月日期可选</h1>
        <br><br>

        <DatePicker type="date" :options="options"></DatePicker>

    </div>
</template>

<script>
    export default {
        name: "Component8",
        data () {
            return {
                options: {
                    disabledDate (date) {
                        //  先判断本月第一天
                        const today = new Date();
                        const year = today.getFullYear();
                        const month = today.getMonth();

                        const first_time = (new Date(year, month, 1)).getTime();
                        //  在判断本月有多少天
                         today.setMonth(month + 1);

                         today.setDate(1);
                         today.setDate(today.getDate() - 1);
                         /*上面俩行代码 等于 today.setDate(0);*/

                         const days = today.getDate();

                         // 再获取本月最后一天的时间
                        const last_time = first_time + 86400000 * days;

                        const datetime = date.valueOf();

                        return datetime < first_time || datetime >= last_time;

                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
