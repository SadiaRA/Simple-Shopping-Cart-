import React, { Component } from 'react'
import Counter from './counter'
class Counters extends Component {
   
    render() { 
        const{counters,onIncrement,onDelete,onReset}=this.props;
        return (<div>
            <button onClick={onReset}className='btn btn-primary btn-sm m-2'>Reset</button>
           {counters.map(counter=><Counter  counter={counter} onIncrement={onIncrement} onDelete={onDelete} key={counter.id} />
               
               )}
        </div>  );
    }
}
 
export default Counters;