<template>
    <div style="padding: 32px 500px;">
        <h1>不使用form 自带的验证 ，自行验证数据</h1>
        <br><br>
        <img src="../assets/logo.png" alt="">

        <Form ref="form" :modal="form" :label-width="70">
            <FormItem label="姓名">
                <Input v-model="form.name" />
            </FormItem>
            <FormItem label="城市">
                <Select v-model="form.city">
                    <Option value="北京">北京</Option>
                    <Option value="上海">上海</Option>
                </Select>
            </FormItem>
            <Button @click="handleSubmit" type="primary" :loading="isSubmit">提交</Button>
        </Form>
        <div class="img">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form9",
        data () {
            return {
                form: {
                    name: '',
                    city: ''
                },
                isSubmit: false
            }
        },
        methods: {
            handleSubmit () {
                if (this.isSubmit) return;

                const { name, city } = this.form;

                if (name === '') {
                    this.$Message.error('请输入姓名');
                    return;
                }

                if (city === '') {
                    this.$Notice.error({
                        title: '请选择城市'
                    });
                    return;
                }

                this.isSubmit = true;


            }
        }
    }
</script>

<style scoped>
    .img{
        background-image: url("~@/assets/git.png");
        background-repeat: no-repeat;
        width: 200px; height: 200px;
        background-position: center;
        background-size: cover
    }
</style>
