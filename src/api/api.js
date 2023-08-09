/** @format */

import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://api.nft-music.co/',
    withCredentials: true
})

export const authAPI = {
    async signUpNoWallet({ email, password }) {
        const response = await api.post(`/auth/sign-up?wallet=false`, { email, password })
        return response.data
    },
    async signInWithWallet({ wallet, signature }) {
        const response = await api.post(`/auth/sign-in/wallet`, { wallet, signature })
        return response.data
    },
    async login({ username, password, rememberMe }) {
        const response = await api.post(`/auth/sign-in${rememberMe ? '?remember=true' : ''}`, { username, password })
        return response.data
    },
    async getProfile() {
        const response = await api.get(`auth/profile`)
        return response.data
    },
    async logout() {
        const response = await api.get(`auth/log-out`)
        return response.data
    },
    async updateMyProfileApi(formData) {
        const response = await api.post(`users/update/user-info`, formData)
        return response.data
    },
    async resetPassword({ email }) {
        const response = await api.post(`auth/forgot-password`, { email })
        return response.data
    },
    async addInstagram({ instagramUsername }) {
        const response = await api.post(`users/verify`, { instagramUsername })
        return response.data
    },
    async changePassword({ oldPassword, newPassword }) {
        const response = await api.post(`/users/change-password`, { oldPassword, newPassword })
        return response.data
    },
    async getUserToken(token) {
        const response = await api.get(`/auth/reset-password/${token}`)
        return response.data
    },
    async addWatchList(id) {
        const response = await api.post(`/nft/add-watchlist/${id}`)
        return response.data
    },
    async removeWatchList(id) {
        const response = await api.post(`/nft/remove-watchlist/${id}`)
        return response.data
    },
    async follow(username) {
        const response = await api.post(`/users/follow/${username}`)
        return response.data
    },
    async unfollow(username) {
        const response = await api.post(`/users/unfollow/${username}`)
        return response.data
    },
    async sendContactForm(values) {
        const response = await api.post(`/feedback`, values)
        return response.data
    },
}

export const artistAPI = {
    async getArtist(username) {
        const response = await api.get(`/users/${username}`)
        return response.data
    }
}

export const nftAPI = {
    async sendNFTDetails(formData) {
        const response = await api.post(`/music/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
        return response.data
    },
    async getItem(id) {
        const response = await api.get(`/nft/${process.env.nftContractAddress}/${id}`)
        return response.data
    },
    async getAllItems() {
        const response = await api.get(`/nft`)
        return response.data
    },
    async getItemsByOwner({ wallet }) {
        const response = await api.get(`/nft/${wallet}`)
        return response.data
    },
    async getItemsByCreator({ wallet }) {
        const response = await api.get(`/nft/created/${wallet}`)
        return response.data
    },
    async getFeatureItem() {
        const response = await api.get(`/nft/featured`)
        return response.data
    },
    async getMostPopularItems() {
        const response = await api.get(`/nft/top`)
        return response.data
    },
    async getAvailableTokensRoute() {
        const response = await api.get(`/token`)
        return response.data
    },
    async getTopArtists() {
        const response = await api.get(`/artist/top`)
        return response.data
    },
}

export const usersAPI = {
    async sendBackgroundFile(formData) {
        const response = await api.post(`/users/update/background`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
        return response.data
    },
    async sendAvatarFile(formData) {
        const response = await api.post(`/users/update/avatar`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
        return response.data
    },

}