import React from 'react'

function WordCard({ item }) {
    return (
        <div className="wordCard">
            
            <b>Definition:</b>
            <i>({item.partOfSpeech})</i>
            <p>{item.definition}</p>
            {item.examples && <p>i.e {item.examples}</p>}
        </div>
    )
}

export default WordCard
