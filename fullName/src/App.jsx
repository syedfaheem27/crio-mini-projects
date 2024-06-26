import { useState } from 'react'

function App() {
  const [fullName, setFullName] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    setFullName("")
    const formData = new FormData(e.target);

    const firstName = formData.get("first");
    const lastName = formData.get("last");

    if (!firstName.trim() || !lastName.trim())
      return;

    setFullName(`${firstName} ${lastName}`)
  }
  return (
    <>
      <header>
        <h1>
          Full Name Display
        </h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First Name:</label>
          <input type="text" required id='first' name="first" />
        </div>
        <div>
          <label htmlFor="last">Last Name:</label>
          <input type="text" required id='last' name="last" />
        </div>
        <button type='submit'>Submit</button>
      </form>


      {
        fullName && <h4>
          Full Name: {fullName}
        </h4>
      }
    </>
  )
}

export default App
