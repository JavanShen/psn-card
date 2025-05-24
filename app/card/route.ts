import { NextRequest, NextResponse } from "next/server";
import { getPsnProfile } from "@/utils/psn";
import { generateStyle, generateGames, generateCounts } from "./generate";

export async function GET(req: NextRequest) {
  const profile = await getPsnProfile();

  const nickname =
    profile.personalDetail.lastName + profile.personalDetail.firstName;

  const svgContent = `
    <svg width="400" height="150" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
      ${generateStyle()}
      <foreignObject width="400" height="150">
        <div class="card" xmlns="http://www.w3.org/1999/xhtml">
          <div class="top">
            <div class="user-info">
              <img class="avatar" src="${profile.avatarUrl}" width="60" height="60" />
              <div class="status">
                <div>
                  ${nickname}
                </div>
                <div>
                    LV.${profile.trophySummary.level}
                </div>
              </div>
            </div>
            <div class="counts">
              ${generateCounts(profile.trophySummary)}
            </div>
          </div>

          <div class="bottom">
            <div style="font-size:12px;margin-bottom:12px">
                12 hours
            </div>
            <div class="game-list">
              ${generateGames(profile.recentPlayedGames)}
            </div>
          </div>

          <div class="icon-list">

          </div>
        </div>
      </foreignObject>
    </svg>
  `;

  return new NextResponse(svgContent, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
