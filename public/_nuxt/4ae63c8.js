(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{308:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("56efcc4f",content,!0,{sourceMap:!1})},333:function(t,e,o){"use strict";o(308)},334:function(t,e,o){var r=o(33)(!1);r.push([t.i,".contact-form[data-v-2a23e1e6]{width:50%}@media (min-width:768px) and (max-width:991px){.contact-form[data-v-2a23e1e6]{width:100%}}@media (max-width:767px){.contact-form[data-v-2a23e1e6]{width:100%}}.contact-form.darker h3[data-v-2a23e1e6]{color:#0b4051}.contact-form h3[data-v-2a23e1e6]{text-transform:uppercase;color:#fff;letter-spacing:1.5px;line-height:1.875rem}@media (max-width:767px){.contact-form h3[data-v-2a23e1e6]{font-size:1.4rem;line-height:1.4rem}}.contact-form span[data-v-2a23e1e6]{font-size:1.125rem;font-weight:400;display:block}@media (max-width:767px){.contact-form span[data-v-2a23e1e6]{font-size:.75rem}}.contact-form form[data-v-2a23e1e6]{padding-top:60px}@media (max-width:767px){.contact-form form[data-v-2a23e1e6]{padding-top:41px}}.contact-form form button[data-v-2a23e1e6]{margin-top:42px}@media (max-width:767px){.contact-form form button[data-v-2a23e1e6]{margin-top:7px}}.contact-form .inputs-top[data-v-2a23e1e6]{display:flex;grid-gap:30px;gap:30px}.contact-form .inputs[data-v-2a23e1e6]{display:flex;flex-direction:column;grid-gap:34px;gap:34px;width:100%}@media (max-width:767px){.contact-form .inputs[data-v-2a23e1e6]{grid-gap:14px;gap:14px}}.contact-form .inputs-flex[data-v-2a23e1e6]{display:flex;width:100%;grid-gap:34px;gap:34px}@media (max-width:767px){.contact-form .inputs-flex[data-v-2a23e1e6]{flex-direction:column;grid-gap:14px;gap:14px}}.contact-form .inputs-flex input[data-v-2a23e1e6]{width:50%}@media (max-width:767px){.contact-form .inputs-flex input[data-v-2a23e1e6]{width:100%}}.contact-form .errors[data-v-2a23e1e6]{padding-top:20px}@media (max-width:767px){.contact-form .errors[data-v-2a23e1e6]{padding:10px 0 5px}}.contact-form .errors span[data-v-2a23e1e6]{color:#ed4337;font-size:16px}",""]),t.exports=r},360:function(t,e,o){"use strict";o.r(e);o(39);var r={props:{mode:String},data:function(){return{formData:{name:"",email:"",phone:"",carBrand:""},socialIcons:[{name:"instagram",url:"https://www.instagram.com/mobile.magic.cleaning/?hl=en",iconName:"instagram"},{name:"facebook",url:"https://www.facebook.com/mobile.magic.cleaning.llc/",iconName:"facebook-f"},{name:"youtube",url:"https://www.youtube.com/channel/UCK_FJlcU2ci-9bwq2YDSifQ",iconName:"youtube"}],formError:"",error:null}},methods:{sendEmail:function(){this.formData.name&&this.formData.email&&this.formData.phone?this.$axios.post("/api/send"):this.formError="Name, email and phone fields are reqired!"}}},n=(o(333),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-form",class:t.mode},[t._m(0),t._v(" "),o("form",{ref:"form",attrs:{id:"form",autocomplete:"off",spellcheck:"false"},on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[o("div",{staticClass:"inputs"},[o("div",{staticClass:"inputs-flex"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],attrs:{type:"text",placeholder:"name",name:"from_name"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"text",placeholder:"email",name:"from_email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"inputs-flex"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],attrs:{type:"text",placeholder:"phone",name:"from_phone"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.carBrand,expression:"formData.carBrand"}],attrs:{type:"text",placeholder:"car model",name:"from_carBrand"},domProps:{value:t.formData.carBrand},on:{input:function(e){e.target.composing||t.$set(t.formData,"carBrand",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"errors"},[t.formError?o("span",[t._v(t._s(t.formError))]):t._e(),t._v(" "),t.error?o("span",[t._v(" Email must be valid! ")]):t._e()]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[t._v("\n    Want to Book?\n    "),o("span",[t._v(" Fill this form and we will contact you ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"btn btn-invert",attrs:{type:"submit"}},[t._v("Send")])])}],!1,null,"2a23e1e6",null);e.default=component.exports}}]);