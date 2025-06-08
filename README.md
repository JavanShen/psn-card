<h1 align="center">
PSN Card
</h1>


<p align='center'>
English | <a href="./README-CN.md">中文</a>
</p>

<p align="center">
<a href="https://psncard.dogpaw.top" style="font-size:20px">Online</a>
</p>
<p align="center">
  <a href="https://psncard.dogpaw.top">
		<img src="https://psncard.dogpaw.top/card/apineboluo"/>
  </a>
</p>

## 🔥 Features
- **Dynamic**: The card content will be dynamically generated according to your PSN status.
- **User Friendly**: Generate your PSN card on [Online](https://psncard.dogpaw.top)
- **Deployable**: Support deploy it with `Vercel` or `Docker`.

## 📦 Deployment
**Environment Variables**

| Name      | Description | Example |
| ----------- | ----------- | ----------- |
| NPSSO      | [See psn-api](https://psn-api.achievements.app/authentication/authenticating-manually) | zgQLyxxxxxzxBMoWU |

### PaaS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJavanShen%2Fpsn-card&env=NPSSO)

### Docker

```shell
docker run -d -p 3015:3000 -e NPSSO=YOUR_NPSSO_KEY oneboluo/psn-card
```

## ⚒️ Develop

> Requirement:
>
> **Node >=16**
>
> **[NPSSO](https://psn-api.achievements.app/authentication/authenticating-manually)**

```shell
# copy a .env.local file
cp .env.example .env.local
```

Add your NPSSO on .env.local file
```shell
NPSSO=YOUR_NPSSO_KEY
```

```shell
# install dependencies
pnpm install
# or
yarn install
# or
npm install

# start the service
npm run dev
```

## ❤️ Credits
Inspired by [steam-card](https://github.com/yuyinws/steam-card)

API provider [psn-api](https://github.com/achievements-app/psn-api)
