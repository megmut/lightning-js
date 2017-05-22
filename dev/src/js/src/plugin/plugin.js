/// <reference path="./../reference.d.ts" />
var Lightning;
(function (Lightning) {
    var Plugin = (function () {
        function Plugin(game, updateLoop, events) {
            if (updateLoop === void 0) { updateLoop = true; }
            if (events === void 0) { events = true; }
            this.game = game;
            this._enableUpdateOnStart = updateLoop;
            this._enableEventsOnStart = events;
            this.enable();
        }
        Plugin.prototype.enable = function () {
            if (this._enableUpdateOnStart) {
                this.enableUpdate();
            }
            if (this._enableEventsOnStart) {
                this.enableEvents();
            }
        };
        Plugin.prototype.update = function (time) {
        };
        Plugin.prototype.enableUpdate = function () {
            this.game.ticker.add(this.update, this);
        };
        Plugin.prototype.removeUpdate = function () {
            this.game.ticker.remove(this.update, this);
        };
        Plugin.prototype.enableEvents = function () {
            this._events = new Lightning.EventEmitter();
        };
        Object.defineProperty(Plugin.prototype, "events", {
            get: function () {
                return this._events;
            },
            enumerable: true,
            configurable: true
        });
        return Plugin;
    }());
    Lightning.Plugin = Plugin;
})(Lightning || (Lightning = {}));