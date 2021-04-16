import Component from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state: {activeReviewIndex: 0}

  onLeftClick = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRightClick = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props
    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderActiveReview() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsData[
      activeReviewIndex
    ]

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username} avatar`} />
        <h1 className="person-name">{username}</h1>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="button"
            testid="leftArrow"
            onClick={this.onLeftClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left"
            />
          </button>
          {this.renderActiveReview()}
          <button
            type="button"
            className="button"
            testid="rightArrow"
            onClick={this.onRightClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
