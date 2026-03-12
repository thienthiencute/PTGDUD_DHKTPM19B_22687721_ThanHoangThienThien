import Header from './components/Header'
import Footer from './components/Footer'
import StudentInfo from './components/StudentInfo'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import StatusBadge from './components/StatusBadge'
import TodoApp from './components/TodoApp'
import './App.css'

function App() {
  const student = {
    name : "Thân Hoàng Thiên Thiên",
    id : "22687721", 
    className: "DHKTPM18C"
  }
  return(
    <div>

      {/* <Header/>

      <StudentInfo 
      name ={student.name}
      id = {student.id}
      className = {student.className}/>
      <Footer /> */}

      {/* <Counter /> */}

      {/* <UserForm /> */}

      {/* <StatusBadge /> */}

      < TodoApp />

    </div>
  )
  
}

export default App
