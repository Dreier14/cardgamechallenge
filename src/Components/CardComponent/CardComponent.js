import React, { Component } from 'react'
import WinComponent from "../WinComponent/WinComponent"
import "./CardComponent.css"

const shuffle = require('shuffle-array')

class CardComponent extends Component {
    constructor(){
        super()
        this.state={
            deckValue:13,
            cardDeck:[],
            firstGame: true,
            gamesPlayed: 0,
            cardSelect: null,
            cardSelectTwo: null,
            keySet: null,
            clickCount:1
        }
    }

    gamesPlayed = () =>{
        return this.setState({
            gamesPlayed: ++this.state.gamesPlayed
        })
    }
    
    createCards = () => {
        let deckMade =[]
        let results = 0;
        let resultsTwo = 0;
        this.gamesPlayed()
        this.handleFirstGameFlag()
        this.handleNumberValue()
        for(let i= 1; i < this.state.deckValue; i++){
            results = i
            resultsTwo = i
            deckMade.push(results)
            deckMade.push(resultsTwo)
        }  
        return this.setState({
            cardDeck: shuffle(deckMade), 
            cardSelect: null,
            cardSelectTwo: null,
            keySet: null
        }) 
    } 

    handleFirstGameFlag = () => {
        if(this.state.gamesPlayed > 0){
            return this.setState({
                firstGame: false
             })
        } 
       
    }

    handleClickOne = (selectedVal, key) =>{
        this.handleCount()
        this.handleNumberValue(selectedVal)
        if(this.state.keySet !== key  && selectedVal === this.state.cardSelect ){
            alert("You found a matching pair of " + selectedVal + " 's")
            let cardDeck = this.state.cardDeck.filter(array => array !== selectedVal)
            return this.setState({
                cardDeck: cardDeck,
                
            }) 
         }else if (this.state.clickCount % 3 !== 0){
            return this.setState({
                cardSelect: selectedVal,
                keySet: key 
            })
         }
         return this.setState({
            cardSelect: null,
            keySet: null 
        })
       
        }

        handleCount = () => {
            return this.setState({
                clickCount: ++this.state.clickCount 
            })
        }

        handleNumberValue = (x) => {
            console.log(this.state.keySet, "KEY")
            if(this.state.clickCount % 1 !== 0 || this.state.clickCount === 0){
                return this.setState({
                    cardSelectTwo: null, 
                    cardSelect: null,

                 })
                
            }   
            return this.setState({
                cardSelectTwo: x
            })
        }


        


    render() {
        let deck = this.state.cardDeck
        let mappedDeck = deck.map((x,y)=>{
                return <div>
                            <div onClick={() => this.handleClickOne(x, y)} key={y} className="deckOne">
                                {this.state.keySet === y ? <div style={{color:"black"}} key={y}>{x}</div> : <div className="text"></div>}
                            </div>
                       </div>
                    })
        let cardsLeft = this.state.cardDeck.length
        return (
            <div className="background" style={{textAlign:"center"}}> 
                {this.state.firstGame ? <h1 style={{textAlign:"center"}}> Welcome to Memory Game </h1> : null }
                <br/>
                <div>Games Played: {this.state.gamesPlayed} </div>
                <br/>
                <div>Cards Left: {cardsLeft}</div>
                <br/>
                {this.state.firstGame ? <button type="button" className="btn btn-primary btn-lg" onClick={this.createCards} >Start Game</button> : <button type="button" className="btn btn-primary btn-lg" onClick={this.createCards}>Reset Game</button>}                
                <div className="cardPlacement">
                   {mappedDeck}
                    {this.state.cardDeck.length !== 0 || this.state.firstGame === true ? null :  <WinComponent/> }
                </div>
            </div>  
        );
    }
}

export default CardComponent