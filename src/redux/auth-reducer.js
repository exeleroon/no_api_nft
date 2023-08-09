import { message } from 'antd';
import { useRouter } from 'next/router';
import { authAPI } from '../api/api';
// import history from '../history';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_LOADING = 'SET_USER_DATA_LOADING';
const SET_LOGIN_FORM_LOADING = 'SET_LOGIN_FORM_LOADING';
const SET_WALLET_FORM_LOADING = 'SET_WALLET_FORM_LOADING';
const SET_IS_AUTH = 'SET_IS_AUTH'
const CHANGE_AVATAR = 'CHANGE_AVATAR'

const initialState = {
    id: null,
    username: null,
    email: null,
    avatar: null,
    background: null,
    wallet: null,
    artist: null,
    description: null,
    isAuth: false,
    verified: false,
    userDataLoading: true,
    loginFormLoading: false,
    walletFormLoading: false,
};

const AutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_USER_DATA_LOADING:
            return {
                ...state,
                userDataLoading: action.payload
            };
        case SET_LOGIN_FORM_LOADING:
            return {
                ...state,
                loginFormLoading: action.val
            };
        case SET_WALLET_FORM_LOADING:
            return {
                ...state,
                walletFormLoading: action.val
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case CHANGE_AVATAR:
            return {
                ...state,
                avatar: action.payload
            }
        default:
            return state;
    }
};

export const setLoginFormLoading = (val) => ({ type: SET_LOGIN_FORM_LOADING, val });
export const setWalletFormLoading = (val) => ({ type: SET_WALLET_FORM_LOADING, val });

export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: { ...data }
});

export const setUserDataLoading = (data) => ({
    type: SET_USER_DATA_LOADING,
    payload: data
});

export const setIsAuth = (data) => ({
    type: SET_IS_AUTH,
    payload: data
})

export const changeAvatar = (data) => ({
    type: CHANGE_AVATAR,
    payload: data
})


export const signup = (formValues) => {
    return async (dispatch) => {

        dispatch(setLoginFormLoading(true));

        try {
            const data = await authAPI.signUpNoWallet(formValues)
            dispatch(getProfile());

            message.success('Ваш аккаунт успешно зарегистирован, спасибо!')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};

export const resetPassword = (email) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true));

        try {
            const data = await authAPI.resetPassword(email)
            message.success(`Ссылка для восстановления пароля отправлена на вашу почту ${email.email}`)
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};

export const postInstaName = (instagramUsername) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true));
        try {
            const data = await authAPI.addInstagram(instagramUsername)
            message.success(`Спасибо, в скором времени мы подтвердим ваш аккаунт на нашей платформе!`)
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};



export const changePassword = (oldPassword, newPassword) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true));

        try {
            const data = await authAPI.changePassword(oldPassword, newPassword)
            message.success(`Пароль успешно изменен!`)
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};

export const getUserToken = (token) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true));

        try {
            const data = await authAPI.getUserToken(token)
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};

export const loginViaWallet = (formValues) => {
    return async (dispatch) => {
        try {
            const data = await authAPI.signInWithWallet(formValues)
            dispatch(getProfile());

            // history.push(`/my-profile`)
            message.success('Вход успешно выполнен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            dispatch(setWalletFormLoading(false));
        }
    }
};

export const login = (formValues) => {
    return async (dispatch) => {

        dispatch(setLoginFormLoading(true));

        try {
            const data = await authAPI.login(formValues)
            // dispatch(getProfile());
            dispatch(setUserData(data.data));
            dispatch(setIsAuth(true));

            // history.push(`/my-profile`)
            message.success('Вход успешно выполнен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')

            console.log(error.response)
        } finally {
            setTimeout(() => {
                dispatch(setLoginFormLoading(false));
            }, 100)
        }
    }
};

export const updateMyProfile = (formValues) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true))
        try {
            const data = await authAPI.updateMyProfileApi(formValues)
            dispatch(setUserData(data.data));
            message.success('Профиль успешно обновлен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setLoginFormLoading(false))
        }
    };
};


export const addWatchList = (id) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true))

        try {
            const data = await authAPI.addWatchList(id)
            message.success('NFT успешно добавлена в отслеживаемые')
        } catch (error) {
            // error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setLoginFormLoading(false))
        }
    };
};

export const removeWatchList = (id) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true))

        try {
            const data = await authAPI.removeWatchList(id)
            message.success('NFT успешно удалена с отслеживаемых')
        } catch (error) {
            // error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setLoginFormLoading(false))
        }
    };
};

export const follow = (username) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true))

        try {
            const data = await authAPI.follow(username)
            message.success('Пользователь успешно добавлен в отслеживаемые')
        } catch (error) {
            // error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setLoginFormLoading(false))
        }
    };
};

export const unfollow = (username) => {
    return async (dispatch) => {
        dispatch(setLoginFormLoading(true))

        try {
            const data = await authAPI.unfollow(username)
            message.success('Пользователь успешно удален с отслеживаемых')
        } catch (error) {
            // error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setLoginFormLoading(false))
        }
    };
};


export const updateMyWallet = (walletAdress) => {
    return async (dispatch) => {
        dispatch(setWalletFormLoading(true));

        try {
            const data = await authAPI.updateMyProfileApi({ wallet: walletAdress })
            dispatch(setUserData(data.data));
            message.success('Кошелек успешно подключен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setWalletFormLoading(false));
        }
    };
};

export const getProfile = () => {
    return async (dispatch) => {
        dispatch(setUserDataLoading(true))

        try {
            const data = await authAPI.getProfile()
            dispatch(setUserData(data.data));
            dispatch(setIsAuth(true));
        } catch (error) {
            // error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setUserDataLoading(false))
        }
    };
};

export const sendContactForm = (values) => {
    return async (dispatch) => {
        dispatch(setUserDataLoading(true))

        try {
            const data = await authAPI.sendContactForm(values)
            message.success('Спасибо за обратную связь! Ваше сообщение будет обработано в ближайшее время!')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
            dispatch(setUserDataLoading(false))
        }
    };
};

export const logout = () => {
    return async (dispatch) => {

        try {
            const data = await authAPI.logout()
            dispatch(setUserData({
                username: null,
                email: null,
                avatar: null,
                alias: null,
                isAuth: false,
                isConfirmed: false,
                loginFormLoading: false
            }));
            message.success('Выход успешно выполнен')
        } catch (error) {
            error.response?.data?.errors ? message.error(error.response.data.errors.join(', ')) : message.error('Произошла ошибка')
            console.log(error)
        } finally {
        }

    }
};

export default AutReducer;
