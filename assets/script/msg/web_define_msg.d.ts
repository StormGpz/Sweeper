
declare namespace proto.message {
// package: message
// file: web_define_msg.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LoginMachineReq extends jspb.Message { 
    getMachineid(): string;
    setMachineid(value: string): LoginMachineReq;
    getSpreadid(): number;
    setSpreadid(value: number): LoginMachineReq;
    getVersion(): string;
    setVersion(value: string): LoginMachineReq;
    getClientip(): string;
    setClientip(value: string): LoginMachineReq;
    getInviteid(): number;
    setInviteid(value: number): LoginMachineReq;
    getPkgid(): number;
    setPkgid(value: number): LoginMachineReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginMachineReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginMachineReq): LoginMachineReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginMachineReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginMachineReq;
    static deserializeBinaryFromReader(message: LoginMachineReq, reader: jspb.BinaryReader): LoginMachineReq;
}

export namespace LoginMachineReq {
    export type AsObject = {
        machineid: string,
        spreadid: number,
        version: string,
        clientip: string,
        inviteid: number,
        pkgid: number,
    }
}

export class LoginResp extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): LoginResp;
    getNickname(): string;
    setNickname(value: string): LoginResp;
    getFaceurl(): string;
    setFaceurl(value: string): LoginResp;
    getScore(): number;
    setScore(value: number): LoginResp;
    getBindscore(): number;
    setBindscore(value: number): LoginResp;
    getBonusscore(): number;
    setBonusscore(value: number): LoginResp;
    getInvitescore(): number;
    setInvitescore(value: number): LoginResp;
    getRealstatus(): number;
    setRealstatus(value: number): LoginResp;
    getUniqueid(): string;
    setUniqueid(value: string): LoginResp;
    getFacebookid(): string;
    setFacebookid(value: string): LoginResp;
    getPhone(): string;
    setPhone(value: string): LoginResp;
    getGoogleid(): string;
    setGoogleid(value: string): LoginResp;
    getAppleid(): string;
    setAppleid(value: string): LoginResp;
    getInviteid(): number;
    setInviteid(value: number): LoginResp;
    getToken(): string;
    setToken(value: string): LoginResp;
    getGateinfo(): string;
    setGateinfo(value: string): LoginResp;
    getFirstlogin(): number;
    setFirstlogin(value: number): LoginResp;
    getTodayassist(): number;
    setTodayassist(value: number): LoginResp;
    getTodayroll(): number;
    setTodayroll(value: number): LoginResp;
    getRollstate(): number;
    setRollstate(value: number): LoginResp;
    getExpscore(): number;
    setExpscore(value: number): LoginResp;
    getUserstate(): number;
    setUserstate(value: number): LoginResp;
    getSrvtime(): string;
    setSrvtime(value: string): LoginResp;
    getIspremium(): boolean;
    setIspremium(value: boolean): LoginResp;
    getModel(): number;
    setModel(value: number): LoginResp;
    getViplevel(): number;
    setViplevel(value: number): LoginResp;
    getBonusrate(): number;
    setBonusrate(value: number): LoginResp;
    getLuckval(): number;
    setLuckval(value: number): LoginResp;
    getLuckstar(): number;
    setLuckstar(value: number): LoginResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResp.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResp): LoginResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResp;
    static deserializeBinaryFromReader(message: LoginResp, reader: jspb.BinaryReader): LoginResp;
}

export namespace LoginResp {
    export type AsObject = {
        userid: number,
        nickname: string,
        faceurl: string,
        score: number,
        bindscore: number,
        bonusscore: number,
        invitescore: number,
        realstatus: number,
        uniqueid: string,
        facebookid: string,
        phone: string,
        googleid: string,
        appleid: string,
        inviteid: number,
        token: string,
        gateinfo: string,
        firstlogin: number,
        todayassist: number,
        todayroll: number,
        rollstate: number,
        expscore: number,
        userstate: number,
        srvtime: string,
        ispremium: boolean,
        model: number,
        viplevel: number,
        bonusrate: number,
        luckval: number,
        luckstar: number,
    }
}

export class SmsCodeReq extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): SmsCodeReq;
    getSpreadid(): number;
    setSpreadid(value: number): SmsCodeReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsCodeReq.AsObject;
    static toObject(includeInstance: boolean, msg: SmsCodeReq): SmsCodeReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsCodeReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsCodeReq;
    static deserializeBinaryFromReader(message: SmsCodeReq, reader: jspb.BinaryReader): SmsCodeReq;
}

export namespace SmsCodeReq {
    export type AsObject = {
        phone: string,
        spreadid: number,
    }
}

export class BindPhoneReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): BindPhoneReq;
    getPhone(): string;
    setPhone(value: string): BindPhoneReq;
    getCode(): string;
    setCode(value: string): BindPhoneReq;
    getRealname(): string;
    setRealname(value: string): BindPhoneReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindPhoneReq.AsObject;
    static toObject(includeInstance: boolean, msg: BindPhoneReq): BindPhoneReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindPhoneReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindPhoneReq;
    static deserializeBinaryFromReader(message: BindPhoneReq, reader: jspb.BinaryReader): BindPhoneReq;
}

export namespace BindPhoneReq {
    export type AsObject = {
        token: string,
        phone: string,
        code: string,
        realname: string,
    }
}

export class BindPhoneResp extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): BindPhoneResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindPhoneResp.AsObject;
    static toObject(includeInstance: boolean, msg: BindPhoneResp): BindPhoneResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindPhoneResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindPhoneResp;
    static deserializeBinaryFromReader(message: BindPhoneResp, reader: jspb.BinaryReader): BindPhoneResp;
}

export namespace BindPhoneResp {
    export type AsObject = {
        phone: string,
    }
}

export class LoginPhoneReq extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): LoginPhoneReq;
    getPhone(): string;
    setPhone(value: string): LoginPhoneReq;
    getCode(): string;
    setCode(value: string): LoginPhoneReq;
    getMachineid(): string;
    setMachineid(value: string): LoginPhoneReq;
    getSpreadid(): string;
    setSpreadid(value: string): LoginPhoneReq;
    getVersion(): string;
    setVersion(value: string): LoginPhoneReq;
    getClientip(): string;
    setClientip(value: string): LoginPhoneReq;
    getInviteid(): number;
    setInviteid(value: number): LoginPhoneReq;
    getPkgid(): number;
    setPkgid(value: number): LoginPhoneReq;
    getPassword(): string;
    setPassword(value: string): LoginPhoneReq;
    getReferrer(): string;
    setReferrer(value: string): LoginPhoneReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginPhoneReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginPhoneReq): LoginPhoneReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginPhoneReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginPhoneReq;
    static deserializeBinaryFromReader(message: LoginPhoneReq, reader: jspb.BinaryReader): LoginPhoneReq;
}

export namespace LoginPhoneReq {
    export type AsObject = {
        uniqueid: string,
        phone: string,
        code: string,
        machineid: string,
        spreadid: string,
        version: string,
        clientip: string,
        inviteid: number,
        pkgid: number,
        password: string,
        referrer: string,
    }
}

export class LoginUniqueIDReq extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): LoginUniqueIDReq;
    getMachineid(): string;
    setMachineid(value: string): LoginUniqueIDReq;
    getSpreadid(): string;
    setSpreadid(value: string): LoginUniqueIDReq;
    getVersion(): string;
    setVersion(value: string): LoginUniqueIDReq;
    getClientip(): string;
    setClientip(value: string): LoginUniqueIDReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginUniqueIDReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginUniqueIDReq): LoginUniqueIDReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginUniqueIDReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginUniqueIDReq;
    static deserializeBinaryFromReader(message: LoginUniqueIDReq, reader: jspb.BinaryReader): LoginUniqueIDReq;
}

export namespace LoginUniqueIDReq {
    export type AsObject = {
        uniqueid: string,
        machineid: string,
        spreadid: string,
        version: string,
        clientip: string,
    }
}

export class LoginPasswordReq extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): LoginPasswordReq;
    getMachineid(): string;
    setMachineid(value: string): LoginPasswordReq;
    getSpreadid(): number;
    setSpreadid(value: number): LoginPasswordReq;
    getVersion(): string;
    setVersion(value: string): LoginPasswordReq;
    getClientip(): string;
    setClientip(value: string): LoginPasswordReq;
    getPassword(): string;
    setPassword(value: string): LoginPasswordReq;
    getPkgid(): number;
    setPkgid(value: number): LoginPasswordReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginPasswordReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginPasswordReq): LoginPasswordReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginPasswordReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginPasswordReq;
    static deserializeBinaryFromReader(message: LoginPasswordReq, reader: jspb.BinaryReader): LoginPasswordReq;
}

export namespace LoginPasswordReq {
    export type AsObject = {
        phone: string,
        machineid: string,
        spreadid: number,
        version: string,
        clientip: string,
        password: string,
        pkgid: number,
    }
}

export class ModifyNameReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ModifyNameReq;
    getNickname(): string;
    setNickname(value: string): ModifyNameReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyNameReq.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyNameReq): ModifyNameReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyNameReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyNameReq;
    static deserializeBinaryFromReader(message: ModifyNameReq, reader: jspb.BinaryReader): ModifyNameReq;
}

export namespace ModifyNameReq {
    export type AsObject = {
        token: string,
        nickname: string,
    }
}

export class ModifyNameResp extends jspb.Message { 
    getNickname(): string;
    setNickname(value: string): ModifyNameResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyNameResp.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyNameResp): ModifyNameResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyNameResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyNameResp;
    static deserializeBinaryFromReader(message: ModifyNameResp, reader: jspb.BinaryReader): ModifyNameResp;
}

export namespace ModifyNameResp {
    export type AsObject = {
        nickname: string,
    }
}

export class ModifyFaceReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ModifyFaceReq;
    getFaceurl(): string;
    setFaceurl(value: string): ModifyFaceReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyFaceReq.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyFaceReq): ModifyFaceReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyFaceReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyFaceReq;
    static deserializeBinaryFromReader(message: ModifyFaceReq, reader: jspb.BinaryReader): ModifyFaceReq;
}

export namespace ModifyFaceReq {
    export type AsObject = {
        token: string,
        faceurl: string,
    }
}

export class ModifyFaceResp extends jspb.Message { 
    getFaceurl(): string;
    setFaceurl(value: string): ModifyFaceResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifyFaceResp.AsObject;
    static toObject(includeInstance: boolean, msg: ModifyFaceResp): ModifyFaceResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifyFaceResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifyFaceResp;
    static deserializeBinaryFromReader(message: ModifyFaceResp, reader: jspb.BinaryReader): ModifyFaceResp;
}

export namespace ModifyFaceResp {
    export type AsObject = {
        faceurl: string,
    }
}

export class UpdateTokenReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): UpdateTokenReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTokenReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTokenReq): UpdateTokenReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTokenReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTokenReq;
    static deserializeBinaryFromReader(message: UpdateTokenReq, reader: jspb.BinaryReader): UpdateTokenReq;
}

export namespace UpdateTokenReq {
    export type AsObject = {
        token: string,
    }
}

export class UpdateTokenResp extends jspb.Message { 
    getToken(): string;
    setToken(value: string): UpdateTokenResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTokenResp.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTokenResp): UpdateTokenResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTokenResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTokenResp;
    static deserializeBinaryFromReader(message: UpdateTokenResp, reader: jspb.BinaryReader): UpdateTokenResp;
}

export namespace UpdateTokenResp {
    export type AsObject = {
        token: string,
    }
}

export class UploadImageReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): UploadImageReq;
    getImage(): string;
    setImage(value: string): UploadImageReq;
    getType(): number;
    setType(value: number): UploadImageReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadImageReq.AsObject;
    static toObject(includeInstance: boolean, msg: UploadImageReq): UploadImageReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadImageReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadImageReq;
    static deserializeBinaryFromReader(message: UploadImageReq, reader: jspb.BinaryReader): UploadImageReq;
}

export namespace UploadImageReq {
    export type AsObject = {
        token: string,
        image: string,
        type: number,
    }
}

export class UploadImageResp extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): UploadImageResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadImageResp.AsObject;
    static toObject(includeInstance: boolean, msg: UploadImageResp): UploadImageResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadImageResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadImageResp;
    static deserializeBinaryFromReader(message: UploadImageResp, reader: jspb.BinaryReader): UploadImageResp;
}

export namespace UploadImageResp {
    export type AsObject = {
        url: string,
    }
}

export class RoomListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): RoomListReq;
    getType(): number;
    setType(value: number): RoomListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomListReq.AsObject;
    static toObject(includeInstance: boolean, msg: RoomListReq): RoomListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomListReq;
    static deserializeBinaryFromReader(message: RoomListReq, reader: jspb.BinaryReader): RoomListReq;
}

export namespace RoomListReq {
    export type AsObject = {
        token: string,
        type: number,
    }
}

export class RoomListResp extends jspb.Message { 
    getType(): number;
    setType(value: number): RoomListResp;
    clearListList(): void;
    getListList(): Array<Uint8Array | string>;
    getListList_asU8(): Array<Uint8Array>;
    getListList_asB64(): Array<string>;
    setListList(value: Array<Uint8Array | string>): RoomListResp;
    addList(value: Uint8Array | string, index?: number): Uint8Array | string;
    getOnline(): number;
    setOnline(value: number): RoomListResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoomListResp.AsObject;
    static toObject(includeInstance: boolean, msg: RoomListResp): RoomListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoomListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoomListResp;
    static deserializeBinaryFromReader(message: RoomListResp, reader: jspb.BinaryReader): RoomListResp;
}

export namespace RoomListResp {
    export type AsObject = {
        type: number,
        listList: Array<Uint8Array | string>,
        online: number,
    }
}

