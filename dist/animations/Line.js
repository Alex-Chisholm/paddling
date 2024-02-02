import{a as g,p as L,g as v,b as _}from"./createCurveProfileLerp.js";import{o as B,i as d,Y as m,s as k,p as D,e as q,Z as S,B as W,_ as z,$ as C,a0 as N,v as O,x as T,G as b,y,t as M,z as P,Q as R}from"./makeScene2D.js";var p=globalThis&&globalThis.__decorate||function(c,s,e,t){var i=arguments.length,a=i<3?s:t===null?t=Object.getOwnPropertyDescriptor(s,e):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(c,s,e,t);else for(var l=c.length-1;l>=0;l--)(n=c[l])&&(a=(i<3?n(a):i>3?n(s,e,a):n(s,e))||a);return i>3&&a&&Object.defineProperty(s,e,a),a},f;let r=f=class extends B{static rotatePoints(s,e,t){if(t){let i=1/0,a=0;for(let n=0;n<s.length;n+=1){const l=g(s,e,n);l<i&&(i=l,a=n)}if(a){const n=s.splice(0,a);s.splice(s.length,0,...n)}}else{const i=g(s,e,0),a=[...s].reverse();g(a,e,0)<i&&s.reverse()}}static distributePoints(s,e){if(s.length===0){for(let l=0;l<e;l++)s.push(d.zero);return}if(s.length===1){const l=s[0];for(let o=0;o<e;o++)s.push(l);return}const t=s.length+e,i=L(s);let a=e/i,n=0;for(;s.length<t;){const l=t-s.length;if(n+1>=s.length){a=l/i,n=0;continue}const o=s[n],h=s[n+1],w=o.sub(h).magnitude,j=Math.min(Math.round(w*a),l)+1;for(let u=1;u<j;u++)s.splice(++n,0,d.lerp(o,h,u/j));n++}}*tweenPoints(s,e,t){const i=[...this.parsedPoints()],a=this.parsePoints(m(s)),n=this.closed(),l=i.length-a.length;f.distributePoints(l<0?i:a,Math.abs(l)),f.rotatePoints(a,i,n),this.tweenedPoints(i),yield*k(e,o=>{const h=t(o);this.tweenedPoints(_(i,a,h))},()=>{this.tweenedPoints(null),this.points(s)})}constructor(s){super(s),this.tweenedPoints=D(null),s.children===void 0&&s.points===void 0&&q().warn({message:"No points specified for the line",remarks:`<p>The line won&#39;t be visible unless you specify at least two points:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span>
  stroke=<span class="hljs-string">&quot;#fff&quot;</span>
  lineWidth={<span class="hljs-number">8</span>}
  points={[
    [<span class="hljs-number">100</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
    [<span class="hljs-number">0</span>, <span class="hljs-number">100</span>],
  ]}
/&gt;
</code></pre><p>Alternatively, you can define the points using the children:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>}&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">x</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> /&gt;</span></span>
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Node</span> <span class="hljs-attr">y</span>=<span class="hljs-string">{100}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Line</span>&gt;
</code></pre><p>If you did this intentionally, and want to disable this message, set the
<code>points</code> property to <code>null</code>:</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Line</span> stroke=<span class="hljs-string">&quot;#fff&quot;</span> lineWidth={<span class="hljs-number">8</span>} points={<span class="hljs-literal">null</span>} /&gt;
</code></pre>`,inspect:this.key})}childrenBBox(){let s=this.tweenedPoints();if(!s){const e=this.points();s=e?e.map(t=>new d(m(t))):this.children().filter(t=>!(t instanceof S)||t.isLayoutRoot()).map(t=>t.position())}return W.fromPoints(...s)}parsedPoints(){return this.parsePoints(this.points())}profile(){return v(this.tweenedPoints()??this.parsedPoints(),this.radius(),this.closed())}lineWidthCoefficient(){const s=this.radius(),e=this.lineJoin();let t=super.lineWidthCoefficient();if(s===0&&e==="miter"){const{minSin:i}=this.profile();i>0&&(t=Math.max(t,.5/i))}return t}drawOverlay(s,e){const t=this.childrenBBox().transformCorners(e),a=this.computedSize().mul(this.offset()).scale(.5).transformAsPoint(e);s.fillStyle="white",s.strokeStyle="black",s.lineWidth=1;const n=new Path2D,l=(this.tweenedPoints()??this.parsedPoints()).map(o=>o.transformAsPoint(e));if(l.length>0){z(n,l[0]);for(const o of l)C(n,o),s.beginPath(),N(s,o,4),s.closePath(),s.fill(),s.stroke()}s.strokeStyle="white",s.stroke(n),s.beginPath(),O(s,a),s.stroke(),s.beginPath(),T(s,t),s.closePath(),s.stroke()}parsePoints(s){return s?s.map(e=>new d(m(e))):this.children().map(e=>e.position())}};p([b(0),y()],r.prototype,"radius",void 0);p([b(null),y()],r.prototype,"points",void 0);p([M()],r.prototype,"tweenPoints",null);p([P()],r.prototype,"childrenBBox",null);p([P()],r.prototype,"parsedPoints",null);p([P()],r.prototype,"profile",null);r=f=p([R("Line")],r);export{r as L};