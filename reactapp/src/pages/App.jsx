
// o import abaixo é para que o useState funciona
// isto é um hook, os hooks vieram para substituir as classes
// forma mais simples de lidar com o ciclo de vida do código
// para usar o hook é sempre a mesma sintaxe "useState", "useContext" ou "useCallback"
import React, { useState, useEffect } from 'react';
import './App.css'

import { Card } from '../componentes/card'

function App() {
  // declarando uma var com useState
  // é como se fosse um "let nome = in_nome.value"
  // posso passar valores dentro do () do useState para que ja exista um valor
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
   
    setStudents(prevState => [...prevState, newStudent]);
    // ...prevState é para que o conteudo seja adicionado no mesmo vetor
    // caso contrario ele criara um vetor dentro do outro
  };
// usando o useEffect para mexer com uma api.
// 
  useEffect(() => {
    // corpo do useEffect
    // é iniciado automaticamente assim que a interface for reenderizada
    console.log("useEffect foi chamado!")

    fetch('https://api.github.com/users/didiegovieira')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })

    //////////////////////////////////////////////////
    // esta funçao só funciona dentro do useEffect
    // com ela voce lida com requisiçoes asincronas

    // async function fetchData() {
    //   const response = await fetch('https://api.github.com/users/didiegovieira')
    //   const data = await response.json();
    //   console.log("DADOS ===> ", data);

    //   setUser({
    //     name: data.name,
    //     avatar: data.avatar_url,
    //   })
    // }
    ///////////////////////////////////////////////////

    //colocando o "students" dentro, sempre qe eu adicionar um student ele será chamado
    //o array ao final diz quantas vezes deve ser inciiado, se estiver vazio ele inicia uma vez só
  }, [students]);

  return (
    <div className='container'>

      <header>
        <h1>Nome: {studentName}</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="" />
        </div>
      </header>

      <input
      // aqui estou passando o valor para a const acima
        onChange={e => setStudentName(e.target.value)}
        placeholder='Digite o nome...' 
        type="text" />

      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>
    
      {/* <Card name="Rodrigo" time="10:55:25"/> */}
      
      {
        students.map(student => (
          <Card 
          // key usado para fazer ID
            key={student.time}
            name={student.name} 
            time={student.time}
          />
        ))
      }

      
    </div>
  )
}

export default App
