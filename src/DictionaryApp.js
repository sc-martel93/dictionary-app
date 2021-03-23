import React, { useState } from 'react'
import axios from 'axios'
import './DictionaryApp.css'
import WordCard from './WordCard'

function DictionaryApp() {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState({})

    function randomWord(e){
       
        setResult({})
        const options = {
            method: 'GET',
            url: 'https://wordsapiv1.p.rapidapi.com/words/',
            params: {random: 'true'},
            headers: {
            'x-rapidapi-key': '16ef5195ddmsha395af9aa747e37p1b4648jsnba14058d3035',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        };
        
        axios.request(options).then(function (response) {
            setResult(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    function searchWord(){
        setResult({})
        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${query}`,
            headers: {
            'x-rapidapi-key': '0229cd0a5dmshd08364def2b9ecep191a40jsn75fc550981c7',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
            }
        };
        
        axios.request(options).then(function (response) {
            setResult(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        if(query !== ''){
            searchWord()
        }  
        setQuery('')
    }

    return (
        <>
            <header className="header">
                <h1 className='title'>Dictionary</h1>
                <form className='form' onSubmit={e => handleSubmit(e)}>
                    <input  
                        type='text' 
                        placeholder='Enter a word...' 
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button>Search</button>
                    <button onClick={() => randomWord()}>Random Word!</button>
                </form>
            </header>
                {Object.keys(result).length !== 0 ? 
                    <div>
                        <h2 className="word">{result.word}</h2>
                        {result.results.map(item => <WordCard item={item} />)}
                    </div> 
                : <p>Please Search a Word</p>} 
        </>
    )
}

export default DictionaryApp
