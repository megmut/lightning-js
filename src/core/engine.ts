/// <reference path="./../reference.d.ts" />

namespace Lightning {

    export class Engine extends EngineHelper {

        protected _dpr:number;
        protected _renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
        protected _world: PIXI.Container;
        protected _hud:HUD = null;
        protected _ticker:PIXI.ticker.Ticker;
        protected _tweens = new TweenManager(this);
        protected _signals:Signals.SignalManager = new Signals.SignalManager(this);
        protected _stateManager:StateManager;
        protected _physicsManager:PhysicsManager
        
        /**
         * @description Engine constructor
         * 
         * @param {number} width
         * @param {number} height
         * @param {string} canvasId
         */
        constructor(width, height, canvasId:string = 'app') {
            super();

            this._dpr = window.devicePixelRatio;

            if(!canvasId) {
                let viewCanvas = document.createElement('canvas');
                viewCanvas.id = 'app';
                document.getElementById('app-container').appendChild(viewCanvas);
            }
            
            this._renderer = PIXI.autoDetectRenderer(width, height, {resolution: this._dpr});
            this._renderer.autoResize = true;

            this._world = new PIXI.Container();
            this._world.scale = new PIXI.Point(1 / window.devicePixelRatio, 1 / window.devicePixelRatio);
            this._world.interactive = true;


            document.getElementById('app-container').appendChild(this._renderer.view);

            // let scale = window.devicePixelRatio;
            this._renderer.resize(width, height);

            // create the physicsManager 
            this._physicsManager = new PhysicsManager(this);

            // create the state StateManager
            this._stateManager = new StateManager(this);
            
            // init the ticker
            this._ticker = PIXI.ticker.shared;
            this._ticker.autoStart = true;
            this._ticker.add(this.update, this);
            this._ticker.minFPS = 30;
        }

        /**
         * @description Main entry for every update function. This is called by the ticker on every request frame update
         * 
         * @param {number} time
         * 
         * @returns {void}
         */ 
        update(time):void {
            this._physicsManager.update();
            this._tweens.update();
            this._stateManager.update(time);
            this._renderer.render(this._world);
        }

        /**
         * @description Start the ticker
         * 
         * @returns {boolean}
         */
        start():boolean {
            this._ticker.start();
            return true;
        }

        /**
         * @description Stop the ticker
         * 
         * @returns {boolean}
         */
        stop():boolean {
            this._ticker.stop();
            return true;
        }
    }
}

/**
 * TODOS
 * Implement some sort of global cache system for any kind of object
 * Implement a storage system based on local storage / global vars if unavilable
 * Implement the services manager for backend calls
 * Implement some sort of socket connectivity manager
 * Write some nice transitions for the state manager
 * Implement an animatins class for extending pixi animations
 * Move enableDrag function to the display object
 * Particle emitter clear pool
 * Particle emitter add to world instead of child of the emitter
 * Super Light Sprite 
 *  Think about how to implement a light sprite for particles so they dont take up so much performance. It sucks on safari!
 * Particle emitter make a pre-create class that lets you store pooled sprited before the state is started
 * Think about making a debug module that's a container in it's own right. It should accept x number of text values
 *  and sort through them accordinly, ensuring nothing is ever overlapped
 * Need to give responsive device pixel ration some serious consideration
 */