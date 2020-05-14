<template>
    <div id="first">
        <div class="background">
            <img :src="imgSrc" alt="" />
        </div>
        <div id="nav">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import login from "./views/login";
    import avatar from "./views/avatar";

    export default {
        name: "first",
        data(){
            return{
                imgSrc: require('./assets/background01.jpg')
            }
        },
        components: {
            login,
            avatar
        }
    }
</script>

<style lang="scss" scoped>
    .background {
        background-size: 100%;
        /*webkit-background-size: cover*/
    }



    body img {
        width: 100%;
        height: auto;
    }


    #first {
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 30px;

        height: 800px;
        width: 800px;
        a {

            font-weight: bold;
            color: #2c3e50;
            font-size: 50px;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

</style>