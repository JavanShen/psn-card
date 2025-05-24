import type { Profile } from "@/utils/psn";

export function generateGames(games: Profile["recentPlayedGames"]) {
  let gamesSvg = "";
  games.forEach((game) => {
    gamesSvg += /* html */ `
    <img width="33" height="33" src="${game.localizedImageUrl}" />
    `;
  });

  return gamesSvg;
}
