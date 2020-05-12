import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'graphicalpassword';

    constructor(private http: HttpClient) {

    }

  // characters = "🏁 🚩 🎌 🏴 🏳 🏳️‍🌈 🇦🇨 🇦🇩 🇦🇪 🇦🇫 🇦🇬 🇦🇮 🇦🇱 🇦🇲 🇦🇴 🇦🇶 🇦🇷 🇦🇸 🇦🇹 🇦🇺 🇦🇼 🇦🇽 🇦🇿 🇧🇦 🇧🇧 🇧🇩 🇧🇪 🇧🇫 🇧🇬 🇧🇭 🇧🇮 🇧🇯 🇧🇱 🇧🇲 🇧🇳 🇧🇴 🇧🇶 🇧🇷 🇧🇸 🇧🇹 🇧🇻 🇧🇼 🇧🇾 🇧🇿 🇨🇦 🇨🇨 🇨🇩 🇨🇫 🇨🇬 🇨🇭 🇨🇮 🇨🇰 🇨🇱 🇨🇲 🇨🇳 🇨🇴 🇨🇵 🇨🇷 🇨🇺 🇨🇻 🇨🇼 🇨🇽 🇨🇾 🇨🇿 🇩🇪 🇩🇬 🇩🇯 🇩🇰 🇩🇲 🇩🇴 🇩🇿 🇪🇦 🇪🇨 🇪🇪 🇪🇬 🇪🇭 🇪🇷 🇪🇸 🇪🇹 🇪🇺 🇫🇮 🇫🇯 🇫🇰 🇫🇲 🇫🇴 🇫🇷 🇬🇦 🇬🇧 🇬🇩 🇬🇪 🇬🇫 🇬🇬 🇬🇭 🇬🇮 🇬🇱 🇬🇲 🇬🇳 🇬🇵 🇬🇶 🇬🇷 🇬🇸 🇬🇹 🇬🇺 🇬🇼 🇬🇾 🇭🇰 🇭🇲 🇭🇳 🇭🇹 🇭🇺 🇮🇨 🇮🇩 🇮🇪 🇮🇱 🇮🇲 🇮🇳 🇮🇴 🇮🇶 🇮🇷 🇮🇸 🇮🇹 🇯🇪 🇯🇲 🇯🇴 🇯🇵 🇰🇪 🇰🇬 🇰🇭 🇰🇮 🇰🇲 🇰🇳 🇰🇵 🇰🇷 🇰🇼 🇰🇾 🇰🇿 🇱🇦 🇱🇧 🇱🇨 🇱🇮 🇱🇰 🇱🇷 🇱🇸 🇱🇹 🇱🇺 🇱🇻 🇱🇾 🇲🇦 🇲🇨 🇲🇩 🇲🇪 🇲🇫 🇲🇬 🇲🇭 🇲🇰 🇲🇱 🇲🇲 🇲🇳 🇲🇴 🇲🇵 🇲🇶 🇲🇷 🇲🇸 🇲🇹 🇲🇺 🇲🇻 🇲🇼 🇲🇽 🇲🇾 🇲🇿 🇳🇦 🇳🇨 🇳🇪 🇳🇫 🇳🇬 🇳🇮 🇳🇱 🇳🇴 🇳🇵 🇳🇷 🇳🇺 🇳🇿 🇴🇲 🇵🇦 🇵🇪 🇵🇫 🇵🇬 🇵🇭 🇵🇰 🇵🇱 🇵🇲 🇵🇳 🇵🇷 🇵🇸 🇵🇹 🇵🇼 🇵🇾 🇶🇦 🇷🇪 🇷🇴 🇷🇸 🇷🇺 🇷🇼 🇸🇦 🇸🇧 🇸🇨 🇸🇩 🇸🇪 🇸🇬 🇸🇭 🇸🇮 🇸🇯 🇸🇰 🇸🇱 🇸🇲 🇸🇳 🇸🇴 🇸🇷 🇸🇸 🇸🇹 🇸🇻 🇸🇽 🇸🇾 🇸🇿 🇹🇦 🇹🇨 🇹🇩 🇹🇫 🇹🇬 🇹🇭 🇹🇯 🇹🇰 🇹🇱 🇹🇲 🇹🇳 🇹🇴 🇹🇷 🇹🇹 🇹🇻 🇹🇼 🇹🇿 🇺🇦 🇺🇬 🇺🇲 🇺🇾 🇺🇿 🇻🇦 🇻🇨 🇻🇪 🇻🇬 🇻🇮 🇻🇳 🇻🇺 🇼🇫 🇼🇸 🇽🇰 🇾🇪 🇾🇹 🇿🇲 🇿🇼 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🏴󠁵󠁳󠁴󠁸󠁿";


  emojis: any;
  array:any = [];

  color: string;
  color2: string;
  color3: string;

  colorNumber1;
  colorNumber2;
  colorNumber3;

  // bCandidates = ["#️⃣", "🇦🇱", "🇹🇼", "🛣️", "🏤", "🛄", "🇮🇸", "🏬", "👨‍🎤", "🕐", "🎦", "👨‍💼", "💹", "☸️", "📴", "📐", "🖱️", "🇭🇹", "🇸🇳", "🔩", "🈲", "🎴", "📳", "☦️", "🚆", "📁", "📔", "🇦🇫"];
  // rCandidates = ["👩‍🎨", "🕑", "🚸", "🧣", "👨‍🚀", "🇧🇭", "🏭", "🏺", "🇬🇳", "🤽", "🛥️", "🇲🇱", "🌁", "🤶", "🇦🇿", "💽", "🇦🇴", "🚎", "🇮🇷", "🇳🇵", "🗒️", "🇨🇩", "🛋️", "⌨️", "🆎", "🧗", "🧥", "🇰🇪"];
  // yCandidates = ["🛶", "📑", "👝", "🇦🇲", "⏯️", "🇬🇪", "💱", "👨‍🎨", "🇧🇬", "🇪🇦", "👩‍⚖️", "🕓", "👩‍🚀", "🚞", "👨‍🚒", "🆖", "🔀", "👨‍🔬", "👨‍⚖️", "👨‍👩‍👦‍👦", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🥠", "🚳", "🇧🇯", "🇲🇬"];

  bCandidates = [];
  rCandidates = [];
  yCandidates = [];




  // blueArray = ["👷", "🛍️", "🏎️", "🔛", "🔙", "🗼", "🎖️", "🚺", "🐹", "🥖", "🇵🇷", "🎡", "🔍", "🏟️", "🖥️", "🌭", "🇹🇭", "✡️", "🏒", "🛀", "📅", "🖋️", "🇸🇪", "🎞️", "🎪", "🍙", "🛁"];
  // redArray = ["📕", "👒", "🖇️", "❔", "🎄", "🕸️", "🥜", "🕴️", "🥟", "↙️", "◾", "🐲", "🏴", "🦌", "🆔", "👛", "🚚", "↪️", "🇬🇷", "📿", "🌫️", "🌂", "🕉️", "🆚", "📉", "🗨️", "🛒"];
  // yellowArray = ["📛", "🇳🇱", "🐿️", "🅾️", "☢️", "🇲🇦", "🐃", "⛽", "🅿️", "🦇", "⤴️", "⛵", "👞", "🔓", "🧞", "⛰️", "📎", "🦎", "🔌", "🏳️", "🚽", "🍲", "⚒️", "♊", "👢", "🧙", "🇵🇱"]


  // secondRoundBlueArray = ["😺", "🥞", "🏄", "🔨", "🏝️", "🔆", "👥", "👓", "🥒", "🏈", "🇵🇭", "🏋️", "0️⃣", "🚘", "🦖", "🌕", "🎭", "👾", "🍳", "🏵️", "🍧", "🔗", "🕋", "☃️", "🌅", "🤴", "🖖", "🐊"];
  // secondRoundRedArray = ["🐘", "🌤️", "🥑", "🥚", "⛈️", "🐵", "🔜", "🍶", "🐄", "🇻🇪", "🐮", "🦈", "🚲", "⛔", "🕯️", "➕", "🔺", "💇", "🧠", "📻", "🥤", "🍝", "🍥", "💴", "🌬️", "🥓", "🙍"]
  // secondRoundYellowArray = ["🤖","⚓", "👰", "🐂", "📽️", "🏅", "⛅", "🇦🇪", "🇵🇪", "🧜", "📮", "⛳", "🔽", "🚂", "🏌️", "🐇", "🏍️", "🎲", "🥛", "🎣", "👱", "🎏", "🕷️", "🦍", "🔘", "🐅", "🏇"]

  // thirdRoundBlueArray = ["📯", "👜", "🏘️", "🐫", "⛺", "👩‍🏫", "🕳️", "🏯", "🌓", "🌉", "8️⃣", "💂", "🔉", "👨‍👩‍👧‍👦", "🇪🇺", "🚜", "🔕", "📥", "🌔", "🏙️", "🥨", "🇲🇾", "📘", "📗", "📜", "♏", "🇧🇴", "🏜️"];
  // thirdRoundRedArray = ["🍘", "🛬", "🌯", "🏗️", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🚼", "🏞️", "🔈", "🕰️", "🏓", "🇨🇷", "👨‍🌾", "🦃", "🔦", "🔃", "🇸🇻", "🛳️", "🌘", "🇧🇩", "🧛", "👩‍❤️‍👩", "🔚", "🔟", "ℹ️", "🛢️", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇸🇩"];
  // thirdRoundYellowArray = ["👩‍🚀", "🔭", "🇮🇶", "🎍", "🥣", "🌗", "↖️", "🎳", "👨‍❤️‍💋‍👨", "👨‍🏫", "📄", "🇶🇦", "👨‍👩‍👧", "🎚️", "🛠️", "🆓", "🇵🇸", "🏛️", "♐", "🧦", "🗾", "👩‍🌾", "🎑", "🇬🇹", "🧤", "🧝", "➿"];
    blueArray = [];
    redArray = [];
    yellowArray = [];

    secondRoundBlueArray = [];
    secondRoundRedArray = [];
    secondRoundYellowArray = [];

    thirdRoundBlueArray = [];
    thirdRoundRedArray = [];
    thirdRoundYellowArray = [];




  blueArray1 = [];
  redArray2 = [];
  yellowArray3 = [];

  //red
  hex1 = '#ff8a80';
  //yellow
  hex2 = '#ffcc80';
  //blue
  hex3 = '#90caf9';
  
  arrOfColors = [this.hex1,this.hex2,this.hex3];

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


  round = 1;


  userName = "";
  showButtons = true;

  showSignUp = false;
  showLogin = true;
  showBoard = false;


  rows = [];




  click = 0;
  login = false;
  wrong = false;

  loginUser = "";

  insert = true;


  ngOnInit() {

    // this.http.get<any>('http://localhost:3000/getEmojis').subscribe(data => {
    //   this.rCandidates = [...data.rCandidates];
    //   this.bCandidates = [...data.bCandidates];
    //   this.yCandidates = [...data.yCandidates];

    //   console.log(this.bCandidates);
    //   this.blueArray = [...data.blueArray];
    //   this.redArray = [...data.redArray];
    //   this.yellowArray = [...data.yellowArray];
  
    //   this.secondRoundBlueArray = [...data.secondRoundBlueArray];
    //   this.secondRoundRedArray = [...data.secondRoundRedArray];
    //   this.secondRoundYellowArray = [...data.secondRoundYellowArray];
  
    //   this.thirdRoundBlueArray = [...data.thirdRoundBlueArray];
    //   this.thirdRoundRedArray = [...data.thirdRoundRedArray];
    //   this.thirdRoundYellowArray = [...data.thirdRoundYellowArray];
  

    // });



    this.randomizeColors();
    // this.emojis = this.characters.split(' ');

    // this.emojis.sort(() => Math.random() - 0.5);

    // console.log(this.emojis.slice(0,89));
    // console.log(this.emojis.slice(89,177));
    // console.log(this.emojis.slice(177,265));
    // console.log(this.emojis);
    // console.log(this.emojis.length);
    // console.log(this.array);

  }

  intializeSignUpPhase() {
    this.http.get<any>('http://localhost:3000/getEmojis').subscribe(data => {
      this.rCandidates = [...data.rCandidates];
      this.bCandidates = [...data.bCandidates];
      this.yCandidates = [...data.yCandidates];

      // console.log(this.bCandidates);
      this.blueArray = [...data.blueArray];
      this.redArray = [...data.redArray];
      this.yellowArray = [...data.yellowArray];
  
      this.secondRoundBlueArray = [...data.secondRoundBlueArray];
      this.secondRoundRedArray = [...data.secondRoundRedArray];
      this.secondRoundYellowArray = [...data.secondRoundYellowArray];
  
      this.thirdRoundBlueArray = [...data.thirdRoundBlueArray];
      this.thirdRoundRedArray = [...data.thirdRoundRedArray];
      this.thirdRoundYellowArray = [...data.thirdRoundYellowArray];
  
     console.log(...data.rCandidates);
    });
  }



  getColor(i,j) {

    return this.array[i][j].color;
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
       this.pickedColor = this.hex1;
       this.setCandidates();

     } else if(index === 2) {
       element.classList.add("picked");
       var element1 = document.getElementById("color1");
       var element3 = document.getElementById("color3");
       element1.classList.remove("picked");
       element3.classList.remove("picked");
       this.pickedColor = this.hex2;
       this.setCandidates();
     } else {
       element.classList.add("picked");
       var element1 = document.getElementById("color1");
       var element2 = document.getElementById("color2");
       element1.classList.remove("picked");
       element2.classList.remove("picked");
       this.pickedColor = this.hex3;
       this.setCandidates();
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
         this.pickedEmoji1 = this.candidates[i][j].emoji;
       } else if(this.pickedEmoji2 == "") {
         this.pickedEmoji2 = this.candidates[i][j].emoji;
       } else if(this.pickedEmoji3 == "") {
         this.pickedEmoji3 = this.candidates[i][j].emoji;
       }else if(this.pickedEmoji4 == "") {
         this.pickedEmoji4 = this.candidates[i][j].emoji;
       }else if(this.pickedEmoji5 == "") {
         this.pickedEmoji5 = this.candidates[i][j].emoji;
       }else if(this.pickedEmoji6 == "") {
         this.pickedEmoji6 = this.candidates[i][j].emoji;
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
       } else if(this.pickedEmoji2 == this.candidates[i][j].emoji) {
         return false;
       } else if(this.pickedEmoji3 == this.candidates[i][j].emoji) {
         return false;
       } else if(this.pickedEmoji4 == this.candidates[i][j].emoji) {
         return false;
       } else if(this.pickedEmoji5 == this.candidates[i][j].emoji) {
         return false;
       } else if(this.pickedEmoji6 == this.candidates[i][j].emoji) {
         return false;
       } else {
         return true;
       }
   }

   setName(userName) {
     this.userName = userName;
     console.log(this.userName);
   }


   createUser() {
      //  const params = new HttpParams({userName: this.userName});
      var params = {userName: this.userName, e1:this.pickedEmoji1,e2:this.pickedEmoji2,e3:this.pickedEmoji3,e4:this.pickedEmoji4
        ,e5: this.pickedEmoji5, e6: this.pickedEmoji6, color: this.pickedColor
        ,blueArray: this.blueArray,redArray: this.redArray, yellowArray: this.yellowArray,
        secondRoundBlueArray: this.secondRoundBlueArray, secondRoundRedArray: this.secondRoundRedArray, secondRoundYellowArray: this.secondRoundYellowArray,
        thirdRoundBlueArray: this.secondRoundBlueArray, thirdRoundRedArray: this.thirdRoundRedArray, thirdRoundYellowArray: this.thirdRoundYellowArray}
        this.http.get('http://localhost:3000/createUser', {params: params}).subscribe(res => {
          this.goToNextStep(1);
        });
   }

   goToNextStep(step) {
     if(step == 1) {
      this.showSignUp = false;

      this.showLogin = true;
      this.showBoard = false;

     } else if(step == 2) {
       this.http.get<any>('http://localhost:3000/getUser', {params: {username: this.loginUser}}).subscribe(res => {
         console.log(res.user[0].color);
        this.pickedColor = res.user[0].color;
        this.pickedEmoji1 = res.user[0].e1;
        this.pickedEmoji2 = res.user[0].e2;
        this.pickedEmoji3 = res.user[0].e3;
        this.pickedEmoji4 = res.user[0].e4;
        this.pickedEmoji5 = res.user[0].e5;
        this.pickedEmoji6 = res.user[0].e6;

        console.log(res.user[0]);

        // if(res.blueArray == null || res.blueArray == ""){
        // this.blueArray = ["👷", "🛍️", "🏎️", "🔛", "🔙", "🗼", "🎖️", "🚺", "🐹", "🥖", "🇵🇷", "🎡", "🔍", "🏟️", "🖥️", "🌭", "🇹🇭", "✡️", "🏒", "🛀", "📅", "🖋️", "🇸🇪", "🎞️", "🎪", "🍙", "🛁"];
        // this.redArray = ["📕", "👒", "🖇️", "❔", "🎄", "🕸️", "🥜", "🕴️", "🥟", "↙️", "◾", "🐲", "🏴", "🦌", "🆔", "👛", "🚚", "↪️", "🇬🇷", "📿", "🌫️", "🌂", "🕉️", "🆚", "📉", "🗨️", "🛒"];
        // this.yellowArray = ["📛", "🇳🇱", "🐿️", "🅾️", "☢️", "🇲🇦", "🐃", "⛽", "🅿️", "🦇", "⤴️", "⛵", "👞", "🔓", "🧞", "⛰️", "📎", "🦎", "🔌", "🏳️", "🚽", "🍲", "⚒️", "♊", "👢", "🧙", "🇵🇱"]
      
      
        // this.secondRoundBlueArray = ["😺", "🥞", "🏄", "🔨", "🏝️", "🔆", "👥", "👓", "🥒", "🏈", "🇵🇭", "🏋️", "0️⃣", "🚘", "🦖", "🌕", "🎭", "👾", "🍳", "🏵️", "🍧", "🔗", "🕋", "☃️", "🌅", "🤴", "🖖", "🐊"];
        // this.secondRoundRedArray = ["🐘", "🌤️", "🥑", "🥚", "⛈️", "🐵", "🔜", "🍶", "🐄", "🇻🇪", "🐮", "🦈", "🚲", "⛔", "🕯️", "➕", "🔺", "💇", "🧠", "📻", "🥤", "🍝", "🍥", "💴", "🌬️", "🥓", "🙍"]
        // this.secondRoundYellowArray = ["🤖","⚓", "👰", "🐂", "📽️", "🏅", "⛅", "🇦🇪", "🇵🇪", "🧜", "📮", "⛳", "🔽", "🚂", "🏌️", "🐇", "🏍️", "🎲", "🥛", "🎣", "👱", "🎏", "🕷️", "🦍", "🔘", "🐅", "🏇"]
      
        // this.thirdRoundBlueArray = ["📯", "👜", "🏘️", "🐫", "⛺", "👩‍🏫", "🕳️", "🏯", "🌓", "🌉", "8️⃣", "💂", "🔉", "👨‍👩‍👧‍👦", "🇪🇺", "🚜", "🔕", "📥", "🌔", "🏙️", "🥨", "🇲🇾", "📘", "📗", "📜", "♏", "🇧🇴", "🏜️"];
        // this.thirdRoundRedArray = ["🍘", "🛬", "🌯", "🏗️", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🚼", "🏞️", "🔈", "🕰️", "🏓", "🇨🇷", "👨‍🌾", "🦃", "🔦", "🔃", "🇸🇻", "🛳️", "🌘", "🇧🇩", "🧛", "👩‍❤️‍👩", "🔚", "🔟", "ℹ️", "🛢️", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇸🇩"];
        // this.thirdRoundYellowArray = ["👩‍🚀", "🔭", "🇮🇶", "🎍", "🥣", "🌗", "↖️", "🎳", "👨‍❤️‍💋‍👨", "👨‍🏫", "📄", "🇶🇦", "👨‍👩‍👧", "🎚️", "🛠️", "🆓", "🇵🇸", "🏛️", "♐", "🧦", "🗾", "👩‍🌾", "🎑", "🇬🇹", "🧤", "🧝", "➿"];
        
        this.blueArray = res.user[0].blueArray;
        this.redArray = res.user[0].redArray;
        this.yellowArray = res.user[0].yellowArray;

        this.secondRoundBlueArray = res.user[0].secondRoundBlueArray;
        this.secondRoundRedArray = res.user[0].secondRoundRedArray;
        this.secondRoundYellowArray = res.user[0].secondRoundYellowArray;

        this.thirdRoundBlueArray = res.user[0].thirdRoundBlueArray;
        this.thirdRoundRedArray = res.user[0].thirdRoundRedArray;
        this.thirdRoundYellowArray = res.user[0].thirdRoundYellowArray;
        
         this.showSignUp = false;
         this.showLogin = false;
         this.showBoard = true;
         this.insertPassword();
        //  this.insertPasswordRandomly();
         this.setUpBoard();
       }) 
     }
   }


   updateUserLogin(u) {
     console.log(u);
     this.loginUser = u;
   }



   randomizeColors() {

     
     this.color = this.getNextValue(1);
     this.color2 = this.getNextValue(2);
     this.color3 = this.getNextValue(3);
     console.log(this.arrOfColors)

   }

   getNextValue(i) {
      var index = Math.floor(Math.random()*this.arrOfColors.length);
      var next = this.arrOfColors[index];
     this.arrOfColors.splice(index,1);

     return next;
   }





   getY(event) {
    //  console.log("x" + event.clientX);
     console.log("y" + event.clientY);
   }


   setFirstRow(e) {

    

    // top row
     if(e.clientY >=140 && e.clientY <= 180) {
        this.lockRow(0);
        this.rows.push(this.array[0]);
     } else if(e.clientY >=186 && e.clientY <= 226){
      this.lockRow(1);
      this.rows.push(this.array[1]);
     } else if(e.clientY >=232 && e.clientY <= 272){
       this.lockRow(2);
       this.rows.push(this.array[2]);
    } else if(e.clientY >=278 && e.clientY <= 318){
       this.lockRow(3);
       this.rows.push(this.array[3]);
    } else if(e.clientY >=324 && e.clientY <= 364){
       this.lockRow(4);
       this.rows.push(this.array[4]);
    } else if(e.clientY >=370 && e.clientY <= 410){
       this.lockRow(5);
       this.rows.push(this.array[5]);
    } else if(e.clientY >=416 && e.clientY <= 456){
       this.lockRow(6);
       this.rows.push(this.array[6]);
    } else if(e.clientY >=462 && e.clientY <= 502){
       this.lockRow(7);
       this.rows.push(this.array[7]);
    } else if(e.clientY >=508 && e.clientY <= 548){
       this.lockRow(8);
       this.rows.push(this.array[8]);
    } 
    // this.click++;
    // console.log(this.click);
    // if(this.click ==2) {
    //   this.round++;
    //   this.setUpBoard();
    // } else if(this.click == 4) {
    //   this.round++;
    //   this.setUpBoard();
    // }else if(this.click == 6) {
    //   this.round++;
    //   this.click = 0;
    //   this.authenticated();
    //   this.setUpBoard();
    // }

   }


   setSecondRow(e) {

    // top row
     if(e.clientY >=140 && e.clientY <= 180) {
        this.lockRow(0);
        this.rows.push(this.array[0]);
     } else if(e.clientY >=186 && e.clientY <= 226){
      this.lockRow(1);
      this.rows.push(this.array[1]);
     } else if(e.clientY >=232 && e.clientY <= 272){
       this.lockRow(2);
       this.rows.push(this.array[2]);
    } else if(e.clientY >=278 && e.clientY <= 318){
       this.lockRow(3);
       this.rows.push(this.array[3]);
    } else if(e.clientY >=324 && e.clientY <= 364){
       this.lockRow(4);
       this.rows.push(this.array[4]);
    } else if(e.clientY >=370 && e.clientY <= 410){
       this.lockRow(5);
       this.rows.push(this.array[5]);
    } else if(e.clientY >=416 && e.clientY <= 456){
       this.lockRow(6);
       this.rows.push(this.array[6]);
    } else if(e.clientY >=462 && e.clientY <= 502){
       this.lockRow(7);
       this.rows.push(this.array[7]);
    } else if(e.clientY >=508 && e.clientY <= 548){
       this.lockRow(8);
       this.rows.push(this.array[8]);
    } 

    this.round++;
    if(this.round === 4) {
      this.authenticated();
      // this.authenticatedWithPasswordInAnyOrder();
    } else {
      this.setUpBoard();
    }
   }




   lockRow(row) {
    for(var j=0;j<9;j++) {
      var str = "emoji" + row.toString() + j.toString();
      var el = document.getElementById(str);
      el.innerHTML = "🔒";
      el.classList.add("lock");
    }
   }




   setCandidates() {
    var temp = [];
    this.candidates = [];
    // console.log(this.redArray)
    if(this.pickedColor === this.hex1) {
      console.log('red')
      for(var i=0;i<40;i +=10) {
        for(var j=0;j<10;j++){
          temp.push({emoji: this.rCandidates[i+j], color: "red"})
        }
        this.candidates.push(temp);
        temp = [];
      }
    } else if(this.pickedColor === this.hex2) {
      for(var i=0;i<40;i +=10) {
        for(var j=0;j<10;j++){
          temp.push({emoji: this.yCandidates[i+j], color: "yellow"})
        }
        this.candidates.push(temp);
        temp = [];
      }
    } else if(this.pickedColor === this.hex3) {
      for(var i=0;i<40;i +=10) {
        for(var j=0;j<10;j++){
          temp.push({emoji: this.bCandidates[i+j], color: "blue"})
        }
        this.candidates.push(temp);
        temp = [];
      }
    }

    console.log(this.candidates);
   }


  shuffleEmojis() {
    if(this.round === 1) {
      this.blueArray1 = [...this.blueArray];
      this.blueArray1 = this.blueArray1.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.blueArray1.slice(12,27).sort(() => Math.random() - 0.5));

      this.redArray2 = [...this.redArray];
      this.redArray2 = this.redArray2.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.redArray2.slice(12,27).sort(() => Math.random() - 0.5));

      this.yellowArray3 = [...this.yellowArray];
      this.yellowArray3 = this.yellowArray3.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.yellowArray3.slice(12,27).sort(() => Math.random() - 0.5));

    } else if(this.round == 2) {
      this.blueArray1 = [...this.secondRoundBlueArray];
      this.blueArray1 = this.blueArray1.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.blueArray1.slice(12,27).sort(() => Math.random() - 0.5));

      this.redArray2 = [...this.secondRoundRedArray];
      this.redArray2 = this.redArray2.slice(0,12).sort(() => Math.random() - 0.5)
      .concat(this.redArray2.slice(12,27).sort(() => Math.random() - 0.5));

      this.yellowArray3 = [...this.secondRoundYellowArray];
      this.yellowArray3 = this.yellowArray3.slice(0,12).sort(() => Math.random() - 0.5)
      .concat(this.yellowArray3.slice(12,27).sort(() => Math.random() - 0.5));


      console.log(this.yellowArray3.length);
    } else if(this.round == 3) {
      this.blueArray1 = [...this.thirdRoundBlueArray];
      this.blueArray1 = this.blueArray1.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.blueArray1.slice(12,27).sort(() => Math.random() - 0.5));

      this.redArray2 = [...this.thirdRoundRedArray];
      this.redArray2 = this.redArray2.slice(0,12).sort(() => Math.random() - 0.5)
      .concat(this.redArray2.slice(12,27).sort(() => Math.random() - 0.5));

      this.yellowArray3 = [...this.thirdRoundYellowArray];
      this.yellowArray3 = this.yellowArray3.slice(0,12).sort(() => Math.random() - 0.5)
                        .concat(this.yellowArray3.slice(12,27).sort(() => Math.random() - 0.5));

    }
  }






   setUpBoard() {

    this.blueArray1 = [];
    this.redArray2 = [];
    this.yellowArray3 = [];

    // if(this.round === 1) {
    //   this.blueArray1 = [...this.blueArray];
    //   this.redArray2 = [...this.redArray];
    //   this.yellowArray3 = [...this.yellowArray];
    // } else if(this.round == 2) {
    //   this.blueArray1 = [...this.secondRoundBlueArray];
    //   this.redArray2 = [...this.secondRoundRedArray];
    //   this.yellowArray3 = [...this.secondRoundYellowArray];
    //   console.log(this.yellowArray3.length);
    // } else if(this.round == 3) {
    //   this.blueArray1 = [...this.thirdRoundBlueArray];
    //   this.redArray2 = [...this.thirdRoundRedArray];
    //   this.yellowArray3 = [...this.thirdRoundYellowArray];
    // }

    this.shuffleEmojis();

    console.log("this is setting up the board");
    console.log(this.redArray2);

    // this.blueArray1.sort(() => Math.random() - 0.5);
    // this.redArray2.sort(() => Math.random() - 0.5);
    // this.yellowArray3.sort(() => Math.random() - 0.5);

    
    var temp = [];
    this.array =[];
    for(var i=0;i<81;i +=9) {
      if(i==0) {
          temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
          temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
          temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
          temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
          temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
          temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
          temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
          temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
          temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
      } else if(i==9) {
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
      } else if(i==18) {
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
      } else if(i == 27) {
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
      } else if(i==36) {
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
      } else if(i == 45) {
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
      } else if(i==54) {
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
      } else if(i ==63) {
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
      } else if(i == 72) {
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.yellowArray3.shift(), color: this.hex2});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.redArray2.shift(), color: this.hex1});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
        temp.push({ emoji: this.blueArray1.shift(), color: this.hex3});
      }
      this.array.push(temp);
      temp = [];
    }

    // document.getElementById("board").addEventListener('touchstart', function(e) {
    //   console.log("this is from touch start" + e);
    // })
   }


   insertPassword() {

    var index1 = Math.floor(Math.random()*12);
    var index2 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index1 == index2 || index1+1 == index2 || index1-1 == index2) {
    //   index2 = Math.floor(Math.floor(Math.random()*24));
    // }

    var index3 = Math.floor(Math.random()*12);
    var index4 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index3 == index4 || index3+1 == index4 || index3-1 == index4) {
    //   index4 = Math.floor(Math.floor(Math.random()*24));
    // }

    var index5 = Math.floor(Math.random()*12);
    var index6 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index5 == index6 || index5+1 == index6 || index5-1 == index6) {
    //   index4 = Math.floor(Math.floor(Math.random()*24));
    // }

    var firstIndexes = [];
    var secondIndexes = [];
    var thirdIndexes = [];

    firstIndexes = [index1,index2];
    secondIndexes = [index3, index4];
    thirdIndexes = [index5, index6];

    firstIndexes.sort(() => Math.random() - 0.5);
    secondIndexes.sort(() => Math.random() - 0.5);
    thirdIndexes.sort(() => Math.random() - 0.5);



    if(this.pickedColor == this.hex1){
      //red

      this.redArray.sort(() => Math.random() - 0.5);
      this.secondRoundRedArray.sort(() => Math.random() - 0.5);
      this.thirdRoundRedArray.sort(() => Math.random() - 0.5);

      this.redArray.splice(firstIndexes.shift(),0,this.pickedEmoji1);
      this.redArray.splice(firstIndexes.shift(),0,this.pickedEmoji2);
      this.secondRoundRedArray.splice(secondIndexes.shift(),0,this.pickedEmoji3);
      this.secondRoundRedArray.splice(secondIndexes.shift(),0,this.pickedEmoji4);
      this.thirdRoundRedArray.splice(thirdIndexes.shift(),0,this.pickedEmoji5);
      this.thirdRoundRedArray.splice(thirdIndexes.shift(),0,this.pickedEmoji6);


      console.log("this is from the insert section")
      console.log('inserted at'+ index1 + this.pickedEmoji1 + 'inserted at'+ index2 + this.pickedEmoji2)
      console.log(this.redArray);
    } else if(this.pickedColor == this.hex2) {
      // //yellow
      this.yellowArray.splice(firstIndexes.shift(),0,this.pickedEmoji1);
      this.yellowArray.splice(firstIndexes.shift(),0,this.pickedEmoji2);
      this.secondRoundYellowArray.splice(secondIndexes.shift(),0,this.pickedEmoji3);
      this.secondRoundYellowArray.splice(secondIndexes.shift(),0,this.pickedEmoji4);
      this.thirdRoundYellowArray.splice(thirdIndexes.shift(),0,this.pickedEmoji5);
      this.thirdRoundYellowArray.splice(thirdIndexes.shift(),0,this.pickedEmoji6);

      console.log(index1,index2,index3,index4,index5, index6);
    } else if(this.pickedColor == this.hex3) {
      //blue
      this.blueArray.splice(firstIndexes.shift(),0,this.pickedEmoji1);
      this.blueArray.splice(firstIndexes.shift(),0,this.pickedEmoji2);
      this.secondRoundBlueArray.splice(secondIndexes.shift(),0,this.pickedEmoji3);
      this.secondRoundBlueArray.splice(secondIndexes.shift(),0,this.pickedEmoji4);
      this.thirdRoundBlueArray.splice(thirdIndexes.shift(),0,this.pickedEmoji5);
      this.thirdRoundBlueArray.splice(thirdIndexes.shift(),0,this.pickedEmoji6);
    }

   }


   authenticated() {
    this.showBoard = false;
    console.log('rows that were selected');
    console.log(this.rows);
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var flag6 = false;

    console.log(this.rows);

    console.log(this.pickedEmoji1);
    console.log(this.pickedEmoji2);
    console.log(this.pickedEmoji3);
    console.log(this.pickedEmoji4);
    console.log(this.pickedEmoji5);
    console.log(this.pickedEmoji6);


    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[0][j].emoji == this.pickedEmoji1) {
        flag = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[1][j].emoji == this.pickedEmoji2) {
        flag2 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[2][j].emoji == this.pickedEmoji3) {
        flag3 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[3][j].emoji == this.pickedEmoji4) {
        flag4 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[4][j].emoji == this.pickedEmoji5) {
        flag5 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[5][j].emoji == this.pickedEmoji6) {
        flag6 = true;
        break;
      }
    }

    console.log(flag, flag2, flag3, flag4, flag5, flag6);

    if(flag && flag2 && flag3 && flag4 && flag5 && flag6) {
      console.log('correctly inputed password');
      this.login = true;

    } else {
      console.log('wrong password');
      this.wrong = true;
    }
    console.log(this.rows);
    this.http.get<any>('http://localhost:3000/athutenticateUser', {params: {rows: JSON.stringify(this.rows), userName: this.loginUser}}).subscribe(res => console.log(res));

    this.rows = [];
    
   }






   insertPasswordRandomly() {

    var index1 = Math.floor(Math.random()*12);
    var index2 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index1 == index2 || index1+1 == index2 || index1-1 == index2) {
    //   index2 = Math.floor(Math.floor(Math.random()*24));
    // }

    var index3 = Math.floor(Math.random()*12);
    var index4 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index3 == index4 || index3+1 == index4 || index3-1 == index4) {
    //   index4 = Math.floor(Math.floor(Math.random()*24));
    // }

    var index5 = Math.floor(Math.random()*12);
    var index6 = Math.floor((Math.floor(Math.random()*12)+12));
    // while(index5 == index6 || index5+1 == index6 || index5-1 == index6) {
    //   index4 = Math.floor(Math.floor(Math.random()*24));
    // }
    var passwordArray = [];
    var firstIndexes = [];
    var secondIndexes = [];
    var thirdIndexes = [];

    firstIndexes = [index1,index2];
    secondIndexes = [index3, index4];
    thirdIndexes = [index5, index6];

    passwordArray = [this.pickedEmoji1, this.pickedEmoji2, this.pickedEmoji3, this.pickedEmoji4,
                     this.pickedEmoji5, this.pickedEmoji6];
    passwordArray.sort(() => Math.random() - 0.5);
    firstIndexes.sort(() => Math.random() - 0.5);
    secondIndexes.sort(() => Math.random() - 0.5);
    thirdIndexes.sort(() => Math.random() - 0.5);

    console.log('this is the random password' + passwordArray);
    if(this.pickedColor == this.hex1){
      //red

      this.redArray.sort(() => Math.random() - 0.5);
      this.secondRoundRedArray.sort(() => Math.random() - 0.5);
      this.thirdRoundRedArray.sort(() => Math.random() - 0.5);

      this.redArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.redArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.secondRoundRedArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.secondRoundRedArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundRedArray.splice(thirdIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundRedArray.splice(thirdIndexes.shift(),0,passwordArray.shift());


      console.log("this is from the insert section")
      console.log('inserted at'+ index1 + this.pickedEmoji1 + 'inserted at'+ index2 + this.pickedEmoji2)
      console.log(this.redArray);
    } else if(this.pickedColor == this.hex2) {
      // //yellow
      this.yellowArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.yellowArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.secondRoundYellowArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.secondRoundYellowArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundYellowArray.splice(thirdIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundYellowArray.splice(thirdIndexes.shift(),0,passwordArray.shift());

      console.log(index1,index2,index3,index4,index5, index6);
    } else if(this.pickedColor == this.hex3) {
      //blue
      this.blueArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.blueArray.splice(firstIndexes.shift(),0,passwordArray.shift());
      this.secondRoundBlueArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.secondRoundBlueArray.splice(secondIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundBlueArray.splice(thirdIndexes.shift(),0,passwordArray.shift());
      this.thirdRoundBlueArray.splice(thirdIndexes.shift(),0,passwordArray.shift());
    }

   }






   authenticatedWithPasswordInAnyOrder() {
    this.showBoard = false;
    console.log('rows that were selected');
    console.log(this.rows);
    var flag = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var flag6 = false;

    console.log(this.pickedEmoji1);
    console.log(this.pickedEmoji2);
    console.log(this.pickedEmoji3);
    console.log(this.pickedEmoji4);
    console.log(this.pickedEmoji5);
    console.log(this.pickedEmoji6);

    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[0][j].emoji == this.pickedEmoji1 ||
        this.rows[0][j].emoji == this.pickedEmoji2 ||
        this.rows[0][j].emoji == this.pickedEmoji3 ||
        this.rows[0][j].emoji == this.pickedEmoji4 ||
        this.rows[0][j].emoji == this.pickedEmoji5 ||
        this.rows[0][j].emoji == this.pickedEmoji6) {
        flag = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[1][j].emoji == this.pickedEmoji1 ||
        this.rows[1][j].emoji == this.pickedEmoji2 ||
        this.rows[1][j].emoji == this.pickedEmoji3 ||
        this.rows[1][j].emoji == this.pickedEmoji4 ||
        this.rows[1][j].emoji == this.pickedEmoji5 ||
        this.rows[1][j].emoji == this.pickedEmoji6) {
        flag2 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[2][j].emoji == this.pickedEmoji1 ||
        this.rows[2][j].emoji == this.pickedEmoji2 ||
        this.rows[2][j].emoji == this.pickedEmoji3 ||
        this.rows[2][j].emoji == this.pickedEmoji4 ||
        this.rows[2][j].emoji == this.pickedEmoji5 ||
        this.rows[2][j].emoji == this.pickedEmoji6) {
        flag3 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[3][j].emoji == this.pickedEmoji1 ||
        this.rows[3][j].emoji == this.pickedEmoji2 ||
        this.rows[3][j].emoji == this.pickedEmoji3 ||
        this.rows[3][j].emoji == this.pickedEmoji4 ||
        this.rows[3][j].emoji == this.pickedEmoji5 ||
        this.rows[3][j].emoji == this.pickedEmoji6) {
        flag4 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[4][j].emoji == this.pickedEmoji1 ||
        this.rows[4][j].emoji == this.pickedEmoji2 ||
        this.rows[4][j].emoji == this.pickedEmoji3 ||
        this.rows[4][j].emoji == this.pickedEmoji4 ||
        this.rows[4][j].emoji == this.pickedEmoji5 ||
        this.rows[4][j].emoji == this.pickedEmoji6) {
        flag5 = true;
        break;
      }
    }
    for(var j=0;j<this.rows[0].length;j++) {
      if(this.rows[5][j].emoji == this.pickedEmoji1 ||
        this.rows[5][j].emoji == this.pickedEmoji2 ||
        this.rows[5][j].emoji == this.pickedEmoji3 ||
        this.rows[5][j].emoji == this.pickedEmoji4 ||
        this.rows[5][j].emoji == this.pickedEmoji5 ||
        this.rows[5][j].emoji == this.pickedEmoji6) {
        flag6 = true;
        break;
      }
    }
    

    console.log(flag, flag2, flag3, flag4, flag5, flag6);

    if(flag && flag2 && flag3 && flag4 && flag5 && flag6) {
      console.log('correctly inputed password');
      this.login = true;

    } else {
      console.log('wrong password');
      this.wrong = true;
    }

    this.rows = [];

   }














   upddateStateToSingUp() {
     this.state = "1";
     this.round = 1;
     this.login = false;
     this.wrong = false;
     this.showSignUp = true;
     this.showLogin = false;
     this.showBoard = false;
     this.pickedEmoji1 = "";
     this.pickedEmoji2 = "";
     this.pickedEmoji3 = "";
     this.pickedEmoji4 = "";
     this.pickedEmoji5 = "";
     this.pickedEmoji6 = "";
     this.pickedColor = "";
     this.intializeSignUpPhase();
   }

   changeStateToLogin() {
     this.login = false;
     this.wrong = false;
     this.round = 1;
    this.goToNextStep(1);
  }

}

interface Candidates {
  rCandidates: [],
  bCandidates: [],
  yCandidates: []
}
