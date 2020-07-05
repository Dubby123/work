export default {
  data() {
    return {
      pagination: {
        onChange: (current) => this.onPage(current),
        pageSize: 10,
        current: 1,
        total: 0,
      },
    };
  },
  methods: {
    onPage(current) {
      this.$error({ title: 'pagination mixin 必须要覆盖翻页方法' });
    },
  },
};
