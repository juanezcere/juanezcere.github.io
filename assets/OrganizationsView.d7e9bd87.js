import{A as k}from"./AlertMessage.cc2bce63.js";import{F as l,S as f,E as w,I as M,B as x}from"./BackendConnection.0ffdd029.js";import{T as B}from"./TableStructure.f78d8a7f.js";import{_ as L,L as O,r as n,o as u,c as D,b as i,t as y,d as r,g as h,a as c,F as S}from"./index.db246fc1.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"organizations",title:l.organizations.title,Model:l.organizations.Model,fields:l.organizations.fields,Lenguages:O,models:[],original:[],auxiliar:[],modulesAlt:{}}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll(this.moduleName);this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,s.auxiliar&&(this.auxiliar=s.auxiliar),this.updateToken({token:s.user.token,user:s.user})}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(this.moduleName,s);this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_post,"success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.created_at,delete e.created_by,delete e.updated_at,delete e.updated_by;const o=await this.$refs.BackendConnection.updateOne(this.moduleName,e);this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_put,"success"),this.original[s]=new this.Model(o.resultados)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected][this.moduleName].ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.moduleName,this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_delete,"error")}}},components:{AlertMessage:k,SearchField:f,ExportButton:w,ImportButton:M,TableStructure:B,BackendConnection:x},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},E={class:"col"},F={id:"moduleTitle"},b={class:"col py-2"},P={class:"btn-group"};function T(s,e,o,I,t,a){const d=n("SearchField"),m=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("TableStructure"),N=n("BackendConnection");return u(),D(S,null,[i("div",A,[i("div",E,[i("h1",F,y(t.title),1)]),i("div",b,[i("div",P,[r(d,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(u(),h(m,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):c("",!0),o.hasPermission(t.moduleName,"import")?(u(),h(g,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):c("",!0)])])]),r(p,{ref:"AlertMessage",class:"row pt-1"},null,512),r(_,{token:o.token,user:o.user,editable:!0,moduleName:t.moduleName,modulesAlt:t.modulesAlt,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","modulesAlt","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),r(N,{token:o.token,user:o.user,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","user","moduleName","onShowMessage"])],64)}const j=L(C,[["render",T]]);export{j as default};
