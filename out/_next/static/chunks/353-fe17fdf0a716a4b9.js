"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{1449:function(e,r){/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.parse=function(e,r){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var t={},o=(r||{}).decode||n,i=0;i<e.length;){var l=e.indexOf("=",i);if(-1===l)break;var a=e.indexOf(";",i);if(-1===a)a=e.length;else if(a<l){i=e.lastIndexOf(";",l-1)+1;continue}var s=e.slice(i,l).trim();if(void 0===t[s]){var c=e.slice(l+1,a).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),t[s]=function(e,r){try{return r(e)}catch(r){return e}}(c,o)}i=a+1}return t},r.serialize=function(e,r,n){var l=n||{},a=l.encode||i;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var s=a(r);if(s&&!o.test(s))throw TypeError("argument val is invalid");var c=e+"="+s;if(null!=l.maxAge){var d=l.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(l.domain){if(!o.test(l.domain))throw TypeError("option domain is invalid");c+="; Domain="+l.domain}if(l.path){if(!o.test(l.path))throw TypeError("option path is invalid");c+="; Path="+l.path}if(l.expires){var u=l.expires;if("[object Date]"!==t.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+u.toUTCString()}if(l.httpOnly&&(c+="; HttpOnly"),l.secure&&(c+="; Secure"),l.partitioned&&(c+="; Partitioned"),l.priority)switch("string"==typeof l.priority?l.priority.toLowerCase():l.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(l.sameSite)switch("string"==typeof l.sameSite?l.sameSite.toLowerCase():l.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var t=Object.prototype.toString,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function i(e){return encodeURIComponent(e)}},3375:function(e,r,t){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>r.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]]);return t};Object.defineProperty(r,"__esModule",{value:!0}),r.hasCookie=r.deleteCookie=r.setCookie=r.getCookie=r.getCookies=void 0;var i=t(1449),l=function(){return"undefined"!=typeof window},a=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},s=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&a(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&a(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&a(e.cookies())},c=function(e){var r={};return e.getAll().forEach(function(e){var t=e.name,o=e.value;r[t]=o}),r},d=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(r){return e}};r.getCookies=function(e){if(s(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(r=e.req),!l())return r&&r.cookies?r.cookies:r&&r.headers.cookie?(0,i.parse)(r.headers.cookie):{};for(var r,t={},o=document.cookie?document.cookie.split("; "):[],n=0,a=o.length;n<a;n++){var d=o[n].split("="),u=d.slice(1).join("=");t[d[0]]=u}return t},r.getCookie=function(e,t){var o=(0,r.getCookies)(t)[e];if(void 0!==o)return o?o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):o},r.setCookie=function(e,r,t){if(s(t)){var a,c,u,p=t.req,f=t.res,b=t.cookies,m=n(t,["req","res","cookies"]),g=o({name:e,value:d(r)},m);p&&p.cookies.set(g),f&&f.cookies.set(g),b&&b().set(g);return}if(t){var p=t.req,f=t.res,h=n(t,["req","res"]);c=p,u=f,a=h}var v=(0,i.serialize)(e,d(r),o({path:"/"},a));if(l())document.cookie=v;else if(u&&c){var y=u.getHeader("Set-Cookie");if(Array.isArray(y)||(y=y?[String(y)]:[]),u.setHeader("Set-Cookie",y.concat(v)),c&&c.cookies){var w=c.cookies;""===r?delete w[e]:w[e]=d(r)}if(c&&c.headers&&c.headers.cookie){var w=(0,i.parse)(c.headers.cookie);""===r?delete w[e]:w[e]=d(r),c.headers.cookie=Object.entries(w).reduce(function(e,r){return e.concat("".concat(r[0],"=").concat(r[1],";"))},"")}}},r.deleteCookie=function(e,t){return(0,r.setCookie)(e,"",o(o({},t),{maxAge:-1}))},r.hasCookie=function(e,t){return!!e&&(0,r.getCookies)(t).hasOwnProperty(e)}},8030:function(e,r,t){t.d(r,{Z:function(){return s}});var o=t(2265);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ")};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...l,width:n,height:n,stroke:t,strokeWidth:s?24*Number(a)/Number(n):a,className:i("lucide",c),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),s=(e,r)=>{let t=(0,o.forwardRef)((t,l)=>{let{className:s,...c}=t;return(0,o.createElement)(a,{ref:l,iconNode:r,className:i("lucide-".concat(n(e)),s),...c})});return t.displayName="".concat(e),t}},6463:function(e,r,t){var o=t(1169);t.o(o,"usePathname")&&t.d(r,{usePathname:function(){return o.usePathname}}),t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}})},2988:function(e,r,t){t.d(r,{Z:function(){return o}});function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}},1584:function(e,r,t){t.d(r,{F:function(){return n},e:function(){return i}});var o=t(2265);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function i(...e){return(0,o.useCallback)(n(...e),e)}},5171:function(e,r,t){t.d(r,{WV:function(){return a},jH:function(){return s}});var o=t(2988),n=t(2265),i=t(4887),l=t(1538);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,n.forwardRef)((e,t)=>{let{asChild:i,...a}=e,s=i?l.g7:r;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(s,(0,o.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function s(e,r){e&&(0,i.flushSync)(()=>e.dispatchEvent(r))}},1538:function(e,r,t){t.d(r,{A4:function(){return s},g7:function(){return l}});var o=t(2988),n=t(2265),i=t(1584);let l=(0,n.forwardRef)((e,r)=>{let{children:t,...i}=e,l=n.Children.toArray(t),s=l.find(c);if(s){let e=s.props.children,t=l.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(a,(0,o.Z)({},i,{ref:r}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,t):null)}return(0,n.createElement)(a,(0,o.Z)({},i,{ref:r}),t)});l.displayName="Slot";let a=(0,n.forwardRef)((e,r)=>{let{children:t,...o}=e;return(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],i=r[o];/^on[A-Z]/.test(o)?n&&i?t[o]=(...e)=>{i(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...i}:"className"===o&&(t[o]=[n,i].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:r?(0,i.F)(r,t.ref):t.ref}):n.Children.count(t)>1?n.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function c(e){return(0,n.isValidElement)(e)&&e.type===s}},2218:function(e,r,t){t.d(r,{j:function(){return i}});let o=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(o&&(o+=" "),o+=r);return o},i=(e,r)=>t=>{var i;if((null==r?void 0:r.variants)==null)return n(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:a}=r,s=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],n=null==a?void 0:a[e];if(null===r)return null;let i=o(r)||o(n);return l[e][i]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return n(e,s,null==r?void 0:null===(i=r.compoundVariants)||void 0===i?void 0:i.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...c}[r]):({...a,...c})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},4839:function(e,r,t){t.d(r,{W:function(){return o}});function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}},6164:function(e,r,t){t.d(r,{m6:function(){return M}});let o=/^\[(.+)\]$/;function n(e,r){let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}let i=/\s+/;function l(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=function e(r){let t;if("string"==typeof r)return r;let o="";for(let n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function a(e){let r=r=>r[e]||[];return r.isThemeGetter=!0,r}let s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,b=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,m=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function g(e){return v(e)||d.has(e)||c.test(e)}function h(e){return A(e,"length",T)}function v(e){return!!e&&!Number.isNaN(Number(e))}function y(e){return A(e,"number",v)}function w(e){return!!e&&Number.isInteger(Number(e))}function x(e){return e.endsWith("%")&&v(e.slice(0,-1))}function k(e){return s.test(e)}function C(e){return u.test(e)}let j=new Set(["length","size","percentage"]);function z(e){return A(e,j,R)}function E(e){return A(e,"position",R)}let O=new Set(["image","url"]);function S(e){return A(e,O,I)}function N(e){return A(e,"",q)}function P(){return!0}function A(e,r,t){let o=s.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))}function T(e){return p.test(e)&&!f.test(e)}function R(){return!1}function q(e){return b.test(e)}function I(e){return m.test(e)}let M=function(e,...r){let t,a,s;let c=function(i){var l;return a=(t={cache:function(e){if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map;function n(n,i){t.set(n,i),++r>e&&(r=0,o=t,t=new Map)}return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}}((l=r.reduce((e,r)=>r(e),e())).cacheSize),splitModifiers:function(e){let r=e.separator,t=1===r.length,o=r[0],n=r.length;return function(e){let i;let l=[],a=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===a){if(d===o&&(t||e.slice(c,c+n)===r)){l.push(e.slice(s,c)),s=c+n;continue}if("/"===d){i=c;continue}}"["===d?a++:"]"===d&&a--}let c=0===l.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:l,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}}(l),...function(e){let r=function(e){var r;let{theme:t,prefix:o}=e,i={nextPart:new Map,validators:[]};return(r=Object.entries(e.classGroups),o?r.map(([e,r])=>[e,r.map(e=>"string"==typeof e?o+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[o+e,r])):e)]):r).forEach(([e,r])=>{(function e(r,t,o,i){r.forEach(r=>{if("string"==typeof r){(""===r?t:n(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(i),t,o,i);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(([r,l])=>{e(l,n(t,r),o,i)})})})(r,i,e,t)}),i}(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:function(e){let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(r,t){if(0===r.length)return t.classGroupId;let o=r[0],n=t.nextPart.get(o),i=n?e(r.slice(1),n):void 0;if(i)return i;if(0===t.validators.length)return;let l=r.join("-");return t.validators.find(({validator:e})=>e(l))?.classGroupId}(t,r)||function(e){if(o.test(e)){let r=o.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){let o=t[e]||[];return r&&i[e]?[...o,...i[e]]:o}}}(l)}).cache.get,s=t.cache.set,c=d,d(i)};function d(e){let r=a(e);if(r)return r;let o=function(e,r){let{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(i).map(e=>{let{modifiers:r,hasImportantModifier:n,baseClassName:i,maybePostfixModifierPosition:l}=t(e),a=o(l?i.substring(0,l):i),s=!!l;if(!a){if(!l||!(a=o(i)))return{isTailwindClass:!1,originalClassName:e};s=!1}let c=(function(e){if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r})(r).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:a,originalClassName:e,hasPostfixModifier:s}}).reverse().filter(e=>{if(!e.isTailwindClass)return!0;let{modifierId:r,classGroupId:t,hasPostfixModifier:o}=e,i=r+t;return!l.has(i)&&(l.add(i),n(t,o).forEach(e=>l.add(r+e)),!0)}).reverse().map(e=>e.originalClassName).join(" ")}(e,t);return s(e,o),o}return function(){return c(l.apply(null,arguments))}}(function(){let e=a("colors"),r=a("spacing"),t=a("blur"),o=a("brightness"),n=a("borderColor"),i=a("borderRadius"),l=a("borderSpacing"),s=a("borderWidth"),c=a("contrast"),d=a("grayscale"),u=a("hueRotate"),p=a("invert"),f=a("gap"),b=a("gradientColorStops"),m=a("gradientColorStopPositions"),j=a("inset"),O=a("margin"),A=a("opacity"),T=a("padding"),R=a("saturate"),q=a("scale"),I=a("sepia"),M=a("skew"),_=a("space"),G=a("translate"),$=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",k,r],L=()=>[k,r],V=()=>["",g,h],H=()=>["auto",v,k],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],J=()=>["","0",k],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[v,y],X=()=>[v,k];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[g,h],blur:["none","",C,k],brightness:Q(),borderColor:[e],borderRadius:["none","","full",C,k],borderSpacing:L(),borderWidth:V(),contrast:Q(),grayscale:J(),hueRotate:X(),invert:J(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[x,h],inset:Z(),margin:Z(),opacity:Q(),padding:L(),saturate:Q(),scale:Q(),sepia:J(),skew:X(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",k]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),k]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[j]}],"inset-x":[{"inset-x":[j]}],"inset-y":[{"inset-y":[j]}],start:[{start:[j]}],end:[{end:[j]}],top:[{top:[j]}],right:[{right:[j]}],bottom:[{bottom:[j]}],left:[{left:[j]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",w,k]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",k]}],grow:[{grow:J()}],shrink:[{shrink:J()}],order:[{order:["first","last","none",w,k]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",w,k]},k]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[w,k]},k]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",k]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",k]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[T]}],px:[{px:[T]}],py:[{py:[T]}],ps:[{ps:[T]}],pe:[{pe:[T]}],pt:[{pt:[T]}],pr:[{pr:[T]}],pb:[{pb:[T]}],pl:[{pl:[T]}],m:[{m:[O]}],mx:[{mx:[O]}],my:[{my:[O]}],ms:[{ms:[O]}],me:[{me:[O]}],mt:[{mt:[O]}],mr:[{mr:[O]}],mb:[{mb:[O]}],ml:[{ml:[O]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",k,r]}],"min-w":[{"min-w":[k,r,"min","max","fit"]}],"max-w":[{"max-w":[k,r,"none","full","min","max","fit","prose",{screen:[C]},C]}],h:[{h:[k,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[k,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[k,r,"auto","min","max","fit"]}],"font-size":[{text:["base",C,h]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",k]}],"line-clamp":[{"line-clamp":["none",v,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",g,k]}],"list-image":[{"list-image":["none",k]}],"list-style-type":[{list:["none","disc","decimal",k]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",g,h]}],"underline-offset":[{"underline-offset":["auto",g,k]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),E]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",z]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},S]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:U()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[g,k]}],"outline-w":[{outline:[g,h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[g,h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,N]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,k]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[R]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",k]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",k]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",k]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[q]}],"scale-x":[{"scale-x":[q]}],"scale-y":[{"scale-y":[q]}],rotate:[{rotate:[w,k]}],"translate-x":[{"translate-x":[G]}],"translate-y":[{"translate-y":[G]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",k]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[g,h,y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);