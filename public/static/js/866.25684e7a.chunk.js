"use strict";(self.webpackChunkmooli_admin=self.webpackChunkmooli_admin||[]).push([[866],{7439:function(e,t,n){var i=n(2982),r=(n(2791),n(184));t.Z=function(e){var t=e.nPages,n=e.currentPage,a=e.setCurrentPage,s=(0,i.Z)(Array(t+1).keys()).slice(1);return(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"pagination justify-content-center",children:[(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("a",{className:"page-link",onClick:function(){1!==n&&a(n-1)},href:"#!",children:"Previous"})}),s.map((function(e){return(0,r.jsx)("li",{className:"page-item ".concat(n==e?"active":""," "),children:(0,r.jsx)("a",{onClick:function(){return a(e)},className:"page-link",href:"#!",children:e})},e)})),(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("a",{className:"page-link",onClick:function(){n!==t&&a(n+1)},href:"#!",children:"Next"})})]})})}},8796:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(1413),r=n(4165),a=n(5861),s=n(885),c=n(2791),l=n(2357),o=n(6187),d=n(1815),u=n(8284),f=n(6153),m=n(7988),h=n(3002),p=n(6919),x=n(4555),g=n(4668),j=n(2560),Z=n(4768),b=n(9875),v=n(2982),y=n(7762),_=n(1438),D=n(4292),N=n(5234),C=(n(763),n(5977)),k=n.n(C),S=n(5702),w=n(5956),q=n(7705),P=n(6030),T=n(9902),A=n(577),E=(n(5462),n(3037),n(8688),n(5717)),F=(n(5646),n(199),n(7551)),V=n(2443),z=n.n(V),B=n(3540),I=n(1830),L=n.n(I),O=n(184),R=function(e){var t,n,g=(0,q.cI)({mode:"onBlur"}),j=g.register,C=g.handleSubmit,V=g.formState,I=(V.isDirty,V.isValid,V.errors),R={city:[],campaign_title:"",description:"",category:[],subCategory:[],campaign_images:[],video:[],campaign_start_date:"",campaign_end_date:"",offer:[],offer_title:"",offer_description:"",offer_price:"",offer_discount:"",merchant_businessName:"",merchantId:""},U=(0,c.useState)(R),M=(0,s.Z)(U,2),W=M[0],Y=M[1],K=(0,c.useState)({}),$=(0,s.Z)(K,2),X=$[0],H=$[1],J=(0,c.useState)({}),G=(0,s.Z)(J,2),Q=G[0],ee=G[1],te=(0,c.useState)({}),ne=(0,s.Z)(te,2),ie=(ne[0],ne[1],(0,c.useState)(!1)),re=(0,s.Z)(ie,2),ae=re[0],se=re[1],ce=(0,c.useState)(!1),le=(0,s.Z)(ce,2),oe=le[0],de=le[1],ue=(0,c.useState)(null),fe=(0,s.Z)(ue,2),me=fe[0],he=fe[1],pe=(0,c.useState)({}),xe=(0,s.Z)(pe,2),ge=(xe[0],xe[1]),je=(0,c.useState)(""),Ze=(0,s.Z)(je,2),be=Ze[0],ve=Ze[1],ye=(0,c.useState)([]),_e=(0,s.Z)(ye,2),De=_e[0],Ne=_e[1],Ce=(0,c.useState)(null),ke=(0,s.Z)(Ce,2),Se=ke[0],we=ke[1],qe=(0,c.useState)([]),Pe=(0,s.Z)(qe,2),Te=(Pe[0],Pe[1],(0,c.useState)([])),Ae=(0,s.Z)(Te,2),Ee=(Ae[0],Ae[1],(0,c.useState)([])),Fe=(0,s.Z)(Ee,2),Ve=Fe[0],ze=Fe[1],Be=(0,c.useState)(""),Ie=(0,s.Z)(Be,2),Le=Ie[0],Oe=Ie[1],Re=(0,c.useState)(!1),Ue=(0,s.Z)(Re,2),Me=Ue[0],We=Ue[1],Ye=(0,P.I0)(),Ke=(0,P.v9)((function(e){return e.allCampaigns.data.data})),$e=(0,P.v9)((function(e){return e.package.packageTypeList})),Xe=(0,P.v9)((function(e){return e.package.packageList}));(0,c.useEffect)((function(){Ye((0,w.lo)()),Ye((0,w.xp)())}),[Ye]);var He=(0,P.v9)((function(e){return e.allMerchants.data.data})),Je=new Audio(e.editData&&S.dB+e.editData.video);Je.onloadedmetadata=function(){console.log("sada",100*Math.floor(Je.duration)),Oe(100*Math.floor(Je.duration))};var Ge={dots:!1,autoplay:!0,speed:{videoDuration:Le},slidesToShow:1};function Qe(e){return et.apply(this,arguments)}function et(){return(et=(0,a.Z)((0,r.Z)().mark((function e(t){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(n=new FormData).append("file",t),i="",e.next=6,Ye((0,w.$i)(n,(function(e){i=e,console.log("methos file--------------",i)})));case 6:return e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(){return(tt=(0,a.Z)((0,r.Z)().mark((function t(n){var i,a,s,c,l,o,d,u,f,m,h;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((null===(i=W.category)||void 0===i?void 0:i.length)<1||(null===(a=W.subCategory)||void 0===a?void 0:a.length)<1)){t.next=4;break}(null===(s=W.category)||void 0===s?void 0:s.length)<1?((l=X).category="Atleast one category is required",A.Am.error("Atleast one category is required"),H(l)):(null===(c=W.subCategory)||void 0===c?void 0:c.length)<1&&((o=X).subCategory="Atleast one sub category is required",A.Am.error("Atleast one sub category is required"),H(o)),t.next=44;break;case 4:if(e.editData){t.next=38;break}if(H({}),d=[],(u=Object.assign({},n)).campaign_title=W.campaign_title,u.description=W.description,u.category=W.category,u.subCategory=W.subCategory,u.campaign_start_date=W.campaign_start_date,u.campaign_end_date=W.campaign_end_date,u.offer=W.offer,u.merchant_businessName=W.merchant_businessName,u.city=rt,n.image=De,u.merchantId=W.merchantId,!n.image.length){t.next=31;break}f=0;case 21:if(!(f<n.image.length)){t.next=31;break}return m=n.image[f],t.next=25,Qe(m);case 25:h=t.sent,console.log(m),d.push(h);case 28:f++,t.next=21;break;case 31:if(u.image=d,!W.video.name){t.next=36;break}return t.next=35,Qe(be);case 35:u.video=t.sent;case 36:console.log("campaign obje--------------------",u),Ye((0,w.JT)(u),(function(){Y(R)}));case 38:if(!e.editData){t.next=44;break}if(!e.editData.video){t.next=43;break}return t.next=42,Qe(be);case 42:W.video=t.sent;case 43:Ye((0,w.hm)(W,e.editData._id));case 44:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,c.useEffect)((function(){e.editData&&(Y(e.editData),console.log("edit form value",W))}),[e.editData]),(0,c.useEffect)((function(){Ke.length||(Ye((0,w.E6)()),Ye((0,w.jP)((function(){})))),e.editData&&(Y(e.editData),console.log("editttttttt",W))}),[e.editData]),(0,c.useEffect)((function(){He.length||Ye((0,w.jP)())}),[Ye,He.length]);var nt=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(Y((0,i.Z)((0,i.Z)({},W),{},{category:t})),delete(a=X).category,H(a),[],s=0;s<t.length;s++)t[s];case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),it=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y((0,i.Z)((0,i.Z)({},W),{},{subCategory:t})),delete(a=X).subCategory,H(a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),rt=[];W.city.map((function(e){return rt.push(e.location_city)}));var at=(0,c.useState)([]),st=(0,s.Z)(at,2),ct=st[0],lt=st[1],ot=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:He.map((function(e){return e.businessName==t?lt(e.location):console.log()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),dt=function(e,t){var n=W.offer.slice(0);n.splice(t,1),Y((0,i.Z)((0,i.Z)({},W),{},{offer:n}))},ut=new Date,ft=String(ut.getDate()).padStart(2,"0"),mt=String(ut.getMonth()+1).padStart(2,"0"),ht=ut.getFullYear();ut=mt+"/"+ft+"/"+ht;var pt=function(){se(!ae)},xt=function(){de(!oe)};return console.log(W),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(_.Z,{isOpen:ae,toggle:pt.bind(null),children:[(0,O.jsx)(D.Z,{toggle:pt.bind(null),children:"Add New Offer"}),(0,O.jsx)(N.Z,{children:(0,O.jsxs)(k(),{onSubmit:function(e){return function(e){e.preventDefault();try{var t={};(!Q.offer_title||Q.offer_title.length<4)&&(t.offer_title="Invalid Title"),Q.offer_description||(t.offer_description="Please enter description"),Q.offer_price||(t.offer_price="Please enter price"),Q.offer_discount||(t.offer_discount="Please enter offer discount"),console.log("vlueueee",W);var n=W.offer.slice(0);n.push(Q),Y((0,i.Z)((0,i.Z)({},W),{},{offer:n})),console.log("hjj",W.offer),ee({}),se(!1)}catch(r){}}(e)},children:[(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"title",children:"Title"}),(0,O.jsx)(x.Z,{type:"text",name:"title",id:"title",onChange:function(e){ee((0,i.Z)((0,i.Z)({},Q),{},{offer_title:e.target.value}))}}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_title&&"Title is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"description",children:"Description"}),(0,O.jsx)(F.CKEditor,{name:"description",id:"description",editor:z(),data:e.editData?e.editData.offer.offer_description:W.offer.offer_description,onChange:function(e,t){var n=t.getData();ee((0,i.Z)((0,i.Z)({},Q),{},{offer_description:n}))}}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_description&&"Description is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"price",children:"Price"}),(0,O.jsx)(x.Z,{type:"number",min:"0",oninput:"validity.valid||(value='');",name:"price",id:"price",onChange:function(e){return ee((0,i.Z)((0,i.Z)({},Q),{},{offer_price:parseFloat(e.target.value)}))},ref:j({pattern:{value:/^[1-9]\d*$/g,message:"Price can only contain positive values..."}})}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_price&&"Price is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"discount",children:"Discount %"}),(0,O.jsx)(x.Z,{type:"flaot",name:"discount",id:"discount",onChange:function(e){return ee((0,i.Z)((0,i.Z)({},Q),{},{offer_discount:e.target.value}))},ref:j({pattern:{value:/^[1-9]\d*$/g,message:"Discount can only contain positive values..."}})})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(d.Z,{color:"primary",type:"submit",children:"Save"}),(0,O.jsx)(d.Z,{color:"secondary",className:"ml-1",onClick:function(){return pt()},children:"Cancel"})]})]})})]}),function(t){return(0,O.jsxs)(_.Z,{isOpen:oe,toggle:function(){return xt},children:[(0,O.jsx)(D.Z,{toggle:function(){return xt},children:"Edit Offer"}),(0,O.jsx)(N.Z,{children:(0,O.jsxs)(k(),{onSubmit:function(e){return function(e){e.preventDefault();var t=W.offer.slice(0);t[me]=Q,Y((0,i.Z)((0,i.Z)({},W),{},{offer:t})),de(!1)}(e,W.offer)},children:[(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"title",children:"Title"}),(0,O.jsx)(x.Z,{type:"text",name:"title",id:"title",defaultValue:t&&t.offer_title,onChange:function(e){return ee((0,i.Z)((0,i.Z)({},Q),{},{offer_title:e.target.value}))}}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_title&&"Title is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"description",children:"Description"}),(0,O.jsx)(F.CKEditor,{name:"description",id:"description",editor:z(),data:e.editData?e.editData.offer.offer_description:W.offer.offer_description,onChange:function(e,t){var n=t.getData();ee((0,i.Z)((0,i.Z)({},Q),{},{offer_description:n}))}}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_description&&"Description is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"price",children:"Price"}),(0,O.jsx)(x.Z,{type:"float",name:"price",id:"price",defaultValue:t&&t.offer_price,defaultChecked:Q.offer_price,onChange:function(e){return ee((0,i.Z)((0,i.Z)({},Q),{},{offer_price:parseFloat(e.target.value)}))}}),(0,O.jsx)("span",{className:"text-danger",children:I.offer_price&&"Price is required."})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"discount",children:"Discount %"}),(0,O.jsx)(x.Z,{type:"float",name:"discount",id:"discount",defaultValue:t&&t.offer_discount,onChange:function(e){return ee((0,i.Z)((0,i.Z)({},Q),{},{offer_discount:e.target.value}))}})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(d.Z,{style:{backgroundColor:b.D.black},type:"submit",children:"Update"}),(0,O.jsx)(d.Z,{color:"secondary",className:"ml-1",onClick:function(){return xt()},children:"Cancel"})]})]})})]})}(Se),(0,O.jsx)(f.Z,{children:(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(l.Z,{children:[(0,O.jsxs)(o.Z,{className:"card-title-custom p-3 border-bottom mb-0",children:[(0,O.jsx)("i",{className:"mdi mdi-alert-box mr-2"}),e.editData?e.editData.title.charAt(0).toUpperCase()+e.editData.title.slice(1)+" |  Edit Campaign":"Add Campaign"]}),(0,O.jsx)(u.Z,{children:(0,O.jsxs)(k(),{id:"campaign-form",onSubmit:C((function(e){return tt.apply(this,arguments)})),children:[(0,O.jsx)("h5",{children:"Campaign Details"}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(f.Z,{children:[e.editData&&(0,O.jsx)(m.Z,{md:6,children:(0,O.jsx)("div",{style:{marginTop:"180px",marginLeft:"30px",marginBottom:"20px"},children:(0,O.jsxs)(E.Z,(0,i.Z)((0,i.Z)({},{dots:!1,autoplay:!0,infinite:!0,speed:300,slidesToShow:1}),{},{children:[e.editData.video.length>0&&""!==e.editData.video[0]?!Me&&(0,O.jsx)(E.Z,(0,i.Z)((0,i.Z)({},Ge),{},{children:(0,O.jsx)("video",{muted:!0,autoPlay:!0,style:{width:"130%",height:225,marginLeft:"-120px"},onPlay:function(){return We(!1)},onPause:function(){return We(!0)},children:(0,O.jsx)("source",{src:S.dB+e.editData.video,type:"video/mp4"})})})):"",0==e.editData.video.length?!Me&&e.editData.image.map((function(t,n){return(0,O.jsxs)("div",{children:[(0,O.jsx)("img",{alt:"name",src:S.dB+t,style:{width:400,height:300}}),(0,O.jsx)("div",{style:{position:"absolute",top:"0px"},children:(0,O.jsx)(d.Z,{onClick:function(){var n=e.editData.image.indexOf(t);n>-1&&(e.editData.image.splice(n,1),Ne(e.editData.image.filter((function(e,t){return t!==e}))))},children:"X"})})]},n)})):e.editData.image.map((function(t,n){return(0,O.jsxs)("div",{children:[(0,O.jsx)("img",{alt:"name",src:S.dB+t,style:{width:400,height:300}}),(0,O.jsx)("div",{style:{position:"absolute",top:"0px"},children:(0,O.jsx)(d.Z,{onClick:function(){var n=e.editData.image.indexOf(t);n>-1&&(e.editData.image.splice(n,1),Ne(e.editData.image.filter((function(e,t){return t!==e}))))},children:"X"})})]},n)}))]}))})}),(0,O.jsxs)(m.Z,{md:e.editData?6:12,className:"mt-4",children:[(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"image",children:"Title *"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)("input",{type:"text",name:"title",defaultValue:W.title,onChange:function(e){return Y((0,i.Z)((0,i.Z)({},W),{},{campaign_title:e.target.value}))},ref:j({required:!0}),className:"form-control"})}),(0,O.jsx)("span",{className:"text-danger",children:I.title&&"Title is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"packageType",children:"Category *"}),(0,O.jsx)(T.default,{required:!0,options:Xe,selectedValues:W.category||[],onSelect:nt,onRemove:function(e){return Y((0,i.Z)((0,i.Z)({},W),{},{category:e}))},displayValue:"name"}),(0,O.jsx)("span",{className:"text-danger",children:X.category&&"Please select category"})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(h.Z,{for:"packageType",children:"Sub Category *"}),(0,O.jsx)(T.default,{options:$e,selectedValues:W.subCategory||[],onSelect:it,onRemove:function(e){return Y((0,i.Z)((0,i.Z)({},W),{},{subCategory:e}))},displayValue:"name"}),(0,O.jsx)("span",{className:"text-danger",children:X.subCategory&&"Please select sub category"})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"image",children:"Upload Image"}),(0,O.jsxs)("div",{className:"mb-2",children:[(0,O.jsx)("input",{multiple:!0,type:"file",name:"image",pics:De,accept:"image/*",ref:j({required:!e.editData}),className:"form-control",defaultValue:W.image,onChange:function(e){var t,n=(0,y.Z)(e.target.files);try{var i=function(){var e=t.value;console.log("file>>>",e);var n=URL.createObjectURL(e);console.log("urlllllll",n),ze((function(e){return[].concat((0,v.Z)(e),[n])})),console.log("preview",Ve);var i=new FileReader;i.readAsDataURL(e),Ne((function(t){return[].concat((0,v.Z)(t),[e])})),i.onerror=function(){console.log(i.error)}};for(n.s();!(t=n.n()).done;)i()}catch(r){n.e(r)}finally{n.f()}console.log("picsssss",De,De.length)}}),Ve&&Ve.map((function(e){return(0,O.jsx)("img",{alt:"preview",style:{width:"22px",height:"22px",padding:"0 1px"},src:e})}))]}),(0,O.jsx)("span",{className:"text-danger",children:I.image&&"Image cover is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"video",children:"Upload Video"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)("input",{type:"file",name:"video",accept:"video/*",className:"form-control",defaultValue:W.video,onChange:function(e){ve(e.target.files[0]),console.log("my vid",e.target.files[0]),Y((0,i.Z)((0,i.Z)({},W),{},{video:e.target.files[0]}))}})}),(0,O.jsx)("span",{className:"text-danger",children:be.size>2e6&&"File size exceeded."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"start_date",children:"Start Date *"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)("input",{min:null===(t=new Date)||void 0===t||null===(n=t.toISOString())||void 0===n?void 0:n.split("T")[0],type:"date",name:"start_date",defaultValue:W.start_date,onChange:function(e){return Y((0,i.Z)((0,i.Z)({},W),{},{campaign_start_date:e.target.value}))},ref:j({required:!0}),className:"form-control"})}),(0,O.jsx)("span",{className:"text-danger",children:I.start_date&&"Date is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"end_date",children:"End Date *"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)("input",{disabled:""==W.campaign_start_date,min:W.campaign_start_date,type:"date",name:"end_date",onChange:function(e){return Y((0,i.Z)((0,i.Z)({},W),{},{campaign_end_date:e.target.value}))},defaultValue:W.end_date,ref:j({required:!0}),className:"form-control"})}),(0,O.jsx)("span",{className:"text-danger",children:I.end_date&&"Date is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"end_date",children:"Select Merchant *"}),(0,O.jsx)("div",{className:"mb-2",children:e.editData?(0,O.jsx)("input",{value:W.merchant_businessName,type:"text",disabled:!0,name:"select_merchant",ref:j({required:!0}),className:"form-control"}):(0,O.jsxs)("select",{required:!0,name:"select_merchant",onChange:function(e){var t;lt([]),Y((0,i.Z)((0,i.Z)({},W),{},{merchant_businessName:e.target.value,merchantId:null===He||void 0===He||null===(t=He.find((function(t){return t.businessName==e.target.value})))||void 0===t?void 0:t._id})),ot(e.target.value)},value:W.merchant_businessName,defaultValue:W.merchant_businessName,ref:j({required:!0}),className:"form-control",children:[(0,O.jsx)("option",{selected:!0,disabled:!0,value:"",children:"Select"}),He&&He.map((function(e,t){return(0,O.jsx)("option",{children:e.profile&&e.profile.businessName},t)}))]})}),(0,O.jsx)("span",{className:"text-danger",children:I.merchant_businessName&&"Merchant is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"end_date",children:"Select City *"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)(T.default,{options:ct,onSelect:function(e){Y((0,i.Z)((0,i.Z)({},W),{},{city:e}))},onRemove:function(e){Y((0,i.Z)((0,i.Z)({},W),{},{city:e}))},displayValue:"location_city"})}),(0,O.jsx)("span",{className:"text-danger",children:I.city&&"City is required."})]})}),(0,O.jsx)(m.Z,{sm:12,children:(0,O.jsxs)(p.Z,{children:[(0,O.jsx)("label",{className:"control-label",htmlFor:"firstname",children:"Description *"}),(0,O.jsx)("div",{className:"mb-2",children:(0,O.jsx)(F.CKEditor,{name:"description",id:"description",editor:z(),data:e.editData?e.editData.description:W.description,onChange:function(e,t){var n=t.getData();Y((0,i.Z)((0,i.Z)({},W),{},{description:n}))}})}),(0,O.jsx)("span",{className:"text-danger",children:I.description&&"Description is required."})]})})]})]}),(0,O.jsx)(f.Z,{children:(0,O.jsxs)(m.Z,{sm:12,children:[(0,O.jsx)(d.Z,{color:"skyblue",className:"mb-2",onClick:pt.bind(null),children:"Add New Offer"}),(0,O.jsx)(f.Z,{children:W.offer?W.offer.map((function(e,t){return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(m.Z,{sm:3,className:"card p-2 mt-3 ml-3",children:[(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{style:{fontWeight:"bold",fontSize:"18px",color:b.D.primary},children:e.offer_title})," "]}),(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:e.offer_description&&(0,B.ZP)(e.offer_description)})," "]}),(0,O.jsxs)("p",{children:["Price: ",(0,O.jsx)("span",{children:e.offer_price})," "]}),e.offer_discount>0&&(0,O.jsxs)("p",{children:["Discount:"," ",(0,O.jsxs)("span",{className:"discount-badge",children:[e.offer_discount," %"]})," "]}),(0,O.jsxs)("p",{children:["Discounted Price:"," ",(0,O.jsxs)("span",{children:[e.offer_price-e.offer_price*(e.offer_discount/100)," "]})," "]}),(0,O.jsxs)("div",{className:"d-flex",children:[(0,O.jsxs)(d.Z,{className:"btn btn-icon btn-light text-danger w-50 mr-2",onClick:function(){return console.log("fire"),void L().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&dt()}))},children:["Remove",(0,O.jsx)(Z.qip,{size:18,color:b.D.danger})]}),(0,O.jsxs)(d.Z,{className:"btn btn-icon btn-light text-danger w-50",onClick:function(){!function(e,t){console.log("item",e),he(t),ge(e),de(!0),we(e),console.log("55",Se)}(e,t)},children:["Edit",(0,O.jsx)(Z.qip,{size:18,color:b.D.primary})]})]})]})})})):"Loading..."})]})})]}),(0,O.jsxs)(p.Z,{children:[(0,O.jsx)(d.Z,{className:"button btn-info",style:{backgroundColor:b.D.primary,width:120,border:0},onClick:function(){e.cancelEdit&&e.cancelEdit(),Y(R)},type:"reset",children:"Reset"}),(0,O.jsx)(d.Z,{className:"button btn-info ml-4",style:{backgroundColor:b.D.black,width:120,border:0},type:"submit",children:e.editData?"Update":"Submit"})]}),(0,O.jsx)(m.Z,{sm:6})]})})]})})})]})},U=n(7439),M=function(){var e=(0,P.I0)(),t=(0,c.useState)(null),n=(0,s.Z)(t,2),v=n[0],y=n[1],_=(0,c.useState)([]),D=(0,s.Z)(_,2),N=(D[0],D[1]),C=(0,c.useState)(null),k=(0,s.Z)(C,2),q=k[0],T=k[1],A=(0,c.useState)([]),F=(0,s.Z)(A,2),V=F[0],z=F[1],B=(0,c.useState)(""),I=(0,s.Z)(B,2),L=I[0],M=I[1],W=(0,c.useState)(1),Y=(0,s.Z)(W,2),K=Y[0],$=Y[1],X=(0,c.useState)(15),H=(0,s.Z)(X,1)[0],J=(0,P.v9)((function(e){return e.allCampaigns.data.data})),G=function(e){M(e.target.value),Q()},Q=function(){var e=J.filter((function(e){return e.merchant_businessName.toLowerCase().includes(L)}));z(e)},ee=K*H,te=ee-H,ne=V.slice(te,ee),ie=L?Math.ceil(V.length/H):Math.ceil(J.length/H),re=J.slice(te,ee);(0,c.useEffect)((0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((0,w.E6)());case 1:case"end":return t.stop()}}),t)}))),[]);var ae=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,i){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==window.confirm("Are You Sure?")){t.next=7;break}return(a=n.currentTarget).innerText="Deleting...",t.next=6,e((0,w.bO)(i));case 6:a.closest("tr").remove();case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),se=function(t){var n={campaignStatus:"active"===t.campaignStatus?"inactive":"active"};e((0,w.hm)(n,t._id,(function(e){return N(e)})))};return v?function(){var e=v;return console.log("uy",v),console.log("new",v.image),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(l.Z,{children:[(0,O.jsxs)(o.Z,{className:"border-bottom p-3 mb-0",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("i",{className:"mdi mdi-border-none mr-2",children:" "}),e.title.charAt(0).toUpperCase()+e.title.slice(1)," | Campaign Details"]}),(0,O.jsx)("div",{children:(0,O.jsxs)(d.Z,{className:"btn btn-primary",style:{backgroundColor:b.D.black,borderColor:b.D.black,borderRadius:4,alignItems:"center",height:"fit-content"},onClick:function(){return y(null)},children:[(0,O.jsx)("i",{className:"fa fa-arrow-left mr-2",children:" "}),"Back"]})})]}),(0,O.jsx)(u.Z,{children:e.description}),(0,O.jsx)("div",{children:(0,O.jsxs)(f.Z,{children:[(0,O.jsx)(m.Z,{md:6,children:(0,O.jsx)("div",{style:{marginTop:"20px",marginLeft:"30px",marginBottom:"20px"},children:(0,O.jsx)(E.Z,(0,i.Z)((0,i.Z)({},{dots:!1,autoplay:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.image.map((function(e,t){return(0,O.jsxs)("div",{children:[console.log("sdad",e),(0,O.jsx)("img",{alt:"name",src:e,style:{width:500,height:280}})]},t)}))}))})}),(0,O.jsxs)(m.Z,{md:6,className:"mt-4",children:[(0,O.jsx)(h.Z,{style:{marginTop:"30px"},children:e.campaignStatus}),(0,O.jsx)("br",{}),(0,O.jsx)(h.Z,{style:{fontWeight:"bold"},children:e.title.charAt(0).toUpperCase()+e.title.slice(1)}),(0,O.jsx)("br",{}),(0,O.jsxs)(h.Z,{children:[e.end_date," "]}),(0,O.jsx)("br",{}),(0,O.jsx)(h.Z,{children:e.end_date}),(0,O.jsx)("br",{}),(0,O.jsx)(h.Z,{style:{fontWeight:"bold"},children:e.merchant_businessName.charAt(0).toUpperCase()+e.merchant_businessName.slice(1)}),(0,O.jsx)("br",{})]})]})}),(0,O.jsx)(o.Z,{className:"border-bottom p-2 mb-0",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:"Offers"}),(0,O.jsxs)(f.Z,{children:[" ",e.offer?e.offer.map((function(e,t){return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(m.Z,{sm:3,className:"card p-2 mt-3 ml-3",children:[(0,O.jsxs)("p",{style:{fontWeight:"bold",color:b.D.primary},children:[(0,O.jsx)("span",{children:e.offer_title})," "]}),(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:e.offer_description})," "]}),(0,O.jsxs)("p",{children:["Price: ",(0,O.jsx)("span",{children:e.offer_price})," "]}),(0,O.jsxs)("p",{children:["Discount: ",(0,O.jsx)("span",{children:e.offer_discount})," "]})]})})})):"Loading..."]})]})})}():(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(R,{editData:q,cancelEdit:function(){return T(null)}}),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(l.Z,{children:[(0,O.jsx)("div",{}),(0,O.jsxs)(o.Z,{className:"bg-light border-bottom p-3 mb-0",style:{display:"flex"},children:[(0,O.jsx)("i",{className:"mdi mdi-border-none mr-2",children:" "}),(0,O.jsx)("div",{style:{width:"160px"},children:"Campaigns List"}),(0,O.jsxs)(p.Z,{className:"mb-3",style:{width:"40%",display:"flex",justifyContent:"space-between",marginLeft:"420px"},children:[(0,O.jsx)(x.Z,{type:"text",id:"search",placeholder:"Search Merchants..",onChange:G}),(0,O.jsx)(Z.xue,{style:{position:"absolute",left:"92%",marginTop:"6px"},size:22,color:b.D.primary})]})]}),(0,O.jsx)(u.Z,{className:"",style:{fontSize:12},children:(0,O.jsxs)(g.Z,{striped:!0,hover:!0,responsive:!0,condensed:!0,search:!0,deleteRow:!0,pagination:!0,tableHeaderClass:"mb-0",children:[(0,O.jsx)("thead",{children:(0,O.jsxs)("tr",{className:"text-center",children:[(0,O.jsx)("th",{children:"#"}),(0,O.jsx)("th",{children:"Status"}),(0,O.jsx)("th",{children:"Image"}),(0,O.jsx)("th",{children:"Campaign Title"}),(0,O.jsx)("th",{children:"End Date"}),(0,O.jsx)("th",{colSpan:2,children:"Actions"})]})}),(0,O.jsxs)("tbody",{className:"responsive",children:[console.log("currrr",re),L?ne.map((function(e,t){return(0,O.jsxs)("tr",{className:"text-center",style:{height:60},children:[(0,O.jsx)("th",{scope:"row",children:t+1}),(0,O.jsx)("td",{children:e.campaignStatus}),(0,O.jsxs)("td",{children:[console.log("null",S.dB+e.image[0]),console.log("uri",e.image[0]),(0,O.jsx)("img",{src:e.image?S.dB+e.image[0]:j,style:{width:40,height:40,marginTop:-5,resize:"contain"},alt:e.title})]}),(0,O.jsx)("td",{children:e.title}),(0,O.jsx)("td",{children:e.end_date}),(0,O.jsxs)("td",{children:[(0,O.jsx)(d.Z,{className:"btn btn-info",style:{fontSize:12,backgroundColor:"active"===e.campaignStatus?b.D.primary:b.D.black,borderColor:"active"===e.campaignStatus?b.D.primary:b.D.black,width:"80px"},onClick:function(){return se(e)},children:"active"===e.campaignStatus?"Disable":"Active"}),(0,O.jsx)(d.Z,{className:"btn btn-primary ml-3",onClick:function(){return T(e)},style:{fontSize:12,width:"80px"},children:"Edit"}),(0,O.jsx)(d.Z,{style:{width:"70px",fontSize:12,backgroundColor:b.D.black06,borderColor:b.D.black06},className:"btn btn-info ml-3",onClick:function(t){return ae(t,e._id)},children:"Delete"})]})]},t)})):J&&re.map((function(e,t){return(0,O.jsxs)("tr",{className:"text-center",style:{height:60},children:[(0,O.jsx)("th",{scope:"row",children:t+1}),(0,O.jsx)("td",{children:e.campaignStatus}),(0,O.jsx)("td",{children:(0,O.jsx)("img",{src:e.image?S.dB+e.image[0]:j,style:{width:40,height:40,marginTop:-5,resize:"contain"},alt:e.title})}),(0,O.jsx)("td",{children:e.title.substring(0,24).trimEnd()+"..."}),(0,O.jsx)("td",{children:e.end_date}),(0,O.jsxs)("td",{children:[(0,O.jsx)(d.Z,{className:"btn btn-info",style:{fontSize:12,backgroundColor:"active"===e.campaignStatus?b.D.primary:b.D.black,borderColor:"active"===e.campaignStatus?b.D.primary:b.D.black,width:"80px"},onClick:function(){return se(e)},children:"active"===e.campaignStatus?"Disable":"Active"}),(0,O.jsx)(d.Z,{className:"btn btn-primary ml-3",onClick:function(){return T(e)},style:{fontSize:12,width:"80px"},children:"Edit"}),(0,O.jsx)(d.Z,{style:{width:"70px",fontSize:12,backgroundColor:b.D.black06,borderColor:b.D.black06},className:"btn btn-info ml-3",onClick:function(t){return ae(t,e._id)},children:"Delete"})]})]},t)}))]})]})})]}),(0,O.jsx)(U.Z,{nPages:ie,currentPage:K,setCurrentPage:$})]})]})}},2560:function(e,t,n){e.exports=n.p+"static/media/avatar.e8903a4cd8abf6b5aec3.png"}}]);
//# sourceMappingURL=866.25684e7a.chunk.js.map