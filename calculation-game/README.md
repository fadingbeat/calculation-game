# CalculationGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Run the app

> Follow the simple steps for running the app:

- Start the server with **npm start**

- Open the browser on [localhost:4200](http://localhost:4200)

> the application displays a simple formula with random digits

- Enter the result of the calculation in the input field

> The input field will immediately reset after the key is pressed.
> Formula digits reset to random values.
> The calculation is displayed below the formula.

### Run Jest Unit tests

> To start all test, run **npm test**

> To start the test for one component, the location in terminal should be that of the component you are testing

#### Testing calculation.component.ts

Make sure the location in terminal is `calculation-game/src/app/calculation/`

- Run the command **npm test** `./calculation.component.spec.ts`

- Check the coverage in the terminal or in `coverage/lcov-report/index.html`

### Run e2e tests

- Position the location in terminal to the project's source

- Run command **protractor conf.js**

- Check the terminal for testing log

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
