import React from 'react'

export type Link={
   id: number,
    title: string,
    url: string,
    description: string,
    tags: string,
}
export type LinkRowProps= Link &{
  
    onDelete:(id:number) => void
}

export const LinkRow: React.FC<LinkRowProps> = ({id,title,url,description,tags,onDelete}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{url}</td>
      <td>{description}</td>
      <td>{tags}</td>
      <td>
        <button>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  
  )
}
