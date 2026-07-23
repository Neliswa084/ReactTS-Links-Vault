import React from 'react'
import { LinkRow, type Link, type LinkRowProps } from './LinkRow'

type LinkListProps = {
    links: Link[]
    onDelete: (id:number) => void
}

export const LinkList: React.FC<LinkListProps> = ({ links, onDelete}) => {


    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {links.length ===0 &&
                <p style={{color: 'black'}}>No links saved , click Add Link to Get Started</p>
                }
                {
                links.map((link) => (
                    <LinkRow key={link.id} {...link} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    )
}