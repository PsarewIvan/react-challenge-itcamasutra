# Social Network

<img src="slider.png" width="50%">

## Разработчикам

- Установка `npm i`
- Запуск сервера `npm start`
- Сборка проекта `npm run build`

## Описание

- Учебный проект по изучению библиотеки React в связке с Redux
- Основное обучение проходило по бесплатному курсу от [Димыча](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)
- Бэкенд расположен на [social-network.samuraijs.com](https://social-network.samuraijs.com/)

Приложение имеет 3 четко выраженных уровня:

UI (React) - отвечает за отрисовку компонентов в браузере.

BLL (Redux) - хранит внутреннее состояние приложения, является источником истины для UI.

DAL (Redux-thunk) - хранит логику роботы с сервером, предоставляет для BLL API для работы с сервером.

Приложение придерживается FLUX архитектуры и имеет однонаправленный поток данных. Каждая React компонента придерживается принципа Single-Responsibility.

## [Демо](https://psarewivan.github.io/react-challenge-itcamasutra/)

## Зависимости

- axios: 0.21.1+
- normalize.css: 8.0.1+
- react: 17.0.2+
- react-dom: 17.0.2+
- react-redux: 7.2.3+
- react-router-dom: 5.2.0+
- react-scripts: 4.0.3+
- redux: 4.0.5+
- redux-thunk: 2.3.0+

## Как скачать

- По HTTPS: `git clone https://github.com/PsarewIvan/react-challenge-itcamasutra`
- По SSH: `git clone git@github.com:PsarewIvan/react-challenge-itcamasutra`
