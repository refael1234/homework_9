function customIndexOf(str, searchValue) {
    // Check if both parameters are provided
    if (typeof str !== 'string' || typeof searchValue !== 'string') {
        throw new Error('Both parameters must be strings');
    }

    for (let i = 0; i < str.length; i++) {
      
        if (str.substring(i, i + searchValue.length) === searchValue) {
            return i
        }
    }

    return -1; // if the search value is not found
}

try {
    console.log(customIndexOf("Hello, world!", "orld"))
    console.log(customIndexOf("Hello, world!", "goodbye"))
    console.log(customIndexOf(123, "world"))
} catch (error) {
    console.error(error.message);
}
