function long2str(v, w) {
    var vl = v.length;
    var sl = v[vl - 1] & 0xffffffff;
    for (var i = 0; i < vl; i++) {
        v[i] = String.fromCharCode(v[i] & 0xff,
            v[i] >>> 8 & 0xff,
            v[i] >>> 16 & 0xff,
            v[i] >>> 24 & 0xff);
    }
    if (w) {
        return v.join('').substring(0, sl);
    } else {
        return v.join('');
    }
}

function str2long(s, w) {
    var len = s.length;
    var v = [];
    for (var i = 0; i < len; i += 4) {
        v[i >> 2] = s.charCodeAt(i) |
            s.charCodeAt(i + 1) << 8 |
            s.charCodeAt(i + 2) << 16 |
            s.charCodeAt(i + 3) << 24;
    }
    if (w) {
        v[v.length] = len;
    }
    return v;
}

function encryptHex(str, key) {
    if (str == "") {
        return "";
    }
    let encryptStr = encrypt(str, key);
    return str2Hex(encryptStr);
}

function decryptHex(str, key) {
    if (str == "") {
        return "";
    }

    str = hex2str(str);
    // str = decode_base64(str);
    return decrypt(str, key);
}
function encryptBase64(str, key) {
    if (str == "") {
        return "";
    }
    let encryptStr = encrypt(str, key);
    return encode_base64(encryptStr);
}

function decryptBase64(str, key) {
    if (str == "") {
        return "";
    }
    str = decode_base64(str);
    return decrypt(str, key);
}

function encrypt(str, key) {
    var v = str2long(str, true);
    var k = str2long(key, false);
    var n = v.length - 1;

    var z = v[n],
        y = v[0],
        delta = 0x9E3779B9;
    var mx, e, q = Math.floor(6 + 52 / (n + 1)),
        sum = 0;
    while (q-- > 0) {
        sum = sum + delta & 0xffffffff;
        e = sum >>> 2 & 3;
        for (var p = 0; p < n; p++) {
            y = v[p + 1];
            mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
            z = v[p] = v[p] + mx & 0xffffffff;
        }
        y = v[0];
        mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
        z = v[n] = v[n] + mx & 0xffffffff;
    }
    return long2str(v, false);
}

function decrypt(str, key) {
    var v = str2long(str, false);
    var k = str2long(key, false);
    var n = v.length - 1;

    var z = v[n - 1],
        y = v[0],
        delta = 0x9E3779B9;
    var mx, e, q = Math.floor(6 + 52 / (n + 1)),
        sum = q * delta & 0xffffffff;
    while (sum != 0) {
        e = sum >>> 2 & 3;
        for (var p = n; p > 0; p--) {
            z = v[p - 1];
            mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
            y = v[p] = v[p] - mx & 0xffffffff;
        }
        z = v[n];
        mx = (z >>> 5 ^ y << 2) + (y >>> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
        y = v[0] = v[0] - mx & 0xffffffff;
        sum = sum - delta & 0xffffffff;
    }

    return long2str(v, true);
}

function str2Hex(input) {
    var output = "";
    var chr1 = "";
    var i = 0;
    do {
        chr1 = input.charCodeAt(i++).toString(16);
        if (chr1.length == 1) chr1 = "0" + chr1;
        output += chr1;
    } while (i < input.length);
    return output;
}

function hex2str(input) {
    var output = "";
    var i = 0;
    while (i < input.length) {
        var k = parseInt(input.substr(i, 1), 16) << 4 | parseInt(input.substr(++i, 1), 16);
        k = k & 255;
        output += String.fromCharCode(k);
        ++i;
    }
    return output;
}

var base64key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encode_base64(input) {
    var keyStr = base64key;
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;

    do {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
            keyStr.charAt(enc1) +
            keyStr.charAt(enc2) +
            keyStr.charAt(enc3) +
            keyStr.charAt(enc4);
        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);

    return output;
}

//base64解码
function decode_base64(input) {
    var keyStr = base64key;
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =   
    var base64test = /[^A-Za-z0-9\+\/\=\n]/g;
    if (base64test.exec(input)) {
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return output;
}

cc.xxtea = this;

var base64key2 = "nAQSg1ZF6iyx8H2tf/Bqos9wv7L=zRWdIrbThVOKlJEDmaUcN54ejkYPX0CGpM+u3";
function decodeBase64(input) {
    var keyStr = base64key2;
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1, enc2, enc3, enc4 = "";
    var i = 0;
    // remove all characters that are not A-Z, a-z, 0-9, +, /, or =   
    var base64test = /[^A-Za-z0-9\+\/\=\n]/g;
    if (base64test.exec(input)) {
    }
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

    } while (i < input.length);

    return output;
}

module.exports = {
    encryptHex,
    decryptHex,
    encryptBase64,
    decryptBase64,
    decodeBase64,
};