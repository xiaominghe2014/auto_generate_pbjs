/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
