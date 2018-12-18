/**
 * 实现用户的增删查改
 */
import  Sequelize from 'sequelize';
import  config from '../config/env/dev';
const mysql = config.mysql;

var sequelize = new Sequelize(mysql.database,mysql.username,mysql.password,{
    host:mysql.host,
    dialect:'mysql',
    pool:{
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.define('User',{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    username:Sequelize.STRING(50),
    sex:Sequelize.BOOLEAN,
    province:Sequelize.STRING(50),
    city:Sequelize.STRING(50),
    country:Sequelize.STRING(50),
    score:Sequelize.STRING(50),
    phone:Sequelize.STRING(50),
    age:Sequelize.STRING(50),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT
});

 export  async function addUser(user){
     var now = Date.now();
  await  User.create({
        username:user.username,
        sex:user.sex,
        province:user.province,
        city:user.city,
        country:user.country,
        score:user.score,
        phone:user.phone,
        age:user.age,
        createdAt:now,
        updatedAt:now
    });
};
//查询用户信息
export async function seacrhById(id){

        return await User.findAll({
            where:{
                id:id
            }
        });

};

//修改用户信息
export async function updateById(user){

    return await User.update(
        {
            username:user.username
        }, {
            where:{
                id:user.id
            }
        }
    );
};


//删除用户信息
export async function destroyById(id){

    return await User.destroy({
        where:{
            id:id
        }
    });
};
