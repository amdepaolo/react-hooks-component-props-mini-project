import React from "react"

function minutesToRead(minutes){
    let emoji;
    let minBreakDown;
    if (minutes < 30){
        emoji = '☕️'
        minBreakDown = Math.ceil(minutes/5)
    } 
    else {
        emoji = '🍱'
        minBreakDown = Math.ceil(minutes/10)}
    const emojiArray = []
    for(let i = 0; i < minBreakDown; i++){
        emojiArray.push(emoji)
    }
    return emojiArray.join('') + ' ' + minutes + " min read"
}


function Article({title, date = "January 1, 1970", preview, minutes}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutesToRead(minutes)}</p>
        </article>
    )
}

export default Article