export class VipRoomDeskListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VipRoomDeskListReq;
    getRoomid(): number;
    setRoomid(value: number): VipRoomDeskListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipRoomDeskListReq.AsObject;
    static toObject(includeInstance: boolean, msg: VipRoomDeskListReq): VipRoomDeskListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipRoomDeskListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipRoomDeskListReq;
    static deserializeBinaryFromReader(message: VipRoomDeskListReq, reader: jspb.BinaryReader): VipRoomDeskListReq;
}

export namespace VipRoomDeskListReq {
    export type AsObject = {
        token: string,
        roomid: number,
    }
}

export class VipRoomDeskInfo extends jspb.Message { 
    getDeskid(): number;
    setDeskid(value: number): VipRoomDeskInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipRoomDeskInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VipRoomDeskInfo): VipRoomDeskInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipRoomDeskInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipRoomDeskInfo;
    static deserializeBinaryFromReader(message: VipRoomDeskInfo, reader: jspb.BinaryReader): VipRoomDeskInfo;
}

export namespace VipRoomDeskInfo {
    export type AsObject = {
        deskid: number,
    }
}

export class VipRoomDeskListResp extends jspb.Message { 
    getRoomid(): number;
    setRoomid(value: number): VipRoomDeskListResp;
    clearDesksList(): void;
    getDesksList(): Array<VipRoomDeskInfo>;
    setDesksList(value: Array<VipRoomDeskInfo>): VipRoomDeskListResp;
    addDesks(value?: VipRoomDeskInfo, index?: number): VipRoomDeskInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipRoomDeskListResp.AsObject;
    static toObject(includeInstance: boolean, msg: VipRoomDeskListResp): VipRoomDeskListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipRoomDeskListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipRoomDeskListResp;
    static deserializeBinaryFromReader(message: VipRoomDeskListResp, reader: jspb.BinaryReader): VipRoomDeskListResp;
}

export namespace VipRoomDeskListResp {
    export type AsObject = {
        roomid: number,
        desksList: Array<VipRoomDeskInfo.AsObject>,
    }
}

export class RealNameAuthReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): RealNameAuthReq;
    getType(): number;
    setType(value: number): RealNameAuthReq;
    getFront(): string;
    setFront(value: string): RealNameAuthReq;
    getBack(): string;
    setBack(value: string): RealNameAuthReq;
    getName(): string;
    setName(value: string): RealNameAuthReq;
    getCardid(): string;
    setCardid(value: string): RealNameAuthReq;
    getBirth(): string;
    setBirth(value: string): RealNameAuthReq;
    getAddress(): string;
    setAddress(value: string): RealNameAuthReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RealNameAuthReq.AsObject;
    static toObject(includeInstance: boolean, msg: RealNameAuthReq): RealNameAuthReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RealNameAuthReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RealNameAuthReq;
    static deserializeBinaryFromReader(message: RealNameAuthReq, reader: jspb.BinaryReader): RealNameAuthReq;
}

export namespace RealNameAuthReq {
    export type AsObject = {
        token: string,
        type: number,
        front: string,
        back: string,
        name: string,
        cardid: string,
        birth: string,
        address: string,
    }
}

export class BindFacebookReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): BindFacebookReq;
    getFacebookid(): string;
    setFacebookid(value: string): BindFacebookReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindFacebookReq.AsObject;
    static toObject(includeInstance: boolean, msg: BindFacebookReq): BindFacebookReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindFacebookReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindFacebookReq;
    static deserializeBinaryFromReader(message: BindFacebookReq, reader: jspb.BinaryReader): BindFacebookReq;
}

export namespace BindFacebookReq {
    export type AsObject = {
        token: string,
        facebookid: string,
    }
}

export class BindFacebookResp extends jspb.Message { 
    getFacebookid(): string;
    setFacebookid(value: string): BindFacebookResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindFacebookResp.AsObject;
    static toObject(includeInstance: boolean, msg: BindFacebookResp): BindFacebookResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindFacebookResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindFacebookResp;
    static deserializeBinaryFromReader(message: BindFacebookResp, reader: jspb.BinaryReader): BindFacebookResp;
}

export namespace BindFacebookResp {
    export type AsObject = {
        facebookid: string,
    }
}

export class LoginFacebookReq extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): LoginFacebookReq;
    getFacebookid(): string;
    setFacebookid(value: string): LoginFacebookReq;
    getMachineid(): string;
    setMachineid(value: string): LoginFacebookReq;
    getSpreadid(): string;
    setSpreadid(value: string): LoginFacebookReq;
    getVersion(): string;
    setVersion(value: string): LoginFacebookReq;
    getClientip(): string;
    setClientip(value: string): LoginFacebookReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginFacebookReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginFacebookReq): LoginFacebookReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginFacebookReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginFacebookReq;
    static deserializeBinaryFromReader(message: LoginFacebookReq, reader: jspb.BinaryReader): LoginFacebookReq;
}

export namespace LoginFacebookReq {
    export type AsObject = {
        uniqueid: string,
        facebookid: string,
        machineid: string,
        spreadid: string,
        version: string,
        clientip: string,
    }
}

export class LoginGoogleReq extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): LoginGoogleReq;
    getGoogleid(): string;
    setGoogleid(value: string): LoginGoogleReq;
    getMachineid(): string;
    setMachineid(value: string): LoginGoogleReq;
    getSpreadid(): string;
    setSpreadid(value: string): LoginGoogleReq;
    getVersion(): string;
    setVersion(value: string): LoginGoogleReq;
    getClientip(): string;
    setClientip(value: string): LoginGoogleReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginGoogleReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginGoogleReq): LoginGoogleReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginGoogleReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginGoogleReq;
    static deserializeBinaryFromReader(message: LoginGoogleReq, reader: jspb.BinaryReader): LoginGoogleReq;
}

export namespace LoginGoogleReq {
    export type AsObject = {
        uniqueid: string,
        googleid: string,
        machineid: string,
        spreadid: string,
        version: string,
        clientip: string,
    }
}

export class LoginAppleReq extends jspb.Message { 
    getUniqueid(): string;
    setUniqueid(value: string): LoginAppleReq;
    getAppleid(): string;
    setAppleid(value: string): LoginAppleReq;
    getMachineid(): string;
    setMachineid(value: string): LoginAppleReq;
    getSpreadid(): string;
    setSpreadid(value: string): LoginAppleReq;
    getVersion(): string;
    setVersion(value: string): LoginAppleReq;
    getClientip(): string;
    setClientip(value: string): LoginAppleReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginAppleReq.AsObject;
    static toObject(includeInstance: boolean, msg: LoginAppleReq): LoginAppleReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginAppleReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginAppleReq;
    static deserializeBinaryFromReader(message: LoginAppleReq, reader: jspb.BinaryReader): LoginAppleReq;
}

export namespace LoginAppleReq {
    export type AsObject = {
        uniqueid: string,
        appleid: string,
        machineid: string,
        spreadid: string,
        version: string,
        clientip: string,
    }
}

export class UserScoreChangeItem extends jspb.Message { 
    getId(): number;
    setId(value: number): UserScoreChangeItem;
    getStype(): number;
    setStype(value: number): UserScoreChangeItem;
    getSchange(): number;
    setSchange(value: number): UserScoreChangeItem;
    getDetails(): string;
    setDetails(value: string): UserScoreChangeItem;
    getCtime(): number;
    setCtime(value: number): UserScoreChangeItem;
    getTypename(): string;
    setTypename(value: string): UserScoreChangeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserScoreChangeItem.AsObject;
    static toObject(includeInstance: boolean, msg: UserScoreChangeItem): UserScoreChangeItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserScoreChangeItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserScoreChangeItem;
    static deserializeBinaryFromReader(message: UserScoreChangeItem, reader: jspb.BinaryReader): UserScoreChangeItem;
}

export namespace UserScoreChangeItem {
    export type AsObject = {
        id: number,
        stype: number,
        schange: number,
        details: string,
        ctime: number,
        typename: string,
    }
}

export class ScoreLogReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ScoreLogReq;
    getType(): number;
    setType(value: number): ScoreLogReq;
    getDay(): number;
    setDay(value: number): ScoreLogReq;
    getPagenum(): number;
    setPagenum(value: number): ScoreLogReq;
    getPagesize(): number;
    setPagesize(value: number): ScoreLogReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoreLogReq.AsObject;
    static toObject(includeInstance: boolean, msg: ScoreLogReq): ScoreLogReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoreLogReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoreLogReq;
    static deserializeBinaryFromReader(message: ScoreLogReq, reader: jspb.BinaryReader): ScoreLogReq;
}

export namespace ScoreLogReq {
    export type AsObject = {
        token: string,
        type: number,
        day: number,
        pagenum: number,
        pagesize: number,
    }
}

export class ScoreLogResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): ScoreLogResp;
    clearItemsList(): void;
    getItemsList(): Array<UserScoreChangeItem>;
    setItemsList(value: Array<UserScoreChangeItem>): ScoreLogResp;
    addItems(value?: UserScoreChangeItem, index?: number): UserScoreChangeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoreLogResp.AsObject;
    static toObject(includeInstance: boolean, msg: ScoreLogResp): ScoreLogResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoreLogResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoreLogResp;
    static deserializeBinaryFromReader(message: ScoreLogResp, reader: jspb.BinaryReader): ScoreLogResp;
}

export namespace ScoreLogResp {
    export type AsObject = {
        total: number,
        itemsList: Array<UserScoreChangeItem.AsObject>,
    }
}

export class ActivityItem extends jspb.Message { 
    getId(): number;
    setId(value: number): ActivityItem;
    getTitle(): string;
    setTitle(value: string): ActivityItem;
    getUrl(): string;
    setUrl(value: string): ActivityItem;
    getJumpto(): string;
    setJumpto(value: string): ActivityItem;
    getStarttime(): number;
    setStarttime(value: number): ActivityItem;
    getEndtime(): number;
    setEndtime(value: number): ActivityItem;
    getAtype(): number;
    setAtype(value: number): ActivityItem;
    getHasop(): boolean;
    setHasop(value: boolean): ActivityItem;
    getState(): number;
    setState(value: number): ActivityItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivityItem.AsObject;
    static toObject(includeInstance: boolean, msg: ActivityItem): ActivityItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivityItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivityItem;
    static deserializeBinaryFromReader(message: ActivityItem, reader: jspb.BinaryReader): ActivityItem;
}

export namespace ActivityItem {
    export type AsObject = {
        id: number,
        title: string,
        url: string,
        jumpto: string,
        starttime: number,
        endtime: number,
        atype: number,
        hasop: boolean,
        state: number,
    }
}

export class ActivityListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActivityListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivityListReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActivityListReq): ActivityListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivityListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivityListReq;
    static deserializeBinaryFromReader(message: ActivityListReq, reader: jspb.BinaryReader): ActivityListReq;
}

export namespace ActivityListReq {
    export type AsObject = {
        token: string,
    }
}

export class ActivityListResp extends jspb.Message { 
    clearInfoList(): void;
    getInfoList(): Array<ActivityItem>;
    setInfoList(value: Array<ActivityItem>): ActivityListResp;
    addInfo(value?: ActivityItem, index?: number): ActivityItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActivityListResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActivityListResp): ActivityListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActivityListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActivityListResp;
    static deserializeBinaryFromReader(message: ActivityListResp, reader: jspb.BinaryReader): ActivityListResp;
}

export namespace ActivityListResp {
    export type AsObject = {
        infoList: Array<ActivityItem.AsObject>,
    }
}

export class MailStatusReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): MailStatusReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailStatusReq.AsObject;
    static toObject(includeInstance: boolean, msg: MailStatusReq): MailStatusReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailStatusReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailStatusReq;
    static deserializeBinaryFromReader(message: MailStatusReq, reader: jspb.BinaryReader): MailStatusReq;
}

export namespace MailStatusReq {
    export type AsObject = {
        token: string,
    }
}

export class MailStatusResp extends jspb.Message { 
    getStatus(): boolean;
    setStatus(value: boolean): MailStatusResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailStatusResp.AsObject;
    static toObject(includeInstance: boolean, msg: MailStatusResp): MailStatusResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailStatusResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailStatusResp;
    static deserializeBinaryFromReader(message: MailStatusResp, reader: jspb.BinaryReader): MailStatusResp;
}

export namespace MailStatusResp {
    export type AsObject = {
        status: boolean,
    }
}

export class MailInfoItem extends jspb.Message { 
    getMailid(): number;
    setMailid(value: number): MailInfoItem;
    getTitle(): string;
    setTitle(value: string): MailInfoItem;
    getStatus(): number;
    setStatus(value: number): MailInfoItem;
    getSendtime(): number;
    setSendtime(value: number): MailInfoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailInfoItem.AsObject;
    static toObject(includeInstance: boolean, msg: MailInfoItem): MailInfoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailInfoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailInfoItem;
    static deserializeBinaryFromReader(message: MailInfoItem, reader: jspb.BinaryReader): MailInfoItem;
}

export namespace MailInfoItem {
    export type AsObject = {
        mailid: number,
        title: string,
        status: number,
        sendtime: number,
    }
}

export class MailListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): MailListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailListReq.AsObject;
    static toObject(includeInstance: boolean, msg: MailListReq): MailListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailListReq;
    static deserializeBinaryFromReader(message: MailListReq, reader: jspb.BinaryReader): MailListReq;
}

export namespace MailListReq {
    export type AsObject = {
        token: string,
    }
}

export class MailListResp extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<MailInfoItem>;
    setListList(value: Array<MailInfoItem>): MailListResp;
    addList(value?: MailInfoItem, index?: number): MailInfoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailListResp.AsObject;
    static toObject(includeInstance: boolean, msg: MailListResp): MailListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailListResp;
    static deserializeBinaryFromReader(message: MailListResp, reader: jspb.BinaryReader): MailListResp;
}

export namespace MailListResp {
    export type AsObject = {
        listList: Array<MailInfoItem.AsObject>,
    }
}

