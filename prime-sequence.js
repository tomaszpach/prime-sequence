(() => {
    console.clear();

    const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
    const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
    const C = [2, 9, 2, 5, 7, 10];

    // Slow, brute force
    function isPrime(n) {
        if (n < 2 || n % 1) return false;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    function createOccurrenceIndex(arr) {
        const index = {};

        for (let i = 0, n = arr.length; i < n; i++) {
            const key = arr[i];
            if (index.hasOwnProperty(key)) {
                index[key]++;
            } else {
                index[key] = 1;
            }
        }

        return index;
    }

    function filterIndexByValue(index, filter) {
        const filtered = {};

        for (let key in index) {
            if (filter.call(null, index[key])) {
                filtered[key] = index[key];
            }
        }

        return filtered;
    }

    function sequence(a, b) {
        let index = createOccurrenceIndex(b);
        index = filterIndexByValue(index, isPrime);

        return a.filter(n => !index.hasOwnProperty(n));
    }

    function isArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }

    console.log('it is:', sequence(A, B));
    console.log('should be:', C);
    console.log('is the same?', isArraysEqual(sequence(A, B), C))

})();