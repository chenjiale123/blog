<template>
    <div id="detail">
         <h1>聊天评论内容</h1>
        <div class="show" v-for="(item,index) in comm" :key="index">
            <h1>{{item.name}}</h1>
            <p>{{item.text}}</p>

        </div>
        <!-- <form action=""> -->
            <div class="form">
            <input type="text"  v-model="comm.text">
            <button @click="submit">提交</button>
        <!-- </form> -->
        </div>
    </div>
    
</template>
<script>
    import qs from 'qs'
export default {

    name:'detail',
    data(){
        return {
           comm:[{
             name:'',
               text:''
           }]
        }
    },
    methods:{
      submit(){
       let obj={
            name:this.$cookies.get('email'),
            text:this.comm.text
        }
      let fu = qs.stringify(obj);
      // console.log(fu);
      console.log(obj)
      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api2/messageAdd.php", fu)
        .then(res => {
          if (res.data.valid) {
            alert("添加成功");
             this.comm.push(obj)
          } else {
            //   console.log(res.data)
          }
        //   this.getChatall(this.start, this.end);
        // this.comm.push(fu)
        });
      }
    },
    created(){
          
       this.axios.get('http://chenjiale.gz01.bdysite.com/api2/gotcomm.php')
       .then(res=>{
           console.log(res.data)
           this.comm=res.data
       })
        
    }
    
}
</script>
<style scoped>

#detail{
    width: 800px;
    height: auto;
    background: rgb(216, 216, 216);
    margin: 20px auto;
}
.show{
    width: 100%;
    height: 80px;
    background: #fff;
    margin-top: 20px;
}
.form{
    width: 100%;
    height: 50px;
}
.form input{
    width: 85%;
    height: 100%;
}
.form button{
    width: 80px;
    height: 50px;
    background: rgb(132, 184, 243);
    color: #fff;
    margin-left: 10px;
}
.show h1{
    font-size: 22px;
    color: #000;
}
p{
    font-size: 15px;
    color: #000;
}
</style>
