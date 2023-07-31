// Define your custom benchmark function here
function customBenchmark() {
    // Your benchmark code goes here
    // For example, you can run some heavy computation or loops
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    return result;
}

// Function to run the benchmark and display the result
function runBenchmark() {
    document.getElementById('result').innerHTML = 'Counting to 1 billion...';
    const startTime = performance.now(); // Start time
    const result = customBenchmark(); // Run the benchmark
    const endTime = performance.now(); // End time

    const executionTime = endTime - startTime;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Benchmark Result: ${result} | Execution Time: ${executionTime} ms`;
}

// Attach the runBenchmark function to the button click event
document.getElementById('runButton').addEventListener('click', runBenchmark);


// Define your custom benchmark function here
function sqrtBenchmark() {
    // Your benchmark code goes here
    // For example, you can run some heavy computation or loops
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

// Function to run the benchmark and display the result
function runBenchmark2() {
    document.getElementById('result').innerHTML = 'Taking sqrt of numbers ...';
    const startTime = performance.now(); // Start time
    const result = sqrtBenchmark(); // Run the benchmark
    const endTime = performance.now(); // End time

    const executionTime = endTime - startTime;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Benchmark Result: ${result} | Execution Time: ${executionTime} ms`;
}

// Attach the runBenchmark function to the button click event
document.getElementById('sqrtButton').addEventListener('click', runBenchmark2);





// Define your custom benchmark function here
function factBenchmark() {
    // Your benchmark code goes here
    // For example, you can run some heavy computation or loops
    let result = 1;
    for (let i = 2; i <= 1000; i++) {
        result *= i;
    }
    return result;
}

// Function to run the benchmark and display the result
function runBenchmark3() {
    document.getElementById('result').innerHTML = 'Doing a factorial ...';
    const startTime = performance.now(); // Start time
    const result = factBenchmark(); // Run the benchmark
    const endTime = performance.now(); // End time

    const executionTime = endTime - startTime;
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Benchmark Result: ${result} | Execution Time: ${executionTime} ms`;
}

// Attach the runBenchmark function to the button click event
document.getElementById('factButton').addEventListener('click', runBenchmark3);