import { useEffect, useState } from 'react'
import './App.css'
import Watch from '../conponents/Sunglass/Watch/Watch'

function App() {
const [watches, setWatches] = useState([]);

// useEffect(() =>{
//   fetch('Watches.json')
//   .then(res => res.json())
//   .then(data => setWatches(data))
// },[])
useEffect(() =>{
  fetch('https://raw.githubusercontent.com/methela80/watches-data/main/watches.json')
  .then(res => res.json())
  .then(data => setWatches(data))
},[])

  // const watches = [
  //   {id:1, name:"Apple watch", price:200},
  //   {id:2, name:"Samsung watch", price:200},
  //   {id:3, name:"Mi watch", price:200},
  // ]

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Rolex Submariner",
  //     price: 10000,
  //     // other properties omitted
  //   },
  //   {
  //     id: 2,
  //     name: "Omega Speedmaster",
  //     price: 7500,
  //     // other properties omitted
  //   },
  //   {
  //     id: 3,
  //     name: "Tag Heuer Carrera",
  //     price: 8500,
  //     // other properties omitted
  //   },
  //   {
  //     id: 4,
  //     name: "Seiko Prospex",
  //     price: 500,
  //     // other properties omitted
  //   },
  //   {
  //     id: 5,
  //     name: "Casio G-Shock",
  //     price: 150,
  //     // other properties omitted
  //   },
  // ];
  
  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
