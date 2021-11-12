import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // copy msg 
  CopyMsg = '';

  // ERROR MSGS 
  LengthErrormsg = '';
  Checkboxerrormsg = '';

  // PASSWORD LENGTH 
  length = 0;

  // output property 
  password = "";

  disabled = false;

  // checkbox Propery declaration
  IsLetters = false;
  IsSymbol = false;
  IsNumber = false;
  IsUppercase = false;

  onKeyup(event: any) {
    let inputValue = event.target.value;
    let Intval = parseFloat(inputValue);

    if (Intval <= 20 && Intval > 0) {
      this.length = Intval;
      this.LengthErrormsg = ''
    }
    if (Intval > 20 || isNaN(Intval)) {
      this.length = 0;
      this.password = '';
      this.LengthErrormsg = "Length shouldn't be more than 20 charecter or Blank"
    }
    // console.log(Intval);

    // if(!isNaN(Intval)){
    //   console.log(typeof(inputValue))
    // }


  }

  btnClick() {
    // FOR TESTING 
    // this.password = "My Password";
    //  console.log(`Includes Letter : ${this.IsLetters}
    //  Includes Numbers : ${this.IsNumber},
    //  Includes Symbol : ${this.IsSymbol}
    //  `);


    // ACTUAL CODE 
    let number = '1234567890';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '!@#$%&([]{})';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let validChar = '';

    if (this.IsLetters) {
      validChar += letters;;
    }
    if (this.IsNumber) {
      validChar += number;
    }
    if (this.IsSymbol) {
      validChar += symbols;
    }
    if (this.IsUppercase) {
      validChar += uppercase;
    }

    let output = '';

    if (this.IsLetters || this.IsNumber || this.IsSymbol || this.IsUppercase) {
      // this.Checkboxerrormsg = '';
      this.onChangeCheckbox();
      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validChar.length)
  
        //  console.log(validChar[index]);
        //  console.log(index);
  
        output += validChar[index]
  
      }
  
      this.password = output;

      if(this.disabled === false){
        this.disabled = !this.disabled;
      }
      // console.log(this.disabled);
      
    }
    else{
      this.Checkboxerrormsg = 'Pls select at least one checkbox;'
    }

  }
  // can also bind property with method || password output value property binding method
  getPassWord() {
    return this.password;
  }

  onChangeCheckbox(){
    return this.Checkboxerrormsg = '';
  }

  // checkbox methods 
  onChangheLetter() {
    // this.IsLetters = !this.IsLetters;
    this.IsLetters = !this.IsLetters;  //it works  something like toggling
    if(this.IsLetters){
      this.onChangeCheckbox();
    }
  }
  onchangeNumber() {
    this.IsNumber = !this.IsNumber;
    if(this.IsNumber){
      this.onChangeCheckbox();
    }
  }
  onchangeSymbol() {
    this.IsSymbol = !this.IsSymbol;
    if(this.IsSymbol){
      this.onChangeCheckbox();
    }
  }
  onChangheUppercase() {
    this.IsUppercase = !this.IsUppercase;
    if(this.IsUppercase){
      this.onChangeCheckbox();
    }
  }

  copyToClipboard(){
    return this.password;
  }

  clipboardClicked(){
    this.CopyMsg = '!Copied!';
    setTimeout(() => {
      this.CopyMsg = '';
    },1000);
    
  }


  // for raw text testing || interpellation
  // getName(){
  //   return 'Arijit'
  // }
}


