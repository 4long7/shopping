(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49fe706e"],{"1cc2":function(t,a,n){"use strict";var s=n("d65b"),e=n.n(s);e.a},6407:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",[t.pagination?n("ul",{staticClass:"pagination"},[n("li",{class:{disabled:!t.pagination.has_pre}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.setPage(t.pagination.current_page-1)}}},[t._v("上一页")])]),t._l(t.pagination.total_pages,function(a){return n("li",{key:a,class:{active:a==t.pagination.current_page}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.setPage(a)}}},[t._v(t._s(a))])])}),n("li",{class:{disabled:!t.pagination.has_next}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.setPage(t.pagination.current_page+1)}}},[t._v("下一页")])])],2):t._e()])},e=[],i={name:"pagination",props:{pagination:{type:Object}},methods:{setPage:function(t){this.$emit("pageNum",t)}}},c=i,r=(n("7654"),n("2877")),o=Object(r["a"])(c,s,e,!1,null,"4e7c2246",null);a["a"]=o.exports},"6a0c":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"contarner"},[n("div",{staticClass:"banner"},[n("div",{staticClass:"content"},[n("p",[t._v("房屋出租")]),n("button",{staticClass:"btn",on:{click:t.goShop}},[t._v("住房")])])]),n("div",{staticClass:"shop-card"},[n("h1",{staticClass:"card-title"},[t._v("Our Products")]),n("div",{staticClass:"product"},t._l(t.products,function(t){return n("ShopCard",{key:t.id,attrs:{product:t}})}),1)]),n("Pagination",{attrs:{pagination:t.pagination},on:{pageNum:t.pageNum}})],1)},e=[],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"product-card"},[n("router-link",{attrs:{to:{name:"Details",params:{id:t.product.id}}}},[n("div",{staticClass:"product-img",style:"background:url("+t.product.imageUrl+") center/cover no-repeat"},[n("div",{staticClass:"details"},[t._v("详情")])]),n("h3",{staticClass:"product-title"},[t._v(t._s(t.product.title))])]),n("div",{staticClass:"product-price"},[t._v("\n    $"+t._s(t.product.origin_price)+"元\n    "),n("btnLoading",{attrs:{product:{id:t.product.id,qty:1}}})],1)],1)},c=[],r=n("6cde"),o={name:"shop-card",props:{product:{type:Object}},components:{btnLoading:r["a"]}},u=o,d=(n("1cc2"),n("2877")),p=Object(d["a"])(u,i,c,!1,null,"72380136",null),l=p.exports,g=n("6407"),f={name:"home",data:function(){return{}},computed:{pagination:function(){return this.$store.getters.pageNum},products:function(){return this.$store.getters.filterProduct}},methods:{pageNum:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.commit("PAGE_NUM",t)},goShop:function(){var t=document.querySelector(".shop-card");window.scrollTo({top:t.offsetTop-20,behavior:"smooth"})}},components:{ShopCard:l,Pagination:g["a"]}},v=f,h=(n("c88c"),Object(d["a"])(v,s,e,!1,null,"7adebd42",null));a["default"]=h.exports},"6cde":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"btn",attrs:{disabled:t.isStatus===t.product.id},on:{click:function(a){return t.addCard(t.product.id)}}},[t.isStatus===t.product.id?n("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._t("default",[t._v("添加")])],2)},e=[],i={name:"btnLoading",data:function(){return{isStatus:""}},props:{product:{type:Object}},methods:{alert:function(){var t=this.$store.state.isAddCart;t.prevId===this.product.id&&""!==t.message&&this.$bus.$emit("message",t.message,"warning")},addCard:function(t){var a=this;this.isStatus=t;var n=this.product.qty>=1?this.product.qty:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("api","/cart");this.axios.post(s,{data:{product_id:t,qty:n}}).then(function(t){t.data.success&&(a.isStatus="",a.$bus.$emit("message",t.data.message,"warning"),a.$store.dispatch("getCart"))})}}},c=i,r=n("2877"),o=Object(r["a"])(c,s,e,!1,null,null,null);a["a"]=o.exports},7654:function(t,a,n){"use strict";var s=n("de4e"),e=n.n(s);e.a},c803:function(t,a,n){},c88c:function(t,a,n){"use strict";var s=n("c803"),e=n.n(s);e.a},d65b:function(t,a,n){},de4e:function(t,a,n){}}]);
//# sourceMappingURL=chunk-49fe706e.6f131544.js.map