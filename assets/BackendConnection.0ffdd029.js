import{_ as y,L as e,o as g,c as _,b as c,F as b,t as h}from"./index.db246fc1.js";const w={props:["original"],emits:["searchData"],data(){return{Lenguages:e}},methods:{searchData(a){const t=a.target.value.toLowerCase();if(t.length){const d=[];this.original.forEach(r=>{for(let s in r)if(typeof r[s]=="string"&&r[s].toLowerCase().indexOf(t)!=-1){d.push(r);break}}),this.$emit("searchData",d)}else this.$emit("searchData",this.original)}}},v=["placeholder"],x=c("i",{class:"fa fa-magnifying-glass position-absolute",style:{"margin-left":"7px","margin-top":"10px"}},null,-1);function f(a,t,d,r,s,o){return g(),_(b,null,[c("input",{id:"searchText",type:"text",placeholder:s.Lenguages[s.Lenguages.selected].general.search,onInput:t[0]||(t[0]=(...l)=>o.searchData&&o.searchData(...l)),class:"rounded px-4 py-1","data-toggle":"tooltip","data-placement":"bottom",title:"Buscar en todos los campos",style:{"border-color":"#002133"}},null,40,v),x],64)}const ie=y(w,[["render",f]]),k={title:e[e.selected].permissions.title,Model:class{constructor(t){this.id=t.id,this.resource=t.resource,this.name=t.name,this.description=t.description,this.public=t.public,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"resource",type:"text",placeholder:e[e.selected].permissions.resource,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"public",type:"checkbox",placeholder:e[e.selected].permissions.public,format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},z={title:e[e.selected].controllers.title,Model:class{constructor(t){this.id=t.id,this.resource=t.resource,this.name=t.name,this.description=t.description,this.public=t.public,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"resource",type:"text",placeholder:e[e.selected].controllers.resource,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"public",type:"checkbox",placeholder:e[e.selected].controllers.public,format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},M={title:e[e.selected].users.title,Model:class{constructor(t){this.id=t.id,this.username=t.username,this.password=t.password,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"username",type:"text",placeholder:e[e.selected].users.username,required:!0,validation:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},{name:"password",type:"password",placeholder:e[e.selected].users.password,required:!0},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},A={title:e[e.selected].organizations.title,Model:class{constructor(t){this.id=t.id,this.code=t.code,this.name=t.name,this.description=t.description,this.logo=t.logo,this.slogan=t.slogan,this.webpage=t.webpage,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"logo",type:"text",placeholder:e[e.selected].organizations.logo},{name:"slogan",type:"text",placeholder:e[e.selected].organizations.slogan},{name:"webpage",type:"text",placeholder:e[e.selected].organizations.webpage},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},B={title:e[e.selected].histories.title,Model:class{constructor(t){this.id=t.id,this.user=t.user,this.module=t.module,this.action=t.action,this.target=t.target,this.changes=t.changes,this.organization=t.organization,this.created_at=t.created_at}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"user",type:"view",placeholder:e[e.selected].general.user},{name:"module",type:"view",placeholder:e[e.selected].histories.module},{name:"action",type:"view",placeholder:e[e.selected].histories.action},{name:"target",type:"view",placeholder:e[e.selected].histories.target},{name:"changes",type:"view",placeholder:e[e.selected].histories.changes},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"}]},j={title:e[e.selected].documents.title,Model:class{constructor(t){this.id=t.id,this.code=t.code,this.name=t.name,this.description=t.description,this.resource=t.resource,this.extension=t.extension,this.size=t.size,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].documents._id},{name:"code",type:"text",placeholder:e[e.selected].documents.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].documents.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].documents.description},{name:"resource",type:"view",placeholder:e[e.selected].documents.resource},{name:"extension",type:"view",placeholder:e[e.selected].documents.extension},{name:"size",type:"view",placeholder:e[e.selected].documents.size},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},q={title:e[e.selected].humans.title,Model:class{constructor(t){this.id=t.id,this.code=t.code,this.name=t.name,this.lastname=t.lastname,this.email=t.email,this.cellphone=t.cellphone,this.nationality=t.nationality,this.birth=t.birth,this.rh=t.rh,this.afp=t.afp,this.eps=t.eps,this.arl=t.arl,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"lastname",type:"text",placeholder:e[e.selected].humans.lastname},{name:"email",type:"text",placeholder:e[e.selected].humans.email,required:!0},{name:"cellphone",type:"text",placeholder:e[e.selected].humans.cellphone},{name:"nationality",type:"text",placeholder:e[e.selected].humans.nationality},{name:"birth",type:"date",placeholder:e[e.selected].humans.birth,format:"date"},{name:"rh",type:"text",placeholder:e[e.selected].humans.rh},{name:"afp",type:"text",placeholder:e[e.selected].humans.afp},{name:"eps",type:"text",placeholder:e[e.selected].humans.eps},{name:"arl",type:"text",placeholder:e[e.selected].humans.arl},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},$={title:e[e.selected].contracts.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},L={title:e[e.selected].clusters.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},E={title:e[e.selected].roles.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},C={title:e[e.selected].costs.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},D={title:e[e.selected].places.title,Model:class{constructor(t){this.id=t.id,this.owner=t.owner,this.code=t.code,this.name=t.name,this.description=t.description,this.project=t.project,this.country=t.country,this.region=t.region,this.state=t.state,this.municipality=t.municipality,this.dane_municipality=t.dane_municipality,this.poblation=t.poblation,this.dane_poblation=t.dane_poblation,this.zone=t.zone,this.objetive=t.objetive,this.locality=t.locality,this.address=t.address,this.latitude=t.latitude,this.longitude=t.longitude,this.altitude=t.altitude,this.coordinates=t.coordinates,this.structure=t.structure,this.structure_detail=t.structure_detail,this.height=t.height,this.real_owner=t.real_owner,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"owner",type:"view",placeholder:e[e.selected].places.owner},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"project",type:"text",placeholder:e[e.selected].places.project},{name:"country",type:"text",placeholder:e[e.selected].places.country},{name:"region",type:"text",placeholder:e[e.selected].places.region},{name:"state",type:"text",placeholder:e[e.selected].places.state},{name:"municipality",type:"text",placeholder:e[e.selected].places.municipality},{name:"dane_municipality",type:"text",placeholder:e[e.selected].places.dane_municipality},{name:"poblation",type:"text",placeholder:e[e.selected].places.poblation},{name:"dane_poblation",type:"text",placeholder:e[e.selected].places.dane_poblation},{name:"zone",type:"text",placeholder:e[e.selected].places.zone},{name:"objetive",type:"text",placeholder:e[e.selected].places.objetive},{name:"locality",type:"text",placeholder:e[e.selected].places.locality},{name:"address",type:"text",placeholder:e[e.selected].places.address},{name:"latitude",type:"text",placeholder:e[e.selected].places.latitude},{name:"longitude",type:"text",placeholder:e[e.selected].places.longitude},{name:"altitude",type:"text",placeholder:e[e.selected].places.altitude},{name:"coordinates",type:"view",placeholder:e[e.selected].places.coordinates},{name:"structure",type:"text",placeholder:e[e.selected].places.structure},{name:"structure_detail",type:"text",placeholder:e[e.selected].places.structure_detail},{name:"height",type:"number",placeholder:e[e.selected].places.height},{name:"real_owner",type:"text",placeholder:e[e.selected].places.owner},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},N={title:e[e.selected].states.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},S={title:e[e.selected].resources.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.properties=t.properties,this.unit=t.unit,this.value=t.value,this.consumible=t.consumible,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"properties",type:"text",placeholder:e[e.selected].resources.properties},{name:"unit",type:"text",placeholder:e[e.selected].resources.unit},{name:"value",type:"text",placeholder:e[e.selected].resources.value},{name:"consumible",type:"checkbox",placeholder:e[e.selected].resources.consumible,format:"checbox"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},F={title:e[e.selected].deliverables.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.type=t.type,this.required=t.required,this.evidence=t.evidence,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"type",type:"checkbox",placeholder:e[e.selected].deliverables.type},{name:"required",type:"checkbox",placeholder:e[e.selected].deliverables.required,format:"checkbox"},{name:"evidence",type:"checkbox",placeholder:e[e.selected].deliverables.evidence,format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},T={title:e[e.selected].tasks.title,Model:class{constructor(t){this.id=t.id,this.controller=t.controller,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.role=t.role,this.place=t.place,this.cost=t.cost,this.task_approbation=t.task_approbation,this.need_approbation=t.need_approbation,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"controller",type:"combobox",placeholder:e[e.selected].tasks.controller,target:"controllers"},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"role",type:"combobox",placeholder:e[e.selected].tasks.role,target:"roles"},{name:"place",type:"combobox",placeholder:e[e.selected].tasks.place,target:"places"},{name:"cost",type:"combobox",placeholder:e[e.selected].tasks.cost,target:"costs"},{name:"task_approbation",type:"checkbox",placeholder:e[e.selected].tasks.task_approbation,format:"checkbox"},{name:"need_approbation",type:"checkbox",placeholder:e[e.selected].tasks.need_approbation,format:"checkbox"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},O={title:e[e.selected].flows.title,Model:class{constructor(t){this.id=t.id,this.organization=t.organization,this.code=t.code,this.name=t.name,this.description=t.description,this.client=t.client,this.cost=t.cost,this.enabled=t.enabled,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"organization",type:"view",placeholder:e[e.selected].general.organization},{name:"code",type:"text",placeholder:e[e.selected].general.code,required:!0},{name:"name",type:"text",placeholder:e[e.selected].general.name,required:!0},{name:"description",type:"text",placeholder:e[e.selected].general.description},{name:"client",type:"combobox",placeholder:e[e.selected].flows.client,target:"clients"},{name:"cost",type:"combobox",placeholder:e[e.selected].flows.cost,target:"costs"},{name:"enabled",type:"checkbox",placeholder:e[e.selected].general.enabled,format:"checkbox"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},U={title:e[e.selected].maps.title,Model:class{constructor(t){this.id=t.id,this.code=t.code,this.name=t.name,this.region=t.region,this.latitude=t.latitude,this.longitude=t.longitude,this.altitude=t.altitude}},fields:[]},R={title:e[e.selected].contracts_relations.title,Model:class{constructor(t){this.id=t.id,this.contract=t.contract,this.relation=t.relation,this.start=t.start,this.end=t.end,this.value=t.value,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"contract",type:"combobox",placeholder:e[e.selected].contracts_relations.contract,target:"contract"},{name:"relation",type:"combobox",placeholder:e[e.selected].contracts_relations.relation,target:"relation"},{name:"start",type:"date",placeholder:e[e.selected].contracts_relations.start,format:"date"},{name:"end",type:"date",placeholder:e[e.selected].contracts_relations.end,format:"date"},{name:"value",type:"number",placeholder:e[e.selected].contracts_relations.value},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},P={title:e[e.selected].clusters_users.title,Model:class{constructor(t){this.id=t.id,this.cluster=t.cluster,this.user=t.user,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"cluster",type:"combobox",placeholder:e[e.selected].clusters_users.cluster,target:"cluster"},{name:"user",type:"combobox",placeholder:e[e.selected].clusters_users.user,target:"user"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},I={title:e[e.selected].roles_users.title,Model:class{constructor(t){this.id=t.id,this.role=t.role,this.user=t.user,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"role",type:"combobox",placeholder:e[e.selected].roles_users.role,target:"role"},{name:"user",type:"combobox",placeholder:e[e.selected].roles_users.user,target:"user"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},J={title:e[e.selected].clusters_permissions.title,Model:class{constructor(t){this.id=t.id,this.cluster=t.cluster,this.permission=t.permission,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"cluster",type:"combobox",placeholder:e[e.selected].clusters_permissions.cluster,target:"cluster"},{name:"permission",type:"combobox",placeholder:e[e.selected].clusters_permissions.permission,target:"permission"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},G={title:e[e.selected].deliverables_states.title,Model:class{constructor(t){this.id=t.id,this.deliverable=t.deliverable,this.state=t.state,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"deliverable",type:"combobox",placeholder:e[e.selected].deliverables_states.deliverable,target:"deliverable"},{name:"state",type:"combobox",placeholder:e[e.selected].deliverables_states.state,target:"state"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},Z={title:e[e.selected].tasks_deliverables.title,Model:class{constructor(t){this.id=t.id,this.task=t.task,this.deliverable=t.deliverable,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"task",type:"combobox",placeholder:e[e.selected].tasks_deliverables.task,target:"task"},{name:"deliverable",type:"combobox",placeholder:e[e.selected].tasks_deliverables.deliverable,target:"deliverable"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},V={title:e[e.selected].flows_tasks.title,Model:class{constructor(t){this.id=t.id,this.flow=t.flow,this.task=t.task,this.created_at=t.created_at,this.created_by=t.created_by,this.updated_at=t.updated_at,this.updated_by=t.updated_by}},fields:[{name:"id",type:"view",placeholder:e[e.selected].general._id},{name:"flow",type:"combobox",placeholder:e[e.selected].flows_tasks.flow,target:"flow"},{name:"task",type:"combobox",placeholder:e[e.selected].flows_tasks.task,target:"task"},{name:"created_at",type:"view",placeholder:e[e.selected].general.createdAt,format:"datetime"},{name:"created_by",type:"view",placeholder:e[e.selected].general.createdBy},{name:"updated_at",type:"view",placeholder:e[e.selected].general.updatedAt,format:"datetime"},{name:"updated_by",type:"view",placeholder:e[e.selected].general.updatedBy}]},u={permissions:k,controllers:z,users:M,organizations:A,histories:B,documents:j,humans:q,contracts:$,clusters:L,roles:E,costs:C,places:D,states:N,resources:S,deliverables:F,tasks:T,flows:O,maps:U,contracts_relations:R,clusters_users:P,roles_users:I,clusters_permissions:J,deliverables_states:G,tasks_deliverables:Z,flows_tasks:V},H={emits:["exportData"],data(){return{Lenguages:e}},methods:{exportFile(a,t){const d=[],r=[];u[t].fields.forEach(l=>r.push(l.placeholder)),d.push(r.join(",")+`
`),a.forEach(l=>{const n=[];u[t].fields.forEach(i=>{l[i.name]?n.push(l[i.name]):n.push("")}),d.push(n.join(",")+`
`)});const s=new Blob(d,{type:"application/text"}),o=document.createElement("a");o.href=URL.createObjectURL(s),o.download=t+"_export.csv",o.click(),URL.revokeObjectURL(o.href)}}},K=["title"],Q=c("i",{class:"fa fa-file-export"},null,-1),W=[Q],X={class:"dropdown-menu"};function Y(a,t,d,r,s,o){return g(),_(b,null,[c("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:s.Lenguages[s.Lenguages.selected].general.export,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},W,8,K),c("ul",X,[c("li",null,[c("a",{class:"dropdown-item",href:"#",onClick:t[0]||(t[0]=l=>a.$emit("exportData",0))},h(this.Lenguages[this.Lenguages.selected].general.export_view),1)]),c("li",null,[c("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=l=>a.$emit("exportData",1))},h(this.Lenguages[this.Lenguages.selected].general.export_all),1)])])],64)}const Ne=y(H,[["render",Y]]),ee={props:["moduleName"],emits:["importData"],data(){return{Lenguages:e,Fields:u}},methods:{importFile(a){const t=a.target.files,d=new FileReader;d.onload=r=>{try{const s=r.target.result.split(`
`)[0].split(","),o=r.target.result.split(`
`).slice(1);for(const l of o){const n=l.split('","');if(s.length<=l.length){let i={};for(let p=0;p<s.length;p++)i[s[p]]=n[p].replace('"',"");this.moduleName=="places"&&(i=this.place_converter(i));const m=new this.Fields[this.moduleName].Model(i);this.$emit("importData",m)}}}catch(s){console.log(s)}},d.readAsText(t[0])},downloadFile(){const a=[],t=[];u[this.moduleName].fields.forEach(s=>t.push(s.placeholder)),a.push(t.join(",")+`
`);const d=new Blob(a,{type:"application/text"}),r=document.createElement("a");r.href=URL.createObjectURL(d),r.download=this.moduleName+"_template.csv",r.click(),URL.revokeObjectURL(r.href)},place_converter(a){return{code:a.ID,name:a.Sitio,country:"Colombia",region:a.Region,state:a.Departamento,municipality:a.Municipio,dane_municipality:a.DANE_Municipio,poblation:a.Centro_Poblado,dane_poblation:a.DANE_CP,zone:a.Zona,objetive:a.Objetivo_Cobertura,locality:a.Localidad__CRC_,address:a.Ubicacion,latitude:a.Latitud,longitude:a.Longitud,altitude:"0",structure:a.Estructura,structure_detail:a.Detalle_Estructura,height:a.Altura_Estructura,real_owner:a.Propietario_Estructura}}}},te=["title"],ae=c("i",{class:"fa fa-file-import"},null,-1),de=[ae],re={class:"dropdown-menu"};function se(a,t,d,r,s,o){return g(),_(b,null,[c("input",{ref:"FileUpload",type:"file",accept:".csv",onChange:t[0]||(t[0]=(...l)=>o.importFile&&o.importFile(...l)),hidden:""},null,544),c("button",{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-toggle":"tooltip","data-placement":"bottom",title:s.Lenguages[s.Lenguages.selected].general.import,class:"btn text-light dropdown-toggle",style:{background:"#002133"}},de,8,te),c("ul",re,[c("li",null,[c("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=(...l)=>o.downloadFile&&o.downloadFile(...l))},h(this.Lenguages[this.Lenguages.selected].general.import_template),1)]),c("li",null,[c("a",{class:"dropdown-item",href:"#",onClick:t[2]||(t[2]=l=>a.$refs.FileUpload.click())},h(this.Lenguages[this.Lenguages.selected].general.import_file),1)])])],64)}const Se=y(ee,[["render",se]]),oe={props:["token","user"],emits:["showMessage"],data(){return{moduleServer:"https://52.22.141.239:3000/"}},methods:{async getAll(a){try{const t={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization}},d=await fetch(this.moduleServer+a,t);return d.status==403&&this.$router.push("/logout"),await d.json()}catch(t){console.log(t),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getParams(a,t){try{const d={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization}},r="/"+t.latitude+"/"+t.longitude+"/"+t.zoom,s=await fetch(this.moduleServer+a+r,d);return s.status==403&&this.$router.push("/logout"),await s.json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo obtener los registros de la base de datos.","error")}},async getOne(a,t){try{const d={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization}};return await(await fetch(this.moduleServer+a+"/"+t,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo obtener el registro de la base de datos.","error")}},async createOne(a,t){try{const d={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization},body:JSON.stringify(t)};return await(await fetch(this.moduleServer+a,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo crear el nuevo registro en la base de datos.","error")}},async updateOne(a,t){try{const d={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization},body:JSON.stringify(t)};return await(await fetch(this.moduleServer+a+"/"+t.id,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo actualizar el registro en la base de datos.","error")}},async changeStatus(a,t){try{const d={method:"PUT",headers:{"Content-Type":"application/json","x-access-token":this.token,"x-organization":this.user.organization},body:JSON.stringify(a)};return await(await fetch(this.moduleServer+this.moduleName+"/"+a._id+"/"+t,d)).json()}catch(d){console.log(d),this.$emit("showMessage","No se pudo cambiar el estado del registro en la base de datos.","error")}},async deleteOne(a,t,d){try{const r={method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json","x-access-token":this.token,"x-organization":this.user.organization},body:JSON.stringify({...t,reason:d})};return await(await fetch(this.moduleServer+a+"/"+t.id,r)).json()}catch(r){console.log(r),this.$emit("showMessage","No se pudo eliminar el registro de la base de datos.","error")}}}};function ce(a,t,d,r,s,o){return null}const Fe=y(oe,[["render",ce]]);export{Fe as B,Ne as E,u as F,Se as I,ie as S};