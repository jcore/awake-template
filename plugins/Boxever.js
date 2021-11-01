import Vue from 'vue'
Vue.mixin({
  methods: {
    boxeverPush(channel, type, page) {
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
            pos: 'JuliaGavrilova-pos'
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')
        })
      }
    },
    boxeverOrderProduct() {
      console.log('firing Boxever boxeverOrderProduct')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          const searchEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'CONFIRM',
            language: 'EN',
            currency: 'EUR',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            product: [{ item_id: 'FLIGHT_1' }, { item_id: 'FLIGHT_2' }, { item_id: 'BAG_1' }, { item_id: 'SEAT_1' }]
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')

          const checkoutEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'CHECKOUT',
            language: 'EN',
            currency: 'EUR',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            reference_id: 'ABC123',
            status: 'PURCHASED'
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(checkoutEvent, (data) => {}, 'json')
        })
      }
    },
    boxeverAddProduct() {
      console.log('firing Boxever add')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          const searchEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'ADD',
            language: 'EN',
            currency: 'EUR',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            product: {
              type: 'BET',
              item_id: 'EXACT_90',
              name: 'Exact score after 90 minutes',
              orderedAt: '2015-08-23T16:17:16.000Z',
              quantity: 1,
              price: '100.00',
              productId: 'CORRECT_SCORE',
              currencyCode: 'EUR',
              originalPrice: '100.00',
              originalCurrencyCode: 'EUR',
              referenceId: 'BET_001-1'
            }
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')

          const closeSession = {
            type: 'FORCE_CLOSE',
            channel: 'WEB',
            browser_id: window.Boxever.getID(),
            pos: 'JuliaGavrilova-pos',
            _bx_extended_message: '1',
            page: '/home'
          }

          window.Boxever.eventCreate(closeSession, (data) => {}, 'json')
        })
      }
    },
    identifyGuest() {
      console.log('firing Boxever push')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          const searchEvent = {
            browser_id: window.Boxever.getID(),
            pos: 'JuliaGavrilova-pos',
            channel: 'WEB',
            type: 'IDENTITY',
            language: 'EN',
            currency: 'EUR',
            page: '/home',
            email: 'julia.gavrilova@test.com',
            firstname: 'Julia',
            lastname: 'Gavrilova'
          }
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')
        })
      }
    }
  }
})
