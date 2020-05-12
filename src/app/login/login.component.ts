import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  characters = "👷 🛍️ 🏎️ 🔛 🔙 🗼 🎖️ 🚺 🐹 🥖 🇵🇷 🎡 🔍 🏟️ 🖥️ 🌭 🇹🇭 ✡️ 🏒 🛀 📅 🖋️ 🇸🇪 🎞️ 🎪 🍙 🛁 📕 👒 🖇️ ❔ 🎄 🕸️ 🥜 🕴️ 🥟 ↙️ ◾ 🐲 🏴 🦌 🆔 👛 🚚 ↪️ 🇬🇷 📿 🌫️ 🌂 🕉️ 🆚 📉 🗨️ 🛒 📛 🇳🇱 🐿️ 🅾️ ☢️ 🇲🇦 🐃 ⛽ 🅿️ 🦇 ⤴️ ⛵ 👞 🔓 🧞 ⛰️ 📎 🦎 🔌 🏳️ 🚽 🍲 ⚒️ ♊ 👢 🧙 🇵🇱 ⛪ 🇧🇪 🎎 🔖 🔋 📡 🌇 🏉 👪 👖 📊 🐆 🔁 🛩️ 🐡 🃏 👩‍💻 🌩️ 🇳🇬 🐏 6️⃣ ⛹️ 🗯️ 🇨🇭 🍢 🗺️ 🚕 🇷🇺 Ⓜ️ ⛱️ 🏫 📀 🆙 🤼 🐨"
  emojis: any;
  array:any = [];
  // color: string = '#BBDEFB';
  // color2: string = '#FFF176';
  // color3: string = '#FF8A80';
  // // color: string = '#f2ed6f';
  // color2: string = '#f8a978';
  // color3: string = '#badfdb';


  color: string = '#ff8a80';
  color2: string = '#ffcc80';
  color3: string = '#90caf9';
  // color: string = '#f2ed6f';

  

  pickedColor = '';
  candidates = [];
  state = "1";

  boardState = "1";


  pickedEmoji1 = "";
  pickedEmoji2 = "";
  pickedEmoji3 = "";
  pickedEmoji4 = "";
  pickedEmoji5 = "";
  pickedEmoji6 = "";

  userName = "";

  showButtons = true;



  ngOnInit() {
    this.emojis = this.characters.split(' ').slice(0,81);
    console.log(this.emojis.length);
    var temp = [];
    for(var i=0;i<81;i +=9) {
      for(var j=0;j<9;j++){
        temp.push({emoji: this.emojis[i+j], color: "red"})
      }
      this.array.push(temp);
      temp = [];
    }
    console.log(this.array);


// This is for selecting the password

for(var i=0;i<50;i +=10) {
      for(var j=0;j<10;j++){
        temp.push({emoji: this.emojis[i+j], color: "red"})
      }
      this.candidates.push(temp);
      temp = [];
    }


  }

  getColor(i,j) {

    if(i<3) {
      if(j<3) {
        return this.color;
      } else if(j < 6) {
        return this.color2
      } else if(j < 9) {
        return this.color3
      }
    } else if(i<6) {
      if(j<3) {
        return this.color2;
      } else if(j < 6) {
        return this.color3
      } else if(j < 9) {
        return this.color
      }
    }
    else if(i<9) {
      if(j<3) {
        return this.color3;
      } else if(j < 6) {
        return this.color
      } else if(j < 9) {
        return this.color2
      }
    }

  }


  colorSelected() {
    return this.pickedColor;
  }


  select(index) {

    console.log(index);
    var color = "color" + index.toString();
    var element = document.getElementById(color);
      
     if(index === 1) {
       element.classList.add("picked");
       var element2 = document.getElementById("color2");
       var element3 = document.getElementById("color3");
       element2.classList.remove("picked");
       element3.classList.remove("picked");
       this.pickedColor = this.color;

     } else if(index === 2) {
       element.classList.add("picked");
       var element1 = document.getElementById("color1");
       var element3 = document.getElementById("color3");
       element1.classList.remove("picked");
       element3.classList.remove("picked");
       this.pickedColor = this.color2;
     } else {
       element.classList.add("picked");
       var element1 = document.getElementById("color1");
       var element2 = document.getElementById("color2");
       element1.classList.remove("picked");
       element2.classList.remove("picked");
       this.pickedColor = this.color3;
     }
    
  }

  displayPasswordSection(index) {
    if(index == 1) {
      this.state = "1";
      this.showButtons = true;
      console.log(this.userName);
    } else if(index == 2) {
      this.state = "2";
      this.showButtons = true;
    } else if(index == 3) {
      this.state = "3";
      this.showButtons = true;
    } else if(index == 4) {
      this.state = "4";
      this.showButtons = false;
    }
  }

  back() {
    if(this.state != "1") {
      this.state = (Number(this.state)-1).toString();
    }
  }


  next() {
   if(this.state != "4") {
        this.state = (Number(this.state)+1).toString();
      }
    if(this.state == "4") {
      this.showButtons = false;
    }
  }


   emojiSelected(i, j) {
     console.log(i, j);
     var status = this.checkIfSelected(i, j);

     if(status) {
       if(this.pickedEmoji1 == "") {
         this.pickedEmoji1 = this.candidates[i][j];
       } else if(this.pickedEmoji2 == "") {
         this.pickedEmoji2 = this.candidates[i][j];
       } else if(this.pickedEmoji3 == "") {
         this.pickedEmoji3 = this.candidates[i][j];
       }else if(this.pickedEmoji4 == "") {
         this.pickedEmoji4 = this.candidates[i][j];
       }else if(this.pickedEmoji5 == "") {
         this.pickedEmoji5 = this.candidates[i][j];
       }else if(this.pickedEmoji6 == "") {
         this.pickedEmoji6 = this.candidates[i][j];
       }
     }

     // console.log(this.pickedEmoji1, this.pickedEmoji2, this.pickedEmoji3);
   }


   removeEmoji(index) {

     console.log(index);
     switch (index) {
       case 1:
         this.pickedEmoji1 = "";
         break;
       case 2:
         this.pickedEmoji2 = "";
         break;
       case 3:
         this.pickedEmoji3 = "";
         break;
       case 4:
         this.pickedEmoji4 = "";
         break;
       case 5:
         this.pickedEmoji5 = "";
         break;
       case 6:
         this.pickedEmoji6 = "";
         break;
     }
   }

   checkIfSelected(i , j) {
       if(this.pickedEmoji1 == this.candidates[i][j]) {
         return false;
       } else if(this.pickedEmoji2 == this.candidates[i][j]) {
         return false;
       } else if(this.pickedEmoji3 == this.candidates[i][j]) {
         return false;
       } else if(this.pickedEmoji4 == this.candidates[i][j]) {
         return false;
       } else if(this.pickedEmoji5 == this.candidates[i][j]) {
         return false;
       } else if(this.pickedEmoji6 == this.candidates[i][j]) {
         return false;
       } else {
         return true;
       }
   }

   setName(userName) {
     this.userName = userName;
     console.log(this.userName);
   }

   goToLogin() {
     this.boardState = "2";
   }



}
