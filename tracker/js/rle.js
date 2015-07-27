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
function rle_encode(r){var o,e,t,n,C="";for(o=0;o<r.length;){for(t=r.charCodeAt(o),e=1;255>e&&o+e<r.length&&(n=r.charCodeAt(o+e),n==t);e++);e>3?(C+=String.fromCharCode(254),C+=String.fromCharCode(e),C+=String.fromCharCode(t)):(C+=String.fromCharCode(t),254==t&&(C+=String.fromCharCode(0)),e=1),o+=e}return C}function rle_decode(r){var o,e,t,n,C="";for(o=0;o<r.length;){if(t=r.charCodeAt(o++),254===t){if(1>o)break;if(n=r.charCodeAt(o++),0!=n){if(1>o)break;for(t=r.charCodeAt(o++),e=0;n>e;e++)C+=String.fromCharCode(t);continue}}C+=String.fromCharCode(t)}return C}