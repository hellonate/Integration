import es from 'elasticsearch';


class EsUtil{

    constructor(){
        this.client = new es.Client({
            host:'192.168.248.148:9200'
            //log:'trace'
        });
    }

    /**
     * 通过Id获得es中的数据
     * @param ctx
     * @param next
     * @param openId
     * @returns {Promise.<*>}
     */
    async searchByOpenId (index,type,openId){
    return (await this.client.search({
        index:index,
        type:type,
        body:{
            query:{
                match:{
                    openId:openId
                }
            }
        }
    })).hits.hits;
}

    /**
     * 条件搜索
     * @param index
     * @param type
     * @param maps
     * @returns {Promise.<*>}
     */



     async searchByParams(index,type,body){
    return  (await this.client.search({
        index: index,
        type:type,
        body
    })).hits.hits;
}




    /**
     * 模糊查询
     * @param queryString
     * @returns {Promise.<*>}
     */
     async searchByQueryString(queryString){
    return  (await this.client.search({
        index: 'es_search',
        body:{
            query:{
                query_string:{
                    query:queryString
                }
            }
        }
    })).hits.hits;
}

    async ajax_searchByParams(index,type,body){
    return  (await this.client.search({
        index: index,
        type:type,
        body
    })).hits.hits;
}

}

export  default  EsUtil;

