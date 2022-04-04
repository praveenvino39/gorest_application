import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    timeout: 10000,
    headers: {'Authorization': 'Bearer 4c170d08314287840b38d2a60504ceea9eaaf53870870f5d6009c6c4d1e8e09d'}
});


const apiService = {
    allPost: async () => {
        return await instance.get("users/4850/posts")
    },
    allComment: async () => {
        return await instance.get("comments")
    },
    allTodo: async () => {
        return await instance.get("users/4850/todos")
    },
    postComment: async () => {
        return await instance.post("users/4850/comments")
    },
    addPost: async (data) => {
        return await instance.post("users/4850/posts", data)
    },
    updatePost: async (data) => {
        return await instance.patch(`posts/` + data.id, data)
    },
    getCommentByPost: async (id) => {
        return await instance.get(`posts/` + id +"/comments")
    },
    addCommentToPost: async (data) => {
        return await instance.post(`posts/` + data.id +"/comments", data)
    },
    deleteCommentById: async (data) => {
        return await instance.delete(`comments/` + data)
    },
    deletePost: async (data) => {
        return await instance.delete(`posts/` + data)
    },
    addTodo: async (data) => {
        return await instance.post("users/4850/todos", data)
    },
    updateTodo: async (data) => {
        return await instance.patch("todos/" + data.id, data)
    },
    deleteTodo: async (data) => {
        return await instance.delete("todos/" + data)
    },

}

export default apiService