## ng2-ion-range-slider
[Ion Range Slider](https://github.com/IonDen/ion.rangeSlider) now optimized for easy use as an importable Angular 2 Module and installable using npm.

### Demos and Sample Usage

For Demos and sample usage of this package have a look at the example folder

```
git clone git@github.com:PhilippStein/ng2-ion-range-slider.git
cd ng2-ion-range-slider/example
npm install
npm start
```

### Installation
```
npm install ng2-ion-range-slider --save
```

#### Setup scripts and styles
If you use angular-cli, add ``jquery`` and ``ion-range-slider`` to the scripts section of ``.angular-cli.jso``
```
{
  ...
  "apps": [
    {
      ...
      "scripts": [
            "../node_modules/jquery/dist/jquery.min.js", 
            "../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js"
      ],
      ...   
```

Also add the ion-range-slider style and skin css to the styles section in your ``.angular-cli.jso``
```
{
  ...
  "apps": [
    {
      ...
      "styles": [
              "../node_modules/ion-rangeslider/css/ion.rangeSlider.css",
              "../node_modules/ion-rangeslider/css/ion.rangeSlider.skinFlat.css"
      ],
      ...   
```



#### Import IonRangeSliderModule
import the `IonRangeSliderModule` in your application module

``` javascript
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@NgModule({
    imports: [IonRangeSliderModule]
})

```
#### Use the ion-range-slider
Use the `ion-range-slider` directive in your component.

``` html
<ion-range-slider #sliderElement
          type="double"
          [min]="myMinVar"
          max="100"
          from="28"
          from_min="10"
          from_max="30"
          from_shadow="true"
          to="40"
          to_min="40"
          to_max="90"
          to_shadow="true"
          grid="true"
          grid_num="10"
          prefix="Weight: "
          postfix=" million pounds"
          decorate_both="false"
          (onUpdate)="myOnUpdate($event)"
          (onChange)="myOnChange($event)"
          (onFinish)="myOnFinish($event)"></ion-range-slider>
```