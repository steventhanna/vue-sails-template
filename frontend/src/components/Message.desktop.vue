<template>
<div>
  <h1>Hello world</h1>
  <p>{{ result }}</p>
</div>
</template>

<script>
export default {
  props: [''],
  data() {
    return {
      result: ""
    }
  },
  computed: {
  },
  methods: {

  },
  mounted: function() {
    var temp = this;
     $.ajax({
        type: 'GET',
        url: '/api/message',
        success: (data) => {
          temp.result = data.message;
        },
      });
  }
}
</script>
