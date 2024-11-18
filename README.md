## Getting Started

### Install

```shell
> npm install yi-next-cli --global

```

### Usage

Project dependency management:

|  command   |  yi-next-cli  | npm     |    yarn |  pnpm  |
|  -----     |  -----        |   ----- |  -----  |  -----  |
|  install   |  `yi`  | npm install | yarn install | pnpm install |  
|  | `yi vue`  | npm i vue  | yarn add vue | pnpm add vue |
|  | `yi vite -D` | npm i vite -D | yarn add vite -D | pnpm add -D vite |
|  | `yi --frozen`  | npm ci |  yarn install --immutable  | pnpm install --frozen-lockfile |
|  | `yi eslint -g` | npm i eslint -g |  yarn global add eslint  | pnpm add -g eslint |
|  run       | `yi dev --port=5713` | npm run dev -- --port=5713 | yarn run dev --port=5713 | pnpm dev --port=5713 |
| download & execute |  `yi exec vitest`  |  npx vitest   | yarn dlx vitest  | pnpm dlx vitest |
|  upgrade   | `yi up`  | npm upgrade | yarn up  | pnpm update |
|    | `yi up -i` | ❌ | yarn up -i   | pnpm update -i |
| uninstall  | `yi un webpack` | npm uninstall webpack  | yarn remove webpack | pnpm remove webpack |

Prototype development:

```shell
# use template
yi create project-name --pro vue-ts
yi create library-name --lib cli

# devserver
yi index.html

yi App.vue
yi App.tsx
yi App.svelte

```

Currently supported template presets:

| category  |  presets  |
| -----     |  -----    |
| library   |   cli     |
|           |    ui     | 
| project   | vanilla-ts |
|           |  vue-ts    |
|           | react-ts   | 
|           | svelte-ts  |

## Configuration


## Author

Yaxing Son(3228891558@qq.com)
