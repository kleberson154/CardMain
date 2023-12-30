import imgCard from '../../assets/images/illustration-article.svg'
import imgGreg from '../../assets/images/image-avatar.png'

function Card() {
  return (
    <div className="card">
      <img src={imgCard} className="card-img-top" alt="image for card"></img>
      <div className="tag">Learning</div>

      <p className="data-public">Published 21 Dec 2023</p>

      <h1 className="title">HTML & CSS foundations</h1>

      <p className="descript">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>

      <p className="autor">
        <img className="imgGreg" src={imgGreg} alt="image of the Greg" />
        <strong>Greg Hooper</strong>
      </p>
    </div>
  )
}

export default Card
