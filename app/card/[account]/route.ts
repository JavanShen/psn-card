import { NextRequest, NextResponse } from "next/server";
import { getPsnProfile } from "@/utils/psn";
import { generateStyle, generateGames, generateCounts } from "../generate";
import { imageUrl2Base64 } from "@/utils/base64";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ account: string }> },
) {
  try {
    const { account } = await params;

    const profile = await getPsnProfile(account);

    const nickname = profile.personalDetail
      ? profile.personalDetail.firstName + " " + profile.personalDetail.lastName
      : account;

    const trophyIcons: Record<string, string> = {};
    for (const item of ["platinum", "gold", "silver", "bronze"]) {
      trophyIcons[item] = await imageUrl2Base64(
        `${req.nextUrl.origin}/${item}.png`,
      );
    }

    const plusIcon = await imageUrl2Base64(`${req.nextUrl.origin}/plus.png`);

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
                  <span style="font-size: 15px;">${nickname}</span>
                  ${profile.isPlus ? `<img style="margin-left: 3px; display: inline-block;" src="${plusIcon}" width="12" height="12" />` : ""}
                </div>
                <div>
                  LV.${profile.trophySummary.level}
                </div>
              </div>
            </div>
            <div class="counts">
              ${generateCounts({ ...profile.trophySummary, icons: trophyIcons })}
            </div>
          </div>

          <div class="bottom">
            <div class="game-list">
              ${generateGames(profile.recentPlayedGames)}
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  `;

    return new NextResponse(svgContent, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (e) {
    return new NextResponse((e as Error).toString(), {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
