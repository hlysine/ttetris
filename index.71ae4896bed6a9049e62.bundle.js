(self.webpackChunktetris_ai=self.webpackChunktetris_ai||[]).push([[826],{810:(e,t,n)=>{"use strict";var i=n(294),r=n(935),o=n(727),a=n(977);const l=function(e){return i.createElement("p",null,"Not found")};const s=function(){return i.createElement("div",{className:"flex flex-col justify-center items-center select-none min-h-screen bg-gradient-to-br from-gray-900  to-blue-700"},i.createElement("h1",{className:"text-6xl text-green-500 border-b-4 pb-4"},"Hello World !"),i.createElement("h2",{className:"text-2xl text-gray-300 mt-10"},"Click"," ",i.createElement(o.rU,{to:"/test",className:"text-green-400 underline"},"here")," ","to play pre-alpha Tetris"))};const u=function(e){return i.createElement(s,null)};var c;!function(e){e[e.None=0]="None",e[e.SoftDrop=1]="SoftDrop",e[e.HardDrop=2]="HardDrop",e[e.Hold=3]="Hold",e[e.ShiftLeft=4]="ShiftLeft",e[e.ShiftRight=5]="ShiftRight",e[e.RotateCW=6]="RotateCW",e[e.RotateCCW=7]="RotateCCW"}(c||(c={}));const h=c;function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w,d,v,g,p,y,k,m,b,P,R,T,C,E,A,F,S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.X=t,this.Y=n}var t,n,i;return t=e,(n=[{key:"Add",value:function(t){return new e(this.X+t.X,this.Y+t.Y)}},{key:"Subtract",value:function(t){return new e(this.X-t.X,this.Y-t.Y)}},{key:"Clone",value:function(){return new e(this.X,this.Y)}}])&&f(t.prototype,n),i&&f(t,i),e}();function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){switch(t){case E.None:return e.color(50);case E.I:return e.color(77,208,225);case E.J:return e.color(33,150,243);case E.L:return e.color(255,152,0);case E.O:return e.color(253,216,53);case E.S:return e.color(76,175,80);case E.T:return e.color(224,64,251);case E.Z:return e.color(229,115,115)}}!function(e){e[e.None=0]="None",e[e.I=1]="I",e[e.J=2]="J",e[e.L=3]="L",e[e.O=4]="O",e[e.S=5]="S",e[e.T=6]="T",e[e.Z=7]="Z"}(E||(E={})),function(e){e[e.R0=0]="R0",e[e.R90=1]="R90",e[e.R180=2]="R180",e[e.R270=3]="R270"}(A||(A={})),function(e){e[e.CW=1]="CW",e[e.CCW=-1]="CCW"}(F||(F={}));var H=Object.freeze([(w={},I(w,-1,[new S(0,0),new S(1,0),new S(1,1),new S(0,-2),new S(1,-2)]),I(w,1,[new S(0,0),new S(-1,0),new S(-1,1),new S(0,-2),new S(-1,-2)]),w),(d={},I(d,-1,[new S(0,0),new S(1,0),new S(1,-1),new S(0,2),new S(1,2)]),I(d,1,[new S(0,0),new S(1,0),new S(1,-1),new S(0,2),new S(1,2)]),d),(v={},I(v,-1,[new S(0,0),new S(-1,0),new S(-1,1),new S(0,-2),new S(-1,-2)]),I(v,1,[new S(0,0),new S(1,0),new S(1,1),new S(0,-2),new S(1,-2)]),v),(g={},I(g,-1,[new S(0,0),new S(-1,0),new S(-1,-1),new S(0,2),new S(-1,2)]),I(g,1,[new S(0,0),new S(-1,0),new S(-1,-1),new S(0,2),new S(-1,2)]),g)]),L=Object.freeze([(p={},I(p,-1,[new S(0,0),new S(-1,0),new S(2,0),new S(-1,2),new S(2,-1)]),I(p,1,[new S(0,0),new S(-2,0),new S(1,0),new S(-2,-1),new S(1,2)]),p),(y={},I(y,-1,[new S(0,0),new S(2,0),new S(-1,0),new S(2,1),new S(-1,-2)]),I(y,1,[new S(0,0),new S(-1,0),new S(2,0),new S(-1,2),new S(2,-1)]),y),(k={},I(k,-1,[new S(0,0),new S(1,0),new S(-2,0),new S(1,-2),new S(-2,1)]),I(k,1,[new S(0,0),new S(2,0),new S(-1,0),new S(2,1),new S(-1,-2)]),k),(m={},I(m,-1,[new S(0,0),new S(-2,0),new S(1,0),new S(-2,-1),new S(1,2)]),I(m,1,[new S(0,0),new S(1,0),new S(-2,0),new S(1,-2),new S(-2,1)]),m)]),N=Object.freeze([(b={},I(b,-1,[new S(0,0)]),I(b,1,[new S(0,0)]),b),(P={},I(P,-1,[new S(0,0)]),I(P,1,[new S(0,0)]),P),(R={},I(R,-1,[new S(0,0)]),I(R,1,[new S(0,0)]),R),(T={},I(T,-1,[new S(0,0)]),I(T,1,[new S(0,0)]),T)]),G=Object.freeze((I(C={},E.None,{Rotations:[[]],WallKick:N}),I(C,E.I,{Rotations:[[new S(0,2),new S(1,2),new S(2,2),new S(3,2)],[new S(2,0),new S(2,1),new S(2,2),new S(2,3)],[new S(0,1),new S(1,1),new S(2,1),new S(3,1)],[new S(1,0),new S(1,1),new S(1,2),new S(1,3)]],WallKick:L}),I(C,E.J,{Rotations:[[new S(0,2),new S(0,1),new S(1,1),new S(2,1)],[new S(2,2),new S(1,2),new S(1,1),new S(1,0)],[new S(0,1),new S(1,1),new S(2,1),new S(2,0)],[new S(0,0),new S(1,0),new S(1,1),new S(1,2)]],WallKick:H}),I(C,E.L,{Rotations:[[new S(0,1),new S(1,1),new S(2,1),new S(2,2)],[new S(1,2),new S(1,1),new S(1,0),new S(2,0)],[new S(0,0),new S(0,1),new S(1,1),new S(2,1)],[new S(0,2),new S(1,2),new S(1,1),new S(1,0)]],WallKick:H}),I(C,E.O,{Rotations:[[new S(0,0),new S(0,1),new S(1,0),new S(1,1)]],WallKick:N}),I(C,E.S,{Rotations:[[new S(0,1),new S(1,1),new S(1,2),new S(2,2)],[new S(1,2),new S(1,1),new S(2,1),new S(2,0)],[new S(0,0),new S(1,0),new S(1,1),new S(2,1)],[new S(0,2),new S(0,1),new S(1,1),new S(1,0)]],WallKick:H}),I(C,E.T,{Rotations:[[new S(0,1),new S(1,1),new S(1,2),new S(2,1)],[new S(1,2),new S(1,1),new S(2,1),new S(1,0)],[new S(0,1),new S(1,0),new S(1,1),new S(2,1)],[new S(1,2),new S(0,1),new S(1,1),new S(1,0)]],WallKick:H}),I(C,E.Z,{Rotations:[[new S(0,2),new S(1,1),new S(1,2),new S(2,1)],[new S(2,2),new S(1,1),new S(2,1),new S(1,0)],[new S(0,1),new S(1,0),new S(1,1),new S(2,0)],[new S(1,2),new S(0,1),new S(1,1),new S(0,0)]],WallKick:H}),C));const O=G;Array.prototype.max||Object.defineProperty(Array.prototype,"max",{enumerable:!1,writable:!1,configurable:!1,value:function(){for(var e=this.length,t=this[0];e--;)this[e]>t&&(t=this[e]);return t}}),Array.prototype.maxBy||Object.defineProperty(Array.prototype,"maxBy",{enumerable:!1,writable:!1,configurable:!1,value:function(e){for(var t=this.length,n=e(this[0]),i=this[0];t--;){var r=e(this[t]);r>n&&(n=r,i=this[t])}return i}}),Array.prototype.min||Object.defineProperty(Array.prototype,"min",{enumerable:!1,writable:!1,configurable:!1,value:function(){for(var e=this.length,t=this[0];e--;)this[e]<t&&(t=this[e]);return t}}),Array.prototype.minBy||Object.defineProperty(Array.prototype,"minBy",{enumerable:!1,writable:!1,configurable:!1,value:function(e){for(var t=this.length,n=e(this[0]),i=this[0];t--;){var r=e(this[t]);r<n&&(n=r,i=this[t])}return i}});const x=function(e){return function(){var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296}};function D(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function X(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,q(e,t,"set"),n),n}function M(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,q(e,t,"get"))}function q(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var K=new WeakMap,V=new WeakMap,Q=new WeakMap,_=function(){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN;if(B(this,e),K.set(this,{writable:!0,value:void 0}),V.set(this,{writable:!0,value:void 0}),Q.set(this,{writable:!0,value:void 0}),n instanceof Array)return X(this,V,null),X(this,Q,new Array(i+n.length).fill(E.None)),(t=M(this,Q)).splice.apply(t,[i,n.length].concat(D(n))),void X(this,K,null);X(this,V,void 0===n?Math.floor(Math.random()*Math.pow(2,32)):n),X(this,K,x(M(this,V))),X(this,Q,[])}var t,n,i;return t=e,(n=[{key:"Seed",get:function(){return M(this,V)}},{key:"generate",value:function(){if(null!==M(this,V)&&null!==M(this,K))for(var e=[E.I,E.J,E.L,E.O,E.S,E.T,E.Z];e.length>0;){var t=M(this,K).call(this)%e.length;M(this,Q).push(e.splice(t,1)[0])}else M(this,Q).push(E.None)}},{key:"Get",value:function(e){for(;M(this,Q).length<=e;)this.generate();return M(this,Q)[e]}},{key:"GetRange",value:function(e,t){for(;M(this,Q).length<=e+t;)this.generate();return M(this,Q).slice(e,e+t)}}])&&Y(t.prototype,n),i&&Y(t,i),e}();function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var z=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.R0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:NaN,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:NaN,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:h.None;J(this,e),this.Type=t,this.Rotation=n,i?this.Position=i:(this.Position=new S(4,21),this.Bottom=21,this.Left=Math.floor(5-this.Width/2)),this.LastActionTick=r,this.ActionCount=o,this.DropTick=a,this.LastAction=l}var t,n,i;return t=e,i=[{key:"Spawn",value:function(t,n){return new e(t,void 0,void 0,n,0,n)}}],(n=[{key:"InternalPoints",get:function(){return G[this.Type].Rotations[this.Rotation]}},{key:"Points",get:function(){var e=this;return G[this.Type].Rotations[this.Rotation].map((function(t){return t.Add(e.Position)}))}},{key:"InternalLeft",get:function(){return this.InternalPoints.map((function(e){return e.X})).min()}},{key:"InternalRight",get:function(){return this.InternalPoints.map((function(e){return e.X})).max()}},{key:"InternalTop",get:function(){return this.InternalPoints.map((function(e){return e.Y})).max()}},{key:"InternalBottom",get:function(){return this.InternalPoints.map((function(e){return e.Y})).min()}},{key:"Left",get:function(){return this.Position.X+this.InternalLeft},set:function(e){this.Position.X=e-this.InternalLeft}},{key:"Right",get:function(){return this.Position.X+this.InternalRight},set:function(e){this.Position.X=e-this.InternalRight}},{key:"Top",get:function(){return this.Position.Y+this.InternalTop},set:function(e){this.Position.Y=e-this.InternalTop}},{key:"Bottom",get:function(){return this.Position.Y+this.InternalBottom},set:function(e){this.Position.Y=e-this.InternalBottom}},{key:"Width",get:function(){return this.InternalRight-this.InternalLeft}},{key:"Height",get:function(){return this.InternalTop-this.InternalBottom}},{key:"Rotate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.CW;this.Rotation+=e,this.Rotation>3&&(this.Rotation=0),this.Rotation<0&&(this.Rotation=3)}},{key:"Clone",value:function(){return new e(this.Type,this.Rotation,this.Position.Clone(),this.LastActionTick,this.ActionCount,this.DropTick,this.LastAction)}}])&&Z(t.prototype,n),i&&Z(t,i),e}();function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function $(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,te(e,t,"set"),n),n}function ee(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,te(e,t,"get"))}function te(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ie=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:E.None,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]&&arguments[6],u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:h.None;ne(this,e),this.Grid=new Array(40).fill(null).map((function(){return new Array(10).fill(E.None)})),r&&r.forEach((function(e,n){return e.forEach((function(e,i){return t.Grid[n][i]=e}))})),this.Falling=o?o.Clone():null,this.Hold=a,this.BlockHold=s,this.TicksElapsed=l,this.PieceQueue=n,this.PieceIndex=i,this.LastAction=u},re=new WeakMap;const oe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.None,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(ne(this,e),re.set(this,{writable:!0,value:void 0}),t instanceof ie){var l=t;this.Grid=l.Grid,this.Falling=l.Falling,this.Hold=l.Hold,this.BlockHold=l.BlockHold,this.TicksElapsed=l.TicksElapsed,$(this,re,new _(l.PieceQueue,l.PieceIndex)),this.PieceIndex=l.PieceIndex}else this.Grid=new Array(40).fill(null).map((function(){return new Array(10).fill(E.None)})),this.Falling=i,this.Hold=r,this.BlockHold=a,this.TicksElapsed=o,$(this,re,new _(t)),this.PieceIndex=n}var t,n,i;return t=e,(n=[{key:"GridWidth",get:function(){return 10}},{key:"GridHeight",get:function(){return 40}},{key:"PlayfieldHeight",get:function(){return 20}},{key:"PieceQueue",get:function(){return ee(this,re).GetRange(this.PieceIndex,6)}},{key:"Get",value:function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(e instanceof S)t=e.X,n=e.Y;else{if(void 0===i)return null;t=e,n=i}return t<0||n<0||t>=10||n>=40?null:this.Grid[n][t]}},{key:"IsPieceValid",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!t.Points.some((function(t){var n;return(null!==(n=e.Get(t))&&void 0!==n?n:E.I)!==E.None})):!this.Falling||!this.Falling.Points.some((function(t){var n;return(null!==(n=e.Get(t))&&void 0!==n?n:E.I)!==E.None}))}},{key:"DequeuePiece",value:function(){return null===this.Falling&&(this.Falling=z.Spawn(ee(this,re).Get(this.PieceIndex++),this.TicksElapsed),this.BlockHold=!1,!0)}},{key:"HoldPiece",value:function(){if(null===this.Falling)return!1;if(this.BlockHold)return!1;var e=this.Hold;return this.Hold=this.Falling.Type,e===E.None&&(e=ee(this,re).Get(this.PieceIndex++)),this.Falling=z.Spawn(e,this.TicksElapsed),this.BlockHold=!0,this.Falling.LastAction=h.Hold,!0}},{key:"ClearLines",value:function(){for(var e=0,t=0;t<this.GridHeight;t++)this.Grid[t].some((function(e){return e===E.None}))||(this.Grid.splice(t,1),this.Grid.push(new Array(this.GridWidth).fill(E.None)),e++,t--);console.log(e)}},{key:"LockPiece",value:function(){var e=this;return null!==this.Falling&&!!this.IsPieceValid()&&(this.Falling.Points.forEach((function(t){var n,i;return e.Grid[t.Y][t.X]=null!==(n=null===(i=e.Falling)||void 0===i?void 0:i.Type)&&void 0!==n?n:E.None})),this.ClearLines(this.Falling),this.Falling=null,!0)}},{key:"RotatePiece",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.CW;if(null===this.Falling)return!1;var n=G[this.Falling.Type].WallKick[this.Falling.Rotation][t].find((function(n){var i,r=null===(i=e.Falling)||void 0===i?void 0:i.Clone();return!!r&&(r.Rotate(t),r.Position=r.Position.Add(n),e.IsPieceValid(r))}));return!!n&&(this.Falling.Rotate(t),this.Falling.Position=this.Falling.Position.Add(n),this.Falling.LastActionTick=this.TicksElapsed,this.Falling.ActionCount++,this.Falling.LastAction=t===F.CW?h.RotateCW:h.RotateCCW,!0)}},{key:"ShiftPiece",value:function(e){if(null===this.Falling)return!1;var t=this.Falling.Clone();return t.Position.X+=e,!!this.IsPieceValid(t)&&(this.Falling=t,this.Falling.LastActionTick=this.TicksElapsed,this.Falling.ActionCount++,this.Falling.LastAction=e>0?h.ShiftRight:h.ShiftLeft,!0)}},{key:"CanPieceDrop",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(t)e=t.Clone();else{if(!this.Falling)return!1;e=this.Falling.Clone()}return e.Position.Y--,this.IsPieceValid(e)}},{key:"SoftDropPiece",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return null!==this.Falling&&!!this.CanPieceDrop()&&(this.Falling.Position.Y--,this.Falling.LastActionTick=this.TicksElapsed,this.Falling.ActionCount=0,e?this.Falling.DropTick=this.TicksElapsed:this.Falling.LastAction=h.SoftDrop,!0)}},{key:"HardDropPiece",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(t)e=t;else{if(!this.Falling)return!1;e=this.Falling}for(;this.IsPieceValid(e);)e.Position.Y--;return e.Position.Y++,e.LastAction=h.HardDrop,e!==this.Falling||this.LockPiece()}},{key:"Tick",value:function(){null===this.Falling?this.DequeuePiece():(this.TicksElapsed-this.Falling.DropTick>=0&&this.SoftDropPiece(!0),this.TicksElapsed-this.Falling.LastActionTick>=400&&!this.CanPieceDrop()&&this.LockPiece()),this.TicksElapsed++}},{key:"GetVisibleState",value:function(){return new ie(this.PieceQueue,this.PieceIndex,this.Grid,this.Falling,this.Hold,this.TicksElapsed,this.BlockHold)}}])&&U(t.prototype,n),i&&U(t,i),e}();function ae(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function le(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function se(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,ce(e,t,"set"),n),n}function ue(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,ce(e,t,"get"))}function ce(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var he=new WeakMap,fe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;ae(this,e),he.set(this,{writable:!0,value:void 0}),se(this,he,null),this.Player=t,this.State=n instanceof oe?n:void 0!==n?new oe(n):new oe}var t,n,i;return t=e,(n=[{key:"ClockRunning",get:function(){return null!==ue(this,he)}},{key:"StartClock",value:function(){se(this,he,window.setInterval(this.Tick.bind(this),1))}},{key:"StopClock",value:function(){null!==ue(this,he)&&window.clearInterval(ue(this,he))}},{key:"Tick",value:function(){switch(this.State.Tick(),this.Player.Tick(this.State.GetVisibleState())){case h.None:return;case h.HardDrop:this.State.HardDropPiece();break;case h.Hold:this.State.HoldPiece();break;case h.RotateCW:this.State.RotatePiece(F.CW);break;case h.RotateCCW:this.State.RotatePiece(F.CCW);break;case h.ShiftLeft:this.State.ShiftPiece(-1);break;case h.ShiftRight:this.State.ShiftPiece(1);break;case h.SoftDrop:this.State.SoftDropPiece(!1)}}}])&&le(t.prototype,n),i&&le(t,i),e}(),we=n(210),de=n.n(we);function ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ge(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,ye(e,t,"set"),n),n}function pe(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,ye(e,t,"get"))}function ye(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var ke=new WeakMap,me=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ke.set(this,{writable:!0,value:void 0}),ge(this,ke,[])}var t,n,i;return t=e,(n=[{key:"Tick",value:function(e){var t;return null!==(t=pe(this,ke).shift())&&void 0!==t?t:h.None}},{key:"Enqueue",value:function(e){pe(this,ke).push(e)}}])&&ve(t.prototype,n),i&&ve(t,i),e}(),be=20,Pe=new me,Re=new fe(Pe);Re.StartClock();const Te=function(e){return i.createElement(de(),{setup:function(e,t){e.createCanvas(500,402).parent(t)},draw:function(e){e.translate(120,-398);var t=function(e,t,i,r){var o=W(e,null!=t?t:E.None);o.setAlpha(r),e.fill(o),i.forEach((function(t){e.rect(t.X*be,(n.GridHeight-t.Y-1)*be,be,be)}))};e.background(100);var n=Re.State;if(n){e.stroke(0);for(var i=0;i<=n.GridHeight;i++)e.line(0,i*be,n.GridWidth*be,i*be);for(var r=0;r<=n.GridWidth;r++)e.line(r*be,0,r*be,n.GridHeight*be);for(var o=0;o<n.GridHeight;o++)for(var a=0;a<n.GridWidth;a++){var l;e.fill(W(e,null!==(l=n.Get(a,o))&&void 0!==l?l:E.None)),e.rect(a*be,(n.GridHeight-o-1)*be,be,be)}for(var s=function(i){var r=O[n.PieceQueue[i]].Rotations[0].map((function(e){return e.Add(new S(12,15-4*i))}));t(e,n.PieceQueue[i],r,255)},u=0;u<n.PieceQueue.length;u++)s(u);if(n.Falling){var c,h,f=n.Falling.Points;t(e,null===(c=n.Falling)||void 0===c?void 0:c.Type,f,255);var w=n.Falling.Clone();n.HardDropPiece(w);var d=w.Points;t(e,null===(h=n.Falling)||void 0===h?void 0:h.Type,d,100)}if(n.Hold){var v=O[n.Hold].Rotations[0].map((function(e){return e.Add(new S(-5,15))}));t(e,n.Hold,v,255)}}},keyPressed:function(e){Pe instanceof me&&(e.keyCode===e.LEFT_ARROW&&Pe.Enqueue(h.ShiftLeft),e.keyCode===e.RIGHT_ARROW&&Pe.Enqueue(h.ShiftRight),e.keyCode===e.UP_ARROW&&Pe.Enqueue(h.RotateCW),e.keyCode===e.CONTROL&&Pe.Enqueue(h.RotateCCW),e.keyCode===e.DOWN_ARROW&&Pe.Enqueue(h.SoftDrop),e.keyCode===e.SHIFT&&Pe.Enqueue(h.Hold)," "===e.key&&Pe.Enqueue(h.HardDrop))}})};const Ce=function(){return i.createElement(o.UT,null,i.createElement(a.rs,null,i.createElement(a.AW,{exact:!0,path:"/",component:u}),i.createElement(a.AW,{exact:!0,path:"/test",component:Te}),i.createElement(a.AW,{component:l})))};r.render(i.createElement(Ce,null),document.getElementById("app"))}},e=>{"use strict";var t;t=810,e(e.s=t)}]);