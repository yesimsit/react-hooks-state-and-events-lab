import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode,setIsDarkMode]=useState(false);

  function handleMode(){
    setIsDarkMode((isDarkMode)=> !isDarkMode)
    
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = isDarkMode? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isDarkMode ? 'dark' : 'light'}Mode</button>
      </header>
      <ShoppingList items={items} 
            setItems={setItems}/>
    </div>
  );
}

export default App;
