## OK

1. build app `npm run build`
2. use correct node version `nvm use 20.15.1`
3. start server `npm start`
4. start load testing `ab -c 100 -t 100 http://localhost:3000/`

## Fail

1. use new node version `nvm use 20.16.0`
2. start server `npm start`
3. start load testing `ab -c 100 -t 100 http://localhost:3000/`
4. Observer out of memory error
