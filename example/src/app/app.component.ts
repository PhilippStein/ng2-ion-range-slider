import {Component, ViewChild} from '@angular/core';
import {IonRangeSliderComponent} from "ng2-ion-range-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('advancedSliderElement') advancedSliderElement: IonRangeSliderComponent;

  min: number = 1;
  max: number = 10;

  simpleSlider = {name: "Simple Slider", onUpdate: undefined, onFinish: undefined};
  advancedSlider = {name: "Advanced Slider", onUpdate: undefined, onFinish: undefined};

  update(slider, event) {
    console.log("Slider updated: " + slider.name);
    slider.onUpdate = event;
  }

  finish(slider, event) {
    console.log("Slider finished: " + slider.name);
    slider.onFinish = event;
  }

  setAdvancedSliderTo(from, to) {
    this.advancedSliderElement.update({from: from, to:to});
  }
}
