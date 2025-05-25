import type { Profile } from "@/utils/psn";

export function generateGames(games: Profile["recentPlayedGames"]) {
  let gamesSvg = "";
  games.forEach((game) => {
    gamesSvg += /* html */ `
    <img style="border-radius: 5px;" width="40" height="40" src="${game.localizedImageUrl}" />
    `;
  });

  return gamesSvg;
}
