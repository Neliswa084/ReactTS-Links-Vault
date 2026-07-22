import React from 'react'

export type LinkListProps={
    id: number,
    title: string,
    url: string,
    description: string,
    tags: string,
}

export const LinkList: React.FC<LinkListProps> = ({id,title,url,description,tags}) => {
  return (
    <table>
        <tr>
            <td> ID</td>
            <td> Title</td>
            <td> URL</td>
            <td> Description</td>
            <td> Tags</td>
            <td> Actions</td>
           
        </tr>
        <tr>
        <tr>{id}</tr>
        <tr>{title}</tr>
        <tr>{url}</tr>
        <tr>{description}</tr>
        <tr>{tags}</tr>
        <tr><button>Edit</button></tr>

        </tr>
 
    </table>
  )
}
