import axios from 'axios'
export default {
  state: {
    coupons: [],
    promptCoupon: '',
    orders: []
  },
  getters: {
    productOrder (state) {
      let data = []
      if (!state.orders.orders) {
        return
      }
      state.orders.orders.forEach(e => {
        data.push(Object.values(e.products))
      })

      return data
    }
  },
  mutations: {
    GET_COUPONS (state, data) {
      state.coupons = data
    },
    GET_ORDER (state, data) {
      state.orders = data
    },
    PROMPT_COUPON (state, data) {
      state.promptCoupon = data
    }
  },
  actions: {
    getOrder ({ commit }, page = 1) {
      commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/orders?page=${page}`
      axios.get(api).then(response => {
        commit('IS_LOADING', false)
        commit('GET_ORDER', response.data)
      })
    },
    getCoupons ({ commit }) {
      commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/admin/coupons`
      axios.get(api).then(response => {
        commit('GET_COUPONS', response.data.coupons)
        commit('IS_LOADING', false)
      })
    },
    updateProduct ({ commit, dispatch, state }, { method, item, fun, status }) {
      commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/admin/product${method === 'post' ? '' : '/' + item.id}`
      axios[method](api, { data: item }).then(response => {
        status.isDisplay = false
        if (method !== 'delete') {
          fun(response.data.message)
        }
        dispatch('getProducts', 1)
      })
    },
    updateCoupon ({ commit, dispatch }, { method, item }) {
      commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/admin/coupon${method === 'post' ? '' : '/' + item.id}`
      axios[method](api, { data: item }).then(response => {
        if (response.data.success) {
          dispatch('getCoupons')
          commit('PROMPT_COUPON', response.data.message)
        } else {
        }
      })
    }
  }
}
