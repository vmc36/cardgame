import "./style.css"
import CardGame from "../CardGame";

function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
    
    console.log ($htmlCardGame);
    
    return `
    <section class = "board-game"> 
        
        ${$htmlContent}
        
    </section>
    `
}

export default BoardGame;