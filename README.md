# Habitrackus keep track of your daily Habit
## Getting Started
- Please Note that before you can Work with the Frontend you have to build the Backend see in reference : https://github.com/maxruffo/Habitrackus_Backend
- also if you have a special localhostsetup for anyreason change the .env.development File 
- If you want to change the localhost port go to the vue.config.js File and change the port:
```js
const { defineConfig } = require('@vue/cli-service')
   module.exports = defineConfig({
   transpileDependencies: true,
   devServer:{
   port: '4040'
   }
   })
```
<strong>Note that if you change the port you have to change the allowence in the Backend<strong>

### if you have any issues please feel free to contact me via GitHub

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
