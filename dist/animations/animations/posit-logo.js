import{P as A,h as V,i as v,q as W,l as _,k,L as x,C as L,n as E,o as N,p as H,B as J,r as U,s as X,v as Y,x as G,y as K,z as Z,t as I,M,m as Q,j as u,A as C,a as d,D as tt,w as et,F as nt,N as D,V as ot,b as st,c as it}from"./makeScene2D.js";import{c as at}from"./createCurveProfileLerp.js";import{A as rt}from"./ArcSegment.js";import{c as lt}from"./chain.js";import{c as m}from"./createRef.js";import{T as ct}from"./Txt.js";/* empty css      */var ft=globalThis&&globalThis.__decorate||function(s,t,n,e){var i=arguments.length,o=i<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,n):e,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,n,e);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class p extends A{get points(){return[this.p0,this.p1,this.p2]}constructor(t,n,e){super(new V(t,t.flipped.add(n).scale(2),t.sub(n.scale(2)).add(e)),p.getLength(t,n,e)),this.p0=t,this.p1=n,this.p2=e}split(t){const n=new v(this.p0.x+(this.p1.x-this.p0.x)*t,this.p0.y+(this.p1.y-this.p0.y)*t),e=new v(this.p1.x+(this.p2.x-this.p1.x)*t,this.p1.y+(this.p2.y-this.p1.y)*t),i=new v(n.x+(e.x-n.x)*t,n.y+(e.y-n.y)*t),o=new p(this.p0,n,i),a=new p(i,e,this.p2);return[o,a]}static getLength(t,n,e){return p.el.setAttribute("d",`M ${t.x} ${t.y} Q ${n.x} ${n.y} ${e.x} ${e.y}`),p.el.getTotalLength()}doDraw(t){W(t,this.p1,this.p2)}}ft([_(()=>document.createElementNS("http://www.w3.org/2000/svg","path"))],p,"el",void 0);var ht=ut,T={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},pt=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function ut(s){var t=[];return s.replace(pt,function(n,e,i){var o=e.toLowerCase();for(i=dt(i),o=="m"&&i.length>2&&(t.push([e].concat(i.splice(0,2))),o="l",e=e=="m"?"l":"L");;){if(i.length==T[o])return i.unshift(e),t.push(i);if(i.length<T[o])throw new Error("malformed path data");t.push([e].concat(i.splice(0,T[o])))}}),t}var gt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function dt(s){var t=s.match(gt);return t?t.map(Number):[]}const mt=k(ht);function g(s,t){s.segments.push(t),s.arcLength+=t.arcLength}function b(s,t){return s[t+1]}function z(s,t){return new v(s[t+1],s[t+2])}function h(s,t,n,e){const i=z(s,t);return n?e.add(i):i}function R(s,t){return t.add(t.sub(s))}function Pt(s){for(let t=0;t<s.segments.length;t++){const n=s.segments[t],e=s.segments[(t+1)%s.segments.length],i=n.getPoint(1).tangent.scale(-1),o=e.getPoint(0).tangent,a=i.dot(o),r=Math.acos(E(-1,1,a)),l=Math.sin(r/2);s.minSin=Math.min(s.minSin,Math.abs(l))}}function $(s){const t={segments:[],arcLength:0,minSin:1},n=mt(s);let e=new v(0,0),i=null;for(const o of n){const a=o[0].toLowerCase(),r=o[0]===a;if(a==="m")e=h(o,0,r,e),i=e;else if(a==="l"){const l=h(o,0,r,e);g(t,new x(e,l)),e=l}else if(a==="h"){const l=b(o,0),c=r?e.addX(l):new v(l,e.y);g(t,new x(e,c)),e=c}else if(a==="v"){const l=b(o,0),c=r?e.addY(l):new v(e.x,l);g(t,new x(e,c)),e=c}else if(a==="q"){const l=h(o,0,r,e),c=h(o,2,r,e);g(t,new p(e,l,c)),e=c}else if(a==="t"){const l=t.segments.at(-1),c=l instanceof p?R(l.p1,e):e,f=h(o,0,r,e);g(t,new p(e,c,f)),e=f}else if(a==="c"){const l=h(o,0,r,e),c=h(o,2,r,e),f=h(o,4,r,e);g(t,new L(e,l,c,f)),e=f}else if(a==="s"){const l=t.segments.at(-1),c=l instanceof L?R(l.p2,e):e,f=h(o,0,r,e),y=h(o,2,r,e);g(t,new L(e,c,f,y)),e=y}else if(a==="a"){const l=z(o,0),c=b(o,2),f=b(o,3),y=b(o,4),F=h(o,5,r,e);g(t,new rt(e,l,c,f,y,F)),e=F}else if(a==="z"){if(!i||e.equals(i))continue;g(t,new x(e,i)),e=i}}return Pt(t),t}var j=globalThis&&globalThis.__decorate||function(s,t,n,e){var i=arguments.length,o=i<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,n):e,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,n,e);else for(var r=s.length-1;r>=0;r--)(a=s[r])&&(o=(i<3?a(o):i>3?a(t,n,o):a(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class P extends N{constructor(t){super(t),this.currentProfile=H(null),this.canHaveSubpath=!0}profile(){return this.currentProfile()??$(this.data())}childrenBBox(){const t=this.profile().segments.flatMap(n=>n.points);return J.fromPoints(...t)}lineWidthCoefficient(){const t=this.lineJoin();let n=super.lineWidthCoefficient();if(t==="miter"){const{minSin:e}=this.profile();e>0&&(n=Math.max(n,.5/e))}return n}processSubpath(t,n,e){n&&e&&n.equals(e)&&t.closePath()}*tweenData(t,n,e){const i=this.profile(),o=$(U(t)?t():t),a=at(i,o);this.currentProfile(i),yield*X(n,r=>{const l=e(r);this.currentProfile(a(l))},()=>{this.currentProfile(null),this.data(t)})}drawOverlay(t,n){const e=this.childrenBBox().transformCorners(n),o=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(n),a=this.profile().segments;t.lineWidth=1,t.strokeStyle="white",t.fillStyle="white",t.save(),t.setTransform(n);let r=null,l=new Path2D;for(const c of a){r&&!c.getPoint(0).position.equals(r)&&(t.stroke(l),l=new Path2D,r=null);const[,f]=c.draw(l,0,1,r==null);r=f.position}t.stroke(l),t.restore(),t.beginPath(),Y(t,o),t.stroke(),t.beginPath(),G(t,e),t.closePath(),t.stroke()}}j([K()],P.prototype,"data",void 0);j([Z()],P.prototype,"profile",null);j([I()],P.prototype,"tweenData",null);let q;q??(q=new M("posit-logo",!1));q.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const wt=q;let B;B??(B=new M("posit_logo",!1));B.loadData({version:0,timeEvents:[{name:"text",targetTime:6},{name:"boat",targetTime:9},{name:"end",targetTime:14.35575410368991}],seed:1087458376});const vt=B;function bt(s){let t="M "+s[0][0]+" "+s[0][1];for(let n=1;n<s.length;n++)t+=" L "+s[n][0]+" "+s[n][1];return t}function S(){return bt([[0,-125],[200,-25],[200,25],[0,125],[0,75],[150,0],[0,-75],[0,-125]])}const w=Q(function*(s){const t=m(),n=m(),e=m(),i=m(),o=m(),a=m(),r=m(),l="M 0 -125 L 50 -125 L 50 125 L 0 125 L 0 -125";s.add(u(nt,{children:[u(D,{ref:t,children:[u(P,{ref:e,position:[-50,0],scale:1,stroke:"#666",rotation:180,lineWidth:5,data:l}),",",u(P,{ref:n,position:[50,0],scale:1,stroke:"#666",lineWidth:5,data:l}),","]}),u(D,{children:u(ct,{ref:r,text:"",fill:"#666",fontFamily:"Open Sans",fontSize:150})}),u(D,{ref:i,position:[0,200],children:[u(P,{ref:a,position:[-50,0],scale:.5,fill:"#666",rotation:180,lineWidth:5,data:l}),",",u(P,{ref:o,position:[50,0],scale:.5,fill:"#666",lineWidth:5,data:l}),","]})]})),yield*lt(et(1),d(n().data(S(),1),e().data(S(),1)),d(n().position.x(-100,1),e().position.x(100,1)),d(e().stroke("#e13238",2),n().stroke("#33c",2)),d(t().position([875,425],1),t().scale(.5,1)),C("text"),r().text("Posit goes Paddling",3,tt),C("boat"),d(a().data(S(),1),o().data(S(),1)),d(a().position.x(0,1),o().position.x(0,1)),d(a().scale.x(1.25,1),o().scale.x(2,1)),C("end"))});w.name="posit_logo";vt.attach(w.meta);w.onReplaced??(w.onReplaced=new ot(w.config));const yt=st({scenes:[w]}),O=new M("settings","\0settings");O.loadData({version:1,appearance:{color:"rgb(51,166,255)",font:!1,coordinates:!0},defaults:{background:null,size:{x:1920,y:1080}}});const jt=it("posit-logo",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[],yt,wt,O);export{jt as default};
