var gr=Object.create;var g=Object.defineProperty,pr=Object.defineProperties,xr=Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptors,hr=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,Tr=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable;var A=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))q.call(r,t)&&A(e,t,r[t]);if(P)for(var t of P(r))yr.call(r,t)&&A(e,t,r[t]);return e},p=(e,r)=>pr(e,br(r)),wr=e=>g(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Cr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of hr(r))!q.call(e,n)&&n!=="default"&&g(e,n,{get:()=>r[n],enumerable:!(t=xr(r,n))||t.enumerable});return e},Sr=e=>Cr(wr(g(e!=null?gr(Tr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var O=(e,r,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(d){u(d)}},l=o=>{try{s(t.throw(o))}catch(d){u(d)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(e,r)).next())});var L=i((zn,j)=>{function vr(e,r,t,n){var u=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}j.exports=vr});var U=i((Fn,M)=>{function Rr(e){return function(r){return e==null?void 0:e[r]}}M.exports=Rr});var N=i((Jn,E)=>{var Pr=U(),qr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ar=Pr(qr);E.exports=Ar});var I=i(($n,D)=>{var Or=typeof global=="object"&&global&&global.Object===Object&&global;D.exports=Or});var k=i((Bn,_)=>{var jr=I(),Lr=typeof self=="object"&&self&&self.Object===Object&&self,Mr=jr||Lr||Function("return this")();_.exports=Mr});var x=i((Qn,G)=>{var Ur=k(),Er=Ur.Symbol;G.exports=Er});var W=i((Yn,H)=>{function Nr(e,r){for(var t=-1,n=e==null?0:e.length,u=Array(n);++t<n;)u[t]=r(e[t],t,e);return u}H.exports=Nr});var V=i((Kn,Z)=>{var Dr=Array.isArray;Z.exports=Dr});var $=i((Xn,J)=>{var z=x(),F=Object.prototype,Ir=F.hasOwnProperty,_r=F.toString,m=z?z.toStringTag:void 0;function kr(e){var r=Ir.call(e,m),t=e[m];try{e[m]=void 0;var n=!0}catch(a){}var u=_r.call(e);return n&&(r?e[m]=t:delete e[m]),u}J.exports=kr});var Q=i((ei,B)=>{var Gr=Object.prototype,Hr=Gr.toString;function Wr(e){return Hr.call(e)}B.exports=Wr});var ee=i((ri,X)=>{var Y=x(),Zr=$(),Vr=Q(),zr="[object Null]",Fr="[object Undefined]",K=Y?Y.toStringTag:void 0;function Jr(e){return e==null?e===void 0?Fr:zr:K&&K in Object(e)?Zr(e):Vr(e)}X.exports=Jr});var te=i((ti,re)=>{function $r(e){return e!=null&&typeof e=="object"}re.exports=$r});var ie=i((ni,ne)=>{var Br=ee(),Qr=te(),Yr="[object Symbol]";function Kr(e){return typeof e=="symbol"||Qr(e)&&Br(e)==Yr}ne.exports=Kr});var ce=i((ii,de)=>{var ue=x(),Xr=W(),et=V(),rt=ie(),tt=1/0,oe=ue?ue.prototype:void 0,ae=oe?oe.toString:void 0;function se(e){if(typeof e=="string")return e;if(et(e))return Xr(e,se)+"";if(rt(e))return ae?ae.call(e):"";var r=e+"";return r=="0"&&1/e==-tt?"-0":r}de.exports=se});var b=i((ui,fe)=>{var nt=ce();function it(e){return e==null?"":nt(e)}fe.exports=it});var me=i((oi,le)=>{var ut=N(),ot=b(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",ft=st+dt+ct,lt="["+ft+"]",mt=RegExp(lt,"g");function gt(e){return e=ot(e),e&&e.replace(at,ut).replace(mt,"")}le.exports=gt});var pe=i((ai,ge)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(e){return e.match(pt)||[]}ge.exports=xt});var be=i((si,xe)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(e){return bt.test(e)}xe.exports=ht});var De=i((di,Ne)=>{var he="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",Ct=Tt+yt+wt,Te="\\u2700-\\u27bf",ye="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",we="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",Ce=St+vt+Rt+Pt,Se="['\u2019]",ve="["+Ce+"]",At="["+Ct+"]",Re="\\d+",Ot="["+Te+"]",Pe="["+ye+"]",qe="[^"+he+Ce+Re+Te+ye+we+"]",jt="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+jt+")",Mt="[^"+he+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+we+"]",Ut="\\u200d",je="(?:"+Pe+"|"+qe+")",Et="(?:"+f+"|"+qe+")",Le="(?:"+Se+"(?:d|ll|m|re|s|t|ve))?",Me="(?:"+Se+"(?:D|LL|M|RE|S|T|VE))?",Ue=Lt+"?",Ee="["+qt+"]?",Nt="(?:"+Ut+"(?:"+[Mt,Ae,Oe].join("|")+")"+Ee+Ue+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Ee+Ue+Nt,kt="(?:"+[Ot,Ae,Oe].join("|")+")"+_t,Gt=RegExp([f+"?"+Pe+"+"+Le+"(?="+[ve,f,"$"].join("|")+")",Et+"+"+Me+"(?="+[ve,f+je,"$"].join("|")+")",f+"?"+je+"+"+Le,f+"+"+Me,It,Dt,Re,kt].join("|"),"g");function Ht(e){return e.match(Gt)||[]}Ne.exports=Ht});var _e=i((ci,Ie)=>{var Wt=pe(),Zt=be(),Vt=b(),zt=De();function Ft(e,r,t){return e=Vt(e),r=t?void 0:r,r===void 0?Zt(e)?zt(e):Wt(e):e.match(r)||[]}Ie.exports=Ft});var Ge=i((fi,ke)=>{var Jt=L(),$t=me(),Bt=_e(),Qt="['\u2019]",Yt=RegExp(Qt,"g");function Kt(e){return function(r){return Jt(Bt($t(r).replace(Yt,"")),e,"")}}ke.exports=Kt});var We=i((li,He)=>{function Xt(e,r,t){var n=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++n<u;)a[n]=e[n+r];return a}He.exports=Xt});var Ve=i((mi,Ze)=>{var en=We();function rn(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:en(e,r,t)}Ze.exports=rn});var w=i((gi,ze)=>{var tn="\\ud800-\\udfff",nn="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",an=nn+un+on,sn="\\ufe0e\\ufe0f",dn="\\u200d",cn=RegExp("["+dn+tn+an+sn+"]");function fn(e){return cn.test(e)}ze.exports=fn});var Je=i((pi,Fe)=>{function ln(e){return e.split("")}Fe.exports=ln});var rr=i((xi,er)=>{var $e="\\ud800-\\udfff",mn="\\u0300-\\u036f",gn="\\ufe20-\\ufe2f",pn="\\u20d0-\\u20ff",xn=mn+gn+pn,bn="\\ufe0e\\ufe0f",hn="["+$e+"]",C="["+xn+"]",S="\\ud83c[\\udffb-\\udfff]",Tn="(?:"+C+"|"+S+")",Be="[^"+$e+"]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ye="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="\\u200d",Ke=Tn+"?",Xe="["+bn+"]?",wn="(?:"+yn+"(?:"+[Be,Qe,Ye].join("|")+")"+Xe+Ke+")*",Cn=Xe+Ke+wn,Sn="(?:"+[Be+C+"?",C,Qe,Ye,hn].join("|")+")",vn=RegExp(S+"(?="+S+")|"+Sn+Cn,"g");function Rn(e){return e.match(vn)||[]}er.exports=Rn});var nr=i((bi,tr)=>{var Pn=Je(),qn=w(),An=rr();function On(e){return qn(e)?An(e):Pn(e)}tr.exports=On});var ur=i((hi,ir)=>{var jn=Ve(),Ln=w(),Mn=nr(),Un=b();function En(e){return function(r){r=Un(r);var t=Ln(r)?Mn(r):void 0,n=t?t[0]:r.charAt(0),u=t?jn(t,1).join(""):r.slice(1);return n[e]()+u}}ir.exports=En});var ar=i((Ti,or)=>{var Nn=ur(),Dn=Nn("toUpperCase");or.exports=Dn});var dr=i((yi,sr)=>{var In=Ge(),_n=ar(),kn=In(function(e,r,t){return e+(t?" ":"")+_n(r)});sr.exports=kn});var cr=Sr(dr());function Gn(e){return p(c({},e),{json:JSON.stringify(Wn(e),null,2)})}var Hn=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,fr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Wn(e){let{name:r,category:t,description:n,author:u,result:a,params:l,about:s,video:o}=e,{icon:d=fr}=e;return d==="glide"&&(d=Hn),{name:r,category:t,description:n,author:u,result:a,about:s,icon:d,video:o,params:Object.entries(l).map(([lr,mr])=>c({name:lr},mr))}}var Zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fr,about:void 0,video:void 0,tests:[],run(){return O(this,null,function*(){})}},h=class{constructor(r={},t=[]){this.definition=c(c({},Zn),r),this.requiredParams=[...t]}with(r,t=[]){return new h(c(c({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,n){return n===void 0&&(n=(0,cr.default)(t)),this.with({params:p(c({},this.definition.params),{[t]:{type:r,displayName:n}})})}withRequiredParam(r,t,n){return this.withParam(r,t,n).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}run(r){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let s={};if(l.forEach(({value:o},d)=>{s[u[d]]=o}),!n.some(o=>s[o]===void 0))return r(s)}return Gn(p(c({},this.definition),{run:a}))}};function T(e){return new h({name:e})}function v(e){return typeof window=="undefined"?void 0:e(window)}var y={base64:{encode:v(e=>e.btoa),decode:v(e=>e.atob)},url:{encode:encodeURIComponent,decode:decodeURIComponent}},R=Object.keys(y),Ri=T("Encode Text").withCategory("Encoding").withDescription("Encode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${R.join(", ")})`).withStringResult().withTest({text:"Hello, world!"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"base64"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"url"},"Hello%2C%20world!").run(({text:e,encoding:r="base64"})=>{var t,n;return(n=(t=y[r])==null?void 0:t.encode)==null?void 0:n.call(t,e)});var Oi=T("Decode Text").withCategory("Encoding").withDescription("Decode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${R.join(", ")})`).withStringResult().withTest({text:"SGVsbG8sIHdvcmxkIQ=="},"Hello, world!").withTest({text:"SGVsbG8sIHdvcmxkIQ==",encoding:"base64"},"Hello, world!").withTest({text:"Hello%2C%20world!",encoding:"url"},"Hello, world!").run(({text:e,encoding:r="base64"})=>{var t,n;return(n=(t=y[r])==null?void 0:t.decode)==null?void 0:n.call(t,e)});export{Oi as default};
//# sourceMappingURL=function.js.map