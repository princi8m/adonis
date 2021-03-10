import React, {useState} from 'react';
import Axios from 'axios';

const CreateRoutine = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const addToList = () => {
    Axios.post("http://localhost:5005/api/insert", {
      name: name,
      description: description,
      image: image
    });
  }

  return (
    <div className="create-routine">

      <h1>Create your Routine</h1>
      <form>
      <label>Exercise Name</label><br></br>
      <input type="text" name="exercise" onChange={(event)=>{setName(event.target.value)}}></input><br></br><br></br>

      <label>Description</label><br></br>
      <input type="text" name="exercise" onChange={(event)=>{setDescription(event.target.value)}}></input><br></br><br></br>

      <label>Image Link</label><br></br>
      <input type="text" name="exercise" onChange={(event)=>{setImage(event.target.value)}}></input><br></br>
      <button onClick={addToList}>ADD</button>
      </form>
    </div>

    
  )
}

export default CreateRoutine;