export class MailReadReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): MailReadReq;
    getMailid(): number;
    setMailid(value: number): MailReadReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailReadReq.AsObject;
    static toObject(includeInstance: boolean, msg: MailReadReq): MailReadReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailReadReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailReadReq;
    static deserializeBinaryFromReader(message: MailReadReq, reader: jspb.BinaryReader): MailReadReq;
}

export namespace MailReadReq {
    export type AsObject = {
        token: string,
        mailid: number,
    }
}

export class MailReadResp extends jspb.Message { 
    getMailid(): number;
    setMailid(value: number): MailReadResp;
    getContent(): string;
    setContent(value: string): MailReadResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MailReadResp.AsObject;
    static toObject(includeInstance: boolean, msg: MailReadResp): MailReadResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MailReadResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MailReadResp;
    static deserializeBinaryFromReader(message: MailReadResp, reader: jspb.BinaryReader): MailReadResp;
}

export namespace MailReadResp {
    export type AsObject = {
        mailid: number,
        content: string,
    }
}

export class BindInfoReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): BindInfoReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindInfoReq.AsObject;
    static toObject(includeInstance: boolean, msg: BindInfoReq): BindInfoReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindInfoReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindInfoReq;
    static deserializeBinaryFromReader(message: BindInfoReq, reader: jspb.BinaryReader): BindInfoReq;
}

export namespace BindInfoReq {
    export type AsObject = {
        token: string,
    }
}

export class BindInfoResp extends jspb.Message { 
    getName(): string;
    setName(value: string): BindInfoResp;
    getPhone(): string;
    setPhone(value: string): BindInfoResp;
    getMail(): string;
    setMail(value: string): BindInfoResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindInfoResp.AsObject;
    static toObject(includeInstance: boolean, msg: BindInfoResp): BindInfoResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindInfoResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindInfoResp;
    static deserializeBinaryFromReader(message: BindInfoResp, reader: jspb.BinaryReader): BindInfoResp;
}

export namespace BindInfoResp {
    export type AsObject = {
        name: string,
        phone: string,
        mail: string,
    }
}

export class UpdateStatusReq extends jspb.Message { 
    getSpreadid(): number;
    setSpreadid(value: number): UpdateStatusReq;
    getMachineid(): string;
    setMachineid(value: string): UpdateStatusReq;
    getBrand(): string;
    setBrand(value: string): UpdateStatusReq;
    getModel(): string;
    setModel(value: string): UpdateStatusReq;
    getWidth(): number;
    setWidth(value: number): UpdateStatusReq;
    getHeight(): number;
    setHeight(value: number): UpdateStatusReq;
    getDpi(): number;
    setDpi(value: number): UpdateStatusReq;
    getCountry(): string;
    setCountry(value: string): UpdateStatusReq;
    getLang(): string;
    setLang(value: string): UpdateStatusReq;
    getSimcountry(): string;
    setSimcountry(value: string): UpdateStatusReq;
    getSimoperator(): string;
    setSimoperator(value: string): UpdateStatusReq;
    getSimoperatorname(): string;
    setSimoperatorname(value: string): UpdateStatusReq;
    getReferrer(): string;
    setReferrer(value: string): UpdateStatusReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateStatusReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateStatusReq): UpdateStatusReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateStatusReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateStatusReq;
    static deserializeBinaryFromReader(message: UpdateStatusReq, reader: jspb.BinaryReader): UpdateStatusReq;
}

export namespace UpdateStatusReq {
    export type AsObject = {
        spreadid: number,
        machineid: string,
        brand: string,
        model: string,
        width: number,
        height: number,
        dpi: number,
        country: string,
        lang: string,
        simcountry: string,
        simoperator: string,
        simoperatorname: string,
        referrer: string,
    }
}

export class UpdateStatusResp extends jspb.Message { 
    getRegversion(): string;
    setRegversion(value: string): UpdateStatusResp;
    getApkurl(): string;
    setApkurl(value: string): UpdateStatusResp;
    getUpdatemode(): number;
    setUpdatemode(value: number): UpdateStatusResp;
    getHoturl(): string;
    setHoturl(value: string): UpdateStatusResp;
    getPageurl(): string;
    setPageurl(value: string): UpdateStatusResp;
    getNotice(): string;
    setNotice(value: string): UpdateStatusResp;
    getCurversion(): string;
    setCurversion(value: string): UpdateStatusResp;
    getApkversion(): string;
    setApkversion(value: string): UpdateStatusResp;
    getPacketurl(): string;
    setPacketurl(value: string): UpdateStatusResp;
    getConf(): string;
    setConf(value: string): UpdateStatusResp;
    getSpreadtype(): number;
    setSpreadtype(value: number): UpdateStatusResp;
    getModel(): number;
    setModel(value: number): UpdateStatusResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateStatusResp.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateStatusResp): UpdateStatusResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateStatusResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateStatusResp;
    static deserializeBinaryFromReader(message: UpdateStatusResp, reader: jspb.BinaryReader): UpdateStatusResp;
}

export namespace UpdateStatusResp {
    export type AsObject = {
        regversion: string,
        apkurl: string,
        updatemode: number,
        hoturl: string,
        pageurl: string,
        notice: string,
        curversion: string,
        apkversion: string,
        packeturl: string,
        conf: string,
        spreadtype: number,
        model: number,
    }
}

export class CouponInfoItem extends jspb.Message { 
    getCouponid(): number;
    setCouponid(value: number): CouponInfoItem;
    getCoupontype(): number;
    setCoupontype(value: number): CouponInfoItem;
    getExpiretime(): string;
    setExpiretime(value: string): CouponInfoItem;
    clearDataList(): void;
    getDataList(): Array<CouponInfoItem.CouponData>;
    setDataList(value: Array<CouponInfoItem.CouponData>): CouponInfoItem;
    addData(value?: CouponInfoItem.CouponData, index?: number): CouponInfoItem.CouponData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponInfoItem.AsObject;
    static toObject(includeInstance: boolean, msg: CouponInfoItem): CouponInfoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponInfoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponInfoItem;
    static deserializeBinaryFromReader(message: CouponInfoItem, reader: jspb.BinaryReader): CouponInfoItem;
}

export namespace CouponInfoItem {
    export type AsObject = {
        couponid: number,
        coupontype: number,
        expiretime: string,
        dataList: Array<CouponInfoItem.CouponData.AsObject>,
    }


    export class CouponData extends jspb.Message { 
        getRate(): number;
        setRate(value: number): CouponData;
        getBegin(): number;
        setBegin(value: number): CouponData;
        getEnd(): number;
        setEnd(value: number): CouponData;
        getMax(): number;
        setMax(value: number): CouponData;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CouponData.AsObject;
        static toObject(includeInstance: boolean, msg: CouponData): CouponData.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CouponData, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CouponData;
        static deserializeBinaryFromReader(message: CouponData, reader: jspb.BinaryReader): CouponData;
    }

    export namespace CouponData {
        export type AsObject = {
            rate: number,
            begin: number,
            end: number,
            max: number,
        }
    }

}

export class CouponListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CouponListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponListReq.AsObject;
    static toObject(includeInstance: boolean, msg: CouponListReq): CouponListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponListReq;
    static deserializeBinaryFromReader(message: CouponListReq, reader: jspb.BinaryReader): CouponListReq;
}

export namespace CouponListReq {
    export type AsObject = {
        token: string,
    }
}

export class CouponListResp extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<CouponInfoItem>;
    setListList(value: Array<CouponInfoItem>): CouponListResp;
    addList(value?: CouponInfoItem, index?: number): CouponInfoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponListResp.AsObject;
    static toObject(includeInstance: boolean, msg: CouponListResp): CouponListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponListResp;
    static deserializeBinaryFromReader(message: CouponListResp, reader: jspb.BinaryReader): CouponListResp;
}

export namespace CouponListResp {
    export type AsObject = {
        listList: Array<CouponInfoItem.AsObject>,
    }
}

export class BindMailReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): BindMailReq;
    getMail(): string;
    setMail(value: string): BindMailReq;
    getCode(): string;
    setCode(value: string): BindMailReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindMailReq.AsObject;
    static toObject(includeInstance: boolean, msg: BindMailReq): BindMailReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindMailReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindMailReq;
    static deserializeBinaryFromReader(message: BindMailReq, reader: jspb.BinaryReader): BindMailReq;
}

export namespace BindMailReq {
    export type AsObject = {
        token: string,
        mail: string,
        code: string,
    }
}

export class BindMailResp extends jspb.Message { 
    getMail(): string;
    setMail(value: string): BindMailResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BindMailResp.AsObject;
    static toObject(includeInstance: boolean, msg: BindMailResp): BindMailResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BindMailResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BindMailResp;
    static deserializeBinaryFromReader(message: BindMailResp, reader: jspb.BinaryReader): BindMailResp;
}

export namespace BindMailResp {
    export type AsObject = {
        mail: string,
    }
}

export class InviteBindReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteBindReq;
    getInviter(): number;
    setInviter(value: number): InviteBindReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteBindReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteBindReq): InviteBindReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteBindReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteBindReq;
    static deserializeBinaryFromReader(message: InviteBindReq, reader: jspb.BinaryReader): InviteBindReq;
}

export namespace InviteBindReq {
    export type AsObject = {
        token: string,
        inviter: number,
    }
}

export class InviteInfoReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteInfoReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteInfoReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteInfoReq): InviteInfoReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteInfoReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteInfoReq;
    static deserializeBinaryFromReader(message: InviteInfoReq, reader: jspb.BinaryReader): InviteInfoReq;
}

export namespace InviteInfoReq {
    export type AsObject = {
        token: string,
    }
}

export class InviteInfoResp extends jspb.Message { 
    getReferbonus(): number;
    setReferbonus(value: number): InviteInfoResp;
    getInvitebonus(): number;
    setInvitebonus(value: number): InviteInfoResp;
    getDepositbonus(): number;
    setDepositbonus(value: number): InviteInfoResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteInfoResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteInfoResp): InviteInfoResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteInfoResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteInfoResp;
    static deserializeBinaryFromReader(message: InviteInfoResp, reader: jspb.BinaryReader): InviteInfoResp;
}

export namespace InviteInfoResp {
    export type AsObject = {
        referbonus: number,
        invitebonus: number,
        depositbonus: number,
    }
}

export class InviteLogItem extends jspb.Message { 
    getRecordtime(): number;
    setRecordtime(value: number): InviteLogItem;
    getTotalbonus(): number;
    setTotalbonus(value: number): InviteLogItem;
    getInvitebonus(): number;
    setInvitebonus(value: number): InviteLogItem;
    getDepositbonus(): number;
    setDepositbonus(value: number): InviteLogItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteLogItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteLogItem): InviteLogItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteLogItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteLogItem;
    static deserializeBinaryFromReader(message: InviteLogItem, reader: jspb.BinaryReader): InviteLogItem;
}

export namespace InviteLogItem {
    export type AsObject = {
        recordtime: number,
        totalbonus: number,
        invitebonus: number,
        depositbonus: number,
    }
}

export class InviteLogReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteLogReq;
    getBegintime(): number;
    setBegintime(value: number): InviteLogReq;
    getEndtime(): number;
    setEndtime(value: number): InviteLogReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteLogReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteLogReq): InviteLogReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteLogReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteLogReq;
    static deserializeBinaryFromReader(message: InviteLogReq, reader: jspb.BinaryReader): InviteLogReq;
}

export namespace InviteLogReq {
    export type AsObject = {
        token: string,
        begintime: number,
        endtime: number,
    }
}

export class InviteLogResp extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<InviteLogItem>;
    setListList(value: Array<InviteLogItem>): InviteLogResp;
    addList(value?: InviteLogItem, index?: number): InviteLogItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteLogResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteLogResp): InviteLogResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteLogResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteLogResp;
    static deserializeBinaryFromReader(message: InviteLogResp, reader: jspb.BinaryReader): InviteLogResp;
}

export namespace InviteLogResp {
    export type AsObject = {
        listList: Array<InviteLogItem.AsObject>,
    }
}

export class InviteInfoItem extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): InviteInfoItem;
    getNickname(): string;
    setNickname(value: string): InviteInfoItem;
    getTodaybonus(): number;
    setTodaybonus(value: number): InviteInfoItem;
    getTotalbonus(): number;
    setTotalbonus(value: number): InviteInfoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteInfoItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteInfoItem): InviteInfoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteInfoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteInfoItem;
    static deserializeBinaryFromReader(message: InviteInfoItem, reader: jspb.BinaryReader): InviteInfoItem;
}

export namespace InviteInfoItem {
    export type AsObject = {
        userid: number,
        nickname: string,
        todaybonus: number,
        totalbonus: number,
    }
}

export class InviteListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteListReq;
    getOffset(): number;
    setOffset(value: number): InviteListReq;
    getCounts(): number;
    setCounts(value: number): InviteListReq;
    getSort(): number;
    setSort(value: number): InviteListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteListReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteListReq): InviteListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteListReq;
    static deserializeBinaryFromReader(message: InviteListReq, reader: jspb.BinaryReader): InviteListReq;
}

export namespace InviteListReq {
    export type AsObject = {
        token: string,
        offset: number,
        counts: number,
        sort: number,
    }
}

export class InviteListResp extends jspb.Message { 
    getOffset(): number;
    setOffset(value: number): InviteListResp;
    getCounts(): number;
    setCounts(value: number): InviteListResp;
    clearListList(): void;
    getListList(): Array<InviteInfoItem>;
    setListList(value: Array<InviteInfoItem>): InviteListResp;
    addList(value?: InviteInfoItem, index?: number): InviteInfoItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteListResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteListResp): InviteListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteListResp;
    static deserializeBinaryFromReader(message: InviteListResp, reader: jspb.BinaryReader): InviteListResp;
}

export namespace InviteListResp {
    export type AsObject = {
        offset: number,
        counts: number,
        listList: Array<InviteInfoItem.AsObject>,
    }
}

