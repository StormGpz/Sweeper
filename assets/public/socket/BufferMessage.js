var BufferMessage = function () {
    this.TAG = 0;
    this.len = 0;
    this.table = 0;
    this.maincode = 0;
    this.code = 0;
    this.bytes = null;
}
BufferMessage.writeBuffer = function (maincode, code, bytes, table = 1) {
    const TAG = 25209;
    const headLen = 10;
    let len = headLen;
    if (bytes) {
        len = len + bytes.length;
    }
    let head = new ArrayBuffer(headLen);
    let dv = new DataView(head, 0);
    dv.setUint16(0, TAG, true);
    dv.setUint16(2, len, true);
    dv.setUint16(4, table, true);
    dv.setUint16(6, maincode, true);
    dv.setUint16(8, code, true);
    let head_u8 = new Uint8Array(head);
    let buffer_u8 = new Uint8Array(len);
    buffer_u8.set(head_u8, 0);
    if (bytes) {
        buffer_u8.set(bytes, headLen);
    }
    // cc.log('send:', TAG, len, table, maincode, code);
    // cc.log('sendws:', buffer_u8.buffer);
    return buffer_u8.buffer;
}

BufferMessage.writeSgBuffer = function(bytes){
    const headLen = 10;

    let head = new ArrayBuffer(headLen);
    let head_u8 = new Uint8Array(head);
    let buffer_u8 = new Uint8Array(headLen);
    buffer_u8.set(head_u8,0);
    if(bytes){
        buffer_u8.set(bytes,headLen)
    }

    return buffer_u8.buffer
}

BufferMessage.prototype.read = function (buffer, headLen = 10) {
    let dv = new DataView(buffer, 0);
    this.TAG = dv.getUint16(0, true);
    this.len = dv.getUint16(2, true);
    this.table = dv.getUint16(4, true);
    this.maincode = dv.getUint16(6, true);
    this.code = dv.getUint16(8, true);
    this.bytes = new Uint8Array(buffer, headLen, buffer.byteLength - headLen);
}
BufferMessage.prototype.msgEvtType = function () {
    return this.maincode + "_" + this.code;
}
BufferMessage.prototype.toString = function () {
    return JSON.stringify(this);
}
module.exports = BufferMessage;