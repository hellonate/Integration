
//处理以static开头的请求
const path = require('path');
const mime = require('mime');
var fs = require('mz/fs');

function staticFiles(url,dir){
    return async (ctx,next)=>{
        //静态资源文件的请求路径，例如:/static/css/bootstrap.css
        let rPath = ctx.request.path;
        //判断是否以指定的url(/static/)开头
        if(rPath.startsWith(url)){
            //拼接成完整的、静态资源存放的位置
            let fp = path.join(dir,rPath.substring(url.length));
            if (await  fs.exists(fp)) {
                ctx.response.type = mime.getType(rPath);
                ctx.response.body =await fs.readFile(fp);
            }else{
                ctx.response.status = 404;
            }
        }else{
            await next();
        }
    }
}


module.exports = staticFiles;