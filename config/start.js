const server = require("../build/outputServer.js")



//监听接口
server.listen(3000, 'localhost', () => {
    console.log('dev server listening on port 3000');
});
