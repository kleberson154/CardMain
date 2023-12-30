import imgCard from '../../assets/images/illustration-article.svg'
import imgGreg from '../../assets/images/image-avatar.png'

function Card() {
  return (
    <div className="card">
      <img src={imgCard} className="card-img-top" alt="image for card"></img>
      <div>Learning</div>

      <p>Published 21 Dec 2023</p>

      <h1>HTML & CSS foundations</h1>

      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <p>
        <img src={imgGreg} alt="image of the Greg" />
        <strong>Greg Hooper</strong>
      </p>
    </div>
  )
}

export default Card
