
# Тестовое задание

Разработать SPA для отображения списка репозиториев и информации по какой-либо компании на Github. Предусмотреть поле ввода названия компании, лоадер загрузки при запросе, отображение списка репозиториев.
В список выводимой информации должны быть включены:
— Название репозитория
— URL репозитория (можно совместить с выводом имени)
— Количество форков, количество watchers
— Количество звезд у репозитория (stargazers).

Предусмотреть переиспользуемые компоненты, там где это имеет смысл.
Большим плюсом будет реализация пагинации

Стек: TypeScript, React,  Redux, axios для выполнения запросов к API, redux-saga для side-эффектов.  Для упрощения развертывания окружения можно использовать CRA. Можно использовать какие-либо UI компоненты для удобства и ускорения разработки.


## Пояснения

Установка и запуск
Скачать
git clone git@github.com:NikG77/test-zigmund.git

Установить
### `npm install`

Запустить в директории проекта
npm start
### `npm start`
Открыть [http://localhost:3000](http://localhost:3000) для обзора в браузере.

Добавить приложение для production в папку `build`
### `npm run build`



