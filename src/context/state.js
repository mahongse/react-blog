import Storage from "../services/storage";

export const initialLoginState = {
  email: "",
  password: ""
};

const initialRegisterState = {
  username: "",
  lastname: "",
  email: "",
  password: ""
};

const initialTab = Storage.get("acc-token") ? "Workspace" : "Home";

const initialPost = { title: "", description: "" };

export const state = {
  blogger: [],
  post: [],
  userPosts: [],
  loggedUser: {},
  errors: {},
  user: initialLoginState,
  account: initialRegisterState,
  tab: initialTab,
  template: initialPost,
  modalShow: false,
  alert: null,
  loading: false
};
