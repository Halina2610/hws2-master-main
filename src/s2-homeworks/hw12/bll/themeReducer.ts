const initState = {
    themeId: 1,
};

interface InitStateType {
    themeId: number;
}

type ChangeThemeIdAction = ReturnType<typeof changeThemeId>;

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdAction): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            };
        default:
            return state;
    }
};

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const);