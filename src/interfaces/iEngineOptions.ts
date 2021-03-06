/// <reference path="./../reference.d.ts" />

namespace Lightning {
    export interface iEngineOptions {
        // misc
        skipHello?:boolean
        // core specifics
        autoStart?:boolean;
        renderer?:string;
        rendererOptions: {
            view?:HTMLCanvasElement;
            transparent?:boolean;
            antialias?:boolean;
            preserveDrawingBuffer?:boolean;
            backgroundColor?:number;
            clearBeforeRender?:boolean;
            resolution?:number;
            forceCanvas?:boolean;
            roundPixels?:boolean;
            forceFXAA?:boolean;
            legacy?:boolean
        },
        divID?:string;
        plugins?: {
            scaleManeger?:boolean;
            device?:boolean;
            storage?:boolean;
            events?:boolean;
            keyboard?:boolean;
            physicsLite?:boolean;
            box2d?:boolean;
            services?:boolean;
            sockets?:boolean;
            states?:boolean;
            tweens?:boolean;
            parallax?:boolean;
            particles?:boolean;
            timer?:boolean;
            webfonts?:boolean;
            debug?:boolean;
            maths?:boolean;
        }
    }
}