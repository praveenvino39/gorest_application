export const localService = {
    getUserId: () => {
        if (localStorage.getItem("EXPIRATION") === new Date().getDate().toString()) {
            return localStorage.getItem("USERID")
        }
        return false
    },
    setUserId: (id) => {
        localStorage.setItem("USERID", id)
        localStorage.setItem("EXPIRATION", new Date().getDate().toString())
    },
}