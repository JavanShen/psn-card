import type { Profile } from "@/utils/psn";

export function generateCounts(trophySummary: Profile["trophySummary"]) {
  let countsSvg = "";

  (["platinum", "gold", "silver", "bronze"] as const).forEach((item) => {
    countsSvg += /* html */ `
      <div class="count-item">
        <div class="icon">
          <img height="25" width="20" src="/${item}.png" alt="${item}" />
        </div>
        <div class="count">${trophySummary.earnedTrophies[item] || 0}</div>
      </div>
    `;
  });

  return countsSvg;
}
