## Get Started 

with yarn:
```shell
yarn install
yarn dev
yarn build
yarn test
```

with npm:
```shell
npm install
npm run dev
npm run build
npm run test
```

## Build and run on Docker

Create an Docker Image:
```shell
docker build -t truelogic .
```
Run the Docker Image:
```shell
docker run -p 5000:5000 --name truelogic -d truelogic
```

## Route

| TYPE  | URL | DESCRIPTION |
| - | - | - |
| POST | http://localhost:5000/add  | Sum array1 and array2 |

## Request Example

![request example](https://i.ibb.co/CQQpjX0/Screenshot-from-2020-12-17-13-39-49.png)

