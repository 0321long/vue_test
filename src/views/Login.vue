<template>
  <div id="E-merchant-root">
    <div class="index-wrap">
      <div class=" back_img ">
        <div class="e-header">
          <header>
            <a href="#/Login">
              <span class="logo_box"></span>
              <div class="name">
                <p :style="big_text">企业服务商户平台</p>
                <p>您身边的餐饮管理专家</p>
              </div>
            </a>
          </header>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        "big_text": {
          "font-size": '18px',
          "height": '24px',
          "padding-bottom": '6px'
        }
      }
    },


    methods: {
      // 查看store内的count
      look() {
        var _this = this
        _this.$store.commit('createFunc')
        if (_this.$store.state.count >= 5) {
          console.log(this.$store.state.count)
        }
      }
    }
  };
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
  }

  body {
    margin: 0;
  }

  #E-merchant-root {
    height: 100%;
  }

  .index-wrap {
    height: calc(100% - 62px);
  }

  .index-wrap a {
    color: #1890ff;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .logo_box {
    height: 26px;
    width: 100px;
    display: block;
    float: left;
    margin: 18px 0;
    overflow: hidden;
    background-size: cover;
    background: url(https://cube.elemecdn.com/3/b2/48f7a29029ff0dee33ae36e8ea206png.png) no-repeat
  }

  .name {
    color: white;
    font-size: 12px;
    text-align: left;
  }

  .back_img {
    height: 100%;
    background: url(https://cube.elemecdn.com/a/d8/2504cc6ffc3ffc5af0d4b133897b6jpeg.jpeg) no-repeat;
  }
</style>
