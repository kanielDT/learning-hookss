import { useEffect, useState } from "react"

export default function Message() {
    const [message, setMessage] = useState("Inital Message")
    useEffect(() => {
    }, [])


    return  <h2>{message}</h2>
}