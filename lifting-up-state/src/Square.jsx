import { useState } from "react"

function Square() {
  const [isGreen, setIsGreen] = useState(true)

  const toggleColor = () => setIsGreen(!isGreen)

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "100px",
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: isGreen ? "green" : "red",
        }}
      >
        <button onClick={toggleColor}>Change</button>
      </div>
    </div>
  )
}

export default Square
