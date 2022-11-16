const binarySearch = (array, x) => {
    
    let min = 0
    let max = array.lenght
    let middle;

    while ( min <= max ) {
        middle = ( min + max ) / 2

        if ( array === x ) {
            return middle
        } else if ( array[middle] < x ) {
            min = middle + 1
        } else {
            max = guess
        }
    }
    return -1
}



console.log(binarySearch)