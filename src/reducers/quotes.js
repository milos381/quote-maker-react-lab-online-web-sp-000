
export default (state = [], action) => {
  let indexInQuestion;
  let quoteInQuestion;
  switch (action.type) {
    case 'ADD_QUOTE':
      const quote = {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes
      }
      
      return state.concat(quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      indexInQuestion = state.findIndex(quote => quote.id === action.quoteId)
      quoteInQuestion = state[indexInQuestion]
      return [...state.slice(0, indexInQuestion), Object.assign({},quoteInQuestion, { votes: quoteInQuestion.votes += 1 } ),...state.slice(indexInQuestion + 1)]
    case 'DOWNVOTE_QUOTE':
      
      indexInQuestion = state.findIndex(quote => quote.id === action.quoteId)
      quoteInQuestion = state[indexInQuestion]
      if (quoteInQuestion.votes > 0) {
        return [...state.slice(0, indexInQuestion), Object.assign({},quoteInQuestion, { votes: quoteInQuestion.votes -= 1 } ),...state.slice(indexInQuestion + 1)]
      }
    return state
    default:
      return state;
  }
};
