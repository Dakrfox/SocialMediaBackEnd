const axios = require('axios');

function CreateRemoteDataBaseApi (host, port) {
  const remoteDataBaseCall = axios.create({
    baseURL: `${host}:${port}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

  async function request({method, url, data}) {
    const reponse = await remoteDataBaseCall({
      method: method,
      url: url,
      data: data
    });
    return reponse.data.body;
  }

  function list(table) {
    return request({
      method: 'GET',
      url: `/${table}`,
    })
  }

  function get(tabla, id) {
    return request({
      method: 'GET',
      url: `/${tabla}/${id}`,
    })
  }

  function query(tabla, query, join = '') {
    return request({
      method: 'GET',
      url: `/query/${tabla}`,
      data: {
        "query": query,
        "join": join
      }
    })
  }

  function create(table, data) {
    return request({
      method: 'POST',
      url: `/${table}`,
      data
    })
  }

  function update(table, data_id, data) {
    throw new Error('Not implemented');
  }

  async function upsert(tabla, data) {
    return request({
      method: 'PUT',
      url: `upsert/${tabla}`,
      data
    })
  }

  async function remove(tabla, id) {
    return request({
      method: 'DELETE',
      url: `/${tabla}/${id}`
    })
  }

  return {
    list,
    get,
    query,
    create,
    update,
    upsert,
    remove,
  };
}

module.exports = CreateRemoteDataBaseApi;
