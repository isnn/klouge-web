

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
})