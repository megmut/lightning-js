/// <reference path="./../../reference.d.ts" />

namespace Lightning {

    export class Timer {

        private game:Engine;
        private _events:EventEmitter = new EventEmitter();
        private _currentTime:number = 0;
        private _lastTick:number = 0;
        private _autoDestroy:boolean;
        private _isLoop:boolean;
        private _interval:number;
        private _active:boolean = false;

        constructor(game:Engine, interval:number, autoStart:boolean = true, loop:boolean = true, autoDestroy:boolean = false) {
            this.game = game;
            this._interval = interval;
            this._isLoop = loop;
            this._autoDestroy = autoDestroy;
            this._events.create('tick');
            this._events.create('start');
            this._events.create('stop');
            this._events.create('reset');
            this._events.create('destroy');
            if(autoStart) {
                this._active = true;
            }
            this.game.ticker.add(this.update, this);
        }

        public update(time) {
            if(this._active) {
                this._currentTime += this.game.ticker.elapsedMS;
                if(this._currentTime >= this._lastTick + this._interval) {
                    this._lastTick = this._currentTime;
                    this._events.emit('tick', time);
                    if(this._isLoop === false) {
                        this.stop();
                    }
                }
            }
        }

        public add(fn:Function, ctx:Object = null) {
            this._events.subscribe('tick', fn, ctx);
        }

        public start() {
            this._active = true;
        }

        public stop() {
            this._active = false;
            if(this._autoDestroy) {
                this.destroy();
            }
        }

        public reset() {
            this._currentTime = 0;
            this._lastTick = 0;
        }

        public destroy() {
            
        }

        public remove() {

        }
    }
}