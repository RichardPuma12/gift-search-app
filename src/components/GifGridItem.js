import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    //console.log(id, title, url)
    return (
       
            <div className ='card animate__animated animate__bounce'>
                <img src={url} alt={title}/>
                <p> {title} </p>
            </div>

        
    )
}
//<h1 class="animate__animated animate__bounce">An animated element</h1>
