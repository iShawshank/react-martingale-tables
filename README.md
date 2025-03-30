# React Martingale Tables [![npm](https://img.shields.io/github/package-json/v/js-cookie/js-cookie)](https://www.npmjs.com/package/js-cookie) [![size](https://img.shields.io/bundlephobia/minzip/js-cookie/3)](https://www.npmjs.com/package/js-cookie)

A simple, lightweight, TypeScript React component for Roulette Martingale Tables for various strategies.

![Examples](/src/assets/allTables.png)

## Install

Very simple! Just run `npm i react-martingale-tables`

## Props

Only required param is `stratName`

| prop           | default | type    | description                                |
| -------------- | ------- | ------- | ------------------------------------------ |
| stratName      | none    | string  | strategy name / title                      |
| multiplier     | 1       | number  | Unit size multiplier (ex: how many bets)   |
| win            | 1       | number  | Profit amount on win                       |
| additionalUnit | 0       | number  | additional units to add to loss multiplier |
| showProfit     | true    | boolean | show / hide profit calculation             |

## Basic example

If you only mount with the required param the component will render the outside bets martingale strat

```javascript
import MartingaleTable from 'react-martingale-tables';
// Then mount the component in your JSX
<MartingaleTable stratName="Outside 1:1 bets" />;
```

![Basic Example](/src/assets/basicExample.png)
