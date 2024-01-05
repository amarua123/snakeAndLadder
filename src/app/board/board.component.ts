import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  animations: [
    trigger('rotateAnimation', [
      state('default', style({ transform: 'rotateY(0deg)' })),
      state('rotated', style({ transform: 'rotateY(180deg)' })),
      transition('default <=> rotated', animate('500ms ease-in-out')),
    ]),
  ],
})
export class BoardComponent {
  rotateState = 'default';
  cells: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
  noOfPlayer = 4;
  players = ['Player-1', 'Player-2', 'Player-3', 'Player-4']
  playersPos:number[] = []
  currentPlayer = 0;
  diceRolled = false;
  diceNumber = 1;
  msg = "";
  snakesAndLadderStart: number[] = Array.from({ length: 40 }, (_, i) => Math.floor(Math.random() * 98) + 2);
  snakesAndLadderEnd: number[] = Array.from({ length: 40 }, (_, i) => Math.floor(Math.random() * 98) + 2);
  ngOnInit(): void {
    for(let i = 0; i < this.noOfPlayer; i++){
      this.playersPos.push(1);
    }
    for (let i = 10; i < 100; i += 20) {
      for (let j = 0, k = 9; j < k; j++, k--) {
        let temp = this.cells[i+j];
        this.cells[i+j] = this.cells[i+k];
        this.cells[i+k] = temp;
      }
    }
  }

  rotate() {
    this.rotateState = this.rotateState === 'default' ? 'rotated' : 'default';
    setTimeout( () =>{
      this.rotateState = this.rotateState === 'default' ? 'rotated' : 'default';
    }, 400);
  }

  isExists(cell: number) {
    const index = this.playersPos.indexOf(cell);
    return index != -1;
  }
  isSnakeorLadderExists(cell: number){
    const index = this.snakesAndLadderStart.indexOf(cell);
    return index != -1;
  }
  getPlayerImg(cell: number){
    const pos = ["left:-30px;", "left:-24px;", "left:-18px;", "left:-10px;"]
    const initialStyle = "height: 42px; width: 42px;position:absolute;top:-20px;";
    const standingplayers = []
    for(let i = 0; i < this.noOfPlayer; i++){
      if(cell == this.playersPos[i]){
        standingplayers.push({"img": "assets/"+this.players[i]+".png", "style": initialStyle+pos[i]});
      }
    }
    return standingplayers;
  }
  getSnakeOrLadder(cell: number){
    const index = this.snakesAndLadderStart.indexOf(cell);
    const start = this.snakesAndLadderStart[index];
    const end = this.snakesAndLadderEnd[index];
    if(start > end){
      return {"img": "assets/snake.png", "value": end, "style": "position: absolute; right:0; bottom:0;font-weight: 700; font-size: 1.5rem;color:red;"};
    }else{
      return {"img": "assets/ladder.png", "value": end, "style": "position: absolute; right:0; bottom:0;font-weight: 700; font-size: 1.5rem;color:green;"};
    }
  }
  getCurrentPlayerClass(no: number){
    if(this.currentPlayer+1 == no){
      return "cell Player-" + no + " player";
    }
    return "cell Player-" + no;
  }
  movePlayer(): void {
    // Check for snake or ladder
    let newPosition = this.playersPos[this.currentPlayer];
    const index = this.snakesAndLadderStart.indexOf(newPosition);
    if (index != -1) {
      newPosition = this.snakesAndLadderEnd[index];
      if (this.snakesAndLadderEnd[index] > this.snakesAndLadderStart[index]) {
        console.log('got a ladder to', this.snakesAndLadderEnd[index]);
        this.msg += `${this.players[this.currentPlayer]} got a ladder ${this.snakesAndLadderStart[index]} to ${this.snakesAndLadderEnd[index]} <br\>`;
      } else {
        console.log('got a snake to', this.snakesAndLadderEnd[index]);
        this.msg += `${this.players[this.currentPlayer]} got a snake ${this.snakesAndLadderStart[index]} to ${this.snakesAndLadderEnd[index]} <br\>`;
      }
      this.playersPos[this.currentPlayer] = newPosition;//
      this.movePlayer();
    }
    if (newPosition >= 100) {
      alert(`${this.players[this.currentPlayer]} wins!`);
      this.resetGame();
      return;
    }
  }

  rollDice(): void {
    if (this.diceRolled) {
      return; // Prevent rolling the dice multiple times
    }

    const diceRoll = Math.floor(Math.random() * 6) + 1;
    this.msg = ""
    this.diceRolled = true;
    setTimeout(() => {
      this.playersPos[this.currentPlayer] += diceRoll;
      this.diceRolled = false; 
      this.diceNumber = diceRoll;
      this.movePlayer(); 
      this.currentPlayer = (this.currentPlayer + 1) % this.noOfPlayer;
    }, 1000);

  }

  resetGame(): void {
    this.playersPos = []
    for(let i = 0; i < this.noOfPlayer; i++){
      this.playersPos.push(1);
    }
    this.currentPlayer = 0;
    this.diceRolled = false;
    this.diceNumber = 1;
  }
}