export class InviteRankItem extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): InviteRankItem;
    getFaceurl(): string;
    setFaceurl(value: string): InviteRankItem;
    getNickname(): string;
    setNickname(value: string): InviteRankItem;
    getInvitecounts(): number;
    setInvitecounts(value: number): InviteRankItem;
    getReferbonus(): number;
    setReferbonus(value: number): InviteRankItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRankItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRankItem): InviteRankItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRankItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRankItem;
    static deserializeBinaryFromReader(message: InviteRankItem, reader: jspb.BinaryReader): InviteRankItem;
}

export namespace InviteRankItem {
    export type AsObject = {
        userid: number,
        faceurl: string,
        nickname: string,
        invitecounts: number,
        referbonus: number,
    }
}

export class InviteRankResp extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<InviteRankItem>;
    setListList(value: Array<InviteRankItem>): InviteRankResp;
    addList(value?: InviteRankItem, index?: number): InviteRankItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRankResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRankResp): InviteRankResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRankResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRankResp;
    static deserializeBinaryFromReader(message: InviteRankResp, reader: jspb.BinaryReader): InviteRankResp;
}

export namespace InviteRankResp {
    export type AsObject = {
        listList: Array<InviteRankItem.AsObject>,
    }
}

export class ParamTokenReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ParamTokenReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParamTokenReq.AsObject;
    static toObject(includeInstance: boolean, msg: ParamTokenReq): ParamTokenReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParamTokenReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParamTokenReq;
    static deserializeBinaryFromReader(message: ParamTokenReq, reader: jspb.BinaryReader): ParamTokenReq;
}

export namespace ParamTokenReq {
    export type AsObject = {
        token: string,
    }
}

export class MsgExpRank extends jspb.Message { 
    clearItmsList(): void;
    getItmsList(): Array<MsgExpRank.RItem>;
    setItmsList(value: Array<MsgExpRank.RItem>): MsgExpRank;
    addItms(value?: MsgExpRank.RItem, index?: number): MsgExpRank.RItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgExpRank.AsObject;
    static toObject(includeInstance: boolean, msg: MsgExpRank): MsgExpRank.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgExpRank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgExpRank;
    static deserializeBinaryFromReader(message: MsgExpRank, reader: jspb.BinaryReader): MsgExpRank;
}

export namespace MsgExpRank {
    export type AsObject = {
        itmsList: Array<MsgExpRank.RItem.AsObject>,
    }


    export class RItem extends jspb.Message { 
        getUserid(): number;
        setUserid(value: number): RItem;
        getNickname(): string;
        setNickname(value: string): RItem;
        getFaceurl(): string;
        setFaceurl(value: string): RItem;
        getRankscore(): number;
        setRankscore(value: number): RItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RItem.AsObject;
        static toObject(includeInstance: boolean, msg: RItem): RItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RItem;
        static deserializeBinaryFromReader(message: RItem, reader: jspb.BinaryReader): RItem;
    }

    export namespace RItem {
        export type AsObject = {
            userid: number,
            nickname: string,
            faceurl: string,
            rankscore: number,
        }
    }

}

export class MsgPayRank extends jspb.Message { 
    clearItmsList(): void;
    getItmsList(): Array<MsgPayRank.RItem>;
    setItmsList(value: Array<MsgPayRank.RItem>): MsgPayRank;
    addItms(value?: MsgPayRank.RItem, index?: number): MsgPayRank.RItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgPayRank.AsObject;
    static toObject(includeInstance: boolean, msg: MsgPayRank): MsgPayRank.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgPayRank, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgPayRank;
    static deserializeBinaryFromReader(message: MsgPayRank, reader: jspb.BinaryReader): MsgPayRank;
}

export namespace MsgPayRank {
    export type AsObject = {
        itmsList: Array<MsgPayRank.RItem.AsObject>,
    }


    export class RItem extends jspb.Message { 
        getUserid(): number;
        setUserid(value: number): RItem;
        getNickname(): string;
        setNickname(value: string): RItem;
        getFaceurl(): string;
        setFaceurl(value: string): RItem;
        getRankscore(): number;
        setRankscore(value: number): RItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RItem.AsObject;
        static toObject(includeInstance: boolean, msg: RItem): RItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RItem;
        static deserializeBinaryFromReader(message: RItem, reader: jspb.BinaryReader): RItem;
    }

    export namespace RItem {
        export type AsObject = {
            userid: number,
            nickname: string,
            faceurl: string,
            rankscore: number,
        }
    }

}

export class MsgUserActionLog extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): MsgUserActionLog;
    getUniqueid(): string;
    setUniqueid(value: string): MsgUserActionLog;
    getAction(): number;
    setAction(value: number): MsgUserActionLog;
    getContent(): string;
    setContent(value: string): MsgUserActionLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgUserActionLog.AsObject;
    static toObject(includeInstance: boolean, msg: MsgUserActionLog): MsgUserActionLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgUserActionLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgUserActionLog;
    static deserializeBinaryFromReader(message: MsgUserActionLog, reader: jspb.BinaryReader): MsgUserActionLog;
}

export namespace MsgUserActionLog {
    export type AsObject = {
        userid: number,
        uniqueid: string,
        action: number,
        content: string,
    }
}

export class MsgDrawInfo extends jspb.Message { 
    getUid(): number;
    setUid(value: number): MsgDrawInfo;
    getPmode(): PayModeEnum;
    setPmode(value: PayModeEnum): MsgDrawInfo;
    getScore(): number;
    setScore(value: number): MsgDrawInfo;
    getBindscore(): number;
    setBindscore(value: number): MsgDrawInfo;
    getBonusscore(): number;
    setBonusscore(value: number): MsgDrawInfo;
    getExpscore(): number;
    setExpscore(value: number): MsgDrawInfo;
    getMin(): number;
    setMin(value: number): MsgDrawInfo;
    getFee(): number;
    setFee(value: number): MsgDrawInfo;
    getRate(): number;
    setRate(value: number): MsgDrawInfo;
    getMax(): number;
    setMax(value: number): MsgDrawInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgDrawInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MsgDrawInfo): MsgDrawInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgDrawInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgDrawInfo;
    static deserializeBinaryFromReader(message: MsgDrawInfo, reader: jspb.BinaryReader): MsgDrawInfo;
}

export namespace MsgDrawInfo {
    export type AsObject = {
        uid: number,
        pmode: PayModeEnum,
        score: number,
        bindscore: number,
        bonusscore: number,
        expscore: number,
        min: number,
        fee: number,
        rate: number,
        max: number,
    }
}

export class MsgPayFromIosShop extends jspb.Message { 
    getToken(): string;
    setToken(value: string): MsgPayFromIosShop;
    getIostoken(): string;
    setIostoken(value: string): MsgPayFromIosShop;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgPayFromIosShop.AsObject;
    static toObject(includeInstance: boolean, msg: MsgPayFromIosShop): MsgPayFromIosShop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgPayFromIosShop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgPayFromIosShop;
    static deserializeBinaryFromReader(message: MsgPayFromIosShop, reader: jspb.BinaryReader): MsgPayFromIosShop;
}

export namespace MsgPayFromIosShop {
    export type AsObject = {
        token: string,
        iostoken: string,
    }
}

export class MsgPayFromGGLShop extends jspb.Message { 
    getToken(): string;
    setToken(value: string): MsgPayFromGGLShop;
    getGgltoken(): string;
    setGgltoken(value: string): MsgPayFromGGLShop;
    getProductid(): string;
    setProductid(value: string): MsgPayFromGGLShop;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgPayFromGGLShop.AsObject;
    static toObject(includeInstance: boolean, msg: MsgPayFromGGLShop): MsgPayFromGGLShop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgPayFromGGLShop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgPayFromGGLShop;
    static deserializeBinaryFromReader(message: MsgPayFromGGLShop, reader: jspb.BinaryReader): MsgPayFromGGLShop;
}

export namespace MsgPayFromGGLShop {
    export type AsObject = {
        token: string,
        ggltoken: string,
        productid: string,
    }
}

export class MsgScoreInfo extends jspb.Message { 
    getUid(): number;
    setUid(value: number): MsgScoreInfo;
    getScore(): number;
    setScore(value: number): MsgScoreInfo;
    getBindscore(): number;
    setBindscore(value: number): MsgScoreInfo;
    getBonusscore(): number;
    setBonusscore(value: number): MsgScoreInfo;
    getExpscore(): number;
    setExpscore(value: number): MsgScoreInfo;
    getRechargenum(): number;
    setRechargenum(value: number): MsgScoreInfo;
    getUsedbonus(): number;
    setUsedbonus(value: number): MsgScoreInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgScoreInfo.AsObject;
    static toObject(includeInstance: boolean, msg: MsgScoreInfo): MsgScoreInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgScoreInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgScoreInfo;
    static deserializeBinaryFromReader(message: MsgScoreInfo, reader: jspb.BinaryReader): MsgScoreInfo;
}

export namespace MsgScoreInfo {
    export type AsObject = {
        uid: number,
        score: number,
        bindscore: number,
        bonusscore: number,
        expscore: number,
        rechargenum: number,
        usedbonus: number,
    }
}

export class InviteIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteIndexReq;
    getSpreadid(): number;
    setSpreadid(value: number): InviteIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteIndexReq): InviteIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteIndexReq;
    static deserializeBinaryFromReader(message: InviteIndexReq, reader: jspb.BinaryReader): InviteIndexReq;
}

export namespace InviteIndexReq {
    export type AsObject = {
        token: string,
        spreadid: number,
    }
}

export class InviteIndexResp extends jspb.Message { 
    getWithdrawalreward(): number;
    setWithdrawalreward(value: number): InviteIndexResp;
    getTodayreward(): number;
    setTodayreward(value: number): InviteIndexResp;
    getInvitecounts(): number;
    setInvitecounts(value: number): InviteIndexResp;
    getInvtrchgcnt(): number;
    setInvtrchgcnt(value: number): InviteIndexResp;
    getGainreward(): number;
    setGainreward(value: number): InviteIndexResp;
    getTodaysubbetamt(): number;
    setTodaysubbetamt(value: number): InviteIndexResp;
    getTodaygainreward(): number;
    setTodaygainreward(value: number): InviteIndexResp;
    getDailytaskreceive(): number;
    setDailytaskreceive(value: number): InviteIndexResp;
    getWeeklytasksubbetamt(): number;
    setWeeklytasksubbetamt(value: number): InviteIndexResp;
    getWeeklytaskreceive(): number;
    setWeeklytaskreceive(value: number): InviteIndexResp;
    getDailyleftseconds(): number;
    setDailyleftseconds(value: number): InviteIndexResp;
    getWeeklyleftseconds(): number;
    setWeeklyleftseconds(value: number): InviteIndexResp;
    clearDailytaskitemsList(): void;
    getDailytaskitemsList(): Array<InviteTaskItem>;
    setDailytaskitemsList(value: Array<InviteTaskItem>): InviteIndexResp;
    addDailytaskitems(value?: InviteTaskItem, index?: number): InviteTaskItem;
    clearWeeklytaskitemsList(): void;
    getWeeklytaskitemsList(): Array<InviteTaskItem>;
    setWeeklytaskitemsList(value: Array<InviteTaskItem>): InviteIndexResp;
    addWeeklytaskitems(value?: InviteTaskItem, index?: number): InviteTaskItem;
    getShareurl(): string;
    setShareurl(value: string): InviteIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteIndexResp): InviteIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteIndexResp;
    static deserializeBinaryFromReader(message: InviteIndexResp, reader: jspb.BinaryReader): InviteIndexResp;
}

export namespace InviteIndexResp {
    export type AsObject = {
        withdrawalreward: number,
        todayreward: number,
        invitecounts: number,
        invtrchgcnt: number,
        gainreward: number,
        todaysubbetamt: number,
        todaygainreward: number,
        dailytaskreceive: number,
        weeklytasksubbetamt: number,
        weeklytaskreceive: number,
        dailyleftseconds: number,
        weeklyleftseconds: number,
        dailytaskitemsList: Array<InviteTaskItem.AsObject>,
        weeklytaskitemsList: Array<InviteTaskItem.AsObject>,
        shareurl: string,
    }
}

export class InviteTaskItem extends jspb.Message { 
    getBetamt(): number;
    setBetamt(value: number): InviteTaskItem;
    getReward(): number;
    setReward(value: number): InviteTaskItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteTaskItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteTaskItem): InviteTaskItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteTaskItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteTaskItem;
    static deserializeBinaryFromReader(message: InviteTaskItem, reader: jspb.BinaryReader): InviteTaskItem;
}

export namespace InviteTaskItem {
    export type AsObject = {
        betamt: number,
        reward: number,
    }
}

export class InviteWithdrawRewardReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteWithdrawRewardReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteWithdrawRewardReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteWithdrawRewardReq): InviteWithdrawRewardReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteWithdrawRewardReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteWithdrawRewardReq;
    static deserializeBinaryFromReader(message: InviteWithdrawRewardReq, reader: jspb.BinaryReader): InviteWithdrawRewardReq;
}

export namespace InviteWithdrawRewardReq {
    export type AsObject = {
        token: string,
    }
}

export class InviteRewardDayDetailReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteRewardDayDetailReq;
    getPagenum(): number;
    setPagenum(value: number): InviteRewardDayDetailReq;
    getPagesize(): number;
    setPagesize(value: number): InviteRewardDayDetailReq;
    getDay(): number;
    setDay(value: number): InviteRewardDayDetailReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRewardDayDetailReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRewardDayDetailReq): InviteRewardDayDetailReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRewardDayDetailReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRewardDayDetailReq;
    static deserializeBinaryFromReader(message: InviteRewardDayDetailReq, reader: jspb.BinaryReader): InviteRewardDayDetailReq;
}

export namespace InviteRewardDayDetailReq {
    export type AsObject = {
        token: string,
        pagenum: number,
        pagesize: number,
        day: number,
    }
}

