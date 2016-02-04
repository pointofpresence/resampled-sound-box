/*!
 * This file is part of ReSampled SoundBox.
 *
 * Based on SoundBox by Marcus Geelnard (c) 2011-2013
 * 2016 pointofpresence
 * ReSampled.SoundBox (resampled-sound-box) - Online music tracker
 *
 * @version v0.0.1
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
"use strict";var CPlayerWorker=function(){var t=function(t){return Math.sin(6.283184*t)},i=function(t){return 2*(t%1)-1},r=function(t){return.5>t%1?1:-1},s=function(t){var i=t%1*4;return 2>i?i-1:3-i},o=function(t){return.003959503758*Math.pow(2,(t-128)/12)},n=function(t,i,r){var s,n,a,h,f,l,u,w=e[t.i[0]],g=t.i[1],c=t.i[3],p=e[t.i[4]],m=t.i[5],R=t.i[8],C=t.i[9],W=t.i[10]*t.i[10]*4,d=t.i[11]*t.i[11]*4,v=t.i[12]*t.i[12]*4,M=1/v,k=t.i[13],y=r*Math.pow(2,2-t.i[14]),P=new Int32Array(W+d+v),B=0,L=0;for(s=0,n=0;W+d+v>s;s++,n++)n>=0&&(k=k>>8|(255&k)<<4,n-=y,l=o(i+(15&k)+t.i[2]-128),u=o(i+(15&k)+t.i[6]-128)*(1+8e-4*t.i[7])),a=1,W>s?a=s/W:s>=W+d&&(a-=(s-W-d)*M),h=l,c&&(h*=a*a),B+=h,f=w(B)*g,h=u,R&&(h*=a*a),L+=h,f+=p(L)*m,C&&(f+=(2*Math.random()-1)*C),P[s]=80*f*a|0;return P},e=[t,r,i,s];this.init=function(t,i){this.firstRow=0,this.lastRow=t.endPattern-2,this.firstCol=0,this.lastCol=7,i&&(this.firstRow=i.firstRow,this.lastRow=i.lastRow,this.firstCol=i.firstCol,this.lastCol=i.lastCol),this.song=t,this.numSamples=t.rowLen*t.patternLen*(this.lastRow-this.firstRow+1),this.numWords=2*this.numSamples,this.mixBufWork=new Int32Array(this.numWords)},this.generate=function(){var i,r,s,o,a,h,f,l,u,w,g,c,p;for(h=this.firstCol;h<=this.lastCol;h++){var m,R,C=new Int32Array(this.numWords),W=this.mixBufWork,d=this.song.songData[h],v=this.song.rowLen,M=this.song.patternLen,k=0,y=0,P=!1,B=[];for(s=this.firstRow;s<=this.lastRow;++s){for(l=d.p[s],o=0;M>o;++o){var L=l?d.c[l-1].f[o]:0;L&&(d.i[L-1]=d.c[l-1].f[o+M]||0,15>L&&(B=[]));var x=e[d.i[15]],A=d.i[16]/512,I=Math.pow(2,d.i[17]-9)/v,b=d.i[18],S=d.i[19],D=43.23529*d.i[20]*3.141592/44100,j=1-d.i[21]/255,q=1e-5*d.i[22],z=d.i[23]/32,E=d.i[24]/512,F=6.283184*Math.pow(2,d.i[25]-9)/v,G=d.i[26]/255,H=d.i[27]*v;for(c=((s-this.firstRow)*M+o)*v,a=0;4>a;++a)if(f=l?d.c[l-1].n[o+a*M]:0){B[f]||(B[f]=n(d,f,v));var J=B[f];for(r=0,i=2*c;r<J.length;r++,i+=2)C[i]+=J[r]}for(r=0;v>r;r++)u=2*(c+r),g=C[u],g||P?(p=D,b&&(p*=x(I*u)*A+.5),p=1.5*Math.sin(p),k+=p*y,m=j*(g-y)-k,y+=p*m,g=3==S?y:1==S?m:k,q&&(g*=q,g=1>g?g>-1?t(.25*g):-1:1,g/=q),g*=z,P=g*g>1e-5,w=Math.sin(F*u)*E+.5,R=g*(1-w),g*=w):R=0,u>=H&&(R+=C[u-H+1]*G,g+=C[u-H]*G),C[u]=0|R,C[u+1]=0|g,W[u]+=0|R,W[u+1]+=0|g}var K=(h-this.firstCol+(s-this.firstRow)/(this.lastRow-this.firstRow+1))/(this.lastCol-this.firstCol+1);postMessage({cmd:"progress",progress:K,buffer:null})}}},this.getBuf=function(){return this.mixBufWork}},gPlayerWorker=new CPlayerWorker;onmessage=function(t){"generate"===t.data.cmd&&(gPlayerWorker.init(t.data.song,t.data.opts),gPlayerWorker.generate(),postMessage({cmd:"progress",progress:1,buffer:gPlayerWorker.getBuf()}))};