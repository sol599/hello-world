(()=>{var pr=Object.create;var g=Object.defineProperty,xr=Object.defineProperties,br=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,yr=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable;var O=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&O(e,t,r[t]);if(q)for(var t of q(r))wr.call(r,t)&&O(e,t,r[t]);return e},p=(e,r)=>xr(e,hr(r)),Cr=e=>g(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Sr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Tr(r))!A.call(e,n)&&n!=="default"&&g(e,n,{get:()=>r[n],enumerable:!(t=br(r,n))||t.enumerable});return e},vr=e=>Sr(Cr(g(e!=null?pr(yr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var w=(e,r,t)=>new Promise((n,i)=>{var o=a=>{try{s(t.next(a))}catch(d){i(d)}},c=a=>{try{s(t.throw(a))}catch(d){i(d)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(e,r)).next())});var L=u((Jn,j)=>{function Rr(e,r,t,n){var i=-1,o=e==null?0:e.length;for(n&&o&&(t=e[++i]);++i<o;)t=r(t,e[i],i,e);return t}j.exports=Rr});var U=u(($n,M)=>{function Pr(e){return function(r){return e==null?void 0:e[r]}}M.exports=Pr});var N=u((Bn,E)=>{var qr=U(),Ar={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Or=qr(Ar);E.exports=Or});var I=u((Qn,D)=>{var jr=typeof global=="object"&&global&&global.Object===Object&&global;D.exports=jr});var k=u((Yn,_)=>{var Lr=I(),Mr=typeof self=="object"&&self&&self.Object===Object&&self,Ur=Lr||Mr||Function("return this")();_.exports=Ur});var x=u((Kn,G)=>{var Er=k(),Nr=Er.Symbol;G.exports=Nr});var W=u((Xn,H)=>{function Dr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}H.exports=Dr});var V=u((ei,Z)=>{var Ir=Array.isArray;Z.exports=Ir});var $=u((ri,J)=>{var z=x(),F=Object.prototype,_r=F.hasOwnProperty,kr=F.toString,m=z?z.toStringTag:void 0;function Gr(e){var r=_r.call(e,m),t=e[m];try{e[m]=void 0;var n=!0}catch(o){}var i=kr.call(e);return n&&(r?e[m]=t:delete e[m]),i}J.exports=Gr});var Q=u((ti,B)=>{var Hr=Object.prototype,Wr=Hr.toString;function Zr(e){return Wr.call(e)}B.exports=Zr});var ee=u((ni,X)=>{var Y=x(),Vr=$(),zr=Q(),Fr="[object Null]",Jr="[object Undefined]",K=Y?Y.toStringTag:void 0;function $r(e){return e==null?e===void 0?Jr:Fr:K&&K in Object(e)?Vr(e):zr(e)}X.exports=$r});var te=u((ii,re)=>{function Br(e){return e!=null&&typeof e=="object"}re.exports=Br});var ie=u((ui,ne)=>{var Qr=ee(),Yr=te(),Kr="[object Symbol]";function Xr(e){return typeof e=="symbol"||Yr(e)&&Qr(e)==Kr}ne.exports=Xr});var ce=u((oi,de)=>{var ue=x(),et=W(),rt=V(),tt=ie(),nt=1/0,oe=ue?ue.prototype:void 0,ae=oe?oe.toString:void 0;function se(e){if(typeof e=="string")return e;if(rt(e))return et(e,se)+"";if(tt(e))return ae?ae.call(e):"";var r=e+"";return r=="0"&&1/e==-nt?"-0":r}de.exports=se});var b=u((ai,fe)=>{var it=ce();function ut(e){return e==null?"":it(e)}fe.exports=ut});var me=u((si,le)=>{var ot=N(),at=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",ft="\\u20d0-\\u20ff",lt=dt+ct+ft,mt="["+lt+"]",gt=RegExp(mt,"g");function pt(e){return e=at(e),e&&e.replace(st,ot).replace(gt,"")}le.exports=pt});var pe=u((di,ge)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(e){return e.match(xt)||[]}ge.exports=bt});var be=u((ci,xe)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(e){return ht.test(e)}xe.exports=Tt});var De=u((fi,Ne)=>{var he="\\ud800-\\udfff",yt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",St=yt+wt+Ct,Te="\\u2700-\\u27bf",ye="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",qt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",we="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",Ce=vt+Rt+Pt+qt,Se="['\u2019]",ve="["+Ce+"]",Ot="["+St+"]",Re="\\d+",jt="["+Te+"]",Pe="["+ye+"]",qe="[^"+he+Ce+Re+Te+ye+we+"]",Lt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Ot+"|"+Lt+")",Ut="[^"+he+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+we+"]",Et="\\u200d",je="(?:"+Pe+"|"+qe+")",Nt="(?:"+l+"|"+qe+")",Le="(?:"+Se+"(?:d|ll|m|re|s|t|ve))?",Me="(?:"+Se+"(?:D|LL|M|RE|S|T|VE))?",Ue=Mt+"?",Ee="["+At+"]?",Dt="(?:"+Et+"(?:"+[Ut,Ae,Oe].join("|")+")"+Ee+Ue+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Ee+Ue+Dt,Gt="(?:"+[jt,Ae,Oe].join("|")+")"+kt,Ht=RegExp([l+"?"+Pe+"+"+Le+"(?="+[ve,l,"$"].join("|")+")",Nt+"+"+Me+"(?="+[ve,l+je,"$"].join("|")+")",l+"?"+je+"+"+Le,l+"+"+Me,_t,It,Re,Gt].join("|"),"g");function Wt(e){return e.match(Ht)||[]}Ne.exports=Wt});var _e=u((li,Ie)=>{var Zt=pe(),Vt=be(),zt=b(),Ft=De();function Jt(e,r,t){return e=zt(e),r=t?void 0:r,r===void 0?Vt(e)?Ft(e):Zt(e):e.match(r)||[]}Ie.exports=Jt});var Ge=u((mi,ke)=>{var $t=L(),Bt=me(),Qt=_e(),Yt="['\u2019]",Kt=RegExp(Yt,"g");function Xt(e){return function(r){return $t(Qt(Bt(r).replace(Kt,"")),e,"")}}ke.exports=Xt});var We=u((gi,He)=>{function en(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),t=t>i?i:t,t<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(i);++n<i;)o[n]=e[n+r];return o}He.exports=en});var Ve=u((pi,Ze)=>{var rn=We();function tn(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:rn(e,r,t)}Ze.exports=tn});var C=u((xi,ze)=>{var nn="\\ud800-\\udfff",un="\\u0300-\\u036f",on="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",sn=un+on+an,dn="\\ufe0e\\ufe0f",cn="\\u200d",fn=RegExp("["+cn+nn+sn+dn+"]");function ln(e){return fn.test(e)}ze.exports=ln});var Je=u((bi,Fe)=>{function mn(e){return e.split("")}Fe.exports=mn});var rr=u((hi,er)=>{var $e="\\ud800-\\udfff",gn="\\u0300-\\u036f",pn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=gn+pn+xn,hn="\\ufe0e\\ufe0f",Tn="["+$e+"]",S="["+bn+"]",v="\\ud83c[\\udffb-\\udfff]",yn="(?:"+S+"|"+v+")",Be="[^"+$e+"]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ye="[\\ud800-\\udbff][\\udc00-\\udfff]",wn="\\u200d",Ke=yn+"?",Xe="["+hn+"]?",Cn="(?:"+wn+"(?:"+[Be,Qe,Ye].join("|")+")"+Xe+Ke+")*",Sn=Xe+Ke+Cn,vn="(?:"+[Be+S+"?",S,Qe,Ye,Tn].join("|")+")",Rn=RegExp(v+"(?="+v+")|"+vn+Sn,"g");function Pn(e){return e.match(Rn)||[]}er.exports=Pn});var nr=u((Ti,tr)=>{var qn=Je(),An=C(),On=rr();function jn(e){return An(e)?On(e):qn(e)}tr.exports=jn});var ur=u((yi,ir)=>{var Ln=Ve(),Mn=C(),Un=nr(),En=b();function Nn(e){return function(r){r=En(r);var t=Mn(r)?Un(r):void 0,n=t?t[0]:r.charAt(0),i=t?Ln(t,1).join(""):r.slice(1);return n[e]()+i}}ir.exports=Nn});var ar=u((wi,or)=>{var Dn=ur(),In=Dn("toUpperCase");or.exports=In});var dr=u((Ci,sr)=>{var _n=Ge(),kn=ar(),Gn=_n(function(e,r,t){return e+(t?" ":"")+kn(r)});sr.exports=Gn});var cr=vr(dr());function fr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(fr):e}function Hn(e,r){return w(this,null,function*(){var s;let{data:{key:t,params:n}}=e,i,o;try{i=yield r(...n)}catch(a){i=void 0;try{o=a.toString()}catch(d){o="Exception can't be stringified."}}let c={key:t};i!==void 0&&(i=fr(i),c.result={type:"string",value:i}),o!==void 0&&(c.error=o),((s=e.source)==null?void 0:s.postMessage).call(s,c,"*")})}function Wn(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Hn(r,e.run)),p(f({},e),{json:JSON.stringify(Vn(e),null,2)})}var Zn=`
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
    `,lr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Vn(e){let{name:r,category:t,description:n,author:i,result:o,params:c,about:s,video:a}=e,{icon:d=lr}=e;return d==="glide"&&(d=Zn),{name:r,category:t,description:n,author:i,result:o,about:s,icon:d,video:a,params:Object.entries(c).map(([mr,gr])=>f({name:mr},gr))}}var zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:lr,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},h=class{constructor(r={},t=[]){this.definition=f(f({},zn),r),this.requiredParams=[...t]}with(r,t=[]){return new h(f(f({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,n){return n===void 0&&(n=(0,cr.default)(t)),this.with({params:p(f({},this.definition.params),{[t]:{type:r,displayName:n}})})}withRequiredParam(r,t,n){return this.withParam(r,t,n).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}run(r){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},d)=>{s[i[d]]=a}),!n.some(a=>s[a]===void 0))return r(s)}return Wn(p(f({},this.definition),{run:o}))}};function T(e){return new h({name:e})}function R(e){return typeof window=="undefined"?void 0:e(window)}var y={base64:{encode:R(e=>e.btoa),decode:R(e=>e.atob)},url:{encode:encodeURIComponent,decode:decodeURIComponent}},P=Object.keys(y),qi=T("Encode Text").withCategory("Encoding").withDescription("Encode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${P.join(", ")})`).withStringResult().withTest({text:"Hello, world!"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"base64"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"url"},"Hello%2C%20world!").run(({text:e,encoding:r="base64"})=>{var t,n;return(n=(t=y[r])==null?void 0:t.encode)==null?void 0:n.call(t,e)});var Li=T("Decode Text").withCategory("Encoding").withDescription("Decode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${P.join(", ")})`).withStringResult().withTest({text:"SGVsbG8sIHdvcmxkIQ=="},"Hello, world!").withTest({text:"SGVsbG8sIHdvcmxkIQ==",encoding:"base64"},"Hello, world!").withTest({text:"Hello%2C%20world!",encoding:"url"},"Hello, world!").run(({text:e,encoding:r="base64"})=>{var t,n;return(n=(t=y[r])==null?void 0:t.decode)==null?void 0:n.call(t,e)});})();
//# sourceMappingURL=index.js.map