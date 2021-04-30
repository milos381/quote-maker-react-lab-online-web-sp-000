import uuid from 'uuid';
export default (state = [], action) => {
  let indexInQuestion;
  let quoteInQuestion;
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {
        id: uuid(),
        content: action.quote.content,
        author: action.quote.author,
        votes:0
      }
      
      return state.concat(quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.id)
    case 'UPVOTE_QUOTE':
      
      indexInQuestion = state.findIndex(quote => quote.id === action.id)
      quoteInQuestion = state[indexInQuestion]
      return [...state.slice(0, indexInQuestion), Object.assign({},quoteInQuestion, { votes: quoteInQuestion.votes += 1 } ),...state.slice(indexInQuestion + 1)]
    case 'DOWNVOTE_QUOTE':
      
      indexInQuestion = state.findIndex(quote => quote.id === action.id)
      quoteInQuestion = state[indexInQuestion]
      if (quoteInQuestion.votes > 0) {
        return [...state.slice(0, indexInQuestion), Object.assign({},quoteInQuestion, { votes: quoteInQuestion.votes -= 1 } ),...state.slice(indexInQuestion + 1)]
      }
    return state
    default:
      return state;
  }
};