export class InviteRewardDayDetailResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): InviteRewardDayDetailResp;
    clearItemsList(): void;
    getItemsList(): Array<InviteRewardDayDetailItem>;
    setItemsList(value: Array<InviteRewardDayDetailItem>): InviteRewardDayDetailResp;
    addItems(value?: InviteRewardDayDetailItem, index?: number): InviteRewardDayDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRewardDayDetailResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRewardDayDetailResp): InviteRewardDayDetailResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRewardDayDetailResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRewardDayDetailResp;
    static deserializeBinaryFromReader(message: InviteRewardDayDetailResp, reader: jspb.BinaryReader): InviteRewardDayDetailResp;
}

export namespace InviteRewardDayDetailResp {
    export type AsObject = {
        total: number,
        itemsList: Array<InviteRewardDayDetailItem.AsObject>,
    }
}

export class InviteRewardDayDetailItem extends jspb.Message { 
    getDate(): number;
    setDate(value: number): InviteRewardDayDetailItem;
    getUid(): number;
    setUid(value: number): InviteRewardDayDetailItem;
    getBetamt(): number;
    setBetamt(value: number): InviteRewardDayDetailItem;
    getDevotereward(): number;
    setDevotereward(value: number): InviteRewardDayDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteRewardDayDetailItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteRewardDayDetailItem): InviteRewardDayDetailItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteRewardDayDetailItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteRewardDayDetailItem;
    static deserializeBinaryFromReader(message: InviteRewardDayDetailItem, reader: jspb.BinaryReader): InviteRewardDayDetailItem;
}

export namespace InviteRewardDayDetailItem {
    export type AsObject = {
        date: number,
        uid: number,
        betamt: number,
        devotereward: number,
    }
}

export class InviteUserDetailReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteUserDetailReq;
    getPagenum(): number;
    setPagenum(value: number): InviteUserDetailReq;
    getPagesize(): number;
    setPagesize(value: number): InviteUserDetailReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteUserDetailReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteUserDetailReq): InviteUserDetailReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteUserDetailReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteUserDetailReq;
    static deserializeBinaryFromReader(message: InviteUserDetailReq, reader: jspb.BinaryReader): InviteUserDetailReq;
}

export namespace InviteUserDetailReq {
    export type AsObject = {
        token: string,
        pagenum: number,
        pagesize: number,
    }
}

export class InviteUserDetailResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): InviteUserDetailResp;
    clearItemsList(): void;
    getItemsList(): Array<InviteUserDetailItem>;
    setItemsList(value: Array<InviteUserDetailItem>): InviteUserDetailResp;
    addItems(value?: InviteUserDetailItem, index?: number): InviteUserDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteUserDetailResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteUserDetailResp): InviteUserDetailResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteUserDetailResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteUserDetailResp;
    static deserializeBinaryFromReader(message: InviteUserDetailResp, reader: jspb.BinaryReader): InviteUserDetailResp;
}

export namespace InviteUserDetailResp {
    export type AsObject = {
        total: number,
        itemsList: Array<InviteUserDetailItem.AsObject>,
    }
}

export class InviteUserDetailItem extends jspb.Message { 
    getUid(): number;
    setUid(value: number): InviteUserDetailItem;
    getBetamt(): number;
    setBetamt(value: number): InviteUserDetailItem;
    getDevotereward(): number;
    setDevotereward(value: number): InviteUserDetailItem;
    getLastlogintime(): number;
    setLastlogintime(value: number): InviteUserDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteUserDetailItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteUserDetailItem): InviteUserDetailItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteUserDetailItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteUserDetailItem;
    static deserializeBinaryFromReader(message: InviteUserDetailItem, reader: jspb.BinaryReader): InviteUserDetailItem;
}

export namespace InviteUserDetailItem {
    export type AsObject = {
        uid: number,
        betamt: number,
        devotereward: number,
        lastlogintime: number,
    }
}

export class InviteTotalRewardDetailReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteTotalRewardDetailReq;
    getPagenum(): number;
    setPagenum(value: number): InviteTotalRewardDetailReq;
    getPagesize(): number;
    setPagesize(value: number): InviteTotalRewardDetailReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteTotalRewardDetailReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteTotalRewardDetailReq): InviteTotalRewardDetailReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteTotalRewardDetailReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteTotalRewardDetailReq;
    static deserializeBinaryFromReader(message: InviteTotalRewardDetailReq, reader: jspb.BinaryReader): InviteTotalRewardDetailReq;
}

export namespace InviteTotalRewardDetailReq {
    export type AsObject = {
        token: string,
        pagenum: number,
        pagesize: number,
    }
}

export class InviteTotalRewardDetailResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): InviteTotalRewardDetailResp;
    clearItemsList(): void;
    getItemsList(): Array<InviteTotalRewardDetailItem>;
    setItemsList(value: Array<InviteTotalRewardDetailItem>): InviteTotalRewardDetailResp;
    addItems(value?: InviteTotalRewardDetailItem, index?: number): InviteTotalRewardDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteTotalRewardDetailResp.AsObject;
    static toObject(includeInstance: boolean, msg: InviteTotalRewardDetailResp): InviteTotalRewardDetailResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteTotalRewardDetailResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteTotalRewardDetailResp;
    static deserializeBinaryFromReader(message: InviteTotalRewardDetailResp, reader: jspb.BinaryReader): InviteTotalRewardDetailResp;
}

export namespace InviteTotalRewardDetailResp {
    export type AsObject = {
        total: number,
        itemsList: Array<InviteTotalRewardDetailItem.AsObject>,
    }
}

export class InviteTotalRewardDetailItem extends jspb.Message { 
    getDate(): number;
    setDate(value: number): InviteTotalRewardDetailItem;
    getSubbetamt(): number;
    setSubbetamt(value: number): InviteTotalRewardDetailItem;
    getGainreward(): number;
    setGainreward(value: number): InviteTotalRewardDetailItem;
    getDailytaskreward(): number;
    setDailytaskreward(value: number): InviteTotalRewardDetailItem;
    getWeeklytaskreward(): number;
    setWeeklytaskreward(value: number): InviteTotalRewardDetailItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteTotalRewardDetailItem.AsObject;
    static toObject(includeInstance: boolean, msg: InviteTotalRewardDetailItem): InviteTotalRewardDetailItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteTotalRewardDetailItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteTotalRewardDetailItem;
    static deserializeBinaryFromReader(message: InviteTotalRewardDetailItem, reader: jspb.BinaryReader): InviteTotalRewardDetailItem;
}

export namespace InviteTotalRewardDetailItem {
    export type AsObject = {
        date: number,
        subbetamt: number,
        gainreward: number,
        dailytaskreward: number,
        weeklytaskreward: number,
    }
}

export class InviteReceiveRewardReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): InviteReceiveRewardReq;
    getType(): number;
    setType(value: number): InviteReceiveRewardReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteReceiveRewardReq.AsObject;
    static toObject(includeInstance: boolean, msg: InviteReceiveRewardReq): InviteReceiveRewardReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteReceiveRewardReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteReceiveRewardReq;
    static deserializeBinaryFromReader(message: InviteReceiveRewardReq, reader: jspb.BinaryReader): InviteReceiveRewardReq;
}

export namespace InviteReceiveRewardReq {
    export type AsObject = {
        token: string,
        type: number,
    }
}

export class PayProductListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayProductListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayProductListReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayProductListReq): PayProductListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayProductListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayProductListReq;
    static deserializeBinaryFromReader(message: PayProductListReq, reader: jspb.BinaryReader): PayProductListReq;
}

export namespace PayProductListReq {
    export type AsObject = {
        token: string,
    }
}

export class PayProductListResp extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<PayProductItem>;
    setItemsList(value: Array<PayProductItem>): PayProductListResp;
    addItems(value?: PayProductItem, index?: number): PayProductItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayProductListResp.AsObject;
    static toObject(includeInstance: boolean, msg: PayProductListResp): PayProductListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayProductListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayProductListResp;
    static deserializeBinaryFromReader(message: PayProductListResp, reader: jspb.BinaryReader): PayProductListResp;
}

export namespace PayProductListResp {
    export type AsObject = {
        itemsList: Array<PayProductItem.AsObject>,
    }
}

export class PayProductItem extends jspb.Message { 
    getId(): number;
    setId(value: number): PayProductItem;
    getAmt(): number;
    setAmt(value: number): PayProductItem;
    getBest(): boolean;
    setBest(value: boolean): PayProductItem;
    getCashback(): number;
    setCashback(value: number): PayProductItem;
    getBonus(): number;
    setBonus(value: number): PayProductItem;
    getImgindex(): number;
    setImgindex(value: number): PayProductItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayProductItem.AsObject;
    static toObject(includeInstance: boolean, msg: PayProductItem): PayProductItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayProductItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayProductItem;
    static deserializeBinaryFromReader(message: PayProductItem, reader: jspb.BinaryReader): PayProductItem;
}

export namespace PayProductItem {
    export type AsObject = {
        id: number,
        amt: number,
        best: boolean,
        cashback: number,
        bonus: number,
        imgindex: number,
    }
}

export class PayOrderReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOrderReq;
    getPid(): number;
    setPid(value: number): PayOrderReq;
    getRefer(): number;
    setRefer(value: number): PayOrderReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOrderReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOrderReq): PayOrderReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOrderReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOrderReq;
    static deserializeBinaryFromReader(message: PayOrderReq, reader: jspb.BinaryReader): PayOrderReq;
}

export namespace PayOrderReq {
    export type AsObject = {
        token: string,
        pid: number,
        refer: number,
    }
}

export class PayOrderResp extends jspb.Message { 
    getPayurl(): string;
    setPayurl(value: string): PayOrderResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOrderResp.AsObject;
    static toObject(includeInstance: boolean, msg: PayOrderResp): PayOrderResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOrderResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOrderResp;
    static deserializeBinaryFromReader(message: PayOrderResp, reader: jspb.BinaryReader): PayOrderResp;
}

export namespace PayOrderResp {
    export type AsObject = {
        payurl: string,
    }
}

export class PayOutInfoReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOutInfoReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutInfoReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutInfoReq): PayOutInfoReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutInfoReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutInfoReq;
    static deserializeBinaryFromReader(message: PayOutInfoReq, reader: jspb.BinaryReader): PayOutInfoReq;
}

export namespace PayOutInfoReq {
    export type AsObject = {
        token: string,
    }
}

export class PayOutInfoResp extends jspb.Message { 
    getBalance(): number;
    setBalance(value: number): PayOutInfoResp;
    getMinnum(): number;
    setMinnum(value: number): PayOutInfoResp;

    hasCarditem(): boolean;
    clearCarditem(): void;
    getCarditem(): PayOutBindCardItem | undefined;
    setCarditem(value?: PayOutBindCardItem): PayOutInfoResp;
    getMchid(): number;
    setMchid(value: number): PayOutInfoResp;
    getPayouttaxrate(): number;
    setPayouttaxrate(value: number): PayOutInfoResp;
    getPayouttaxfee(): number;
    setPayouttaxfee(value: number): PayOutInfoResp;
    getScore(): number;
    setScore(value: number): PayOutInfoResp;
    getBindscore(): number;
    setBindscore(value: number): PayOutInfoResp;
    getMaxnum(): number;
    setMaxnum(value: number): PayOutInfoResp;
    getWithdrawfeereductionrate(): number;
    setWithdrawfeereductionrate(value: number): PayOutInfoResp;
    getDaywithdrawleftcnt(): number;
    setDaywithdrawleftcnt(value: number): PayOutInfoResp;
    clearWithdrawitemList(): void;
    getWithdrawitemList(): Array<number>;
    setWithdrawitemList(value: Array<number>): PayOutInfoResp;
    addWithdrawitem(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutInfoResp.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutInfoResp): PayOutInfoResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutInfoResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutInfoResp;
    static deserializeBinaryFromReader(message: PayOutInfoResp, reader: jspb.BinaryReader): PayOutInfoResp;
}

export namespace PayOutInfoResp {
    export type AsObject = {
        balance: number,
        minnum: number,
        carditem?: PayOutBindCardItem.AsObject,
        mchid: number,
        payouttaxrate: number,
        payouttaxfee: number,
        score: number,
        bindscore: number,
        maxnum: number,
        withdrawfeereductionrate: number,
        daywithdrawleftcnt: number,
        withdrawitemList: Array<number>,
    }
}

export class PayOutBindCardItem extends jspb.Message { 
    getAccountholdername(): string;
    setAccountholdername(value: string): PayOutBindCardItem;
    getAccountnumber(): string;
    setAccountnumber(value: string): PayOutBindCardItem;
    getIfsccode(): string;
    setIfsccode(value: string): PayOutBindCardItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutBindCardItem.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutBindCardItem): PayOutBindCardItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutBindCardItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutBindCardItem;
    static deserializeBinaryFromReader(message: PayOutBindCardItem, reader: jspb.BinaryReader): PayOutBindCardItem;
}

export namespace PayOutBindCardItem {
    export type AsObject = {
        accountholdername: string,
        accountnumber: string,
        ifsccode: string,
    }
}

export class PayOutBindCardReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOutBindCardReq;
    getAccountholdername(): string;
    setAccountholdername(value: string): PayOutBindCardReq;
    getAccountnumber(): string;
    setAccountnumber(value: string): PayOutBindCardReq;
    getIfsccode(): string;
    setIfsccode(value: string): PayOutBindCardReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutBindCardReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutBindCardReq): PayOutBindCardReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutBindCardReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutBindCardReq;
    static deserializeBinaryFromReader(message: PayOutBindCardReq, reader: jspb.BinaryReader): PayOutBindCardReq;
}

export namespace PayOutBindCardReq {
    export type AsObject = {
        token: string,
        accountholdername: string,
        accountnumber: string,
        ifsccode: string,
    }
}

export class PayOutUnbindCardReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOutUnbindCardReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutUnbindCardReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutUnbindCardReq): PayOutUnbindCardReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutUnbindCardReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutUnbindCardReq;
    static deserializeBinaryFromReader(message: PayOutUnbindCardReq, reader: jspb.BinaryReader): PayOutUnbindCardReq;
}

