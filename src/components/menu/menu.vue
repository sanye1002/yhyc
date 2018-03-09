<style lang="stylus" rel="stylesheet/stylus">
    .layout
        border: 1px solid #d7dde4
        background: #f5f7f9
        position: relative
        border-radius: 4px
        overflow: hidden

        .layout-breadcrumb
            padding: 10px 15px 0

        .layout-content
            min-height: 200px
            margin: 15px
            overflow: hidden
            background: #fff
            border-radius: 4px

        .layout-content-main
            padding: 10px

        .layout-copy
            text-align: center
            padding: 10px 0 20px
            color: #9ea7b4

        .layout-menu-left
            background: #fff
            overflow auto

        .layout-header
            height: 60px
            background: #fff
            display flex
            box-shadow: 0 1px 1px rgba(0, 0, 0, .1)

        .layout-logo-left
            width: 90%
            height: 30px
            background: #FFF
            border-radius: 3px
            margin: 15px auto

        .layout-ceiling-main a
            color: #9ba7b5

        .layout-hide-text .layout-text
            display: none

        .ivu-col
            transition: width .2s ease-in-out

        .navicon-con
            flex 1

        .header-middle-con
            flex 8
            height 60px

        .header-avator-con
            flex 4
            position: absolute
            right: 0
            top: 0
            height: 60px
            width: 200px
            .message-con
                display: inline-block
                width: 30px
                padding: 18px 0
                text-align: center
                cursor: pointer
                i
                    vertical-align: middle

        .user-dropdown
            &-menu-con
                position: absolute
                right: 0
                top: 0
                width: 150px
                height: 60px
                .main-user-name
                    display: inline-block
                    width: 80px
                    word-break: keep-all
                    white-space: nowrap
                    vertical-align: middle
                    overflow: hidden
                    text-overflow: ellipsis
                    text-align: right

            &-innercon
                height: 60px
                padding-right: 14px


</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1-2" :theme="theme2" width="auto" :open-keys="['1']" accordion>
                    <div class="layout-logo-left"></div>
                    <Submenu key="1">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </template>
                        <Menu-item key="1-1" ><router-link to="#" active-class="active" replace>文章管理</router-link></Menu-item>
                        <Menu-item key="1-2">评论管理</Menu-item>
                        <Menu-item key="1-3">举报管理</Menu-item>
                    </Submenu>
                    <Submenu key="2">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </template>
                        <Menu-item key="2-1">新增用户</Menu-item>
                        <Menu-item key="2-2">活跃用户</Menu-item>
                    </Submenu>
                    <Submenu key="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <Menu-group title="使用">
                            <Menu-item key="3-1">新增和启动</Menu-item>
                            <Menu-item key="3-2">活跃分析</Menu-item>
                            <Menu-item key="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item key="3-4">用户留存</Menu-item>
                            <Menu-item key="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col :span="spanRight">

                <div class="layout-header">
                    <div class="navicon-con">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </div>
                    <div class="header-middle-con">
                        <div class="main-breadcrumb" style="height: 60px;padding: 18px 0">
                            <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
                        </div>
                    </div>
                    <div class="header-avator-con" style="display: inline-block;">
                        <message-tip v-model="mesCount"></message-tip>
                        <div class="user-dropdown-menu-con">
                            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                                <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                    <a href="javascript:void(0)">
                                        <span class="main-user-name">{{ userName }}</span>
                                        <Icon type="arrow-down-b"></Icon>
                                    </a>
                                    <DropdownMenu slot="list">
                                        <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                        <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                            </Row>
                        </div>
                    </div>
                </div>

                <div class="layout-breadcrumb">
                    <Tabs type="card">
                        <Tab-pane icon="ios-circle-filled" label="标签一">
                            <div class="layout-content">
                                <div class="layout-content-main">内容区域</div>
                            </div>
                        </Tab-pane>
                        <Tab-pane icon="ios-circle-filled" label="标签一" closable>标签一的内容</Tab-pane>
                        <Tab-pane icon="ios-circle-filled" label="标签一" closable>标签一的内容</Tab-pane>
                    </Tabs>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import messageTip from '../message/messageTip.vue';
    import breadcrumbNav from '../breadcrumb/breadcrumb.vue';

    export default {
        components: {
            'message-tip': messageTip,
            breadcrumbNav
        },
        data () {
            return {
                spanLeft: 4,
                spanRight: 20,
                currentPath: [{
                    'path': '/test',
                    'name': '/',
                    'title': '首页'
                }, {
                    'path': '/test',
                    'name': '/',
                    'title': '首页'
                }],
                theme2: 'light'
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        }
    }
</script>

