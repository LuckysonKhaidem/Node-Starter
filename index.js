const app = require('./app.js')
const cluster = require('cluster')
const os = require('os')
const appConfig = require("./config/applicationConfig")
const port = appConfig.port || 8000

const numberOfCpus = os.cpus().length

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for(let i = 0; i < numberOfCpus; i++) {
        cluster.fork()
    }
    cluster.on('exit', function(worker, code, signal) {
        console.log(`worker ${worker.process.pid} died with code ${code} and signal ${signal}`)
    })
}
else {
    app.listen(port, function(){
        console.log(`Worker ${process.pid} listening on ${port}`)
    })
}