(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{326:function(t,e,n){"use strict";n.r(e);var r,c=n(28),o=n(9),f=(n(58),n(18),n(104),"https://data.miuier.com/data/"),h=f+"index.json",d=f+"devices.json",l=(r={data:function(){return{site:[],devices:[],title:"MIUI 第"+this.$route.params.id+"周发布公告及更新日志 - MIUI官方ROM仓库"}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h).then((function(t){return t.json()}));case 2:return t.site=e.sent,e.next=5,fetch(d).then((function(t){return t.json()}));case 5:t.devices=e.sent;case 6:case"end":return e.stop()}}),e)})))()})),fetchOnServer:!0,fetchKey:"site-sidebar"},Object(c.a)(r,"fetchKey",(function(t){return this.someOtherData+t("sidebar")})),Object(c.a)(r,"head",(function(){return{title:this.title,htmlAttrs:{lang:"zh-CN"}}})),r),v=l,m=n(43),component=Object(m.a)(v,(function(){var t=this;return(0,t._self._c)("div",[t._v(t._s(t.$route.params.id)+" CN")])}),[],!1,null,null,null);e.default=component.exports}}]);