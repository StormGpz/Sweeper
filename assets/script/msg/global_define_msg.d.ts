// package: message
// file: global_define_msg.proto

declare module proto.message {



  import * as jspb from "google-protobuf";

  export class GateConned extends jspb.Message {
    getCode(): number;
    setCode(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GateConned.AsObject;
    static toObject(includeInstance: boolean, msg: GateConned): GateConned.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: GateConned, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GateConned;
    static deserializeBinaryFromReader(message: GateConned, reader: jspb.BinaryReader): GateConned;
  }

  export namespace GateConned {
    export type AsObject = {
      code: number,
    }
  }

  export interface NetTagMap {
    NETTAGDEFAULT: 0;
    NETTAGGAME1: 1;
    NETTAGGAME2: 2;
    NETTAGGAME3: 3;
  }

  export const NetTag: NetTagMap;

  export interface MainMsgIDMap {
    MAINNONE: 0;
    MAINGATE: 1;
    MAINLOBBY: 2;
    MAINROOM: 3;
    MAINGAME: 4;
    MAINERROR: 5;
    MAINNET: 6;
    MAINMATCH: 7;
  }

  export const MainMsgID: MainMsgIDMap;

  export interface SubGateMsgIDMap {
    CONNED: 0;
  }

  export const SubGateMsgID: SubGateMsgIDMap;

  export interface SubNetMsgIDMap {
    KEEPALIVE: 0;
  }

  export const SubNetMsgID: SubNetMsgIDMap;

  export interface GameIDMap {
    GAMENONE: 0;
    LAMIPOINTS: 100;
    LAMIPOOL: 101;
    LAMIDEALS: 102;
    LAMI10CARD: 103;
    LAMIMATCH: 110;
    LAMITIMEMATCH: 111;
    DRAGONVSTIGER: 201;
    TEENPATTIGAME: 202;
    SICBO: 203;
    DRAGONVSTIGERVIP: 204;
    TEENPATTIGAMEVIP: 205;
    SICBOVIP: 206;
    LAMIPOINTSVIP: 207;
    DRAGONVSTIGERV2: 208;
    DRAGONVSTIGERVIPV2: 209;
  }

  export const GameID: GameIDMap;

}
