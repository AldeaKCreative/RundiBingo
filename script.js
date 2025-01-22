document.addEventListener('DOMContentLoaded', () => {
  const bingoCard = document.getElementById('bingo-card');
  const shuffleButton = document.getElementById('shuffle-button');

  const bingoItems = [
    'Scammer Calls OhitsLaz', 'Bushmeeta of the Week', 'Feet pics asked for', 
    'Laz gets called Mother Fucker', 'Scammer knows the stream', 
    'Scammer goes off on Laz', 'Scammer knows Patricia', 'Scammer knows Jork', 
    'Scammer knows Peter', 'OhitsLaz says Penis', 'New Member', 'New Subscriber', 
    'Tangia Party', 'Ai Richard Simmons', 'Ai Mike Tyson', 'Jumpscare', 
    'Patricia Sqirts', 'I Fucked a Nerf', 'Bits given to Laz', '$4.20 donation', 
    'Laz lights blunt', 'Bhenchode Song', 'Laz makes a song', 
    'A piece of paper and pen', 'slowly slowly', 'Patricia yells at scammer', 
    'Tangia Dungeons', 'You win a Dungeon battle', 'Laz Farts on Screen', 
    'Laz farts for Scammer', 'Laz crashes the plane', 'Flight Sim Crashes', 
    'the stream crashes', 'Laz dances', 'Laz gets any desk', 'MccAfee', 
    'Laz gets to change an answering machine', 'Laz finds the location'
  ];

  function generateRandomCard() {
    const shuffledItems = [...bingoItems].sort(() => 0.5 - Math.random());
    bingoCard.innerHTML = ''; // Clear existing content

    for (let i = 0; i < 25; i++) {
      const cell = document.createElement('div');
      cell.classList.add('bingo-cell');
      
      if (i === 12) {
        cell.textContent = 'Free Feet Pics';
        cell.classList.add('free-space', 'clicked');
      } else {
        cell.textContent = shuffledItems.pop();
      }

      cell.addEventListener('click', () => {
        if (!cell.classList.contains('free-space')) {
          cell.classList.toggle('clicked');
        }
      });

      bingoCard.appendChild(cell);
    }
  }

  // Initialize with a random card
  generateRandomCard();

  // Shuffle button functionality
  shuffleButton.addEventListener('click', generateRandomCard);
});
