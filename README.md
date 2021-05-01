# Vue.js and Sails.js Template

# No Longer Maintained
Regrettably, this repo will no longer be maintained. These days, I prefer to host a frontend on a CDN (such as Netlfiy or Cloudfront) and have it interact with my Sails backend instead of budnling evrything together inside Sails.js.

---

This project serves as a template for new Sails and Client Side Vue projects.  It uses Webpack for compiling and serving the frontend.

This project could not have been made possible without the great work of [Julian Claus](https://github.com/ndabAP) and his repo [vue-sails-example](https://github.com/ndabAP/vue-sails-example), in which this repo pulls heavily from.



## Installation
Clone the project.

Both the backend and the frontend contain separate `package.json` files. To install everything using one command, run:

```
npm run install-all
```

## Running

**One Command:**
```
npm run dev
```

**Or:**

Launch the sails server

```
cd backend && sails lift
```

Launch Vue

```
cd frontend && npm run dev
```

Go to [http://localhost:8080](http://localhost:8080)

## Building / Production

```
cd frontend && npm run build
```

```
cd ../backend && NODE_ENV=production node app.js
```


## More complete information
See [vue-sails-example](https://github.com/ndabAP/vue-sails-example).
