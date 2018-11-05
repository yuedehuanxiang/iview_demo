<template>
    <div style="padding: 32px 500px;">
        <h1>Tabs 标签页关闭前二次确认</h1>
        <br><br>

        <Tabs type="card" closable @on-tab-remove="handleTabRemove" :beforeRemove="handleBeforeRemove">
            <TabPane label="标签页一" v-if="tab0">标签页一的内容</TabPane>
            <TabPane label="标签页二" v-if="tab1">标签页二的内容</TabPane>
            <TabPane label="标签页三" v-if="tab2">标签页三的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "Component4",
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handleBeforeRemove (index) {
                console.log(index);
                return new Promise(((resolve, reject) => {
                    this.$Modal.confirm({
                        title: '关闭确认',
                        content: '<p>您确认关闭标签'+ (index+1) + '吗？</p>',
                        onOk: () => {
                            resolve();
                        },
                        onCancel: () => {
                            //reject();
                        }
                    })
                }))

            }
        }
    }
</script>

<style scoped>

</style>
