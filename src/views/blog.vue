<template>
  <div id="blog">
    <div class="contain">
      <div class="info" v-for="(item,index) in blog" :key="index">
        <h1>{{item.title}}</h1>
        <small>{{item.registerTime}}</small>
        <!-- <img :src="item.view" alt=""> -->
        <div class="text" v-html="item.content"></div>
        <div class="tp">
          <router-link to="/detail">
            <img src="../assets/images/pinglun.png" alt>
           
          </router-link>
          <img src="../assets/images/dianzan.png" alt @click="n">
          <!-- <button ></button> -->
          <span>{{num}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      blog: [],
      num: 125
    };
  },
  methods: {
    n() {
      this.num++;
    }
  },
  created() {
    this.axios
      .get("http://chenjiale.gz01.bdysite.com/api2/getnews.php")
      .then(res => {
        this.blog = res.data;
        console.log(res.data);
      });
  }
};
</script>

<style  scoped>
.contain {
  width: 800px;
  /* height: 1000px; */
  background: rgb(230, 230, 230);
  margin: 0 auto;
}
.info {
  width: 100%;
  height: 200px;
  background: #fff;
  box-shadow: 0px 1px 2px #fff;
  margin-top: 20px;
}
.info h1 {
  font-size: 20px;
  margin-left: 20px;

  color: rgb(102, 102, 102);
  /* float: left; */
}
.info small {
  font-size: 12px;
  color: #ddd;

  display: block;

  /* float: right; */
  /* text-align: center; */
}

.info .text {
  text-align: left;
  color: rgb(126, 126, 126);
  margin-left: 5px;
  display: block;
}
.tp img {
  width: 20px;
  height: 20px;
  /* background: #000; */
  float: left;
  margin-left: 30px;
}
span{
  color: #000;
}
</style>
