import axios from 'axios'
import {timeSort} from '@/lib/utils.js'

export default {
  state: {
    values: []
  },
  getters: {
    count: state => {
      return state.values.length
    },
    status: state => {
      return state.values.length < 1
    },
    find: state => name => {
      return state.values.find(value => value.name == name)
    },
    findByType: state => type => {
      return state.values.filter(value => value.type == type)
    },
    findByTitle: state => title => {
      return state.values.filter(value => value.title.indexOf(title) > -1)
    },
    get: state => index => {
      if (index < state.values.length) {
        return state.values[index]
      }

      return null
    },
    getAll: state => {
      return state.values
    },
    getHomeList: state => {
      let array = []
      let values = state.values
      let len = values.length > 10 ? 9 : values.length - 1

      do {
        let value = values[Math.floor(Math.random() * values.length)]
        if (value.type == 0 || array.find(arr => arr == value)) continue
        array.push(value)
      } while (array.length < len)

      array.sort(timeSort)

      array.unshift(values.find(value => value.type == 0))
      return array
    }
  },
  mutations: {
    add: (state, data) => {
      state.values.push(data)
      state.values.sort(timeSort)
    },
    addAll: (state, arrays) => {
      for (let i = 0; i < arrays.length; i++)
        state.values.push(arrays[i])
      state.values.sort(timeSort)
    }
  },
  actions: {
    init: ({commit}) => {
      axios.get('/static/articles/articles.json').then(res => {
        commit('addAll', res.data)
      })
    }
    ,
    add: ({commit}, data) => {
      commit('add', data)
    },
    addAll: ({commit}, data) => {
      commit('addAll', data)
    }
  }
}
