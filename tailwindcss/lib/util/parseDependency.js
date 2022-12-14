"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>parseDependency
});
const _isGlob = /*#__PURE__*/ _interopRequireDefault(require("is-glob"));
const _globParent = /*#__PURE__*/ _interopRequireDefault(require("glob-parent"));
const _path = /*#__PURE__*/ _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Based on `glob-base`
// https://github.com/micromatch/glob-base/blob/master/index.js
function parseGlob(pattern) {
    let glob = pattern;
    let base = (0, _globParent.default)(pattern);
    if (base !== ".") {
        glob = pattern.substr(base.length);
        if (glob.charAt(0) === "/") {
            glob = glob.substr(1);
        }
    }
    if (glob.substr(0, 2) === "./") {
        glob = glob.substr(2);
    }
    if (glob.charAt(0) === "/") {
        glob = glob.substr(1);
    }
    return {
        base,
        glob
    };
}
function parseDependency(normalizedFileOrGlob) {
    if (normalizedFileOrGlob.startsWith("!")) {
        return null;
    }
    let message;
    if ((0, _isGlob.default)(normalizedFileOrGlob)) {
        let { base , glob  } = parseGlob(normalizedFileOrGlob);
        message = {
            type: "dir-dependency",
            dir: _path.default.resolve(base),
            glob
        };
    } else {
        message = {
            type: "dependency",
            file: _path.default.resolve(normalizedFileOrGlob)
        };
    }
    // rollup-plugin-postcss does not support dir-dependency messages
    // but directories can be watched in the same way as files
    if (message.type === "dir-dependency" && process.env.ROLLUP_WATCH === "true") {
        message = {
            type: "dependency",
            file: message.dir
        };
    }
    return message;
}
