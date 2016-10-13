# Angular Sweet Alert 2 

Sweet Alert it's enough simple (maybe not?), so, here we have a simple port to Angular 1.x.

# Requirements 
* Node >=5.12
* Yarn or Npm

# How to use?
* Download & Install [Sweet Alert 2](https://limonte.github.io/sweetalert2/)
```bash
yarn add sweetalert2 --save Or npm install sweetalert2 --save
```
* Download & Install angular-sweetalert-2
```bash
yarn add angular-sweetalert-2 Or npm install angular-sweetalert-2
```
* Include socialbase.sweetAlert module
```javascript
angular.module('yourmodule', ['socialbase.sweetAlert']);
```
* Inject SweetAlert factory
```javascript
Foo.$inject = ['SweetAlert']
```
* Read [Sweet Alert 2 API](https://limonte.github.io/sweetalert2/)
* Use and abuse
```javascript
Foo.$inject = ['SweetAlert']

function Foo(SweetAlert) {
  SweetAlert.swal({
    type: 'success',
    text: 'Hello world'
  }).then(function (response) {
    console.log('World says hello too!');
  }
}
```

