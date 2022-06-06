import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convert';

  currenyInputVal: any = "";
  convertVal: any;
  fisrtVal!:string;
  secondVal!:string;
  num(value: any) {
    this.fisrtVal=value.target.value;
    // console.log(this.fisrtVal)
  }
  num2(value: any) {
    this.secondVal=value.target.value;
  }
  getCurrencyVal(){
    if(this.fisrtVal=='USD' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*77.69;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*21.15;
      
      }else if(this.fisrtVal=='INR' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*1;

      }else if(this.fisrtVal=='Euro' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*83.38;
      }

      else if(this.fisrtVal=='PKR' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*0.39;
    }else if(this.fisrtVal=='KWD' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*253.58;
      
      }else if(this.fisrtVal=='HKD' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*9.88;

      }else if(this.fisrtVal=='ASD' && this.secondVal=='INR'){
        this.convertVal=this.currenyInputVal*55.69;
      }

      else if(this.fisrtVal=='INR' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*0.013;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*0.27;
      
      }else if(this.fisrtVal=='USD' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*1;

      }else if(this.fisrtVal=='Euro' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*1.07;
      }

      else if(this.fisrtVal=='PKR' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*0.0050;
    }else if(this.fisrtVal=='KWD' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*3.27;
      
      }else if(this.fisrtVal=='HKD' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*0.13;

      }else if(this.fisrtVal=='ASD' && this.secondVal=='USD'){
        this.convertVal=this.currenyInputVal*0.72;
      }

      else if(this.fisrtVal=='USD' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*3.67;
    }else if(this.fisrtVal=='INR' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*0.047;
      
      }else if(this.fisrtVal=='UAE' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*1;

      }else if(this.fisrtVal=='Euro' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*3.94;
      }

      else if(this.fisrtVal=='PKR' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*0.018;
    }else if(this.fisrtVal=='KWD' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*12.01;
      
      }else if(this.fisrtVal=='HKD' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*0.47;

      }else if(this.fisrtVal=='ASD' && this.secondVal=='UAE'){
        this.convertVal=this.currenyInputVal*2.64;
      }


      else if(this.fisrtVal=='USD' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.93;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.25;
      
      }else if(this.fisrtVal=='Euro' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*1;

      }else if(this.fisrtVal=='INR' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.012;
      }

      else if(this.fisrtVal=='PKR' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.0047;
    }else if(this.fisrtVal=='AWD' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*3.04;
      
      }else if(this.fisrtVal=='HKD' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.12;

      }else if(this.fisrtVal=='ASD' && this.secondVal=='Euro'){
        this.convertVal=this.currenyInputVal*0.67;
      }
      
      else if(this.fisrtVal=='USD' && this.secondVal=='PKR'){
        this.convertVal=this.currenyInputVal*198.96;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='PKR'){
        this.convertVal=this.currenyInputVal*54.09;
      
      }else if(this.fisrtVal=='Euro' && this.secondVal=='PKR'){
        this.convertVal=this.currenyInputVal*213.99;

      }else if(this.fisrtVal=='INR' && this.secondVal=='PKR'){
        this.convertVal=this.currenyInputVal*2.56;
      }

      else if(this.fisrtVal=='USD' && this.secondVal=='KWD'){
        this.convertVal=this.currenyInputVal*0.31;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='KWD'){
        this.convertVal=this.currenyInputVal*0.083;
      
      }else if(this.fisrtVal=='Euro' && this.secondVal=='KWD'){
        this.convertVal=this.currenyInputVal*0.33;

      }else if(this.fisrtVal=='INR' && this.secondVal=='KWD'){
        this.convertVal=this.currenyInputVal*0.0039;
      }

      else if(this.fisrtVal=='USD' && this.secondVal=='HKD'){
        this.convertVal=this.currenyInputVal*7.85;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='HKD'){
        this.convertVal=this.currenyInputVal*2.14;
      
      }else if(this.fisrtVal=='Euro' && this.secondVal=='HKD'){
        this.convertVal=this.currenyInputVal*8.46;

      }else if(this.fisrtVal=='INR' && this.secondVal=='HKD'){
        this.convertVal=this.currenyInputVal*0.10;
      }

      else if(this.fisrtVal=='USD' && this.secondVal=='ASD'){
        this.convertVal=this.currenyInputVal*1.39;
    }else if(this.fisrtVal=='UAE' && this.secondVal=='ASD'){
        this.convertVal=this.currenyInputVal*0.38;
      
      }else if(this.fisrtVal=='Euro' && this.secondVal=='ASD'){
        this.convertVal=this.currenyInputVal*1.50;

      }else if(this.fisrtVal=='INR' && this.secondVal=='ASD'){
        this.convertVal=this.currenyInputVal*0.018;
      }

      else if(this.fisrtVal=='PKR' && this.secondVal=='PKR'){
        this.convertVal=this.currenyInputVal*1;
      }else if(this.fisrtVal=='KWD' && this.secondVal=='KWD'){
          this.convertVal=this.currenyInputVal*1;
       } else if(this.fisrtVal=='HKD' && this.secondVal=='HKD'){
            this.convertVal=this.currenyInputVal*1;
        } else if(this.fisrtVal=='ASD' && this.secondVal=='ASD'){
              this.convertVal=this.currenyInputVal*1;
        }
    else{
      this.convertVal='Something went Wrong please check'
    }
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key);

    if (event.key == 'Enter'){
      this.getCurrencyVal()
    }
  }

}