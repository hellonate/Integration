export default async function (ctx,next) {
    if (1>2){
        console.log(`you have a access `);
        await next();
    }else{
        console.log(`access denied，错误提交到错误页面`) ;
    }
}