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
"use strict";var CPlayer=function(){var r,e,t=new Worker("tracker/js/player-worker.js");t.onmessage=function(t){"progress"===t.data.cmd&&(e=t.data.buffer,r&&r(t.data.progress))},this.generate=function(e,a,n){r=n,t.postMessage({cmd:"generate",song:e,opts:a})},this.createWave=function(){var r=e,t=r.length,a=2*t-8,n=a-36,s=44,o=new Uint8Array(s+2*t);o.set([82,73,70,70,255&a,a>>8&255,a>>16&255,a>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&n,n>>8&255,n>>16&255,n>>24&255]);for(var c=0,f=s;t>c;++c){var g=r[c];g=-32767>g?-32767:g>32767?32767:g,o[f++]=255&g,o[f++]=g>>8&255}return o},this.getData=function(r,t){for(var a=2*Math.floor(44100*r),n=new Array(t),s=e,o=0;2*t>o;o+=1){var c=a+o;n[o]=r>0&&c<s.length?s[c]/32768:0}return n}};