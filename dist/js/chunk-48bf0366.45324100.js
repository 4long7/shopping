(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48bf0366"],{"270a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"contarner"},[a("div",{staticClass:"banner",style:"background:url("+t.product.imageUrl+") center/cover no-repeat"},[a("div",{staticClass:"content"},[a("span",[t._v(t._s(t.product.title))])])]),a("div",{staticClass:"details"},[t._m(0),a("div",{staticClass:"details-content"},[a("div",{staticClass:"details-detail"},[a("h2",[t._v("详情")]),a("p",[t._v(t._s(t.product.description))])]),a("div",{staticClass:"details-info"},[a("h2",[t._v("信息")]),a("ul",[t.product.price?a("li",[t._v("原价: "+t._s(t.product.price))]):t._e(),a("li",[t._v("现价: "+t._s(t.product.origin_price))]),a("li",[t._v("是否可以定： "+t._s(t.product.is_enabled?"可以":"不行"))]),a("li",[t._v("类别:"+t._s(t.product.category))]),a("li",[t._v("数量:"+t._s(t.product.num)+" "+t._s(t.product.unit))]),a("li",[a("label",{attrs:{for:""}},[t._v("要几套")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.itemNum,expression:"itemNum"}],on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){var s="_value"in t?t._value:t.value;return s});t.itemNum=s.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("请选择")]),t._l(8,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])})],2)]),a("li",[a("btnLoading",{attrs:{product:{id:t.product.id,qty:t.itemNum}}},[t._v("\n              添加购物车\n              "),a("i",{staticClass:"fas fa-cart-plus"})])],1)])]),a("div",{staticClass:"details-extras"},[a("h2",[t._v("其他")]),a("div",[t._v(t._s(t.product.content))])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail-img"},[e("img",{attrs:{src:a("978e"),alt:""}}),e("img",{attrs:{src:a("31f46"),alt:""}}),e("img",{attrs:{src:a("c156"),alt:""}})])}],r=a("6cde"),n={name:"detail",data:function(){return{itemNum:""}},mounted:function(){this.$store.dispatch("getProduct",this.$route.params.id)},computed:{product:function(){return this.$store.state.product}},components:{btnLoading:r["a"]}},c=n,o=(a("5188"),a("2877")),u=Object(o["a"])(c,e,i,!1,null,"28f575f5",null);s["default"]=u.exports},"31f46":function(t,s,a){t.exports=a.p+"img/product-3.ca5d8437.jpeg"},5188:function(t,s,a){"use strict";var e=a("636c"),i=a.n(e);i.a},"636c":function(t,s,a){},"6cde":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"btn",attrs:{disabled:t.isStatus===t.product.id},on:{click:function(s){return t.addCard(t.product.id)}}},[t.isStatus===t.product.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._t("default",[t._v("添加")])],2)},i=[],r={name:"btnLoading",data:function(){return{isStatus:""}},props:{product:{type:Object}},methods:{alert:function(){var t=this.$store.state.isAddCart;t.prevId===this.product.id&&""!==t.message&&this.$bus.$emit("message",t.message,"warning")},addCard:function(t){var s=this;this.isStatus=t;var a=this.product.qty>=1?this.product.qty:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("api","/cart");this.axios.post(e,{data:{product_id:t,qty:a}}).then(function(t){t.data.success&&(s.isStatus="",s.$bus.$emit("message",t.data.message,"warning"),s.$store.dispatch("getCart"))})}}},n=r,c=a("2877"),o=Object(c["a"])(n,e,i,!1,null,null,null);s["a"]=o.exports},"978e":function(t,s,a){t.exports=a.p+"img/product-4.6a3db9a7.jpeg"},c156:function(t,s,a){t.exports=a.p+"img/product-2.03e5f8d5.jpeg"}}]);
//# sourceMappingURL=chunk-48bf0366.45324100.js.map