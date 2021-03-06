﻿// **********************************************************************
// This file was generated by a TARS parser!
// TARS version 1.1.0-83.
// **********************************************************************

"use strict;"

var assert     = require('assert');
var TarsStream = require('@tars/stream');
var _TARS_MODULE_A_ = require('./RoomBaseTars.js');
var _TARS_MODULE_B_ = require('./RoomClientTars.js');


var sunlive = sunlive || {};
module.exports.sunlive = sunlive;

sunlive.CdnType = {
    CDN_TYPE_MIN : 0,
    CDN_TX : 1,
    CDN_AL : 2,
    CDN_WS : 3,
    CDN_TYPE_MAX : 4,
    CDN_TYPE_ALL : 100
};
sunlive.CdnType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.CdnType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.StreamProtocol = {
    RTMP_PROTOCOL : 1,
    FLV_PROTOCOL : 2,
    HLS_PROTOCOL : 3
};
sunlive.StreamProtocol._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.StreamProtocol._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.MediaType = {
    MEDIA_TYPE_VIDEO : 1,
    MEDIA_TYPE_AUDIO : 2,
    MEDIA_TYPE_ALL : 100
};
sunlive.MediaType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.MediaType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.UrlType = {
    URL_NORMAL : 1,
    URL_SHARED_DESKTOP : 2,
    URL_SHARED_VIDEO : 3,
    URL_TYPE_ALL : 100
};
sunlive.UrlType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.UrlType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.RoomStatus = {
    READY : 1,
    LIVE : 2,
    PAUSE : 3,
    END : 4
};
sunlive.RoomStatus._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.RoomStatus._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.RoleType = {
    RT_BEGIN : 0,
    RT_TEACHER : 1,
    RT_STUDENT : 2,
    RT_ADMIN : 3,
    RT_END : 4
};
sunlive.RoleType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.RoleType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.ClientType = {
    UnKnown : 0,
    AndroidApp : 1,
    IosApp : 2,
    Web : 3,
    WeChatApplet : 4,
    H5 : 5,
    Elive : 6
};
sunlive.ClientType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.ClientType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.AppType = {
    WEB_PUSH : 1,
    WEB_PULL : 2,
    WX_MINI_PROGRAM_PUSH : 3,
    WX_MINI_PROGRAM_PULL : 4,
    APP_PUSH : 5,
    APP_PULL : 6
};
sunlive.AppType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.AppType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.AuthType = {
    AuthMin : 0,
    AuthPushInvCode : 1,
    AuthPullInvCode : 2,
    AuthTokenLiveId : 5,
    AuthApiTokenInvCode : 6,
    AuthMax : 1000
};
sunlive.AuthType._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.AuthType._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }
sunlive.PlayerStatus = {
    playing : 0,
    pausePlay : 1
};
sunlive.PlayerStatus._write = function(os, tag, val) { return os.writeInt32(tag, val); }
sunlive.PlayerStatus._read  = function(is, tag, def) { return is.readInt32(tag, true, def); }

sunlive.PushUrlInfo = function() {
    this.sUrl = "";
    this.eCdnType = _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN;
    this.sCdnName = "";
    this.eUrlType = _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL;
    this._classname = "sunlive.PushUrlInfo";
};
sunlive.PushUrlInfo._classname = "sunlive.PushUrlInfo";

