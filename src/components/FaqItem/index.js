import './index.css'

const FaqItem = props => {
  const {faqDetails, showFaq, isIdSame, hideFaq} = props
  const {id, questionText, answerText} = faqDetails

  const onshowFaqClicked = () => {
    showFaq(id)
  }

  const onHideFaqClicked = () => {
    hideFaq(id)
  }

  return (
    <li className="faq-item">
      <div className="question-card">
        <h2 className="faq-question">{questionText}</h2>
        <div>
          {isIdSame && (
            <button
              className="show-hide-btn"
              type="button"
              onClick={onHideFaqClicked}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="show-hide-icon"
              />
            </button>
          )}
          {!isIdSame && (
            <button
              className="show-hide-btn"
              type="button"
              onClick={onshowFaqClicked}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="show-hide-icon"
              />
            </button>
          )}
        </div>
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
