(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-681a4d61"],{"626af":function(t,r,s){},"9f1a":function(t,r,s){"use strict";s.r(r);var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"checkout"},[s("table",[t._m(0),s("tbody",[t._l(t.order.products,function(r){return s("tr",{key:r.id},[s("td",[t._v(t._s(r.product.title))]),s("td",[t._v(t._s(r.qty)+"/"+t._s(r.product.unit))]),s("td",[t._v(t._s(r.final_total)+" 元")])])}),s("tr",{staticClass:"total"},[s("td",[t._v("总价")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.order.total)+"元")])]),s("tr",[s("th",[t._v("Email")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",[t._v("姓名")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",[t._v("电话")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",[t._v("地址")]),s("td",{attrs:{colspan:"2"}},[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",[t._v("付款状态")]),s("td",{attrs:{colspan:"2"}},[t.order.is_paid?s("span",{staticClass:"order-success"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])],2)]),!1===t.order.is_paid?s("div",{staticClass:"wrap-btn"},[s("button",{staticClass:"btn",on:{click:t.payOrder}},[t._v("确认付款")])]):t._e()])},a=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("thead",[s("tr",[s("th",[t._v("品名")]),s("th",[t._v("数量")]),s("th",[t._v("单价")])])])}],o={name:"checkout",data:function(){return{orderId:"",order:{products:[],user:{}}}},mounted:function(){this.orderId=this.$route.params.id,this.getOrder(this.ispaid)},methods:{ispaid:function(){!0===this.order.is_paid?this.$emit("timelineStatus",3):this.$emit("timelineStatus",2)},getOrder:function(t){var r=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("api","/order/").concat(this.orderId);this.axios.get(s).then(function(s){r.order=s.data.order,t&&t()})},payOrder:function(){var t=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("api","/pay/").concat(this.orderId);this.axios.post(r).then(function(r){console.log("完成付款"),t.$router.push("/order/order_end"),t.$emit("timelineStatus",4),t.getOrder()})}}},i=o,n=(s("bbe7"),s("2877")),d=Object(n["a"])(i,e,a,!1,null,"27c5f721",null);r["default"]=d.exports},bbe7:function(t,r,s){"use strict";var e=s("626af"),a=s.n(e);a.a}}]);
//# sourceMappingURL=chunk-681a4d61.7c8ad91e.js.map