import './index.css'

const FaqItem = props => {
  const {faqDetails, showFaq, isIdSame} = props
  const {id, questionText, answerText} = faqDetails

  const imageUrl = isIdSame
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const imgAlt = isIdSame ? 'minus' : 'plus'

  const onshowFaqClicked = () => {
    showFaq(id)
  }

  return (
    <li className="faq-item">
      <div className="question-card">
        <p className="faq-question">{questionText}</p>
        <button
          className="show-hide-btn"
          type="button"
          onClick={onshowFaqClicked}
        >
          <img src={imageUrl} alt={imgAlt} className="show-hide-icon" />
        </button>
      </div>
      {isIdSame && (
        <>
          <hr className="line" />
          <p className="faq-answer">{answerText}</p>
        </>
      )}
    </li>
  )
}
export default FaqItem
