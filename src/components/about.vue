<template>
   
    <div>
        <div id="all">
            <div class="wenzi">注册</div>
            <div class="kuang4">
               <div class="wenzi5">用户名:</div>
               <input type="text" placeholder="请输入你的用户名" class="name"/>
            </div>
            <div class="kuang5">
                <div class="wenzi6">账号:</div>
                <input type="text" placeholder="请输入你的账号" class="name1"/>
            </div>
            <div class="kuang6">
                <div class="wenzi6">邮箱:</div>
                <input type="text" placeholder="请输入你的邮箱" class="name2"/>
            </div>
            <div class="kuang7">
                <div class="wenzi6">密码:</div>
                <input type="text" placeholder="请输入你的密码" class="name3"/>
            </div>
            <div class="kuang8">
                <button class="btn">确认注册</button>
                <router-link to="/" class="fanhui">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<style>
  #all{
    width: 100%;
    height: 650px;
    border: 1px solid red;
   
   } 
   .wenzi{
    font-size: 30px;
    font-weight: bolder;
   }
   .kuang4{
    width: 100%;
    height: 30px;
    border: 0px solid red;
    margin-top: 20px;
   }
   .wenzi5{
    font-size: 15px;
    font-weight: bolder;
    float: left;
    
    margin-left: 70px;
   }
   .name{
    margin-left: 10px;
 
   }
   .kuang5{
    width: 100%;
    height: 30px;
    border: 0px solid red;
    margin-top: 20px;
   }
   .wenzi6{
    font-size: 15px;
    font-weight: bolder;
    float: left;
    
    margin-left: 70px;
   }
   .name1{
    margin-left: 25px;
 
   }
   .kuang6{
    width: 100%;
    height: 30px;
    border: 0px solid red;
    margin-top: 20px;
   }
   .name2{
    margin-left: 25px;
 
   }
   .kuang7{
    width: 100%;
    height: 30px;
    border: 0px solid red;
    margin-top: 20px;
   }
   .name3{
    margin-left: 25px;
 
   }
   .kuang8{
    width: 100%;
    height: 30px;
    border: 0px solid red;
    margin-top: 100px;
   }
   .btn{
    widows: 50px;
    height: 30px;
    margin-left: 100px;
    margin-right: 80px;
   }
   .fanhui{
    text-decoration: none;
    color: black;
   }
</style>