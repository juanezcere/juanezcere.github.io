import{A as y}from"./AlertMessage.eb74badf.js";import{_ as f,L as e,r as _,o as i,c as l,d as b,b as n,t as g,w as k,F as m,e as M,f as x,a as u}from"./index.b2278b73.js";const A="crm-frontend",C="1.0.0",N="module",S={dev:"vite",build:"vite build",preview:"vite preview --host 0.0.0.0"},j={vue:"^3.2.40","vue-router":"^4.1.5"},T={"@vitejs/plugin-vue":"^3.0.3",vite:"^3.0.9"},P={name:A,private:!0,version:C,type:N,scripts:S,dependencies:j,devDependencies:T},w="https://52.22.141.239:3000/",L={props:["token","updateToken"],data(){return{moduleName:"login",title:e[e.selected].login.title,Model:class{constructor(t){this.username=t.username||"",this.password=t.password||""}},fields:[{name:"username",type:"email",placeholder:e[e.selected].login.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:e[e.selected].login.err_username},{name:"password",type:"password",placeholder:e[e.selected].login.password,required:!0,message:e[e.selected].login.err_password},{name:"submit",type:"submit",placeholder:e[e.selected].login.login},{name:"version",type:"view",placeholder:e[e.selected].login.version+" "+P.version}]}},created(){this.token?this.$router.push("/"):this.model=new this.Model({})},methods:{showMessage(s,t){this.$refs.AlertMessage.show(s,t)},showPassword(){var s=document.getElementById("password");s.type==="password"?s.type="text":s.type="password"},update(s,t,r){let p=!1,d="rounded border border-dark p-1";this.fields[s].validation&&(p=!String(r.value).toLowerCase().match(this.fields[s].validation)),p?d="rounded border border-danger p-1":d="rounded border border-success p-1",p&&this.showMessage(this.fields[s].message,"warning"),this.model[t]=r.value,r.className=d},async login(){if(this.model.username==""||this.model.password=="")return this.showMessage(e[e.selected].login.err_fields,"error");try{const s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(this.model)},r=await(await fetch(w+this.moduleName,s)).json();console.log(r),this.updateToken(r),r.user.settings.resource.length?this.$router.push("/"+r.user.settings.resource):this.$router.push("/")}catch(s){console.log(s),this.showMessage(e[e.selected].login.err_login,"error")}},async forgot(){if(this.model.username=="")return this.showMessage(e[e.selected].login.err_fields,"error");console.log(this.model.username);try{const s={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(this.model)},r=await(await fetch(w+"forgot",s)).json();this.showMessage(e[e.selected].login.suc_forget,"success")}catch(s){console.log(s),this.showMessage(e[e.selected].login.err_login,"error")}}},components:{AlertMessage:y}},B={class:"row pt-3 w-100"},O={class:"col-auto mx-auto"},V={class:"card text-center m-5 p-5 bg-dark text-light"},D={class:"card-title px-3 py-3"},F=n("img",{src:x,height:"75",class:"mx-auto mb-4"},null,-1),I={id:"moduleTitle"},q={class:"card-body"},z=["type","placeholder","value","id","onInput","title"],E={key:3,class:"text-muted"};function J(s,t,r,p,d,a){const v=_("AlertMessage");return i(),l(m,null,[b(v,{ref:"AlertMessage",class:"row pt-1"},null,512),n("div",B,[n("div",O,[n("div",V,[n("div",D,[F,n("h3",I,g(d.title),1)]),n("div",q,[n("form",{onSubmit:t[2]||(t[2]=k((...o)=>a.login&&a.login(...o),["prevent"]))},[(i(!0),l(m,null,M(d.fields,(o,h)=>(i(),l("div",{key:h,class:"form-group py-3"},[o.type!="view"&&o.type!="submit"?(i(),l("input",{key:0,type:o.type,placeholder:o.placeholder,value:o.value,id:o.name,onInput:c=>a.update(h,o.name,c.target),"data-toggle":"tooltip","data-placement":"bottom",title:o.placeholder,class:"rounded border border-dark p-1"},null,40,z)):u("",!0),o.type=="password"?(i(),l("i",{key:1,class:"text-dark fa-solid fa-eye position-absolute",id:"togglePassword",onClick:t[0]||(t[0]=(...c)=>a.showPassword&&a.showPassword(...c)),style:{"margin-left":"-20px","margin-top":"7px",cursor:"pointer"}})):u("",!0),o.type=="submit"?(i(),l("button",{key:2,type:"button",onClick:t[1]||(t[1]=(...c)=>a.login&&a.login(...c)),class:"btn btn-light text-dark"},g(o.placeholder),1)):u("",!0),o.type=="view"?(i(),l("p",E,g(o.placeholder),1)):u("",!0)]))),128))],32),n("a",{href:"#",role:"button",onClick:t[3]||(t[3]=(...o)=>a.forgot&&a.forgot(...o)),class:"text-muted"},"Forgot password")])])])])],64)}const K=f(L,[["render",J]]);export{K as default};
