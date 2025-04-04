// Funktion zur Berechnung der Punkte aus einer Runde
export function calcPoints(input: string): number {
  const throws = input.split(' ').map(Number);  // Eingabe in Zahlen umwandeln
  let totalPoints = 0;
  
  if (throws.length % 2 !== 0) return 0;  // Sollte immer eine gerade Anzahl von Elementen sein (Wurf + Sektor)
  
  for (let i = 0; i < throws.length; i += 2) {
    const multiplier = throws[i];
    const sector = throws[i + 1];
    
    if (sector < 1 || sector > 20) return 0;  // Ungültige Sektoren (1-20)
    
    switch (multiplier) {
      case 1:
        totalPoints += sector;
        break;
      case 2:
        totalPoints += sector * 2;  // Double
        break;
      case 3:
        totalPoints += sector * 3;  // Triple
        break;
      default:
        return 0;  // Ungültiger Multiplikator
    }
  }

  return totalPoints;
}

// Funktion zur Ermittlung des Double Checkout
export function possibleCheckout(score: number): string {
  const remaining = 501 - score;

  if (remaining <= 0 || remaining > 40) return 'Impossible';  // Score außerhalb des möglichen Bereichs

  const half = remaining / 2;

  if (remaining % 2 !== 0 || half > 20) {
    return 'Impossible';  // Keine gültige Double-Option
  }

  return `Double ${half}`;  // Gültiger Double-Treffer
}
