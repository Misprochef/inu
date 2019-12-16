import axios from 'axios'

class DogApi {
  constructor() {
    this.apiBase = 'https://dog.ceo/api'
  }

  breeds() {
    return axios
      .get(`${this.apiBase}/breeds/list/all`)
      .then((json) => {
        return json.data.message
      })
      .catch((e) => ({ error: e }))
  }

  // async breeds() {
  //   try {
  //     const json = await axios.get(`${this.apiBase}/breeds/list/all`)
  //     return json.data.message
  //   } catch (e) {
  //     return { error: e }
  //   }
  // }

  dogs(breed) {
    return axios
      .get(`${this.apiBase}/breed/${breed}/images`)
      .then((json) => {
        return json.data.message.map((d) => {
          return {
            url: d, // 画像URL
            like: 0 // 「いいね！」の件数
          }
        })
      })
      .catch((e) => ({ error: e }))
  }

  // async dogs(breed) {
  //   try {
  //     const json = await axios.get(`${this.apiBase}/breed/${breed}/images`)
  //     return json.data.message.map((d) => {
  //       return {
  //         url: d,
  //         like: 0
  //       }
  //     })
  //   } catch (e) {
  //     return { error: e }
  //   }
  // }
}

const dogApi = new DogApi()
export default dogApi
