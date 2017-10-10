import React, { PureComponent } from 'react'
import ClassItem from './ClassItem'

class ClassesContainer extends PureComponent {
  render() {
    return (
      <div className="classes wrapper">
       <header>
         <h1>All classes</h1>
       </header>

       <main>
        <ClassItem />
        //link to each class
       </main>
     </div>
    );
  }
}

export default ClassesContainer
