<template>
  <div id="about">
    <section class="section">
      <div class="container">
        <div id="header" class="is-overlay">
          Hi I'm 陈家乐 
        </div>
        <div class="columns">
          <div class="column is-two-thirds">
            <div id="profile">
              <img id="avatar"
                src="@/assets/images/programmer-focused-on-code_925x.jpg"
              >
            </div>
            <div class="contenten is-large">
            
            </div>
          </div>
          <div class="column">
             <div id="tenets" class="content">
              <ul class="lists">
                <li>
                  <i class="fas fa-check"></i>
                  Quality
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  Integrity
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content is-large">
          <div class="title">个人简介 </div>
          <div class="content_in">
            <p>傻傻前端程序员</p>
          </div>
           <div class="content_out">
   <p>喜欢篮球，吃甜食</p>
           </div>
              <div class="content_in">
                 <p>完成项目很有成就感</p>
              </div>
                  <div class="content_out">
                     <p>代码没敲完也可以有脸睡觉</p>
                  </div>
        </div>
        <div class="contain"> 
          <div class="title">专业技能 </div>
          <div class="contain_in">
            <ul>
              <li>
                <p>html && css</p>
                <div class="skill">
                  95%
                </div>
                 </li>
                   <li>
                <p>javascript </p>
                <div class="skill">
                  85%
                </div>
                 </li>
                   <li>
                <p>bootstarp && swiper</p>
                <div class="skill">
                  90%
                </div>
                 </li>
                   <li>
                <p>jquery&& zepto</p>
                <div class="skill">
                  90%
                </div>
                 </li>
                   <li>
                <p>vue&&微信小程序</p>
                <div class="skill">
                  70%
                </div>
                 </li>
                   <li>
                <p>ajax && 性能优化</p>
                <div class="skill">
                  95%
                </div>
                 </li>
            </ul>
          </div>
        </div>
        <div class="final">
           <div class="title">自我评价 </div>
           <div class="final_in">
               <div class="topleft"></div>
               <div class="bomright"></div>
               <div class="center">
                 <p>待人真诚热情、为人随和、善于沟通、有良好的人际关系和很强的适应能力。工作认真负责、踏实肯干、具有较强的团体协作精神和独立的工作能力有很强的责任心和工作干劲，不惧挑战。有一定的亲和力及管理能力，思维灵活，反映快，接收能力强，代码规范</p>
               </div>
           </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.lists {
  font-family: 'Poiret One', cursive;
  list-style-type: none;
  li {
    font-size: 3rem;
  }
}
.title{
  width: 200px;
  height: 100px;
  text-align: center;
  margin: 20px auto;
  border-bottom: 1px solid #fff;
  font-size: 18px;
  line-height: 100px;
  color: #fff;
}

.fa-check {
  filter: drop-shadow(3px 3px 7px #414141);
}

#tenets {
  display: flex;
  justify-content: center;
}

#avatar {
  border-radius: 25px;
  box-shadow: 3px 5px 20px #414141;
  height: 250px;
}

#header {
  display: flex;
  justify-content: center;
  font-family: 'Yesteryear', cursive;
  margin-top: 12px;
  // width: 1000px;
}

#profile {
  display: flex;
  justify-content: center;
}
.column{
  width: 200px;
}
.content {
  height: 600px;
  width: 600px;
  background: rbga(255,255,255,0.8);
  margin: 0 auto;
  .content_in{
     width: 250px;
     height: 100px;
     background: rgba(255,255,255,0.5);
    //  margin: 0 auto;
    float: left;
    margin-left: 100px;
     border-radius: 10px;
    //  margin-top: 50px;
     .p{
       color: #fff;
       text-align: center;
     }
  }
  .content_out{
    width: 250px;
     height: 100px;
     background: rgba(255,255,255,0.5);
    //  margin: 0 auto;
    float: right;
    margin-right: 100px;
    // margin-top: 50px;
     border-radius: 10px;
        .p{
       color: #fff;
       text-align: center;
      
     }
  }
}
.column{
  float: left;
}
.contain_in{
  width: 600px;
  height: 600px;
  background: rgba(255,255,255,0.2);
  margin: 30px auto;
  padding-top: 50px;
  box-sizing: border-box;
}
.contain_in ul{
  margin-left: 50px;
  // margin-top: 30px;
}
.contain_in ul li{
  margin-top: 14px;
}
.contain_in ul li:nth-child(1) .skill{
  width: 400px;
  height: 30px;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.contain_in ul li:nth-child(2) .skill{
  width: 360px;
  height: 30px;
  background: rgb(255, 27, 187);
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.contain_in ul li:nth-child(3) .skill{
  width: 370px;
  height: 30px;
  background: rgb(255, 80, 27);
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.contain_in ul li:nth-child(4) .skill{
  width: 370px;
  height: 30px;
  background: rgb(255, 146, 3);
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.contain_in ul li:nth-child(5) .skill{
  width: 320px;
  height: 30px;
  background: rgb(241, 238, 14);
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.contain_in ul li:nth-child(6) .skill{
  width: 360px;
  height: 30px;
  background: rgb(150, 14, 241);
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
}
.final{
  margin: 0 auto;
  width: 800px;
  height: 450px;
}
.final_in{
  width: 100%;
  height: 300px;
  position: relative;
  padding-top: 40px;
}
.final_in .topleft{
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
}
.final_in .bomright{
  width: 50px;
  height: 50px;
  position: absolute;
  left: 800px;
  top: 300px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
}
.final_in .center{
  width: 400px;
  height: 280px;
  margin: 0 auto;
  background: rgba(255,255,255,0.2);
}
.final_in .center p{
  color: #fff;
  text-align: center;

}
@media only screen and (min-width: 384px) {
  #avatar {
    height: 400px;
  }

  #header {
    font-size: 2rem;
  }

  .lists {
    li {
      font-size: 4rem;
    }
  }
}

@media only screen and (min-width: 768px) {
  #profile {
    padding-right: 7px;
    float: left;
    margin-right: 10px;
  }

  #header {
    justify-content: inherit;
    font-size: 2.2rem;
    margin-left: 12px;
  }

  .lists {
    margin-left: -30px;
    li {
      padding-bottom: 60px;
      font-size: 3rem;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .lists {
    li {
      padding-bottom: 40px;
      font-size: 3.8rem;
    }
  }
}
</style>
