import React, { useRef,useState } from "react"

const Testing = () => {
  // const number = useRef(1)
  const [number, setNumber] = useState(1)
  const add = () => {
    // number.current = number.current + 1
    setNumber(number + 1)
    console.log(number.current)
    // console.log(number)
  }

  console.log('dirender');

  return(
     <div>
        {number}
        {/* {number.current} */}
        <button onClick={add}>add</button>
     </div>
  )
}

export default Testing