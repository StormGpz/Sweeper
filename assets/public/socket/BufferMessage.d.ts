declare class BufferMessage {
    TAG: number
    len: number
    table: number
    maincode: number
    code: number
    bytes: Uint8Array
    static writeBuffer(maincode, code, bytes, table = 1)
    static writeSgBuffer(bytes)
    read(buffer, headLen = 10)
    msgEvtType(): string
    toString(): string
}
