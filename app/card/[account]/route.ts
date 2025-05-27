import { NextRequest, NextResponse } from "next/server";
import { getPsnProfile } from "@/utils/psn";
import { generateStyle, generateGames, generateCounts } from "../generate";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ account: string }> },
) {
  try {
    const { account } = await params;

    const profile = await getPsnProfile(account);

    const nickname = profile.personalDetail
      ? profile.personalDetail.firstName + " " + profile.personalDetail.lastName
      : account;

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
                  ${profile.isPlus ? `<img style="margin-left: 3px; display: inline-block;" src="${plusBase64}" width="12" height="12" />` : ""}
                </div>
                <div style="margin-top: 4px">
                  LV.${profile.trophySummary.level}
                </div>
              </div>
            </div>
            <div class="counts">
              ${generateCounts(profile.trophySummary)}
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

const plusBase64 =
  "data:image/png;base64,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";
