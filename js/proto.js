/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.aa = (function() {

    /**
     * Namespace aa.
     * @exports aa
     * @namespace
     */
    var aa = {};

    aa.bb = (function() {

        /**
         * Namespace bb.
         * @memberof aa
         * @namespace
         */
        var bb = {};

        bb.cc = (function() {

            /**
             * Namespace cc.
             * @memberof aa.bb
             * @namespace
             */
            var cc = {};

            cc.RankReq = (function() {

                /**
                 * Properties of a RankReq.
                 * @memberof aa.bb.cc
                 * @interface IRankReq
                 * @property {number} [uid] RankReq uid
                 */

                /**
                 * Constructs a new RankReq.
                 * @memberof aa.bb.cc
                 * @classdesc Represents a RankReq.
                 * @constructor
                 * @param {aa.bb.cc.IRankReq=} [properties] Properties to set
                 */
                function RankReq(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RankReq uid.
                 * @member {number}uid
                 * @memberof aa.bb.cc.RankReq
                 * @instance
                 */
                RankReq.prototype.uid = 0;

                /**
                 * Creates a new RankReq instance using the specified properties.
                 * @function create
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {aa.bb.cc.IRankReq=} [properties] Properties to set
                 * @returns {aa.bb.cc.RankReq} RankReq instance
                 */
                RankReq.create = function create(properties) {
                    return new RankReq(properties);
                };

                /**
                 * Encodes the specified RankReq message. Does not implicitly {@link aa.bb.cc.RankReq.verify|verify} messages.
                 * @function encode
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {aa.bb.cc.IRankReq} message RankReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RankReq.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
                    return writer;
                };

                /**
                 * Encodes the specified RankReq message, length delimited. Does not implicitly {@link aa.bb.cc.RankReq.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {aa.bb.cc.IRankReq} message RankReq message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RankReq.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RankReq message from the specified reader or buffer.
                 * @function decode
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {aa.bb.cc.RankReq} RankReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RankReq.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aa.bb.cc.RankReq();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.uid = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RankReq message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {aa.bb.cc.RankReq} RankReq
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RankReq.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RankReq message.
                 * @function verify
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RankReq.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        if (!$util.isInteger(message.uid))
                            return "uid: integer expected";
                    return null;
                };

                /**
                 * Creates a RankReq message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {aa.bb.cc.RankReq} RankReq
                 */
                RankReq.fromObject = function fromObject(object) {
                    if (object instanceof $root.aa.bb.cc.RankReq)
                        return object;
                    var message = new $root.aa.bb.cc.RankReq();
                    if (object.uid != null)
                        message.uid = object.uid | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a RankReq message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof aa.bb.cc.RankReq
                 * @static
                 * @param {aa.bb.cc.RankReq} message RankReq
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RankReq.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.uid = 0;
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        object.uid = message.uid;
                    return object;
                };

                /**
                 * Converts this RankReq to JSON.
                 * @function toJSON
                 * @memberof aa.bb.cc.RankReq
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RankReq.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RankReq;
            })();

            cc.UserTicket = (function() {

                /**
                 * Properties of a UserTicket.
                 * @memberof aa.bb.cc
                 * @interface IUserTicket
                 * @property {number} [order] UserTicket order
                 * @property {string} [nickname] UserTicket nickname
                 * @property {number} [amount] UserTicket amount
                 */

                /**
                 * Constructs a new UserTicket.
                 * @memberof aa.bb.cc
                 * @classdesc Represents a UserTicket.
                 * @constructor
                 * @param {aa.bb.cc.IUserTicket=} [properties] Properties to set
                 */
                function UserTicket(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserTicket order.
                 * @member {number}order
                 * @memberof aa.bb.cc.UserTicket
                 * @instance
                 */
                UserTicket.prototype.order = 0;

                /**
                 * UserTicket nickname.
                 * @member {string}nickname
                 * @memberof aa.bb.cc.UserTicket
                 * @instance
                 */
                UserTicket.prototype.nickname = "";

                /**
                 * UserTicket amount.
                 * @member {number}amount
                 * @memberof aa.bb.cc.UserTicket
                 * @instance
                 */
                UserTicket.prototype.amount = 0;

                /**
                 * Creates a new UserTicket instance using the specified properties.
                 * @function create
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {aa.bb.cc.IUserTicket=} [properties] Properties to set
                 * @returns {aa.bb.cc.UserTicket} UserTicket instance
                 */
                UserTicket.create = function create(properties) {
                    return new UserTicket(properties);
                };

                /**
                 * Encodes the specified UserTicket message. Does not implicitly {@link aa.bb.cc.UserTicket.verify|verify} messages.
                 * @function encode
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {aa.bb.cc.IUserTicket} message UserTicket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserTicket.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.order != null && message.hasOwnProperty("order"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.order);
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.amount);
                    return writer;
                };

                /**
                 * Encodes the specified UserTicket message, length delimited. Does not implicitly {@link aa.bb.cc.UserTicket.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {aa.bb.cc.IUserTicket} message UserTicket message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserTicket.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UserTicket message from the specified reader or buffer.
                 * @function decode
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {aa.bb.cc.UserTicket} UserTicket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserTicket.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aa.bb.cc.UserTicket();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.order = reader.int32();
                            break;
                        case 2:
                            message.nickname = reader.string();
                            break;
                        case 3:
                            message.amount = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UserTicket message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {aa.bb.cc.UserTicket} UserTicket
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserTicket.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UserTicket message.
                 * @function verify
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserTicket.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.order != null && message.hasOwnProperty("order"))
                        if (!$util.isInteger(message.order))
                            return "order: integer expected";
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        if (!$util.isString(message.nickname))
                            return "nickname: string expected";
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        if (typeof message.amount !== "number")
                            return "amount: number expected";
                    return null;
                };

                /**
                 * Creates a UserTicket message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {aa.bb.cc.UserTicket} UserTicket
                 */
                UserTicket.fromObject = function fromObject(object) {
                    if (object instanceof $root.aa.bb.cc.UserTicket)
                        return object;
                    var message = new $root.aa.bb.cc.UserTicket();
                    if (object.order != null)
                        message.order = object.order | 0;
                    if (object.nickname != null)
                        message.nickname = String(object.nickname);
                    if (object.amount != null)
                        message.amount = Number(object.amount);
                    return message;
                };

                /**
                 * Creates a plain object from a UserTicket message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof aa.bb.cc.UserTicket
                 * @static
                 * @param {aa.bb.cc.UserTicket} message UserTicket
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserTicket.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.order = 0;
                        object.nickname = "";
                        object.amount = 0;
                    }
                    if (message.order != null && message.hasOwnProperty("order"))
                        object.order = message.order;
                    if (message.nickname != null && message.hasOwnProperty("nickname"))
                        object.nickname = message.nickname;
                    if (message.amount != null && message.hasOwnProperty("amount"))
                        object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
                    return object;
                };

                /**
                 * Converts this UserTicket to JSON.
                 * @function toJSON
                 * @memberof aa.bb.cc.UserTicket
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserTicket.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UserTicket;
            })();

            cc.RankResp = (function() {

                /**
                 * Properties of a RankResp.
                 * @memberof aa.bb.cc
                 * @interface IRankResp
                 * @property {aa.bb.cc.IUserTicket} [userTicket] RankResp userTicket
                 * @property {Array.<aa.bb.cc.IUserTicket>} [userTicketList] RankResp userTicketList
                 */

                /**
                 * Constructs a new RankResp.
                 * @memberof aa.bb.cc
                 * @classdesc Represents a RankResp.
                 * @constructor
                 * @param {aa.bb.cc.IRankResp=} [properties] Properties to set
                 */
                function RankResp(properties) {
                    this.userTicketList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * RankResp userTicket.
                 * @member {(aa.bb.cc.IUserTicket|null|undefined)}userTicket
                 * @memberof aa.bb.cc.RankResp
                 * @instance
                 */
                RankResp.prototype.userTicket = null;

                /**
                 * RankResp userTicketList.
                 * @member {Array.<aa.bb.cc.IUserTicket>}userTicketList
                 * @memberof aa.bb.cc.RankResp
                 * @instance
                 */
                RankResp.prototype.userTicketList = $util.emptyArray;

                /**
                 * Creates a new RankResp instance using the specified properties.
                 * @function create
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {aa.bb.cc.IRankResp=} [properties] Properties to set
                 * @returns {aa.bb.cc.RankResp} RankResp instance
                 */
                RankResp.create = function create(properties) {
                    return new RankResp(properties);
                };

                /**
                 * Encodes the specified RankResp message. Does not implicitly {@link aa.bb.cc.RankResp.verify|verify} messages.
                 * @function encode
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {aa.bb.cc.IRankResp} message RankResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RankResp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userTicket != null && message.hasOwnProperty("userTicket"))
                        $root.aa.bb.cc.UserTicket.encode(message.userTicket, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.userTicketList != null && message.userTicketList.length)
                        for (var i = 0; i < message.userTicketList.length; ++i)
                            $root.aa.bb.cc.UserTicket.encode(message.userTicketList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified RankResp message, length delimited. Does not implicitly {@link aa.bb.cc.RankResp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {aa.bb.cc.IRankResp} message RankResp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RankResp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a RankResp message from the specified reader or buffer.
                 * @function decode
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {aa.bb.cc.RankResp} RankResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RankResp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.aa.bb.cc.RankResp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userTicket = $root.aa.bb.cc.UserTicket.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.userTicketList && message.userTicketList.length))
                                message.userTicketList = [];
                            message.userTicketList.push($root.aa.bb.cc.UserTicket.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a RankResp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {aa.bb.cc.RankResp} RankResp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RankResp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a RankResp message.
                 * @function verify
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RankResp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.userTicket != null && message.hasOwnProperty("userTicket")) {
                        var error = $root.aa.bb.cc.UserTicket.verify(message.userTicket);
                        if (error)
                            return "userTicket." + error;
                    }
                    if (message.userTicketList != null && message.hasOwnProperty("userTicketList")) {
                        if (!Array.isArray(message.userTicketList))
                            return "userTicketList: array expected";
                        for (var i = 0; i < message.userTicketList.length; ++i) {
                            error = $root.aa.bb.cc.UserTicket.verify(message.userTicketList[i]);
                            if (error)
                                return "userTicketList." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a RankResp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {aa.bb.cc.RankResp} RankResp
                 */
                RankResp.fromObject = function fromObject(object) {
                    if (object instanceof $root.aa.bb.cc.RankResp)
                        return object;
                    var message = new $root.aa.bb.cc.RankResp();
                    if (object.userTicket != null) {
                        if (typeof object.userTicket !== "object")
                            throw TypeError(".aa.bb.cc.RankResp.userTicket: object expected");
                        message.userTicket = $root.aa.bb.cc.UserTicket.fromObject(object.userTicket);
                    }
                    if (object.userTicketList) {
                        if (!Array.isArray(object.userTicketList))
                            throw TypeError(".aa.bb.cc.RankResp.userTicketList: array expected");
                        message.userTicketList = [];
                        for (var i = 0; i < object.userTicketList.length; ++i) {
                            if (typeof object.userTicketList[i] !== "object")
                                throw TypeError(".aa.bb.cc.RankResp.userTicketList: object expected");
                            message.userTicketList[i] = $root.aa.bb.cc.UserTicket.fromObject(object.userTicketList[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a RankResp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof aa.bb.cc.RankResp
                 * @static
                 * @param {aa.bb.cc.RankResp} message RankResp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RankResp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.userTicketList = [];
                    if (options.defaults)
                        object.userTicket = null;
                    if (message.userTicket != null && message.hasOwnProperty("userTicket"))
                        object.userTicket = $root.aa.bb.cc.UserTicket.toObject(message.userTicket, options);
                    if (message.userTicketList && message.userTicketList.length) {
                        object.userTicketList = [];
                        for (var j = 0; j < message.userTicketList.length; ++j)
                            object.userTicketList[j] = $root.aa.bb.cc.UserTicket.toObject(message.userTicketList[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this RankResp to JSON.
                 * @function toJSON
                 * @memberof aa.bb.cc.RankResp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RankResp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RankResp;
            })();

            return cc;
        })();

        return bb;
    })();

    return aa;
})();

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.group = (function() {

        /**
         * Namespace group.
         * @memberof com
         * @namespace
         */
        var group = {};

        group.app = (function() {

            /**
             * Namespace app.
             * @memberof com.group
             * @namespace
             */
            var app = {};

            app.Version = (function() {

                /**
                 * Properties of a Version.
                 * @memberof com.group.app
                 * @interface IVersion
                 * @property {string} [version] Version version
                 */

                /**
                 * Constructs a new Version.
                 * @memberof com.group.app
                 * @classdesc Represents a Version.
                 * @constructor
                 * @param {com.group.app.IVersion=} [properties] Properties to set
                 */
                function Version(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Version version.
                 * @member {string}version
                 * @memberof com.group.app.Version
                 * @instance
                 */
                Version.prototype.version = "";

                /**
                 * Creates a new Version instance using the specified properties.
                 * @function create
                 * @memberof com.group.app.Version
                 * @static
                 * @param {com.group.app.IVersion=} [properties] Properties to set
                 * @returns {com.group.app.Version} Version instance
                 */
                Version.create = function create(properties) {
                    return new Version(properties);
                };

                /**
                 * Encodes the specified Version message. Does not implicitly {@link com.group.app.Version.verify|verify} messages.
                 * @function encode
                 * @memberof com.group.app.Version
                 * @static
                 * @param {com.group.app.IVersion} message Version message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Version.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && message.hasOwnProperty("version"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                    return writer;
                };

                /**
                 * Encodes the specified Version message, length delimited. Does not implicitly {@link com.group.app.Version.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.group.app.Version
                 * @static
                 * @param {com.group.app.IVersion} message Version message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Version.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Version message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.group.app.Version
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.group.app.Version} Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Version.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.group.app.Version();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.version = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Version message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.group.app.Version
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.group.app.Version} Version
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Version.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Version message.
                 * @function verify
                 * @memberof com.group.app.Version
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Version.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    return null;
                };

                /**
                 * Creates a Version message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.group.app.Version
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.group.app.Version} Version
                 */
                Version.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.group.app.Version)
                        return object;
                    var message = new $root.com.group.app.Version();
                    if (object.version != null)
                        message.version = String(object.version);
                    return message;
                };

                /**
                 * Creates a plain object from a Version message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.group.app.Version
                 * @static
                 * @param {com.group.app.Version} message Version
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Version.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.version = "";
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    return object;
                };

                /**
                 * Converts this Version to JSON.
                 * @function toJSON
                 * @memberof com.group.app.Version
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Version.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Version;
            })();

            app.User = (function() {

                /**
                 * Properties of a User.
                 * @memberof com.group.app
                 * @interface IUser
                 * @property {string} [uid] User uid
                 */

                /**
                 * Constructs a new User.
                 * @memberof com.group.app
                 * @classdesc Represents a User.
                 * @constructor
                 * @param {com.group.app.IUser=} [properties] Properties to set
                 */
                function User(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * User uid.
                 * @member {string}uid
                 * @memberof com.group.app.User
                 * @instance
                 */
                User.prototype.uid = "";

                /**
                 * Creates a new User instance using the specified properties.
                 * @function create
                 * @memberof com.group.app.User
                 * @static
                 * @param {com.group.app.IUser=} [properties] Properties to set
                 * @returns {com.group.app.User} User instance
                 */
                User.create = function create(properties) {
                    return new User(properties);
                };

                /**
                 * Encodes the specified User message. Does not implicitly {@link com.group.app.User.verify|verify} messages.
                 * @function encode
                 * @memberof com.group.app.User
                 * @static
                 * @param {com.group.app.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                    return writer;
                };

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link com.group.app.User.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof com.group.app.User
                 * @static
                 * @param {com.group.app.IUser} message User message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                User.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.group.app.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.group.app.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.group.app.User();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.uid = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof com.group.app.User
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {com.group.app.User} User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                User.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a User message.
                 * @function verify
                 * @memberof com.group.app.User
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                User.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        if (!$util.isString(message.uid))
                            return "uid: string expected";
                    return null;
                };

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.group.app.User
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.group.app.User} User
                 */
                User.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.group.app.User)
                        return object;
                    var message = new $root.com.group.app.User();
                    if (object.uid != null)
                        message.uid = String(object.uid);
                    return message;
                };

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.group.app.User
                 * @static
                 * @param {com.group.app.User} message User
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                User.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.uid = "";
                    if (message.uid != null && message.hasOwnProperty("uid"))
                        object.uid = message.uid;
                    return object;
                };

                /**
                 * Converts this User to JSON.
                 * @function toJSON
                 * @memberof com.group.app.User
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                User.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return User;
            })();

            return app;
        })();

        return group;
    })();

    return com;
})();

module.exports = $root;
