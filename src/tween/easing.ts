/// <reference path="./../reference.d.ts" />

namespace Lightning {

    /**
     * t = number from
     * b = number to
     * c = current step
     * d = total duration
     * s? = negative values for Back easings
     * 
     * c and d can be in either ms or frames, as long as they are both the same value of measurement
     * 
     */

    export class Easing {
        public static linear(t:number, b:number, c:number, d:number):number {
            return c*t/d + b;
        };

        public static QuadIn(t:number, b:number, c:number, d:number):number {
            t /= d;
            return c*t*t + b;
        };

        public static QuadOut(t:number, b:number, c:number, d:number):number {
            t /= d;
            return -c * t*(t-2) + b;
        };

        public static QuadInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };

        public static CubicIn(t:number, b:number, c:number, d:number):number {
            t /= d;
            return c*t*t*t + b;
        };

        public static CubicOut(t:number, b:number, c:number, d:number):number {
            t /= d;
            t--;
            return c*(t*t*t + 1) + b;
        };

        public static CubicInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
        };

        public static QuartIn(t:number, b:number, c:number, d:number):number {
            t /= d;
            return c*t*t*t*t + b;
        };

        public static QuartOut(t:number, b:number, c:number, d:number):number {
            t /= d;
            t--;
            return -c * (t*t*t*t - 1) + b;
        };

        public static QuartInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t + b;
            t -= 2;
            return -c/2 * (t*t*t*t - 2) + b;
        };

        public static QuintIn(t:number, b:number, c:number, d:number):number {
            t /= d;
            return c*t*t*t*t*t + b;
        };

        public static QuintOut(t:number, b:number, c:number, d:number):number {
            t /= d;
            t--;
            return c*(t*t*t*t*t + 1) + b;
        };

        public static QuintInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t*t*t + 2) + b;
        };

        public static SineIn(t:number, b:number, c:number, d:number):number {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        };

        public static SineOut(t:number, b:number, c:number, d:number):number {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        };

        public static SineInOut(t:number, b:number, c:number, d:number):number {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        };

        public static ExpoIn(t:number, b:number, c:number, d:number):number {
            return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
        };

        public static ExpoOut(t:number, b:number, c:number, d:number):number {
            return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
        };

        public static ExpoInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
            t--;
            return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
        };
            
        public static CircIn(t:number, b:number, c:number, d:number):number {
            t /= d;
            return -c * (Math.sqrt(1 - t*t) - 1) + b;
        };

        public static CircOut(t:number, b:number, c:number, d:number):number {
            t /= d;
            t--;
            return c * Math.sqrt(1 - t*t) + b;
        };

        public static CircInOut(t:number, b:number, c:number, d:number):number {
            t /= d/2;
            if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            t -= 2;
            return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
        };

        public static BackIn(t:number, b:number, c:number, d:number, s:number):number {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        }

        public static BackOut(t:number, b:number, c:number, d:number, s:number):number {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        }

        public static BackInOut(t:number, b:number, c:number, d:number, s:number):number {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }

        public static ElasticIn(t:number, b:number, c:number, d:number):number {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }

        public static ElasticOut(t:number, b:number, c:number, d:number):number {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        }

        public static ElasticInOut(t:number, b:number, c:number, d:number):number {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }

        public static BounceIn(t:number, b:number, c:number, d:number):number {
		    return c - Easing.BounceOut (d-t, 0, c, d) + b;
        }

        public static BounceOut(t:number, b:number, c:number, d:number):number {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        }

        public static BounceInOut(t:number, b:number, c:number, d:number):number {
            if (t < d/2) return Easing.BounceIn (t*2, 0, c, d) * .5 + b;
            return Easing.BounceOut (t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
}

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */