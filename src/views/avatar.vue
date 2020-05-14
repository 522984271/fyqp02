<template>
    <div class="avatar">
        <img src="../assets/001.jpg" height="300" width="300"/>
    </div>
</template>

<script>
    export default {
        name: "avatar"
    }
</script>

<style scoped>
    img {            /*将头像显示为圆形*/
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid rgba(0,0,0,0.2);
    }
</style>