import API from "./index";

class Bloggers extends API {
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

  getByID(id) {
    return this.getFetch(`${this.fullURL}/${id}`);
  }

  getListByID(id, posts) {
    return this.getFetch(`${this.fullURL}/${id}/${posts}`);
  }

  create(data) {
    return this.postFetch(this.fullURL, data);
  }
}

const bloggers = new Bloggers({
  url: "https://it-blog-posts.herokuapp.com/api/",
  endpoint: "people"
});

export default bloggers;
