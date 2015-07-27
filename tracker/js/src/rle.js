//------------------------------------------------------------------------------
// This is a run length encoder (RLE) that (for SoundBox files) compresses
// to about twice the size compared to DEFLATE.
//------------------------------------------------------------------------------

function rle_encode(data) {
    var out = "", i, j, len, code, code2;

    for (i = 0; i < data.length;) {
        // Next byte from the data stream
        code = data.charCodeAt(i);

        // Count how many equal bytes we have
        for (len = 1; len < 255 && (i + len) < data.length; len++) {
            code2 = data.charCodeAt(i + len);

            if (code2 != code)
                break;
        }

        // Emit run length code?
        if (len > 3) {
            out += String.fromCharCode(254);  // Marker byte (254)
            out += String.fromCharCode(len);
            out += String.fromCharCode(code);
        } else {
            out += String.fromCharCode(code);

            if (code == 254)
                out += String.fromCharCode(0);  // zero length indicates the marker byte

            len = 1;
        }

        // Next position to encode
        i += len;
    }

    return out;
}

function rle_decode(data) {
    var out = "", i, j, code, len;

    for (i = 0; i < data.length;) {
        // Next byte from the data stream
        code = data.charCodeAt(i++);

        // Is this a marker byte (254)?
        if (code === 254) {
            if (i < 1)
                break;

            len = data.charCodeAt(i++);

            if (len != 0) {
                if (i < 1)
                    break;

                code = data.charCodeAt(i++);

                for (j = 0; j < len; j++)
                    out += String.fromCharCode(code);

                continue;
            }
        }

        // Plain byte copy
        out += String.fromCharCode(code);
    }

    return out;
}