(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0bb3":function(t,n,e){"use strict";var s=e("5321"),i=e.n(s);i.a},"2fdb":function(t,n,e){"use strict";var s=e("5ca1"),i=e("d2c8"),r="includes";s(s.P+s.F*e("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f0e":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-page"},[e("my-table",{attrs:{list:t.list}})],1)},i=[],r=(e("cadf"),e("551c"),e("097d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table"},[e("div",{staticClass:"left"},[e("div",{ref:"leftInner",staticClass:"left-inner"},[e("FixedHeaderTable",{attrs:{list:t.list,scrollTop:t.scrollTop}})],1)]),e("div",{staticClass:"main"},[e("FixedHeaderTable",{ref:"main",staticClass:"main-inner",attrs:{list:t.list},on:{scroll:t.scroll}})],1)])}),a=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"contentWrap",staticClass:"content-wrap"},[e("div",{staticClass:"content-wrap-inner"},[e("div",{staticClass:"fixed-header"},[e("table",[e("colgroup",t._l(t.list.headers,function(t){return e("col",{attrs:{width:"80"}})})),e("tr",t._l(t.list.headers,function(n){return e("th",[t._v(t._s(n))])}))])]),e("div",{ref:"mainContent",staticClass:"main-content"},t._l(t.chunks,function(n,s){return e("div",[t.showChunk(s)?e("table",[e("colgroup",t._l(t.list.headers,function(t){return e("col",{attrs:{width:"80"}})})),e("tbody",t._l(n,function(n){return e("tr",t._l(n,function(n){return e("td",[t._v(t._s(n))])}))}))]):t._e(),t.showChunk(s)?t._e():e("div",{style:{height:t.chunkLength*t.rowHeight+1+"px",width:"100%"}})])}))])])},o=[],u=35,l={props:{list:{type:Object,required:!0},scrollTop:{default:0},scroll:{default:!0},chunkLength:{default:200}},data:function(){return{innerScrollTop:0,rowHeight:u}},mounted:function(){var t=this,n=this.$refs.mainContent,e=this,s=function(){var n=e.$refs.mainContent.scrollTop;e.$emit("scroll",n),t.innerScrollTop=n};/QQ/.test(navigator.userAgent)?n.addEventListener("touchmove",s):(n.addEventListener("scroll",s),n.addEventListener("scrollend",s)),console.log(this.chunks)},watch:{scrollTop:function(t){this.$refs.mainContent.scrollTop=t}},computed:{chunks:function(){for(var t=[],n=this.list.content,e=0;e<n.length;e+=this.chunkLength)t.push(n.slice(e,e+this.chunkLength));return t},currentChunkIndex:function(){var t=parseInt(this.innerScrollTop/(this.chunkLength*this.rowHeight+1));return t}},methods:{showChunk:function(t){return Math.abs(this.currentChunkIndex-t)<=1}}},f=l,p=(e("4fa7"),e("2877")),d=Object(p["a"])(f,c,o,!1,null,"0529de2e",null);d.options.__file="FixedHeaderTable.vue";var h=d.exports,v={components:{FixedHeaderTable:h},props:{list:{type:Object,require:!0}},data:function(){return{scrollTop:0}},mounted:function(){},methods:{scroll:function(t){this.scrollTop=t}}},_=v,m=(e("0bb3"),Object(p["a"])(_,r,a,!1,null,"d18b9240",null));m.options.__file="Table.vue";var g=m.exports,b={headers:["学号","姓名","性别","生日","籍贯","年龄","工作","学历","爱好"],content:[]},C=["张三丰","李四","范冰冰","刘亦菲","李晨","吴亦凡","阿信"],w=0,x=function(){return w>=C.length-1&&(w=0),C[w++]},T={components:{myTable:g},data:function(){return{list:b}},created:function(){for(var t=this.$route.query.count,n=this.list,e=0;e<t;e++)n.content.push([e,x(),"男","2000-12","上海市","18","程序员","本科","健身"])}},k=T,y=Object(p["a"])(k,s,i,!1,null,null,null);y.options.__file="Table.vue";n["default"]=y.exports},"407c":function(t,n,e){},"4d3f":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"form"},[e("h2",[t._v("表单页面")]),e("form",{attrs:{action:""}},[e("label",[e("span",[t._v("收件人")]),e("Input",{staticClass:"input"})],1)])])},i=[],r=(e("cadf"),e("551c"),e("097d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("TagInput",{attrs:{tags:t.tags},on:{add:t.popup,del:t.del}}),e("InputPopup",{ref:"popup",attrs:{tags:t.tags},on:{select:t.select}})],1)}),a=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tag-input"},[e("div",{staticClass:"input"},[e("div",{staticClass:"tags"},t._l(t.tags,function(n,s){return e("div",{staticClass:"tag"},[e("span",[t._v(t._s(n))]),e("a",{staticClass:"delete",on:{click:function(n){t.del(s)}}},[t._v("X")])])})),e("a",{class:"add "+(t.tags.length>=t.limit?" disabled":""),on:{click:t.add}},[t._v("+")])])])},o=[],u={props:{tags:{type:Array},limit:{default:3}},methods:{add:function(){if(this.tags.length>=this.limit)return!1;this.$emit("add")},del:function(t){this.$emit("del",t)}}},l=u,f=(e("a525"),e("2877")),p=Object(f["a"])(l,c,o,!1,null,"486330d6",null);p.options.__file="TagInput.vue";var d=p.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"popup",staticClass:"popup"},[e("div",{staticClass:"header"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",attrs:{placeholder:"请输入"},domProps:{value:t.input},on:{input:function(n){n.target.composing||(t.input=n.target.value)}}}),e("a",{staticClass:"cancel",attrs:{href:"#"},on:{click:t.close}},[t._v("取消")])]),e("div",{staticClass:"content",on:{touchmove:t.blur}},t._l(t.filtedList,function(n){return e("div",{staticClass:"item",on:{click:function(e){t.select(n)}}},[t._v("\n      "+t._s(n)+"\n    ")])}))])},v=[],_=(e("6762"),e("2fdb"),["何炅","谢啦","谢霆锋","谢军","唐嫣","唐老鸭","刘诗诗","周杰伦","周树人","杨幂","赵又廷","谢霆锋","阿娇","黄日华","成龙","Baby","李连杰","周润发","胡歌","马云","马化腾","张小龙"]),m={props:{tags:{type:Array}},data:function(){return{show:!1,list:_,input:""}},methods:{open:function(){this.$refs.popup.style.display="block",this.$refs.input.focus()},close:function(){this.$refs.popup.style.display="none",this.show=!1},select:function(t){this.$emit("select",t),this.input="",this.close()},blur:function(){this.$refs.input.blur()}},computed:{filtedList:function(){var t=this;return this.list.filter(function(n){return!t.tags.includes(n)&&(!t.input||-1!==n.indexOf(t.input))})}}},g=m,b=(e("5370"),Object(f["a"])(g,h,v,!1,null,"f7a5594a",null));b.options.__file="InputPopup.vue";var C=b.exports,w={components:{TagInput:d,InputPopup:C},data:function(){return{input:"",tags:["周杰伦","林俊杰"]}},methods:{popup:function(){this.$refs.popup.open()},select:function(t){this.tags.push(t)},del:function(t){this.tags.splice(t,1)}}},x=w,T=(e("fe6f"),Object(f["a"])(x,r,a,!1,null,"168c711e",null));T.options.__file="Input.vue";var k=T.exports,y={components:{Input:k}},$=y,I=(e("e5fd"),Object(f["a"])($,s,i,!1,null,"d73c9868",null));I.options.__file="Input.vue";n["default"]=I.exports},"4fa7":function(t,n,e){"use strict";var s=e("85ba"),i=e.n(s);i.a},5147:function(t,n,e){var s=e("2b4c")("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[s]=!1,!"/./"[t](n)}catch(t){}}return!0}},5321:function(t,n,e){},5370:function(t,n,e){"use strict";var s=e("407c"),i=e.n(s);i.a},6762:function(t,n,e){"use strict";var s=e("5ca1"),i=e("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")("includes")},"6f06":function(t,n,e){},7203:function(t,n,e){},"85ba":function(t,n,e){},a525:function(t,n,e){"use strict";var s=e("7203"),i=e.n(s);i.a},aae3:function(t,n,e){var s=e("d3f4"),i=e("2d95"),r=e("2b4c")("match");t.exports=function(t){var n;return s(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==i(t))}},d2c8:function(t,n,e){var s=e("aae3"),i=e("be13");t.exports=function(t,n,e){if(s(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},d76b:function(t,n,e){},e5fd:function(t,n,e){"use strict";var s=e("6f06"),i=e.n(s);i.a},fe6f:function(t,n,e){"use strict";var s=e("d76b"),i=e.n(s);i.a}}]);
//# sourceMappingURL=about.cfb2ffb3.js.map