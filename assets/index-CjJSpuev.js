(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var Ou={exports:{}},ns={},Du={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function bv(){if(dp)return J;dp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,L={};function H(C,R,X){this.props=C,this.context=R,this.refs=L,this.updater=X||O}H.prototype.isReactComponent={},H.prototype.setState=function(C,R){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,R,"setState")},H.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function ye(){}ye.prototype=H.prototype;function ze(C,R,X){this.props=C,this.context=R,this.refs=L,this.updater=X||O}var qe=ze.prototype=new ye;qe.constructor=ze,F(qe,H.prototype),qe.isPureReactComponent=!0;var Oe=Array.isArray,Tt=Object.prototype.hasOwnProperty,Qe={current:null},et={key:!0,ref:!0,__self:!0,__source:!0};function vt(C,R,X){var te,ie={},se=null,he=null;if(R!=null)for(te in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(se=""+R.key),R)Tt.call(R,te)&&!et.hasOwnProperty(te)&&(ie[te]=R[te]);var ae=arguments.length-2;if(ae===1)ie.children=X;else if(1<ae){for(var ve=Array(ae),ft=0;ft<ae;ft++)ve[ft]=arguments[ft+2];ie.children=ve}if(C&&C.defaultProps)for(te in ae=C.defaultProps,ae)ie[te]===void 0&&(ie[te]=ae[te]);return{$$typeof:i,type:C,key:se,ref:he,props:ie,_owner:Qe.current}}function wn(C,R){return{$$typeof:i,type:C.type,key:R,ref:C.ref,props:C.props,_owner:C._owner}}function Xt(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function Xn(C){var R={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(X){return R[X]})}var Vt=/\/+/g;function ht(C,R){return typeof C=="object"&&C!==null&&C.key!=null?Xn(""+C.key):R.toString(36)}function Nt(C,R,X,te,ie){var se=typeof C;(se==="undefined"||se==="boolean")&&(C=null);var he=!1;if(C===null)he=!0;else switch(se){case"string":case"number":he=!0;break;case"object":switch(C.$$typeof){case i:case e:he=!0}}if(he)return he=C,ie=ie(he),C=te===""?"."+ht(he,0):te,Oe(ie)?(X="",C!=null&&(X=C.replace(Vt,"$&/")+"/"),Nt(ie,R,X,"",function(ft){return ft})):ie!=null&&(Xt(ie)&&(ie=wn(ie,X+(!ie.key||he&&he.key===ie.key?"":(""+ie.key).replace(Vt,"$&/")+"/")+C)),R.push(ie)),1;if(he=0,te=te===""?".":te+":",Oe(C))for(var ae=0;ae<C.length;ae++){se=C[ae];var ve=te+ht(se,ae);he+=Nt(se,R,X,ve,ie)}else if(ve=S(C),typeof ve=="function")for(C=ve.call(C),ae=0;!(se=C.next()).done;)se=se.value,ve=te+ht(se,ae++),he+=Nt(se,R,X,ve,ie);else if(se==="object")throw R=String(C),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function Bt(C,R,X){if(C==null)return C;var te=[],ie=0;return Nt(C,te,"","",function(se){return R.call(X,se,ie++)}),te}function tt(C){if(C._status===-1){var R=C._result;R=R(),R.then(function(X){(C._status===0||C._status===-1)&&(C._status=1,C._result=X)},function(X){(C._status===0||C._status===-1)&&(C._status=2,C._result=X)}),C._status===-1&&(C._status=0,C._result=R)}if(C._status===1)return C._result.default;throw C._result}var Ce={current:null},b={transition:null},K={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:b,ReactCurrentOwner:Qe};function j(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:Bt,forEach:function(C,R,X){Bt(C,function(){R.apply(this,arguments)},X)},count:function(C){var R=0;return Bt(C,function(){R++}),R},toArray:function(C){return Bt(C,function(R){return R})||[]},only:function(C){if(!Xt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},J.Component=H,J.Fragment=n,J.Profiler=l,J.PureComponent=ze,J.StrictMode=s,J.Suspense=m,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,J.act=j,J.cloneElement=function(C,R,X){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var te=F({},C.props),ie=C.key,se=C.ref,he=C._owner;if(R!=null){if(R.ref!==void 0&&(se=R.ref,he=Qe.current),R.key!==void 0&&(ie=""+R.key),C.type&&C.type.defaultProps)var ae=C.type.defaultProps;for(ve in R)Tt.call(R,ve)&&!et.hasOwnProperty(ve)&&(te[ve]=R[ve]===void 0&&ae!==void 0?ae[ve]:R[ve])}var ve=arguments.length-2;if(ve===1)te.children=X;else if(1<ve){ae=Array(ve);for(var ft=0;ft<ve;ft++)ae[ft]=arguments[ft+2];te.children=ae}return{$$typeof:i,type:C.type,key:ie,ref:se,props:te,_owner:he}},J.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},J.createElement=vt,J.createFactory=function(C){var R=vt.bind(null,C);return R.type=C,R},J.createRef=function(){return{current:null}},J.forwardRef=function(C){return{$$typeof:f,render:C}},J.isValidElement=Xt,J.lazy=function(C){return{$$typeof:E,_payload:{_status:-1,_result:C},_init:tt}},J.memo=function(C,R){return{$$typeof:g,type:C,compare:R===void 0?null:R}},J.startTransition=function(C){var R=b.transition;b.transition={};try{C()}finally{b.transition=R}},J.unstable_act=j,J.useCallback=function(C,R){return Ce.current.useCallback(C,R)},J.useContext=function(C){return Ce.current.useContext(C)},J.useDebugValue=function(){},J.useDeferredValue=function(C){return Ce.current.useDeferredValue(C)},J.useEffect=function(C,R){return Ce.current.useEffect(C,R)},J.useId=function(){return Ce.current.useId()},J.useImperativeHandle=function(C,R,X){return Ce.current.useImperativeHandle(C,R,X)},J.useInsertionEffect=function(C,R){return Ce.current.useInsertionEffect(C,R)},J.useLayoutEffect=function(C,R){return Ce.current.useLayoutEffect(C,R)},J.useMemo=function(C,R){return Ce.current.useMemo(C,R)},J.useReducer=function(C,R,X){return Ce.current.useReducer(C,R,X)},J.useRef=function(C){return Ce.current.useRef(C)},J.useState=function(C){return Ce.current.useState(C)},J.useSyncExternalStore=function(C,R,X){return Ce.current.useSyncExternalStore(C,R,X)},J.useTransition=function(){return Ce.current.useTransition()},J.version="18.3.1",J}var hp;function vc(){return hp||(hp=1,Du.exports=bv()),Du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function Uv(){if(fp)return ns;fp=1;var i=vc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var E,v={},S=null,O=null;g!==void 0&&(S=""+g),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(O=m.ref);for(E in m)s.call(m,E)&&!u.hasOwnProperty(E)&&(v[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)v[E]===void 0&&(v[E]=m[E]);return{$$typeof:e,type:f,key:S,ref:O,props:v,_owner:l.current}}return ns.Fragment=n,ns.jsx=d,ns.jsxs=d,ns}var pp;function zv(){return pp||(pp=1,Ou.exports=Uv()),Ou.exports}var A=zv(),Je=vc(),Bo={},Lu={exports:{}},lt={},Mu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function jv(){return mp||(mp=1,(function(i){function e(b,K){var j=b.length;b.push(K);e:for(;0<j;){var C=j-1>>>1,R=b[C];if(0<l(R,K))b[C]=K,b[j]=R,j=C;else break e}}function n(b){return b.length===0?null:b[0]}function s(b){if(b.length===0)return null;var K=b[0],j=b.pop();if(j!==K){b[0]=j;e:for(var C=0,R=b.length,X=R>>>1;C<X;){var te=2*(C+1)-1,ie=b[te],se=te+1,he=b[se];if(0>l(ie,j))se<R&&0>l(he,ie)?(b[C]=he,b[se]=j,C=se):(b[C]=ie,b[te]=j,C=te);else if(se<R&&0>l(he,j))b[C]=he,b[se]=j,C=se;else break e}}return K}function l(b,K){var j=b.sortIndex-K.sortIndex;return j!==0?j:b.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],E=1,v=null,S=3,O=!1,F=!1,L=!1,H=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,ze=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function qe(b){for(var K=n(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=b)s(g),K.sortIndex=K.expirationTime,e(m,K);else break;K=n(g)}}function Oe(b){if(L=!1,qe(b),!F)if(n(m)!==null)F=!0,tt(Tt);else{var K=n(g);K!==null&&Ce(Oe,K.startTime-b)}}function Tt(b,K){F=!1,L&&(L=!1,ye(vt),vt=-1),O=!0;var j=S;try{for(qe(K),v=n(m);v!==null&&(!(v.expirationTime>K)||b&&!Xn());){var C=v.callback;if(typeof C=="function"){v.callback=null,S=v.priorityLevel;var R=C(v.expirationTime<=K);K=i.unstable_now(),typeof R=="function"?v.callback=R:v===n(m)&&s(m),qe(K)}else s(m);v=n(m)}if(v!==null)var X=!0;else{var te=n(g);te!==null&&Ce(Oe,te.startTime-K),X=!1}return X}finally{v=null,S=j,O=!1}}var Qe=!1,et=null,vt=-1,wn=5,Xt=-1;function Xn(){return!(i.unstable_now()-Xt<wn)}function Vt(){if(et!==null){var b=i.unstable_now();Xt=b;var K=!0;try{K=et(!0,b)}finally{K?ht():(Qe=!1,et=null)}}else Qe=!1}var ht;if(typeof ze=="function")ht=function(){ze(Vt)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,Bt=Nt.port2;Nt.port1.onmessage=Vt,ht=function(){Bt.postMessage(null)}}else ht=function(){H(Vt,0)};function tt(b){et=b,Qe||(Qe=!0,ht())}function Ce(b,K){vt=H(function(){b(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(b){b.callback=null},i.unstable_continueExecution=function(){F||O||(F=!0,tt(Tt))},i.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wn=0<b?Math.floor(1e3/b):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(b){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var j=S;S=K;try{return b()}finally{S=j}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(b,K){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=S;S=b;try{return K()}finally{S=j}},i.unstable_scheduleCallback=function(b,K,j){var C=i.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?C+j:C):j=C,b){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=j+R,b={id:E++,callback:K,priorityLevel:b,startTime:j,expirationTime:R,sortIndex:-1},j>C?(b.sortIndex=j,e(g,b),n(m)===null&&b===n(g)&&(L?(ye(vt),vt=-1):L=!0,Ce(Oe,j-C))):(b.sortIndex=R,e(m,b),F||O||(F=!0,tt(Tt))),b},i.unstable_shouldYield=Xn,i.unstable_wrapCallback=function(b){var K=S;return function(){var j=S;S=K;try{return b.apply(this,arguments)}finally{S=j}}}})(Fu)),Fu}var gp;function Wv(){return gp||(gp=1,Mu.exports=jv()),Mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Vv(){if(_p)return lt;_p=1;var i=vc(),e=Wv();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},v={};function S(t){return m.call(v,t)?!0:m.call(E,t)?!1:g.test(t)?v[t]=!0:(E[t]=!0,!1)}function O(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F(t,r,o,a){if(r===null||typeof r>"u"||O(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function L(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){H[t]=new L(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];H[r]=new L(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){H[t]=new L(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){H[t]=new L(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){H[t]=new L(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){H[t]=new L(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){H[t]=new L(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){H[t]=new L(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){H[t]=new L(t,5,!1,t.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function ze(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(ye,ze);H[r]=new L(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(ye,ze);H[r]=new L(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(ye,ze);H[r]=new L(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){H[t]=new L(t,1,!1,t.toLowerCase(),null,!1,!1)}),H.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){H[t]=new L(t,1,!1,t.toLowerCase(),null,!0,!0)});function qe(t,r,o,a){var c=H.hasOwnProperty(r)?H[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(F(r,o,c,a)&&(o=null),a||c===null?S(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Oe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tt=Symbol.for("react.element"),Qe=Symbol.for("react.portal"),et=Symbol.for("react.fragment"),vt=Symbol.for("react.strict_mode"),wn=Symbol.for("react.profiler"),Xt=Symbol.for("react.provider"),Xn=Symbol.for("react.context"),Vt=Symbol.for("react.forward_ref"),ht=Symbol.for("react.suspense"),Nt=Symbol.for("react.suspense_list"),Bt=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),b=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=b&&t[b]||t["@@iterator"],typeof t=="function"?t:null)}var j=Object.assign,C;function R(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var X=!1;function te(t,r){if(!t||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var y=`
`+c[p].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=p&&0<=_);break}}}finally{X=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function ie(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=te(t.type,!1),t;case 11:return t=te(t.type.render,!1),t;case 1:return t=te(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case et:return"Fragment";case Qe:return"Portal";case wn:return"Profiler";case vt:return"StrictMode";case ht:return"Suspense";case Nt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xn:return(t.displayName||"Context")+".Consumer";case Xt:return(t._context.displayName||"Context")+".Provider";case Vt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bt:return r=t.displayName||null,r!==null?r:se(t.type)||"Memo";case tt:r=t._payload,t=t._init;try{return se(t(r))}catch{}}return null}function he(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===vt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ft(t){var r=ve(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Os(t){t._valueTracker||(t._valueTracker=ft(t))}function gd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ve(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ds(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zl(t,r){var o=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function _d(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=ae(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function yd(t,r){r=r.checked,r!=null&&qe(t,"checked",r,!1)}function jl(t,r){yd(t,r);var o=ae(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Wl(t,r.type,o):r.hasOwnProperty("defaultValue")&&Wl(t,r.type,ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function vd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Wl(t,r,o){(r!=="number"||Ds(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var _i=Array.isArray;function Tr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ae(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Vl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(_i(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ae(o)}}function Ed(t,r){var o=ae(r.value),a=ae(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Sd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Cd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Cd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,Id=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function yi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W_=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(t){W_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),vi[r]=vi[t]})});function kd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||vi.hasOwnProperty(t)&&vi[t]?(""+r).trim():r+"px"}function Td(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=kd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var V_=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(t,r){if(r){if(V_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function $l(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function Kl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ql=null,Nr=null,Rr=null;function Nd(t){if(t=Wi(t)){if(typeof ql!="function")throw Error(n(280));var r=t.stateNode;r&&(r=ro(r),ql(t.stateNode,t.type,r))}}function Rd(t){Nr?Rr?Rr.push(t):Rr=[t]:Nr=t}function Pd(){if(Nr){var t=Nr,r=Rr;if(Rr=Nr=null,Nd(t),r)for(t=0;t<r.length;t++)Nd(r[t])}}function xd(t,r){return t(r)}function Ad(){}var Ql=!1;function Od(t,r,o){if(Ql)return t(r,o);Ql=!0;try{return xd(t,r,o)}finally{Ql=!1,(Nr!==null||Rr!==null)&&(Ad(),Pd())}}function wi(t,r){var o=t.stateNode;if(o===null)return null;var a=ro(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Yl=!1;if(f)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Yl=!1}function B_(t,r,o,a,c,h,p,_,y){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(P){this.onError(P)}}var Si=!1,Ms=null,Fs=!1,Xl=null,H_={onError:function(t){Si=!0,Ms=t}};function $_(t,r,o,a,c,h,p,_,y){Si=!1,Ms=null,B_.apply(H_,arguments)}function G_(t,r,o,a,c,h,p,_,y){if($_.apply(this,arguments),Si){if(Si){var T=Ms;Si=!1,Ms=null}else throw Error(n(198));Fs||(Fs=!0,Xl=T)}}function Jn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Dd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ld(t){if(Jn(t)!==t)throw Error(n(188))}function K_(t){var r=t.alternate;if(!r){if(r=Jn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Ld(c),t;if(h===a)return Ld(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Md(t){return t=K_(t),t!==null?Fd(t):null}function Fd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Fd(t);if(r!==null)return r;t=t.sibling}return null}var bd=e.unstable_scheduleCallback,Ud=e.unstable_cancelCallback,q_=e.unstable_shouldYield,Q_=e.unstable_requestPaint,Te=e.unstable_now,Y_=e.unstable_getCurrentPriorityLevel,Jl=e.unstable_ImmediatePriority,zd=e.unstable_UserBlockingPriority,bs=e.unstable_NormalPriority,X_=e.unstable_LowPriority,jd=e.unstable_IdlePriority,Us=null,Ht=null;function J_(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Us,t,void 0,(t.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:ty,Z_=Math.log,ey=Math.LN2;function ty(t){return t>>>=0,t===0?32:31-(Z_(t)/ey|0)|0}var zs=64,js=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ws(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Ci(_):(h&=p,h!==0&&(a=Ci(h)))}else p=o&~c,p!==0?a=Ci(p):h!==0&&(a=Ci(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&c)===0&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Rt(r),c=1<<o,a|=t[o],r&=~c;return a}function ny(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-Rt(h),_=1<<p,y=c[p];y===-1?((_&o)===0||(_&a)!==0)&&(c[p]=ny(_,r)):y<=r&&(t.expiredLanes|=_),h&=~_}}function Zl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wd(){var t=zs;return zs<<=1,(zs&4194240)===0&&(zs=64),t}function ea(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Ii(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Rt(r),t[r]=o}function iy(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Rt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ta(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Rt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ue=0;function Vd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Bd,na,Hd,$d,Gd,ra=!1,Vs=[],En=null,Sn=null,Cn=null,ki=new Map,Ti=new Map,In=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(t,r){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ki.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(r.pointerId)}}function Ni(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Wi(r),r!==null&&na(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function oy(t,r,o,a,c){switch(r){case"focusin":return En=Ni(En,t,r,o,a,c),!0;case"dragenter":return Sn=Ni(Sn,t,r,o,a,c),!0;case"mouseover":return Cn=Ni(Cn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return ki.set(h,Ni(ki.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ti.set(h,Ni(Ti.get(h)||null,t,r,o,a,c)),!0}return!1}function qd(t){var r=Zn(t.target);if(r!==null){var o=Jn(r);if(o!==null){if(r=o.tag,r===13){if(r=Dd(o),r!==null){t.blockedOn=r,Gd(t.priority,function(){Hd(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=sa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Gl=a,o.target.dispatchEvent(a),Gl=null}else return r=Wi(o),r!==null&&na(r),t.blockedOn=o,!1;r.shift()}return!0}function Qd(t,r,o){Bs(t)&&o.delete(r)}function ly(){ra=!1,En!==null&&Bs(En)&&(En=null),Sn!==null&&Bs(Sn)&&(Sn=null),Cn!==null&&Bs(Cn)&&(Cn=null),ki.forEach(Qd),Ti.forEach(Qd)}function Ri(t,r){t.blockedOn===r&&(t.blockedOn=null,ra||(ra=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ly)))}function Pi(t){function r(c){return Ri(c,t)}if(0<Vs.length){Ri(Vs[0],t);for(var o=1;o<Vs.length;o++){var a=Vs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(En!==null&&Ri(En,t),Sn!==null&&Ri(Sn,t),Cn!==null&&Ri(Cn,t),ki.forEach(r),Ti.forEach(r),o=0;o<In.length;o++)a=In[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<In.length&&(o=In[0],o.blockedOn===null);)qd(o),o.blockedOn===null&&In.shift()}var Pr=Oe.ReactCurrentBatchConfig,Hs=!0;function ay(t,r,o,a){var c=ue,h=Pr.transition;Pr.transition=null;try{ue=1,ia(t,r,o,a)}finally{ue=c,Pr.transition=h}}function uy(t,r,o,a){var c=ue,h=Pr.transition;Pr.transition=null;try{ue=4,ia(t,r,o,a)}finally{ue=c,Pr.transition=h}}function ia(t,r,o,a){if(Hs){var c=sa(t,r,o,a);if(c===null)Sa(t,r,a,$s,o),Kd(t,a);else if(oy(c,t,r,o,a))a.stopPropagation();else if(Kd(t,a),r&4&&-1<sy.indexOf(t)){for(;c!==null;){var h=Wi(c);if(h!==null&&Bd(h),h=sa(t,r,o,a),h===null&&Sa(t,r,a,$s,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Sa(t,r,a,null,o)}}var $s=null;function sa(t,r,o,a){if($s=null,t=Kl(a),t=Zn(t),t!==null)if(r=Jn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Dd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return $s=t,null}function Yd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y_()){case Jl:return 1;case zd:return 4;case bs:case X_:return 16;case jd:return 536870912;default:return 16}default:return 16}}var kn=null,oa=null,Gs=null;function Xd(){if(Gs)return Gs;var t,r=oa,o=r.length,a,c="value"in kn?kn.value:kn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return Gs=c.slice(t,1<a?1-a:void 0)}function Ks(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function qs(){return!0}function Jd(){return!1}function pt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?qs:Jd,this.isPropagationStopped=Jd,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),r}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=pt(xr),xi=j({},xr,{view:0,detail:0}),cy=pt(xi),aa,ua,Ai,Qs=j({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(aa=t.screenX-Ai.screenX,ua=t.screenY-Ai.screenY):ua=aa=0,Ai=t),aa)},movementY:function(t){return"movementY"in t?t.movementY:ua}}),Zd=pt(Qs),dy=j({},Qs,{dataTransfer:0}),hy=pt(dy),fy=j({},xi,{relatedTarget:0}),ca=pt(fy),py=j({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),my=pt(py),gy=j({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=pt(gy),yy=j({},xr,{data:0}),eh=pt(yy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Ey[t])?!!r[t]:!1}function da(){return Sy}var Cy=j({},xi,{key:function(t){if(t.key){var r=vy[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ks(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(t){return t.type==="keypress"?Ks(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ks(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iy=pt(Cy),ky=j({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=pt(ky),Ty=j({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),Ny=pt(Ty),Ry=j({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=pt(Ry),xy=j({},Qs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=pt(xy),Oy=[9,13,27,32],ha=f&&"CompositionEvent"in window,Oi=null;f&&"documentMode"in document&&(Oi=document.documentMode);var Dy=f&&"TextEvent"in window&&!Oi,nh=f&&(!ha||Oi&&8<Oi&&11>=Oi),rh=" ",ih=!1;function sh(t,r){switch(t){case"keyup":return Oy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function Ly(t,r){switch(t){case"compositionend":return oh(r);case"keypress":return r.which!==32?null:(ih=!0,rh);case"textInput":return t=r.data,t===rh&&ih?null:t;default:return null}}function My(t,r){if(Ar)return t==="compositionend"||!ha&&sh(t,r)?(t=Xd(),Gs=oa=kn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return nh&&r.locale!=="ko"?null:r.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Fy[t.type]:r==="textarea"}function ah(t,r,o,a){Rd(a),r=eo(r,"onChange"),0<r.length&&(o=new la("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Di=null,Li=null;function by(t){Th(t,0)}function Ys(t){var r=Fr(t);if(gd(r))return t}function Uy(t,r){if(t==="change")return r}var uh=!1;if(f){var fa;if(f){var pa="oninput"in document;if(!pa){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),pa=typeof ch.oninput=="function"}fa=pa}else fa=!1;uh=fa&&(!document.documentMode||9<document.documentMode)}function dh(){Di&&(Di.detachEvent("onpropertychange",hh),Li=Di=null)}function hh(t){if(t.propertyName==="value"&&Ys(Li)){var r=[];ah(r,Li,t,Kl(t)),Od(by,r)}}function zy(t,r,o){t==="focusin"?(dh(),Di=r,Li=o,Di.attachEvent("onpropertychange",hh)):t==="focusout"&&dh()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ys(Li)}function Wy(t,r){if(t==="click")return Ys(r)}function Vy(t,r){if(t==="input"||t==="change")return Ys(r)}function By(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Pt=typeof Object.is=="function"?Object.is:By;function Mi(t,r){if(Pt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!Pt(t[c],r[c]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,r){var o=fh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fh(o)}}function mh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?mh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function gh(){for(var t=window,r=Ds();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ds(t.document)}return r}function ma(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Hy(t){var r=gh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&mh(o.ownerDocument.documentElement,o)){if(a!==null&&ma(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=ph(o,h);var p=ph(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $y=f&&"documentMode"in document&&11>=document.documentMode,Or=null,ga=null,Fi=null,_a=!1;function _h(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_a||Or==null||Or!==Ds(a)||(a=Or,"selectionStart"in a&&ma(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fi&&Mi(Fi,a)||(Fi=a,a=eo(ga,"onSelect"),0<a.length&&(r=new la("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Or)))}function Xs(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Dr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},ya={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Js(t){if(ya[t])return ya[t];if(!Dr[t])return t;var r=Dr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in yh)return ya[t]=r[o];return t}var vh=Js("animationend"),wh=Js("animationiteration"),Eh=Js("animationstart"),Sh=Js("transitionend"),Ch=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,r){Ch.set(t,r),u(r,[t])}for(var va=0;va<Ih.length;va++){var wa=Ih[va],Gy=wa.toLowerCase(),Ky=wa[0].toUpperCase()+wa.slice(1);Tn(Gy,"on"+Ky)}Tn(vh,"onAnimationEnd"),Tn(wh,"onAnimationIteration"),Tn(Eh,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Sh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function kh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,G_(a,r,void 0,t),t.currentTarget=null}function Th(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],y=_.instance,T=_.currentTarget;if(_=_.listener,y!==h&&c.isPropagationStopped())break e;kh(c,_,T),h=y}else for(p=0;p<a.length;p++){if(_=a[p],y=_.instance,T=_.currentTarget,_=_.listener,y!==h&&c.isPropagationStopped())break e;kh(c,_,T),h=y}}}if(Fs)throw t=Xl,Fs=!1,Xl=null,t}function me(t,r){var o=r[Ra];o===void 0&&(o=r[Ra]=new Set);var a=t+"__bubble";o.has(a)||(Nh(r,t,2,!1),o.add(a))}function Ea(t,r,o){var a=0;r&&(a|=4),Nh(o,t,a,r)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function Ui(t){if(!t[Zs]){t[Zs]=!0,s.forEach(function(o){o!=="selectionchange"&&(qy.has(o)||Ea(o,!1,t),Ea(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Zs]||(r[Zs]=!0,Ea("selectionchange",!1,r))}}function Nh(t,r,o,a){switch(Yd(r)){case 1:var c=ay;break;case 4:c=uy;break;default:c=ia}o=c.bind(null,r,o,t),c=void 0,!Yl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function Sa(t,r,o,a,c){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var y=p.tag;if((y===3||y===4)&&(y=p.stateNode.containerInfo,y===c||y.nodeType===8&&y.parentNode===c))return;p=p.return}for(;_!==null;){if(p=Zn(_),p===null)return;if(y=p.tag,y===5||y===6){a=h=p;continue e}_=_.parentNode}}a=a.return}Od(function(){var T=h,P=Kl(o),x=[];e:{var N=Ch.get(t);if(N!==void 0){var U=la,W=t;switch(t){case"keypress":if(Ks(o)===0)break e;case"keydown":case"keyup":U=Iy;break;case"focusin":W="focus",U=ca;break;case"focusout":W="blur",U=ca;break;case"beforeblur":case"afterblur":U=ca;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Ny;break;case vh:case wh:case Eh:U=my;break;case Sh:U=Py;break;case"scroll":U=cy;break;case"wheel":U=Ay;break;case"copy":case"cut":case"paste":U=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=th}var V=(r&4)!==0,Ne=!V&&t==="scroll",I=V?N!==null?N+"Capture":null:N;V=[];for(var w=T,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,I!==null&&(D=wi(w,I),D!=null&&V.push(zi(w,D,k)))),Ne)break;w=w.return}0<V.length&&(N=new U(N,W,null,o,P),x.push({event:N,listeners:V}))}}if((r&7)===0){e:{if(N=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",N&&o!==Gl&&(W=o.relatedTarget||o.fromElement)&&(Zn(W)||W[Jt]))break e;if((U||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,U?(W=o.relatedTarget||o.toElement,U=T,W=W?Zn(W):null,W!==null&&(Ne=Jn(W),W!==Ne||W.tag!==5&&W.tag!==6)&&(W=null)):(U=null,W=T),U!==W)){if(V=Zd,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(V=th,D="onPointerLeave",I="onPointerEnter",w="pointer"),Ne=U==null?N:Fr(U),k=W==null?N:Fr(W),N=new V(D,w+"leave",U,o,P),N.target=Ne,N.relatedTarget=k,D=null,Zn(P)===T&&(V=new V(I,w+"enter",W,o,P),V.target=k,V.relatedTarget=Ne,D=V),Ne=D,U&&W)t:{for(V=U,I=W,w=0,k=V;k;k=Lr(k))w++;for(k=0,D=I;D;D=Lr(D))k++;for(;0<w-k;)V=Lr(V),w--;for(;0<k-w;)I=Lr(I),k--;for(;w--;){if(V===I||I!==null&&V===I.alternate)break t;V=Lr(V),I=Lr(I)}V=null}else V=null;U!==null&&Rh(x,N,U,V,!1),W!==null&&Ne!==null&&Rh(x,Ne,W,V,!0)}}e:{if(N=T?Fr(T):window,U=N.nodeName&&N.nodeName.toLowerCase(),U==="select"||U==="input"&&N.type==="file")var B=Uy;else if(lh(N))if(uh)B=Vy;else{B=jy;var $=zy}else(U=N.nodeName)&&U.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(B=Wy);if(B&&(B=B(t,T))){ah(x,B,o,P);break e}$&&$(t,N,T),t==="focusout"&&($=N._wrapperState)&&$.controlled&&N.type==="number"&&Wl(N,"number",N.value)}switch($=T?Fr(T):window,t){case"focusin":(lh($)||$.contentEditable==="true")&&(Or=$,ga=T,Fi=null);break;case"focusout":Fi=ga=Or=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,_h(x,o,P);break;case"selectionchange":if($y)break;case"keydown":case"keyup":_h(x,o,P)}var G;if(ha)e:{switch(t){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Ar?sh(t,o)&&(Q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Q="onCompositionStart");Q&&(nh&&o.locale!=="ko"&&(Ar||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Ar&&(G=Xd()):(kn=P,oa="value"in kn?kn.value:kn.textContent,Ar=!0)),$=eo(T,Q),0<$.length&&(Q=new eh(Q,t,null,o,P),x.push({event:Q,listeners:$}),G?Q.data=G:(G=oh(o),G!==null&&(Q.data=G)))),(G=Dy?Ly(t,o):My(t,o))&&(T=eo(T,"onBeforeInput"),0<T.length&&(P=new eh("onBeforeInput","beforeinput",null,o,P),x.push({event:P,listeners:T}),P.data=G))}Th(x,r)})}function zi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function eo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=wi(t,o),h!=null&&a.unshift(zi(t,h,c)),h=wi(t,r),h!=null&&a.push(zi(t,h,c))),t=t.return}return a}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rh(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,y=_.alternate,T=_.stateNode;if(y!==null&&y===a)break;_.tag===5&&T!==null&&(_=T,c?(y=wi(o,h),y!=null&&p.unshift(zi(o,y,_))):c||(y=wi(o,h),y!=null&&p.push(zi(o,y,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var Qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(Qy,`
`).replace(Yy,"")}function to(t,r,o){if(r=Ph(r),Ph(t)!==r&&o)throw Error(n(425))}function no(){}var Ca=null,Ia=null;function ka(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(Zy)}:Ta;function Zy(t){setTimeout(function(){throw t})}function Na(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Pi(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Pi(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Mr,ji="__reactProps$"+Mr,Jt="__reactContainer$"+Mr,Ra="__reactEvents$"+Mr,ev="__reactListeners$"+Mr,tv="__reactHandles$"+Mr;function Zn(t){var r=t[$t];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Jt]||o[$t]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Ah(t);t!==null;){if(o=t[$t])return o;t=Ah(t)}return r}t=o,o=t.parentNode}return null}function Wi(t){return t=t[$t]||t[Jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ro(t){return t[ji]||null}var Pa=[],br=-1;function Rn(t){return{current:t}}function ge(t){0>br||(t.current=Pa[br],Pa[br]=null,br--)}function fe(t,r){br++,Pa[br]=t.current,t.current=r}var Pn={},Be=Rn(Pn),nt=Rn(!1),er=Pn;function Ur(t,r){var o=t.type.contextTypes;if(!o)return Pn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function rt(t){return t=t.childContextTypes,t!=null}function io(){ge(nt),ge(Be)}function Oh(t,r,o){if(Be.current!==Pn)throw Error(n(168));fe(Be,r),fe(nt,o)}function Dh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,he(t)||"Unknown",c));return j({},o,a)}function so(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,er=Be.current,fe(Be,t),fe(nt,nt.current),!0}function Lh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Dh(t,r,er),a.__reactInternalMemoizedMergedChildContext=t,ge(nt),ge(Be),fe(Be,t)):ge(nt),fe(nt,o)}var Zt=null,oo=!1,xa=!1;function Mh(t){Zt===null?Zt=[t]:Zt.push(t)}function nv(t){oo=!0,Mh(t)}function xn(){if(!xa&&Zt!==null){xa=!0;var t=0,r=ue;try{var o=Zt;for(ue=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Zt=null,oo=!1}catch(c){throw Zt!==null&&(Zt=Zt.slice(t+1)),bd(Jl,xn),c}finally{ue=r,xa=!1}}return null}var zr=[],jr=0,lo=null,ao=0,wt=[],Et=0,tr=null,en=1,tn="";function nr(t,r){zr[jr++]=ao,zr[jr++]=lo,lo=t,ao=r}function Fh(t,r,o){wt[Et++]=en,wt[Et++]=tn,wt[Et++]=tr,tr=t;var a=en;t=tn;var c=32-Rt(a)-1;a&=~(1<<c),o+=1;var h=32-Rt(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,en=1<<32-Rt(r)+c|o<<c|a,tn=h+t}else en=1<<h|o<<c|a,tn=t}function Aa(t){t.return!==null&&(nr(t,1),Fh(t,1,0))}function Oa(t){for(;t===lo;)lo=zr[--jr],zr[jr]=null,ao=zr[--jr],zr[jr]=null;for(;t===tr;)tr=wt[--Et],wt[Et]=null,tn=wt[--Et],wt[Et]=null,en=wt[--Et],wt[Et]=null}var mt=null,gt=null,we=!1,xt=null;function bh(t,r){var o=kt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Uh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mt=t,gt=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mt=t,gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=tr!==null?{id:en,overflow:tn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=kt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,mt=t,gt=null,!0):!1;default:return!1}}function Da(t){return(t.mode&1)!==0&&(t.flags&128)===0}function La(t){if(we){var r=gt;if(r){var o=r;if(!Uh(t,r)){if(Da(t))throw Error(n(418));r=Nn(o.nextSibling);var a=mt;r&&Uh(t,r)?bh(a,o):(t.flags=t.flags&-4097|2,we=!1,mt=t)}}else{if(Da(t))throw Error(n(418));t.flags=t.flags&-4097|2,we=!1,mt=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function uo(t){if(t!==mt)return!1;if(!we)return zh(t),we=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ka(t.type,t.memoizedProps)),r&&(r=gt)){if(Da(t))throw jh(),Error(n(418));for(;r;)bh(t,r),r=Nn(r.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){gt=Nn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}gt=null}}else gt=mt?Nn(t.stateNode.nextSibling):null;return!0}function jh(){for(var t=gt;t;)t=Nn(t.nextSibling)}function Wr(){gt=mt=null,we=!1}function Ma(t){xt===null?xt=[t]:xt.push(t)}var rv=Oe.ReactCurrentBatchConfig;function Vi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function co(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Wh(t){var r=t._init;return r(t._payload)}function Vh(t){function r(I,w){if(t){var k=I.deletions;k===null?(I.deletions=[w],I.flags|=16):k.push(w)}}function o(I,w){if(!t)return null;for(;w!==null;)r(I,w),w=w.sibling;return null}function a(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function c(I,w){return I=Un(I,w),I.index=0,I.sibling=null,I}function h(I,w,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<w?(I.flags|=2,w):k):(I.flags|=2,w)):(I.flags|=1048576,w)}function p(I){return t&&I.alternate===null&&(I.flags|=2),I}function _(I,w,k,D){return w===null||w.tag!==6?(w=Tu(k,I.mode,D),w.return=I,w):(w=c(w,k),w.return=I,w)}function y(I,w,k,D){var B=k.type;return B===et?P(I,w,k.props.children,D,k.key):w!==null&&(w.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===tt&&Wh(B)===w.type)?(D=c(w,k.props),D.ref=Vi(I,w,k),D.return=I,D):(D=Mo(k.type,k.key,k.props,null,I.mode,D),D.ref=Vi(I,w,k),D.return=I,D)}function T(I,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Nu(k,I.mode,D),w.return=I,w):(w=c(w,k.children||[]),w.return=I,w)}function P(I,w,k,D,B){return w===null||w.tag!==7?(w=cr(k,I.mode,D,B),w.return=I,w):(w=c(w,k),w.return=I,w)}function x(I,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Tu(""+w,I.mode,k),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Tt:return k=Mo(w.type,w.key,w.props,null,I.mode,k),k.ref=Vi(I,null,w),k.return=I,k;case Qe:return w=Nu(w,I.mode,k),w.return=I,w;case tt:var D=w._init;return x(I,D(w._payload),k)}if(_i(w)||K(w))return w=cr(w,I.mode,k,null),w.return=I,w;co(I,w)}return null}function N(I,w,k,D){var B=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return B!==null?null:_(I,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Tt:return k.key===B?y(I,w,k,D):null;case Qe:return k.key===B?T(I,w,k,D):null;case tt:return B=k._init,N(I,w,B(k._payload),D)}if(_i(k)||K(k))return B!==null?null:P(I,w,k,D,null);co(I,k)}return null}function U(I,w,k,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(k)||null,_(w,I,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Tt:return I=I.get(D.key===null?k:D.key)||null,y(w,I,D,B);case Qe:return I=I.get(D.key===null?k:D.key)||null,T(w,I,D,B);case tt:var $=D._init;return U(I,w,k,$(D._payload),B)}if(_i(D)||K(D))return I=I.get(k)||null,P(w,I,D,B,null);co(w,D)}return null}function W(I,w,k,D){for(var B=null,$=null,G=w,Q=w=0,Me=null;G!==null&&Q<k.length;Q++){G.index>Q?(Me=G,G=null):Me=G.sibling;var oe=N(I,G,k[Q],D);if(oe===null){G===null&&(G=Me);break}t&&G&&oe.alternate===null&&r(I,G),w=h(oe,w,Q),$===null?B=oe:$.sibling=oe,$=oe,G=Me}if(Q===k.length)return o(I,G),we&&nr(I,Q),B;if(G===null){for(;Q<k.length;Q++)G=x(I,k[Q],D),G!==null&&(w=h(G,w,Q),$===null?B=G:$.sibling=G,$=G);return we&&nr(I,Q),B}for(G=a(I,G);Q<k.length;Q++)Me=U(G,I,Q,k[Q],D),Me!==null&&(t&&Me.alternate!==null&&G.delete(Me.key===null?Q:Me.key),w=h(Me,w,Q),$===null?B=Me:$.sibling=Me,$=Me);return t&&G.forEach(function(zn){return r(I,zn)}),we&&nr(I,Q),B}function V(I,w,k,D){var B=K(k);if(typeof B!="function")throw Error(n(150));if(k=B.call(k),k==null)throw Error(n(151));for(var $=B=null,G=w,Q=w=0,Me=null,oe=k.next();G!==null&&!oe.done;Q++,oe=k.next()){G.index>Q?(Me=G,G=null):Me=G.sibling;var zn=N(I,G,oe.value,D);if(zn===null){G===null&&(G=Me);break}t&&G&&zn.alternate===null&&r(I,G),w=h(zn,w,Q),$===null?B=zn:$.sibling=zn,$=zn,G=Me}if(oe.done)return o(I,G),we&&nr(I,Q),B;if(G===null){for(;!oe.done;Q++,oe=k.next())oe=x(I,oe.value,D),oe!==null&&(w=h(oe,w,Q),$===null?B=oe:$.sibling=oe,$=oe);return we&&nr(I,Q),B}for(G=a(I,G);!oe.done;Q++,oe=k.next())oe=U(G,I,Q,oe.value,D),oe!==null&&(t&&oe.alternate!==null&&G.delete(oe.key===null?Q:oe.key),w=h(oe,w,Q),$===null?B=oe:$.sibling=oe,$=oe);return t&&G.forEach(function(Fv){return r(I,Fv)}),we&&nr(I,Q),B}function Ne(I,w,k,D){if(typeof k=="object"&&k!==null&&k.type===et&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Tt:e:{for(var B=k.key,$=w;$!==null;){if($.key===B){if(B=k.type,B===et){if($.tag===7){o(I,$.sibling),w=c($,k.props.children),w.return=I,I=w;break e}}else if($.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===tt&&Wh(B)===$.type){o(I,$.sibling),w=c($,k.props),w.ref=Vi(I,$,k),w.return=I,I=w;break e}o(I,$);break}else r(I,$);$=$.sibling}k.type===et?(w=cr(k.props.children,I.mode,D,k.key),w.return=I,I=w):(D=Mo(k.type,k.key,k.props,null,I.mode,D),D.ref=Vi(I,w,k),D.return=I,I=D)}return p(I);case Qe:e:{for($=k.key;w!==null;){if(w.key===$)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){o(I,w.sibling),w=c(w,k.children||[]),w.return=I,I=w;break e}else{o(I,w);break}else r(I,w);w=w.sibling}w=Nu(k,I.mode,D),w.return=I,I=w}return p(I);case tt:return $=k._init,Ne(I,w,$(k._payload),D)}if(_i(k))return W(I,w,k,D);if(K(k))return V(I,w,k,D);co(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(o(I,w.sibling),w=c(w,k),w.return=I,I=w):(o(I,w),w=Tu(k,I.mode,D),w.return=I,I=w),p(I)):o(I,w)}return Ne}var Vr=Vh(!0),Bh=Vh(!1),ho=Rn(null),fo=null,Br=null,Fa=null;function ba(){Fa=Br=fo=null}function Ua(t){var r=ho.current;ge(ho),t._currentValue=r}function za(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Hr(t,r){fo=t,Fa=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(it=!0),t.firstContext=null)}function St(t){var r=t._currentValue;if(Fa!==t)if(t={context:t,memoizedValue:r,next:null},Br===null){if(fo===null)throw Error(n(308));Br=t,fo.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return r}var rr=null;function ja(t){rr===null?rr=[t]:rr.push(t)}function Hh(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,ja(r)):(o.next=c.next,c.next=o),r.interleaved=o,nn(t,a)}function nn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var An=!1;function Wa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function On(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(re&2)!==0){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,nn(t,o)}return c=a.interleaved,c===null?(r.next=r,ja(a)):(r.next=c.next,c.next=r),a.interleaved=r,nn(t,o)}function po(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ta(t,o)}}function Gh(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function mo(t,r,o,a){var c=t.updateQueue;An=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var y=_,T=y.next;y.next=null,p===null?h=T:p.next=T,p=y;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==p&&(_===null?P.firstBaseUpdate=T:_.next=T,P.lastBaseUpdate=y))}if(h!==null){var x=c.baseState;p=0,P=T=y=null,_=h;do{var N=_.lane,U=_.eventTime;if((a&N)===N){P!==null&&(P=P.next={eventTime:U,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var W=t,V=_;switch(N=r,U=o,V.tag){case 1:if(W=V.payload,typeof W=="function"){x=W.call(U,x,N);break e}x=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=V.payload,N=typeof W=="function"?W.call(U,x,N):W,N==null)break e;x=j({},x,N);break e;case 2:An=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else U={eventTime:U,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(T=P=U,y=x):P=P.next=U,p|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(P===null&&(y=x),c.baseState=y,c.firstBaseUpdate=T,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);or|=p,t.lanes=p,t.memoizedState=x}}function Kh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Bi={},Gt=Rn(Bi),Hi=Rn(Bi),$i=Rn(Bi);function ir(t){if(t===Bi)throw Error(n(174));return t}function Va(t,r){switch(fe($i,r),fe(Hi,t),fe(Gt,Bi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Bl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Bl(r,t)}ge(Gt),fe(Gt,r)}function $r(){ge(Gt),ge(Hi),ge($i)}function qh(t){ir($i.current);var r=ir(Gt.current),o=Bl(r,t.type);r!==o&&(fe(Hi,t),fe(Gt,o))}function Ba(t){Hi.current===t&&(ge(Gt),ge(Hi))}var Ee=Rn(0);function go(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ha=[];function $a(){for(var t=0;t<Ha.length;t++)Ha[t]._workInProgressVersionPrimary=null;Ha.length=0}var _o=Oe.ReactCurrentDispatcher,Ga=Oe.ReactCurrentBatchConfig,sr=0,Se=null,Pe=null,De=null,yo=!1,Gi=!1,Ki=0,iv=0;function He(){throw Error(n(321))}function Ka(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!Pt(t[o],r[o]))return!1;return!0}function qa(t,r,o,a,c,h){if(sr=h,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_o.current=t===null||t.memoizedState===null?av:uv,t=o(a,c),Gi){h=0;do{if(Gi=!1,Ki=0,25<=h)throw Error(n(301));h+=1,De=Pe=null,r.updateQueue=null,_o.current=cv,t=o(a,c)}while(Gi)}if(_o.current=Eo,r=Pe!==null&&Pe.next!==null,sr=0,De=Pe=Se=null,yo=!1,r)throw Error(n(300));return t}function Qa(){var t=Ki!==0;return Ki=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Se.memoizedState=De=t:De=De.next=t,De}function Ct(){if(Pe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var r=De===null?Se.memoizedState:De.next;if(r!==null)De=r,Pe=t;else{if(t===null)throw Error(n(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},De===null?Se.memoizedState=De=t:De=De.next=t}return De}function qi(t,r){return typeof r=="function"?r(t):r}function Ya(t){var r=Ct(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Pe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,y=null,T=h;do{var P=T.lane;if((sr&P)===P)y!==null&&(y=y.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var x={lane:P,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};y===null?(_=y=x,p=a):y=y.next=x,Se.lanes|=P,or|=P}T=T.next}while(T!==null&&T!==h);y===null?p=a:y.next=_,Pt(a,r.memoizedState)||(it=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=y,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Se.lanes|=h,or|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Xa(t){var r=Ct(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);Pt(h,r.memoizedState)||(it=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function Qh(){}function Yh(t,r){var o=Se,a=Ct(),c=r(),h=!Pt(a.memoizedState,c);if(h&&(a.memoizedState=c,it=!0),a=a.queue,Ja(Zh.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||De!==null&&De.memoizedState.tag&1){if(o.flags|=2048,Qi(9,Jh.bind(null,o,a,c,r),void 0,null),Le===null)throw Error(n(349));(sr&30)!==0||Xh(o,r,c)}return c}function Xh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Jh(t,r,o,a){r.value=o,r.getSnapshot=a,ef(r)&&tf(t)}function Zh(t,r,o){return o(function(){ef(r)&&tf(t)})}function ef(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!Pt(t,o)}catch{return!0}}function tf(t){var r=nn(t,1);r!==null&&Lt(r,t,1,-1)}function nf(t){var r=Kt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},r.queue=t,t=t.dispatch=lv.bind(null,Se,t),[r.memoizedState,t]}function Qi(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function rf(){return Ct().memoizedState}function vo(t,r,o,a){var c=Kt();Se.flags|=t,c.memoizedState=Qi(1|r,o,void 0,a===void 0?null:a)}function wo(t,r,o,a){var c=Ct();a=a===void 0?null:a;var h=void 0;if(Pe!==null){var p=Pe.memoizedState;if(h=p.destroy,a!==null&&Ka(a,p.deps)){c.memoizedState=Qi(r,o,h,a);return}}Se.flags|=t,c.memoizedState=Qi(1|r,o,h,a)}function sf(t,r){return vo(8390656,8,t,r)}function Ja(t,r){return wo(2048,8,t,r)}function of(t,r){return wo(4,2,t,r)}function lf(t,r){return wo(4,4,t,r)}function af(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function uf(t,r,o){return o=o!=null?o.concat([t]):null,wo(4,4,af.bind(null,r,t),o)}function Za(){}function cf(t,r){var o=Ct();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ka(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function df(t,r){var o=Ct();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Ka(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function hf(t,r,o){return(sr&21)===0?(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=o):(Pt(o,r)||(o=Wd(),Se.lanes|=o,or|=o,t.baseState=!0),r)}function sv(t,r){var o=ue;ue=o!==0&&4>o?o:4,t(!0);var a=Ga.transition;Ga.transition={};try{t(!1),r()}finally{ue=o,Ga.transition=a}}function ff(){return Ct().memoizedState}function ov(t,r,o){var a=Fn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},pf(t))mf(r,o);else if(o=Hh(t,r,o,a),o!==null){var c=Xe();Lt(o,t,a,c),gf(o,r,a)}}function lv(t,r,o){var a=Fn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(pf(t))mf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,Pt(_,p)){var y=r.interleaved;y===null?(c.next=c,ja(r)):(c.next=y.next,y.next=c),r.interleaved=c;return}}catch{}finally{}o=Hh(t,r,c,a),o!==null&&(c=Xe(),Lt(o,t,a,c),gf(o,r,a))}}function pf(t){var r=t.alternate;return t===Se||r!==null&&r===Se}function mf(t,r){Gi=yo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function gf(t,r,o){if((o&4194240)!==0){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ta(t,o)}}var Eo={readContext:St,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},av={readContext:St,useCallback:function(t,r){return Kt().memoizedState=[t,r===void 0?null:r],t},useContext:St,useEffect:sf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,vo(4194308,4,af.bind(null,r,t),o)},useLayoutEffect:function(t,r){return vo(4194308,4,t,r)},useInsertionEffect:function(t,r){return vo(4,2,t,r)},useMemo:function(t,r){var o=Kt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Kt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=ov.bind(null,Se,t),[a.memoizedState,t]},useRef:function(t){var r=Kt();return t={current:t},r.memoizedState=t},useState:nf,useDebugValue:Za,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=nf(!1),r=t[0];return t=sv.bind(null,t[1]),Kt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Se,c=Kt();if(we){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Le===null)throw Error(n(349));(sr&30)!==0||Xh(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,sf(Zh.bind(null,a,h,t),[t]),a.flags|=2048,Qi(9,Jh.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Kt(),r=Le.identifierPrefix;if(we){var o=tn,a=en;o=(a&~(1<<32-Rt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ki++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=iv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},uv={readContext:St,useCallback:cf,useContext:St,useEffect:Ja,useImperativeHandle:uf,useInsertionEffect:of,useLayoutEffect:lf,useMemo:df,useReducer:Ya,useRef:rf,useState:function(){return Ya(qi)},useDebugValue:Za,useDeferredValue:function(t){var r=Ct();return hf(r,Pe.memoizedState,t)},useTransition:function(){var t=Ya(qi)[0],r=Ct().memoizedState;return[t,r]},useMutableSource:Qh,useSyncExternalStore:Yh,useId:ff,unstable_isNewReconciler:!1},cv={readContext:St,useCallback:cf,useContext:St,useEffect:Ja,useImperativeHandle:uf,useInsertionEffect:of,useLayoutEffect:lf,useMemo:df,useReducer:Xa,useRef:rf,useState:function(){return Xa(qi)},useDebugValue:Za,useDeferredValue:function(t){var r=Ct();return Pe===null?r.memoizedState=t:hf(r,Pe.memoizedState,t)},useTransition:function(){var t=Xa(qi)[0],r=Ct().memoizedState;return[t,r]},useMutableSource:Qh,useSyncExternalStore:Yh,useId:ff,unstable_isNewReconciler:!1};function At(t,r){if(t&&t.defaultProps){r=j({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function eu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:j({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var So={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Xe(),c=Fn(t),h=rn(a,c);h.payload=r,o!=null&&(h.callback=o),r=On(t,h,c),r!==null&&(Lt(r,t,c,a),po(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Xe(),c=Fn(t),h=rn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=On(t,h,c),r!==null&&(Lt(r,t,c,a),po(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Xe(),a=Fn(t),c=rn(o,a);c.tag=2,r!=null&&(c.callback=r),r=On(t,c,a),r!==null&&(Lt(r,t,a,o),po(r,t,a))}};function _f(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!Mi(o,a)||!Mi(c,h):!0}function yf(t,r,o){var a=!1,c=Pn,h=r.contextType;return typeof h=="object"&&h!==null?h=St(h):(c=rt(r)?er:Be.current,a=r.contextTypes,h=(a=a!=null)?Ur(t,c):Pn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=So,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function vf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&So.enqueueReplaceState(r,r.state,null)}function tu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Wa(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=St(h):(h=rt(r)?er:Be.current,c.context=Ur(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(eu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&So.enqueueReplaceState(c,c.state,null),mo(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Gr(t,r){try{var o="",a=r;do o+=ie(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function nu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function ru(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function wf(t,r,o){o=rn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Po||(Po=!0,yu=a),ru(t,r)},o}function Ef(t,r,o){o=rn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){ru(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ru(t,r),typeof a!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function Sf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new dv;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=kv.bind(null,t,r,o),r.then(t,t))}function Cf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function If(t,r,o,a,c){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=rn(-1,1),r.tag=2,On(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var hv=Oe.ReactCurrentOwner,it=!1;function Ye(t,r,o,a){r.child=t===null?Bh(r,null,o,a):Vr(r,t.child,o,a)}function kf(t,r,o,a,c){o=o.render;var h=r.ref;return Hr(r,c),a=qa(t,r,o,a,h,c),o=Qa(),t!==null&&!it?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,sn(t,r,c)):(we&&o&&Aa(r),r.flags|=1,Ye(t,r,a,c),r.child)}function Tf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!ku(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Nf(t,r,h,a,c)):(t=Mo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Mi,o(p,a)&&t.ref===r.ref)return sn(t,r,c)}return r.flags|=1,t=Un(h,a),t.ref=r.ref,t.return=r,r.child=t}function Nf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Mi(h,a)&&t.ref===r.ref)if(it=!1,r.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(it=!0);else return r.lanes=t.lanes,sn(t,r,c)}return iu(t,r,o,a,c)}function Rf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(qr,_t),_t|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,fe(qr,_t),_t|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,fe(qr,_t),_t|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,fe(qr,_t),_t|=a;return Ye(t,r,c,o),r.child}function Pf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function iu(t,r,o,a,c){var h=rt(o)?er:Be.current;return h=Ur(r,h),Hr(r,c),o=qa(t,r,o,a,h,c),a=Qa(),t!==null&&!it?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,sn(t,r,c)):(we&&a&&Aa(r),r.flags|=1,Ye(t,r,o,c),r.child)}function xf(t,r,o,a,c){if(rt(o)){var h=!0;so(r)}else h=!1;if(Hr(r,c),r.stateNode===null)Io(t,r),yf(r,o,a),tu(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var y=p.context,T=o.contextType;typeof T=="object"&&T!==null?T=St(T):(T=rt(o)?er:Be.current,T=Ur(r,T));var P=o.getDerivedStateFromProps,x=typeof P=="function"||typeof p.getSnapshotBeforeUpdate=="function";x||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||y!==T)&&vf(r,p,a,T),An=!1;var N=r.memoizedState;p.state=N,mo(r,a,p,c),y=r.memoizedState,_!==a||N!==y||nt.current||An?(typeof P=="function"&&(eu(r,o,P,a),y=r.memoizedState),(_=An||_f(r,o,_,a,N,y,T))?(x||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=y),p.props=a,p.state=y,p.context=T,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,$h(t,r),_=r.memoizedProps,T=r.type===r.elementType?_:At(r.type,_),p.props=T,x=r.pendingProps,N=p.context,y=o.contextType,typeof y=="object"&&y!==null?y=St(y):(y=rt(o)?er:Be.current,y=Ur(r,y));var U=o.getDerivedStateFromProps;(P=typeof U=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==x||N!==y)&&vf(r,p,a,y),An=!1,N=r.memoizedState,p.state=N,mo(r,a,p,c);var W=r.memoizedState;_!==x||N!==W||nt.current||An?(typeof U=="function"&&(eu(r,o,U,a),W=r.memoizedState),(T=An||_f(r,o,T,a,N,W,y)||!1)?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,W,y),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,W,y)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=W),p.props=a,p.state=W,p.context=y,a=T):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),a=!1)}return su(t,r,o,a,h,c)}function su(t,r,o,a,c,h){Pf(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&Lh(r,o,!1),sn(t,r,h);a=r.stateNode,hv.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=Vr(r,t.child,null,h),r.child=Vr(r,null,_,h)):Ye(t,r,_,h),r.memoizedState=a.state,c&&Lh(r,o,!0),r.child}function Af(t){var r=t.stateNode;r.pendingContext?Oh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Oh(t,r.context,!1),Va(t,r.containerInfo)}function Of(t,r,o,a,c){return Wr(),Ma(c),r.flags|=256,Ye(t,r,o,a),r.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Df(t,r,o){var a=r.pendingProps,c=Ee.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),fe(Ee,c&1),t===null)return La(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Fo(p,a,0,null),t=cr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=lu(o),r.memoizedState=ou,t):au(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return fv(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var y={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=y,r.deletions=null):(a=Un(c,y),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Un(_,h):(h=cr(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?lu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=ou,a}return h=t.child,t=h.sibling,a=Un(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function au(t,r){return r=Fo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Co(t,r,o,a){return a!==null&&Ma(a),Vr(r,t.child,null,o),t=au(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function fv(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=nu(Error(n(422))),Co(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Fo({mode:"visible",children:a.children},c,0,null),h=cr(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&Vr(r,t.child,null,p),r.child.memoizedState=lu(p),r.memoizedState=ou,h);if((r.mode&1)===0)return Co(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=nu(h,a,void 0),Co(t,r,p,a)}if(_=(p&t.childLanes)!==0,it||_){if(a=Le,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,nn(t,c),Lt(a,t,c,-1))}return Iu(),a=nu(Error(n(421))),Co(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Tv.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,gt=Nn(c.nextSibling),mt=r,we=!0,xt=null,t!==null&&(wt[Et++]=en,wt[Et++]=tn,wt[Et++]=tr,en=t.id,tn=t.overflow,tr=r),r=au(r,a.children),r.flags|=4096,r)}function Lf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),za(t.return,r,o)}function uu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Mf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Ye(t,r,a.children,o),a=Ee.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lf(t,o,r);else if(t.tag===19)Lf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(fe(Ee,a),(r.mode&1)===0)r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&go(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),uu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&go(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}uu(r,!0,o,null,h);break;case"together":uu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Io(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function sn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),or|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Un(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Un(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function pv(t,r,o){switch(r.tag){case 3:Af(r),Wr();break;case 5:qh(r);break;case 1:rt(r.type)&&so(r);break;case 4:Va(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;fe(ho,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(fe(Ee,Ee.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Df(t,r,o):(fe(Ee,Ee.current&1),t=sn(t,r,o),t!==null?t.sibling:null);fe(Ee,Ee.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(t.flags&128)!==0){if(a)return Mf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),fe(Ee,Ee.current),a)break;return null;case 22:case 23:return r.lanes=0,Rf(t,r,o)}return sn(t,r,o)}var Ff,cu,bf,Uf;Ff=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},cu=function(){},bf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,ir(Gt.current);var h=null;switch(o){case"input":c=zl(t,c),a=zl(t,a),h=[];break;case"select":c=j({},c,{value:void 0}),a=j({},a,{value:void 0}),h=[];break;case"textarea":c=Vl(t,c),a=Vl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=no)}Hl(o,a);var p;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var _=c[T];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var y=a[T];if(_=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&y!==_&&(y!=null||_!=null))if(T==="style")if(_){for(p in _)!_.hasOwnProperty(p)||y&&y.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in y)y.hasOwnProperty(p)&&_[p]!==y[p]&&(o||(o={}),o[p]=y[p])}else o||(h||(h=[]),h.push(T,o)),o=y;else T==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,_=_?_.__html:void 0,y!=null&&_!==y&&(h=h||[]).push(T,y)):T==="children"?typeof y!="string"&&typeof y!="number"||(h=h||[]).push(T,""+y):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(y!=null&&T==="onScroll"&&me("scroll",t),h||_===y||(h=[])):(h=h||[]).push(T,y))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Uf=function(t,r,o,a){o!==a&&(r.flags|=4)};function Yi(t,r){if(!we)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function $e(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function mv(t,r,o){var a=r.pendingProps;switch(Oa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(r),null;case 1:return rt(r.type)&&io(),$e(r),null;case 3:return a=r.stateNode,$r(),ge(nt),ge(Be),$a(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(uo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xt!==null&&(Eu(xt),xt=null))),cu(t,r),$e(r),null;case 5:Ba(r);var c=ir($i.current);if(o=r.type,t!==null&&r.stateNode!=null)bf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return $e(r),null}if(t=ir(Gt.current),uo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[$t]=r,a[ji]=h,t=(r.mode&1)!==0,o){case"dialog":me("cancel",a),me("close",a);break;case"iframe":case"object":case"embed":me("load",a);break;case"video":case"audio":for(c=0;c<bi.length;c++)me(bi[c],a);break;case"source":me("error",a);break;case"img":case"image":case"link":me("error",a),me("load",a);break;case"details":me("toggle",a);break;case"input":_d(a,h),me("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},me("invalid",a);break;case"textarea":wd(a,h),me("invalid",a)}Hl(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&to(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&to(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&me("scroll",a)}switch(o){case"input":Os(a),vd(a,h,!0);break;case"textarea":Os(a),Sd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=no)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[$t]=r,t[ji]=a,Ff(t,r,!1,!1),r.stateNode=t;e:{switch(p=$l(o,a),o){case"dialog":me("cancel",t),me("close",t),c=a;break;case"iframe":case"object":case"embed":me("load",t),c=a;break;case"video":case"audio":for(c=0;c<bi.length;c++)me(bi[c],t);c=a;break;case"source":me("error",t),c=a;break;case"img":case"image":case"link":me("error",t),me("load",t),c=a;break;case"details":me("toggle",t),c=a;break;case"input":_d(t,a),c=zl(t,a),me("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=j({},a,{value:void 0}),me("invalid",t);break;case"textarea":wd(t,a),c=Vl(t,a),me("invalid",t);break;default:c=a}Hl(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var y=_[h];h==="style"?Td(t,y):h==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Id(t,y)):h==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&yi(t,y):typeof y=="number"&&yi(t,""+y):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?y!=null&&h==="onScroll"&&me("scroll",t):y!=null&&qe(t,h,y,p))}switch(o){case"input":Os(t),vd(t,a,!1);break;case"textarea":Os(t),Sd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ae(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Tr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Tr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=no)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $e(r),null;case 6:if(t&&r.stateNode!=null)Uf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=ir($i.current),ir(Gt.current),uo(r)){if(a=r.stateNode,o=r.memoizedProps,a[$t]=r,(h=a.nodeValue!==o)&&(t=mt,t!==null))switch(t.tag){case 3:to(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[$t]=r,r.stateNode=a}return $e(r),null;case 13:if(ge(Ee),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&gt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)jh(),Wr(),r.flags|=98560,h=!1;else if(h=uo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[$t]=r}else Wr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$e(r),h=!1}else xt!==null&&(Eu(xt),xt=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Ee.current&1)!==0?xe===0&&(xe=3):Iu())),r.updateQueue!==null&&(r.flags|=4),$e(r),null);case 4:return $r(),cu(t,r),t===null&&Ui(r.stateNode.containerInfo),$e(r),null;case 10:return Ua(r.type._context),$e(r),null;case 17:return rt(r.type)&&io(),$e(r),null;case 19:if(ge(Ee),h=r.memoizedState,h===null)return $e(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)Yi(h,!1);else{if(xe!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=go(t),p!==null){for(r.flags|=128,Yi(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return fe(Ee,Ee.current&1|2),r.child}t=t.sibling}h.tail!==null&&Te()>Qr&&(r.flags|=128,a=!0,Yi(h,!1),r.lanes=4194304)}else{if(!a)if(t=go(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Yi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!we)return $e(r),null}else 2*Te()-h.renderingStartTime>Qr&&o!==1073741824&&(r.flags|=128,a=!0,Yi(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Te(),r.sibling=null,o=Ee.current,fe(Ee,a?o&1|2:o&1),r):($e(r),null);case 22:case 23:return Cu(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(_t&1073741824)!==0&&($e(r),r.subtreeFlags&6&&(r.flags|=8192)):$e(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function gv(t,r){switch(Oa(r),r.tag){case 1:return rt(r.type)&&io(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return $r(),ge(nt),ge(Be),$a(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Ba(r),null;case 13:if(ge(Ee),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Wr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ge(Ee),null;case 4:return $r(),null;case 10:return Ua(r.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var ko=!1,Ge=!1,_v=typeof WeakSet=="function"?WeakSet:Set,z=null;function Kr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ie(t,r,a)}else o.current=null}function du(t,r,o){try{o()}catch(a){Ie(t,r,a)}}var zf=!1;function yv(t,r){if(Ca=Hs,t=gh(),ma(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,y=-1,T=0,P=0,x=t,N=null;t:for(;;){for(var U;x!==o||c!==0&&x.nodeType!==3||(_=p+c),x!==h||a!==0&&x.nodeType!==3||(y=p+a),x.nodeType===3&&(p+=x.nodeValue.length),(U=x.firstChild)!==null;)N=x,x=U;for(;;){if(x===t)break t;if(N===o&&++T===c&&(_=p),N===h&&++P===a&&(y=p),(U=x.nextSibling)!==null)break;x=N,N=x.parentNode}x=U}o=_===-1||y===-1?null:{start:_,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ia={focusedElem:t,selectionRange:o},Hs=!1,z=r;z!==null;)if(r=z,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,z=t;else for(;z!==null;){r=z;try{var W=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var V=W.memoizedProps,Ne=W.memoizedState,I=r.stateNode,w=I.getSnapshotBeforeUpdate(r.elementType===r.type?V:At(r.type,V),Ne);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=r.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(D){Ie(r,r.return,D)}if(t=r.sibling,t!==null){t.return=r.return,z=t;break}z=r.return}return W=zf,zf=!1,W}function Xi(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&du(r,o,h)}c=c.next}while(c!==a)}}function To(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function hu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function jf(t){var r=t.alternate;r!==null&&(t.alternate=null,jf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[$t],delete r[ji],delete r[Ra],delete r[ev],delete r[tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wf(t){return t.tag===5||t.tag===3||t.tag===4}function Vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=no));else if(a!==4&&(t=t.child,t!==null))for(fu(t,r,o),t=t.sibling;t!==null;)fu(t,r,o),t=t.sibling}function pu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(pu(t,r,o),t=t.sibling;t!==null;)pu(t,r,o),t=t.sibling}var je=null,Ot=!1;function Dn(t,r,o){for(o=o.child;o!==null;)Bf(t,r,o),o=o.sibling}function Bf(t,r,o){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Us,o)}catch{}switch(o.tag){case 5:Ge||Kr(o,r);case 6:var a=je,c=Ot;je=null,Dn(t,r,o),je=a,Ot=c,je!==null&&(Ot?(t=je,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):je.removeChild(o.stateNode));break;case 18:je!==null&&(Ot?(t=je,o=o.stateNode,t.nodeType===8?Na(t.parentNode,o):t.nodeType===1&&Na(t,o),Pi(t)):Na(je,o.stateNode));break;case 4:a=je,c=Ot,je=o.stateNode.containerInfo,Ot=!0,Dn(t,r,o),je=a,Ot=c;break;case 0:case 11:case 14:case 15:if(!Ge&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&du(o,r,p),c=c.next}while(c!==a)}Dn(t,r,o);break;case 1:if(!Ge&&(Kr(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ie(o,r,_)}Dn(t,r,o);break;case 21:Dn(t,r,o);break;case 22:o.mode&1?(Ge=(a=Ge)||o.memoizedState!==null,Dn(t,r,o),Ge=a):Dn(t,r,o);break;default:Dn(t,r,o)}}function Hf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new _v),r.forEach(function(a){var c=Nv.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Dt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:je=_.stateNode,Ot=!1;break e;case 3:je=_.stateNode.containerInfo,Ot=!0;break e;case 4:je=_.stateNode.containerInfo,Ot=!0;break e}_=_.return}if(je===null)throw Error(n(160));Bf(h,p,c),je=null,Ot=!1;var y=c.alternate;y!==null&&(y.return=null),c.return=null}catch(T){Ie(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)$f(r,t),r=r.sibling}function $f(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(r,t),qt(t),a&4){try{Xi(3,t,t.return),To(3,t)}catch(V){Ie(t,t.return,V)}try{Xi(5,t,t.return)}catch(V){Ie(t,t.return,V)}}break;case 1:Dt(r,t),qt(t),a&512&&o!==null&&Kr(o,o.return);break;case 5:if(Dt(r,t),qt(t),a&512&&o!==null&&Kr(o,o.return),t.flags&32){var c=t.stateNode;try{yi(c,"")}catch(V){Ie(t,t.return,V)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,y=t.updateQueue;if(t.updateQueue=null,y!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&yd(c,h),$l(_,p);var T=$l(_,h);for(p=0;p<y.length;p+=2){var P=y[p],x=y[p+1];P==="style"?Td(c,x):P==="dangerouslySetInnerHTML"?Id(c,x):P==="children"?yi(c,x):qe(c,P,x,T)}switch(_){case"input":jl(c,h);break;case"textarea":Ed(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var U=h.value;U!=null?Tr(c,!!h.multiple,U,!1):N!==!!h.multiple&&(h.defaultValue!=null?Tr(c,!!h.multiple,h.defaultValue,!0):Tr(c,!!h.multiple,h.multiple?[]:"",!1))}c[ji]=h}catch(V){Ie(t,t.return,V)}}break;case 6:if(Dt(r,t),qt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(V){Ie(t,t.return,V)}}break;case 3:if(Dt(r,t),qt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Pi(r.containerInfo)}catch(V){Ie(t,t.return,V)}break;case 4:Dt(r,t),qt(t);break;case 13:Dt(r,t),qt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(_u=Te())),a&4&&Hf(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(Ge=(T=Ge)||P,Dt(r,t),Ge=T):Dt(r,t),qt(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!P&&(t.mode&1)!==0)for(z=t,P=t.child;P!==null;){for(x=z=P;z!==null;){switch(N=z,U=N.child,N.tag){case 0:case 11:case 14:case 15:Xi(4,N,N.return);break;case 1:Kr(N,N.return);var W=N.stateNode;if(typeof W.componentWillUnmount=="function"){a=N,o=N.return;try{r=a,W.props=r.memoizedProps,W.state=r.memoizedState,W.componentWillUnmount()}catch(V){Ie(a,o,V)}}break;case 5:Kr(N,N.return);break;case 22:if(N.memoizedState!==null){qf(x);continue}}U!==null?(U.return=N,z=U):qf(x)}P=P.sibling}e:for(P=null,x=t;;){if(x.tag===5){if(P===null){P=x;try{c=x.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=x.stateNode,y=x.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null,_.style.display=kd("display",p))}catch(V){Ie(t,t.return,V)}}}else if(x.tag===6){if(P===null)try{x.stateNode.nodeValue=T?"":x.memoizedProps}catch(V){Ie(t,t.return,V)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===t)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;P===x&&(P=null),x=x.return}P===x&&(P=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Dt(r,t),qt(t),a&4&&Hf(t);break;case 21:break;default:Dt(r,t),qt(t)}}function qt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Wf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(yi(c,""),a.flags&=-33);var h=Vf(t);pu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=Vf(t);fu(t,_,p);break;default:throw Error(n(161))}}catch(y){Ie(t,t.return,y)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function vv(t,r,o){z=t,Gf(t)}function Gf(t,r,o){for(var a=(t.mode&1)!==0;z!==null;){var c=z,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||ko;if(!p){var _=c.alternate,y=_!==null&&_.memoizedState!==null||Ge;_=ko;var T=Ge;if(ko=p,(Ge=y)&&!T)for(z=c;z!==null;)p=z,y=p.child,p.tag===22&&p.memoizedState!==null?Qf(c):y!==null?(y.return=p,z=y):Qf(c);for(;h!==null;)z=h,Gf(h),h=h.sibling;z=c,ko=_,Ge=T}Kf(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,z=h):Kf(t)}}function Kf(t){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ge||To(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Ge)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:At(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Kh(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Kh(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var y=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var P=T.memoizedState;if(P!==null){var x=P.dehydrated;x!==null&&Pi(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ge||r.flags&512&&hu(r)}catch(N){Ie(r,r.return,N)}}if(r===t){z=null;break}if(o=r.sibling,o!==null){o.return=r.return,z=o;break}z=r.return}}function qf(t){for(;z!==null;){var r=z;if(r===t){z=null;break}var o=r.sibling;if(o!==null){o.return=r.return,z=o;break}z=r.return}}function Qf(t){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{To(4,r)}catch(y){Ie(r,o,y)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(y){Ie(r,c,y)}}var h=r.return;try{hu(r)}catch(y){Ie(r,h,y)}break;case 5:var p=r.return;try{hu(r)}catch(y){Ie(r,p,y)}}}catch(y){Ie(r,r.return,y)}if(r===t){z=null;break}var _=r.sibling;if(_!==null){_.return=r.return,z=_;break}z=r.return}}var wv=Math.ceil,No=Oe.ReactCurrentDispatcher,mu=Oe.ReactCurrentOwner,It=Oe.ReactCurrentBatchConfig,re=0,Le=null,Re=null,We=0,_t=0,qr=Rn(0),xe=0,Ji=null,or=0,Ro=0,gu=0,Zi=null,st=null,_u=0,Qr=1/0,on=null,Po=!1,yu=null,Ln=null,xo=!1,Mn=null,Ao=0,es=0,vu=null,Oo=-1,Do=0;function Xe(){return(re&6)!==0?Te():Oo!==-1?Oo:Oo=Te()}function Fn(t){return(t.mode&1)===0?1:(re&2)!==0&&We!==0?We&-We:rv.transition!==null?(Do===0&&(Do=Wd()),Do):(t=ue,t!==0||(t=window.event,t=t===void 0?16:Yd(t.type)),t)}function Lt(t,r,o,a){if(50<es)throw es=0,vu=null,Error(n(185));Ii(t,o,a),((re&2)===0||t!==Le)&&(t===Le&&((re&2)===0&&(Ro|=o),xe===4&&bn(t,We)),ot(t,a),o===1&&re===0&&(r.mode&1)===0&&(Qr=Te()+500,oo&&xn()))}function ot(t,r){var o=t.callbackNode;ry(t,r);var a=Ws(t,t===Le?We:0);if(a===0)o!==null&&Ud(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Ud(o),r===1)t.tag===0?nv(Xf.bind(null,t)):Mh(Xf.bind(null,t)),Jy(function(){(re&6)===0&&xn()}),o=null;else{switch(Vd(a)){case 1:o=Jl;break;case 4:o=zd;break;case 16:o=bs;break;case 536870912:o=jd;break;default:o=bs}o=sp(o,Yf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Yf(t,r){if(Oo=-1,Do=0,(re&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Yr()&&t.callbackNode!==o)return null;var a=Ws(t,t===Le?We:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||r)r=Lo(t,a);else{r=a;var c=re;re|=2;var h=Zf();(Le!==t||We!==r)&&(on=null,Qr=Te()+500,ar(t,r));do try{Cv();break}catch(_){Jf(t,_)}while(!0);ba(),No.current=h,re=c,Re!==null?r=0:(Le=null,We=0,r=xe)}if(r!==0){if(r===2&&(c=Zl(t),c!==0&&(a=c,r=wu(t,c))),r===1)throw o=Ji,ar(t,0),bn(t,a),ot(t,Te()),o;if(r===6)bn(t,a);else{if(c=t.current.alternate,(a&30)===0&&!Ev(c)&&(r=Lo(t,a),r===2&&(h=Zl(t),h!==0&&(a=h,r=wu(t,h))),r===1))throw o=Ji,ar(t,0),bn(t,a),ot(t,Te()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:ur(t,st,on);break;case 3:if(bn(t,a),(a&130023424)===a&&(r=_u+500-Te(),10<r)){if(Ws(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Xe(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ta(ur.bind(null,t,st,on),r);break}ur(t,st,on);break;case 4:if(bn(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-Rt(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Te()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*wv(a/1960))-a,10<a){t.timeoutHandle=Ta(ur.bind(null,t,st,on),a);break}ur(t,st,on);break;case 5:ur(t,st,on);break;default:throw Error(n(329))}}}return ot(t,Te()),t.callbackNode===o?Yf.bind(null,t):null}function wu(t,r){var o=Zi;return t.current.memoizedState.isDehydrated&&(ar(t,r).flags|=256),t=Lo(t,r),t!==2&&(r=st,st=o,r!==null&&Eu(r)),t}function Eu(t){st===null?st=t:st.push.apply(st,t)}function Ev(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!Pt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function bn(t,r){for(r&=~gu,r&=~Ro,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Rt(r),a=1<<o;t[o]=-1,r&=~a}}function Xf(t){if((re&6)!==0)throw Error(n(327));Yr();var r=Ws(t,0);if((r&1)===0)return ot(t,Te()),null;var o=Lo(t,r);if(t.tag!==0&&o===2){var a=Zl(t);a!==0&&(r=a,o=wu(t,a))}if(o===1)throw o=Ji,ar(t,0),bn(t,r),ot(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ur(t,st,on),ot(t,Te()),null}function Su(t,r){var o=re;re|=1;try{return t(r)}finally{re=o,re===0&&(Qr=Te()+500,oo&&xn())}}function lr(t){Mn!==null&&Mn.tag===0&&(re&6)===0&&Yr();var r=re;re|=1;var o=It.transition,a=ue;try{if(It.transition=null,ue=1,t)return t()}finally{ue=a,It.transition=o,re=r,(re&6)===0&&xn()}}function Cu(){_t=qr.current,ge(qr)}function ar(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Xy(o)),Re!==null)for(o=Re.return;o!==null;){var a=o;switch(Oa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&io();break;case 3:$r(),ge(nt),ge(Be),$a();break;case 5:Ba(a);break;case 4:$r();break;case 13:ge(Ee);break;case 19:ge(Ee);break;case 10:Ua(a.type._context);break;case 22:case 23:Cu()}o=o.return}if(Le=t,Re=t=Un(t.current,null),We=_t=r,xe=0,Ji=null,gu=Ro=or=0,st=Zi=null,rr!==null){for(r=0;r<rr.length;r++)if(o=rr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}rr=null}return t}function Jf(t,r){do{var o=Re;try{if(ba(),_o.current=Eo,yo){for(var a=Se.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}yo=!1}if(sr=0,De=Pe=Se=null,Gi=!1,Ki=0,mu.current=null,o===null||o.return===null){xe=1,Ji=r,Re=null;break}e:{var h=t,p=o.return,_=o,y=r;if(r=We,_.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var T=y,P=_,x=P.tag;if((P.mode&1)===0&&(x===0||x===11||x===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var U=Cf(p);if(U!==null){U.flags&=-257,If(U,p,_,h,r),U.mode&1&&Sf(h,T,r),r=U,y=T;var W=r.updateQueue;if(W===null){var V=new Set;V.add(y),r.updateQueue=V}else W.add(y);break e}else{if((r&1)===0){Sf(h,T,r),Iu();break e}y=Error(n(426))}}else if(we&&_.mode&1){var Ne=Cf(p);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),If(Ne,p,_,h,r),Ma(Gr(y,_));break e}}h=y=Gr(y,_),xe!==4&&(xe=2),Zi===null?Zi=[h]:Zi.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=wf(h,y,r);Gh(h,I);break e;case 1:_=y;var w=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Ln===null||!Ln.has(k)))){h.flags|=65536,r&=-r,h.lanes|=r;var D=Ef(h,_,r);Gh(h,D);break e}}h=h.return}while(h!==null)}tp(o)}catch(B){r=B,Re===o&&o!==null&&(Re=o=o.return);continue}break}while(!0)}function Zf(){var t=No.current;return No.current=Eo,t===null?Eo:t}function Iu(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||(or&268435455)===0&&(Ro&268435455)===0||bn(Le,We)}function Lo(t,r){var o=re;re|=2;var a=Zf();(Le!==t||We!==r)&&(on=null,ar(t,r));do try{Sv();break}catch(c){Jf(t,c)}while(!0);if(ba(),re=o,No.current=a,Re!==null)throw Error(n(261));return Le=null,We=0,xe}function Sv(){for(;Re!==null;)ep(Re)}function Cv(){for(;Re!==null&&!q_();)ep(Re)}function ep(t){var r=ip(t.alternate,t,_t);t.memoizedProps=t.pendingProps,r===null?tp(t):Re=r,mu.current=null}function tp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=mv(o,r,_t),o!==null){Re=o;return}}else{if(o=gv(o,r),o!==null){o.flags&=32767,Re=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Re=null;return}}if(r=r.sibling,r!==null){Re=r;return}Re=r=t}while(r!==null);xe===0&&(xe=5)}function ur(t,r,o){var a=ue,c=It.transition;try{It.transition=null,ue=1,Iv(t,r,o,a)}finally{It.transition=c,ue=a}return null}function Iv(t,r,o,a){do Yr();while(Mn!==null);if((re&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(iy(t,h),t===Le&&(Re=Le=null,We=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xo||(xo=!0,sp(bs,function(){return Yr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=It.transition,It.transition=null;var p=ue;ue=1;var _=re;re|=4,mu.current=null,yv(t,o),$f(o,t),Hy(Ia),Hs=!!Ca,Ia=Ca=null,t.current=o,vv(o),Q_(),re=_,ue=p,It.transition=h}else t.current=o;if(xo&&(xo=!1,Mn=t,Ao=c),h=t.pendingLanes,h===0&&(Ln=null),J_(o.stateNode),ot(t,Te()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Po)throw Po=!1,t=yu,yu=null,t;return(Ao&1)!==0&&t.tag!==0&&Yr(),h=t.pendingLanes,(h&1)!==0?t===vu?es++:(es=0,vu=t):es=0,xn(),null}function Yr(){if(Mn!==null){var t=Vd(Ao),r=It.transition,o=ue;try{if(It.transition=null,ue=16>t?16:t,Mn===null)var a=!1;else{if(t=Mn,Mn=null,Ao=0,(re&6)!==0)throw Error(n(331));var c=re;for(re|=4,z=t.current;z!==null;){var h=z,p=h.child;if((z.flags&16)!==0){var _=h.deletions;if(_!==null){for(var y=0;y<_.length;y++){var T=_[y];for(z=T;z!==null;){var P=z;switch(P.tag){case 0:case 11:case 15:Xi(8,P,h)}var x=P.child;if(x!==null)x.return=P,z=x;else for(;z!==null;){P=z;var N=P.sibling,U=P.return;if(jf(P),P===T){z=null;break}if(N!==null){N.return=U,z=N;break}z=U}}}var W=h.alternate;if(W!==null){var V=W.child;if(V!==null){W.child=null;do{var Ne=V.sibling;V.sibling=null,V=Ne}while(V!==null)}}z=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,z=p;else e:for(;z!==null;){if(h=z,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Xi(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,z=I;break e}z=h.return}}var w=t.current;for(z=w;z!==null;){p=z;var k=p.child;if((p.subtreeFlags&2064)!==0&&k!==null)k.return=p,z=k;else e:for(p=w;z!==null;){if(_=z,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:To(9,_)}}catch(B){Ie(_,_.return,B)}if(_===p){z=null;break e}var D=_.sibling;if(D!==null){D.return=_.return,z=D;break e}z=_.return}}if(re=c,xn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Us,t)}catch{}a=!0}return a}finally{ue=o,It.transition=r}}return!1}function np(t,r,o){r=Gr(o,r),r=wf(t,r,1),t=On(t,r,1),r=Xe(),t!==null&&(Ii(t,1,r),ot(t,r))}function Ie(t,r,o){if(t.tag===3)np(t,t,o);else for(;r!==null;){if(r.tag===3){np(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=Gr(o,t),t=Ef(r,t,1),r=On(r,t,1),t=Xe(),r!==null&&(Ii(r,1,t),ot(r,t));break}}r=r.return}}function kv(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Xe(),t.pingedLanes|=t.suspendedLanes&o,Le===t&&(We&o)===o&&(xe===4||xe===3&&(We&130023424)===We&&500>Te()-_u?ar(t,0):gu|=o),ot(t,r)}function rp(t,r){r===0&&((t.mode&1)===0?r=1:(r=js,js<<=1,(js&130023424)===0&&(js=4194304)));var o=Xe();t=nn(t,r),t!==null&&(Ii(t,r,o),ot(t,o))}function Tv(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),rp(t,o)}function Nv(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),rp(t,o)}var ip;ip=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||nt.current)it=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return it=!1,pv(t,r,o);it=(t.flags&131072)!==0}else it=!1,we&&(r.flags&1048576)!==0&&Fh(r,ao,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Io(t,r),t=r.pendingProps;var c=Ur(r,Be.current);Hr(r,o),c=qa(null,r,a,t,c,o);var h=Qa();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,rt(a)?(h=!0,so(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Wa(r),c.updater=So,r.stateNode=c,c._reactInternals=r,tu(r,a,t,o),r=su(null,r,a,!0,h,o)):(r.tag=0,we&&h&&Aa(r),Ye(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Io(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Pv(a),t=At(a,t),c){case 0:r=iu(null,r,a,t,o);break e;case 1:r=xf(null,r,a,t,o);break e;case 11:r=kf(null,r,a,t,o);break e;case 14:r=Tf(null,r,a,At(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:At(a,c),iu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:At(a,c),xf(t,r,a,c,o);case 3:e:{if(Af(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,$h(t,r),mo(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Gr(Error(n(423)),r),r=Of(t,r,a,o,c);break e}else if(a!==c){c=Gr(Error(n(424)),r),r=Of(t,r,a,o,c);break e}else for(gt=Nn(r.stateNode.containerInfo.firstChild),mt=r,we=!0,xt=null,o=Bh(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Wr(),a===c){r=sn(t,r,o);break e}Ye(t,r,a,o)}r=r.child}return r;case 5:return qh(r),t===null&&La(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,ka(a,c)?p=null:h!==null&&ka(a,h)&&(r.flags|=32),Pf(t,r),Ye(t,r,p,o),r.child;case 6:return t===null&&La(r),null;case 13:return Df(t,r,o);case 4:return Va(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Vr(r,null,a,o):Ye(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:At(a,c),kf(t,r,a,c,o);case 7:return Ye(t,r,r.pendingProps,o),r.child;case 8:return Ye(t,r,r.pendingProps.children,o),r.child;case 12:return Ye(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,fe(ho,a._currentValue),a._currentValue=p,h!==null)if(Pt(h.value,p)){if(h.children===c.children&&!nt.current){r=sn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var y=_.firstContext;y!==null;){if(y.context===a){if(h.tag===1){y=rn(-1,o&-o),y.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var P=T.pending;P===null?y.next=y:(y.next=P.next,P.next=y),T.pending=y}}h.lanes|=o,y=h.alternate,y!==null&&(y.lanes|=o),za(h.return,o,r),_.lanes|=o;break}y=y.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),za(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}Ye(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Hr(r,o),c=St(c),a=a(c),r.flags|=1,Ye(t,r,a,o),r.child;case 14:return a=r.type,c=At(a,r.pendingProps),c=At(a.type,c),Tf(t,r,a,c,o);case 15:return Nf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:At(a,c),Io(t,r),r.tag=1,rt(a)?(t=!0,so(r)):t=!1,Hr(r,o),yf(r,a,c),tu(r,a,c,o),su(null,r,a,!0,t,o);case 19:return Mf(t,r,o);case 22:return Rf(t,r,o)}throw Error(n(156,r.tag))};function sp(t,r){return bd(t,r)}function Rv(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,r,o,a){return new Rv(t,r,o,a)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pv(t){if(typeof t=="function")return ku(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vt)return 11;if(t===Bt)return 14}return 2}function Un(t,r){var o=t.alternate;return o===null?(o=kt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Mo(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")ku(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case et:return cr(o.children,c,h,r);case vt:p=8,c|=8;break;case wn:return t=kt(12,o,r,c|2),t.elementType=wn,t.lanes=h,t;case ht:return t=kt(13,o,r,c),t.elementType=ht,t.lanes=h,t;case Nt:return t=kt(19,o,r,c),t.elementType=Nt,t.lanes=h,t;case Ce:return Fo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xt:p=10;break e;case Xn:p=9;break e;case Vt:p=11;break e;case Bt:p=14;break e;case tt:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=kt(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function cr(t,r,o,a){return t=kt(7,t,a,r),t.lanes=o,t}function Fo(t,r,o,a){return t=kt(22,t,a,r),t.elementType=Ce,t.lanes=o,t.stateNode={isHidden:!1},t}function Tu(t,r,o){return t=kt(6,t,null,r),t.lanes=o,t}function Nu(t,r,o){return r=kt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function xv(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ru(t,r,o,a,c,h,p,_,y){return t=new xv(t,r,o,_,y),r===1?(r=1,h===!0&&(r|=8)):r=0,h=kt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(h),t}function Av(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qe,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function op(t){if(!t)return Pn;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(rt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(rt(o))return Dh(t,o,r)}return r}function lp(t,r,o,a,c,h,p,_,y){return t=Ru(o,a,!0,t,c,h,p,_,y),t.context=op(null),o=t.current,a=Xe(),c=Fn(o),h=rn(a,c),h.callback=r??null,On(o,h,c),t.current.lanes=c,Ii(t,c,a),ot(t,a),t}function bo(t,r,o,a){var c=r.current,h=Xe(),p=Fn(c);return o=op(o),r.context===null?r.context=o:r.pendingContext=o,r=rn(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=On(c,r,p),t!==null&&(Lt(t,c,p,h),po(t,c,p)),p}function Uo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Pu(t,r){ap(t,r),(t=t.alternate)&&ap(t,r)}function Ov(){return null}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}zo.prototype.render=xu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));bo(t,r,null,null)},zo.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;lr(function(){bo(null,t,null,null)}),r[Jt]=null}};function zo(t){this._internalRoot=t}zo.prototype.unstable_scheduleHydration=function(t){if(t){var r=$d();t={blockedOn:null,target:t,priority:r};for(var o=0;o<In.length&&r!==0&&r<In[o].priority;o++);In.splice(o,0,t),o===0&&qd(t)}};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Dv(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Uo(p);h.call(T)}}var p=lp(r,a,t,0,null,!1,!1,"",cp);return t._reactRootContainer=p,t[Jt]=p.current,Ui(t.nodeType===8?t.parentNode:t),lr(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var T=Uo(y);_.call(T)}}var y=Ru(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=y,t[Jt]=y.current,Ui(t.nodeType===8?t.parentNode:t),lr(function(){bo(r,y,o,a)}),y}function Wo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var y=Uo(p);_.call(y)}}bo(r,p,t,c)}else p=Dv(o,r,t,c,a);return Uo(p)}Bd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ci(r.pendingLanes);o!==0&&(ta(r,o|1),ot(r,Te()),(re&6)===0&&(Qr=Te()+500,xn()))}break;case 13:lr(function(){var a=nn(t,1);if(a!==null){var c=Xe();Lt(a,t,1,c)}}),Pu(t,1)}},na=function(t){if(t.tag===13){var r=nn(t,134217728);if(r!==null){var o=Xe();Lt(r,t,134217728,o)}Pu(t,134217728)}},Hd=function(t){if(t.tag===13){var r=Fn(t),o=nn(t,r);if(o!==null){var a=Xe();Lt(o,t,r,a)}Pu(t,r)}},$d=function(){return ue},Gd=function(t,r){var o=ue;try{return ue=t,r()}finally{ue=o}},ql=function(t,r,o){switch(r){case"input":if(jl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=ro(a);if(!c)throw Error(n(90));gd(a),jl(a,c)}}}break;case"textarea":Ed(t,o);break;case"select":r=o.value,r!=null&&Tr(t,!!o.multiple,r,!1)}},xd=Su,Ad=lr;var Lv={usingClientEntryPoint:!1,Events:[Wi,Fr,ro,Rd,Pd,Su]},ts={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Md(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Us=Vo.inject(Mv),Ht=Vo}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv,lt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(r))throw Error(n(200));return Av(t,r,null,o)},lt.createRoot=function(t,r){if(!Au(t))throw Error(n(299));var o=!1,a="",c=up;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Ru(t,1,!1,null,null,o,!1,a,c),t[Jt]=r.current,Ui(t.nodeType===8?t.parentNode:t),new xu(r)},lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Md(r),t=t===null?null:t.stateNode,t},lt.flushSync=function(t){return lr(t)},lt.hydrate=function(t,r,o){if(!jo(r))throw Error(n(200));return Wo(null,t,r,!0,o)},lt.hydrateRoot=function(t,r,o){if(!Au(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=up;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=lp(r,null,t,1,o??null,c,!1,h,p),t[Jt]=r.current,Ui(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new zo(r)},lt.render=function(t,r,o){if(!jo(r))throw Error(n(200));return Wo(null,t,r,!1,o)},lt.unmountComponentAtNode=function(t){if(!jo(t))throw Error(n(40));return t._reactRootContainer?(lr(function(){Wo(null,null,t,!1,function(){t._reactRootContainer=null,t[Jt]=null})}),!0):!1},lt.unstable_batchedUpdates=Su,lt.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wo(t,r,o,!1,a)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var yp;function Bv(){if(yp)return Lu.exports;yp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lu.exports=Vv(),Lu.exports}var vp;function Hv(){if(vp)return Bo;vp=1;var i=Bv();return Bo.createRoot=i.createRoot,Bo.hydrateRoot=i.hydrateRoot,Bo}var $v=Hv();/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=()=>{};var wp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(i,e){if(!i)throw ci(e)},ci=function(i){return new Error("Firebase Database ("+xm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Kv=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,E=u>>2,v=(u&3)<<4|f>>4;let S=(f&15)<<2|g>>6,O=g&63;m||(O=64,d||(S=64)),s.push(n[E],n[v],n[S],n[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Am(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Kv(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||v==null)throw new qv;const S=u<<2|f>>4;if(s.push(S),g!==64){const O=f<<4&240|g>>2;if(s.push(O),v!==64){const F=g<<6&192|v;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class qv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Om=function(i){const e=Am(i);return wc.encodeByteArray(e,!0)},Zo=function(i){return Om(i).replace(/\./g,"")},el=function(i){try{return wc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(i){return Dm(void 0,i)}function Dm(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yv(n)||(i[n]=Dm(i[n],e[n]));return i}function Yv(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=()=>Xv().__FIREBASE_DEFAULTS__,Zv=()=>{if(typeof process>"u"||typeof wp>"u")return;const i=wp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ew=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&el(i[1]);return e&&JSON.parse(e)},Ec=()=>{try{return Gv()||Jv()||Zv()||ew()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Lm=i=>{var e,n;return(n=(e=Ec())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},tw=i=>{const e=Lm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Mm=()=>{var i;return(i=Ec())==null?void 0:i.config},Fm=i=>{var e;return(e=Ec())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Zo(JSON.stringify(n)),Zo(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function rw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const i=Ze();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ow(){return xm.NODE_ADMIN===!0}function lw(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="FirebaseError";class Qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uw,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?cw(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Qn(l,f,s)}}function cw(i,e){try{let n=0,s="";for(;n<i.length;){const l=i.indexOf("{$",n);if(l===-1){s+=i.substring(n);break}const u=i.indexOf("}",l+2);if(u===-1){s+=i.substring(n);break}const d=i.substring(l+2,u),f=e[d];s+=i.substring(n,l)+(f!=null?String(f):`<${d}?>`),n=u+1}return s}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(i){return JSON.parse(i)}function Ue(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=fs(el(u[0])||""),n=fs(el(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},dw=function(i){const e=Um(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hw=function(i){const e=Um(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ii(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Ju(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function tl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function yr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Ep(u)&&Ep(d)){if(!yr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Ep(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const S=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(S<<1|S>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,E;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),E=1518500249):(g=u^d^f,E=1859775393):v<60?(g=u&d|f&(u|d),E=2400959708):(g=u^d^f,E=3395469782);const S=(l<<5|l>>>27)+g+m+E+s[v]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=S}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function pw(i,e){const n=new mw(i,e);return n.subscribe.bind(n)}class mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=bu),l.error===void 0&&(l.error=bu),l.complete===void 0&&(l.complete=bu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gw(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function bu(){}function Cc(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,M(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Tl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zm(i){return(await fetch(i,{credentials:"include"})).ok}class vr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new kl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ww(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vw(i){return i===dr?void 0:i}function ww(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ce||(ce={}));const Sw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Cw=ce.INFO,Iw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},kw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=Iw[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=Cw,this._logHandler=kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Tw=(i,e)=>e.some(n=>i instanceof n);let Sp,Cp;function Nw(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rw(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jm=new WeakMap,Zu=new WeakMap,Wm=new WeakMap,Uu=new WeakMap,kc=new WeakMap;function Pw(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Hn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&jm.set(n,i)}).catch(()=>{}),kc.set(e,i),e}function xw(i){if(Zu.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Zu.set(i,e)}let ec={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Zu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Wm.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Aw(i){ec=i(ec)}function Ow(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(zu(this),e,...n);return Wm.set(s,e.sort?e.sort():[e]),Hn(s)}:Rw().includes(i)?function(...e){return i.apply(zu(this),e),Hn(jm.get(this))}:function(...e){return Hn(i.apply(zu(this),e))}}function Dw(i){return typeof i=="function"?Ow(i):(i instanceof IDBTransaction&&xw(i),Tw(i,Nw())?new Proxy(i,ec):i)}function Hn(i){if(i instanceof IDBRequest)return Pw(i);if(Uu.has(i))return Uu.get(i);const e=Dw(i);return e!==i&&(Uu.set(i,e),kc.set(e,i)),e}const zu=i=>kc.get(i);function Lw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Hn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Hn(d.result),m.oldVersion,m.newVersion,Hn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Mw=["get","getKey","getAll","getAllKeys","count"],Fw=["put","add","delete","clear"],ju=new Map;function Ip(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=Fw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Mw.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return ju.set(e,u),u}Aw(i=>({...i,get:(e,n,s)=>Ip(e,n)||i.get(e,n,s),has:(e,n)=>!!Ip(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Uw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",kp="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Ic("@firebase/app"),zw="@firebase/app-compat",jw="@firebase/analytics-compat",Ww="@firebase/analytics",Vw="@firebase/app-check-compat",Bw="@firebase/app-check",Hw="@firebase/auth",$w="@firebase/auth-compat",Gw="@firebase/database",Kw="@firebase/data-connect",qw="@firebase/database-compat",Qw="@firebase/functions",Yw="@firebase/functions-compat",Xw="@firebase/installations",Jw="@firebase/installations-compat",Zw="@firebase/messaging",eE="@firebase/messaging-compat",tE="@firebase/performance",nE="@firebase/performance-compat",rE="@firebase/remote-config",iE="@firebase/remote-config-compat",sE="@firebase/storage",oE="@firebase/storage-compat",lE="@firebase/firestore",aE="@firebase/ai",uE="@firebase/firestore-compat",cE="firebase",dE="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",hE={[tc]:"fire-core",[zw]:"fire-core-compat",[Ww]:"fire-analytics",[jw]:"fire-analytics-compat",[Bw]:"fire-app-check",[Vw]:"fire-app-check-compat",[Hw]:"fire-auth",[$w]:"fire-auth-compat",[Gw]:"fire-rtdb",[Kw]:"fire-data-connect",[qw]:"fire-rtdb-compat",[Qw]:"fire-fn",[Yw]:"fire-fn-compat",[Xw]:"fire-iid",[Jw]:"fire-iid-compat",[Zw]:"fire-fcm",[eE]:"fire-fcm-compat",[tE]:"fire-perf",[nE]:"fire-perf-compat",[rE]:"fire-rc",[iE]:"fire-rc-compat",[sE]:"fire-gcs",[oE]:"fire-gcs-compat",[lE]:"fire-fst",[uE]:"fire-fst-compat",[aE]:"fire-vertex","fire-js":"fire-js",[cE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map,fE=new Map,rc=new Map;function Tp(i,e){try{i.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function si(i){const e=i.name;if(rc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,i);for(const n of nl.values())Tp(n,i);for(const n of fE.values())Tp(n,i);return!0}function Tc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Mt(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Ss("app","Firebase",pE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=dE;function Vm(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:nc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw cn.create("bad-app-name",{appName:String(l)});if(n||(n=Mm()),!n)throw cn.create("no-options");const u=nl.get(l);if(u)if(yr(n,u.options)){if(yr(s,u.config))return u;throw cn.create("duplicate-app",{appName:l,mismatchedParam:"config",oldValue:JSON.stringify(u.config),newValue:JSON.stringify(s)})}else throw cn.create("duplicate-app",{appName:l,mismatchedParam:"options",oldValue:JSON.stringify(u.options),newValue:JSON.stringify(n)});const d=new Ew(l);for(const m of rc.values())d.addComponent(m);const f=new mE(n,s,d);return nl.set(l,f),f}function Bm(i=nc){const e=nl.get(i);if(!e&&i===nc&&Mm())return Vm();if(!e)throw cn.create("no-app",{appName:i});return e}function $n(i,e,n){let s=hE[i]??i;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(d.join(" "));return}si(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="firebase-heartbeat-database",_E=1,ps="firebase-heartbeat-store";let Wu=null;function Hm(){return Wu||(Wu=Lw(gE,_E,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(i=>{throw cn.create("idb-open",{originalErrorMessage:i.message})})),Wu}async function yE(i){try{const n=(await Hm()).transaction(ps),s=await n.objectStore(ps).get($m(i));return await n.done,s}catch(e){if(e instanceof Qn)mn.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function Np(i,e){try{const s=(await Hm()).transaction(ps,"readwrite");await s.objectStore(ps).put(e,$m(i)),await s.done}catch(n){if(n instanceof Qn)mn.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(s.message)}}}function $m(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=1024,wE=30;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Rp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>wE){const d=IE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rp(),{heartbeatsToSend:s,unsentEntries:l}=SE(this._heartbeatsCache.heartbeats),u=Zo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return mn.warn(n),""}}}function Rp(){return new Date().toISOString().substring(0,10)}function SE(i,e=vE){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Pp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Pp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class CE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lw()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pp(i){return Zo(JSON.stringify({version:2,heartbeats:i})).length}function IE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(i){si(new vr("platform-logger",e=>new bw(e),"PRIVATE")),si(new vr("heartbeat",e=>new EE(e),"PRIVATE")),$n(tc,kp,i),$n(tc,kp,"esm2020"),$n("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kE("");function Gm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TE=Gm,Km=new Ss("auth","Firebase",Gm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Ic("@firebase/auth");function Ko(i,...e){rl.logLevel<=ce.WARN&&rl.warn(`Auth (${hi}): ${i}`,...e)}function qo(i,...e){rl.logLevel<=ce.ERROR&&rl.error(`Auth (${hi}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(i,...e){throw Nc(i,...e)}function jt(i,...e){return Nc(i,...e)}function Nl(i,e,n){const s={...TE(),[e]:n};return new Ss("auth","Firebase",s).create(e,{appName:i.name})}function gr(i){return Nl(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NE(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yt(i,"argument-error"),Nl(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Km.create(i,...e)}function Y(i,e,...n){if(!i)throw Nc(e,...n)}function dn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw qo(e),new Error(e)}function gn(i,e){i||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function RE(){return xp()==="http:"||xp()==="https:"}function xp(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RE()||iw()||"connection"in navigator)?navigator.onLine:!0}function xE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sc()||bm()}get(){return PE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(i,e){gn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DE=new Is(3e4,6e4);function Pc(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function fi(i,e,n,s,l={}){return Qm(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=di({...d,key:i.config.apiKey}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:m,...u};return rw()||(g.referrerPolicy="strict-origin-when-cross-origin"),i.emulatorConfig&&Cs(i.emulatorConfig.host)&&(g.credentials="include"),qm.fetch()(await Ym(i,i.config.apiHost,n,f),g)})}async function Qm(i,e,n){i._canInitEmulator=!1;const s={...AE,...e};try{const l=new ME(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Ho(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw Ho(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw Ho(i,"user-disabled",d);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Nl(i,E,g);Yt(i,E)}}catch(l){if(l instanceof Qn)throw l;Yt(i,"network-request-failed",{message:String(l)})}}async function LE(i,e,n,s,l={}){const u=await fi(i,e,n,s,l);return"mfaPendingCredential"in u&&Yt(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ym(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Rc(i.config,l):`${i.config.apiScheme}://${l}`;return OE.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class ME{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),DE.get())})}}function Ho(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=jt(i,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FE(i,e){return fi(i,"POST","/v1/accounts:delete",e)}async function il(i,e){return fi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bE(i,e=!1){const n=yt(i),s=await n.getIdToken(e),l=xc(s);Y(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ls(Vu(l.auth_time)),issuedAtTime:ls(Vu(l.iat)),expirationTime:ls(Vu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Vu(i){return Number(i)*1e3}function xc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return qo("JWT malformed, contained fewer than 3 sections"),null;try{const l=el(n);return l?JSON.parse(l):(qo("Failed to decode base64 JWT payload"),null)}catch(l){return qo("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Ap(i){const e=xc(i);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Qn&&UE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function UE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(i){var v;const e=i.auth,n=await i.getIdToken(),s=await ms(i,il(e,{idToken:n}));Y(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];i._notifyReloadListener(l);const u=(v=l.providerUserInfo)!=null&&v.length?Xm(l.providerUserInfo):[],d=WE(i.providerData,u),f=i.isAnonymous,m=!(i.email&&l.passwordHash)&&!(d!=null&&d.length),g=f?m:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new sc(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(i,E)}async function jE(i){const e=yt(i);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WE(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Xm(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(i,e){const n=await Qm(i,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await Ym(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:s};return i.emulatorConfig&&Cs(i.emulatorConfig.host)&&(m.credentials="include"),qm.fetch()(d,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BE(i,e){return fi(i,"POST","/v2/accounts:revokeToken",Pc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Ap(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await VE(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Zr;return s&&(Y(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Y(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Y(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(i,e){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class bt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new zE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new sc(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bE(this,e)}reload(){return jE(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await ms(this,FE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:v,emailVerified:S,isAnonymous:O,providerData:F,stsTokenManager:L}=n;Y(v&&L,e,"internal-error");const H=Zr.fromJSON(this.name,L);Y(typeof v=="string",e,"internal-error"),jn(s,e.name),jn(l,e.name),Y(typeof S=="boolean",e,"internal-error"),Y(typeof O=="boolean",e,"internal-error"),jn(u,e.name),jn(d,e.name),jn(f,e.name),jn(m,e.name),jn(g,e.name),jn(E,e.name);const ye=new bt({uid:v,auth:e,email:l,emailVerified:S,displayName:s,isAnonymous:O,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:H,createdAt:g,lastLoginAt:E});return F&&Array.isArray(F)&&(ye.providerData=F.map(ze=>({...ze}))),m&&(ye._redirectEventId=m),ye}static async _fromIdTokenResponse(e,n,s=!1){const l=new Zr;l.updateFromServerResponse(n);const u=new bt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await sl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Y(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Xm(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Zr;f.updateFromIdToken(s);const m=new bt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new sc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Map;function hn(i){gn(i instanceof Function,"Expected a class definition");let e=Op.get(i);return e?(gn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Op.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jm.type="NONE";const Dp=Jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(i,e,n){return`firebase:${i}:${e}:${n}`}class _r{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Qo(this.userKey,l.apiKey,u),this.fullPersistenceKey=Qo("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await il(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,s="authUser"){if(!n.length)return new _r(hn(Dp),e,s);const l=(await Promise.all(n.map(async g=>{try{if(await g._isAvailable())return g}catch{return}}))).filter(g=>g);let u=l[0]||hn(Dp);const d=Qo(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const E=await g._get(d);if(E){let v;if(typeof E=="string"){const S=await il(e,{idToken:E}).catch(()=>{});if(!S)break;v=await bt._fromGetAccountInfoResponse(e,S,E)}else v=bt._fromJSON(e,E);g!==u&&(f=v),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new _r(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new _r(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(sg(e))return"Webos";if(eg(e))return"Safari";if((e.includes("chrome/")||tg(e))&&!e.includes("edge/"))return"Chrome";if(rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zm(i=Ze()){return/firefox\//i.test(i)}function eg(i=Ze()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tg(i=Ze()){return/crios\//i.test(i)}function ng(i=Ze()){return/iemobile/i.test(i)}function rg(i=Ze()){return/android/i.test(i)}function ig(i=Ze()){return/blackberry/i.test(i)}function sg(i=Ze()){return/webos/i.test(i)}function Ac(i=Ze()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function HE(i=Ze()){var e;return Ac(i)&&!!((e=window.navigator)!=null&&e.standalone)}function $E(){return sw()&&document.documentMode===10}function og(i=Ze()){return Ac(i)||rg(i)||sg(i)||ig(i)||/windows phone/i.test(i)||ng(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(i,e=[]){let n;switch(i){case"Browser":n=Lp(Ze());break;case"Worker":n=`${Lp(Ze())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(i,e={}){return fi(i,"GET","/v2/passwordPolicy",Pc(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=6;class QE{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mp(this),this.idTokenSubscription=new Mp(this),this.beforeStateQueue=new GE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Km,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted){try{this.persistenceManager=await _r.create(this,e)}catch(d){Ko(`Failed to initialize persistence: ${d}`),this.persistenceManager=await _r.create(this,[])}finally{(s=this._resolvePersistenceManagerAvailable)==null||s.call(this)}if(!this._deleted){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(d){Ko(`Failed to initialize current user: ${d}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await il(this,{idToken:e}),s=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Mt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,f=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(gr(this));const n=e?yt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KE(this),n=new QE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await BE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}).catch(m=>{if(!d)if(typeof n!="function"&&n.error)n.error(m);else if(s)s(m);else throw m}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const s=(n==null?void 0:n.message)||String(n),l=Nl(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw l.customData={originalError:n},l}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ko(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rl(i){return yt(i)}class Mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=pw(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XE(i){Oc=i}function JE(i){return Oc.loadJS(i)}function ZE(){return Oc.gapiScript}function eS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(i,e){const n=Tc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(yr(u,e??{}))return l;Yt(l,"already-initialized")}return n.initialize({options:e})}function nS(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rS(i,e,n){const s=Rl(i);Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=ag(e),{host:d,port:f}=iS(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},E=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Y(yr(g,s.config.emulator)&&yr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Cs(d)?zm(`${u}//${d}${m}`):sS()}function ag(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function iS(i){const e=ag(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Fp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Fp(d)}}}function Fp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function sS(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(i,e){return LE(i,"POST","/v1/accounts:signInWithIdp",Pc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="http://localhost";class wr extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new wr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ei(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:oS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ks{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ks{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ks{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await bt._fromIdTokenResponse(e,s,l),d=bp(s);return new oi({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=bp(s);return new oi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function bp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Qn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new ol(e,n,s,l)}}function cg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(i,u,e,s):u})}async function lS(i,e,n=!1){const s=await ms(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return oi._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(i,e,n=!1){const{auth:s}=i;if(Mt(s.app))return Promise.reject(gr(s));const l="reauthenticate";try{const u=await ms(i,cg(s,l,e,i),n);Y(u.idToken,s,"internal-error");const d=xc(u.idToken);Y(d,s,"internal-error");const{sub:f}=d;return Y(i.uid===f,s,"user-mismatch"),oi._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(i,e,n=!1){if(Mt(i.app))return Promise.reject(gr(i));const s="signIn",l=await cg(i,s,e),u=await oi._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function cS(i,e,n,s){return yt(i).onIdTokenChanged(e,n,s)}function dS(i,e,n){return yt(i).beforeAuthStateChanged(e,n)}function hS(i,e,n,s){return yt(i).onAuthStateChanged(e,n,s)}function fS(i){return yt(i).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=1e3,mS=10;class hg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);$E()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,mS):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hg.type="LOCAL";const gS=hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fg.type="SESSION";const pg=fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Pl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await _S(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=Lc("",20);l.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const S=v;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(S.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function vS(i){Qt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function wS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ES(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function SS(){return mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebaseLocalStorageDb",CS=1,al="firebaseLocalStorage",_g="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(i,e){return i.transaction([al],e?"readwrite":"readonly").objectStore(al)}function IS(){const i=indexedDB.deleteDatabase(gg);return new Ts(i).toPromise()}function yg(){const i=indexedDB.open(gg,CS);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(al,{keyPath:_g})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(al)?e(s):(s.close(),await IS(),e(await yg()))})})}async function Up(i,e,n){const s=xl(i,!0).put({[_g]:e,value:n});return new Ts(s).toPromise()}async function kS(i,e){const n=xl(i,!1).get(e),s=await new Ts(n).toPromise();return s===void 0?null:s.value}function zp(i,e){const n=xl(i,!0).delete(e);return new Ts(n).toPromise()}const TS=800,NS=3;class vg{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=yg(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NS)throw s;if(this.dbPromise){const l=this.dbPromise;this.dbPromise=null;try{(await l).close()}catch{}}}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(SS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new yS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ES()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Up(e,ll,"1"),await zp(e,ll)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Up(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(l=>{const u=xl(l,!1).getAll();return new Ts(u).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}catch(e){return this.isClosing||Ko(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}vg.type="LOCAL";const RS=vg;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(i,e){return e?hn(e):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PS(i){return uS(i.auth,new Mc(i),i.bypassAuthState)}function xS(i){const{auth:e,user:n}=i;return Y(n,e,"internal-error"),aS(n,new Mc(i),i.bypassAuthState)}async function AS(i){const{auth:e,user:n}=i;return Y(n,e,"internal-error"),lS(n,new Mc(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return xS;default:Yt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new Is(2e3,1e4);async function DS(i,e,n){if(Mt(i.app))return Promise.reject(jt(i,"operation-not-supported-in-this-environment"));const s=Rl(i);NE(i,e,Dc);const l=wg(s,n);return new fr(s,"signInViaPopup",e,l).executeNotNull()}class fr extends Eg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OS.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="pendingRedirect",Yo=new Map;class MS extends Eg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const s=await FS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FS(i,e){const n=zS(e),s=US(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function bS(i,e){Yo.set(i._key(),e)}function US(i){return hn(i._redirectPersistence)}function zS(i){return Qo(LS,i.config.apiKey,i.name)}async function jS(i,e,n=!1){if(Mt(i.app))return Promise.reject(gr(i));const s=Rl(i),l=wg(s,e),d=await new MS(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=600*1e3;class VS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Sg(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WS&&this.cachedEventUids.clear(),this.cachedEventUids.has(jp(e))}saveEventToCache(e){this.cachedEventUids.add(jp(e)),this.lastProcessedEventTime=Date.now()}}function jp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Sg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(i,e={}){return fi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GS=/^https?/;async function KS(i){if(i.config.emulator)return;const{authorizedDomains:e}=await HS(i);for(const n of e)try{if(qS(n))return}catch{}Yt(i,"unauthorized-domain")}function qS(i){const e=ic(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!GS.test(n))return!1;if($S.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Is(3e4,6e4);function Wp(){const i=Qt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function YS(i){return new Promise((e,n)=>{var l,u,d;function s(){Wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wp(),n(jt(i,"network-request-failed"))},timeout:QS.get()})}if((u=(l=Qt().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=Qt().gapi)!=null&&d.load)s();else{const f=eS("iframefcb");return Qt()[f]=()=>{gapi.load?s():n(jt(i,"network-request-failed"))},JE(`${ZE()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function XS(i){return Xo=Xo||YS(i),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new Is(5e3,15e3),ZS="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(i){const e=i.config;Y(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Rc(e,eC):`https://${i.config.authDomain}/${ZS}`,s={apiKey:e.apiKey,appName:i.name,v:hi},l=nC.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${di(s).slice(1)}`}async function iC(i){const e=await XS(i),n=Qt().gapi;return Y(n,i,"internal-error"),e.open({where:document.body,url:rC(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=jt(i,"network-request-failed"),f=Qt().setTimeout(()=>{u(d)},JS.get());function m(){Qt().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,lC=600,aC="_blank",uC="http://localhost";class Vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cC(i,e,n,s=oC,l=lC){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m={...sC,width:s.toString(),height:l.toString(),top:u,left:d},g=Ze().toLowerCase();n&&(f=tg(g)?aC:n),Zm(g)&&(e=e||uC,m.scrollbars="yes");const E=Object.entries(m).reduce((S,[O,F])=>`${S}${O}=${F},`,"");if(HE(g)&&f!=="_self")return dC(e||"",f),new Vp(null);const v=window.open(e||"",f,E);Y(v,i,"popup-blocked");try{v.focus()}catch{}return new Vp(v)}function dC(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="__/auth/handler",fC="emulator/auth/handler",pC=encodeURIComponent("fac");async function Bp(i,e,n,s,l,u){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:hi,eventId:l};if(e instanceof Dc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Ju(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,v]of Object.entries({}))d[E]=v}if(e instanceof ks){const E=e.getScopes().filter(v=>v!=="");E.length>0&&(d.scopes=E.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await i._getAppCheckToken(),g=m?`#${pC}=${encodeURIComponent(m)}`:"";return`${mC(i)}?${di(f).slice(1)}${g}`}function mC({config:i}){return i.emulator?Rc(i,fC):`https://${i.authDomain}/${hC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pg,this._completeRedirectFn=jS,this._overrideRedirectResult=bS}async _openPopup(e,n,s,l){var d;gn((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await Bp(e,n,s,ic(),l);return cC(e,u,Lc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Bp(e,n,s,ic(),l);return vS(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(gn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await iC(e),s=new VS(e);return n.register("authEvent",l=>(Y(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},l=>{var d;const u=(d=l==null?void 0:l[0])==null?void 0:d[Bu];u!==void 0&&n(!!u),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return og()||eg()||Ac()}}const _C=gC;var Hp="@firebase/auth",$p="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wC(i){si(new vr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Y(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lg(i)},g=new YE(s,l,u,m);return nS(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),si(new vr("auth-internal",e=>{const n=Rl(e.getProvider("auth").getImmediate());return(s=>new yC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(Hp,$p,vC(i)),$n(Hp,$p,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=300,SC=Fm("authIdTokenMaxAge")||EC;let Gp=null;const CC=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SC)return;const l=n==null?void 0:n.token;Gp!==l&&(Gp=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function IC(i=Bm()){const e=Tc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=tS(i,{popupRedirectResolver:_C,persistence:[RS,gS,pg]}),s=Fm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=CC(u.toString());dS(n,d,()=>d(n.currentUser)),cS(n,f=>d(f))}}const l=Lm("auth");return l&&rS(n,`http://${l}`),n}function kC(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}XE({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=jt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",kC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wC("Browser");var TC="firebase",NC="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(TC,NC,"app");var Kp={};const qp="@firebase/database",Qp="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg="";function RC(i){Cg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PC(e)}}catch{}return new xC},pr=Ig("localStorage"),AC=Ig("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Ic("@firebase/database"),OC=(function(){let i=1;return function(){return i++}})(),kg=function(i){const e=_w(i),n=new fw;n.update(e);const s=n.digest();return wc.encodeByteArray(s)},Ns=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ns.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let as=null,Yp=!0;const DC=function(i,e){M(!0,"Can't turn on custom loggers persistently."),ti.logLevel=ce.VERBOSE,as=ti.log.bind(ti)},Ke=function(...i){if(Yp===!0&&(Yp=!1,as===null&&AC.get("logging_enabled")===!0&&DC()),as){const e=Ns.apply(null,i);as(e)}},Rs=function(i){return function(...e){Ke(i,...e)}},oc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ns(...i);ti.error(e)},_n=function(...i){const e=`FIREBASE FATAL ERROR: ${Ns(...i)}`;throw ti.error(e),new Error(e)},ct=function(...i){const e="FIREBASE WARNING: "+Ns(...i);ti.warn(e)},LC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tg=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},MC=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",Er="[MAX_NAME]",pi=function(i,e){if(i===e)return 0;if(i===li||e===Er)return-1;if(e===li||i===Er)return 1;{const n=Xp(i),s=Xp(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},FC=function(i,e){return i===e?0:i<e?-1:1},rs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Ue(e))},Fc=function(i){if(typeof i!="object"||i===null)return Ue(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=Fc(i[e[s]]);return n+="}",n},Ng=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function dt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Rg=function(i){M(!Tg(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let v="";for(m=0;m<64;m+=8){let S=parseInt(E.substr(m,8),2).toString(16);S.length===1&&(S="0"+S),v=v+S}return v.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zC(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const jC=new RegExp("^-?(0*)\\d{1,10}$"),WC=-2147483648,VC=2147483647,Xp=function(i){if(jC.test(i)){const e=Number(i);if(e>=WC&&e<=VC)return e}return null},mi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},BC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Jo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="5",Pg="v",xg="s",Ag="r",Og="f",Dg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lg="ls",Mg="p",lc="ac",Fg="websocket",bg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GC(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function zg(i,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===Fg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===bg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GC(i)&&(n.ns=i.namespace);const l=[];return dt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Qv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={},$u={};function Uc(i){const e=i.toString();return Hu[e]||(Hu[e]=new KC),Hu[e]}function qC(i,e){const n=i.toString();return $u[n]||($u[n]=e()),$u[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&mi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="start",YC="close",XC="pLPCommand",JC="pRTLPCB",jg="id",Wg="pw",Vg="ser",ZC="cb",eI="seg",tI="ts",nI="d",rI="dframe",Bg=1870,Hg=30,iI=Bg-Hg,sI=25e3,oI=3e4;class Jr{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=Uc(n),this.urlFn=m=>(this.appCheckToken&&(m[lc]=this.appCheckToken),zg(n,bg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(oI)),MC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...u)=>{const[d,f,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Jp)this.id=f,this.password=m;else if(d===YC)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jp]="t",s[Vg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ZC]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pg]=bc,this.transportSessionId&&(s[xg]=this.transportSessionId),this.lastSessionId&&(s[Lg]=this.lastSessionId),this.applicationId&&(s[Mg]=this.applicationId),this.appCheckToken&&(s[lc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Dg.test(location.hostname)&&(s[Ag]=Og);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bC()&&!UC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Om(n),l=Ng(s,iI);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[rI]="t",s[jg]=e,s[Wg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OC(),window[XC+this.uniqueCallbackIdentifier]=e,window[JC+this.uniqueCallbackIdentifier]=n,this.myIFrame=zc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Ke("frame writing exception"),f.stack&&Ke(f.stack),Ke(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jg]=this.myID,e[Wg]=this.myPW,e[Vg]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Hg+s.length<=Bg;){const d=this.pendingSegs.shift();s=s+"&"+eI+l+"="+d.seg+"&"+tI+l+"="+d.ts+"&"+nI+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(sI)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=16384,aI=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class Ft{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=Uc(n),this.connURL=Ft.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Pg]=bc,typeof location<"u"&&location.hostname&&Dg.test(location.hostname)&&(d[Ag]=Og),n&&(d[xg]=n),s&&(d[Lg]=s),l&&(d[lc]=l),u&&(d[Mg]=u),zg(e,Fg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let s;ow(),this.mySock=new ul(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ul!==null&&!Ft.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ng(n,lI);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(aI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2;Ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static get ALL_TRANSPORTS(){return[Jr,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ft&&Ft.isAvailable();let s=n&&!Ft.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ft];else{const l=this.transports_=[];for(const u of gs.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=6e4,cI=5e3,dI=10*1024,hI=100*1024,Gu="t",Zp="d",fI="s",em="r",pI="e",tm="o",nm="a",rm="n",im="p",mI="h";class gI{constructor(e,n,s,l,u,d,f,m,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new gs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gu in e){const n=e[Gu];n===nm?this.upgradeIfSecondaryHealthy_():n===em?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=rs("t",e),s=rs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=rs("t",e),s=rs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=rs(Gu,e);if(Zp in e){const s=e[Zp];if(n===mI){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fI?this.onConnectionShutdown_(s):n===em?this.onReset_(s):n===pI?oc("Server Error: "+s):n===tm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bc!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Gg{static getInstance(){return new cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=32,om=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new de("")}function Z(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Kn(i){return i.pieces_.length-i.pieceNum_}function pe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new de(i.pieces_,e)}function Kg(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function _I(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function qg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Qg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new de(e,0)}function Ae(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof de)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new de(n,0)}function ne(i){return i.pieceNum_>=i.pieces_.length}function at(i,e){const n=Z(i),s=Z(e);if(n===null)return e;if(n===s)return at(pe(i),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function jc(i,e){if(Kn(i)!==Kn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ut(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Kn(i)>Kn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class yI{constructor(e,n){this.errorPrefix_=n,this.parts_=qg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Tl(this.parts_[s]);Yg(this)}}function vI(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Tl(e),Yg(i)}function wI(i){const e=i.parts_.pop();i.byteLength_-=Tl(e),i.parts_.length>0&&(i.byteLength_-=1)}function Yg(i){if(i.byteLength_>om)throw new Error(i.errorPrefix_+"has a key path longer than "+om+" bytes ("+i.byteLength_+").");if(i.parts_.length>sm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sm+") or object contains a cycle "+hr(i))}function hr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Gg{static getInstance(){return new Wc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=1e3,EI=300*1e3,lm=30*1e3,SI=1.3,CI=3e4,II="server_kill",am=3;class pn extends $g{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=pn.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=is,this.maxReconnectDelay_=EI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ue(u)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new kl,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;pn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const s=ii(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):oc("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+pn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(v){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,S]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?Ke("getToken() completed but was canceled"):(Ke("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=S&&S.token,f=new gI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,O=>{ct(O+" ("+this.repoInfo_.toString()+")"),this.interrupt(II)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&ct(v),m())}}}interrupt(e){Ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Fc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new de(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=am&&(this.reconnectDelay_=lm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=am&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Cg.replace(/\./g,"-")]=1,Sc()?e["framework.cordova"]=1:bm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(li,e),l=new ee(li,n);return this.compare(s,l)!==0}minPost(){return ee.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class Xg extends Al{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,n){return pi(e.name,n.name)}isDefinedOn(e){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(Er,$o)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,$o)}toString(){return".key"}}const ni=new Xg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??be.RED,this.left=l??ut.EMPTY_NODE,this.right=u??ut.EMPTY_NODE}copy(e,n,s,l,u){return new be(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class kI{copy(e,n,s,l,u){return this}insert(e,n,s){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Go(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(i,e){return pi(i.name,e.name)}function Vc(i,e){return pi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;function NI(i){ac=i}const Jg=function(i){return typeof i=="number"?"number:"+Rg(i):"string:"+i},Zg=function(i){if(i.isLeafNode()){const e=i.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else M(i===ac||i.isEmpty(),"priority of unexpected type.");M(i===ac||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let um;class Fe{static set __childrenNodeConstructor(e){um=e}static get __childrenNodeConstructor(){return um}constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:Z(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||Kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rg(this.value_):e+=this.value_,this.lazyHash_=kg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Fe.VALUE_TYPE_ORDER.indexOf(n),u=Fe.VALUE_TYPE_ORDER.indexOf(s);return M(l>=0,"Unknown leaf type: "+n),M(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_,t_;function RI(i){e_=i}function PI(i){t_=i}class xI extends Al{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?pi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(Er,new Fe("[PRIORITY-POST]",t_))}makePost(e,n){const s=e_(e);return new ee(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new xI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=Math.log(2);class OI{constructor(e){const n=u=>parseInt(Math.log(u)/AI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(i,e,n,s){i.sort(e);const l=function(m,g){const E=g-m;let v,S;if(E===0)return null;if(E===1)return v=i[m],S=n?n(v):v,new be(S,v.node,be.BLACK,null,null);{const O=parseInt(E/2,10)+m,F=l(m,O),L=l(O+1,g);return v=i[O],S=n?n(v):v,new be(S,v.node,be.BLACK,F,L)}},u=function(m){let g=null,E=null,v=i.length;const S=function(F,L){const H=v-F,ye=v;v-=F;const ze=l(H+1,ye),qe=i[H],Oe=n?n(qe):qe;O(new be(Oe,qe.node,L,null,ze))},O=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<m.count;++F){const L=m.nextBitIsOne(),H=Math.pow(2,m.count-(F+1));L?S(H,be.BLACK):(S(H,be.BLACK),S(H,be.RED))}return E},d=new OI(i.length),f=u(d);return new ut(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku;const Xr={};class fn{static get Default(){return M(Xr&&ke,"ChildrenNode.ts has not been loaded"),Ku=Ku||new fn({".priority":Xr},{".priority":ke}),Ku}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(ee.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=dl(s,e.getCompare()):f=Xr;const m=e.toString(),g={...this.indexSet_};g[m]=e;const E={...this.indexes_};return E[m]=f,new fn(E,g)}addToIndexes(e,n){const s=tl(this.indexes_,(l,u)=>{const d=ii(this.indexSet_,u);if(M(d,"Missing index implementation for "+u),l===Xr)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(ee.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),dl(f,d.getCompare())}else return Xr;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new ee(e.name,f))),m.insert(e,e.node)}});return new fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=tl(this.indexes_,l=>{if(l===Xr)return l;{const u=n.get(e.name);return u?l.remove(new ee(e.name,u)):l}});return new fn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class q{static get EMPTY_NODE(){return ss||(ss=new q(new ut(Vc),null,fn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zg(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ss}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ss:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?ss:this.priorityNode_;return new q(l,d,u)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{M(Z(e)!==".priority"||Kn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(ke,(d,f)=>{n[d]=f.val(e),s++,u&&q.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jg(this.getPriority().val())+":"),this.forEachChild(ke,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":kg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new ee(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ee.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ke),l=n.getIterator(ke);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DI extends q{constructor(){super(new ut(Vc),q.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Ps=new DI;Object.defineProperties(ee,{MIN:{value:new ee(li,q.EMPTY_NODE)},MAX:{value:new ee(Er,Ps)}});Xg.__EMPTY_NODE=q.EMPTY_NODE;Fe.__childrenNodeConstructor=q;NI(Ps);PI(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function Ve(i,e=null){if(i===null)return q.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new Fe(n,Ve(e))}if(!(i instanceof Array)&&LI){const n=[];let s=!1;if(dt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=Ve(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new ee(d,m)))}}),n.length===0)return q.EMPTY_NODE;const u=dl(n,TI,d=>d.name,Vc);if(s){const d=dl(n,ke.getCompare());return new q(u,Ve(e),new fn({".priority":d},{".priority":ke}))}else return new q(u,Ve(e),fn.Default)}else{let n=q.EMPTY_NODE;return dt(i,(s,l)=>{if(vn(i,s)&&s.substring(0,1)!=="."){const u=Ve(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ve(e))}}RI(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI extends Al{constructor(e){super(),this.indexPath_=e,M(!ne(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?pi(e.name,n.name):u}makePost(e,n){const s=Ve(e),l=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,l)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new ee(Er,e)}toString(){return qg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI extends Al{compare(e,n){const s=e.node.compareTo(n.node);return s===0?pi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=Ve(e);return new ee(n,s)}toString(){return".value"}}const bI=new FI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(i){return{type:"value",snapshotNode:i}}function ai(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function _s(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ys(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function UI(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(_s(n,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(ai(n,s)):d.trackChildChange(ys(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ke,(l,u)=>{n.hasChild(l)||s.trackChildChange(_s(l,u))}),n.isLeafNode()||n.forEachChild(ke,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(ys(l,u,d))}else s.trackChildChange(ai(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.indexedFilter_=new Bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new ee(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(q.EMPTY_NODE);const u=this;return n.forEachChild(ke,(d,f)=>{u.matches(new ee(d,f))||(l=l.updateImmediateChild(d,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new ee(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=q.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(q.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const v=this.index_.getCompare();d=(S,O)=>v(O,S)}else d=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const m=new ee(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(m);if(f.hasChild(n)){const v=f.getImmediateChild(n);let S=l.getChildAfterChild(this.index_,g,this.reverse_);for(;S!=null&&(S.name===n||f.hasChild(S.name));)S=l.getChildAfterChild(this.index_,S,this.reverse_);const O=S==null?1:d(S,m);if(E&&!s.isEmpty()&&O>=0)return u!=null&&u.trackChildChange(ys(n,s,v)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(_s(n,v));const L=f.updateImmediateChild(n,q.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(u!=null&&u.trackChildChange(ai(S.name,S.node)),L.updateImmediateChild(S.name,S.node)):L}}else return s.isEmpty()?e:E&&d(g,m)>=0?(u!=null&&(u.trackChildChange(_s(g.name,g.node)),u.trackChildChange(ai(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Hc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jI(i){return i.loadsAllData()?new Bc(i.getIndex()):i.hasLimit()?new zI(i):new vs(i)}function cm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===ke?n="$priority":i.index_===bI?n="$value":i.index_===ni?n="$key":(M(i.index_ instanceof MI,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Ue(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Ue(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Ue(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Ue(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function dm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==ke&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends $g{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=hl.getListenId_(e,s),f={};this.listens_[d]=f;const m=cm(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let v=E;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),ii(this.listens_,d)===f){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",l(S,null)}})}unlisten(e,n){const s=hl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cm(e._queryParams),s=e._path.toString(),l=new kl;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=fs(f.responseText)}catch{ct("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&ct("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function r_(i,e,n){if(ne(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=Z(e);i.children.has(s)||i.children.set(s,fl());const l=i.children.get(s);e=pe(e),r_(l,e,n)}}function uc(i,e,n){i.value!==null?n(e,i.value):VI(i,(s,l)=>{const u=new de(e.toString()+"/"+s);uc(l,u,n)})}function VI(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&dt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=10*1e3,HI=30*1e3,$I=300*1e3;class GI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BI(e);const s=hm+(HI-hm)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dt(e,(l,u)=>{u>0&&vn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*$I))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zt||(zt={}));function i_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $c(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gc(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=zt.ACK_USER_WRITE,this.source=i_()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new pl(le(),n,this.revert)}}else return M(Z(this.path)===e,"operationForChild called for unrelated child."),new pl(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.source=e,this.path=n,this.type=zt.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new ws(this.source,le()):new ws(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=zt.OVERWRITE}operationForChild(e){return ne(this.path)?new Sr(this.source,le(),this.snap.getImmediateChild(e)):new Sr(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=zt.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new Sr(this.source,le(),n.value):new Es(this.source,le(),n)}else return M(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qI(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(UI(d.childName,d.snapshotNode))}),os(i,l,"child_removed",e,s,n),os(i,l,"child_added",e,s,n),os(i,l,"child_moved",u,s,n),os(i,l,"child_changed",e,s,n),os(i,l,"value",e,s,n),l}function os(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>YI(i,f,m)),d.forEach(f=>{const m=QI(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function QI(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YI(i,e,n){if(e.childName==null||n.childName==null)throw ci("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),l=new ee(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(i,e){return{eventCache:i,serverCache:e}}function cs(i,e,n,s){return Ol(new Cr(e,n,s),i.serverCache)}function s_(i,e,n,s){return Ol(i.eventCache,new Cr(e,n,s))}function cc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Ir(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu;const XI=()=>(qu||(qu=new ut(FC)),qu);class _e{static fromObject(e){let n=new _e(null);return dt(e,(s,l)=>{n=n.set(new de(s),l)}),n}constructor(e,n=XI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(ne(e))return null;{const s=Z(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(pe(e),n);return u!=null?{path:Ae(new de(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new _e(null)}}set(e,n){if(ne(e))return new _e(n,this.children);{const s=Z(e),u=(this.children.get(s)||new _e(null)).set(pe(e),n),d=this.children.insert(s,u);return new _e(this.value,d)}}remove(e){if(ne(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const l=s.remove(pe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new _e(null):new _e(this.value,u)}else return this}}get(e){if(ne(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(ne(e))return n;{const s=Z(e),u=(this.children.get(s)||new _e(null)).setTree(pe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new _e(this.value,d)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ae(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ne(e))return null;{const u=Z(e),d=this.children.get(u);return d?d.findOnPath_(pe(e),Ae(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,s){if(ne(e))return this;{this.value&&s(n,this.value);const l=Z(e),u=this.children.get(l);return u?u.foreachOnPath_(pe(e),Ae(n,l),s):new _e(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ae(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.writeTree_=e}static empty(){return new Wt(new _e(null))}}function ds(i,e,n){if(ne(e))return new Wt(new _e(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=at(l,e);return u=u.updateChild(d,n),new Wt(i.writeTree_.set(l,u))}else{const l=new _e(n),u=i.writeTree_.setTree(e,l);return new Wt(u)}}}function fm(i,e,n){let s=i;return dt(n,(l,u)=>{s=ds(s,Ae(e,l),u)}),s}function pm(i,e){if(ne(e))return Wt.empty();{const n=i.writeTree_.setTree(e,new _e(null));return new Wt(n)}}function dc(i,e){return kr(i,e)!=null}function kr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(at(n.path,e)):null}function mm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,l)=>{e.push(new ee(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ee(s,l.value))}),e}function Gn(i,e){if(ne(e))return i;{const n=kr(i,e);return n!=null?new Wt(new _e(n)):new Wt(i.writeTree_.subtree(e))}}function hc(i){return i.writeTree_.isEmpty()}function ui(i,e){return o_(le(),i.writeTree_,e)}function o_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(M(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=o_(Ae(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ae(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(i,e){return c_(e,i)}function JI(i,e,n,s,l){M(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=ds(i.visibleWrites,e,n)),i.lastWriteId=s}function ZI(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function e0(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&t0(f,s.path)?l=!1:Ut(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return n0(i),!0;if(s.snap)i.visibleWrites=pm(i.visibleWrites,s.path);else{const f=s.children;dt(f,m=>{i.visibleWrites=pm(i.visibleWrites,Ae(s.path,m))})}return!0}else return!1}function t0(i,e){if(i.snap)return Ut(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ut(Ae(i.path,n),e))return!0;return!1}function n0(i){i.visibleWrites=l_(i.allWrites,r0,le()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function r0(i){return i.visible}function l_(i,e,n){let s=Wt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ut(n,d)?(f=at(n,d),s=ds(s,f,u.snap)):Ut(d,n)&&(f=at(d,n),s=ds(s,le(),u.snap.getChild(f)));else if(u.children){if(Ut(n,d))f=at(n,d),s=fm(s,f,u.children);else if(Ut(d,n))if(f=at(d,n),ne(f))s=fm(s,le(),u.children);else{const m=ii(u.children,Z(f));if(m){const g=m.getChild(pe(f));s=ds(s,le(),g)}}}else throw ci("WriteRecord should have .snap or .children")}}return s}function a_(i,e,n,s,l){if(!s&&!l){const u=kr(i.visibleWrites,e);if(u!=null)return u;{const d=Gn(i.visibleWrites,e);if(hc(d))return n;if(n==null&&!dc(d,le()))return null;{const f=n||q.EMPTY_NODE;return ui(d,f)}}}else{const u=Gn(i.visibleWrites,e);if(!l&&hc(u))return n;if(!l&&n==null&&!dc(u,le()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ut(g.path,e)||Ut(e,g.path))},f=l_(i.allWrites,d,e),m=n||q.EMPTY_NODE;return ui(f,m)}}}function i0(i,e,n){let s=q.EMPTY_NODE;const l=kr(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(ke,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Gn(i.visibleWrites,e);return n.forEachChild(ke,(d,f)=>{const m=ui(Gn(u,new de(d)),f);s=s.updateImmediateChild(d,m)}),mm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Gn(i.visibleWrites,e);return mm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function s0(i,e,n,s,l){M(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ae(e,n);if(dc(i.visibleWrites,u))return null;{const d=Gn(i.visibleWrites,u);return hc(d)?l.getChild(n):ui(d,l.getChild(n))}}function o0(i,e,n,s){const l=Ae(e,n),u=kr(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Gn(i.visibleWrites,l);return ui(d,s.getNode().getImmediateChild(n))}else return null}function l0(i,e){return kr(i.visibleWrites,e)}function a0(i,e,n,s,l,u,d){let f;const m=Gn(i.visibleWrites,e),g=kr(m,le());if(g!=null)f=g;else if(n!=null)f=ui(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const E=[],v=d.getCompare(),S=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let O=S.getNext();for(;O&&E.length<l;)v(O,s)!==0&&E.push(O),O=S.getNext();return E}else return[]}function u0(){return{visibleWrites:Wt.empty(),allWrites:[],lastWriteId:-1}}function ml(i,e,n,s){return a_(i.writeTree,i.treePath,e,n,s)}function qc(i,e){return i0(i.writeTree,i.treePath,e)}function gm(i,e,n,s){return s0(i.writeTree,i.treePath,e,n,s)}function gl(i,e){return l0(i.writeTree,Ae(i.treePath,e))}function c0(i,e,n,s,l,u){return a0(i.writeTree,i.treePath,e,n,s,l,u)}function Qc(i,e,n){return o0(i.writeTree,i.treePath,e,n)}function u_(i,e){return c_(Ae(i.treePath,e),i.writeTree)}function c_(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,ys(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,_s(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,ai(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,ys(s,e.snapshotNode,l.oldSnap));else throw ci("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const d_=new h0;class Yc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ir(this.viewCache_),u=c0(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(i){return{filter:i}}function p0(i,e){M(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function m0(i,e,n,s,l){const u=new d0;let d,f;if(n.type===zt.OVERWRITE){const g=n;g.source.fromUser?d=fc(i,e,g.path,g.snap,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ne(g.path),d=_l(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===zt.MERGE){const g=n;g.source.fromUser?d=_0(i,e,g.path,g.children,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=pc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===zt.ACK_USER_WRITE){const g=n;g.revert?d=w0(i,e,g.path,s,l,u):d=y0(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===zt.LISTEN_COMPLETE)d=v0(i,e,n.path,s,u);else throw ci("Unknown operation type: "+n.type);const m=u.getChanges();return g0(e,d,m),{viewCache:d,changes:m}}function g0(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=cc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(n_(cc(e)))}}function h_(i,e,n,s,l,u){const d=e.eventCache;if(gl(s,n)!=null)return e;{let f,m;if(ne(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ir(e),E=g instanceof q?g:q.EMPTY_NODE,v=qc(s,E);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=ml(s,Ir(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=Z(n);if(g===".priority"){M(Kn(n)===1,"Can't have a priority with additional path components");const E=d.getNode();m=e.serverCache.getNode();const v=gm(s,n,E,m);v!=null?f=i.filter.updatePriority(E,v):f=d.getNode()}else{const E=pe(n);let v;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const S=gm(s,n,d.getNode(),m);S!=null?v=d.getNode().getImmediateChild(g).updateChild(E,S):v=d.getNode().getImmediateChild(g)}else v=Qc(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,E,l,u):f=d.getNode()}}return cs(e,f,d.isFullyInitialized()||ne(n),i.filter.filtersNodes())}}function _l(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const E=d?i.filter:i.filter.getIndexedFilter();if(ne(n))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const O=m.getNode().updateChild(n,s);g=E.updateFullNode(m.getNode(),O,null)}else{const O=Z(n);if(!m.isCompleteForPath(n)&&Kn(n)>1)return e;const F=pe(n),H=m.getNode().getImmediateChild(O).updateChild(F,s);O===".priority"?g=E.updatePriority(m.getNode(),H):g=E.updateChild(m.getNode(),O,H,F,d_,null)}const v=s_(e,g,m.isFullyInitialized()||ne(n),E.filtersNodes()),S=new Yc(l,v,u);return h_(i,v,n,l,S,f)}function fc(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const E=new Yc(l,e,u);if(ne(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=cs(e,g,!0,i.filter.filtersNodes());else{const v=Z(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=cs(e,g,f.isFullyInitialized(),f.isFiltered());else{const S=pe(n),O=f.getNode().getImmediateChild(v);let F;if(ne(S))F=s;else{const L=E.getCompleteChild(v);L!=null?Kg(S)===".priority"&&L.getChild(Qg(S)).isEmpty()?F=L:F=L.updateChild(S,s):F=q.EMPTY_NODE}if(O.equals(F))m=e;else{const L=i.filter.updateChild(f.getNode(),v,F,S,E,d);m=cs(e,L,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function _m(i,e){return i.eventCache.isCompleteForChild(e)}function _0(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const E=Ae(n,m);_m(e,Z(E))&&(f=fc(i,f,E,g,l,u,d))}),s.foreach((m,g)=>{const E=Ae(n,m);_m(e,Z(E))||(f=fc(i,f,E,g,l,u,d))}),f}function ym(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function pc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ne(n)?g=s:g=new _e(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((v,S)=>{if(E.hasChild(v)){const O=e.serverCache.getNode().getImmediateChild(v),F=ym(i,O,S);m=_l(i,m,new de(v),F,l,u,d,f)}}),g.children.inorderTraversal((v,S)=>{const O=!e.serverCache.isCompleteForChild(v)&&S.value===null;if(!E.hasChild(v)&&!O){const F=e.serverCache.getNode().getImmediateChild(v),L=ym(i,F,S);m=_l(i,m,new de(v),L,l,u,d,f)}}),m}function y0(i,e,n,s,l,u,d){if(gl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ne(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return _l(i,e,n,m.getNode().getChild(n),l,u,f,d);if(ne(n)){let g=new _e(null);return m.getNode().forEachChild(ni,(E,v)=>{g=g.set(new de(E),v)}),pc(i,e,n,g,l,u,f,d)}else return e}else{let g=new _e(null);return s.foreach((E,v)=>{const S=Ae(n,E);m.isCompleteForPath(S)&&(g=g.set(E,m.getNode().getChild(S)))}),pc(i,e,n,g,l,u,f,d)}}function v0(i,e,n,s,l){const u=e.serverCache,d=s_(e,u.getNode(),u.isFullyInitialized()||ne(n),u.isFiltered());return h_(i,d,n,s,d_,l)}function w0(i,e,n,s,l,u){let d;if(gl(s,n)!=null)return e;{const f=new Yc(s,e,l),m=e.eventCache.getNode();let g;if(ne(n)||Z(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=ml(s,Ir(e));else{const v=e.serverCache.getNode();M(v instanceof q,"serverChildren would be complete if leaf node"),E=qc(s,v)}E=E,g=i.filter.updateFullNode(m,E,u)}else{const E=Z(n);let v=Qc(s,E,e.serverCache);v==null&&e.serverCache.isCompleteForChild(E)&&(v=m.getImmediateChild(E)),v!=null?g=i.filter.updateChild(m,E,v,pe(n),f,u):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,q.EMPTY_NODE,pe(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=ml(s,Ir(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||gl(s,le())!=null,cs(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Bc(s.getIndex()),u=jI(s);this.processor_=f0(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(q.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(q.EMPTY_NODE,f.getNode(),null),E=new Cr(m,d.isFullyInitialized(),l.filtersNodes()),v=new Cr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Ol(v,E),this.eventGenerator_=new KI(this.query_)}get query(){return this.query_}}function S0(i){return i.viewCache_.serverCache.getNode()}function C0(i,e){const n=Ir(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function vm(i){return i.eventRegistrations_.length===0}function I0(i,e){i.eventRegistrations_.push(e)}function wm(i,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Em(i,e,n,s){e.type===zt.MERGE&&e.source.queryId!==null&&(M(Ir(i.viewCache_),"We should always have a full cache before handling merges"),M(cc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=m0(i.processor_,l,e,n,s);return p0(i.processor_,u.viewCache),M(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,f_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function k0(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(u,d)=>{s.push(ai(u,d))}),n.isFullyInitialized()&&s.push(n_(n.getNode())),f_(i,s,n.getNode(),e)}function f_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return qI(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class T0{constructor(){this.views=new Map}}function N0(i){M(!yl,"__referenceConstructor has already been defined"),yl=i}function R0(){return M(yl,"Reference.ts has not been loaded"),yl}function P0(i){return i.views.size===0}function Xc(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return M(u!=null,"SyncTree gave us an op for an invalid query."),Em(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Em(d,e,n,s));return u}}function x0(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=ml(n,l?s:null),m=!1;f?m=!0:s instanceof q?(f=qc(n,s),m=!1):(f=q.EMPTY_NODE,m=!1);const g=Ol(new Cr(f,m,!1),new Cr(s,l,!1));return new E0(e,g)}return d}function A0(i,e,n,s,l,u){const d=x0(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),I0(d,n),k0(d,n)}function O0(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=qn(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(wm(g,n,s)),vm(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(wm(m,n,s)),vm(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!qn(i)&&u.push(new(R0())(e._repo,e._path)),{removed:u,events:d}}function p_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ri(i,e){let n=null;for(const s of i.views.values())n=n||C0(s,e);return n}function m_(i,e){if(e._queryParams.loadsAllData())return Dl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function g_(i,e){return m_(i,e)!=null}function qn(i){return Dl(i)!=null}function Dl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;function D0(i){M(!vl,"__referenceConstructor has already been defined"),vl=i}function L0(){return M(vl,"Reference.ts has not been loaded"),vl}let M0=1;class Sm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=u0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function __(i,e,n,s,l){return JI(i.pendingWriteTree_,e,n,s,l),l?xs(i,new Sr(i_(),e,n)):[]}function mr(i,e,n=!1){const s=ZI(i.pendingWriteTree_,e);if(e0(i.pendingWriteTree_,e)){let u=new _e(null);return s.snap!=null?u=u.set(le(),!0):dt(s.children,d=>{u=u.set(new de(d),!0)}),xs(i,new pl(s.path,u,n))}else return[]}function Ll(i,e,n){return xs(i,new Sr($c(),e,n))}function F0(i,e,n){const s=_e.fromObject(n);return xs(i,new Es($c(),e,s))}function b0(i,e){return xs(i,new ws($c(),e))}function U0(i,e,n){const s=Zc(i,n);if(s){const l=ed(s),u=l.path,d=l.queryId,f=at(u,e),m=new ws(Gc(d),f);return td(i,u,m)}else return[]}function mc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||g_(d,e))){const m=O0(d,e,n,s);P0(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const E=g.findIndex(S=>S._queryParams.loadsAllData())!==-1,v=i.syncPointTree_.findOnPath(u,(S,O)=>qn(O));if(E&&!v){const S=i.syncPointTree_.subtree(u);if(!S.isEmpty()){const O=W0(S);for(let F=0;F<O.length;++F){const L=O[F],H=L.query,ye=w_(i,L);i.listenProvider_.startListening(hs(H),wl(i,H),ye.hashFn,ye.onComplete)}}}!v&&g.length>0&&!s&&(E?i.listenProvider_.stopListening(hs(e),null):g.forEach(S=>{const O=i.queryToTagMap.get(Ml(S));i.listenProvider_.stopListening(hs(S),O)}))}V0(i,g)}return f}function z0(i,e,n,s){const l=Zc(i,s);if(l!=null){const u=ed(l),d=u.path,f=u.queryId,m=at(d,e),g=new Sr(Gc(f),m,n);return td(i,d,g)}else return[]}function j0(i,e,n,s){const l=Zc(i,s);if(l){const u=ed(l),d=u.path,f=u.queryId,m=at(d,e),g=_e.fromObject(n),E=new Es(Gc(f),m,g);return td(i,d,E)}else return[]}function Cm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(S,O)=>{const F=at(S,l);u=u||ri(O,F),d=d||qn(O)});let f=i.syncPointTree_.get(l);f?(d=d||qn(f),u=u||ri(f,le())):(f=new T0,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=q.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((O,F)=>{const L=ri(F,le());L&&(u=u.updateImmediateChild(O,L))}));const g=g_(f,e);if(!g&&!e._queryParams.loadsAllData()){const S=Ml(e);M(!i.queryToTagMap.has(S),"View does not exist, but we have a tag");const O=B0();i.queryToTagMap.set(S,O),i.tagToQueryMap.set(O,S)}const E=Kc(i.pendingWriteTree_,l);let v=A0(f,e,n,E,u,m);if(!g&&!d&&!s){const S=m_(f,e);v=v.concat(H0(i,e,S))}return v}function Jc(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=at(d,e),g=ri(f,m);if(g)return g});return a_(l,e,u,n,!0)}function xs(i,e){return y_(e,i.syncPointTree_,null,Kc(i.pendingWriteTree_,le()))}function y_(i,e,n,s){if(ne(i.path))return v_(i,e,n,s);{const l=e.get(le());n==null&&l!=null&&(n=ri(l,le()));let u=[];const d=Z(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,E=u_(s,d);u=u.concat(y_(f,m,g,E))}return l&&(u=u.concat(Xc(l,i,s,n))),u}}function v_(i,e,n,s){const l=e.get(le());n==null&&l!=null&&(n=ri(l,le()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=u_(s,d),E=i.operationForChild(d);E&&(u=u.concat(v_(E,f,m,g)))}),l&&(u=u.concat(Xc(l,i,s,n))),u}function w_(i,e){const n=e.query,s=wl(i,n);return{hashFn:()=>(S0(e)||q.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?U0(i,n._path,s):b0(i,n._path);{const u=zC(l,n);return mc(i,n,null,u)}}}}function wl(i,e){const n=Ml(e);return i.queryToTagMap.get(n)}function Ml(i){return i._path.toString()+"$"+i._queryIdentifier}function Zc(i,e){return i.tagToQueryMap.get(e)}function ed(i){const e=i.indexOf("$");return M(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new de(i.substr(0,e))}}function td(i,e,n){const s=i.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const l=Kc(i.pendingWriteTree_,e);return Xc(s,n,l,null)}function W0(i){return i.fold((e,n,s)=>{if(n&&qn(n))return[Dl(n)];{let l=[];return n&&(l=p_(n)),dt(s,(u,d)=>{l=l.concat(d)}),l}})}function hs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(L0())(i._repo,i._path):i}function V0(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Ml(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function B0(){return M0++}function H0(i,e,n){const s=e._path,l=wl(i,e),u=w_(i,n),d=i.listenProvider_.startListening(hs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)M(!qn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,E,v)=>{if(!ne(g)&&E&&qn(E))return[Dl(E).query];{let S=[];return E&&(S=S.concat(p_(E).map(O=>O.query))),dt(v,(O,F)=>{S=S.concat(F)}),S}});for(let g=0;g<m.length;++g){const E=m[g];i.listenProvider_.stopListening(hs(E),wl(i,E))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nd(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ae(this.path_,e);return new rd(this.syncTree_,n)}node(){return Jc(this.syncTree_,this.path_)}}const $0=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Im=function(i,e,n){if(!i||typeof i!="object")return i;if(M(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return G0(i[".sv"],e,n);if(typeof i[".sv"]=="object")return K0(i[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},G0=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+i)}},K0=function(i,e,n){i.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const l=e.node();if(M(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},q0=function(i,e,n,s){return id(e,new rd(n,i),s)},E_=function(i,e,n){return id(i,new nd(e),n)};function id(i,e,n){const s=i.getPriority().val(),l=Im(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Im(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new Fe(f,Ve(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new Fe(l))),d.forEachChild(ke,(f,m)=>{const g=id(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function od(i,e){let n=e instanceof de?e:new de(e),s=i,l=Z(n);for(;l!==null;){const u=ii(s.node.children,l)||{children:{},childCount:0};s=new sd(l,s,u),n=pe(n),l=Z(n)}return s}function gi(i){return i.node.value}function S_(i,e){i.node.value=e,gc(i)}function C_(i){return i.node.childCount>0}function Q0(i){return gi(i)===void 0&&!C_(i)}function Fl(i,e){dt(i.node.children,(n,s)=>{e(new sd(n,i,s))})}function I_(i,e,n,s){n&&e(i),Fl(i,l=>{I_(l,e,!0)})}function Y0(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function As(i){return new de(i.parent===null?i.name:As(i.parent)+"/"+i.name)}function gc(i){i.parent!==null&&X0(i.parent,i.name,i)}function X0(i,e,n){const s=Q0(n),l=vn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,gc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,gc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=/[\[\].#$\/\u0000-\u001F\u007F]/,Z0=/[\[\].#$\u0000-\u001F\u007F]/,Qu=10*1024*1024,k_=function(i){return typeof i=="string"&&i.length!==0&&!J0.test(i)},T_=function(i){return typeof i=="string"&&i.length!==0&&!Z0.test(i)},ek=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),T_(i)},tk=function(i,e,n,s){ld(Cc(i,"value"),e,n)},ld=function(i,e,n){const s=n instanceof de?new yI(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+hr(s));if(typeof e=="function")throw new Error(i+"contains a function "+hr(s)+" with contents = "+e.toString());if(Tg(e))throw new Error(i+"contains "+e.toString()+" "+hr(s));if(typeof e=="string"&&e.length>Qu/3&&Tl(e)>Qu)throw new Error(i+"contains a string greater than "+Qu+" utf8 bytes "+hr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(dt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!k_(d)))throw new Error(i+" contains an invalid key ("+d+") "+hr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vI(s,d),ld(i,f,s),wI(s)}),l&&u)throw new Error(i+' contains ".value" child '+hr(s)+" in addition to actual children.")}},N_=function(i,e,n,s){if(!T_(n))throw new Error(Cc(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nk=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N_(i,e,n)},R_=function(i,e){if(Z(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},rk=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!k_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ek(n))throw new Error(Cc(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ad(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!jc(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function P_(i,e,n){ad(i,n),x_(i,s=>jc(s,e))}function yn(i,e,n){ad(i,n),x_(i,s=>Ut(s,e)||Ut(e,s))}function x_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(sk(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function sk(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();as&&Ke("event: "+n.toString()),mi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="repo_interrupt",lk=25;class ak{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ik,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uk(i,e,n){if(i.stats_=Uc(i.repoInfo_),i.forceRestClient_||BC())i.server_=new hl(i.repoInfo_,(s,l,u,d)=>{km(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Tm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new pn(i.repoInfo_,e,(s,l,u,d)=>{km(i,s,l,u,d)},s=>{Tm(i,s)},s=>{dk(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=qC(i.repoInfo_,()=>new GI(i.stats_,i.server_)),i.infoData_=new WI,i.infoSyncTree_=new Sm({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=Ll(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),cd(i,"connected",!1),i.serverSyncTree_=new Sm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);yn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function ck(i){const n=i.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ud(i){return $0({timestamp:ck(i)})}function km(i,e,n,s,l){i.dataUpdateCount++;const u=new de(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=tl(n,g=>Ve(g));d=j0(i.serverSyncTree_,u,m,l)}else{const m=Ve(n);d=z0(i.serverSyncTree_,u,m,l)}else if(s){const m=tl(n,g=>Ve(g));d=F0(i.serverSyncTree_,u,m)}else{const m=Ve(n);d=Ll(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=bl(i,u)),yn(i.eventQueue_,f,d)}function Tm(i,e){cd(i,"connected",e),e===!1&&fk(i)}function dk(i,e){dt(e,(n,s)=>{cd(i,n,s)})}function cd(i,e,n){const s=new de("/.info/"+e),l=Ve(n);i.infoData_.updateSnapshot(s,l);const u=Ll(i.infoSyncTree_,s,l);yn(i.eventQueue_,s,u)}function A_(i){return i.nextWriteId_++}function hk(i,e,n,s,l){dd(i,"set",{path:e.toString(),value:n,priority:s});const u=ud(i),d=Ve(n,s),f=Jc(i.serverSyncTree_,e),m=E_(d,f,u),g=A_(i),E=__(i.serverSyncTree_,e,m,g,!0);ad(i.eventQueue_,E),i.server_.put(e.toString(),d.val(!0),(S,O)=>{const F=S==="ok";F||ct("set at "+e+" failed: "+S);const L=mr(i.serverSyncTree_,g,!F);yn(i.eventQueue_,e,L),gk(i,l,S,O)});const v=F_(i,e);bl(i,v),yn(i.eventQueue_,v,[])}function fk(i){dd(i,"onDisconnectEvents");const e=ud(i),n=fl();uc(i.onDisconnect_,le(),(l,u)=>{const d=q0(l,u,i.serverSyncTree_,e);r_(n,l,d)});let s=[];uc(n,le(),(l,u)=>{s=s.concat(Ll(i.serverSyncTree_,l,u));const d=F_(i,l);bl(i,d)}),i.onDisconnect_=fl(),yn(i.eventQueue_,le(),s)}function pk(i,e,n){let s;Z(e._path)===".info"?s=Cm(i.infoSyncTree_,e,n):s=Cm(i.serverSyncTree_,e,n),P_(i.eventQueue_,e._path,s)}function Nm(i,e,n){let s;Z(e._path)===".info"?s=mc(i.infoSyncTree_,e,n):s=mc(i.serverSyncTree_,e,n),P_(i.eventQueue_,e._path,s)}function mk(i){i.persistentConnection_&&i.persistentConnection_.interrupt(ok)}function dd(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Ke(n,...e)}function gk(i,e,n,s){e&&mi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function O_(i,e,n){return Jc(i.serverSyncTree_,e,n)||q.EMPTY_NODE}function hd(i,e=i.transactionQueueTree_){if(e||Ul(i,e),gi(e)){const n=L_(i,e);M(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&_k(i,As(e),n)}else C_(e)&&Fl(e,n=>{hd(i,n)})}function _k(i,e,n){const s=n.map(g=>g.currentWriteId),l=O_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];M(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const v=at(e,E.path);u=u.updateChild(v,E.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{dd(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const v=[];for(let S=0;S<n.length;S++)n[S].status=2,E=E.concat(mr(i.serverSyncTree_,n[S].currentWriteId)),n[S].onComplete&&v.push(()=>n[S].onComplete(null,!0,n[S].currentOutputSnapshotResolved)),n[S].unwatcher();Ul(i,od(i.transactionQueueTree_,e)),hd(i,i.transactionQueueTree_),yn(i.eventQueue_,e,E);for(let S=0;S<v.length;S++)mi(v[S])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{ct("transaction at "+m.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}bl(i,e)}},d)}function bl(i,e){const n=D_(i,e),s=As(n),l=L_(i,n);return yk(i,l,s),s}function yk(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=at(n,m.path);let E=!1,v;if(M(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,v=m.abortReason,l=l.concat(mr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=lk)E=!0,v="maxretry",l=l.concat(mr(i.serverSyncTree_,m.currentWriteId,!0));else{const S=O_(i,m.path,d);m.currentInputSnapshot=S;const O=e[f].update(S.val());if(O!==void 0){ld("transaction failed: Data returned ",O,m.path);let F=Ve(O);typeof O=="object"&&O!=null&&vn(O,".priority")||(F=F.updatePriority(S.getPriority()));const H=m.currentWriteId,ye=ud(i),ze=E_(F,S,ye);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=ze,m.currentWriteId=A_(i),d.splice(d.indexOf(H),1),l=l.concat(__(i.serverSyncTree_,m.path,ze,m.currentWriteId,m.applyLocally)),l=l.concat(mr(i.serverSyncTree_,H,!0))}else E=!0,v="nodata",l=l.concat(mr(i.serverSyncTree_,m.currentWriteId,!0))}yn(i.eventQueue_,n,l),l=[],E&&(e[f].status=2,(function(S){setTimeout(S,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Ul(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)mi(s[f]);hd(i,i.transactionQueueTree_)}function D_(i,e){let n,s=i.transactionQueueTree_;for(n=Z(e);n!==null&&gi(s)===void 0;)s=od(s,n),e=pe(e),n=Z(e);return s}function L_(i,e){const n=[];return M_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function M_(i,e,n){const s=gi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Fl(e,l=>{M_(i,l,n)})}function Ul(i,e){const n=gi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,S_(e,n.length>0?n:void 0)}Fl(e,s=>{Ul(i,s)})}function F_(i,e){const n=As(D_(i,e)),s=od(i.transactionQueueTree_,e);return Y0(s,l=>{Yu(i,l)}),Yu(i,s),I_(s,l=>{Yu(i,l)}),n}function Yu(i,e){const n=gi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(M(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(M(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(mr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?S_(e,void 0):n.length=u+1,yn(i.eventQueue_,As(e),l);for(let d=0;d<s.length;d++)mi(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function wk(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${n}' in query '${i}'`)}return e}const Rm=function(i,e){const n=Ek(i),s=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LC();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ug(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new de(n.pathString)}},Ek=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(E,v)),E<v&&(l=vk(i.substring(E,v)));const S=wk(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const O=e.slice(0,g);if(O.toLowerCase()==="localhost")n="localhost";else if(O.split(".").length<=2)n=O;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),n=e.substring(F+1),u=s}"ns"in S&&(u=S.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class Ck{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ne(this._path)?null:Kg(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=dm(this._queryParams),n=Fc(e);return n==="{}"?"default":n}get _queryObject(){return dm(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof fd))return!1;const n=this._repo===e._repo,s=jc(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+_I(this._path)}}class Yn extends fd{constructor(e,n){super(e,n,new Hc,!1)}get parent(){const e=Qg(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class El{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),s=_c(this.ref,e);return new El(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new El(l,_c(this.ref,s),ke)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function an(i,e){return i=yt(i),i._checkNotDeleted("ref"),e!==void 0?_c(i._root,e):i._root}function _c(i,e){return i=yt(i),Z(i._path)===null?nk("child","path",e):N_("child","path",e),new Yn(i._repo,Ae(i._path,e))}function Pm(i){return R_("remove",i._path),Sl(i,null)}function Sl(i,e){i=yt(i),R_("set",i._path),tk("set",e,i._path);const n=new kl;return hk(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}class pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Sk("value",this,new El(e.snapshotNode,new Yn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ck(this,e,n):null}matches(e){return e instanceof pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function kk(i,e,n,s,l){let u;if(typeof s=="object"&&(u=void 0,l=s),typeof s=="function"&&(u=s),l&&l.onlyOnce){const m=n,g=(E,v)=>{Nm(i._repo,i,f),m(E,v)};g.userCallback=n.userCallback,g.context=n.context,n=g}const d=new Ik(n,u||void 0),f=new pd(d);return pk(i._repo,i,f),()=>Nm(i._repo,i,f)}function Cl(i,e,n,s){return kk(i,"value",e,n,s)}N0(Yn);D0(Yn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="FIREBASE_DATABASE_EMULATOR_HOST",yc={};let Nk=!1;function Rk(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Cs(u);i.repoInfo_=new Ug(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function Pk(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ke("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Rm(u,l),f=d.repoInfo,m;typeof process<"u"&&Kp&&(m=Kp[Tk]),m?(u=`http://${m}?ns=${f.namespace}`,d=Rm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new $C(i.name,i.options,e);rk("Invalid Firebase Database URL",d),ne(d.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const E=Ak(f,i,g,new HC(i,n));return new Ok(E,i)}function xk(i,e){const n=yc[e];(!n||n[i.key]!==i)&&_n(`Database ${e}(${i.repoInfo_}) has already been deleted.`),mk(i),delete n[i.key]}function Ak(i,e,n,s){let l=yc[e.name];l||(l={},yc[e.name]=l);let u=l[i.toURLString()];return u&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new ak(i,Nk,n,s),l[i.toURLString()]=u,u}class Ok{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function Dk(i=Bm(),e){const n=Tc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=tw("database");s&&Lk(n,...s)}return n}function Lk(i,e,n,s={}){i=yt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&yr(s,u.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Jo(Jo.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:nw(s.mockUserToken,i.app.options.projectId);d=new Jo(f)}Cs(e)&&zm(e),Rk(u,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(i){RC(hi),si(new vr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return Pk(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),$n(qp,Qp,i),$n(qp,Qp,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={".sv":"timestamp"};function bk(){return Fk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};pn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Mk();const Uk={apiKey:"AIzaSyBIcmJDRupZpN9jRi3hKzAVGDxxDWtxrc4",authDomain:"attendance-app-952ca.firebaseapp.com",projectId:"attendance-app-952ca",storageBucket:"attendance-app-952ca.firebasestorage.app",messagingSenderId:"93562351587",appId:"1:93562351587:web:c6fc01c82a2a5a0f397ad6",databaseURL:"https://attendance-app-952ca-default-rtdb.asia-southeast1.firebasedatabase.app"},b_=Vm(Uk),Xu=IC(b_),un=Dk(b_),zk=new ln,jk="mdsufyan7@gmail.com",U_=i=>i.trim().toLowerCase().replace(/\./g,","),z_=()=>{const i=new Date,e=n=>String(n).padStart(2,"0");return`${i.getFullYear()}-${e(i.getMonth()+1)}-${e(i.getDate())}`},md=i=>i.slice(0,7),j_=i=>{const[e,n]=i.split("-").map(Number);return new Date(e,n-1,1).toLocaleString("default",{month:"long",year:"numeric"})},Il=(i,e)=>{let n=0,s=0;for(const[u,d]of Object.entries(i||{}))e&&md(u)!==e||(d.status==="present"?n++:d.status==="absent"&&s++);const l=n+s;return{present:n,absent:s,total:l,percent:l?Math.round(n/l*100):0}},Wk=i=>[...new Set(Object.keys(i||{}).map(md))].sort().reverse();function Vk(){const[i,e]=Je.useState({}),[n,s]=Je.useState({}),[l,u]=Je.useState(""),[d,f]=Je.useState(""),[m,g]=Je.useState(md(z_())),[E,v]=Je.useState("");Je.useEffect(()=>{const L=Cl(an(un,"students"),ye=>e(ye.val()||{})),H=Cl(an(un,"attendance"),ye=>s(ye.val()||{}));return()=>{L(),H()}},[]);const S=async L=>{L.preventDefault(),v("");try{await Sl(an(un,`students/${U_(d)}`),{name:l.trim(),email:d.trim().toLowerCase()}),u(""),f("")}catch(H){v(H.message)}},O=async(L,H)=>{confirm(`Remove ${H} and all their attendance?`)&&(await Pm(an(un,`attendance/${L}`)),await Pm(an(un,`students/${L}`)))},F=Object.entries(i).map(([L,H])=>({key:L,...H,month:Il(n[L],m),overall:Il(n[L])})).sort((L,H)=>L.name.localeCompare(H.name));return A.jsxs(A.Fragment,{children:[A.jsxs("section",{className:"card",children:[A.jsx("h3",{children:"➕ Add student (optional)"}),A.jsxs("form",{onSubmit:S,className:"row",children:[A.jsx("input",{placeholder:"Name",value:l,onChange:L=>u(L.target.value),required:!0}),A.jsx("input",{type:"email",placeholder:"Google email",value:d,onChange:L=>f(L.target.value),required:!0}),A.jsx("button",{className:"btn primary",children:"Add"})]}),E&&A.jsx("p",{className:"error",children:E})]}),A.jsxs("section",{className:"card",children:[A.jsxs("div",{className:"row between",children:[A.jsxs("h3",{children:["📊 Report – ",j_(m)]}),A.jsx("input",{type:"month",value:m,onChange:L=>L.target.value&&g(L.target.value)})]}),A.jsx("div",{className:"scroll",children:A.jsxs("table",{children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:"Student"}),A.jsx("th",{children:"Email"}),A.jsx("th",{children:"Present"}),A.jsx("th",{children:"Absent"}),A.jsx("th",{children:"% (month)"}),A.jsx("th",{children:"% (overall)"}),A.jsx("th",{})]})}),A.jsxs("tbody",{children:[F.map(L=>A.jsxs("tr",{children:[A.jsx("td",{children:L.name}),A.jsx("td",{className:"muted",children:L.email}),A.jsx("td",{children:L.month.present}),A.jsx("td",{children:L.month.absent}),A.jsx("td",{children:A.jsx("b",{children:L.month.total?`${L.month.percent}%`:"–"})}),A.jsx("td",{children:L.overall.total?`${L.overall.percent}%`:"–"}),A.jsx("td",{children:A.jsx("button",{className:"btn danger",onClick:()=>O(L.key,L.name),children:"Remove"})})]},L.key)),!F.length&&A.jsx("tr",{children:A.jsx("td",{colSpan:"7",className:"muted",children:"No students yet."})})]})]})}),A.jsx("p",{className:"muted small",children:"Percentage = present days ÷ days marked (present + absent)."})]})]})}function Bk({user:i}){const e=U_(i.email),[n,s]=Je.useState(void 0),[l,u]=Je.useState({}),[d,f]=Je.useState(""),m=z_();Je.useEffect(()=>{const S=Cl(an(un,`students/${e}`),F=>s(F.val()),()=>s(null)),O=Cl(an(un,`attendance/${e}`),F=>u(F.val()||{}),()=>{});return()=>{S(),O()}},[e]),Je.useEffect(()=>{if(n!==null)return;const S=(i.displayName||i.email.split("@")[0]).trim().slice(0,100);Sl(an(un,`students/${e}`),{name:S,email:i.email.trim().toLowerCase()}).catch(O=>f(O.message))},[n,e,i]);const g=async S=>{f("");try{await Sl(an(un,`attendance/${e}/${m}`),{status:S,ts:bk()})}catch(O){f(O.message)}};if(n===void 0)return A.jsx("p",{className:"center",children:"Loading…"});if(n===null)return d?A.jsx("p",{className:"card error",children:d}):A.jsx("p",{className:"center",children:"Setting up your profile…"});const E=l[m],v=Il(l);return A.jsxs(A.Fragment,{children:[A.jsxs("section",{className:"card",children:[A.jsxs("h3",{children:["👋 Hello, ",n.name]}),A.jsxs("p",{className:"today",children:["📅 ",m]}),E?A.jsxs("p",{children:["You marked ",A.jsx("span",{className:`pill ${E.status}`,children:E.status})," for today."]}):A.jsxs("div",{className:"row",children:[A.jsx("button",{className:"btn present",onClick:()=>g("present"),children:"✓ Present"}),A.jsx("button",{className:"btn absent",onClick:()=>g("absent"),children:"✕ Absent"})]}),d&&A.jsx("p",{className:"error",children:d})]}),A.jsxs("section",{className:"card",children:[A.jsx("h3",{children:"📊 Month-wise report"}),A.jsxs("table",{children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:"Month"}),A.jsx("th",{children:"Present"}),A.jsx("th",{children:"Absent"}),A.jsx("th",{children:"Attendance %"})]})}),A.jsxs("tbody",{children:[Wk(l).map(S=>{const O=Il(l,S);return A.jsxs("tr",{children:[A.jsx("td",{children:j_(S)}),A.jsx("td",{children:O.present}),A.jsx("td",{children:O.absent}),A.jsx("td",{children:A.jsxs("b",{children:[O.percent,"%"]})})]},S)}),!Object.keys(l).length&&A.jsx("tr",{children:A.jsx("td",{colSpan:"4",className:"muted",children:"Nothing marked yet."})})]}),v.total>0&&A.jsx("tfoot",{children:A.jsxs("tr",{children:[A.jsx("td",{children:"Overall"}),A.jsx("td",{children:v.present}),A.jsx("td",{children:v.absent}),A.jsx("td",{children:A.jsxs("b",{children:[v.percent,"%"]})})]})})]})]})]})}function Hk(){var d;const[i,e]=Je.useState(void 0),[n,s]=Je.useState("");Je.useEffect(()=>hS(Xu,e),[]);const l=async()=>{s("");try{await DS(Xu,zk)}catch(f){s(f.message)}};if(i===void 0)return A.jsx("p",{className:"center",children:"Loading…"});if(!i)return A.jsx("div",{className:"login",children:A.jsxs("div",{className:"login-card",children:[A.jsx("div",{className:"logo",children:"🎓"}),A.jsx("h1",{children:"Student Attendance"}),A.jsx("p",{className:"muted",children:"Sign in with your Google account to mark today's attendance."}),A.jsx("button",{className:"btn primary big",onClick:l,children:"Sign in with Google"}),n&&A.jsx("p",{className:"error",children:n})]})});const u=((d=i.email)==null?void 0:d.toLowerCase())===jk;return A.jsxs("div",{className:"container",children:[A.jsxs("header",{children:[A.jsxs("h2",{children:["🎓 Attendance ",u&&A.jsx("span",{className:"tag",children:"Admin"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"muted",children:i.email})," ",A.jsx("button",{className:"btn",onClick:()=>fS(Xu),children:"Sign out"})]})]}),u?A.jsx(Vk,{}):A.jsx(Bk,{user:i})]})}$v.createRoot(document.getElementById("root")).render(A.jsx(Hk,{}));
