(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],f=0,d=[];f<o.length;f++)i=o[f],s[i]&&d.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={site:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([1,"chunk-vendors","chunk-common"]),r()})({1:function(e,t,r){e.exports=r("28f0")},"28f0":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[e.show?r("div",{staticClass:"notification",class:e.type},[e._v(e._s(e.message))]):e._e()])},a=[],i={props:["type","message"],data:function(){return{show:!1}},mounted:function(){this.show=!0;var e=2e3;"error"===this.type&&(e*=4),setTimeout(function(){this.show=!1}.bind(this),e)}},o=i,l=r("2877"),c=Object(l["a"])(o,s,a,!1,null,null,null);c.options.__file="Notification.vue";var u=c.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mx-auto max-w-sm"},[e._m(0),r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("form",{attrs:{method:"post","accept-charset":"UTF-8"}},[r("input",{attrs:{type:"hidden",name:e.csrfTokenName},domProps:{value:e.csrfTokenValue}}),r("input",{attrs:{type:"hidden",name:"action",value:"users/login"}}),r("text-field",{ref:"loginNameField",attrs:{label:"Username or email",id:"loginName",name:"loginName"},model:{value:e.loginName,callback:function(t){e.loginName=t},expression:"loginName"}}),r("password-field",{ref:"passwordField",attrs:{label:"Password",id:"password",name:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._m(1),r("input",{staticClass:"btn btn-primary w-full",attrs:{type:"submit",disabled:!e.formValidates(),value:"Login"}})],1),e._m(2)])]),e._m(3)])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8 mb-6 text-center"},[r("div",{staticClass:"pt-8 pb-3"},[r("img",{attrs:{src:"/craftnetresources/id/dist/images/craftid.svg",width:"80",height:"80"}})]),r("h1",{staticClass:"mb-0"},[e._v("Craft ID")]),r("p",{staticClass:"lead"},[e._v("Manage your Craft ID.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-check mb-2"},[r("label",{staticClass:"form-check-label"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"rememberMe",value:"1"}}),e._v("\n                        Remember me\n                    ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"mt-4"},[r("a",{attrs:{href:"/forgotpassword"}},[e._v("Forgot your password?")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-4 text-center"},[r("p",[e._v("Don’t have an account? "),r("a",{attrs:{href:"/register"}},[e._v("Sign up")]),e._v(".")])])}],m=r("c93e"),p=r("d8ab"),h={props:["rememberedUsername"],components:Object(m["a"])({},p["a"]),data:function(){return{loginName:"",password:""}},computed:{csrfTokenName:function(){return Craft.csrfTokenName},csrfTokenValue:function(){return Craft.csrfTokenValue}},methods:{passwordValidates:function(){if(this.password.length>=6)return!0},formValidates:function(){return!(!this.loginName.length||!this.passwordValidates())}},mounted:function(){this.rememberedUsername&&(this.loginName=this.rememberedUsername),0===this.loginName.length?this.$refs.loginNameField.$children[0].$el.focus():this.$refs.passwordField.$children[0].$el.focus()}},v=h,g=(r("f483"),Object(l["a"])(v,f,d,!1,null,null,null));g.options.__file="LoginForm.vue";var b=g.exports;window.craftIdSite=new n["default"]({render:function(e){return e(b)},data:function(){return{loading:!0,registerFormLoading:!1}},components:{Notification:u,LoginForm:b},methods:{register:function(){this.registerFormLoading=!0,this.$refs.registerform.submit()}},mounted:function(){this.loading=!1}}).$mount("#site")},8380:function(e,t,r){},f483:function(e,t,r){"use strict";var n=r("8380"),s=r.n(n);s.a}});
//# sourceMappingURL=site.js.map