export namespace PayOutUnbindCardReq {
    export type AsObject = {
        token: string,
    }
}

export class PayOutOrderReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOutOrderReq;
    getAmt(): number;
    setAmt(value: number): PayOutOrderReq;
    getMchid(): number;
    setMchid(value: number): PayOutOrderReq;
    getTax(): number;
    setTax(value: number): PayOutOrderReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutOrderReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutOrderReq): PayOutOrderReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutOrderReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutOrderReq;
    static deserializeBinaryFromReader(message: PayOutOrderReq, reader: jspb.BinaryReader): PayOutOrderReq;
}

export namespace PayOutOrderReq {
    export type AsObject = {
        token: string,
        amt: number,
        mchid: number,
        tax: number,
    }
}

export class PayOutOrderListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): PayOutOrderListReq;
    getPagenum(): number;
    setPagenum(value: number): PayOutOrderListReq;
    getPagesize(): number;
    setPagesize(value: number): PayOutOrderListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutOrderListReq.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutOrderListReq): PayOutOrderListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutOrderListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutOrderListReq;
    static deserializeBinaryFromReader(message: PayOutOrderListReq, reader: jspb.BinaryReader): PayOutOrderListReq;
}

export namespace PayOutOrderListReq {
    export type AsObject = {
        token: string,
        pagenum: number,
        pagesize: number,
    }
}

export class PayOutOrderListResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): PayOutOrderListResp;
    clearItemsList(): void;
    getItemsList(): Array<PayOutOrderItem>;
    setItemsList(value: Array<PayOutOrderItem>): PayOutOrderListResp;
    addItems(value?: PayOutOrderItem, index?: number): PayOutOrderItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutOrderListResp.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutOrderListResp): PayOutOrderListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutOrderListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutOrderListResp;
    static deserializeBinaryFromReader(message: PayOutOrderListResp, reader: jspb.BinaryReader): PayOutOrderListResp;
}

export namespace PayOutOrderListResp {
    export type AsObject = {
        total: number,
        itemsList: Array<PayOutOrderItem.AsObject>,
    }
}

export class PayOutOrderItem extends jspb.Message { 
    getAmt(): number;
    setAmt(value: number): PayOutOrderItem;
    getCtime(): number;
    setCtime(value: number): PayOutOrderItem;
    getStatus(): number;
    setStatus(value: number): PayOutOrderItem;
    getTax(): number;
    setTax(value: number): PayOutOrderItem;
    getStatusname(): string;
    setStatusname(value: string): PayOutOrderItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayOutOrderItem.AsObject;
    static toObject(includeInstance: boolean, msg: PayOutOrderItem): PayOutOrderItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayOutOrderItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayOutOrderItem;
    static deserializeBinaryFromReader(message: PayOutOrderItem, reader: jspb.BinaryReader): PayOutOrderItem;
}

export namespace PayOutOrderItem {
    export type AsObject = {
        amt: number,
        ctime: number,
        status: number,
        tax: number,
        statusname: string,
    }
}

export class CollectBonusReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CollectBonusReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectBonusReq.AsObject;
    static toObject(includeInstance: boolean, msg: CollectBonusReq): CollectBonusReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectBonusReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectBonusReq;
    static deserializeBinaryFromReader(message: CollectBonusReq, reader: jspb.BinaryReader): CollectBonusReq;
}

export namespace CollectBonusReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheelIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LuckWheelIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheelIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheelIndexReq): LuckWheelIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheelIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheelIndexReq;
    static deserializeBinaryFromReader(message: LuckWheelIndexReq, reader: jspb.BinaryReader): LuckWheelIndexReq;
}

export namespace LuckWheelIndexReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheelPrizeItem extends jspb.Message { 
    getPrizeid(): string;
    setPrizeid(value: string): LuckWheelPrizeItem;
    getPrizename(): string;
    setPrizename(value: string): LuckWheelPrizeItem;
    getPrizeval(): number;
    setPrizeval(value: number): LuckWheelPrizeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheelPrizeItem.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheelPrizeItem): LuckWheelPrizeItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheelPrizeItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheelPrizeItem;
    static deserializeBinaryFromReader(message: LuckWheelPrizeItem, reader: jspb.BinaryReader): LuckWheelPrizeItem;
}

export namespace LuckWheelPrizeItem {
    export type AsObject = {
        prizeid: string,
        prizename: string,
        prizeval: number,
    }
}

export class LuckWheelIndexResp extends jspb.Message { 
    getHasactivity(): boolean;
    setHasactivity(value: boolean): LuckWheelIndexResp;
    getSpincnt(): number;
    setSpincnt(value: number): LuckWheelIndexResp;
    clearPrizeitemsList(): void;
    getPrizeitemsList(): Array<LuckWheelPrizeItem>;
    setPrizeitemsList(value: Array<LuckWheelPrizeItem>): LuckWheelIndexResp;
    addPrizeitems(value?: LuckWheelPrizeItem, index?: number): LuckWheelPrizeItem;
    getDayleftcnt(): number;
    setDayleftcnt(value: number): LuckWheelIndexResp;
    getPid(): number;
    setPid(value: number): LuckWheelIndexResp;
    getPayamt(): number;
    setPayamt(value: number): LuckWheelIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheelIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheelIndexResp): LuckWheelIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheelIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheelIndexResp;
    static deserializeBinaryFromReader(message: LuckWheelIndexResp, reader: jspb.BinaryReader): LuckWheelIndexResp;
}

export namespace LuckWheelIndexResp {
    export type AsObject = {
        hasactivity: boolean,
        spincnt: number,
        prizeitemsList: Array<LuckWheelPrizeItem.AsObject>,
        dayleftcnt: number,
        pid: number,
        payamt: number,
    }
}

export class LuckWheelSpinReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LuckWheelSpinReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheelSpinReq.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheelSpinReq): LuckWheelSpinReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheelSpinReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheelSpinReq;
    static deserializeBinaryFromReader(message: LuckWheelSpinReq, reader: jspb.BinaryReader): LuckWheelSpinReq;
}

export namespace LuckWheelSpinReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheelSpinResp extends jspb.Message { 
    getPrizeid(): string;
    setPrizeid(value: string): LuckWheelSpinResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheelSpinResp.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheelSpinResp): LuckWheelSpinResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheelSpinResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheelSpinResp;
    static deserializeBinaryFromReader(message: LuckWheelSpinResp, reader: jspb.BinaryReader): LuckWheelSpinResp;
}

export namespace LuckWheelSpinResp {
    export type AsObject = {
        prizeid: string,
    }
}

export class Act24HourRechargeIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): Act24HourRechargeIndexReq;
    getActivityid(): number;
    setActivityid(value: number): Act24HourRechargeIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Act24HourRechargeIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: Act24HourRechargeIndexReq): Act24HourRechargeIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Act24HourRechargeIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Act24HourRechargeIndexReq;
    static deserializeBinaryFromReader(message: Act24HourRechargeIndexReq, reader: jspb.BinaryReader): Act24HourRechargeIndexReq;
}

export namespace Act24HourRechargeIndexReq {
    export type AsObject = {
        token: string,
        activityid: number,
    }
}

export class Act24HourRechargeIndexResp extends jspb.Message { 
    getHasactivity(): boolean;
    setHasactivity(value: boolean): Act24HourRechargeIndexResp;
    getPid(): number;
    setPid(value: number): Act24HourRechargeIndexResp;
    getPayamt(): number;
    setPayamt(value: number): Act24HourRechargeIndexResp;
    getBonus(): number;
    setBonus(value: number): Act24HourRechargeIndexResp;
    getCashback(): number;
    setCashback(value: number): Act24HourRechargeIndexResp;
    getEndtime(): number;
    setEndtime(value: number): Act24HourRechargeIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Act24HourRechargeIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: Act24HourRechargeIndexResp): Act24HourRechargeIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Act24HourRechargeIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Act24HourRechargeIndexResp;
    static deserializeBinaryFromReader(message: Act24HourRechargeIndexResp, reader: jspb.BinaryReader): Act24HourRechargeIndexResp;
}

export namespace Act24HourRechargeIndexResp {
    export type AsObject = {
        hasactivity: boolean,
        pid: number,
        payamt: number,
        bonus: number,
        cashback: number,
        endtime: number,
    }
}

export class CouponIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CouponIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: CouponIndexReq): CouponIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponIndexReq;
    static deserializeBinaryFromReader(message: CouponIndexReq, reader: jspb.BinaryReader): CouponIndexReq;
}

export namespace CouponIndexReq {
    export type AsObject = {
        token: string,
    }
}

export class CouponItem extends jspb.Message { 
    getCouponid(): string;
    setCouponid(value: string): CouponItem;
    getPayamt(): number;
    setPayamt(value: number): CouponItem;
    getPid(): number;
    setPid(value: number): CouponItem;
    getDirectcash(): number;
    setDirectcash(value: number): CouponItem;
    getDirectbonus(): number;
    setDirectbonus(value: number): CouponItem;
    getDailycollectcash(): number;
    setDailycollectcash(value: number): CouponItem;
    clearCollectitemsList(): void;
    getCollectitemsList(): Array<DailyCollectItem>;
    setCollectitemsList(value: Array<DailyCollectItem>): CouponItem;
    addCollectitems(value?: DailyCollectItem, index?: number): DailyCollectItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponItem.AsObject;
    static toObject(includeInstance: boolean, msg: CouponItem): CouponItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponItem;
    static deserializeBinaryFromReader(message: CouponItem, reader: jspb.BinaryReader): CouponItem;
}

export namespace CouponItem {
    export type AsObject = {
        couponid: string,
        payamt: number,
        pid: number,
        directcash: number,
        directbonus: number,
        dailycollectcash: number,
        collectitemsList: Array<DailyCollectItem.AsObject>,
    }
}

export class DailyCollectItem extends jspb.Message { 
    getDay(): number;
    setDay(value: number): DailyCollectItem;
    getCollected(): boolean;
    setCollected(value: boolean): DailyCollectItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DailyCollectItem.AsObject;
    static toObject(includeInstance: boolean, msg: DailyCollectItem): DailyCollectItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DailyCollectItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DailyCollectItem;
    static deserializeBinaryFromReader(message: DailyCollectItem, reader: jspb.BinaryReader): DailyCollectItem;
}

export namespace DailyCollectItem {
    export type AsObject = {
        day: number,
        collected: boolean,
    }
}

export class CouponIndexResp extends jspb.Message { 
    getHasactivity(): boolean;
    setHasactivity(value: boolean): CouponIndexResp;
    clearItemsList(): void;
    getItemsList(): Array<CouponItem>;
    setItemsList(value: Array<CouponItem>): CouponIndexResp;
    addItems(value?: CouponItem, index?: number): CouponItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: CouponIndexResp): CouponIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponIndexResp;
    static deserializeBinaryFromReader(message: CouponIndexResp, reader: jspb.BinaryReader): CouponIndexResp;
}

export namespace CouponIndexResp {
    export type AsObject = {
        hasactivity: boolean,
        itemsList: Array<CouponItem.AsObject>,
    }
}

export class CouponDailyCollectReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CouponDailyCollectReq;
    getCouponid(): string;
    setCouponid(value: string): CouponDailyCollectReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CouponDailyCollectReq.AsObject;
    static toObject(includeInstance: boolean, msg: CouponDailyCollectReq): CouponDailyCollectReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CouponDailyCollectReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CouponDailyCollectReq;
    static deserializeBinaryFromReader(message: CouponDailyCollectReq, reader: jspb.BinaryReader): CouponDailyCollectReq;
}

export namespace CouponDailyCollectReq {
    export type AsObject = {
        token: string,
        couponid: string,
    }
}

export class ActSignInIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActSignInIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActSignInIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActSignInIndexReq): ActSignInIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActSignInIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActSignInIndexReq;
    static deserializeBinaryFromReader(message: ActSignInIndexReq, reader: jspb.BinaryReader): ActSignInIndexReq;
}

export namespace ActSignInIndexReq {
    export type AsObject = {
        token: string,
    }
}

export class ActSignInCollectItem extends jspb.Message { 
    getCollecttype(): number;
    setCollecttype(value: number): ActSignInCollectItem;
    getAmt(): number;
    setAmt(value: number): ActSignInCollectItem;
    getDelivertype(): number;
    setDelivertype(value: number): ActSignInCollectItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActSignInCollectItem.AsObject;
    static toObject(includeInstance: boolean, msg: ActSignInCollectItem): ActSignInCollectItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActSignInCollectItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActSignInCollectItem;
    static deserializeBinaryFromReader(message: ActSignInCollectItem, reader: jspb.BinaryReader): ActSignInCollectItem;
}

export namespace ActSignInCollectItem {
    export type AsObject = {
        collecttype: number,
        amt: number,
        delivertype: number,
    }
}

export class ActSignInIndexResp extends jspb.Message { 
    getHasactivity(): boolean;
    setHasactivity(value: boolean): ActSignInIndexResp;
    clearItemsList(): void;
    getItemsList(): Array<ActSignInCollectItem>;
    setItemsList(value: Array<ActSignInCollectItem>): ActSignInIndexResp;
    addItems(value?: ActSignInCollectItem, index?: number): ActSignInCollectItem;
    getHascollectcurday(): boolean;
    setHascollectcurday(value: boolean): ActSignInIndexResp;
    getCollectedday(): number;
    setCollectedday(value: number): ActSignInIndexResp;
    clearVipitemsList(): void;
    getVipitemsList(): Array<ActSignInCollectItem>;
    setVipitemsList(value: Array<ActSignInCollectItem>): ActSignInIndexResp;
    addVipitems(value?: ActSignInCollectItem, index?: number): ActSignInCollectItem;
    getViphascollectcurday(): boolean;
    setViphascollectcurday(value: boolean): ActSignInIndexResp;
    getVipcollectedday(): number;
    setVipcollectedday(value: number): ActSignInIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActSignInIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActSignInIndexResp): ActSignInIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActSignInIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActSignInIndexResp;
    static deserializeBinaryFromReader(message: ActSignInIndexResp, reader: jspb.BinaryReader): ActSignInIndexResp;
}

