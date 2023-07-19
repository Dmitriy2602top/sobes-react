import axios from "axios";
export default class PostServer {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {}
  }
  static async getItemPost(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );

    return response.data;
  }
}
