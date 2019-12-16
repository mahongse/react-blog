export default function reducer(state, action) {
  switch (action.type) {
    case "GET_BLOGGERS":
      return {
        ...state,
        blogger: action.payload,
        loading: false
      };

    case "GET_POSTS":
      return {
        ...state,
        post: action.payload,
        loading: false
      };

    case "GET_USERPOSTS":
      return {
        ...state,
        userPosts: action.payload,
        loading: false
      };

    case "LOGGEDUSER":
      return {
        ...state,
        loggedUser: action.payload
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };

    case "REGISTER":
      return {
        ...state,
        account: action.payload
      };

    case "SET_TAB":
      return {
        ...state,
        tab: action.payload
      };

    case "SET_POST":
      return {
        ...state,
        template: action.payload
      };

    case "SHOW_MODAL":
      return {
        ...state,
        modalShow: true
      };

    case "HIDE_MODAL":
      return {
        ...state,
        modalShow: false,
        template: {}
      };

    case "SET_EDIT":
      return {
        ...state,
        edit: action.payload
      };

    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload
      };

    case "REMOVE_ALERT":
      return {
        ...state,
        alert: null
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {}
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
