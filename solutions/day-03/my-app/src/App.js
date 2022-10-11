import logo from './logo.svg'
import './App.css'
import image from './assest/talha.jpg'
import skills from './data/skills'
function App() {
  return (
    <div className='App'>
      <div className='image'>
        <img src={image} alt='talha' />
      </div>
      <h1>Talha Tariq</h1>
      <p>Senior Developer, Pakistan</p>
      <div>
        <h3>Skills</h3>
        <div className='buttons'>
          {skills.map((skill) => (
            <button className='btn'>{skill}</button>
          ))}
        </div>
      </div>
      <p>Joined on Aug 30, 2022</p>
    </div>
  )
}

export default App
