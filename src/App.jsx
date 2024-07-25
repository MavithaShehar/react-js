
import BodyContend from './componets/BodyContend/BodyContend'
import HeaderContent from './componets/HeaderContend/HeaderContent'

function App() {

  return (
    <>
      <div id='wrapper'>

        <HeaderContent></HeaderContent>
        
        <BodyContend>
          <button>Click Me </button>
        </BodyContend>
        
        <BodyContend>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni obcaecati molestias nobis iusto fuga. 
             Impedit qui saepe modi assumenda labore non, unde illo autem similique vitae facilis atque temporibus.</p>
        </BodyContend>
        
        <BodyContend>
          <button>Click Me</button>
        </BodyContend>

      </div>
     
    </>
  )
}

export default App