sunlive.PushUrlInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.PushUrlInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.PushUrlInfo._readFrom = function (is) {
    var tmp = new sunlive.PushUrlInfo();
    tmp.sUrl = is.readString(1, true, "");
    tmp.eCdnType = is.readInt32(2, true, _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN);
    tmp.sCdnName = is.readString(3, false, "");
    tmp.eUrlType = is.readInt32(4, false, _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL);
    return tmp;
};
sunlive.PushUrlInfo.prototype._writeTo = function (os) {
    os.writeString(1, this.sUrl);
    os.writeInt32(2, this.eCdnType);
    os.writeString(3, this.sCdnName);
    os.writeInt32(4, this.eUrlType);
};
sunlive.PushUrlInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.PushUrlInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.PushUrlInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.sUrl = this.sUrl;
    tmp.eCdnType = this.eCdnType;
    tmp.sCdnName = this.sCdnName;
    tmp.eUrlType = this.eUrlType;
    
    return tmp;
}
sunlive.PushUrlInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("sUrl") || (this.sUrl = json.sUrl);
    !json.hasOwnProperty("eCdnType") || (this.eCdnType = json.eCdnType);
    !json.hasOwnProperty("sCdnName") || (this.sCdnName = json.sCdnName);
    !json.hasOwnProperty("eUrlType") || (this.eUrlType = json.eUrlType);
}
sunlive.PushUrlInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.PushUrlInfo.new = function () {
    return new sunlive.PushUrlInfo();
}
sunlive.PushUrlInfo.create = function (is) {
    return sunlive.PushUrlInfo._readFrom(is);
}
sunlive.PlayUrlInfo = function() {
    this.sUrl = "";
    this.eStreamProtocol = _TARS_MODULE_A_.sunlive.StreamProtocol.RTMP_PROTOCOL;
    this.iBitrate = 0;
    this.eCdnType = _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN;
    this.sCdnName = "";
    this.eUrlType = _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL;
    this._classname = "sunlive.PlayUrlInfo";
};
sunlive.PlayUrlInfo._classname = "sunlive.PlayUrlInfo";

sunlive.PlayUrlInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.PlayUrlInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.PlayUrlInfo._readFrom = function (is) {
    var tmp = new sunlive.PlayUrlInfo();
    tmp.sUrl = is.readString(1, true, "");
    tmp.eStreamProtocol = is.readInt32(2, true, _TARS_MODULE_A_.sunlive.StreamProtocol.RTMP_PROTOCOL);
    tmp.iBitrate = is.readUInt32(3, true, 0);
    tmp.eCdnType = is.readInt32(4, true, _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN);
    tmp.sCdnName = is.readString(5, false, "");
    tmp.eUrlType = is.readInt32(6, false, _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL);
    return tmp;
};
sunlive.PlayUrlInfo.prototype._writeTo = function (os) {
    os.writeString(1, this.sUrl);
    os.writeInt32(2, this.eStreamProtocol);
    os.writeUInt32(3, this.iBitrate);
    os.writeInt32(4, this.eCdnType);
    os.writeString(5, this.sCdnName);
    os.writeInt32(6, this.eUrlType);
};
sunlive.PlayUrlInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.PlayUrlInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.PlayUrlInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.sUrl = this.sUrl;
    tmp.eStreamProtocol = this.eStreamProtocol;
    tmp.iBitrate = this.iBitrate;
    tmp.eCdnType = this.eCdnType;
    tmp.sCdnName = this.sCdnName;
    tmp.eUrlType = this.eUrlType;
    
    return tmp;
}
sunlive.PlayUrlInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("sUrl") || (this.sUrl = json.sUrl);
    !json.hasOwnProperty("eStreamProtocol") || (this.eStreamProtocol = json.eStreamProtocol);
    !json.hasOwnProperty("iBitrate") || (this.iBitrate = json.iBitrate);
    !json.hasOwnProperty("eCdnType") || (this.eCdnType = json.eCdnType);
    !json.hasOwnProperty("sCdnName") || (this.sCdnName = json.sCdnName);
    !json.hasOwnProperty("eUrlType") || (this.eUrlType = json.eUrlType);
}
sunlive.PlayUrlInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.PlayUrlInfo.new = function () {
    return new sunlive.PlayUrlInfo();
}
sunlive.PlayUrlInfo.create = function (is) {
    return sunlive.PlayUrlInfo._readFrom(is);
}
sunlive.SequenceInfo = function() {
    this.iStart = 0;
    this.iDuration = 0;
    this.lSequence = 0;
    this._classname = "sunlive.SequenceInfo";
};
sunlive.SequenceInfo._classname = "sunlive.SequenceInfo";

