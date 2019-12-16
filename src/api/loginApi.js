import API from "./index";

class LoginApi extends API {
  constructor(params) {
    super();
    const { url, endpoint } = params;
    this.endpoint = endpoint;
    this.url = url;
    this.fullURL = `${this.url}${this.endpoint}`;
  }

  create(data) {
    return this.postFetch(this.fullURL, data);
  }
}

const login = new LoginApi({
  url: "https://it-blog-posts.herokuapp.com/api/",
  endpoint: "people/login"
});

export default login;
