(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{320:function(t,e,n){"use strict";n.r(e);var r,c=n(28),o=n(9),f=(n(58),n(18),n(104),""),h="",d=(r={created:function(){f=this.$route.params.codename,h="https://data.miuier.com/data/devices/"+f+".json"},data:function(){return{site:[],devices:[],title:"MIUI Official ROMs"}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h).then((function(t){return t.json()}));case 2:t.roms=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),fetchOnServer:!0,fetchKey:"site-sidebar"},Object(c.a)(r,"fetchKey",(function(t){return this.someOtherData+t("sidebar")})),Object(c.a)(r,"head",(function(){return{title:this.title,htmlAttrs:{lang:"en-US"}}})),r),l=d,m=n(43),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("\n    "+t._s(t.$route.params.codename)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);