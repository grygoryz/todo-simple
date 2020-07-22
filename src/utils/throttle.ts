const throttle = (f: (...args: any) => any, ms: number) => {
    let isThrottled = false,
        savedArgs: any,
        savedThis: any;

    function wrapper(this: any) {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this as any;
            return;
        }

        f.apply(this, arguments as any);

        isThrottled = true;

        setTimeout(() =>  {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
};

export default throttle;

