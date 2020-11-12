import React from 'react';
import { connect } from 'react-redux';
import { addone,  minusone } from './counterAction'; 



const Counter = ({addone , minusone ,  count}) =>{
    
    
      

       return (
         <div className="counter">
           <h2>Counter</h2>
           <div>
           
             <button onClick={() => addone()}>+</button>
             <span className="count">{count}</span>
             <button onClick={() => minusone()}>-</button>
            
           </div>
         </div>
       );
       
     }
     const mapStateToProps = (state) => {
        return {
          count: state.count
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return {
            addone: () => dispatch(addone()),
          minusone: () => dispatch( minusone() )
        }
      
      }

      export default connect(mapStateToProps,mapDispatchToProps)(Counter);