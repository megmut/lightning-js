/// <reference path="./Interfaces/Property.ts" />
/// <reference path="./Interfaces/Callback.ts" />

/**
 * Frame class. Defines what each frame should consist of in an animation
 */
namespace Tween {
    export class Frame {

        private _frameId:number;
        private _properties:Array<Property>;
        private _relative:boolean;
        private _complex:boolean;

        constructor(frameId:number, relative:boolean) {
            this._frameId = frameId;
            this._properties = new Array();
            this._relative = relative;
        }

        /**
         * Add another property to this frame
         */
        addProperty(property:string, val:number) {
            let p = <Property> {prop: property, val: val};
            this._properties.push(p);
        }

        get frameId(): number {
            return this._frameId;
        }

        set frameId(value: number) {
            this._frameId = value;
        }

        get properties(): Array<Property> {
            return this._properties;
        }

        set properties(value: Array<Property>) {
            this._properties = value;
        }

        get relative(): boolean {
            return this._relative;
        }

        set relative(value: boolean) {
            this._relative = value;
        }

        get complex(): boolean {
            return this._complex;
        }

        set complex(value: boolean) {
            this._complex = value;
        }
    }
}
