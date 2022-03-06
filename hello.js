const { Worker, isMainThread, parentPort } = require('worker_threads');

// isMainThread helps us know /when we run /either inside the main thread /or a worker thread.

if(isMainThread){
    // new Worker(__filename) registers a new worker with the __filename variable /which, in this case, is hello.js
    const worker = new Worker(__filename);
    worker.once('message', (message) => {
        console.log(message);
    });
    worker.postMessage("Main Thread: Hi");
}else{
    parentPort.once('message', (message) => {
        console.log(message);
        parentPort.postMessage("Worker thread: Hello");
    });
}