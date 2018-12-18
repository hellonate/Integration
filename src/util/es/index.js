import { merge, clone } from 'lodash';
import elasticsearch from 'elasticsearch';
import config from '../../config/env/dev';
// import * as types from '../../model/types';

/**
 * Elasticsearch Client
 * @class Elastic
 */
export default class Elastic {
  /* eslint-disable no-underscore-dangle */
  constructor(opts) {
    this.index = opts.index;
    this.alias = opts.alias;
    this.client = new elasticsearch.Client(clone(config.elastic));
    this._searchIndex = this.alias || this.index;
  }
  /**
   * create index
   * @param {any} params
   * @memberOf Elastic
   */
  async checkIndices(params) {
    try {
      const exists = await this.client.indices.exists({ index: this.index });
      if (!exists) {
        // settings default
        const settings =( params && params.settings )|| { settings: { number_of_replicas: 1, number_of_shards: 10 }};
        // create index
        await this.client.indices.create({ index: this.index, body: settings });
        // put mapping
        // await this.client.indices.putMapping({ index: this.index, type: params.type, body: types[params.type] });
        // put alias
        if (this.alias) {await this.client.indices.putAlias({ index: this.index, name: this.alias });}
        console.log('create indices;','index='+this.index);
      }
      return true;
    } catch (err) {
      throw err;
    }
  }
  /**
   * save (create or update)
   * @param {any} params
   * @returns res
   * @memberOf Elastic
   */
  async save({type, id, body}) {
    try {
      // 文档是否存在
      const exists = await this.client.exists({ index: this.index, type, id });
      if (exists) {
        // 获取合并
        // const history = await this.client.get({ index: this._searchIndex, type, id });
        // const data = merge(history._source, params);
        return await this.update({ index: this.index, type, id, body });
      }
      // 保存
      return await this.client.index({ index: this.index, type, id, refresh: 'wait_for', body });
    } catch (err) {
      throw err;
    }
  }

  /**
   * update
   * @param {any} params
   * @return res
   * @memberOf Elastic
   */
  async update(params) {
    try {
      return await this.client.update({ index: this.index, type: params.type, id: params.id, refresh: 'wait_for', body: { doc: params.body }});
    } catch (err) {
      throw err;
    }
  }
  /**
   * search
   * @param {any} params
   * @returns data
   * @memberOf Elastic
   */
  async search(params) {
    try {
      return await this.client.search(merge({ index: this._searchIndex }, params));
    } catch (err) {
      if (err.message === 'Not Found') {return {};}
      throw err;
    }
  }
  /**
   * get by id
   * @param {any} params
   * returns data
   * @memberOf Elastic
   */
  async get(params) {
    try {
      return await this.client.get(merge({ index: this._searchIndex}, params));
    } catch (err) {
      if (err.message === 'Not Found') {return {};}
      throw err;
    }
  }
  /**
   * scroll
   * @param {any} params
   * @returns
   * @memberOf Elastic
   */
  async scroll(params) {
    try {
      return await this.client.scroll(params);
    } catch (err) {
      throw (err);
    }
  }
    /**
   * delete
   * @param {any} params
   * @returns
   * @memberOf Elastic
   */
  async delete(params) {
    try {
      if(params.id){
        return await this.client.delete(merge({index:this.index}, params));
      } else if(params.body && params.body.query){
        return await this.client.deleteByQuery(merge({index:this.index}, params));
      } else {
        throw new Error('wrong del params!');
      }
    } catch(err) {
      throw (err);
    }
  }
    /**
   * count
   * @param {any} params
   * @returns
   * @memberOf Elastic
   */
  async count(params) {
    try {
      return await this.client.count(merge({index:this.index}, params));
    } catch (err) {
      throw (err);
    }
  }
}

