(()=>{"use strict";var e,r={7530:(e,r,n)=>{var t=n(4804),o=n(7811),a=n(9800),i=n(7761),s=n(9529),c=n(6424),l=n(5761),u=n(6893),p=n(6181),v=n(1943),d=n(196);const f=[-40,50,-10,65];Cesium.Ion.defaultAccessToken=d.x;const m=new l.Z({layers:[new c.Z({source:new s.Z}),new u.Z({source:new v.Z({url:"data/image-static.png",crossOrigin:"",projection:"EPSG:4326",imageExtent:f})})],controls:(0,i.c)({attributionOptions:{collapsible:!1}}),target:"map",view:new a.ZP({center:(0,o.vs)((0,p.qg)(f),"EPSG:4326","EPSG:3857"),zoom:4,projection:"EPSG:3857"})}),b=new t.Z({map:m}),g=b.getCesiumScene();Cesium.createWorldTerrainAsync().then((e=>g.terrainProvider=e)),b.setEnabled(!0),document.getElementById("enable").addEventListener("click",(()=>b.setEnabled(!b.getEnabled())))}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.j=982,(()=>{var e={982:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[i,s,c]=n,l=0;if(i.some((r=>0!==e[r]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(r&&r(n);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},n=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[351],(()=>t(7530)));o=t.O(o)})();
//# sourceMappingURL=image-static.d5c6b3d362f7e0bd7cf2.js.map