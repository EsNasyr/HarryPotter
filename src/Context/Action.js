export const LoginStart = (userInfo) => ({
    type: "LOGIN_START"
})

export const LogininSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginInFailure = () => ({
    type: "LOGIN_FAILURE",
})

export const LogOut = () => ({
    type: "LOGOUT",
})