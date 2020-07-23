<script>
export default {
  props:[],
  data:() => ({
    localHref: document.location.href,
    isLoading: false,
  }),
  filters:{

  },
  methods: {
    deepClone(obj){
      return JSON.parse(JSON.stringify(obj))
    },
    floatAdd(arg1, arg2) {
      var r1, r2, m;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.max(r1, r2);
      return parseFloat((arg1 + arg2).toFixed(m));
    },
    toggleLoading(boolean){
      this.isLoading = !boolean
    },
  },

  mounted() {

  },
}
</script>


<style lang="scss">

$lock-size: 16px;

.swal2-container.swal2-shown{
  background: url(https://sweetalert2.github.io/images/nyan-cat.gif) left center no-repeat rgba(0, 0, 0, 0.4);
  overflow-y: auto;
}
</style>
