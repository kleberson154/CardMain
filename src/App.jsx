import Card from './components/Card'

function App() {
  return (
    <div className="page">
      <Card />
      <div className="attribution">
        <div className="mentor">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </div>{' '}
        <div className="create">
          Coded by{' '}
          <a
            href="https://github.com/kleberson154"
            target="_blank"
            rel="noreferrer"
          >
            Kleberson A.
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