sunlive.SequenceInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.SequenceInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.SequenceInfo._readFrom = function (is) {
    var tmp = new sunlive.SequenceInfo();
    tmp.iStart = is.readDouble(1, true, 0);
    tmp.iDuration = is.readDouble(2, true, 0);
    tmp.lSequence = is.readInt64(3, true, 0);
    return tmp;
};
sunlive.SequenceInfo.prototype._writeTo = function (os) {
    os.writeDouble(1, this.iStart);
    os.writeDouble(2, this.iDuration);
    os.writeInt64(3, this.lSequence);
};
sunlive.SequenceInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.SequenceInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.SequenceInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.iStart = this.iStart;
    tmp.iDuration = this.iDuration;
    tmp.lSequence = this.lSequence;
    
    return tmp;
}
sunlive.SequenceInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("iStart") || (this.iStart = json.iStart);
    !json.hasOwnProperty("iDuration") || (this.iDuration = json.iDuration);
    !json.hasOwnProperty("lSequence") || (this.lSequence = json.lSequence);
}
sunlive.SequenceInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.SequenceInfo.new = function () {
    return new sunlive.SequenceInfo();
}
sunlive.SequenceInfo.create = function (is) {
    return sunlive.SequenceInfo._readFrom(is);
}
sunlive.SharedPlaybackUrlInfo = function() {
    this.sUrl = "";
    this.eCdnType = _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN;
    this.sCdnName = "";
    this.iBitrate = 0;
    this.lSequence = 0;
    this.sFormat = "";
    this.iDuration = 0;
    this.sFileName = "";
    this.eUrlType = _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL;
    this.iStartTime = 0;
    this.lFileSize = 0;
    this.eMediaType = _TARS_MODULE_A_.sunlive.MediaType.MEDIA_TYPE_VIDEO;
    this.sHlsUrl = "";
    this._classname = "sunlive.SharedPlaybackUrlInfo";
};
sunlive.SharedPlaybackUrlInfo._classname = "sunlive.SharedPlaybackUrlInfo";

