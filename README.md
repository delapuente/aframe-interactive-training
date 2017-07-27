# A-Frame Interactive Training
> Hand-based interactive training experience made with A-Frame

## Install
You will need `node` and `npm` installed in your system. Once installed, simply run the following command from the root of the project:

```bash
$ npm install
```

## Develop
Issuing the following command will run a local server with live-reload listening in port `8080`:

```bash
$ npm start
```

Visit `localhost:8080` to choose a step. Currently, the step 3 is the most advanced version of this demo and it allows you grabbing the scene elements by pressing the grip buttons of the HTC Vive remotes.

### Working with Oculus (not verified)
Look at the scenes declared in the `index.html` files of `step2/` or `step3/` folders. Replace occurrences of `vive-controls` with `oculus-touch-controls` and you're done.

## Build
If you simply want to generate the JavaScript bundle for your demo, run the following command and the library will be under the `dist` folder:

```bash
$ npm run build
```

## Deploy
Finally, if you want to publish your demo on GitHub Pages, run:

```bash
$ npm run deploy
```
