import shortid from "shortid";

//초기 state
const initialState = [
  {
    id: shortid.generate(),
    name: "김진성",
    content: " : 할일하기",
  },
];

//리듀서
const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];
    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.payload);
    default:
      return state;
  }
};

export default reviews;
