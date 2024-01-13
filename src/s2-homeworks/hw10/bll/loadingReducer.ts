type initLoadingStateType = {
    isLoading: boolean
}
const initState: initLoadingStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): initLoadingStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            const copyState = {...state, isLoading: action.isLoading}
            return copyState
        }
        // пишет студент  // need to fix
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
