import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

console.log('by KSD')

class Faqs extends Component {
  state = {idList: []}

  showFaq = id => {
    const {idList} = this.state
    this.setState({
      idList: [...idList, id],
    })
  }

  hideFaq = hideId => {
    const {idList} = this.state
    const newList = idList.filter(id => id !== hideId)
    this.setState({idList: newList})
  }

  renderFaqItem = () => {
    const {faqsList} = this.props
    const {idList} = this.state

    return (
      <ul className="faq-item-list">
        {faqsList.map(faq => (
          <FaqItem
            key={faq.id}
            faqDetails={faq}
            showFaq={this.showFaq}
            isIdSame={idList.includes(faq.id)}
            hideFaq={this.hideFaq}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="faq-title">FAQs</h1>
          {this.renderFaqItem()}
        </div>
      </div>
    )
  }
}

export default Faqs
