export const LoginStart = (userInfo) => ({
    type: "LOGIN_START"
});

export const LogininSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginInFailure = () => ({
    type: "LOGIN_FAILURE",
});
//
//
export const RegisterStart = (userInfo) => ({
    type: "REGISTER_START"
});

export const RegisterSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user,
});

export const RegisterFailure = () => ({
    type: "REGISTER_FAILURE"
});
export const LogOut = () => ({
    type: "LOGOUT",
});