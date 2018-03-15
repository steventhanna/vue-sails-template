import { mapMutations } from 'vuex'
import locales from './locales'

export default {
  name: 'app',

  locales,

  mounted () {
  },

  computed: {
  },

  methods: {
    deleteCookie (cookie) {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    },

    ...mapMutations({
      setLocale: 'SET_LOCALE'
    })
  }
}
