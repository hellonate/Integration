  const types = {
    code_message: {
        properties: {
            openid: {type: 'keyword'},
            ticket: {type: 'keyword'},
            event_key: {type: 'keyword'},
            activity_url: {type: 'keyword'},
            start_time: {type: 'date'},
            end_time: {type: 'date'}
        }
    },
}

  export default  types;