(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edc732a4"],{"22fb":function(t,e,a){"use strict";var i=a("ee34"),s=a.n(i);s.a},"3e67":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-alert",class:{"is-display":t.isDisplay}},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isDisplay,expression:"isDisplay"}],staticClass:"alert-main"},[a("button",{staticClass:"alert-btn",on:{click:function(e){return t.$emit("isDisplay",!t.isDisplay)}}},[a("i",{staticClass:"fas fa-times"})]),t._t("default")],2)])],1)},s=[],n={name:"createAlert",data:function(){return{}},props:{isDisplay:{type:Boolean,default:!1}}},r=n,o=(a("6aa9"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"09068e76",null);e["a"]=c.exports},"46a9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("div",{staticClass:"products-top"},[a("button",{staticClass:"btn",on:{click:function(e){return t.moduleProduct({})}}},[t._v("建立新的产品")])]),a("CreateAlert",{attrs:{isDisplay:t.isRemove},on:{isDisplay:function(e){t.isRemove=e}}},[a("div",{staticClass:"remove-product"},[a("h3",[t._v("是否删除")]),a("div",{staticClass:"remove-body"},[t._v("您真的不需要这个产品了吗？ 考虑好在删除")]),a("button",{staticClass:"btn",on:{click:function(e){t.isRemove=!1}}},[t._v("取消")]),a("button",{staticClass:"btn",on:{click:function(e){return t.deleteHandler()}}},[t._v("删除")])])]),a("CreateAlert",{attrs:{isDisplay:t.isDisplay},on:{isDisplay:function(e){t.isDisplay=e}}},[a("createProduct",{attrs:{item:t.item},on:{isDisplay:function(e){t.isDisplay=e}}})],1),a("div",{staticClass:"products-body"},[a("table",[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",[t._v(t._s(t._f("currency")(e.price)))]),a("td",[t._v(t._s(e.is_enabled))]),a("td",[a("button",{staticClass:"btn",on:{click:function(a){return t.removeDisplay(e)}}},[t.status.isDisplay&&t.status.isId==e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n              删除\n            ")]),a("button",{staticClass:"btn",on:{click:function(a){return t.moduleProduct(e)}}},[t._v("编辑")])])])}),0)])]),a("Pagination",{attrs:{pagination:t.pagination},on:{pageNum:t.pageNum}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分类")]),a("th",[t._v("产品名称")]),a("th",[t._v("原价")]),a("th",[t._v("售价")]),a("th",[t._v("是否可用")]),a("th",[t._v("编辑")])])])}],n=a("3e67"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"create-title"},[t.product.id?a("h3",[t._v("修改产品")]):a("h3",[t._v("创建产品")])]),a("div",{staticClass:"create-body"},[a("form",{staticClass:"create-from"},[a("ul",{staticClass:"form-left"},[a("li",[a("label",[t._v("输入图片网址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.imageUrl,expression:"product.imageUrl"}],attrs:{type:"text"},domProps:{value:t.product.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.product,"imageUrl",e.target.value)}}})]),a("li",[a("label",{attrs:{for:"file"}},[t._v("或 上传图片")]),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),a("input",{ref:"files",attrs:{type:"file"},on:{change:function(e){return t.uploadFile()}}})])]),a("ul",{staticClass:"form-right"},[a("li",[a("label",[t._v("标题")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],attrs:{type:"text",placeholder:"标题"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),a("li",{staticClass:"sort"},[a("div",[a("label",[t._v("分类")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.category,expression:"product.category"}],attrs:{type:"text",placeholder:"分类"},domProps:{value:t.product.category},on:{input:function(e){e.target.composing||t.$set(t.product,"category",e.target.value)}}})]),a("div",[a("label",[t._v("单位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.unit,expression:"product.unit"}],attrs:{type:"text",placeholder:"单位"},domProps:{value:t.product.unit},on:{input:function(e){e.target.composing||t.$set(t.product,"unit",e.target.value)}}})])]),a("li",{staticClass:"price"},[a("div",[a("label",[t._v("原价")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.origin_price,expression:"product.origin_price"}],attrs:{type:"text",placeholder:"原价"},domProps:{value:t.product.origin_price},on:{input:function(e){e.target.composing||t.$set(t.product,"origin_price",e.target.value)}}})]),a("div",[a("label",[t._v("售价")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],attrs:{type:"text",placeholder:"售价"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})])]),a("li",[a("label",[t._v("产品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],attrs:{placeholder:"产品描述"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),a("li",[a("label",[t._v("说明内容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],attrs:{placeholder:"说明内容"},domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}})]),a("li",[a("div",{staticClass:"checkbox-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.is_enabled,expression:"product.is_enabled"}],attrs:{type:"checkbox",id:"couponCheck"},domProps:{checked:Array.isArray(t.product.is_enabled)?t._i(t.product.is_enabled,null)>-1:t.product.is_enabled},on:{change:function(e){var a=t.product.is_enabled,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,r=t._i(a,n);i.checked?r<0&&t.$set(t.product,"is_enabled",a.concat([n])):r>-1&&t.$set(t.product,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.product,"is_enabled",s)}}}),a("label",{attrs:{for:"couponCheck"}},[t._v("是否启用")])])])])])]),a("div",{staticClass:"form-btn"},[a("button",{staticClass:"btn",on:{click:function(e){return t.$emit("isDisplay",!1)}}},[t._v("取消")]),a("button",{staticClass:"btn",attrs:{disabled:t.status.isDisplay},on:{click:function(e){return t.updateHandler()}}},[t.status.isDisplay?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n      确认\n    ")])])])},o=[],c={name:"createProduct",data:function(){return{status:{isDisplay:!1,fileUploading:!1}}},props:{item:{type:Object}},computed:{product:function(){return this.item}},methods:{updateHandler:function(){var t="post";this.item.id&&(t="put"),this.$store.dispatch("updateProduct",{method:t,item:this.item,fun:this.promptHandler,status:this.status}),this.status.isDisplay=!0},promptHandler:function(t){this.$bus.$emit("message",t,"warning"),this.$emit("isDisplay",!1)},uploadFile:function(){var t=this;console.log(this.$refs),this.status.fileUploading=!0;var e=this.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("api","/admin/upload");this.axios.post(i,a,{headers:{"Content-Type":"multipart/for-data"}}).then(function(e){e.data.success?(t.$set(t.product,"imageUrl",e.data.imageUrl),t.status.fileUploading=!1):t.$bus.$emit("message",e.data.message,"warning")})}}},l=c,u=(a("e896"),a("2877")),p=Object(u["a"])(l,r,o,!1,null,"200a6733",null),d=p.exports,v=a("6407"),m={name:"Products",data:function(){return{isDisplay:!1,isRemove:!1,removeItem:{},status:{isDisplay:!1,isId:""},item:{}}},mounted:function(){this.$store.dispatch("getProducts",1)},computed:{pagination:function(){return this.$store.state.pagination},products:function(){return this.$store.state.products}},methods:{pageNum:function(t){this.$store.dispatch("getProducts",t)},removeDisplay:function(t){this.removeItem=t,this.isRemove=!0},deleteHandler:function(){var t=this.removeItem;this.status.isDisplay=!0,this.status.isId=t.id,this.$store.dispatch("updateProduct",{method:"delete",item:t,status:this.status}),this.isRemove=!1},moduleProduct:function(t){this.isDisplay=!0,this.item=Object.assign({},t)}},components:{CreateAlert:n["a"],createProduct:d,Pagination:v["a"]}},f=m,g=(a("22fb"),Object(u["a"])(f,i,s,!1,null,"7ec66b9a",null));e["default"]=g.exports},6407:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[t.pagination?a("ul",{staticClass:"pagination"},[a("li",{class:{disabled:!t.pagination.has_pre}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.setPage(t.pagination.current_page-1)}}},[t._v("上一页")])]),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,class:{active:e==t.pagination.current_page}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.setPage(e)}}},[t._v(t._s(e))])])}),a("li",{class:{disabled:!t.pagination.has_next}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.setPage(t.pagination.current_page+1)}}},[t._v("下一页")])])],2):t._e()])},s=[],n={name:"pagination",props:{pagination:{type:Object}},methods:{setPage:function(t){this.$emit("pageNum",t)}}},r=n,o=(a("7654"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,"4e7c2246",null);e["a"]=c.exports},"6aa9":function(t,e,a){"use strict";var i=a("8c0a"),s=a.n(i);s.a},7654:function(t,e,a){"use strict";var i=a("de4e"),s=a.n(i);s.a},"82b6":function(t,e,a){},"8c0a":function(t,e,a){},de4e:function(t,e,a){},e896:function(t,e,a){"use strict";var i=a("82b6"),s=a.n(i);s.a},ee34:function(t,e,a){}}]);
//# sourceMappingURL=chunk-edc732a4.b7256990.js.map