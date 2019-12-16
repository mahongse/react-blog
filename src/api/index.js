export default class API {
  getFetch = async url => {
    try {
      const response = await fetch(url);
      if (response.status === 200) return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async postFetch(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.status === 200) return response.json();
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async putFetch(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (response.status === 200) return response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteFetch(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 200) return "Successfully deleted";
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
