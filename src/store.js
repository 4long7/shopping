import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import adminModules from './store/admin'
Vue.use(Vuex)
export default new Vuex.Store({
  // strict: true,
  state: {
    isSide: false,
    isSideLeft: false,
    isLoading: false,
    products: [],
    pagination: {},
    filterProduct: [],
    product: {},
    carts: [],
    pageNum: 1
  },
  getters: {
    filterProduct: state => {
      if (state.filterProduct.length) {
        let page = state.pageNum - 1
        return state.filterProduct.slice(page * 8, 8 * state.pageNum)
      } else {
        let page = state.pageNum - 1
        return state.products.slice(page * 8, 8 * state.pageNum)
      }
    },
    pageNum: state => {
      let page = Math.ceil(state.products.length / 8)
      if (state.filterProduct.length) {
        page = Math.ceil(state.filterProduct.length / 8)
      }

      let pageNum = state.pageNum
      let data = {
        current_page: pageNum,
        has_next: pageNum < page,
        has_pre: pageNum > 1,
        total_pages: page
      }
      return data
    }
  },
  mutations: {
    PAGE_NUM (state, data) {
      state.pageNum = data
    },
    IS_LOADING (state, status) {
      state.isLoading = status
    },
    IS_SIDEBAR (state, left) {
      if (left === 'left') {
        state.isSideLeft = !state.isSideLeft
      } else {
        state.isSide = !state.isSide
      }
    },
    GET_PRODUCTS (state, data) {
      state.products = data.products
      if (data.pagination) {
        state.pagination = data.pagination
      }
    },
    GET_PRODUCT (state, data) {
      state.product = data
    },
    FILTER_PRODUCTS (state, data) {
      if (data === 'all') {
        state.filterProduct = state.products
      } else {
        state.filterProduct = state.products.filter(d => {
          return d.category === data
        })
      }
    },
    GET_CART (state, data) {
      state.carts = data
    }
  },
  actions: {
    getProducts ({ commit }, all = 'all') {
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/products`
      all === 'all' ? (api += '/all') : (api += '?page=' + all)
      commit('IS_LOADING', true)
      axios.get(api).then(response => {
        commit('IS_LOADING', false)
        commit('GET_PRODUCTS', response.data)
      })
    },
    getProduct ({ commit }, id) {
      commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${
        process.env.VUE_APP_API
      }/product/${id}`
      axios.get(api).then(response => {
        commit('IS_LOADING', false)
        commit('GET_PRODUCT', response.data.product)
      })
    },
    getCart ({ commit }) {
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/cart`
      axios.get(api).then(response => {
        if (response.data.success) {
          commit('GET_CART', response.data.data)
        }
      })
    }
  },
  modules: {
    adminModules
  }
})
