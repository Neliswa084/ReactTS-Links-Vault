import React from 'react'

export type LinkRowProps={
    id: number,
    title: string,
    url: string,
    description: string,
    tags: string,
}

export const LinkRow: React.FC<LinkRowProps> = ({id,title,url,description,tags}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{url}</td>
      <td>{description}</td>
      <td>{tags}</td>
      <td>
        <button>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  
  )
}
