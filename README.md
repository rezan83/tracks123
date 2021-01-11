# backend
Django and DRF installed with pipenv, dotenv used for env variables.
Data is served at once from one uri.

# frontend
Most of data processing and filtering logic is in 'helpers' folder.
Data is fetched and grouped to related carriers at Home component creation.

## backend Project setup
```
pipenv shell && pipenv install
```

## frontend Project setup
```
npm install
```
or
```
yarn
```
## run both backend and front end at once in linux/mac (optional)
```
bash startapp.sh
```
### Compiles and hot-reloads for development
```
yarn serve
```
### Compiles and minifies for production

```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
