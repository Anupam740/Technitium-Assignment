const initialState=[
    {
        title: "Last Episode",
        id:0,
        cards: [
            {
                id:0,
                text:"we create a static list and static card"
            },
            {
                id:1,
                text:"we used a mix between material UI React and styled components "
            }
        ]
    }
]
const listReducer =(state= initialState,action) =>{
    switch(action.type) {
        default:
            return state;
    }
}
export default listReducer;