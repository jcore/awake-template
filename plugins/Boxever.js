import Vue from 'vue'
Vue.mixin({
  methods: {
    push(channel, type, page) {
      console.log('firing Boxever push' + channel + ' ' + type + ' ' + page)
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          const searchEvent = {
            browser_id: window.Boxever.getID(),
            channel: channel,
            type: type,
            language: 'EN',
            currency: 'EUR',
            page: page,
            pos: 'example.com',
            product_name: 'DUB-LHR',
            product_type: 'DUB-LHR|Economy|Flex'
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')
        })
      }
    }
  }
})
