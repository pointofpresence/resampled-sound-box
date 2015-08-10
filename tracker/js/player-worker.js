/*!
 * This file is part of ReSampled SoundBox.
 *
 * Based on SoundBox by Marcus Geelnard (c) 2011-2013
 * 2015 pointofpresence
 * ReSampled.SoundBox (resampled-sound-box) - Online music tracker
 *
 * @version v0.0.1
 * @build Mon Aug 10 2015 23:53:04
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
"use strict";var CPlayerWorker=function(){var t=function(t){return Math.sin(6.283184*t)},i=function(t){return 2*(t%1)-1},r=function(t){return.5>t%1?1:-1},s=function(t){var i=t%1*4;return 2>i?i-1:3-i},o=[t,r,i,s],n=function(t){return.003959503758*Math.pow(2,(t-128)/12)};this.init=function(t,i){this.firstRow=0,this.lastRow=t.endPattern-2,this.firstCol=0,this.lastCol=7,i&&(this.firstRow=i.firstRow,this.lastRow=i.lastRow,this.firstCol=i.firstCol,this.lastCol=i.lastCol),this.song=t,this.numSamples=t.rowLen*t.patternLen*(this.lastRow-this.firstRow+1),this.numWords=2*this.numSamples,this.mixBufWork=new Int32Array(this.numWords)};var e=function(t,i){var r,s,e,a,f=o[t.i[0]],h=t.i[1],l=t.i[3],u=o[t.i[4]],g=t.i[5],w=t.i[8],c=t.i[9],m=t.i[10]*t.i[10]*4,p=t.i[11]*t.i[11]*4,R=t.i[12]*t.i[12]*4,C=1/R,W=new Int32Array(m+p+R),d=n(i+t.i[2]-128),v=n(i+t.i[6]-128)*(1+8e-4*t.i[7]),k=0,y=0;for(r=0;m+p+R>r;r++)s=1,m>r?s=r/m:r>=m+p&&(s-=(r-m-p)*C),e=d,l&&(e*=s*s),k+=e,a=f(k)*h,e=v,w&&(e*=s*s),y+=e,a+=u(y)*g,c&&(a+=(2*Math.random()-1)*c),W[r]=80*a*s|0;return W};this.generate=function(){var i,r,s,n,a,f,h,l,u,g,w,c,m;for(f=this.firstCol;f<=this.lastCol;f++){var p,R,C=new Int32Array(this.numWords),W=this.mixBufWork,d=this.song.songData[f],v=this.song.rowLen,k=this.song.patternLen,y=0,M=0,P=!1,B=[];for(s=this.firstRow;s<=this.lastRow;++s){for(l=d.p[s],n=0;k>n;++n){var L=l?d.c[l-1].f[n]:0;L&&(d.i[L-1]=d.c[l-1].f[n+k]||0,14>L&&(B=[]));var x=o[d.i[13]],A=d.i[14]/512,I=Math.pow(2,d.i[15]-9)/v,b=d.i[16],S=d.i[17],D=43.23529*d.i[18]*3.141592/44100,j=1-d.i[19]/255,q=1e-5*d.i[20],z=d.i[21]/32,E=d.i[22]/512,F=6.283184*Math.pow(2,d.i[23]-9)/v,G=d.i[24]/255,H=d.i[25]*v;for(c=((s-this.firstRow)*k+n)*v,a=0;4>a;++a)if(h=l?d.c[l-1].n[n+a*k]:0){B[h]||(B[h]=e(d,h));var J=B[h];for(r=0,i=2*c;r<J.length;r++,i+=2)C[i]+=J[r]}for(r=0;v>r;r++)u=2*(c+r),w=C[u],w||P?(m=D,b&&(m*=x(I*u)*A+.5),m=1.5*Math.sin(m),y+=m*M,p=j*(w-M)-y,M+=m*p,w=3==S?M:1==S?p:y,q&&(w*=q,w=1>w?w>-1?t(.25*w):-1:1,w/=q),w*=z,P=w*w>1e-5,g=Math.sin(F*u)*E+.5,R=w*(1-g),w*=g):R=0,u>=H&&(R+=C[u-H+1]*G,w+=C[u-H]*G),C[u]=0|R,C[u+1]=0|w,W[u]+=0|R,W[u+1]+=0|w}var K=(f-this.firstCol+(s-this.firstRow)/(this.lastRow-this.firstRow+1))/(this.lastCol-this.firstCol+1);postMessage({cmd:"progress",progress:K,buffer:null})}}},this.getBuf=function(){return this.mixBufWork}},gPlayerWorker=new CPlayerWorker;onmessage=function(t){"generate"===t.data.cmd&&(gPlayerWorker.init(t.data.song,t.data.opts),gPlayerWorker.generate(),postMessage({cmd:"progress",progress:1,buffer:gPlayerWorker.getBuf()}))};