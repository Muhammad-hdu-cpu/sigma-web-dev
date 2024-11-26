function factorialIterative(n) {
    if (n < 0) return "Error: Factorial for negative numbers doesn't exist.";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorialIterative(5)); // Outputs: 120