export namespace ActSignInIndexResp {
    export type AsObject = {
        hasactivity: boolean,
        itemsList: Array<ActSignInCollectItem.AsObject>,
        hascollectcurday: boolean,
        collectedday: number,
        vipitemsList: Array<ActSignInCollectItem.AsObject>,
        viphascollectcurday: boolean,
        vipcollectedday: number,
    }
}

export class ActSignInCollectReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActSignInCollectReq;
    getVip(): boolean;
    setVip(value: boolean): ActSignInCollectReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActSignInCollectReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActSignInCollectReq): ActSignInCollectReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActSignInCollectReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActSignInCollectReq;
    static deserializeBinaryFromReader(message: ActSignInCollectReq, reader: jspb.BinaryReader): ActSignInCollectReq;
}

export namespace ActSignInCollectReq {
    export type AsObject = {
        token: string,
        vip: boolean,
    }
}

export class ActSignInCollectResp extends jspb.Message { 
    getAmt(): number;
    setAmt(value: number): ActSignInCollectResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActSignInCollectResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActSignInCollectResp): ActSignInCollectResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActSignInCollectResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActSignInCollectResp;
    static deserializeBinaryFromReader(message: ActSignInCollectResp, reader: jspb.BinaryReader): ActSignInCollectResp;
}

export namespace ActSignInCollectResp {
    export type AsObject = {
        amt: number,
    }
}

export class ActFreeCashIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashIndexReq): ActFreeCashIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashIndexReq;
    static deserializeBinaryFromReader(message: ActFreeCashIndexReq, reader: jspb.BinaryReader): ActFreeCashIndexReq;
}

export namespace ActFreeCashIndexReq {
    export type AsObject = {
        token: string,
    }
}

export class ActFreeCashSucUserInfo extends jspb.Message { 
    getNickname(): string;
    setNickname(value: string): ActFreeCashSucUserInfo;
    getWithdrawamt(): number;
    setWithdrawamt(value: number): ActFreeCashSucUserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashSucUserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashSucUserInfo): ActFreeCashSucUserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashSucUserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashSucUserInfo;
    static deserializeBinaryFromReader(message: ActFreeCashSucUserInfo, reader: jspb.BinaryReader): ActFreeCashSucUserInfo;
}

export namespace ActFreeCashSucUserInfo {
    export type AsObject = {
        nickname: string,
        withdrawamt: number,
    }
}

export class ActFreeCashIndexResp extends jspb.Message { 
    getState(): number;
    setState(value: number): ActFreeCashIndexResp;
    getTargetamt(): number;
    setTargetamt(value: number): ActFreeCashIndexResp;
    getAccamt(): number;
    setAccamt(value: number): ActFreeCashIndexResp;
    getSpin(): number;
    setSpin(value: number): ActFreeCashIndexResp;
    clearSucuserinfosList(): void;
    getSucuserinfosList(): Array<ActFreeCashSucUserInfo>;
    setSucuserinfosList(value: Array<ActFreeCashSucUserInfo>): ActFreeCashIndexResp;
    addSucuserinfos(value?: ActFreeCashSucUserInfo, index?: number): ActFreeCashSucUserInfo;
    getTxid(): number;
    setTxid(value: number): ActFreeCashIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashIndexResp): ActFreeCashIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashIndexResp;
    static deserializeBinaryFromReader(message: ActFreeCashIndexResp, reader: jspb.BinaryReader): ActFreeCashIndexResp;
}

export namespace ActFreeCashIndexResp {
    export type AsObject = {
        state: number,
        targetamt: number,
        accamt: number,
        spin: number,
        sucuserinfosList: Array<ActFreeCashSucUserInfo.AsObject>,
        txid: number,
    }
}

export class ActFreeCashJoinReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashJoinReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashJoinReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashJoinReq): ActFreeCashJoinReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashJoinReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashJoinReq;
    static deserializeBinaryFromReader(message: ActFreeCashJoinReq, reader: jspb.BinaryReader): ActFreeCashJoinReq;
}

export namespace ActFreeCashJoinReq {
    export type AsObject = {
        token: string,
    }
}

export class ActFreeCashJoinResp extends jspb.Message { 
    getState(): number;
    setState(value: number): ActFreeCashJoinResp;
    getTargetamt(): number;
    setTargetamt(value: number): ActFreeCashJoinResp;
    getAccamt(): number;
    setAccamt(value: number): ActFreeCashJoinResp;
    getTxid(): number;
    setTxid(value: number): ActFreeCashJoinResp;
    getSpin(): number;
    setSpin(value: number): ActFreeCashJoinResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashJoinResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashJoinResp): ActFreeCashJoinResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashJoinResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashJoinResp;
    static deserializeBinaryFromReader(message: ActFreeCashJoinResp, reader: jspb.BinaryReader): ActFreeCashJoinResp;
}

export namespace ActFreeCashJoinResp {
    export type AsObject = {
        state: number,
        targetamt: number,
        accamt: number,
        txid: number,
        spin: number,
    }
}

export class ActFreeCashSpinAmtReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashSpinAmtReq;
    getTxid(): number;
    setTxid(value: number): ActFreeCashSpinAmtReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashSpinAmtReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashSpinAmtReq): ActFreeCashSpinAmtReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashSpinAmtReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashSpinAmtReq;
    static deserializeBinaryFromReader(message: ActFreeCashSpinAmtReq, reader: jspb.BinaryReader): ActFreeCashSpinAmtReq;
}

export namespace ActFreeCashSpinAmtReq {
    export type AsObject = {
        token: string,
        txid: number,
    }
}

export class ActFreeCashSpinAmtResp extends jspb.Message { 
    getSpinamt(): number;
    setSpinamt(value: number): ActFreeCashSpinAmtResp;
    getTargetamt(): number;
    setTargetamt(value: number): ActFreeCashSpinAmtResp;
    getAccamt(): number;
    setAccamt(value: number): ActFreeCashSpinAmtResp;
    getSpin(): number;
    setSpin(value: number): ActFreeCashSpinAmtResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashSpinAmtResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashSpinAmtResp): ActFreeCashSpinAmtResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashSpinAmtResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashSpinAmtResp;
    static deserializeBinaryFromReader(message: ActFreeCashSpinAmtResp, reader: jspb.BinaryReader): ActFreeCashSpinAmtResp;
}

export namespace ActFreeCashSpinAmtResp {
    export type AsObject = {
        spinamt: number,
        targetamt: number,
        accamt: number,
        spin: number,
    }
}

export class ActFreeCashSpinWithdrawCardReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashSpinWithdrawCardReq;
    getTxid(): number;
    setTxid(value: number): ActFreeCashSpinWithdrawCardReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashSpinWithdrawCardReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashSpinWithdrawCardReq): ActFreeCashSpinWithdrawCardReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashSpinWithdrawCardReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashSpinWithdrawCardReq;
    static deserializeBinaryFromReader(message: ActFreeCashSpinWithdrawCardReq, reader: jspb.BinaryReader): ActFreeCashSpinWithdrawCardReq;
}

export namespace ActFreeCashSpinWithdrawCardReq {
    export type AsObject = {
        token: string,
        txid: number,
    }
}

export class ActFreeCashSpinWithdrawCardResp extends jspb.Message { 
    getSpinwithdrawcard(): number;
    setSpinwithdrawcard(value: number): ActFreeCashSpinWithdrawCardResp;
    getSpin(): number;
    setSpin(value: number): ActFreeCashSpinWithdrawCardResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashSpinWithdrawCardResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashSpinWithdrawCardResp): ActFreeCashSpinWithdrawCardResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashSpinWithdrawCardResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashSpinWithdrawCardResp;
    static deserializeBinaryFromReader(message: ActFreeCashSpinWithdrawCardResp, reader: jspb.BinaryReader): ActFreeCashSpinWithdrawCardResp;
}

export namespace ActFreeCashSpinWithdrawCardResp {
    export type AsObject = {
        spinwithdrawcard: number,
        spin: number,
    }
}

export class ActFreeCashWithdrawReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashWithdrawReq;
    getTxid(): number;
    setTxid(value: number): ActFreeCashWithdrawReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashWithdrawReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashWithdrawReq): ActFreeCashWithdrawReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashWithdrawReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashWithdrawReq;
    static deserializeBinaryFromReader(message: ActFreeCashWithdrawReq, reader: jspb.BinaryReader): ActFreeCashWithdrawReq;
}

export namespace ActFreeCashWithdrawReq {
    export type AsObject = {
        token: string,
        txid: number,
    }
}

export class ActFreeCashHistoryReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActFreeCashHistoryReq;
    getPagenum(): number;
    setPagenum(value: number): ActFreeCashHistoryReq;
    getPagesize(): number;
    setPagesize(value: number): ActFreeCashHistoryReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashHistoryReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashHistoryReq): ActFreeCashHistoryReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashHistoryReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashHistoryReq;
    static deserializeBinaryFromReader(message: ActFreeCashHistoryReq, reader: jspb.BinaryReader): ActFreeCashHistoryReq;
}

export namespace ActFreeCashHistoryReq {
    export type AsObject = {
        token: string,
        pagenum: number,
        pagesize: number,
    }
}

export class ActFreeCashHistoryItem extends jspb.Message { 
    getTxid(): number;
    setTxid(value: number): ActFreeCashHistoryItem;
    getTargetamt(): number;
    setTargetamt(value: number): ActFreeCashHistoryItem;
    getState(): number;
    setState(value: number): ActFreeCashHistoryItem;
    getCtime(): number;
    setCtime(value: number): ActFreeCashHistoryItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashHistoryItem.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashHistoryItem): ActFreeCashHistoryItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashHistoryItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashHistoryItem;
    static deserializeBinaryFromReader(message: ActFreeCashHistoryItem, reader: jspb.BinaryReader): ActFreeCashHistoryItem;
}

export namespace ActFreeCashHistoryItem {
    export type AsObject = {
        txid: number,
        targetamt: number,
        state: number,
        ctime: number,
    }
}

export class ActFreeCashHistoryResp extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): ActFreeCashHistoryResp;
    clearItemsList(): void;
    getItemsList(): Array<ActFreeCashHistoryItem>;
    setItemsList(value: Array<ActFreeCashHistoryItem>): ActFreeCashHistoryResp;
    addItems(value?: ActFreeCashHistoryItem, index?: number): ActFreeCashHistoryItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActFreeCashHistoryResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActFreeCashHistoryResp): ActFreeCashHistoryResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActFreeCashHistoryResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActFreeCashHistoryResp;
    static deserializeBinaryFromReader(message: ActFreeCashHistoryResp, reader: jspb.BinaryReader): ActFreeCashHistoryResp;
}

export namespace ActFreeCashHistoryResp {
    export type AsObject = {
        total: number,
        itemsList: Array<ActFreeCashHistoryItem.AsObject>,
    }
}

export class ActLuckCodeIndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActLuckCodeIndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActLuckCodeIndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActLuckCodeIndexReq): ActLuckCodeIndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActLuckCodeIndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActLuckCodeIndexReq;
    static deserializeBinaryFromReader(message: ActLuckCodeIndexReq, reader: jspb.BinaryReader): ActLuckCodeIndexReq;
}

export namespace ActLuckCodeIndexReq {
    export type AsObject = {
        token: string,
    }
}

export class ActLuckCodeIndexResp extends jspb.Message { 
    getState(): number;
    setState(value: number): ActLuckCodeIndexResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActLuckCodeIndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActLuckCodeIndexResp): ActLuckCodeIndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActLuckCodeIndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActLuckCodeIndexResp;
    static deserializeBinaryFromReader(message: ActLuckCodeIndexResp, reader: jspb.BinaryReader): ActLuckCodeIndexResp;
}

export namespace ActLuckCodeIndexResp {
    export type AsObject = {
        state: number,
    }
}

export class ActLuckCodeCollectReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ActLuckCodeCollectReq;
    getLuckcode(): string;
    setLuckcode(value: string): ActLuckCodeCollectReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActLuckCodeCollectReq.AsObject;
    static toObject(includeInstance: boolean, msg: ActLuckCodeCollectReq): ActLuckCodeCollectReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActLuckCodeCollectReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActLuckCodeCollectReq;
    static deserializeBinaryFromReader(message: ActLuckCodeCollectReq, reader: jspb.BinaryReader): ActLuckCodeCollectReq;
}

export namespace ActLuckCodeCollectReq {
    export type AsObject = {
        token: string,
        luckcode: string,
    }
}

export class ActLuckCodeCollectResp extends jspb.Message { 
    getCode(): number;
    setCode(value: number): ActLuckCodeCollectResp;
    getAmt(): number;
    setAmt(value: number): ActLuckCodeCollectResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActLuckCodeCollectResp.AsObject;
    static toObject(includeInstance: boolean, msg: ActLuckCodeCollectResp): ActLuckCodeCollectResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActLuckCodeCollectResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActLuckCodeCollectResp;
    static deserializeBinaryFromReader(message: ActLuckCodeCollectResp, reader: jspb.BinaryReader): ActLuckCodeCollectResp;
}

export namespace ActLuckCodeCollectResp {
    export type AsObject = {
        code: number,
        amt: number,
    }
}

export class VipBenefitListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VipBenefitListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipBenefitListReq.AsObject;
    static toObject(includeInstance: boolean, msg: VipBenefitListReq): VipBenefitListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipBenefitListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipBenefitListReq;
    static deserializeBinaryFromReader(message: VipBenefitListReq, reader: jspb.BinaryReader): VipBenefitListReq;
}

export namespace VipBenefitListReq {
    export type AsObject = {
        token: string,
    }
}

