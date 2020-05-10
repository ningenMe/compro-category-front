![](https://github.com/ningenMe/compro-category-front/workflows/deploy/badge.svg)  
## compro-category-front

### これは何？
https://compro-category.ningenme.net のフロントエンド


#### アーキテクチャ
|----------- |--------------- |
|rooting     | Cloud Front    |
|hosting     | S3             |
|ci/cd       | github actions |
|application | Vue            |

#### ローカルで実行するとき
```
yarn start
```
#### ビルドするとき
```
yarn build
```


## エントリポイント

|----------|-------------------------------|
| hostname |compro-category.ningenme.net   |

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