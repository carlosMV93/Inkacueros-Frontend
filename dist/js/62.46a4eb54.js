"use strict";(self["webpackChunktemplate_vue_platform"]=self["webpackChunktemplate_vue_platform"]||[]).push([[62],{6365:function(e,t,n){n.d(t,{lx:function(){return i},su:function(){return r},xy:function(){return s}});var a=n(1076);const o="http://127.0.0.1:8000/api";function r(e){return a.Z.post(`${o}/create_user`,e)}function i(e){return a.Z.post(`${o}/validate_user`,e)}function s(e){return a.Z.post(`${o}/change-password`,e)}},3512:function(e,t,n){n.d(t,{y:function(){return r}});var a=n(2492),o=n.n(a);function r(e,t,n,a){o().fire({icon:t,html:`<p class="text-lg font-semibold">${n}</p>\n          <p class="text-base">${a}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}},4511:function(e,t,n){n.d(t,{R:function(){return o}});var a=n(3512);function o(e){e&&400===e.status?(0,a.y)((()=>{}),"error","Solicitud incorrecta","Los datos proporcionados no son válidos"):(0,a.y)((()=>{}),"error","Error de conexión","Hubo un problema de conexión")}},9062:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(3396),o=n(870),r=n(5039),i=n(1888),s=n(3601),l=n(3289),c=n(7325),d=n(5869);const u={class:"w-full h-full flex justify-center items-center"},m={key:0,class:"pb-10"},p={class:"flex justify-center"},f=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis"},"Usuario",-1),v=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"}," Contraseña ",-1),w={class:"text-brown text-decoration-none",href:"#",rel:"noopener noreferrer",target:"_blank"},b={key:1,class:"pb-10"},h={class:"flex justify-center"},g=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis"},"Usuario",-1),k=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"}," Nueva Contraseña ",-1);function x(e,t,n,x,y,_){const W=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,["LOGIN"==x.typeForm?((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(r._,{class:"mx-auto pa-12 pb-8",elevation:"8","min-width":"448","max-width":"600",rounded:"lg"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(o.T,{icon:"mdi mdi-lock",variant:"tonal",color:"indigo"})]),f,(0,a.Wm)(d.h,{density:"compact",placeholder:"Ingrese su usuario","prepend-inner-icon":"mdi-account",variant:"outlined",color:"brown-darken-1",modelValue:x.username,"onUpdate:modelValue":t[0]||(t[0]=e=>x.username=e)},null,8,["modelValue"]),v,(0,a.Wm)(d.h,{"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",density:"compact",placeholder:"Ingrese su contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined",color:"brown-darken-1",modelValue:x.password,"onUpdate:modelValue":t[1]||(t[1]=e=>x.password=e),"onClick:appendInner":t[2]||(t[2]=t=>e.visible=!e.visible)},null,8,["append-inner-icon","type","modelValue"]),(0,a.Wm)(o.T,{class:"mb-8",color:"brown-darken-1",size:"large",variant:"tonal",block:"",onClick:x.validateCredentials},{default:(0,a.w5)((()=>[(0,a.Uk)(" Ingresar ")])),_:1},8,["onClick"]),(0,a.Wm)(i.Z,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{to:"/register",class:"item-nav",href:"/register"},{default:(0,a.w5)((()=>[(0,a._)("a",w,[(0,a.Uk)(" Registrarse "),(0,a.Wm)(l.t,{icon:"mdi-chevron-right"})])])),_:1})])),_:1})])),_:1})])):"FORGET"==x.typeForm?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(r._,{class:"mx-auto pa-12 pb-8",elevation:"8","min-width":"448","max-width":"600",rounded:"lg"},{default:(0,a.w5)((()=>[(0,a._)("div",h,[(0,a.Wm)(o.T,{icon:"mdi mdi-key-change",variant:"tonal",color:"indigo"})]),g,(0,a.Wm)(d.h,{density:"compact",placeholder:"Ingrese su usuario","prepend-inner-icon":"mdi-account",variant:"outlined",color:"brown-darken-1",modelValue:x.forgetusername,"onUpdate:modelValue":t[3]||(t[3]=e=>x.forgetusername=e)},null,8,["modelValue"]),k,(0,a.Wm)(d.h,{"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",density:"compact",placeholder:"Ingrese su contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined",color:"brown-darken-1",modelValue:x.forgetpassword,"onUpdate:modelValue":t[4]||(t[4]=e=>x.forgetpassword=e),"onClick:appendInner":t[5]||(t[5]=t=>e.visible=!e.visible)},null,8,["append-inner-icon","type","modelValue"]),(0,a.Wm)(o.T,{class:"mb-8",color:"brown-darken-1",size:"large",variant:"tonal",block:"",onClick:x.changePassword},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cambiar contraseña ")])),_:1},8,["onClick"]),(0,a.Wm)(i.Z,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a._)("span",{class:"text-brown text-decoration-none cursor-pointer",onClick:t[6]||(t[6]=e=>x.selectTypeForm("LOGIN"))},[(0,a.Wm)(l.t,{icon:"mdi-chevron-left"}),(0,a.Uk)(" Login ")])])),_:1})])),_:1})])):(0,a.kq)("",!0)]),(0,a.Wm)(s.B,{modelValue:x.dialogLoader,"onUpdate:modelValue":t[7]||(t[7]=e=>x.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,a.w5)((()=>[(0,a.Wm)(r._,{color:"brown-darken-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Procesando... "),(0,a.Wm)(c.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}n(560);var y=n(2483),_=n(6365),W=n(4511),C=n(4239),I=n(4870),U=n(3512),V={data:()=>({visible:!1}),setup(){const e=(0,y.tv)(),t=(0,I.iH)(""),n=(0,I.iH)(""),a=(0,I.iH)(""),o=(0,I.iH)(""),r=(0,I.iH)(!1),i=(0,I.iH)("LOGIN"),s=e=>{i.value=e},l=()=>{r.value=!0;const a={username:t.value,password:n.value};(0,_.lx)(a).then((t=>{console.log(t.data),r.value=!1,C.Z.commit("setEmail",t.data.email),C.Z.commit("setUsername",t.data.username),C.Z.commit("setUserId",t.data.idUser),C.Z.commit("setRole",t.data.admin?"ADMIN":"CLIENT"),C.Z.commit("setIsAuthenticated",!0),e.push("/")})).catch((e=>{r.value=!1,(0,W.R)(e.response)}))},c=()=>{r.value=!0;const e={username:a.value,new_password:o.value};(0,_.xy)(e).then((()=>{r.value=!1,(0,U.y)((()=>{i.value="LOGIN"}),"success","Logrado","Se ha cambiado correctamente la contraseña")})).catch((e=>{r.value=!1,(0,W.R)(e.response)}))};return{validateCredentials:l,changePassword:c,selectTypeForm:s,forgetusername:a,forgetpassword:o,dialogLoader:r,username:t,password:n,typeForm:i}}},Z=n(89);const L=(0,Z.Z)(V,[["render",x]]);var T=L}}]);
//# sourceMappingURL=62.46a4eb54.js.map