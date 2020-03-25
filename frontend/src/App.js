import React, { useState, useEffect } from 'react';

import './App.css';

function App() {


  const [state, setState] = useState([])
  // there were errrors, you had to remove the propretive activeitems and make it his own state
  const [active, setActive] = useState({
    id: null,
    title: '',
    complete: false
  })
  const [edit, setEdit] = useState(false)

  // you won't be able to fetch data from this API because you need to white list it . CHeck django cors.headers




  const fetchTask = () => {
    fetch('https://guarded-shore-23074.herokuapp.com/api/task-list/')
      .then(response => response.json())
      .then(data => setState(
        data
      ))
  }





  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setActive({
      ...active,
      title: value
    })
  }




  const handleSubmit = (event) => {
    let csrftoken = getCookie('csrftoken')
    event.preventDefault()
    console.log(active)
    let url = 'https://guarded-shore-23074.herokuapp.com/api/task-create/'
    if (edit === true) {
      // REMEMBER THE LOGIC 
      url = `https://guarded-shore-23074.herokuapp.com/api/task-update/${active.id}`
      setEdit(false)
    }
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify(active)
    }).then((response) => {
      fetchTask()
      setState(
        // you had an error here , the item added was added as an object but not in the array, you had to had the [] !
        [active]
      )
    })
      .catch(error => {
        console.log('error', error)
      })
      // // allow to clear the form
      setActive({title:""})
  }


  const getCookie = name => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }



  useEffect(() => {
    fetchTask()
  }, []);



  const startEdit = (task) => {
    setActive(task)
    setEdit(true)
  }



  const startDelete = (task) => {
    let csrftoken = getCookie('csrftoken')
    fetch(`https://guarded-shore-23074.herokuapp.com/api/task-delete/${task.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
        'X-CSRFToken': csrftoken
      }
    }).then(response => {
      fetchTask()
    })
  }

  const strikeUnstrike = task => {
    task.completed = !task.completed
    let csrftoken = getCookie('csrftoken')
    // we aslo need to update the database
    console.log("TASK" , task.completed)
    let url = `https://guarded-shore-23074.herokuapp.com/api/task-update/${task.id}`
    fetch (url, {
      method:'POST',
      headers:{
        'Content-Type': "application/json",
        'X-CSRFToken': csrftoken
      },
      body:JSON.stringify({'completed':task.completed, "title":task.title})
    }).then (() => {
      fetchTask()
    })
  }



  let task = state
  let tasklist = task.map((item, index) => (
    <div  key={index} className="task-wrapper flex-wrapper">
      <div onClick={() => strikeUnstrike(item)} style={{ flex: 7 }}>
        {item.completed == false ? (<span>{item.title}</span>) : (<strike>{item.title}</strike>)}
      </div>
      <div style={{ flex: 1 }}>
        {/* the reason why we need to use an arrow function is because we need to pass a parameter and the parameter is what comes after "map" , above !!!*/}
        <button onClick={() => startEdit(item)} className="btn btn-smn btn-outline-info"> Edit </button>
      </div>
      <div style={{ flex: 1 }}>
        <button onClick={() => startDelete(item)} className="btn btn-smn btn-outline-dark delete"> -  </button>
      </div>
    </div>))
  return (
    <div className="container">
      <div id="task-container">
        <div id="form-wrapper">
          <form  onSubmit={handleSubmit}   id="form">
            <div  className="flex-wrapper">
              <div style={{ flex: 6 }}>
                {/* you had to put value = active title to make it appear on the bar */}
                <input id="title" onChange={handleChange} type="text" className="form-control"name="title" value={active.title} placeholder="Add task" />
              </div>
              <div style={{ flex: 1 }}>
                <button id="submit" type="submit" className="btn btn-warning" name="submit" >Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div id="list-wrapper">
          {tasklist}
        </div>
      </div>
    </div>
  );
}

export default App;
