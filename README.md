## typescript-restapi


### About the Apps
Build rest Api with typescript, expressJS, xata &amp; RapidAPI

### Installation
Actually you can do with two ways :
- `clone this repo`
- `create manually by your self`

#### Clone this Repo
To Clone this repo is very straight forward, just simply typing `git clone https://github.com/ivandi1980/typescript-restapi.git` into your local machine

#### Create Manually
To Create manually, just simply :
- create folder ( `mkdir <folder_name>` )
- run : `npm init -y`
- run : `npm i typescript --save-dev`
- run : `npm i @types/node @types/express --save-dev`
- run : `tsc --init`
- run : `npm i --save-dev ts-node nodemon`
- run : `npm i dotenv`
- create file : `nodemon.json`
- install/run : `npm i --save-dev rimraf`
#### tsconfig.json
```
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "src/",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "target": "es6",
    "lib": [
      "esnext"
    ],
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "module": "CommonJS",
  }
}
```
#### nodemon.json
```
{
    "watch": [
        "src"
    ],
    "ext": "ts, .js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}
```

#### Compile & Run the Program
compile run : `npx tsc`
development run : `npm run start:dev`
