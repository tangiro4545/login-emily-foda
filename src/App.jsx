import './App.css'
import pessoa from './assets/pessoa.png'

function App() {

  return (
    <>
      <main>
        <section>
          <img src={pessoa} alt="pessoa amarela" />
          <h1>WELCOME</h1>
          <p>lorem ipsum dolor sit amet <br /> consecteur adipiscing elit <br /> sed eiusmod tempor incididunt</p>
          <div className='botoes'>
            <button className='sign'>Sign in</button>
            <button className='log'>log in</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
