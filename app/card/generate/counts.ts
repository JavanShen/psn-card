import type { Profile } from "@/utils/psn";

export function generateCounts(
  trophySummary: Profile["trophySummary"] & { icons: Record<string, string> },
) {
  let countsSvg = "";

  (["platinum", "gold", "silver", "bronze"] as const).forEach(async (item) => {
    countsSvg += /* html */ `
      <div class="count-item">
        <div class="icon">
          <img height="25" width="20" src="${trophySummary.icons[item]}" alt="${item}" />
        </div>
        <div class="count">${trophySummary.earnedTrophies[item] || 0}</div>
      </div>
    `;
  });

  return countsSvg;
}
