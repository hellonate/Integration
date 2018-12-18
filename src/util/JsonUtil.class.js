//https://blog.csdn.net/c__dreamer/article/details/82183130#Map%20%E8%BD%AC%E4%B8%BA%20JSON
class JsonUtil{
    static map2Arr(map){
        const arr = [...map];
        return arr;
    }


    static  map2Obj(map){
        let obj ={};
        for (let [k,v] of map) {
            obj[k] = v;
        }
        return obj;
    }

    static obj2Map(obj){
        let map = new Map();
        for(let key in obj) {
            map.set(key,obj[key]);
        }
        return map;
    }

    static  map2Json(map) {
         return  JSON.stringify(this.map2Obj(map));
      }


    static json2Map(json) {
       return this.obj2Map(JSON.parse(json));
    }

    static arr2Map(arr) {
       return new Map(arr.map( (value,key) => [key,value]));
    }
}

module.exports = JsonUtil;


