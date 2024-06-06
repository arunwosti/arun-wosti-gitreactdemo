import Lottie from "lottie-react"
import animationData from "./assets/Animation - 1717704131560.json"
import './App.css'


function App() {


  return (
    <>
      <div className='main-container'>
          <div className="">
          <h1 className="myHead">This is <span className="customTxt">React + Vite </span> app developed by Arun Wosti.</h1>
          <h3> Used Lottie Files for cool animations.</h3>

          <div>
            <button className="myBtn1">Learn more..</button>
            <button className="myBtn2">Library</button>
          </div>
          <div className="myAnim">
          <Lottie animationData={animationData} />
          </div>
          <p>This is extra added</p>
          </div>
          
      </div>
    </>
  )
}

export default App
