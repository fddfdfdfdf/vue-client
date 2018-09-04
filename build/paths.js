const path = require('path');
module.exports={
    reqPath:(rootPath,distDirName) => {
        const hotPath = path.resolve(__dirname,rootPath);
        return path.resolve(hotPath, distDirName);
    }
}