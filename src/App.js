
import { useState } from 'react';
import './App.css';



function ListItem (props) {
  return <li>
             <span>{props.item}</span>
             <button type="button" onClick={()=>props.handleRemove(props.item)} >X</button>
         </li>
}

function App () {
const [header,setHeader] = useState(["Shopping List"])
const [items,setItems] = useState(["Banano", "Orange"])




function handleRemove(itemToBeRemoved) {
   const theNewArray = items.filter(
       (element) => element !== itemToBeRemoved
   )
   setItems(theNewArray)
}

return <div>
            <h1>{header}</h1>
            
           <ul>
             {
               items.map(
                    (item)=><ListItem item={item} handleRemove={handleRemove}/>                       
               )
             }
          </ul>
      </div>
}

export default App;
