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
gDemoSongs=[{name:"sway",description:" SWAY by m @ Bits'n'Bites, from the 4k demo <a href=\"http://pouet.net/prod.php?which=59203\">SWAY</a>",data:String.fromCharCode(83,66,111,120,8,2,237,154,65,107,19,65,20,199,255,179,51,179,141,166,49,197,82,161,66,48,80,164,122,235,65,177,7,193,67,114,244,86,61,89,232,161,158,84,12,38,177,32,107,183,75,65,171,165,39,167,244,32,4,161,244,27,120,20,84,122,243,43,120,242,27,120,241,30,103,179,219,180,221,100,119,74,117,179,89,120,191,201,236,219,183,111,19,94,38,111,231,237,155,236,251,25,224,170,245,216,3,255,225,65,99,87,112,40,24,159,253,214,250,163,236,7,182,100,22,211,112,161,165,110,192,68,33,104,246,5,12,195,113,182,60,221,55,221,117,215,27,182,143,148,153,54,216,23,12,246,88,255,177,170,173,171,177,239,107,32,117,138,37,195,9,215,78,248,225,68,252,114,144,15,154,161,116,35,122,211,109,56,77,119,45,245,248,41,197,30,239,181,98,37,198,94,197,77,84,48,91,206,58,126,74,197,233,114,130,185,172,125,124,145,96,63,140,139,159,213,156,196,79,195,129,211,208,175,56,57,246,241,239,194,109,234,87,84,182,61,120,109,52,95,129,32,146,232,190,100,232,62,7,131,176,231,124,221,186,196,216,252,125,169,247,88,15,171,191,119,44,135,162,250,91,53,68,87,99,63,16,138,98,129,32,8,130,200,37,59,65,191,43,46,214,241,69,130,253,222,66,245,153,156,18,58,111,91,220,226,194,207,238,220,111,128,236,33,204,217,112,55,162,143,34,75,154,234,214,185,179,101,115,21,241,95,141,234,78,36,85,255,149,82,227,238,127,214,119,82,38,255,235,103,26,123,117,180,81,81,61,15,241,67,16,68,62,177,190,123,186,239,92,6,158,182,182,241,78,50,171,176,60,179,184,43,31,22,120,176,170,62,216,98,62,169,145,243,145,104,230,220,255,172,199,255,138,193,44,147,237,139,116,45,18,4,65,156,15,142,13,240,250,6,216,79,33,110,176,59,130,89,181,214,235,175,53,123,222,95,68,247,243,54,15,165,159,193,153,240,27,55,215,85,42,131,154,252,127,16,239,191,82,121,241,61,207,36,196,15,253,249,65,16,4,17,199,35,15,88,241,38,129,73,212,122,69,122,183,140,234,18,127,43,122,25,156,7,25,60,148,128,144,34,174,182,250,164,39,219,143,186,119,122,114,175,175,239,135,122,218,79,94,73,211,242,98,45,217,156,228,127,71,111,221,49,255,33,51,31,127,227,61,163,201,255,125,28,4,82,139,253,1,61,109,76,225,51,107,176,119,66,127,59,161,191,81,61,99,254,241,234,32,8,98,172,107,242,15,59,96,191,60,61,205,46,99,133,127,150,140,95,223,186,87,219,227,29,187,127,138,95,151,7,213,121,144,197,99,166,228,104,166,216,28,241,55,41,26,150,119,151,13,115,213,155,211,234,246,201,204,189,62,10,255,13,182,149,4,123,5,217,63,163,110,90,93,191,101,200,36,38,255,183,13,246,118,138,227,15,195,248,15,137,159,1,76,119,130,107,52,25,17,4,113,94,186,79,152,238,96,144,19,7,65,77,14,107,106,73,222,62,122,68,253,248,81,245,193,35,167,160,229,79,130,32,8,130,24,61,127,1)},{name:"rechord",description:" re:chord by m @ Bits'n'Bites, from the 4k demo <a href=\"http://www.pouet.net/prod.php?which=60915\">re:chord</a>",base64:"U0JveAgC7ZpRa9NQFMfPzU0ycZ0gOEWYo6CC4AaDPakPPgk-TPDBtz34oEMRQcZkdJTZMEdLSUhDQrexSV_9AH6BoU9-Cz-DH8B6bpKmN0nTTGVNiueXnp5zc9v03Jvb_O9N254HWFR-GaD0jSsA2vICIEoFKuv32COFJTauii2IYAQ1OcJH3Y_rMIjKzrYc4WPTj7dgWqjBW9mw099hz0e2PdlsKpXx5cvL6fIb7PbIsPs38Bxs4Bl45Vux-SdJ5k8QBFEc_Csq-anB8dpVvQvPZhiff8iqK3xJlVXcf6WqoYIHcfCcxszxTsLbCe_l-LHXXj6-vmrkH6Od4c2MfK3Qd0LvJryTKJ8npuM5MbM9W7Zz175_fH_bdu2YWY4lzOy4HWFl_yYV3f85wz8aq1l0j3vHMTv6dCTs8KR3IoyulQRRXlDF0d4zgCdX15QdnSkLvVurDXVFHSj2UM2Hqj5KyWuJ8qRX4nM59QdnXpMHbIZ-q6D853LyX6PBSxAEQQglBwNVHJerfQ2u-1P7_k-4MahlyugNa7IP6XmpJbR3plV1SYjy90Q82OXRWCEIgiBKSR_X4_0PqMyqfseX9kug3Lx9MVTyELFfioGNEPJWjk0rQf6tFg0VgiAIopRr8pcG8O-GBqDp9-GbzvgiKEuevqMHK_JgZS7fWc_6lbyBeufAYczbki87u9DEPLuS3wcLfQPLnSnInyAIgvhPldy1gP0w_L_LPOdfNMYftNRrB9zQQ9Xmvo7zQL1VTdX0GbGlj-RkfIK4LW1PoCWzOfXrf3i8LmYeWDEqPpvTtgs5beuiTdP8wwEzGkMi8grs77-hjaPcjfW_gzNBMad1cSbolr7_90MLqOMMNo18Y2pvRL2Z8dpJsOfPxofzciOMPmbkPGhrU9rXjJ3PdJsIoqyw09cMnr4A9liFz0LPFZ3pq7vRZY1Jz0GU3CMrNkEQBEEQk-U3"},{name:"spacedust",description:" Space Dust by m @ Bits'n'Bites",data:String.fromCharCode(83,66,111,120,8,2,237,154,79,107,19,65,24,198,159,249,179,187,145,52,22,69,161,32,74,160,74,35,30,75,209,67,123,170,244,228,69,208,91,15,241,28,197,67,23,33,68,210,96,13,41,161,151,176,233,178,49,13,1,79,138,31,64,240,32,185,121,240,11,136,159,192,111,161,179,219,77,92,154,29,247,160,197,157,240,254,178,79,158,77,38,153,188,51,236,206,203,187,155,147,21,224,6,175,186,96,19,183,0,44,99,21,27,130,241,157,143,27,247,14,197,129,180,109,238,48,198,69,82,18,176,66,71,10,94,224,191,9,252,227,64,231,56,103,74,25,237,119,50,218,253,225,96,52,28,4,67,157,35,231,244,252,126,224,247,61,95,231,121,143,191,131,70,164,69,164,219,239,4,121,143,241,127,159,191,197,140,19,120,121,53,223,199,127,81,173,64,197,200,147,251,145,135,35,43,149,112,19,75,106,231,130,146,133,91,8,23,81,134,181,240,171,21,165,219,32,136,191,64,76,92,165,22,7,94,84,134,124,199,98,188,248,238,210,122,77,28,56,97,107,156,193,229,84,22,108,156,238,207,247,212,232,152,61,19,205,174,217,241,215,219,139,21,127,207,55,43,126,195,15,127,52,105,49,36,8,99,225,213,35,165,150,196,21,199,217,196,35,155,137,171,159,156,7,95,228,19,153,200,228,243,74,233,169,49,219,204,172,173,154,179,173,137,174,129,235,90,125,182,213,209,14,61,166,141,30,70,120,79,135,58,65,16,196,162,242,211,101,74,96,144,118,116,249,138,95,100,172,188,98,253,46,218,25,103,124,234,179,71,74,71,94,134,242,142,62,118,83,70,160,27,151,217,241,19,4,65,16,89,236,158,106,83,58,215,163,50,252,199,87,148,159,90,142,156,182,51,22,93,75,231,44,129,38,103,120,113,238,155,119,207,228,76,98,122,252,4,65,16,196,34,35,182,92,136,215,225,125,242,146,93,139,106,242,37,20,30,62,179,171,118,242,83,225,159,221,166,178,52,61,141,207,188,30,197,126,18,61,251,248,96,64,77,110,50,111,53,243,63,136,231,63,239,244,52,239,135,227,48,225,222,64,214,125,242,6,8,130,32,206,41,147,99,31,226,254,62,216,119,41,43,236,174,202,213,219,123,47,63,111,219,107,103,235,110,161,74,113,62,85,86,54,212,121,238,171,239,20,31,143,35,55,54,209,155,30,63,65,16,4,145,193,164,165,116,116,25,223,106,123,93,118,104,51,94,216,189,86,238,91,143,11,127,250,82,90,50,127,158,241,67,175,104,174,9,130,32,8,226,159,243,11)},{name:"8bit",description:" 8 Bit One by m @ Bits'n'Bites",data:String.fromCharCode(83,66,111,120,8,2,237,219,49,107,219,64,20,7,240,119,58,217,130,144,216,201,226,146,33,32,98,74,218,177,93,186,52,99,200,84,58,36,75,72,134,102,78,178,9,99,227,202,85,13,65,180,8,19,115,56,24,211,16,98,2,249,16,89,252,141,2,25,187,56,119,82,228,154,243,112,14,4,91,46,255,31,247,116,122,150,100,206,135,204,227,140,220,120,67,84,224,3,143,248,32,32,34,103,185,36,183,100,13,137,220,109,190,97,51,139,89,234,133,180,55,17,151,189,81,107,181,133,140,206,168,253,138,90,157,80,157,35,35,237,155,50,90,99,253,188,181,59,221,81,139,90,237,110,116,33,70,45,148,113,174,206,145,145,246,106,206,162,177,30,0,0,96,30,172,192,35,235,135,87,36,218,43,255,228,77,89,191,223,221,89,238,65,238,208,73,106,184,170,226,106,203,141,239,20,106,121,83,203,235,250,5,149,108,205,196,185,150,7,90,94,211,47,240,178,53,254,208,112,188,142,155,29,0,224,255,172,228,223,60,21,43,68,199,31,191,179,223,14,227,111,247,45,55,180,143,248,75,43,121,207,144,95,107,249,149,150,247,181,252,102,198,51,209,53,228,250,120,255,24,198,123,61,227,241,247,12,199,77,227,233,227,203,0,0,176,144,248,223,136,248,167,128,211,26,95,125,79,123,114,77,254,120,203,118,190,228,215,243,234,232,191,74,110,126,167,122,178,14,111,80,195,151,251,141,120,201,237,171,165,108,173,42,247,107,153,159,137,90,178,14,247,201,175,203,125,63,94,114,203,207,84,165,106,69,238,87,113,171,0,0,64,54,13,61,38,131,24,217,249,114,188,72,47,48,230,166,7,153,68,86,188,53,18,73,196,77,76,230,98,81,39,40,249,28,66,224,86,1,0,128,108,10,146,248,108,47,109,210,125,142,216,67,72,238,105,110,213,78,43,121,98,154,146,39,198,67,76,228,0,0,0,240,234,226,39,222,130,160,72,228,20,182,232,216,102,252,67,143,206,78,236,175,246,243,170,252,249,247,245,41,10,57,158,93,7,0,0,152,189,129,151,4,57,165,221,184,180,171,127,161,97,90,0,0,0,22,195,19)},{name:"4chordsong",description:" 4 Chord Song by m @ Bits'n'Bites, chord test inspired by <a href=\"http://www.youtube.com/watch?v=5pidokakU4I\">Axis of Awsome</a>",data:String.fromCharCode(83,66,111,120,8,2,237,153,65,107,19,81,16,199,231,189,151,77,2,105,14,90,8,138,72,115,80,170,168,24,76,3,70,237,161,164,90,176,74,245,166,168,72,169,199,80,2,45,24,66,36,123,168,49,100,27,82,210,96,212,196,80,20,36,8,222,252,0,30,252,22,130,31,64,4,63,130,190,236,190,109,195,146,237,174,77,163,151,255,111,102,24,246,205,16,102,103,55,12,239,237,167,179,68,19,252,134,78,124,81,23,68,39,194,115,52,45,24,127,190,196,227,122,224,36,39,98,140,9,226,140,145,47,74,125,89,43,229,10,36,101,181,176,86,36,41,185,98,46,79,82,178,249,156,65,150,148,149,84,148,108,40,169,43,169,42,177,243,237,188,134,146,154,18,59,223,206,139,202,26,246,179,139,210,230,165,37,165,101,164,205,12,248,57,31,245,239,119,239,27,213,202,22,141,72,212,99,61,229,18,207,140,220,127,11,247,254,91,184,247,127,175,206,225,22,221,237,127,70,245,255,186,180,132,122,30,9,185,122,158,0,0,0,28,20,241,109,155,248,186,30,36,10,70,22,104,94,78,242,196,179,200,185,219,193,227,65,198,184,226,112,38,249,184,239,196,158,24,110,126,153,110,209,85,229,211,202,95,51,253,34,93,246,81,127,163,213,54,181,241,242,181,169,205,86,219,212,102,171,99,234,184,38,185,205,2,94,86,0,0,0,67,224,73,185,39,191,160,203,105,157,138,117,233,81,136,137,163,211,20,79,104,179,26,27,192,207,48,47,41,95,80,190,168,124,94,249,178,195,87,28,222,222,219,85,29,215,198,238,158,209,162,230,184,182,55,195,17,151,186,236,245,83,46,241,148,163,126,55,202,30,113,195,35,94,247,136,71,60,226,15,240,178,2,0,0,24,2,251,162,247,141,17,77,76,94,162,87,26,19,167,219,137,116,86,36,133,25,101,150,249,161,108,212,77,45,87,107,166,86,140,186,169,21,99,203,84,231,164,207,57,38,61,0,0,0,0,254,30,241,93,151,195,116,157,104,50,44,166,232,67,128,241,99,119,143,172,220,209,158,6,213,164,231,140,11,30,240,241,75,239,149,239,42,191,163,124,103,96,189,165,178,186,244,209,244,77,149,213,161,222,200,119,18,243,56,158,94,153,58,88,253,61,31,245,247,232,243,184,31,84,204,35,62,243,191,251,239,245,117,32,59,226,153,70,11,127,86,0,0,24,62,201,223,173,50,246,88,238,203,179,20,222,161,165,16,19,247,223,240,248,25,109,205,26,222,76,217,8,108,163,201,0,0,0,192,24,217,180,236,119,183,219,165,164,220,129,95,249,69,203,247,216,91,245,105,156,249,30,228,47,208,74,0,0,0,224,223,211,63,93,255,33,247,228,244,53,242,147,102,195,196,181,205,155,233,39,218,195,208,94,138,191,89,238,117,58,90,66,175,1,0,0,128,67,231,15)}];