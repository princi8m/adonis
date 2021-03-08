import React from 'react'

const CreateRoutine = () => {
  return (
    <div className="create-routine">

      <h1>Create your Workout</h1>
      <form>
      <label>Exercie</label><br></br>
      <input type="text" name="exercise"></input><br></br>
      <label>Description</label><br></br>
      <input type="text" name="sets"></input><br></br>
      <label>Image Link</label><br></br>
      <input type="text" name="sets"></input>
      </form>
    </div>

    
  )
}

export default CreateRoutine;