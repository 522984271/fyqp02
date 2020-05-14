<template>
    <div>
        <div class="box">

            <Avatar id="avatar"></Avatar>
            <form novalidate>
                <div class="inputbox">
                    <input type="text" name="" required="">
                    <label>用户名:</label>
                </div>
                <div class="inputbox">
                    <input type="password" name=" " required="">
                    <label>密码：</label>
                </div>


                <router-link  to="/index" class="btn btn-primary" style="width: 100%">登录</router-link>



            </form>
            <div class="router">
                <router-link to="/first/register" style="color: white;font-size: 15px; float: left">注册</router-link>
                <a href="" style="color: white;font-size: 15px; float: right">忘记密码</a>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Register from "./register";
    import Avatar from "./avatar";

    export default {
        name: "login",
        components: {Avatar, Register}
    }
</script>

<style scoped>

    /*.avatar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
    }*/


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

    .box .inputbox {
        position: relative;
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
        top: -23px;
        left: 0;
        color: #ffffff;
        font-size: 14px;
    }

    .box input[type="submit"] {
        width: 100%;
    }

    .box a {
        color: #ffffff;
        text-decoration: none;
    }

</style>