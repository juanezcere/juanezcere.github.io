import{A as p}from"./AlertMessage.cc2bce63.js";import{F as l,S as _,E as f,I as x,B as k}from"./BackendConnection.0ffdd029.js";import{T as B}from"./TableStructure.f78d8a7f.js";import{_ as N,L as M,r as o,o as u,c as w,b as a,t as S,d as n,g as A,a as D,F as E}from"./index.db246fc1.js";const F={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"histories",title:l.histories.title,Model:l.histories.Model,fields:l.histories.fields,Lenguages:M,models:[],original:[],auxiliar:[],modulesAlt:{}}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(e,i){this.$refs.AlertMessage.show(e,i)},searchData(e){this.models=e},exportData(e=0){e==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const e=await this.$refs.BackendConnection.getAll(this.moduleName);this.original=e.data.map(i=>new this.Model(i)),this.models=this.original,e.auxiliar&&(this.auxiliar=e.auxiliar),this.updateToken({token:e.user.token,user:e.user})}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_get,"error")}}},components:{AlertMessage:p,SearchField:_,ExportButton:f,ImportButton:x,TableStructure:B,BackendConnection:k},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},P={class:"col"},T={id:"moduleTitle"},b={class:"col py-2"},v={class:"btn-group"};function y(e,i,t,L,s,r){const c=o("SearchField"),h=o("ExportButton"),m=o("AlertMessage"),d=o("TableStructure"),g=o("BackendConnection");return u(),w(E,null,[a("div",C,[a("div",P,[a("h1",T,S(s.title),1)]),a("div",b,[a("div",v,[n(c,{original:s.original,onSearchData:r.searchData},null,8,["original","onSearchData"]),t.hasPermission(s.moduleName,"export")?(u(),A(h,{key:0,ref:"ExportButton",onExportData:r.exportData},null,8,["onExportData"])):D("",!0)])])]),n(m,{ref:"AlertMessage",class:"row pt-1"},null,512),n(d,{token:t.token,user:t.user,editable:!1,moduleName:s.moduleName,modulesAlt:s.modulesAlt,models:s.models,auxiliar:s.auxiliar,hasPermission:t.hasPermission,onShowMessage:r.showMessage},null,8,["token","user","moduleName","modulesAlt","models","auxiliar","hasPermission","onShowMessage"]),n(g,{token:t.token,user:t.user,moduleName:s.moduleName,ref:"BackendConnection",onShowMessage:r.showMessage},null,8,["token","user","moduleName","onShowMessage"])],64)}const q=N(F,[["render",y]]);export{q as default};