sunlive.SharedPlaybackUrlInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.SharedPlaybackUrlInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.SharedPlaybackUrlInfo._readFrom = function (is) {
    var tmp = new sunlive.SharedPlaybackUrlInfo();
    tmp.sUrl = is.readString(1, false, "");
    tmp.eCdnType = is.readInt32(2, false, _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN);
    tmp.sCdnName = is.readString(3, false, "");
    tmp.iBitrate = is.readUInt32(4, false, 0);
    tmp.lSequence = is.readInt64(5, false, 0);
    tmp.sFormat = is.readString(6, false, "");
    tmp.iDuration = is.readDouble(7, false, 0);
    tmp.sFileName = is.readString(8, false, "");
    tmp.eUrlType = is.readInt32(9, false, _TARS_MODULE_A_.sunlive.UrlType.URL_NORMAL);
    tmp.iStartTime = is.readDouble(10, false, 0);
    tmp.lFileSize = is.readInt64(11, false, 0);
    tmp.eMediaType = is.readInt32(12, false, _TARS_MODULE_A_.sunlive.MediaType.MEDIA_TYPE_VIDEO);
    tmp.sHlsUrl = is.readString(13, false, "");
    return tmp;
};
sunlive.SharedPlaybackUrlInfo.prototype._writeTo = function (os) {
    os.writeString(1, this.sUrl);
    os.writeInt32(2, this.eCdnType);
    os.writeString(3, this.sCdnName);
    os.writeUInt32(4, this.iBitrate);
    os.writeInt64(5, this.lSequence);
    os.writeString(6, this.sFormat);
    os.writeDouble(7, this.iDuration);
    os.writeString(8, this.sFileName);
    os.writeInt32(9, this.eUrlType);
    os.writeDouble(10, this.iStartTime);
    os.writeInt64(11, this.lFileSize);
    os.writeInt32(12, this.eMediaType);
    os.writeString(13, this.sHlsUrl);
};
sunlive.SharedPlaybackUrlInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.SharedPlaybackUrlInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.SharedPlaybackUrlInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.sUrl = this.sUrl;
    tmp.eCdnType = this.eCdnType;
    tmp.sCdnName = this.sCdnName;
    tmp.iBitrate = this.iBitrate;
    tmp.lSequence = this.lSequence;
    tmp.sFormat = this.sFormat;
    tmp.iDuration = this.iDuration;
    tmp.sFileName = this.sFileName;
    tmp.eUrlType = this.eUrlType;
    tmp.iStartTime = this.iStartTime;
    tmp.lFileSize = this.lFileSize;
    tmp.eMediaType = this.eMediaType;
    tmp.sHlsUrl = this.sHlsUrl;
    
    return tmp;
}
sunlive.SharedPlaybackUrlInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("sUrl") || (this.sUrl = json.sUrl);
    !json.hasOwnProperty("eCdnType") || (this.eCdnType = json.eCdnType);
    !json.hasOwnProperty("sCdnName") || (this.sCdnName = json.sCdnName);
    !json.hasOwnProperty("iBitrate") || (this.iBitrate = json.iBitrate);
    !json.hasOwnProperty("lSequence") || (this.lSequence = json.lSequence);
    !json.hasOwnProperty("sFormat") || (this.sFormat = json.sFormat);
    !json.hasOwnProperty("iDuration") || (this.iDuration = json.iDuration);
    !json.hasOwnProperty("sFileName") || (this.sFileName = json.sFileName);
    !json.hasOwnProperty("eUrlType") || (this.eUrlType = json.eUrlType);
    !json.hasOwnProperty("iStartTime") || (this.iStartTime = json.iStartTime);
    !json.hasOwnProperty("lFileSize") || (this.lFileSize = json.lFileSize);
    !json.hasOwnProperty("eMediaType") || (this.eMediaType = json.eMediaType);
    !json.hasOwnProperty("sHlsUrl") || (this.sHlsUrl = json.sHlsUrl);
}
sunlive.SharedPlaybackUrlInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.SharedPlaybackUrlInfo.new = function () {
    return new sunlive.SharedPlaybackUrlInfo();
}
sunlive.SharedPlaybackUrlInfo.create = function (is) {
    return sunlive.SharedPlaybackUrlInfo._readFrom(is);
}
sunlive.PlaybackUrlInfo = function() {
    this.sUrl = "";
    this.eCdnType = _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN;
    this.iCdnName = "";
    this.iBitrate = 0;
    this.lSequence = 0;
    this.sFormat = "";
    this.iDuration = 0;
    this.bIsConcat = true;
    this.sFileName = "";
    this.sequenceInfos = new TarsStream.List(_TARS_MODULE_A_.sunlive.SequenceInfo);
    this.sharedPlaybackUrlInfos = new TarsStream.List(_TARS_MODULE_A_.sunlive.SharedPlaybackUrlInfo);
    this.lFileSize = 0;
    this.eMediaType = _TARS_MODULE_A_.sunlive.MediaType.MEDIA_TYPE_VIDEO;
    this.dTotalDuration = 0;
    this.sHlsUrl = "";
    this._classname = "sunlive.PlaybackUrlInfo";
};
sunlive.PlaybackUrlInfo._classname = "sunlive.PlaybackUrlInfo";

