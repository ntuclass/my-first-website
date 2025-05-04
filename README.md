# React Next Boilerplate

## 如何開始

1. 安裝所需套件

```
npm install
```

2. 啟動開發伺服器

```
npm run dev
```

再執行

```
npm run dev
```

3. 啟動後透過瀏覽器造訪 http://localhost:3000

4. 進入 `/app/page.js` 開始編輯首頁上的內容

## 如有使用 nvm

如使用 Windows 啟動 `npm run dev` 時無反應可先執行

```
nvm install 21.0.0
nvm use 21.0.0
```

## 開啟Cursor Tab

Ctrl + Shift + P

搜尋: Enable Cursor Tab

關閉 Cursor Tab

搜尋: Disable Cursor Tab

#將專案推送到github repository

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ntuclass/my-first-website.git
git push -u origin main

#如何開一個新的分支(Branch)

git checkout -b feature/chat-room

#如何得知目前分支的狀況

git status

#切換分支

git checkout 分支名稱

#查詢專案所有分支

git branch -a