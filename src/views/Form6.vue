<template>
    <div style="padding: 32px 500px;">
        <h1>Form 同步提交 （提交到后端） 表单的用法</h1>
        <br><br>
        <Form ref="form" :model="form" :label-width="70" action="iviewui.com" method="post">
            <FormItem label="输入框">
                <Input v-model="form.input" name="input" />
            </FormItem>
            <FormItem label="选择器">
                <Select v-model="form.select" name="select">
                    <Option value="value1">value1</Option>
                    <Option value="value2">value2</Option>
                </Select>
            </FormItem>
            <Button html-type="submit">提交</Button>
        </Form>
    </div>
</template>

<script>


    export default {
        name: "Form6",
        data () {
            return {
                form: {
                    input: '',
                    select: ''
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