sunlive.PlaybackUrlInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.PlaybackUrlInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.PlaybackUrlInfo._readFrom = function (is) {
    var tmp = new sunlive.PlaybackUrlInfo();
    tmp.sUrl = is.readString(1, false, "");
    tmp.eCdnType = is.readInt32(2, false, _TARS_MODULE_A_.sunlive.CdnType.CDN_TYPE_MIN);
    tmp.iCdnName = is.readString(3, false, "");
    tmp.iBitrate = is.readUInt32(4, false, 0);
    tmp.lSequence = is.readInt64(5, false, 0);
    tmp.sFormat = is.readString(6, false, "");
    tmp.iDuration = is.readDouble(7, false, 0);
    tmp.bIsConcat = is.readBoolean(8, false, true);
    tmp.sFileName = is.readString(9, false, "");
    tmp.sequenceInfos = is.readList(10, false, TarsStream.List(_TARS_MODULE_A_.sunlive.SequenceInfo));
    tmp.sharedPlaybackUrlInfos = is.readList(11, false, TarsStream.List(_TARS_MODULE_A_.sunlive.SharedPlaybackUrlInfo));
    tmp.lFileSize = is.readInt64(12, false, 0);
    tmp.eMediaType = is.readInt32(13, false, _TARS_MODULE_A_.sunlive.MediaType.MEDIA_TYPE_VIDEO);
    tmp.dTotalDuration = is.readDouble(14, false, 0);
    tmp.sHlsUrl = is.readString(15, false, "");
    return tmp;
};
sunlive.PlaybackUrlInfo.prototype._writeTo = function (os) {
    os.writeString(1, this.sUrl);
    os.writeInt32(2, this.eCdnType);
    os.writeString(3, this.iCdnName);
    os.writeUInt32(4, this.iBitrate);
    os.writeInt64(5, this.lSequence);
    os.writeString(6, this.sFormat);
    os.writeDouble(7, this.iDuration);
    os.writeBoolean(8, this.bIsConcat);
    os.writeString(9, this.sFileName);
    os.writeList(10, this.sequenceInfos);
    os.writeList(11, this.sharedPlaybackUrlInfos);
    os.writeInt64(12, this.lFileSize);
    os.writeInt32(13, this.eMediaType);
    os.writeDouble(14, this.dTotalDuration);
    os.writeString(15, this.sHlsUrl);
};
sunlive.PlaybackUrlInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.PlaybackUrlInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.PlaybackUrlInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.sUrl = this.sUrl;
    tmp.eCdnType = this.eCdnType;
    tmp.iCdnName = this.iCdnName;
    tmp.iBitrate = this.iBitrate;
    tmp.lSequence = this.lSequence;
    tmp.sFormat = this.sFormat;
    tmp.iDuration = this.iDuration;
    tmp.bIsConcat = this.bIsConcat;
    tmp.sFileName = this.sFileName;
    tmp.sequenceInfos = this.sequenceInfos.toObject();
    tmp.sharedPlaybackUrlInfos = this.sharedPlaybackUrlInfos.toObject();
    tmp.lFileSize = this.lFileSize;
    tmp.eMediaType = this.eMediaType;
    tmp.dTotalDuration = this.dTotalDuration;
    tmp.sHlsUrl = this.sHlsUrl;
    
    return tmp;
}
sunlive.PlaybackUrlInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("sUrl") || (this.sUrl = json.sUrl);
    !json.hasOwnProperty("eCdnType") || (this.eCdnType = json.eCdnType);
    !json.hasOwnProperty("iCdnName") || (this.iCdnName = json.iCdnName);
    !json.hasOwnProperty("iBitrate") || (this.iBitrate = json.iBitrate);
    !json.hasOwnProperty("lSequence") || (this.lSequence = json.lSequence);
    !json.hasOwnProperty("sFormat") || (this.sFormat = json.sFormat);
    !json.hasOwnProperty("iDuration") || (this.iDuration = json.iDuration);
    !json.hasOwnProperty("bIsConcat") || (this.bIsConcat = json.bIsConcat);
    !json.hasOwnProperty("sFileName") || (this.sFileName = json.sFileName);
    !json.hasOwnProperty("sequenceInfos") || (this.sequenceInfos.readFromObject(json.sequenceInfos));
    !json.hasOwnProperty("sharedPlaybackUrlInfos") || (this.sharedPlaybackUrlInfos.readFromObject(json.sharedPlaybackUrlInfos));
    !json.hasOwnProperty("lFileSize") || (this.lFileSize = json.lFileSize);
    !json.hasOwnProperty("eMediaType") || (this.eMediaType = json.eMediaType);
    !json.hasOwnProperty("dTotalDuration") || (this.dTotalDuration = json.dTotalDuration);
    !json.hasOwnProperty("sHlsUrl") || (this.sHlsUrl = json.sHlsUrl);
}
sunlive.PlaybackUrlInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.PlaybackUrlInfo.new = function () {
    return new sunlive.PlaybackUrlInfo();
}
sunlive.PlaybackUrlInfo.create = function (is) {
    return sunlive.PlaybackUrlInfo._readFrom(is);
}
sunlive.UserInfo = function() {
    this.iUserId = 0;
    this.sUserName = "";
    this.sIcon = "";
    this.iSex = 0;
    this.iRoleType = 0;
    this.lLoginTime = 0;
    this.eStatus = _TARS_MODULE_A_.sunlive.PlayerStatus.playing;
    this._classname = "sunlive.UserInfo";
};
sunlive.UserInfo._classname = "sunlive.UserInfo";

