<template>
    <div id="hello">
      <p class="wenzi">人脸识别登录系统</p>
      <div class="box">
        <img src="../assets/a96d27784f20bf6f569d0529c6b5dae.jpg"/>
      </div>
      <p class="wenzi">头像</p>
     <div class="kuang">
      <p class="wenzi1">账号：</p>
      <input type="text" placeholder="请输入你的账号"  v-model="username"   class="zhanghao"/>
     </div>
      <div class="kuang1">
        <p class="wenzi2">密码：</p>
        <input type="text" placeholder="请输入你的密码" v-model="password" class="zhanghao"/>
      </div>
      <div class="anniu">
        <button class="ann" @click="login" >登录</button>
        <router-link to="/about" class="ann1">注册</router-link>
        <router-link to="/face" class="ann2">人脸识别</router-link>
      </div>
  
    </div>
  </template>
  


<script>
import axios from 'axios';

export default {
  data() { 
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('/api/home', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    }
  }
};
</script>





      

      


  </script>
  <style>
   #hello{
    width: 100%;
    height: 650px;
    border: 0px solid red;
   
   } 
   .box{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    border-radius: 50%;
    margin: 0 auto;
   }
   .box img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
   }
   .wenzi{
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
   }
   .wenzi1{
    font-size: 20px;
    font-weight: bolder;
    float: left;
    margin-left: 70px;
   
   }
   .zhanghao{
    float: left;
    margin-top: 23px;
   }
   .wenzi2{
    font-size: 20px;
    font-weight: bolder;
    margin-left: -60px;
   float: left;
    
   
   
   }
   .kuang{
    width: 100%;
    height: 50px;
    border: 0px solid red;
   }
   .kuang1{
    width: 100%;
    height: 50px;
    border: 0px solid red;
   }
   .anniu{
    width: 100%;
    height: 50px;
    border: 0px solid red;
    margin-top: 30px;
   }
   .ann{
    width: 50px;
    height: 30px;
    margin-top: 20px;
    margin-left: 90px;
    margin-right: 40px;
    text-decoration: none;
    color: black;
   }
   .ann1{
    width: 50px;
    height: 30px;
    margin-top: 20px;
    color: black;
    margin-right: 40px;
    text-decoration: none;
   }
   .ann2{
    width: 70px;
    height: 30px;
    margin-top: 20px;
    text-decoration: none;
    margin-right: 40px;
    color: black;
   }
  </style>
  <!-- Add "scoped" attribute to limit CSS to this component only -->