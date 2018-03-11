const notificationAtFirst = 'Notifikaatioiden paikka'

const notificationReducer = (state = notificationAtFirst, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            console.log("setissä")
            return action.notification
        case 'RESET_NOTIFICATION':
            console.log("resetissä")
            console.log(action.notification)
            return action.notification
        default:
            return state
    }
}

export const setNotification = (notification) => {
    return {
        type: 'SET_NOTIFICATION',
        notification
    }

}

export const resetNotification = () => {
    return {
        type: 'RESET_NOTIFICATION',
        notification: null
    }
}

export default notificationReducer