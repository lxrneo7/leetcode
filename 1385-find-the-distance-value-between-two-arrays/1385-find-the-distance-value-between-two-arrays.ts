function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let count = 0;

    for (const num of arr1) {
        let found = false;

        for (const num2 of arr2) {
            if (Math.abs(num - num2) <= d) {
                found = true;
                break;
            }
        }

        if (!found) {
            count++;
        }
    }

    return count;
}