sunlive.UserInfo._write = function (os, tag, value) { os.writeStruct(tag, value); }
sunlive.UserInfo._read  = function (is, tag, def) { return is.readStruct(tag, true, def); }
sunlive.UserInfo._readFrom = function (is) {
    var tmp = new sunlive.UserInfo();
    tmp.iUserId = is.readInt32(1, false, 0);
    tmp.sUserName = is.readString(2, false, "");
    tmp.sIcon = is.readString(3, false, "");
    tmp.iSex = is.readInt32(4, false, 0);
    tmp.iRoleType = is.readInt32(5, false, 0);
    tmp.lLoginTime = is.readInt64(6, false, 0);
    tmp.eStatus = is.readInt32(7, false, _TARS_MODULE_A_.sunlive.PlayerStatus.playing);
    return tmp;
};
sunlive.UserInfo.prototype._writeTo = function (os) {
    os.writeInt32(1, this.iUserId);
    os.writeString(2, this.sUserName);
    os.writeString(3, this.sIcon);
    os.writeInt32(4, this.iSex);
    os.writeInt32(5, this.iRoleType);
    os.writeInt64(6, this.lLoginTime);
    os.writeInt32(7, this.eStatus);
};
sunlive.UserInfo.prototype._equal = function (anItem) {
    assert(false, 'this structure not define key operation');
}
sunlive.UserInfo.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = 'STRUCT' + Math.random();
    }
    return this._proto_struct_name_;
}
sunlive.UserInfo.prototype.toObject = function() { 
    var tmp = {};

    tmp.iUserId = this.iUserId;
    tmp.sUserName = this.sUserName;
    tmp.sIcon = this.sIcon;
    tmp.iSex = this.iSex;
    tmp.iRoleType = this.iRoleType;
    tmp.lLoginTime = this.lLoginTime;
    tmp.eStatus = this.eStatus;
    
    return tmp;
}
sunlive.UserInfo.prototype.readFromObject = function(json) { 
    !json.hasOwnProperty("iUserId") || (this.iUserId = json.iUserId);
    !json.hasOwnProperty("sUserName") || (this.sUserName = json.sUserName);
    !json.hasOwnProperty("sIcon") || (this.sIcon = json.sIcon);
    !json.hasOwnProperty("iSex") || (this.iSex = json.iSex);
    !json.hasOwnProperty("iRoleType") || (this.iRoleType = json.iRoleType);
    !json.hasOwnProperty("lLoginTime") || (this.lLoginTime = json.lLoginTime);
    !json.hasOwnProperty("eStatus") || (this.eStatus = json.eStatus);
}
sunlive.UserInfo.prototype.toBinBuffer = function () {
    var os = new TarsStream.OutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
}
sunlive.UserInfo.new = function () {
    return new sunlive.UserInfo();
}
sunlive.UserInfo.create = function (is) {
    return sunlive.UserInfo._readFrom(is);
}


