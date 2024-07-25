
import { useState } from 'react'
import BodyContend from './componets/BodyContend/BodyContend'
import HeaderContent from './componets/HeaderContend/HeaderContent'
import ImagesContend from './componets/ImagesContend/ImagesContend'

function App() {

  const [count,setCount] = useState(0)

  return (
    <>
      <div id='wrapper'>

        <HeaderContent></HeaderContent>
        
       

        <BodyContend>
          <button>Click Me </button>
        </BodyContend>
        
        <ImagesContend/>
        
        <BodyContend>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni obcaecati molestias nobis iusto fuga. 
             Impedit qui saepe modi assumenda labore non, unde illo autem similique vitae facilis atque temporibus.</p>
        </BodyContend>
        
        <BodyContend>
          <button onClick={() => setCount((count) => count+1 ) }>Click Me</button>
          <h5>Count is {count}</h5>
        </BodyContend>

      </div>
     
    </>
  )
}

export default App
