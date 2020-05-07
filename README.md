# compro-category-front

## エントリポイント

|  | | 
|---|---|
| hostname |nongenme.net   |
| path  | /compro_category |

|  TEXT|METHOD  |URI  |AUTH|
|---|---|---|---|
| top  |GET   |/  |
| genre一覧  |GET  |/genres  ||
| genre詳細  |GET  |/genres/:label  ||
| genre作成  |GET  |/genres/create  |NEED|
| genre編集  |GET  |/genres/:label/edit  |NEED|
| topic一覧  |GET  |/topics  ||
| topic詳細  |GET  |/topics/:topic_id  ||
| topic作成  |GET  |/topics/create  |NEED|
| topic編集  |GET  |/topics/:topic_id/edit  |NEED|
| task一覧  |GET  |/tasks/  ||
| task詳細  |GET  |/tasks/:task_id  ||
| task作成  |GET  |/tasks/create  |NEED|
| task編集  |GET  |/tasks/:task_id/edit  |NEED|



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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
