export function calculateMatch(userPrefs, neighborhoods) {
  return neighborhoods.map((n) => {
    let total = 0;
    let maxScore = 0;

    for (let key in userPrefs) {
      const userWeight = userPrefs[key];     // e.g., 5 (importance of safety)
      const neighborhoodScore = n[key];      // e.g., 4 (neighborhood safety)
      total += userWeight * neighborhoodScore;
      maxScore += userWeight * 5;
    }

    const matchPercent = Math.round((total / maxScore) * 100);
    return {
      ...n,
      matchPercent
    };
  }).sort((a, b) => b.matchPercent - a.matchPercent);
}
