 const config = {
    mysql:{
        database: 'test', // 使用哪个数据库
        username: 'root', // 用户名
        password: 'root', // 口令
        host: 'localhost', // 主机名
        port: 3306 // 端口号，MySQL默认3306
    },
    redis:{
        port:'6379',
        host:'192.168.248.148',
        password:'123456'
    },
    elastic:{
        host:'192.168.248.148:9200'
    },
    kafka:{
        host:'192.168.248.148:2181',
        topic:'topic1',
        offset:0,
        partition:0
    }
};


 export default config;