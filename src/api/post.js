import API from "./index";

class Posts extends API {
  constructor(params) {
    super();
    const { url, endpoint } = params;
    this.endpoint = endpoint;
    this.url = url;
    this.fullURL = `${this.url}${this.endpoint}`;
  }

  getList() {
    return this.getFetch(this.fullURL);
  }

  create(data) {
    return this.postFetch(this.fullURL, data);
  }

  update(id, data) {
    return this.putFetch(`${this.fullURL}/${id}`, data);
  }

  delete(id) {
    return this.deleteFetch(`${this.fullURL}/${id}`);
    // this.getList();
  }
}

const posts = new Posts({
  url: "https://it-blog-posts.herokuapp.com/api/",
  endpoint: "posts"
});

export default posts;
