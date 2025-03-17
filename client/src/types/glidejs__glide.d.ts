declare module '@glidejs/glide' {
  interface GlideOptions {
    type?: string;
    startAt?: number;
    perView?: number;
    focusAt?: number | string;
    gap?: number;
    autoplay?: number | boolean;
    hoverpause?: boolean;
    keyboard?: boolean;
    bound?: boolean;
    swipeThreshold?: number | boolean;
    dragThreshold?: number | boolean;
    perTouch?: number | boolean;
    touchRatio?: number;
    touchAngle?: number;
    animationDuration?: number;
    rewind?: boolean;
    rewindDuration?: number;
    animationTimingFunc?: string;
    direction?: string;
    peek?: number | object;
    breakpoints?: object;
    classes?: object;
    throttle?: number;
  }

  export default class Glide {
    constructor(selector: string | HTMLElement, options?: GlideOptions);
    mount(): this;
    update(props?: object): this;
    destroy(): void;
    go(pattern: string): this;
    pause(): this;
    play(force?: number): this;
    disable(): this;
    enable(): this;
    on(event: string, callback: (event: any) => void): this;
    isType(name: string): boolean;
    index: number;
  }
}