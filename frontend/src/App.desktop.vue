<template>
  <div>    
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>
  </div>
</template>

<script>
  import * as socketIoClient from 'socket.io-client'
  import * as sailsIo from 'sails.io.js'
  import { mapMutations } from 'vuex'
  import AppMixin from './App.mixin'

  export default {
    mixins: [AppMixin],

    components: {},

    data: () => ({
      io: null
    }),

    computed: {},

    watch: {},

    methods: {
      setIo () {
        if (!this.io) {
          let io = sailsIo(socketIoClient)

          let isProductionEnvironment = (process.env.NODE_ENV === 'production')
          let url

          if (isProductionEnvironment) {
            url = `${location.protocol}//${location.hostname}${location.port ? ':' + location.port : ''}`
          } else url = 'http://localhost:1337'

          io.sails.url = url
          io.sails.environment = process.env.NODE_ENV || 'development'
          io.sails.useCORSRouteToGetCookie = false

          this.$set(this, 'io', io)
        }
      },

      logout () {
        this.deleteCookie('user')
        this.isUserAuthenticated = false
        localStorage.clear()
        this.$router.push({name: 'Home'})
      },
    }
  }
</script>
