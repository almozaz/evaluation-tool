import React, { PureComponent } from 'react';
import EvaluationItem from './EvaluationItem'

class EvaluationContainer extends PureComponent {
  render() {
    return (
      <div className="evaluation wrapper">
       <header>
         <h1>Student</h1>
       </header>

       <main>
        <EvaluationItem />
        //create a new evaluation & review past ones
       </main>
     </div>
    );
  }
}

export default EvaluationContainer
