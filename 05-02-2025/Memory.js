function updateMemoryInfo() {
    if (performance.memory) {
        const usedJSHeap = performance.memory.usedJSHeapSize; // In bytes
        const totalJSHeap = performance.memory.totalJSHeapSize; // In bytes

        // Calculate used and free memory
        const freeMemory = totalJSHeap - usedJSHeap;
        const freeMemoryPercentage = (freeMemory / totalJSHeap) * 100;

        // Display memory information
        // document.getElementById('memory-usage').textContent = `Used Memory: ${(usedJSHeap / (1024 * 1024)).toFixed(2)} MB`;
        // document.getElementById('free-memory').textContent = `Free Memory: ${freeMemoryPercentage.toFixed(2)}%`;
        console.log(`Used Memory: ${(usedJSHeap/(1024*1024)).toFixed(2)} MB`);
        console.log(`Free Memory: ${freeMemoryPercentage.toFixed(2)}%`);
    } 
    // else {
    //     document.getElementById('memory-usage').textContent = "Memory API is not supported in this browser.";
    //     document.getElementById('free-memory').textContent = "";
    // }
}

// Update memory info every 5 seconds
setInterval(updateMemoryInfo, 5000);

// Initial call to display memory info immediately
updateMemoryInfo();