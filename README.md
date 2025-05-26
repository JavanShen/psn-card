<h1 align="center">
PSN Card
</h1>


<p align='center'>
English | [中文](./README-CN.md)
</p>

<p align="center">
<a href="https://psn-card.vercel.app" style="font-size:20px">Online</a>
</p>
<p align="center">
  <a href="https://psn-card.vercel.app">
		<img src="https://psn-card.vercel.app/card/apineboluo"/>
  </a>
</p>

## 🔥 Features
- **Dynamic**: The card content will be dynamically generated according to your Steam status.
- **User Friendly**: Generate your Steam card on [Online](https://psn-card.vercel.app)
- **Deployable**: Support deploy it with `Vercel`.

## 📦 Deployment
**Environment Variables**

| Name      | Description | Example |
| ----------- | ----------- | ----------- |
| NPSSO      | [See psn-api](https://psn-api.achievements.app/authentication/authenticating-manually) | zgQLyxxxxxzxBMoWU |

### PaaS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJavanShen%2Fpsn-card&env=NPSSO)

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
