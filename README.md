Облости Хранения данных:

-   База данных на json-server
-   BFF
-   redux store

Сущности приложения:

-   пользователь: БД (список пользователь), BFF (сессия текущего), store (отображение в браузере)
-   роль пользователя: БД (список ролей), BFF(сессия пользователя с ролью), store (использование на клиенте)
-   статья: БД (список статей), store (отоюражение в браузере)
-   коментарий: БД (список коментарий), store (отображение в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   статья - posts: id / title / image_url / content / published_at
-   комминтарий - comments: id / author_id / post_id / content

Схема состояний на BFF:

-   сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):

-   user: id / login / role_id / session
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив coment: id / author / content / publishedAt
-   users: массив user: id / login / registeredAt / role
