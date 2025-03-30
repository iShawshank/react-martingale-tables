# React Martingale Tables [![npm](https://img.shields.io/npm/v/react-martingale-tables.svg)](https://www.npmjs.com/package/react-martingale-tables) [![size](https://img.shields.io/bundlephobia/minzip/react-martingale-tables)](https://www.npmjs.com/package/react-martingale-tables)

A simple, lightweight, TypeScript React component for Roulette Martingale Tables for various strategies.

![Examples](/src/assets/allTables.png)

## Install

Very simple! Just run `npm i react-martingale-tables`

## Props

Only required param is `stratName`

| prop           | default | type    | description                                   |
| -------------- | ------- | ------- | --------------------------------------------- |
| stratName      | none    | string  | Strategy name / title                         |
| multiplier     | 1       | number  | Unit multiplier (aka: how many bets per unit) |
| win            | 1       | number  | Profit units on win                           |
| additionalUnit | 0       | number  | Additional units to add to loss multiplier    |
| showProfit     | true    | boolean | Show / hide profit calculation                |

## Basic example

If you only mount with the required param the component will render the outside bets martingale strat

```javascript
import MartingaleTable from 'react-martingale-tables';

// Import the styles (unless you want to roll your own)
import 'react-martingale-tables/martingale.css';

// Then mount the component in your JSX
<MartingaleTable stratName="Outside 1:1 bets" />;
```

![Basic Example](/src/assets/basicExample.png)

## Other strategy examples

### 9 streets

```javascript
import MartingaleTable from 'react-martingale-tables';
import 'react-martingale-tables/martingale.css';
// Then mount the component in your JSX
<MartingaleTable stratName="9 Streets" multiplier={9} win={3} />;
```

### Double Streets

```javascript
import MartingaleTable from 'react-martingale-tables';
import 'react-martingale-tables/martingale.css';
// Then mount the component in your JSX
<MartingaleTable
  stratName="5 Double Streets"
  multiplier={5}
  win={1}
/>;
```

### Outside bets (Double + 1 unit on loss)

```javascript
import MartingaleTable from 'react-martingale-tables';
import 'react-martingale-tables/martingale.css';
// Then mount the component in your JSX
<MartingaleTable
  stratName="Outside bets (Double + 1 unit on loss)"
  multiplier={1}
  win={1}
  additionalUnit={1}
/>;
```

## Examples:

You can run this package locally by cloning this repo and running the following:

```
npm install
npm start
```

This will launch the a vite app from src/main.tsx and should mount several MartingaleTable components with different strategies
