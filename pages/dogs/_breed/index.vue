<template>
  <section class="container">
    <div class="columns is-multiline">
      <div v-for="(item, i) in dog_list" v-bind:key="i" class="column is-3">
        <img :src="item.url" alt="" />
        <span v-if="i < 3" class="tag is-danger">NEW</span>
        <a @click="item.like += 1" class="button is-warning is-small">
          <span>いいね! {{ item.like }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import dogApi from '@/api/dog'

export default {
  async fetch({ store, params }) {
    const json = await dogApi.dogs(params.breed)
    store.commit('dog_list_update', json)
  },
  computed: mapState(['dog_list'])
}
</script>
