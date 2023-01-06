// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearch} = props
  const {suggestion} = suggestionItem

  const selectSearch = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="itemContainer">
      <p className="paraElement">{suggestion}</p>
      <button className="delete-button" type="button" onClick={selectSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
