/**
 * This file is part of ReSampled SoundBox.
 *
 * Based on SoundBox by Marcus Geelnard (c) 2011-2013
 * 2015 pointofpresence
 * ReSampled.SoundBox (resampled-sound-box) - Online music tracker
 * @version v0.0.1
 * @build Sun Jul 12 2015 21:32:34
 * @link https://github.com/pointofpresence/resampled-sound-box
 * @license GPL-3.0
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source
 *    distribution.
 */
"use strict";var CJammer=function(){var t,n,r,o,i,e,a,s,u,f=8,d=[],c=131072,v=function(t){return Math.sin(6.283184*t)},h=function(t){return 2*(t%1)-1},w=function(t){return.5>t%1?1:-1},l=function(t){var n=t%1*4;return 2>n?n-1:3-n},p=function(t){return 174.614115728/s*Math.pow(2,(t-128)/12)},M=[v,w,h,l],A=function(e,a){var h,w,l,p,A,C,y,b=a.length;for(l=0;b>l;++l)e[l]=0,a[l]=0;for(h=0;f>h;++h){var g=d[h];if(void 0!=g){var m=M[g.instr[0]],P=g.instr[1],x=g.instr[3],D=M[g.instr[4]],S=g.instr[5],T=g.instr[8],k=g.instr[9],B=Math.round(g.instr[10]*g.instr[10]*4*u),F=Math.round(g.instr[11]*g.instr[11]*4*u),J=Math.round(g.instr[12]*g.instr[12]*4*u),N=1/J,R=g.o1f,I=g.o2f,L=g.o1t,j=g.o2t,q=B+F+J-g.env;for(b>=q?d[h]=void 0:q=b,w=g.env,l=0;q>l;w++,l++)A=1,B>w?A=w/B:w>=B+F&&(A-=(w-B-F)*N),p=R,x&&(p*=A*A),L+=p,C=m(L)*P,p=I,T&&(p*=A*A),j+=p,C+=D(j)*S,k&&(C+=(2*Math.random()-1)*k),a[l]+=.002441481*C*A;g.env=w,g.o1t=L,g.o2t=j}}var z,E,G,H=r.pos,K=r.low,O=r.band,Q=r.filterActive,U=r.dlyPos,V=c-1,W=M[t[13]],X=t[14]/512,Y=Math.pow(2,t[15]-9)/n,Z=t[16],$=t[17],_=43.23529*t[18]*3.141592/s,tt=1-t[19]/255,nt=1e-5*t[20]*32767,rt=t[21]/32,ot=t[22]/512,it=6.283184*Math.pow(2,t[23]-9)/n,et=t[24]/255,at=t[25]*n>>1;for(at>=c&&(at=c-1),w=0;b>w;w++)l=2*(H+w),C=a[w],C||Q?(y=_,Z&&(y*=W(Y*l)*X+.5),y=1.5*Math.sin(y),K+=y*O,E=tt*(C-O)-K,O+=y*E,C=3==$?O:1==$?E:K,nt&&(C*=nt,C=1>C?C>-1?v(.25*C):-1:1,C/=nt),C*=rt,Q=C*C>1e-5,p=Math.sin(it*l)*ot+.5,z=C*(1-p),C*=p):z=0,G=U-at&V,z+=i[G]*et,C+=o[G]*et,o[U]=z,i[U]=C,U=U+1&V,e[w]=z,a[w]=C;for(H+=b;H>2048*n;)H-=2048*n;r.pos=H,r.low=K,r.band=O,r.filterActive=Q,r.dlyPos=U};this.start=function(){if(window.AudioContext)e=new AudioContext;else{if(!window.webkitAudioContext)return void(e=void 0);e=new webkitAudioContext,e.createScriptProcessor=e.createJavaScriptNode}s=e.sampleRate,u=s/44100,r={pos:0,low:0,band:0,filterActive:!1,dlyPos:0},o=new Float32Array(c),i=new Float32Array(c),a=e.createScriptProcessor(2048,0,2),a.onaudioprocess=function(t){var n=t.outputBuffer.getChannelData(0),r=t.outputBuffer.getChannelData(1);A(n,r)},a.connect(e.destination)},this.stop=function(){},this.updateInstr=function(n){t=[];for(var r=0;r<n.length;++r)t.push(n[r])},this.updateRowLen=function(t){n=Math.round(t*u)},this.addNote=function(n){for(var r=(new Date).getTime(),o={startT:r,env:0,o1t:0,o2t:0,o1f:p(n+t[2]-128),o2f:p(n+t[6]-128)*(1+8e-4*t[7]),instr:new Array(13)},i=0;13>i;++i)o.instr[i]=t[i];for(var e=0,a=-100,i=0;f>i;++i){if(void 0==d[i])return void(d[i]=o);var s=r-d[i].startT;s>a&&(e=i,a=s)}d[e]=o}};