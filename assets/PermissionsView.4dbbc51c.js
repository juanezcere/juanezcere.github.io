import{A as k}from"./AlertMessage.eb74badf.js";import{F as l,S as f,E as w,I as M,B as x}from"./BackendConnection.c36adf0f.js";import{T as B}from"./TableStructure.fe9b6d38.js";import{_ as L,L as D,r as n,o as u,c as O,b as i,t as y,d as r,g as h,a as m,F as S}from"./index.b2278b73.js";const C={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"permissions",title:l.permissions.title,Model:l.permissions.Model,fields:l.permissions.fields,Lenguages:D,models:[],original:[],auxiliar:[],modulesAlt:{clusters_permissions:"permission"}}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll(this.moduleName);this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,s.auxiliar&&(this.auxiliar=s.auxiliar),this.updateToken({token:s.user.token,user:s.user})}catch(s){console.log(s),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_get,"error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(this.moduleName,s);this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_post,"success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_post,"error")}},async updateOne(s){try{const e=this.models[s];delete e.created_at,delete e.created_by,delete e.updated_at,delete e.updated_by;const o=await this.$refs.BackendConnection.updateOne(this.moduleName,e);this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_put,"success"),this.original[s]=new this.Model(o.resultados)}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_put,"error")}},async deleteOne(s){try{const e=window.prompt(this.Lenguages[this.Lenguages.selected][this.moduleName].ask_delete,"");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.moduleName,this.models[s],e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].ok_delete,"success"),this.getData()}catch(e){console.log(e),this.showMessage(this.Lenguages[this.Lenguages.selected][this.moduleName].err_delete,"error")}}},components:{AlertMessage:k,SearchField:f,ExportButton:w,ImportButton:M,TableStructure:B,BackendConnection:x},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},A={class:"row pt-3 w-100"},E={class:"col"},F={id:"moduleTitle"},P={class:"col py-2"},b={class:"btn-group"};function T(s,e,o,I,t,a){const c=n("SearchField"),d=n("ExportButton"),g=n("ImportButton"),p=n("AlertMessage"),_=n("TableStructure"),N=n("BackendConnection");return u(),O(S,null,[i("div",A,[i("div",E,[i("h1",F,y(t.title),1)]),i("div",P,[i("div",b,[r(c,{original:t.original,onSearchData:a.searchData},null,8,["original","onSearchData"]),o.hasPermission(t.moduleName,"export")?(u(),h(d,{key:0,ref:"ExportButton",onExportData:a.exportData},null,8,["onExportData"])):m("",!0),o.hasPermission(t.moduleName,"import")?(u(),h(g,{key:1,moduleName:t.moduleName,onImportData:a.createOne},null,8,["moduleName","onImportData"])):m("",!0)])])]),r(p,{ref:"AlertMessage",class:"row pt-1"},null,512),r(_,{token:o.token,user:o.user,editable:!0,moduleName:t.moduleName,modulesAlt:t.modulesAlt,models:t.models,auxiliar:t.auxiliar,hasPermission:o.hasPermission,onShowMessage:a.showMessage,onCreateOne:a.createOne,onUpdateOne:a.updateOne,onDeleteOne:a.deleteOne},null,8,["token","user","moduleName","modulesAlt","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),r(N,{token:o.token,user:o.user,moduleName:t.moduleName,ref:"BackendConnection",onShowMessage:a.showMessage},null,8,["token","user","moduleName","onShowMessage"])],64)}const q=L(C,[["render",T]]);export{q as default};
