import './App.css'
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState(['Kargo iade edilecek']);   // state tanımlandı
  const [input, setInput] = useState('');


  const handleChange = (e) => {   // input değerini değiştirmek için kullanılan fonk.
    setInput(e.target.value)
  }
  // new to-do ekleme fonksiyonu
  const addTodos = (e) => {
    e.preventDefault();  // sayfa yenilenmesini engeller
    setTodos([...todos, input]); // todos dizisine input değerini ekle
    setInput(""); // input değerini sıfırla
  }

  const deleteTodos = (index) => {   // to-do silme fonksiyonu
    const newTodos = [...todos]// todos dizisini kopyalamak için kullanılan fonk.
    newTodos.splice(index, 1)// index parametresine göre to-do methodunu silmek için
    setTodos(newTodos); // todos dizisini güncellemek için kullanılan fonk.
  }

  return (
    <>
      <div className="app">
        <h1 className='text-red-600 font-bold'>React To Do List</h1>
        <form action="" onSubmit={addTodos}>
          <input id='sa' type="text" value={input} onChange={handleChange} />
          <button id='as' type='submit'>Ekle</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li className='bg-slate-400' key={index}>
              {todo}
              <button className='text-red-800  ' onClick={() => deleteTodos(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
