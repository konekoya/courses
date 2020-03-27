function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(100, playerName);
}

document.getElementById("startGame")!.addEventListener("click", startGame);

function logPlayer(name: string = "MultiMath Player"): void {
  console.log(`New name ${name}`);
}

function getInputValue(elementId: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementId)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = "New player"): void {
  const scoreElement: HTMLElement | null = document.getElementById(
    "postedscores"
  );
  scoreElement!.innerHTML = `${score} - ${playerName}`;
}
