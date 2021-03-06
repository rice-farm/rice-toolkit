# 🍚 Rice UIkit

[![Version](https://img.shields.io/npm/v/@ricefarm/uikit)](https://www.npmjs.com/package/@ricefarm/uikit) [![Size](https://img.shields.io/bundlephobia/min/@ricefarm/uikit)](https://www.npmjs.com/package/@ricefarm/uikit)

Rice Farm UIkit is a set of React components and hooks used to build pages on Pancake's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @ricefarm/uikit`

## Setup

### Theme

Before using Rice UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@ricefarm/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@ricefarm/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://rice-farm.github.io/rice-toolkit)
