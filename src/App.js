import React from  "react";
import store from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import './App.css';

const App = () =>{

   return (
     
      
       <div>
       <Provider store={store}>
         <Counter/>
         </Provider>
       </div>
    
   );
   
 }

 
export default App;


