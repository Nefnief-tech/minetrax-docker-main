import{a as r,t as s,b as o}from"./AppLayout-3157e4a2.js";function i(a,t){r(2,arguments);var e=s(a),n=o(t);return isNaN(n)?new Date(NaN):(n&&e.setDate(e.getDate()+n),e)}function d(a,t){r(2,arguments);var e=s(a),n=o(t);if(isNaN(n))return new Date(NaN);if(!n)return e;var f=e.getDate(),u=new Date(e.getTime());u.setMonth(e.getMonth()+n+1,0);var g=u.getDate();return f>=g?u:(e.setFullYear(u.getFullYear(),u.getMonth(),f),e)}function v(a){r(1,arguments);var t=s(a);return t.setHours(0,0,0,0),t}function D(a){r(1,arguments);var t=s(a);return t.setHours(23,59,59,999),t}function l(a){r(1,arguments);var t=s(a),e=t.getMonth();return t.setFullYear(t.getFullYear(),e+1,0),t.setHours(23,59,59,999),t}function h(a){r(1,arguments);var t=s(a);return t.setDate(1),t.setHours(0,0,0,0),t}function c(a){r(1,arguments);var t=s(a),e=new Date(0);return e.setFullYear(t.getFullYear(),0,1),e.setHours(0,0,0,0),e}function M(a,t){r(2,arguments);var e=o(t);return i(a,-e)}function N(a,t){r(2,arguments);var e=o(t);return d(a,-e)}export{M as a,h as b,N as c,l as d,D as e,c as f,v as s};
