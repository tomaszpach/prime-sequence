(() => {
    console.clear();

    const A = [2, 3, 9, 2, 5, 1, 3, 7, 10];
    const B = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
    const C = [2, 9, 2, 5, 7, 10];

    // Check if arrays are the same
    function areArraysEqual(array1, array2) {
        if (array1.length !== array2.length)
            return false;
        for (let i = array1.length; i--;) {
            if (array1[i] !== array2[i])
                return false;
        }

        return true;
    }

    // Slow, brute force checking if number is prime
    function isPrime(number) {
        if (number < 2 || number % 1) return false;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }

    function createOccurrenceIndex(array) {
        const index = {};

        for (let i = 0, n = array.length; i < n; i++) {
            const numberFromArray = array[i];
            if (index.hasOwnProperty(numberFromArray)) {
                index[numberFromArray]++;
            } else {
                index[numberFromArray] = 1;
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

    function sequence(array1, array2) {
        let index = createOccurrenceIndex(array2);
        index = filterIndexByValue(index, isPrime);

        return array1.filter(number => !index.hasOwnProperty(number));
    }

    const sequenceArray = sequence(A, B);

    console.log('it is:', sequenceArray);
    console.log('should be:', C);
    console.log('is the same?', areArraysEqual(sequenceArray, C))

})();