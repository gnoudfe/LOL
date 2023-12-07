export default {
  baseUrl: import.meta.env.NUXT_TEST,
  headers: {
    Accept: "application/json",
  },
  get(path) {
    return $fetch(this.baseUrl + path, {
      method: "GET",
      headers: this.headers,
    });


    // return useAsyncData('item', () => $fetch(this.baseUrl + path), {
    //   method: "GET",
    //   headers: this.headers,
    // } )
  },
};
