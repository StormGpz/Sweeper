// package: message
// file: error_code_msg.proto
declare module proto.message{
  import * as jspb from "google-protobuf";

  export class OperateError extends jspb.Message {
    getEcode(): ErrorCodeMap[keyof ErrorCodeMap];
    setEcode(value: ErrorCodeMap[keyof ErrorCodeMap]): void;
  
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperateError.AsObject;
    static toObject(includeInstance: boolean, msg: OperateError): OperateError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperateError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperateError;
    static deserializeBinaryFromReader(message: OperateError, reader: jspb.BinaryReader): OperateError;
  }
  
  export namespace OperateError {
    export type AsObject = {
      ecode: ErrorCodeMap[keyof ErrorCodeMap],
    }
  }
  
  export interface SubErrorMsgIDMap {
    COMMONERROR: 0;
  }
  
  export const SubErrorMsgID: SubErrorMsgIDMap;
  
  export interface ErrorCodeMap {
    SUCCESS: 0;
    RETRY: 1;
    PARAMERROR: 2;
    REQVERIFY: 3;
    ROOMNOTEXIST: 100;
    TOKENNOTVALID: 101;
    GOLDNOTENOUGH: 102;
    SEATNOTEMPTY: 103;
    GAMEPLAYING: 104;
    OUTUNEXISTCARD: 105;
    NOTPICKMAGICCARD: 106;
    NOTOUTTURN: 107;
    CARDNOTYOURS: 108;
    REENTERGAME: 109;
    GAMEEXCEPTCLOSE: 110;
    PROTOPARSEFAIL: 111;
    NEEDPICKCARDFIRST: 112;
    NOTPICKMOREONE: 113;
    GAMEROOMCLOSEERR: 114;
    PLAYERNOTEXIST: 115;
    ACCOUNTFORBITGAME: 116;
    SMSCODEFREQUENTLY: 200;
    BINDPHONEUSED: 210;
    BINDPHONEBOUND: 211;
    BINDPHONECODEVALID: 212;
    BINDMAILUSED: 213;
    BINDFACEBOOKUSED: 214;
    BINDAPPLEIDUSED: 215;
    BINDGOOGLEIDUSED: 216;
    LOGINCODEVALID: 220;
    LOGINUNKNOWNPHONE: 221;
    LOGINUNKNOWNID: 222;
    LOGINLIMITREGION: 223;
    REALAUTHALREADY: 230;
    LOGINACCOUNTINVALID: 231;
    ORDERMISSINGDATA: 240;
    ORDERCOUPONERROR: 241;
    ACTONLYONETIME: 246;
    ACTNOTINTIME: 247;
    ACTISCLOSED: 248;
    MATCHNOTEXIT: 300;
    MATCHREGED: 301;
    MATCHREGTIMEERR: 302;
    MATCHNOTHAVETICK: 303;
    NOTPREMIUMJOINROOM: 401;
  }
  
  export const ErrorCode: ErrorCodeMap;
}


