export function play(player1: string, player2: string): number {
  console.log(player1, player2);
  player1 = player1.toLowerCase().trim();
  player2 = player2.toLowerCase().trim();
  const validMoves = ["rock", "paper", "scissors"];
  if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
    throw new Error(`ERROR: Invalid move detected. Allowed moves are: ${validMoves.join(", ")}`);
  }
  if (player1 === player2) return 0; // tie
  if (
  (player1 === "rock" && player2 === "scissors") 
    || 
  (player1 === "scissors" && player2 === "paper")
    ||
  (player1 === "paper" && player2 === "rock")) {
    return 1; // player1 wins
  }
  else{
    return 2; // player2 wins
  }


}
