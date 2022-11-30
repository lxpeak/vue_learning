<template>
    <div>
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go3">前进3步</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        //这里存放数据
        return {

        };
    },
    methods: {
        back() {
            this.$router.back();
        },
        forward() {
            this.$router.forward()
        },
        go3(){
            this.$router.go(3)
        }
    }
}
</script>
<style scoped>

</style>