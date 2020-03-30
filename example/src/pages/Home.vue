<template>
  <div>
    这是主页
    <insert-html>./cols/1.vue</insert-html>
    </div>
</template>
<script>
export default {
  mounted() {
    let info = "你进入的首页";
    console.log(info);
  }
};
</script>
