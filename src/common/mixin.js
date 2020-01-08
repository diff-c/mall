import { debounce } from "./utils";
import BackTop from "components/content/backTop/BackTop";

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

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return { isShow: false };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    showArrow(position) {
      this.isShow = -position.y > 1000;
    }
  }
};
