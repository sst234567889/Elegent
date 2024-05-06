import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../components/about.vue"
import Home from "../components/Home.vue"
import Face from "../components/face.vue"
import Deng from "../components/deng.vue"   
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 


Vue.use(ElementUI)


Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },
        
      
        {
            path:"/about",
            component:About
        },
        {
            path:"/face",
            component:Face
        },
        {
            path:"/deng",
            component:Deng
        },
       
    ]

})

  
export default router;

