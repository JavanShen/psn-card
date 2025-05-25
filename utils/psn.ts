import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getProfileFromUserName,
  getUserPlayedGames,
} from "psn-api";
import { imageUrl2Base64 } from "./base64";

export type Profile = Awaited<ReturnType<typeof getPsnProfile>>;

const authenticate = async () => {
  const myNpsso = process.env.NPSSO || "";
  const accessCode = await exchangeNpssoForAccessCode(myNpsso);
  const authorization = await exchangeAccessCodeForAuthTokens(accessCode);
  return authorization;
};

export const getPsnProfile = async (account: string) => {
  const authorization = await authenticate();

  const profileRes = await getProfileFromUserName(authorization, account);

  const {
    accountId,
    avatarUrls,
    personalDetail,
    trophySummary,
    aboutMe,
    plus,
  } = profileRes.profile;

  const playedGames = await getUserPlayedGames(authorization, accountId, {
    limit: 5,
    offset: 0,
  });

  const recentPlayedGames = await Promise.all(
    playedGames.titles.map(async (item) => ({
      ...item,
      localizedImageUrl: await imageUrl2Base64(item.localizedImageUrl),
    })),
  );

  return {
    accountId,
    isPlus: plus === 1,
    avatarUrl: await imageUrl2Base64(avatarUrls[0].avatarUrl),
    personalDetail,
    trophySummary,
    aboutMe,
    recentPlayedGames,
  };
};
