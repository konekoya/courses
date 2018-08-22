const EventEmitter = require('events');

class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('After executing');
  }
}

const withLog = new WithLog();
withLog.on('begin', () => console.log('About to execute'));
withLog.on('after', () => console.log('Done with execute'));
withLog.execute(() =>
  setTimeout(() => console.log('*** Executing task ***'), 500),
);
