import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const userAPI = {
    async getAll() {
        const response = await instance.get('users');
        return response.data;
    }
}

export const postsAPI = {
    async getByUserId(userId) {
        const response = await instance.get(`posts?userId=${userId}`);
        return response.data;
    },
    async getByPostId(postId) {
        const response = await instance.get(`posts/${postId}`)
        return response.data
    },
    async getComments(postId) {
        const response = await instance.get(`posts/${postId}/comments`)
        return response.data
    },
    async create(body) {
        const response = await instance.post('posts', body)
        return response.data
    },
    async update(body, id) {
        const response = await instance.put(`posts/${id}`, body)
        return response.data
    },
    async delete(postId) {
        const response = await instance.delete(`posts/${postId}`)
        return response.status
    }
}
