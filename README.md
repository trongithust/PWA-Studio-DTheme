Documentation for Magento PWA Studio packages is located at [https://pwastudio.io](https://pwastudio.io).
# Dtheme
## 1. Clone pwa-studio
```
git clone https://github.com/magento/pwa-studio.git
cd pwa-studio
```

## 2. Modify package.json

workspaces:
```

  "workspaces": [
...
    "packages/upward-spec",
    #add DTheme package
    "packages/dtheme"
  ],

```

scripts:

```
  "scripts": {
	...
    "watch:venia": "yarn venia run watch",
    "watch:dtheme": "yarn workspace @dreyar/dtheme run watch"
  },
```
## 3. Clone DTheme
```
cd  packages
git clone https://github.com/trongithust/PWA-Studio-DTheme.git dtheme
cd ..
yarn install
```
## 4. Run watch/stage
To run watch
```
yarn run watch:dtheme
```
To run production
```
NODE_ENV=production PORT=8080 npm run stage:dtheme
```

## 5. Use custom SSL cert
yarn buildpack create-custom-origin packages/dtheme
```
