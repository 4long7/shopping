(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2dbff6"],{a174:function(a,s,e){},fe1e:function(a,s,e){"use strict";e.r(s);var t=function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"login"},[e("form",{staticClass:"login-form",on:{submit:function(s){return s.preventDefault(),a.loginHandler()}}},[e("h1",[a._v("登录")]),e("div",{staticClass:"username"},[e("i",{staticClass:"fas fa-user"}),e("input",{directives:[{name:"model",rawName:"v-model",value:a.userData.username,expression:"userData.username"}],attrs:{type:"username",name:"username",placeholder:"输入账号"},domProps:{value:a.userData.username},on:{input:function(s){s.target.composing||a.$set(a.userData,"username",s.target.value)}}})]),e("div",{staticClass:"password"},[e("i",{staticClass:"fas fa-key"}),e("input",{directives:[{name:"model",rawName:"v-model",value:a.userData.password,expression:"userData.password"}],attrs:{type:"password",name:"password",placeholder:"输入密码"},domProps:{value:a.userData.password},on:{input:function(s){s.target.composing||a.$set(a.userData,"password",s.target.value)}}})]),e("button",{staticClass:"btn"},[a._v("登录")])])])},n=[],o={name:"Login",data:function(){return{userData:{username:"4long7@gmail.com",password:"689161"}}},methods:{loginHandler:function(){var a=this;this.$store.commit("IS_LOADING",!0);var s="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.axios.post(s,this.userData).then(function(s){console.log(s.data),s.data.success?(a.$router.push("/admin/products"),console.log("admin",s.data)):a.$bus.$emit("message",s.data.message,"warning"),a.$store.commit("IS_LOADING",!1)})}}},r=o,i=(e("ff7d"),e("2877")),u=Object(i["a"])(r,t,n,!1,null,"320c074b",null);s["default"]=u.exports},ff7d:function(a,s,e){"use strict";var t=e("a174"),n=e.n(t);n.a}}]);
//# sourceMappingURL=chunk-3d2dbff6.7eda1af0.js.map