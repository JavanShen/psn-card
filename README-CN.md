<h1 align="center">
PSN Card
</h1>

<p align='center'>
<a href="./README.md">English</a> | 中文
</p>

<p align="center">
<a href="https://psncard.dogpaw.top" style="font-size:20px">在线</a>
</p>
<p align="center">
  <a href="https://psncard.dogpaw.top">
		<img src="https://psncard.dogpaw.top/card/apineboluo"/>
  </a>
</p>

## 🔥 功能
- **动态**: 卡片内容会根据你的PSN状态动态生成
- **用户友好**: 通过 [在线](https://psncard.dogpaw.top) 生成你的PSN资料卡片
- **部署**: 支持 `Vercel` 或 `Docker` 部署.

## 📦 部署
**环境变量**

| 名称      | 描述 | 示例 |
| ----------- | ----------- | ----------- |
| NPSSO      | [查看 psn-api](https://psn-api.achievements.app/authentication/authenticating-manually) | zgQLyxxxxxzxBMoWU |

### PaaS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJavanShen%2Fpsn-card&env=NPSSO)

### Docker

```shell
docker run -d -p 3015:3000 -e NPSSO=YOUR_NPSSO_KEY oneboluo/psn-card
```

## ⚒️ 开发

> 要求:
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
# 安装依赖
pnpm install
# 或者
yarn install
# 或者
npm install

# 启动服务
npm run dev
```

## ❤️ 感谢
灵感来源 [steam-card](https://github.com/yuyinws/steam-card)

API提供 [psn-api](https://github.com/achievements-app/psn-api)
