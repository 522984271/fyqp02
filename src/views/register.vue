<template>
    <div class="box">
        <form novalidate>
            <h1 id="h1">注册页面</h1>
            <div class="inputbox">
                <input type="text" name="" required="">
                <label>用户名:</label>
            </div>
            <div class="inputbox">
                <input type="password" name=" " required="">
                <label>密码：</label>
            </div>

            <div class="router"><!--实现注册，登录之间的路由跳转-->
                <router-link to="/first/login" style="color: #ffffff ;float: right;font-size: 15px">登录页面</router-link>
                <router-view/>
            </div>
        </form>
    </div>
</template>

<script>
    import $ from 'jquery';
    import login from './login';
    export default {
        name: "register",
        components:{
            login
        }
    }
</script>

<style scoped>

    body {
        margin: 0px;
        padding: 0px;
        font-family: sans-serif;
        background: url(../assets/background01.jpg);
        background-size: cover;
    }




    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*实现块元素百分比下居中*/
        width: 450px;
        padding: 50px;
        /*background: rgba(0, 0, 0, 0.2);*/
        box-sizing: border-box;
        box-shadow: 0px 15px 25px rgba(0, 0, 0, .6);
        border-radius: 15px;
    }
    .box h1{
        color: black;
    }

    .box .inputbox {
        position: relative;
    }

    .box .router a {
        color: #ffffff;
        text-decoration: none;
    }

    .box .inputbox input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }

    .box .inputbox label {
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }

    .box .inputbox input:focus ~ label,
    .box .inputbox input:valid ~ label {
        top: -18px;
        left: 0;
        color: #ffffff;
        font-size: 14px;
    }

    .box input[type="submit"] {
        width: 100%;
    }

    #h1{
        color: white;
    }
</style>