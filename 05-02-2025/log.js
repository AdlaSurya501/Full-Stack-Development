// Program to log the system uptime in a user-friendly format (days,hours, minutes).    
const os = require('os');
// Function to format uptime
function formatUptime(uptimeInSeconds) {
    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    return `${days} days, ${hours} hours, ${minutes} minutes`;
}
// Get system uptime in seconds
const uptimeInSeconds = os.uptime();
const formattedUptime = formatUptime(uptimeInSeconds);
// Log the formatted uptime
console.log(`System Uptime: ${formattedUptime}`);