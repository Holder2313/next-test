import React from 'react'

type Props = {
    params: {
        id: number; 
    }
   
}

export default function page({params}: Props) {
  return (
    <div>Vous etes sur l'article: {params.id} </div>
  )
}