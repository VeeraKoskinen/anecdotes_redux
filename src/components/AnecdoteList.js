import React from 'react'
import { voteAnecdote } from './../reducers/anecdoteReducer'
import { setNotification, resetNotification } from './../reducers/notificationReducer'


class AnecdoteList extends React.Component {
  vote = (anecdote) => {
    this.props.store.dispatch(
      voteAnecdote(anecdote.id)
    )     
    this.props.store.dispatch(
      setNotification(`you voted '${anecdote.content}'`)
    ) 
    this.set()
  }

  set = () => {
    setTimeout(() => {
      this.props.store.dispatch(
        resetNotification()
      )  
    }, 3000);
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() =>
                this.vote(anecdote)
              }>           
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
