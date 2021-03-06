"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PreloadState = /** @class */ (function (_super) {
    __extends(PreloadState, _super);
    function PreloadState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreloadState.prototype.init = function () {
        console.log(this._t);
        this.create();
    };
    PreloadState.prototype.preload = function () {
        // this.loader.addResource('music1', 'big.mp3');
        // this.loader.load();
    };
    PreloadState.prototype.preloadComplete = function () {
        this.create();
    };
    PreloadState.prototype.create = function () {
        // this.game.audio.play('music1');
        // this.game.scenes.destroy('preload');
        // this.game.scenes.start('menu');
        var _this = this;
        setTimeout(function () {
            _this._t = 3;
            _this.game.scenes.restart('preload');
        }, 3000);
    };
    return PreloadState;
}(Lightning.Scene));
exports.default = PreloadState;
