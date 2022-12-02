import{A as w}from"./AlertMessage.714be680.js";import{S as M}from"./PageGenerator.47cb69e9.js";import{E as k,I as B,a as N}from"./EditableTable.9e5895f4.js";import{B as x}from"./BackendConnection.12a4379c.js";import{_ as b,h as l,r,o as d,c as D,b as n,t as O,d as i,i as c,a as h,F as y}from"./index.a51eaaf6.js";const E={props:["token","user","hasPermission","updateToken"],data(){return{moduleName:"projects",title:l.projects.title,Model:l.projects.Model,fields:l.projects.fields,models:[],original:[],auxiliar:[]}},created(){this.token?this.user?this.hasPermission(this.moduleName,"access")||this.$router.push("/"):this.$router.push("/"):this.$router.push("/")},methods:{showMessage(s,e){this.$refs.AlertMessage.show(s,e)},searchData(s){this.models=s},exportData(s=0){s==1?this.$refs.ExportButton.exportFile(this.original,this.moduleName):this.$refs.ExportButton.exportFile(this.models,this.moduleName)},async getData(){try{const s=await this.$refs.BackendConnection.getAll();this.original=s.data.map(e=>new this.Model(e)),this.models=this.original,this.updateToken({...s,token:this.token}),s.auxiliar&&(this.auxiliar=s.auxiliar)}catch(s){console.log(s),this.showMessage("No se pudo obtener los registros de la base de datos.","error")}},async createOne(s){try{const e=await this.$refs.BackendConnection.createOne(s);this.showMessage("Nuevo registro creado en la base de datos.","success"),this.original.push(new this.Model(e.data))}catch(e){console.log(e),this.showMessage("No se pudo crear el registro en la base de datos.","error")}},async updateOne(s){try{const e=this.models[s];delete e.createdAt,delete e.createdBy,delete e.updatedAt,delete e.updatedBy;const a=await this.$refs.BackendConnection.updateOne(e);this.showMessage("Registro actualizado en la base de datos.","success")}catch(e){console.log(e),this.showMessage("No se pudo actualizar el registro en la base de datos.","error")}},async deleteOne(s){try{const e=window.prompt("\xBFEst\xE1 seguro que quiere eliminar el registro? De ser as\xED, escribe la raz\xF3n.","");if(e==null||e=="")return;this.$refs.BackendConnection.deleteOne(this.models[s],e),this.showMessage("Registro eliminado de la base de datos.","success"),this.getData()}catch(e){console.log(e),this.showMessage("No se pudo eliminar el registro de la base de datos.","error")}}},components:{AlertMessage:w,SearchField:M,ExportButton:k,ImportButton:B,EditableTable:N,BackendConnection:x},mounted(){this.hasPermission(this.moduleName,"access")?this.getData():this.$router.push("/")}},C={class:"row pt-3 w-100"},S={class:"col"},A={id:"moduleTitle"},P={class:"col py-2"},F={class:"btn-group"};function v(s,e,a,I,o,t){const m=r("SearchField"),u=r("ExportButton"),p=r("ImportButton"),g=r("AlertMessage"),f=r("EditableTable"),_=r("BackendConnection");return d(),D(y,null,[n("div",C,[n("div",S,[n("h1",A,O(o.title),1)]),n("div",P,[n("div",F,[i(m,{original:o.original,onSearchData:t.searchData},null,8,["original","onSearchData"]),a.hasPermission(o.moduleName,"export")?(d(),c(u,{key:0,ref:"ExportButton",onExportData:t.exportData},null,8,["onExportData"])):h("",!0),a.hasPermission(o.moduleName,"import")?(d(),c(p,{key:1,moduleName:o.moduleName,onImportData:t.createOne},null,8,["moduleName","onImportData"])):h("",!0)])])]),i(g,{ref:"AlertMessage",class:"row pt-1"},null,512),i(f,{token:a.token,user:a.user,moduleName:o.moduleName,Model:o.Model,fields:o.fields,models:o.models,auxiliar:o.auxiliar,hasPermission:a.hasPermission,onShowMessage:t.showMessage,onCreateOne:t.createOne,onUpdateOne:t.updateOne,onDeleteOne:t.deleteOne},null,8,["token","user","moduleName","Model","fields","models","auxiliar","hasPermission","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"]),i(_,{token:a.token,moduleName:o.moduleName,ref:"BackendConnection",onShowMessage:t.showMessage},null,8,["token","moduleName","onShowMessage"])],64)}const R=b(E,[["render",v]]);export{R as default};
