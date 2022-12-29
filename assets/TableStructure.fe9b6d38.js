import{F as N,B as z}from"./BackendConnection.c36adf0f.js";import{_ as L,o,c as a,b as i,F as _,e as y,h as O,v as T,t as b,n as M,i as A,a as g,L as P,r as w,j as f,g as C,k as D,d as x,l as E,m as G}from"./index.b2278b73.js";const I={props:{tabList:{type:Array,required:!0},variant:{type:String,required:!1,default:()=>"vertical",validator:s=>["horizontal","vertical"].includes(s)},index:{type:Number,required:!0}},data(){return{activeTab:1,Fields:N}}},j=["id","name","value"],V=["for"];function q(s,n,e,h,t,l){return o(),a("div",{class:M({flex:e.variant==="horizontal"})},[i("div",{class:M({flex:e.variant==="vertical"})},[(o(!0),a(_,null,y(e.tabList,(m,u)=>(o(),a("div",{key:u,class:"px-3 py-1"},[O(i("input",{id:"tab_"+e.index+"_"+u,type:"radio",name:"tab_"+e.index+"_"+u,value:u+1,"onUpdate:modelValue":n[0]||(n[0]=k=>t.activeTab=k),class:"btn-check mx-3",autocomplete:"off"},null,8,j),[[T,t.activeTab]]),i("label",{for:"tab_"+e.index+"_"+u,class:"btn btn-outline-dark"},b(this.Fields[m].title),9,V)]))),128))],2),(o(!0),a(_,null,y(e.tabList,(m,u)=>(o(),a(_,null,[u+1===t.activeTab?(o(),a("div",{key:u},[A(s.$slots,m+e.index)])):g("",!0)],64))),256))],2)}const U=L(I,[["render",q]]),R={props:["moduleName","name","index","type","placeholder","value","target","validation","message"],emits:["cellChange","showMessage"],data(){return{error:!1,color:"rounded border border-success p-1"}},methods:{update(s){if(this.type=="checkbox")return this.$emit("cellChange",this.index,this.name,s.target.checked);if(this.type=="combobox")return this.$emit("cellChange",this.index,this.name,s.target.value);this.validation&&(this.error=!String(s.target.value).toLowerCase().match(this.validation)),this.error?this.color="rounded border border-danger p-1":this.color="rounded border border-warning p-1",this.error&&this.$emit("showMessage",this.message,"error"),this.$emit("cellChange",this.index,this.name,s.target.value)}}},H=["type","placeholder","id","checked","value"],J={key:0,class:"px-1"},K=["name","id"];function Q(s,n,e,h,t,l){return o(),a("div",null,[i("input",{type:e.type,placeholder:e.placeholder,id:e.name,checked:e.value,value:this.type=="date"&&this.value?this.value.slice(0,10):this.value,onChange:n[0]||(n[0]=(...m)=>l.update&&l.update(...m)),class:M(t.color)},null,42,H),e.type=="checkbox"?(o(),a("label",J,b(e.placeholder),1)):g("",!0),e.type=="button"?(o(),a("button",{key:1,name:e.name,id:e.index,onClick:n[1]||(n[1]=m=>s.$router.push("/"+s.ref)),class:"btn btn-secondary"},b(e.placeholder),9,K)):g("",!0)])}const F=L(R,[["render",Q]]);const W={props:["token","user","editable","moduleName","models","auxiliar","hasPermission","patern","target"],emits:["showMessage","createOne","updateOne","deleteOne","changeStatus"],data(){return{model:{},Lenguages:P,Fields:N}},created(){this.Model=this.Fields[this.moduleName].Model,this.clear()},computed:{display(){return this.models}},methods:{clear(){this.model=new this.Model({})},showMessage(s,n){this.$emit("showMessage",s,n)},onChange(s,n,e){s==-1?this.model[n]=e:this.models[s][n]=e},format(s,n,e){if(n){if(n=="datetime")return new Date(s).toLocaleString();if(n=="date")return new Date(s).toLocaleDateString();if(n=="time")return new Date(s).toLocaleTimeString();if(n=="checkbox")return s?this.Lenguages[this.Lenguages.selected].general.yes:this.Lenguages[this.Lenguages.selected].general.not;if(n=="combobox"||n=="status"){const h=this.auxiliar[e].find(t=>t._id===s);return h?h.name:s}else if(n=="multiple"){let h="";return s.forEach(t=>{const l=this.auxiliar[e].find(m=>m._id===t);l&&(h+=l.name+`
`)}),h}}else return s},sortBy(s,n=!1){this.models.sort((e,h)=>{let t=e[s].toLowerCase(),l=h[s].toLowerCase();return n?t<l?1:t>l?-1:0:t<l?-1:t>l?1:0})},updateSelect(s,n,e,h=!1){if(h){const t=[],l=document.getElementById("multiple"+s).options;for(const m of l)m.selected&&t.push(m.value);s!=-1?this.models[s][n]=t:this.model[n]=t}else s!=-1?this.models[s][n]=e:this.model[n]=e},checkSelected(s,n,e){return e=="multiple"?n.find(h=>h==s):s==n}},components:{EditableCell:F}},X={class:"table table-striped mt-3 m-2"},Y={key:0},Z={class:"btn-group-vertical"},$=["onClick"],ee=i("i",{class:"fa-solid fa-arrow-up-a-z"},null,-1),te=[ee],se=["onClick"],ne=i("i",{class:"fa-solid fa-arrow-down-z-a"},null,-1),oe=[ne],ae={key:0},le={class:"btn-group"},ie=["title"],re=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),ue=[re],ce=["title"],de=i("i",{class:"fa-solid fa-delete-left"},null,-1),he=[de],me=["name","multiple","id","onFocusout"],ge={key:0},_e=["value"],be={key:0},ye={class:"btn-group"},ke=["title","onClick"],pe=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),ve=[pe],we=["title","onClick"],Ce=i("i",{class:"fa-solid fa-trash"},null,-1),fe=[Ce],Le={key:0,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:"Cambiar estado",class:"btn text-light",style:{background:"#002133"}},Se={class:"dropdown-menu"},Me=["onClick"],Ne=["name","id","multiple","onFocusout"],xe={key:0},Oe=["value","selected"],Pe={key:3};function Fe(s,n,e,h,t,l){const m=w("EditableCell");return o(),a("table",X,[i("thead",null,[i("tr",null,[e.editable?(o(),a("th",Y)):g("",!0),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(u,k)=>(o(),a("th",{key:k,scope:"col"},[i("div",Z,[i("button",{onClick:d=>l.sortBy(u.name,!1),class:"btn btn-secundary btn-sm"},te,8,$),i("button",{onClick:d=>l.sortBy(u.name,!0),class:"btn btn-secundary btn-sm"},oe,8,se)]),f(" "+b(u.placeholder),1)]))),128))])]),i("tbody",null,[e.editable&&e.hasPermission(e.moduleName,"create")?(o(),a("tr",ae,[i("td",null,[i("div",le,[e.hasPermission(e.moduleName,"create")?(o(),a("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.save,class:"btn btn-success",onClick:n[0]||(n[0]=u=>s.$emit("createOne",t.model,e.moduleName,e.patern,e.target))},ue,8,ie)):g("",!0),i("button",{type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.clear,class:"btn btn-warning",onClick:n[1]||(n[1]=u=>t.model=new s.Model({}))},he,8,ce)])]),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(u,k)=>(o(),a("td",{key:k,scope:"row"},[u.type=="status"?(o(),a(_,{key:0},[],64)):u.type=="combobox"||u.type=="multiple"?(o(),a("select",{key:1,name:u.name,index:-1,multiple:u.type=="multiple",id:u.type+"-1",onFocusout:d=>l.updateSelect(-1,u.name,d.target.value,u.type=="multiple"),class:"rounded border border-dark"},[u.target==e.target?(o(),a("option",ge,b(this.patern),1)):(o(!0),a(_,{key:1},y(e.auxiliar[u.target+"s"],d=>(o(),a("option",{value:d.id},b(d.name),9,_e))),256))],40,me)):u.type!="view"?(o(),C(m,{key:2,moduleName:e.moduleName,name:u.name,index:-1,type:u.type,placeholder:u.placeholder,value:t.model[u.name],validation:u.validation,message:u.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):g("",!0)]))),128))])):g("",!0),(o(!0),a(_,null,y(l.display,(u,k)=>(o(),a("tr",{key:k},[e.editable?(o(),a("td",be,[i("div",ye,[e.hasPermission(e.moduleName,"update")?(o(),a("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.save,class:"btn btn-success",onClick:d=>s.$emit("updateOne",k,e.moduleName,e.patern,e.target)},ve,8,ke)):g("",!0),e.hasPermission(e.moduleName,"delete")?(o(),a("button",{key:1,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.delete,class:"btn btn-danger",onClick:d=>s.$emit("deleteOne",k,e.moduleName,e.patern,e.target)},fe,8,we)):g("",!0)])])):g("",!0),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(d,S)=>(o(),a("td",{key:S,scope:"row"},[e.hasPermission(e.moduleName,"modify.status")&&d.type=="status"?(o(),a("button",Le,[f(b(this.format(u[d.name],d.format,d.target))+" ",1),i("ul",Se,[i("li",null,[(o(!0),a(_,null,y(e.auxiliar[e.moduleName],c=>(o(),a("a",{onClick:p=>s.$emit("changeStatus",k,c._id,e.moduleName,e.patern,e.target),class:"dropdown-item"},b(c.name),9,Me))),256))])])])):e.hasPermission(e.moduleName,"modify."+d.name)&&(d.type=="combobox"||d.type=="multiple")?(o(),a("select",{key:1,name:d.name,id:d.type+k,multiple:d.type=="multiple",onFocusout:c=>l.updateSelect(k,d.name,c.target.value,d.type=="multiple"),class:"rounded border border-dark"},[d.target==e.target?(o(),a("option",xe,b(this.patern),1)):(o(!0),a(_,{key:1},y(e.auxiliar[d.target+"s"],c=>(o(),a("option",{value:c.id,selected:l.checkSelected(c.id,u[d.name],d.type)},b(c.name),9,Oe))),256))],40,Ne)):e.hasPermission(e.moduleName,"modify."+d.name)&&d.type!="view"?(o(),C(m,{key:2,moduleName:e.moduleName,name:d.name,index:k,type:d.type,placeholder:d.placeholder,value:u[d.name],validation:d.validation,message:d.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","index","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):(o(),a("p",Pe,b(this.format(u[d.name],d.format,d.target)),1))]))),128))]))),128))])])}const Be=L(W,[["render",Fe]]),ze={data(){return{page:1,size:10,pages:[],total:0}},methods:{paginate(s){this.calculate(s);const n=this.page*this.size-this.size,e=this.page*this.size;return s.slice(n,e)},calculate(s){this.pages=[],this.total=s.length;const n=Math.ceil(this.total/this.size);for(let e=1;e<=n;e++)this.pages.push(e);this.page>this.pages.length&&(this.page=1)},getIndex(s){return parseInt(s)+(this.page-1)*this.size}}},Te={class:"row w-100"},Ae={class:"col"},De={class:"text-muted py-3"},Ee={class:"col py-2"},Ge={class:"btn-group py-2"},Ie=i("i",{class:"fa fa-angles-left"},null,-1),je=[Ie],Ve=["onClick"],qe=i("i",{class:"fa fa-angles-right"},null,-1),Ue=[qe],Re={class:"col"},He={class:"text-muted py-3"},Je=["selected"],Ke=["selected"],Qe=["selected"],We=["selected"],Xe=["selected"];function Ye(s,n,e,h,t,l){return o(),a("div",Te,[i("div",Ae,[i("p",De,"Mostrando p\xE1gina "+b(t.page)+" de "+b(t.pages.length)+" paginas.",1)]),i("div",Ee,[i("div",Ge,[t.page!=1?(o(),a("button",{key:0,type:"button",onClick:n[0]||(n[0]=m=>t.page--),class:"btn text-light",style:{background:"#002133"}},je)):g("",!0),(o(!0),a(_,null,y(t.pages.slice(t.page-1,t.page+5),m=>(o(),a("button",{key:m,onClick:u=>t.page=m,class:"btn text-light",style:{background:"#002133"}},b(m),9,Ve))),128)),t.page<t.pages.length?(o(),a("button",{key:1,onClick:n[1]||(n[1]=m=>t.page++),class:"btn text-light",style:{background:"#002133"}},Ue)):g("",!0)])]),i("div",Re,[i("p",He,[f(" Mostrando "),O(i("select",{"onUpdate:modelValue":n[2]||(n[2]=m=>t.size=m),class:"rounded"},[i("option",{value:"10",selected:t.size==10},"10",8,Je),i("option",{value:"25",selected:t.size==25},"25",8,Ke),i("option",{value:"50",selected:t.size==50},"50",8,Qe),i("option",{value:"100",selected:t.size==100},"100",8,We),i("option",{value:"100000",selected:t.size>=101},"Todos",8,Xe)],512),[[D,t.size]]),f(" de "+b(t.total)+" registros. ",1)])])])}const Ze=L(ze,[["render",Ye]]);const $e={props:["token","user","editable","moduleName","modulesAlt","models","auxiliar","hasPermission"],emits:["showMessage","createOne","updateOne","deleteOne","changeStatus"],data(){return{model:{},submodels:{},Lenguages:P,Fields:N,subeditable:!0}},created(){this.Model=this.Fields[this.moduleName].Model;for(const s in this.modulesAlt)this.submodels[s]=[];this.clear()},computed:{display(){return this.models.length?this.$refs.PageGenerator.paginate(this.models):[]}},methods:{clear(){this.model=new this.Model({})},showMessage(s,n){this.$emit("showMessage",s,n)},onChange(s,n,e){if(s==-1)this.model[n]=e;else{const h=this.$refs.PageGenerator.getIndex(s);this.models[h][n]=e}},format(s,n,e){if(n){if(n=="datetime")return new Date(s).toLocaleString();if(n=="date")return new Date(s).toLocaleDateString();if(n=="time")return new Date(s).toLocaleTimeString();if(n=="checkbox")return s?this.Lenguages[this.Lenguages.selected].general.yes:this.Lenguages[this.Lenguages.selected].general.not;if(n=="combobox"||n=="status"){const h=this.auxiliar[e].find(t=>t._id===s);return h?h.name:s}else if(n=="multiple"){let h="";return s.forEach(t=>{const l=this.auxiliar[e].find(m=>m._id===t);l&&(h+=l.name+`
`)}),h}}else return s},sortBy(s,n=!1){this.models.sort((e,h)=>{let t=e[s].toLowerCase(),l=h[s].toLowerCase();return n?t<l?1:t>l?-1:0:t<l?-1:t>l?1:0})},updateSelect(s,n,e,h=!1){if(h){const t=[],l=document.getElementById("multiple"+s).options;for(const m of l)m.selected&&t.push(m.value);s!=-1?this.models[s][n]=t:this.model[n]=t}else s!=-1?this.models[this.$refs.PageGenerator.getIndex(s)][n]=e:this.model[n]=e},checkSelected(s,n,e){return e=="multiple"?n.find(h=>h==s):s==n},show(s,n,e){const h=document.querySelectorAll('[id^="subtable"]');for(const l of h)l.classList.add("hidden");Object.entries(n).forEach(async([l,m])=>{try{const u=await this.$refs.BackendConnection.getAll(l+"/"+this.moduleName+"/"+e);this.submodels[l]=u.data.map(k=>new this.Fields[l].Model(k))}catch{this.showMessage(this.Lenguages[this.Lenguages.selected][l].err_get,"error")}}),document.getElementById("subtable"+s).classList.toggle("hidden")},getAlts(s){const n=[];for(const e in this.modulesAlt)n.push(e+s);return n},getModule(s){return s.replace(/[0-9]/,"")},async createOne(s,n,e,h){try{s[h]=e;const t=await this.$refs.BackendConnection.createOne(n,s);this.showMessage(this.Lenguages[this.Lenguages.selected][n].ok_post,"success"),this.submodels[n].push(s)}catch(t){console.log(t),this.showMessage(this.Lenguages[this.Lenguages.selected][n].err_post,"error")}},async updateOne(s,n,e,h){try{const t=this.submodels[n][s];delete t.created_at,delete t.created_by,delete t.updated_at,delete t.updated_by,t[h]=e;const l=await this.$refs.BackendConnection.updateOne(n,t);this.showMessage(this.Lenguages[this.Lenguages.selected][n].ok_put,"success")}catch(t){console.log(t),this.showMessage(this.Lenguages[this.Lenguages.selected][n].err_put,"error")}},async deleteOne(s,n,e,h){try{const t=window.prompt(this.Lenguages[this.Lenguages.selected][this.moduleName].ask_delete,"");if(t==null||t=="")return;this.$refs.BackendConnection.deleteOne(n,this.submodels[n][s],t),this.showMessage(this.Lenguages[this.Lenguages.selected][n].ok_delete,"success")}catch(t){console.log(t),this.showMessage(this.Lenguages[this.Lenguages.selected][n].err_delete,"error")}}},components:{TabsStructure:U,SubtableStructure:Be,EditableCell:F,PageGenerator:Ze,BackendConnection:z}},et={class:"row mt-1"},tt={class:"table table-striped mt-3 m-2"},st={key:0},nt={class:"btn-group-vertical"},ot=["onClick"],at=i("i",{class:"fa-solid fa-arrow-up-a-z"},null,-1),lt=[at],it=["onClick"],rt=i("i",{class:"fa-solid fa-arrow-down-z-a"},null,-1),ut=[rt],ct={key:0},dt={class:"btn-group"},ht=["title"],mt=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),gt=[mt],_t=["title"],bt=i("i",{class:"fa-solid fa-delete-left"},null,-1),yt=[bt],kt=["name","multiple","id","onFocusout"],pt=["value"],vt={key:0},wt={class:"btn-group"},Ct=["title","onClick"],ft=i("i",{class:"fa-solid fa-floppy-disk"},null,-1),Lt=[ft],St=["title","onClick"],Mt=i("i",{class:"fa-solid fa-trash"},null,-1),Nt=[Mt],xt={key:0,type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:"Cambiar estado",class:"btn text-light",style:{background:"#002133"}},Ot={class:"dropdown-menu"},Pt=["onClick"],Ft=["name","id","multiple","onFocusout"],Bt=["value","selected"],zt=["onClick"],Tt={key:4},At=["id"],Dt=["colspan"],Et={key:1,class:"hidden"};function Gt(s,n,e,h,t,l){const m=w("EditableCell"),u=w("SubtableStructure"),k=w("TabsStructure"),d=w("PageGenerator"),S=w("BackendConnection");return o(),a(_,null,[i("div",et,[i("table",tt,[i("thead",null,[i("tr",null,[e.editable?(o(),a("th",st)):g("",!0),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(c,p)=>(o(),a("th",{key:p,scope:"col"},[i("div",nt,[i("button",{onClick:r=>l.sortBy(c.name,!1),class:"btn btn-secundary btn-sm"},lt,8,ot),i("button",{onClick:r=>l.sortBy(c.name,!0),class:"btn btn-secundary btn-sm"},ut,8,it)]),f(" "+b(c.placeholder),1)]))),128))])]),i("tbody",null,[e.editable&&e.hasPermission(e.moduleName,"create")?(o(),a("tr",ct,[i("td",null,[i("div",dt,[e.hasPermission(e.moduleName,"create")?(o(),a("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.save,class:"btn btn-success",onClick:n[0]||(n[0]=c=>s.$emit("createOne",t.model))},gt,8,ht)):g("",!0),i("button",{type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.clear,class:"btn btn-warning",onClick:n[1]||(n[1]=c=>t.model=new s.Model({}))},yt,8,_t)])]),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(c,p)=>(o(),a("td",{key:p,scope:"row"},[c.type=="status"?(o(),a(_,{key:0},[],64)):c.type=="combobox"||c.type=="multiple"?(o(),a("select",{key:1,name:c.name,index:-1,multiple:c.type=="multiple",id:c.type+"-1",onFocusout:r=>l.updateSelect(-1,c.name,r.target.value,c.type=="multiple"),class:"rounded border border-dark"},[(o(!0),a(_,null,y(e.auxiliar[c.target],r=>(o(),a("option",{value:r.id},b(r.name),9,pt))),256))],40,kt)):c.type!="view"?(o(),C(m,{key:2,moduleName:e.moduleName,name:c.name,index:-1,type:c.type,placeholder:c.placeholder,value:t.model[c.name],validation:c.validation,message:c.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):g("",!0)]))),128))])):g("",!0),(o(!0),a(_,null,y(l.display,(c,p)=>(o(),a(_,{key:p},[i("tr",null,[e.editable?(o(),a("td",vt,[i("div",wt,[e.hasPermission(e.moduleName,"update")?(o(),a("button",{key:0,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.save,class:"btn btn-success",onClick:r=>s.$emit("updateOne",s.$refs.PageGenerator.getIndex(p))},Lt,8,Ct)):g("",!0),e.hasPermission(e.moduleName,"delete")?(o(),a("button",{key:1,type:"button","data-toggle":"tooltip","data-placement":"bottom",title:t.Lenguages[t.Lenguages.selected].general.delete,class:"btn btn-danger",onClick:r=>s.$emit("deleteOne",s.$refs.PageGenerator.getIndex(p))},Nt,8,St)):g("",!0)])])):g("",!0),(o(!0),a(_,null,y(t.Fields[e.moduleName].fields,(r,B)=>(o(),a("td",{key:B,scope:"row"},[e.hasPermission(e.moduleName,"modify.status")&&r.type=="status"?(o(),a("button",xt,[f(b(this.format(c[r.name],r.format,r.target))+" ",1),i("ul",Ot,[i("li",null,[(o(!0),a(_,null,y(e.auxiliar[r.target],v=>(o(),a("a",{onClick:It=>s.$emit("changeStatus",p,v._id),class:"dropdown-item"},b(v.name),9,Pt))),256))])])])):e.hasPermission(e.moduleName,"modify."+r.name)&&(r.type=="combobox"||r.type=="multiple")?(o(),a("select",{key:1,name:r.name,id:r.type+p,multiple:r.type=="multiple",onFocusout:v=>l.updateSelect(p,r.name,v.target.value,r.type=="multiple"),class:"rounded border border-dark"},[(o(!0),a(_,null,y(e.auxiliar[r.target],v=>(o(),a("option",{value:v._id,selected:l.checkSelected(v._id,c[r.name],r.type)},b(v.name),9,Bt))),256))],40,Ft)):e.hasPermission(e.moduleName,"modify."+r.name)&&r.type!="view"?(o(),C(m,{key:2,moduleName:e.moduleName,name:r.name,index:p,type:r.type,placeholder:r.placeholder,value:c[r.name],validation:r.validation,message:r.message,onCellChange:l.onChange,onShowMessage:l.showMessage},null,8,["moduleName","name","index","type","placeholder","value","validation","message","onCellChange","onShowMessage"])):r.type=="view"&&r.name=="id"&&Object.keys(e.modulesAlt).length?(o(),a("a",{key:3,href:"#",role:"button",onClick:v=>l.show(p,e.modulesAlt,c[r.name])},b(c[r.name]),9,zt)):(o(),a("p",Tt,b(this.format(c[r.name],r.format,r.target)),1))]))),128))]),Object.keys(e.modulesAlt).length?(o(),a("tr",{key:0,id:"subtable"+p,class:"hidden"},[i("td",{colspan:t.Fields[e.moduleName].fields.length+e.editable},[x(k,{tabList:Object.keys(e.modulesAlt),index:p},E({_:2},[y(l.getAlts(p),r=>({name:r,fn:G(()=>[e.hasPermission(l.getModule(r),"access")?(o(),C(u,{key:0,token:e.token,user:e.user,editable:!0,moduleName:l.getModule(r),models:t.submodels[l.getModule(r)],auxiliar:e.auxiliar,hasPermission:e.hasPermission,patern:c.id,target:e.modulesAlt[l.getModule(r)],onShowMessage:l.showMessage,onCreateOne:l.createOne,onUpdateOne:l.updateOne,onDeleteOne:l.deleteOne},null,8,["token","user","moduleName","models","auxiliar","hasPermission","patern","target","onShowMessage","onCreateOne","onUpdateOne","onDeleteOne"])):g("",!0)])}))]),1032,["tabList","index"])],8,Dt)],8,At)):g("",!0),Object.keys(e.modulesAlt).length?(o(),a("tr",Et)):g("",!0)],64))),128))])])]),x(d,{ref:"PageGenerator"},null,512),Object.keys(e.modulesAlt).length?(o(),C(S,{key:0,token:e.token,user:e.user,moduleName:e.moduleName,ref:"BackendConnection",onShowMessage:l.showMessage},null,8,["token","user","moduleName","onShowMessage"])):g("",!0)],64)}const qt=L($e,[["render",Gt]]);export{qt as T};
