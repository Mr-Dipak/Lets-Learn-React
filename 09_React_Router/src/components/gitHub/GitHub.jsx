import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();
//     const [data, setData] = useState([])
// useEffect(()=>{
//     fetch('https://api.github.com/users/Mr-Dipak')
//     .then((resopnse)=>resopnse.json())
//     .then((response)=>{
//         setData(response);
//     })
// })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data.followers} 
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const resopnse = await fetch('https://api.github.com/users/Mr-Dipak');
    return resopnse.json();
}