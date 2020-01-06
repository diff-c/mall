import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemListener: null,
      refresh: null
    };
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemListener = () => {
      // this.$refs.scroll.refresh()
      this.refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemListener);
  }
};
