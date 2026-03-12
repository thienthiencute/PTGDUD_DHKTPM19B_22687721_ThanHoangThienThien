import { useState } from "react"

function StatusBadge({ status }) {

  const [currentStatus, setStatus] = useState(status)

  const changeStatus = () => {

    if (currentStatus === "online") {
      setStatus("offline")
    }
    else if (currentStatus === "offline") {
      setStatus("busy")
    }
    else {
      setStatus("online")
    }

  }

  const getColor = () => {

    if (currentStatus === "online") return "green"
    if (currentStatus === "offline") return "gray"
    if (currentStatus === "busy") return "red"

  }

  return (
    <div>

      <span
        style={{
          backgroundColor: getColor(),
          padding: "10px",
          color: "white"
        }}
      >
        {currentStatus}
      </span>

      <br /><br />

      <button onClick={changeStatus}>
        Đổi trạng thái
      </button>

    </div>
  )
}

export default StatusBadge