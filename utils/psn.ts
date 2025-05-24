import {
  exchangeNpssoForAccessCode,
  exchangeAccessCodeForAuthTokens,
  getProfileFromUserName,
  getUserPlayedGames,
} from "psn-api";

export type Profile = Awaited<ReturnType<typeof getPsnProfile>>;

const authenticate = async () => {
  const myNpsso = process.env.NPSSO || "";
  const accessCode = await exchangeNpssoForAccessCode(myNpsso);
  const authorization = await exchangeAccessCodeForAuthTokens(accessCode);
  return authorization;
};

export const getPsnProfile = async () => {
  const authorization = await authenticate();

  const profileRes = await getProfileFromUserName(authorization, "apineboluo");

  const { accountId, avatarUrls, personalDetail, trophySummary, aboutMe } =
    profileRes.profile;

  const playedGames = await getUserPlayedGames(authorization, accountId, {
    limit: 5,
    offset: 0,
  });

  return {
    accountId,
    avatarUrl: avatarUrls[0].avatarUrl,
    personalDetail,
    trophySummary,
    aboutMe,
    recentPlayedGames: playedGames.titles,
  };
};