export class VipBenefitListItem extends jspb.Message { 
    getTargetamt(): number;
    setTargetamt(value: number): VipBenefitListItem;
    getBonusrate(): number;
    setBonusrate(value: number): VipBenefitListItem;
    getWithdrawfeereductionrate(): number;
    setWithdrawfeereductionrate(value: number): VipBenefitListItem;
    getViplevel(): number;
    setViplevel(value: number): VipBenefitListItem;
    getDaywithdrawcnt(): number;
    setDaywithdrawcnt(value: number): VipBenefitListItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipBenefitListItem.AsObject;
    static toObject(includeInstance: boolean, msg: VipBenefitListItem): VipBenefitListItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipBenefitListItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipBenefitListItem;
    static deserializeBinaryFromReader(message: VipBenefitListItem, reader: jspb.BinaryReader): VipBenefitListItem;
}

export namespace VipBenefitListItem {
    export type AsObject = {
        targetamt: number,
        bonusrate: number,
        withdrawfeereductionrate: number,
        viplevel: number,
        daywithdrawcnt: number,
    }
}

export class VipBenefitListResp extends jspb.Message { 
    getRechargescore(): number;
    setRechargescore(value: number): VipBenefitListResp;
    clearItemsList(): void;
    getItemsList(): Array<VipBenefitListItem>;
    setItemsList(value: Array<VipBenefitListItem>): VipBenefitListResp;
    addItems(value?: VipBenefitListItem, index?: number): VipBenefitListItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipBenefitListResp.AsObject;
    static toObject(includeInstance: boolean, msg: VipBenefitListResp): VipBenefitListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipBenefitListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipBenefitListResp;
    static deserializeBinaryFromReader(message: VipBenefitListResp, reader: jspb.BinaryReader): VipBenefitListResp;
}

export namespace VipBenefitListResp {
    export type AsObject = {
        rechargescore: number,
        itemsList: Array<VipBenefitListItem.AsObject>,
    }
}

export class VipUpgradePackListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VipUpgradePackListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipUpgradePackListReq.AsObject;
    static toObject(includeInstance: boolean, msg: VipUpgradePackListReq): VipUpgradePackListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipUpgradePackListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipUpgradePackListReq;
    static deserializeBinaryFromReader(message: VipUpgradePackListReq, reader: jspb.BinaryReader): VipUpgradePackListReq;
}

export namespace VipUpgradePackListReq {
    export type AsObject = {
        token: string,
    }
}

export class VipUpgradePackListItem extends jspb.Message { 
    getUpgradepackid(): number;
    setUpgradepackid(value: number): VipUpgradePackListItem;
    getViplevel(): number;
    setViplevel(value: number): VipUpgradePackListItem;
    getBonusmin(): number;
    setBonusmin(value: number): VipUpgradePackListItem;
    getBonusmax(): number;
    setBonusmax(value: number): VipUpgradePackListItem;
    getStatus(): number;
    setStatus(value: number): VipUpgradePackListItem;
    getReceivedbonus(): number;
    setReceivedbonus(value: number): VipUpgradePackListItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipUpgradePackListItem.AsObject;
    static toObject(includeInstance: boolean, msg: VipUpgradePackListItem): VipUpgradePackListItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipUpgradePackListItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipUpgradePackListItem;
    static deserializeBinaryFromReader(message: VipUpgradePackListItem, reader: jspb.BinaryReader): VipUpgradePackListItem;
}

export namespace VipUpgradePackListItem {
    export type AsObject = {
        upgradepackid: number,
        viplevel: number,
        bonusmin: number,
        bonusmax: number,
        status: number,
        receivedbonus: number,
    }
}

export class VipUpgradePackListResp extends jspb.Message { 
    getRechargescore(): number;
    setRechargescore(value: number): VipUpgradePackListResp;
    clearItemsList(): void;
    getItemsList(): Array<VipUpgradePackListItem>;
    setItemsList(value: Array<VipUpgradePackListItem>): VipUpgradePackListResp;
    addItems(value?: VipUpgradePackListItem, index?: number): VipUpgradePackListItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipUpgradePackListResp.AsObject;
    static toObject(includeInstance: boolean, msg: VipUpgradePackListResp): VipUpgradePackListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipUpgradePackListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipUpgradePackListResp;
    static deserializeBinaryFromReader(message: VipUpgradePackListResp, reader: jspb.BinaryReader): VipUpgradePackListResp;
}

export namespace VipUpgradePackListResp {
    export type AsObject = {
        rechargescore: number,
        itemsList: Array<VipUpgradePackListItem.AsObject>,
    }
}

export class VipUpgradePackReceiveReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VipUpgradePackReceiveReq;
    getUpgradepackid(): number;
    setUpgradepackid(value: number): VipUpgradePackReceiveReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipUpgradePackReceiveReq.AsObject;
    static toObject(includeInstance: boolean, msg: VipUpgradePackReceiveReq): VipUpgradePackReceiveReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipUpgradePackReceiveReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipUpgradePackReceiveReq;
    static deserializeBinaryFromReader(message: VipUpgradePackReceiveReq, reader: jspb.BinaryReader): VipUpgradePackReceiveReq;
}

export namespace VipUpgradePackReceiveReq {
    export type AsObject = {
        token: string,
        upgradepackid: number,
    }
}

export class VipUpgradePackReceiveResp extends jspb.Message { 
    getReceivedbonus(): number;
    setReceivedbonus(value: number): VipUpgradePackReceiveResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VipUpgradePackReceiveResp.AsObject;
    static toObject(includeInstance: boolean, msg: VipUpgradePackReceiveResp): VipUpgradePackReceiveResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VipUpgradePackReceiveResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VipUpgradePackReceiveResp;
    static deserializeBinaryFromReader(message: VipUpgradePackReceiveResp, reader: jspb.BinaryReader): VipUpgradePackReceiveResp;
}

export namespace VipUpgradePackReceiveResp {
    export type AsObject = {
        receivedbonus: number,
    }
}

export class GiftPackListReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GiftPackListReq;
    getRefer(): number;
    setRefer(value: number): GiftPackListReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackListReq.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackListReq): GiftPackListReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackListReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackListReq;
    static deserializeBinaryFromReader(message: GiftPackListReq, reader: jspb.BinaryReader): GiftPackListReq;
}

export namespace GiftPackListReq {
    export type AsObject = {
        token: string,
        refer: number,
    }
}

export class GiftPackListResp extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GiftPackItem>;
    setItemsList(value: Array<GiftPackItem>): GiftPackListResp;
    addItems(value?: GiftPackItem, index?: number): GiftPackItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackListResp.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackListResp): GiftPackListResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackListResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackListResp;
    static deserializeBinaryFromReader(message: GiftPackListResp, reader: jspb.BinaryReader): GiftPackListResp;
}

export namespace GiftPackListResp {
    export type AsObject = {
        itemsList: Array<GiftPackItem.AsObject>,
    }
}

export class GiftPackItem extends jspb.Message { 
    getPid(): number;
    setPid(value: number): GiftPackItem;
    getAmt(): number;
    setAmt(value: number): GiftPackItem;
    getPtype(): number;
    setPtype(value: number): GiftPackItem;
    getCashback(): number;
    setCashback(value: number): GiftPackItem;
    getBonus(): number;
    setBonus(value: number): GiftPackItem;
    getDeadline(): number;
    setDeadline(value: number): GiftPackItem;
    getPopup(): number;
    setPopup(value: number): GiftPackItem;
    getOrderindex(): number;
    setOrderindex(value: number): GiftPackItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackItem.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackItem): GiftPackItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackItem;
    static deserializeBinaryFromReader(message: GiftPackItem, reader: jspb.BinaryReader): GiftPackItem;
}

export namespace GiftPackItem {
    export type AsObject = {
        pid: number,
        amt: number,
        ptype: number,
        cashback: number,
        bonus: number,
        deadline: number,
        popup: number,
        orderindex: number,
    }
}

export class GiftPackCheckLuckPackReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GiftPackCheckLuckPackReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackCheckLuckPackReq.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackCheckLuckPackReq): GiftPackCheckLuckPackReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackCheckLuckPackReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackCheckLuckPackReq;
    static deserializeBinaryFromReader(message: GiftPackCheckLuckPackReq, reader: jspb.BinaryReader): GiftPackCheckLuckPackReq;
}

export namespace GiftPackCheckLuckPackReq {
    export type AsObject = {
        token: string,
    }
}

export class GiftPackCheckLuckPackResp extends jspb.Message { 
    getHaspack(): boolean;
    setHaspack(value: boolean): GiftPackCheckLuckPackResp;
    getNextchecktime(): number;
    setNextchecktime(value: number): GiftPackCheckLuckPackResp;
    getNextshowtime(): number;
    setNextshowtime(value: number): GiftPackCheckLuckPackResp;

    hasItem(): boolean;
    clearItem(): void;
    getItem(): GiftPackItem | undefined;
    setItem(value?: GiftPackItem): GiftPackCheckLuckPackResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackCheckLuckPackResp.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackCheckLuckPackResp): GiftPackCheckLuckPackResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackCheckLuckPackResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackCheckLuckPackResp;
    static deserializeBinaryFromReader(message: GiftPackCheckLuckPackResp, reader: jspb.BinaryReader): GiftPackCheckLuckPackResp;
}

export namespace GiftPackCheckLuckPackResp {
    export type AsObject = {
        haspack: boolean,
        nextchecktime: number,
        nextshowtime: number,
        item?: GiftPackItem.AsObject,
    }
}

export class GiftPackUploadLuckPackShowReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): GiftPackUploadLuckPackShowReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GiftPackUploadLuckPackShowReq.AsObject;
    static toObject(includeInstance: boolean, msg: GiftPackUploadLuckPackShowReq): GiftPackUploadLuckPackShowReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GiftPackUploadLuckPackShowReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GiftPackUploadLuckPackShowReq;
    static deserializeBinaryFromReader(message: GiftPackUploadLuckPackShowReq, reader: jspb.BinaryReader): GiftPackUploadLuckPackShowReq;
}

export namespace GiftPackUploadLuckPackShowReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheel2IndexReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LuckWheel2IndexReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheel2IndexReq.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheel2IndexReq): LuckWheel2IndexReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheel2IndexReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheel2IndexReq;
    static deserializeBinaryFromReader(message: LuckWheel2IndexReq, reader: jspb.BinaryReader): LuckWheel2IndexReq;
}

export namespace LuckWheel2IndexReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheel2PrizeItem extends jspb.Message { 
    getPrizeid(): string;
    setPrizeid(value: string): LuckWheel2PrizeItem;
    getPrizename(): string;
    setPrizename(value: string): LuckWheel2PrizeItem;
    getPrizetype(): number;
    setPrizetype(value: number): LuckWheel2PrizeItem;
    getPrizeval(): string;
    setPrizeval(value: string): LuckWheel2PrizeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheel2PrizeItem.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheel2PrizeItem): LuckWheel2PrizeItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheel2PrizeItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheel2PrizeItem;
    static deserializeBinaryFromReader(message: LuckWheel2PrizeItem, reader: jspb.BinaryReader): LuckWheel2PrizeItem;
}

export namespace LuckWheel2PrizeItem {
    export type AsObject = {
        prizeid: string,
        prizename: string,
        prizetype: number,
        prizeval: string,
    }
}

export class LuckWheel2IndexResp extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<LuckWheel2PrizeItem>;
    setItemsList(value: Array<LuckWheel2PrizeItem>): LuckWheel2IndexResp;
    addItems(value?: LuckWheel2PrizeItem, index?: number): LuckWheel2PrizeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheel2IndexResp.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheel2IndexResp): LuckWheel2IndexResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheel2IndexResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheel2IndexResp;
    static deserializeBinaryFromReader(message: LuckWheel2IndexResp, reader: jspb.BinaryReader): LuckWheel2IndexResp;
}

export namespace LuckWheel2IndexResp {
    export type AsObject = {
        itemsList: Array<LuckWheel2PrizeItem.AsObject>,
    }
}

export class LuckWheel2SpinReq extends jspb.Message { 
    getToken(): string;
    setToken(value: string): LuckWheel2SpinReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheel2SpinReq.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheel2SpinReq): LuckWheel2SpinReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheel2SpinReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheel2SpinReq;
    static deserializeBinaryFromReader(message: LuckWheel2SpinReq, reader: jspb.BinaryReader): LuckWheel2SpinReq;
}

export namespace LuckWheel2SpinReq {
    export type AsObject = {
        token: string,
    }
}

export class LuckWheel2SpinResp extends jspb.Message { 
    getPrizeid(): string;
    setPrizeid(value: string): LuckWheel2SpinResp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LuckWheel2SpinResp.AsObject;
    static toObject(includeInstance: boolean, msg: LuckWheel2SpinResp): LuckWheel2SpinResp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LuckWheel2SpinResp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LuckWheel2SpinResp;
    static deserializeBinaryFromReader(message: LuckWheel2SpinResp, reader: jspb.BinaryReader): LuckWheel2SpinResp;
}

export namespace LuckWheel2SpinResp {
    export type AsObject = {
        prizeid: string,
    }
}

export enum UserActionType {
    NONE = 0,
    LOAD = 1,
    LOBBY = 2,
    NEWGUIDE = 3,
    FINISHGUIDE = 4,
    ENTERPRACTISE = 5,
    ENTERGOLD = 6,
    FINISHGAME = 7,
    BRAKEUP = 9,
    BRAKEOPENPAYWEB = 10,
    BRAKEOPENACTIVITY = 11,
    OPENDRAW = 12,
    OPENVIP = 13,
    OPENSHARE = 14,
    NETBRAKE = 15,
}

export enum PayModeEnum {
    PAYMODENONE = 0,
    PAYMODECASHFREE = 1,
    PAYMODEVADERPAY = 2,
    PAYMODEMARSPAY = 3,
    PAYMODEYBPAY = 4,
}


}