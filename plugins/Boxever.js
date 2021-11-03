import Vue from 'vue'
Vue.mixin({
  methods: {
    boxeverPush(channel, type, page) {
      console.log('firing Boxever push' + channel + ' ' + type + ' ' + page)
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          let viewEvent = {
            browser_id: window.Boxever.getID(),
            channel: channel,
            type: type,
            language: 'EN',
            currency: 'USD',
            page: page,
            pos: 'JuliaGavrilova-pos'
          }
          viewEvent = window.Boxever.addUTMParams(viewEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(viewEvent, (data) => {}, 'json')
        })
      }
    },
    boxeverOrderProduct() {
      console.log('firing Boxever boxeverOrderProduct')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          let addEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'ADD',
            language: 'EN',
            currency: 'USD',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            product: {
              type: 'TRAINING',
              item_id: 'TRAINING_90',
              name: 'Boxever training',
              orderedAt: '2015-08-23T16:17:16.000Z',
              quantity: 1,
              price: 100,
              productId: 'CORRECT_SCORE',
              currencyCode: 'USD',
              originalPrice: 100,
              originalCurrencyCode: 'EUR',
              reference_id: 'ABC123'
            }
          }
          addEvent = window.Boxever.addUTMParams(addEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(addEvent, (data) => {}, 'json')

          let searchEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'CONFIRM',
            language: 'EN',
            currency: 'USD',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            product: [{ item_id: 'TRAINING_90' }]
          }
          searchEvent = window.Boxever.addUTMParams(searchEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')

          let checkoutEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'CHECKOUT',
            language: 'EN',
            currency: 'USD',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            reference_id: 'ABC123',
            status: 'PURCHASED'
          }
          checkoutEvent = window.Boxever.addUTMParams(checkoutEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(checkoutEvent, (data) => {}, 'json')
        })
      }
    },
    boxeverAddProduct(price) {
      console.log('firing Boxever add')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          let addEvent = {
            browser_id: window.Boxever.getID(),
            channel: 'WEB',
            type: 'ADD',
            language: 'EN',
            currency: 'USD',
            page: '/product',
            pos: 'JuliaGavrilova-pos',
            product: {
              type: 'BET',
              item_id: 'TRAINING_90',
              name: 'Boxever training',
              orderedAt: '2015-08-23T16:17:16.000Z',
              quantity: 1,
              price: price,
              productId: 'CORRECT_SCORE',
              currencyCode: 'USD',
              originalPrice: price,
              originalCurrencyCode: 'EUR',
              referenceId: 'BET_001-1'
            }
          }
          addEvent = window.Boxever.addUTMParams(addEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(addEvent, (data) => {}, 'json')
        })
      }
    },
    identifyGuest() {
      console.log('firing Boxever push')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          let searchEvent = {
            browser_id: window.Boxever.getID(),
            pos: 'JuliaGavrilova-pos',
            channel: 'WEB',
            type: 'IDENTITY',
            language: 'EN',
            currency: 'EUR',
            page: '/home',
            email: 'julia.gavrilova.xc@test.com',
            firstname: 'Julia',
            lastname: 'Gavrilova'
          }
          searchEvent = window.Boxever.addUTMParams(searchEvent)
          // Invoke event create
          // (<event msg>, <callback function>, <format>)
          window.Boxever.eventCreate(searchEvent, (data) => {}, 'json')
        })
      }
    },
    abandonSession() {
      console.log('firing Boxever push')
      if (window._boxever && window.Boxever) {
        window._boxeverq.push(() => {
          let closeSession = {
            type: 'FORCE_CLOSE',
            channel: 'WEB',
            browser_id: window.Boxever.getID(),
            pos: 'JuliaGavrilova-pos',
            _bx_extended_message: '1',
            page: '/home'
          }
          closeSession = window.Boxever.addUTMParams(closeSession)
          window.Boxever.eventCreate(closeSession, (data) => {}, 'json')
        })
      }
    }
  }
})
