function curriedAdd(total) {
    if(!total) return 0;

    return function curryAdd(num) {
        if(!num) return total;
        total += num;
        return curryAdd;
    }
}

module.exports = { curriedAdd };
