import { useState } from "react"

function UserForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div>

      <h2>Form nhập thông tin</h2>

      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Kết quả:</h3>
      <p>Tên: {name}</p>
      <p>Email: {email}</p>

    </div>
  )
}

export default UserForm