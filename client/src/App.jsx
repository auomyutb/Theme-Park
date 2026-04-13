import { useEffect, useState } from "react"
import "./App.css"

const App = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/rides")
      .then(res => res.json())
      .then(data => setRides(data))
  }, [])

  return (
    <div className="container">
      <h1> Theme Park</h1>

      {rides.map((ride) => (
        <div className="card" key={ride._id}>
          <h3>{ride.name}</h3>
          <p>{ride.description}</p>
          <p>
             <span>{ride.thrillLevel}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default App