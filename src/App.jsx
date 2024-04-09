import { useState } from 'react'
import './App.css'
import * as yup from "yup"

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    age: yup.string(),
    mobile: yup.string(),
  })

  async function validateForm() {
    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      mobile: mobile
    }

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is valid')
    } else {
      alert('Form is Invalid')
    }

  }

  return (
    <div className="main">
      <form>
        <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" onClick={() => { validateForm() }}>Submit</button>
      </form>
    </div>
  )
}

export default App
