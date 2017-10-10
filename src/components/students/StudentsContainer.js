import React, { PureComponent } from 'react';
import StudentItem from './StudentItem'

class StudentsContainer extends PureComponent {
  render() {
    return (
      <div className="students wrapper">
       <header>
         <h1>All students</h1>
       </header>

       <main>
        <StudentItem />
        //link to each student in that class
       </main>
     </div>
    );
  }
}

export default StudentsContainer
