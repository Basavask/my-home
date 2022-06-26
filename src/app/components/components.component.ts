import { Component, OnInit, Renderer2 } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from "@techiediaries/ngx-qrcode";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
    `,
  ],
})
export class ComponentsComponent implements OnInit {
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  constructor(private renderer: Renderer2) {}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://goo.gl/maps/DKsUC2jfG4MF14z88';

  ngOnInit() {
    let input_group_focus = document.getElementsByClassName("form-control");
    let input_group = document.getElementsByClassName("input-group");
    for (let i = 0; i < input_group.length; i++) {
      input_group[i].children[0].addEventListener("focus", function () {
        input_group[i].classList.add("input-group-focus");
      });
      input_group[i].children[0].addEventListener("blur", function () {
        input_group[i].classList.remove("input-group-focus");
      });
    }

    // Set the date we're counting down to
    var countDownDate = new Date("August 11, 2022 0:0:0").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"

      document.getElementById(
        "timer"
      ).innerHTML = `<h1> <span class="countdown-font-style">${days}</span> 
      <span class="countdown-font-style"> D </span> 
      <span class="countdown-font-style"> ${hours} </span>
          <span class="countdown-font-style"> H </span>
          <span class="countdown-font-style"> ${minutes} </span>
           <span class="countdown-font-style"> M </span> 
           <font color='red' class="countdown-font-style">${seconds}<span class="countdown-font-style">s</span></font>
           </h1>`;

      // `<h1> <span>${days}</span> <span> days </span>: ${hours}    <span>hours</span>: $  <font color='red'>${seconds}<span> s</span></font> </h1>`;

      //   If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);

        document.getElementById("timer").innerHTML = `<h1> <span class="countdown-font-style">Its Time Hurry Up !!!</span> </h1>`;
      }
    }, 1000);
  }

  openMap(): void {
      window.open('https://goo.gl/maps/DKsUC2jfG4MF14z88', '_blank');
  }
}
