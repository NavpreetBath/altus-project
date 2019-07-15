import { Component, Input } from "@angular/core";

@Component({
  selector: "app-argus-assess",
  templateUrl: "./argus-assess.component.html",
  styleUrls: ["./argus-assess.component.scss"]
})
export class ArgusAssessComponent {
  pageTitle = "ARGUS Assess";
  //declaring the input variables that will be entered by end user
  @Input() propertyName: string;
  
  //initialising the %age value at the load of page
  occupancyValue = 0;
  constructor() {}

  calculateOccupancy(
    rentableValue: HTMLInputElement,
    tenantValue: HTMLInputElement
    //reference(using # in html) of the HTML input element passed in the function
  ) {
    this.occupancyValue =
    Number(((parseInt(tenantValue.value) * 100) / parseInt(rentableValue.value)).toFixed(2));
    //occupancy calculated and converted the decimal value to 2 for the percentage
  }
}
