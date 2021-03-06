const childProcess = require('child_process');

/*
 * Spawn a child process with a callback when the process exits
 */
module.exports = function spawn(task, args, onClose) {
  const child = childProcess.spawn('npm', args, {
    stdio: 'inherit'
  });

  child.on('close', (code) => {
    onClose(code);
  });
};
