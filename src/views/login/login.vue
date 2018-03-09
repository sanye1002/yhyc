<style lang="stylus" rel="stylesheet/stylus">
    body
        background-image url("login_bg.jpg")

    .login

        width 340px
        margin-right 10px
        float right
        margin-top 300px
        .login_model
            background-color: rgba(7, 17, 27, 0.0)
            border-radius 10px

</style>
<template>
    <div class="model">

        <Row class="login">
            <Col span="24">
            <Card  :dis-hover="true" class="login_model">
                <p slot="title" style="color: #fff">用户登录</p>
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="账户、手机、ID">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Switch v-model="switch1" @on-change="change" size="large">
                            <span slot="open">通过</span>
                            <span slot="close">验证</span>
                        </Switch>
                        <Select v-model="typeModel" style="width:200px;float: right">
                            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}
                            </Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')" style="float: right"
                                :disabled="disabled">登录
                        </Button>
                    </FormItem>

                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请输入你的账户', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入你的密码', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            message: '密码少于六位数',
                            trigger: 'blur'
                        }
                    ]
                },
                typeList: [
                    {
                        value: 'personnel',
                        label: '工作人员'
                    },
                    {
                        value: '陌陌主播',
                        label: '陌陌'
                    }
                ],
                typeModel: 'personnel',
                switch1: false
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {

                        this.$Message.success('成功!');
                        this.$router.push('/yhyc/home')
                    } else {
                        this.$Message.error('失败!');
                        this.$router.push('/yhyc/home')
                    }
                })
            },
            change (status) {
                if (status) {
                    this.disabled = false
                } else {
                    this.disabled = true
                }
            }
        }
    }
</script>
