const os = require('os');

// Function to get CPU usage
function getCPUUsage() {
  const cpus = os.cpus();

  let totalIdle = 0, totalTick = 0;

  cpus.forEach(cpu => {
    for (type in cpu.times) {
      totalTick += cpu.times[type];
    }
    totalIdle += cpu.times.idle;
  });

  return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
}

let startMeasure = getCPUUsage();

setInterval(() => {
  const endMeasure = getCPUUsage();

  const idleDiff = endMeasure.idle - startMeasure.idle;
  const totalDiff = endMeasure.total - startMeasure.total;

  const cpuPercent = 100 - Math.round(100 * idleDiff / totalDiff);

  const totalMem = os.totalmem() / (1024 * 1024); // in MB
  const freeMem = os.freemem() / (1024 * 1024);   // in MB
  const usedMem = totalMem - freeMem;

  console.log(`�� CPU Usage: ${cpuPercent}%`);
  console.log(`�� Memory Usage: ${usedMem.toFixed(2)} MB / ${totalMem.toFixed(2)} MB`);
  console.log('---');

  startMeasure = endMeasure; // update for next interval
}, 1000);

