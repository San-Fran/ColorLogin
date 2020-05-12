var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var CryptoJS = require("crypto-js");

var mongoose = require("mongoose");

mongoose.connect("mongodb://user:abc123@ds147551.mlab.com:47551/graphicalpassword");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
  })

  var userSchema = new mongoose.Schema({
      userName: String,
      color: String,
      e1: String,
      e2: String,
      e3: String,
      e4: String,
      e5: String,
      e6: String,
      e1Hash: String,
      e2Hash: String,
      e3Hash: String,
      e4Hash: String,
      e5Hash: String,
      e6Hash: String,
      redArray: [],
      blueArray: [],
      yellowArray: [],
      secondRoundBlueArray: [],
      secondRoundRedArray: [],
      secondRoundYellowArray: [],
      thirdRoundBlueArray: [],
      thirdRoundRedArray: [],
      thirdRoundYellowArray: [],
      ciphertext: String

  })

var User = mongoose.model("User",userSchema);



var bPeople = ["🤲", "🤞", "🧙", "🤒", "👥", "😌", "💄", "👠", "🤓", "🧦", "🧣", "😊", "😸", "😥", "😿", "😶", "🤛", "🎒", "🤖", "🤔", "👓", "😉", "👂", "😋", "😮", "🤫", "👢", "😐", "😷", "😗", "🤙", "👎", "💪", "🗣", "🤯", "👻", "🖕", "👙", "🧢", "👑", "👡", "😻", "👈", "👽", "😯", "👊", "👐", "😍", "🤮", "🙀", "😇", "😲", "😵", "👏", "✋", "😛", "👖", "👞"];
var bAnimals = ["🌜", "🦒", "🐣", "🦆", "🐧", "🙈", "🐰", "🕊", "🌰", "🌻", "🌍", "🦊", "🌸", "🍀", "🍂", "🐁", "🕷", "🐀", "🦐", "🐝", "🦀", "🐿", "🐊", "🐢", "⚡", "🌴", "🦖", "🐖", "🦔", "🐯", "💧", "🦈", "🌙", "🌞", "🌹", "💐", "🐹", "🌵", "☂", "🦅", "🌖", "🐔", "🌈", "🌺", "🐈", "🐺", "🐓", "🦁", "🐮", "☔", "🐻", "🌼", "⛅", "🐜", "🌑", "🙉"];
var bFood = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥦", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🥨", "🥞", "🧀"];
var bActivities = ["🏑", "🏋", "🏄", "🕴", "🧗", "🚴", "🏈", "🏂", "🎪", "♟", "🏹", "🎼", "🏌", "⛹", "🛷", "🏓", "🎱", "🥇", "🎰", "🎧", "🎣", "🛶", "🏏", "🥊"];
var bPlaces = ["🚞", "🏬", "🚈", "🏖", "🏡", "🚂", "⛰", "🏔", "🏦", "🚆", "🏨", "🌆", "🕍", "🗻", "🏭", "🏜", "💒", "🌃", "🏰", "🚅", "🗿", "💺", "🏟", "💴", "💒", "🛂", "🛬", "⛩", "🏞", "🏫", "⛱", "⛲", "🏤", "💷", "🏯", "🚠", "🏙", "💵", "🎢", "🏠", "⛺", "🗾", "🏣", "🛴", "🚝", "🛣"];
var bObjects = ["⛓", "📬", "📊", "📎", "💷", "💵", "📮", "📅", "🖌", "📂", "📦", "📭", "🗂", "📧", "💸", "🖍", "✂", "📤", "📁", "📙", "🛌", "🛎", "🕰", "🕹", "⏲", "⏱", "🗃", "📱", "🎎", "🔪", "📇", "🎏", "🖋", "🛢", "🚪", "⌚", "📟", "📪", "🗺", "🚰", "🏺", "📫", "☎", "💌", "🗄", "⏳", "📠", "🔎", "🔋", "💴", "🛁", "🖥", "🔧", "🔗", "🕳", "🔬"];
var bSymbols = ["🆘", "🈲", "6️⃣", "🔷", "🈵", "🆔", "🔶", "3️⃣", "🈺", "2️⃣", "🔆", "⏏", "〽", "🔤", "🈸", "♑", "🆚", "✅", "⏹", "🉑", "📶", "❎", "♐", "🆕", "🔀", "✔", "⬜", "🔰", "⏫", "♊", "⬆", "🃏", "💚", "♦", "🕑", "🔲", "™", "🕣", "🈂", "💤", "©", "♾", "⏬", "💘", "🔣", "📳", "♥", "〰", "🛐", "◀", "🕢", "💔", "❌", "🈯", "💝", "®", "💹", "🆑", "🏧", "🕞", "⛎", "⁉", "🗨", "📵", "⏪", "⤵", "🕉", "🔹", "❔", "❕", "🔇", "⬅", "🚻", "💈", "❣", "🚭", "🔢", "⚪", "💞", "㊗", "📴", "☮", "☦", "🈳", "💯"];
var bFlags = ["🇬🇲", "🇦🇨", "🇧🇿", "🇦🇹", "🇬🇧", "🇪🇦", "🇫🇷", "🇪🇨", "🎌", "🇧🇮", "🇩🇿", "🇩🇴", "🇬🇳", "🇪🇷", "🇦🇮", "🇦🇼", "🇨🇮", "🇫🇲", "🇬🇩", "🇨🇦", "🇧🇼", "🇧🇲", "🇦🇩", "🇬🇵", "🇩🇬", "🇩🇰", "🇧🇹", "🇬🇭", "🇪🇭", "🇩🇪", "🇧🇻", "🇧🇾", "🇪🇪", "🇦🇲", "🇩🇯", "🇨🇱", "🇩🇲", "🚩", "🇫🇮", "🏁", "🇦🇷", "🇫🇴", "🇬🇮", "🇪🇹", "🇧🇳", "🇦🇺", "🇳🇪", "🇸🇰", "🇲🇩", "🇲🇻", "🇹🇬", "🇹🇩", "🇻🇺", "🇪🇺", "🇹🇹", "🏳️‍🌈", "🇸🇩", "🇧🇬", "🇱🇾", "🇰🇷", "🇬🇦", "🇳🇷", "🇸🇨", "🇸🇹", "🇸🇬", "🇸🇧", "🇨🇩", "🇵🇲", "🇬🇫", "🇬🇪", "🇸🇳", "🇧🇴", "🇴🇲", "🇬🇬", "🇳🇴", "🇲🇭", "🇪🇬", "🇨🇫", "🇬🇱", "🇫🇯", "🇰🇼", "🇳🇱", "🇸🇮", "🇵🇱", "🇨🇿", "🇫🇰", "🇱🇻", "🇱🇨", "🏳"];


var rPeople = ["👞", "😫", "👟", "👀", "👝", "👛", "👆", "👅", "😆", "👌", "🤘", "😁", "😼", "👹", "🤜", "🤝", "💩", "😧", "😢", "😩", "💍", "😜", "😳", "🧘", "🖐", "😾", "👇", "😑", "👔", "🤳", "✍", "😄", "😞", "😰", "🙏", "🤧", "😎", "👜", "😺", "🙁", "😃", "🙄", "🤭", "😖", "🤐", "🤤", "😽", "🙃", "🤣", "😭", "😣", "🙂", "🧤", "🤕", "😕", "🤨", "💀", "😨"];
var rAnimals = ["🌝", "⛄☄", "🐒", "🦌", "🐸", "🙊", "💥", "🎋", "🐙", "🐐", "🐱", "💦", "🥀", "🌐", "🐲", "🐦", "🌊", "🦓", "🐤", "🌬", "🔥", "💮", "🐋", "🌟", "🦍", "🐑", "🐶", "🌚", "🐕", "🍄", "🌥", "🐟", "🌳", "🐡", "🐠", "🌾", "🌱", "⭐", "🦂", "🐫", "🐪", "🌛", "🌧", "🌷", "🐛", "🦋", "🦗", "🌠", "🦇", "🐳", "🐘", "🐅", "🦑", "🦄", "🦉"];
var rFood = ["🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🍡", "🥟"];
var rActivities = ["🎲", "🤽", "🥁", "🏇", "🏉", "🎨", "🏆", "🏅", "🎭", "⛸", "🎹", "⛳", "🏀", "🎺", "🏊", "🎫", "🎤", "🤸", "🎾", "🥋", "🎯", "🎻", "🎗", "🎸"];
var rPlaces = ["🌇", "🎡", "⛪", "🌋", "🛵", "🏬", "🚓", "🚤", "🎆", "🚣", "⛴", "🌠", "🚍", "🛥", "🚊", "🏯", "🌅", "🚃", "🏝", "🎇", "💶", "🛳", "🏗", "🚜", "🏢", "🚌", "🛸", "🚗", "🚛", "🛤", "🕋", "🚉", "🚑", "🚢", "🚋", "🛫", "🛄", "🚄", "🗼", "🌄", "🚟", "🚇", "🚒", "🚧", "🏪", "🚨"];
var rObjects = ["📍", "🗿", "📋", "🏷", "🎛", "🖨", "🗝", "📗", "🔖", "💣", "🎈", "💡", "📆", "🔭", "🔍", "📉", "🛀", "🖇", "💊", "🎙", "📘", "📹", "🗳", "📑", "🚿", "🔓", "🖲", "🔌", "🎉", "📝", "📌", "⛏", "🎁", "🛍", "📡", "📿", "🔒", "📺", "🎐", "⚔", "📷", "🔐", "🎀", "🖊", "📲", "⏰", "📩", "⌨", "💻", "🔫", "💶", "💰", "📏", "🔮"];
var rSymbols = ["🎶", "🚳", "⚜", "❤", "🆗", "🛑", "☯", "🔃", "🕜", "🔱", "🚫", "🖤", "🔯", "🚺", "🕖", "7️⃣", "🕗", "5️⃣", "↙", "🔵", "0️⃣", "💬", "🔂", "📣", "♉", "🔉", "9️⃣", "⏩", "👁️‍🗨️", "🚼", "🈁", "♍", "🕔", "🔔", "🉐", "🔁", "💛", "🕧", "💠", "💙", "♣", "⭕", "🔚", "🚯", "🔴", "🕟", "🆓", "🔝", "🔳", "♎", "🔞", "🕒", "🚷", "⬇", "📛", "🔙", "8️⃣", "💜", "🔊", "✖", "✴", "🌀", "🔜", "🎦", "❗", "🔼", "🔸", "🔽", "🆙", "🆒", "🈶", "🅰", "🔟", "➖", "🕥", "🔄", "✝", "↘", "☪", "🧡", "🚹", "🚮", "💕", "🕕", "↕", "♓"];
var rFlags = ["🇪🇸", "🇨🇰", "🇬🇶", "🇸🇦", "🇧🇶", "🇦🇱", "🇨🇽", "🇵🇳", "🇲🇫", "🇰🇾", "🇿🇲", "🇬🇷", "🇺🇲", "🇧🇫", "🇲🇪", "🇸🇸", "🇮🇱", "🇭🇲", "🇰🇬", "🏴", "🇳🇮", "🇹🇷", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇨🇳", "🇵🇪", "🇮🇨", "🇵🇷", "🇸🇪", "🇳🇺", "🇯🇪", "🇰🇭", "🇺🇿", "🇲🇼", "🇦🇸", "🇲🇬", "🇦🇫", "🇼🇸", "🇹🇫", "🇰🇿", "🇽🇰", "🇹🇳", "🇧🇦", "🇧🇪", "🇬🇼", "🇭🇰", "🇸🇽", "🇦🇪", "🇱🇮", "🇦🇬", "🇱🇹", "🇵🇹", "🇨🇬", "🇮🇷", "🇹🇲", "🇦🇶", "🇲🇦", "🇻🇬", "🇦🇽", "🇧🇷", "🇭🇳", "🇲🇸", "🇳🇵", "🇰🇳", "🇹🇱", "🇵🇬", "🇮🇸", "🇨🇴", "🇻🇮", "🇵🇫", "🇹🇦", "🇱🇦", "🇸🇾", "🇷🇺", "🇧🇩", "🇨🇺", "🇮🇶", "🇮🇪", "🇯🇵", "🇵🇰", "🇭🇹", "🇮🇹", "🇧🇱", "🇯🇲", "🇦🇿", "🇨🇼", "🇰🇵", "🇸🇭", "🇧🇸"];



var yPeople = ["😡", "👘", "😙", "😂", "🧐", "🤢", "🙌", "👚", "😅", "🤑", "😀", "😟", "😤", "😱", "😠", "😹", "👕", "🤥", "😝", "😪", "😔", "🤬", "😒", "😈", "😓", "😦", "👋", "👿", "🧠", "👗", "🤪", "👺", "😬", "🤠", "👉", "💅", "💼", "👾", "😏", "🤡", "👒", "👃", "⛑", "🤩", "👍", "🖖", "🧥", "😴", "☝", "🎃", "✊", "👄", "🤚", "🤟", "💋", "👤", "🤗"];
var yAnimals = ["🐂", "⛈", "🌦", "🐍", "🐉", "🌘", "💨", "🌒", "🌿", "🦃", "🐨", "🐌", "🍃", "🐬", "🐇", "🏵", "🐵", "🐏", "🌓", "🌎", "🦕", "🌔", "🍁", "🌨", "🐴", "🐄", "🦎", "🐃", "☃", "🦏", "🐥", "🌗", "🌫", "🐎", "🐞", "🌲", "🎍", "🐽", "🐚", "🐆", "🌏", "🐗", "🎄", "🌤", "🐼", "🌪", "🌕", "🌩", "🐭", "☀", "❄", "🐩", "🐷"];
var yFood = ["🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🥧", "🍫", "🍬", "🍭", "🍮", "🍼", "🥛", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🥢", "🍽", "🍴", "🥄"];
var yActivities = ["🎽", "🥉", "🎳", "🎖", "🏸", "🏐", "🤾", "⚽", "⛷", "⚾", "🤹", "🥅", "🚣", "🏒", "🥌", "🎬", "🎮", "🎿", "🥈", "🎷", "🎟"];
var yPlaces = ["🏭", "⛵", "🎠", "🏪", "🚥", "🕌", "🗽", "🎑", "🌁", "🚕", "🌉", "⛽", "🏛", "🌌", "🚏", "🚀", "🚦", "🏫", "🚐", "🚡", "🚲", "🏩", "🛅", "🏎", "🏰", "🚎", "🚔", "✈", "🏍", "🏕", "⚓", "🚚", "🛰", "🛩", "🚁", "🏚", "🚖", "🚘", "🛃", "🏘", "🏥"];
var yObjects = ["💳", "💉", "⌛", "⚰", "📕", "📸", "📯", "🏮", "📐", "📚", "🗞", "📰", "🕯", "📞", "🎚", "🛒", "💾", "🎊", "🖼", "📨", "🔏", "🚬", "🗒", "🗓", "⚱", "🔦", "🔩", "📻", "🛋", "🎞", "📜", "📓", "📼", "🌡", "⛱", "🗑", "📈", "💈", "💽", "🔑", "📥", "💿", "🔨", "🛠", "📖", "📔", "🚽", "📀", "🛡", "🎥", "📽", "🗜", "🗡", "🛏"];
var ySymbols = ["🕤", "♻", "⤴", "1️⃣", "🕝", "❇", "⚛", "🎴", "🕘", "💟", "♏", "🕙", "➕", "♠", "🕛", "#️⃣", "⬛", "☢", "↩", "⚫", "🎵", "💖", "🚰", "🔡", "🕠", "♨", "🈹", "🅿", "🔺", "♒", "4️⃣", "🔕", "♈", "🅱", "↔", "🗯", "➗", "🔠", "🕚", "🚸", "💗", "🔻", "🕦", "☸", "⛔", "♋", "💢", "✡", "🚾", "🚱", "🕓", "♌", "㊙", "✳", "♿", "↗", "‼", "🆎", "📢", "💓", "🈴", "🆖", "💭", "🔅", "🔈", "☑", "💱", "↖", "🔛", "📯", "🕡", "🕐", "🕎", "▶", "🈷", "❓", "➡", "☣", "↪", "🔘", "🈚", "🀄", "💲"];
var yFlags = ["🇷🇪", "🇲🇾", "🇨🇭", "🇹🇨", "🇬🇸", "🇮🇳", "🇺🇾", "🇨🇷", "🇨🇨", "🇬🇾", "🇧🇧", "🇱🇷", "🇮🇴", "🇮🇩", "🇧🇯", "🇹🇯", "🇨🇲", "🇶🇦", "🇨🇻", "🇸🇲", "🇲🇽", "🇦🇴", "🇬🇹", "🇰🇪", "🇯🇴", "🇧🇭", "🇳🇦", "🇨🇾", "🇰🇮", "🇰🇲", "🇳🇫", "🇨🇵", "🇬🇺", "🇲🇰", "🇵🇼", "🇮🇲", "🇭🇺", "🇹🇴", "🇸🇴", "🇲🇿", "🇱🇰", "🇲🇺", "🇲🇳", "🇱🇸", "🇻🇦", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇼🇫", "🇹🇻", "🇷🇼", "🇾🇹", "🇲🇨", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇵🇸", "🇲🇲", "🇲🇹", "🇱🇺", "🇷🇴", "🇻🇳", "🇷🇸", "🇳🇿", "🇱🇧", "🇳🇬", "🇲🇱", "🇲🇵", "🇲🇷", "🇻🇪", "🇸🇷", "🇵🇦", "🇲🇴", "🇵🇭", "🇸🇿", "🏴󠁵󠁳󠁴󠁸󠁿", "🇵🇾", "🇳🇨", "🇹🇭", "🇸🇻", "🇹🇿", "🇺🇬", "🇸🇱", "🇾🇪", "🇹🇼", "🇺🇦", "🇿🇼", "🇻🇨", "🇹🇰", "🇸🇯", "🇲🇶"];




// var bCandidates = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "🇮🇸", "🏬", "🕐", "🎦", "💹", "☸️", "📴", "📐", "🖱️", "🇭🇹", "🇸🇳", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽","🏛", "🏗", "🏠", "🏡", "🏢", "🏣","💌", "🕳", "💣", "🛀", "🛌", "🔪", "🏺", "🗺", "💈", "🛢", "🛎", "⌛"];
// var rCandidates = ["😂", "🙂", "🙃", "😉", "😊", "😇", "😍", "🤩", "😗","🐈", "🦁", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌","🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅","🏨", "🏩", "🏪", "🏫", "🏬", "🏭","🎊", "🎎", "🎏", "🎐", "🎀", "🎁", "🔮", "🕹", "🖼", "🛍"];
// var yCandidates = ["🙈", "🙉", "🙊", "💥","💫", "💦", "💨", "🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🐱","🍈", "🍉", "🍊", "🍋", "🍍", "🍎","🚣", "🗾", "🏔", "⛰", "🌋", "🗻", "🏕", "🏖", "🏜", "🏝", "🏞", "🏟","⏳","⌚", "⏰", "⏱", "⏲", "🕰", "🌡", "⛱", "🎈", "🎉"];
var bCandidates;
var rCandidates;
var yCandidates;
var blueArray;
var redArray;
var yellowArray;
var secondRoundBlueArray;
var secondRoundRedArray;
var secondRoundYellowArray;
var thirdRoundBlueArray;
var thirdRoundRedArray;
var thirdRoundYellowArray;

// console.log(rPeople.indexOf(""), rAnimals.indexOf(""),rFood.indexOf(""),rActivities.indexOf(""),rPlaces.indexOf(""),rObjects.indexOf(""), rSymbols.indexOf(""), rFlags.indexOf(""));
// console.log(bPeople.indexOf(""), bAnimals.indexOf(""),bFood.indexOf(""),bActivities.indexOf(""),bPlaces.indexOf(""),bObjects.indexOf(""), bSymbols.indexOf(""), bFlags.indexOf(""));
// console.log(yPeople.indexOf(""), yAnimals.indexOf(""),yFood.indexOf(""),yActivities.indexOf(""),yPlaces.indexOf(""),yObjects.indexOf(""), ySymbols.indexOf(""), yFlags.indexOf(""));


function getEmojis() {

bPeople.sort(() => Math.random() - 0.5)
bAnimals.sort(() => Math.random() - 0.5)
bFood.sort(() => Math.random() - 0.5)
bActivities.sort(() => Math.random() - 0.5)
bPlaces.sort(() => Math.random() - 0.5)
bObjects.sort(() => Math.random() - 0.5)
bSymbols.sort(() => Math.random() - 0.5)
bFlags.sort(() => Math.random() - 0.5)

rPeople.sort(() => Math.random() - 0.5)
rAnimals.sort(() => Math.random() - 0.5)
rFood.sort(() => Math.random() - 0.5)
rActivities.sort(() => Math.random() - 0.5)
rPlaces.sort(() => Math.random() - 0.5)
rObjects.sort(() => Math.random() - 0.5)
rSymbols.sort(() => Math.random() - 0.5)
rFlags.sort(() => Math.random() - 0.5)

yPeople.sort(() => Math.random() - 0.5)
yAnimals.sort(() => Math.random() - 0.5)
yFood.sort(() => Math.random() - 0.5)
yActivities.sort(() => Math.random() - 0.5)
yPlaces.sort(() => Math.random() - 0.5)
yObjects.sort(() => Math.random() - 0.5)
ySymbols.sort(() => Math.random() - 0.5)
yFlags.sort(() => Math.random() - 0.5)




console.log(bPeople.slice(0,5));
bCandidates = bPeople.slice(0,5).concat(bAnimals.slice(0,5)).concat(bFood.slice(0,5)).concat(bActivities.slice(0,5))
                  .concat(bPlaces.slice(0,5)).concat(bObjects.slice(0,5)).concat(bSymbols.slice(0,5)).concat(bFlags.slice(0,5));

rCandidates = rPeople.slice(0,5).concat(rAnimals.slice(0,5)).concat(rFood.slice(0,5)).concat(rActivities.slice(0,5))
                  .concat(rPlaces.slice(0,5)).concat(rObjects.slice(0,5)).concat(rSymbols.slice(0,5)).concat(rFlags.slice(0,5));


yCandidates = yPeople.slice(0,5).concat(yAnimals.slice(0,5)).concat(yFood.slice(0,5)).concat(yActivities.slice(0,5))
                  .concat(yPlaces.slice(0,5)).concat(yObjects.slice(0,5)).concat(ySymbols.slice(0,5)).concat(yFlags.slice(0,5));


console.log(bCandidates.length);
bCandidates.sort(() => Math.random() - 0.5);
rCandidates.sort(() => Math.random() - 0.5);
yCandidates.sort(() => Math.random() - 0.5);

// var blueArray = ["👷", "🛍️", "🏎️", "🔛", "🔙", "🗼", "🎖️", "🚺", "🐹", "🥖", "🇵🇷", "🎡", "🔍", "🏟️", "🖥️", "🌭", "🇹🇭", "✡️", "🏒", "🛀", "📅", "🖋️", "🇸🇪", "🎞️", "🎪", "🍙", "🛁"];
// var redArray = ["📕", "👒", "🖇️", "❔", "🎄", "🕸️", "🥜", "🕴️", "🥟", "↙️", "◾", "🐲", "🏴", "🦌", "🆔", "👛", "🚚", "↪️", "🇬🇷", "📿", "🌫️", "🌂", "🕉️", "🆚", "📉", "🗨️", "🛒"];
// var yellowArray = ["📛", "🇳🇱", "🐿️", "🅾️", "☢️", "🇲🇦", "🐃", "⛽", "🅿️", "🦇", "⤴️", "⛵", "👞", "🔓", "🧞", "⛰️", "📎", "🦎", "🔌", "🏳️", "🚽", "🍲", "⚒️", "♊", "👢", "🧙", "🇵🇱"]


// var secondRoundBlueArray = ["😺", "🥞", "🏄", "🔨", "🏝️", "🔆", "👥", "👓", "🥒", "🏈", "🇵🇭", "🏋️", "0️⃣", "🚘", "🦖", "🌕", "🎭", "👾", "🍳", "🏵️", "🍧", "🔗", "🕋", "☃️", "🌅", "🤴", "🖖", "🐊"];
// var secondRoundRedArray = ["🐘", "🌤️", "🥑", "🥚", "⛈️", "🐵", "🔜", "🍶", "🐄", "🇻🇪", "🐮", "🦈", "🚲", "⛔", "🕯️", "➕", "🔺", "💇", "🧠", "📻", "🥤", "🍝", "🍥", "💴", "🌬️", "🥓", "🙍"]
// var secondRoundYellowArray = ["🤖","⚓", "👰", "🐂", "📽️", "🏅", "⛅", "🇦🇪", "🇵🇪", "🧜", "📮", "⛳", "🔽", "🚂", "🏌️", "🐇", "🏍️", "🎲", "🥛", "🎣", "👱", "🎏", "🕷️", "🦍", "🔘", "🐅", "🏇"]

// var thirdRoundBlueArray = ["📯", "👜", "🏘️", "🐫", "⛺", "👩‍🏫", "🕳️", "🏯", "🌓", "🌉", "8️⃣", "💂", "🔉", "👨‍👩‍👧‍👦", "🇪🇺", "🚜", "🔕", "📥", "🌔", "🏙️", "🥨", "🇲🇾", "📘", "📗", "📜", "♏", "🇧🇴", "🏜️"];
// var thirdRoundRedArray = ["🍘", "🛬", "🌯", "🏗️", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🚼", "🏞️", "🔈", "🕰️", "🏓", "🇨🇷", "👨‍🌾", "🦃", "🔦", "🔃", "🇸🇻", "🛳️", "🌘", "🇧🇩", "🧛", "👩‍❤️‍👩", "🔚", "🔟", "ℹ️", "🛢️", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇸🇩"];
// var thirdRoundYellowArray = ["👩‍🚀", "🔭", "🇮🇶", "🎍", "🥣", "🌗", "↖️", "🎳", "👨‍❤️‍💋‍👨", "👨‍🏫", "📄", "🇶🇦", "👨‍👩‍👧", "🎚️", "🛠️", "🆓", "🇵🇸", "🏛️", "♐", "🧦", "🗾", "👩‍🌾", "🎑", "🇬🇹", "🧤", "🧝", "➿"];


//first round;
blueArray = bPeople.slice(bPeople.length-4,bPeople.length).concat(bAnimals.slice(bAnimals.length-4,bAnimals.length)).concat(
    bFood.slice(bFood.length-4,bFood.length)).concat(bActivities.slice(bActivities.length-3,bActivities.length))
    .concat(bPlaces.slice(bPlaces.length-3,bPlaces.length)).concat(bObjects.slice(bObjects.length-3,bObjects.length))
    .concat(bSymbols.slice(bSymbols.length-3,bSymbols.length)).concat(bFlags.slice(bFlags.length-3,bFlags.length));

redArray = rPeople.slice(rPeople.length-4,rPeople.length).concat(rAnimals.slice(rAnimals.length-4,rAnimals.length)).concat(
    rFood.slice(rFood.length-4,rFood.length)).concat(rActivities.slice(rActivities.length-3,rActivities.length))
    .concat(rPlaces.slice(rPlaces.length-3,rPlaces.length)).concat(rObjects.slice(rObjects.length-3,rObjects.length))
    .concat(rSymbols.slice(rSymbols.length-3,rSymbols.length)).concat(rFlags.slice(rFlags.length-3,rFlags.length));

yellowArray = yPeople.slice(yPeople.length-4,yPeople.length).concat(yAnimals.slice(yAnimals.length-4,yAnimals.length)).concat(
    bFood.slice(yFood.length-4,yFood.length)).concat(yActivities.slice(yActivities.length-3,yActivities.length))
    .concat(yPlaces.slice(yPlaces.length-3,yPlaces.length)).concat(yObjects.slice(yObjects.length-3,yObjects.length))
    .concat(ySymbols.slice(ySymbols.length-3,ySymbols.length)).concat(yFlags.slice(yFlags.length-3,yFlags.length));
    console.log(blueArray.length, redArray.length, yellowArray.length);


    // second round
    secondRoundBlueArray = bPeople.slice(bPeople.length-9,bPeople.length-5).concat(bAnimals.slice(bAnimals.length-9,bAnimals.length-5)).concat(
        bFood.slice(bFood.length-9,bFood.length-5)).concat(bActivities.slice(bActivities.length-8,bActivities.length-5))
        .concat(bPlaces.slice(bPlaces.length-8,bPlaces.length-5)).concat(bObjects.slice(bObjects.length-8,bObjects.length-5))
        .concat(bSymbols.slice(bSymbols.length-8,bSymbols.length-5)).concat(bFlags.slice(bFlags.length-8,bFlags.length-5));
    
    secondRoundRedArray = rPeople.slice(rPeople.length-9,rPeople.length-5).concat(rAnimals.slice(rAnimals.length-9,rAnimals.length-5)).concat(
        rFood.slice(rFood.length-9,rFood.length-5)).concat(rActivities.slice(rActivities.length-8,rActivities.length-5))
        .concat(rPlaces.slice(rPlaces.length-8,rPlaces.length-5)).concat(rObjects.slice(rObjects.length-8,rObjects.length-5))
        .concat(rSymbols.slice(rSymbols.length-8,rSymbols.length-5)).concat(rFlags.slice(rFlags.length-8,rFlags.length-5));
    
    secondRoundYellowArray = yPeople.slice(yPeople.length-9,yPeople.length-5).concat(yAnimals.slice(yAnimals.length-9,yAnimals.length-5)).concat(
        bFood.slice(yFood.length-9,yFood.length-5)).concat(yActivities.slice(yActivities.length-8,yActivities.length-5))
        .concat(yPlaces.slice(yPlaces.length-8,yPlaces.length-5)).concat(yObjects.slice(yObjects.length-8,yObjects.length-5))
        .concat(ySymbols.slice(ySymbols.length-8,ySymbols.length-5)).concat(yFlags.slice(yFlags.length-8,yFlags.length-5));
        console.log(secondRoundBlueArray.length, secondRoundRedArray.length, secondRoundYellowArray.length);
    

    //third round
    thirdRoundBlueArray = bPeople.slice(bPeople.length-14,bPeople.length-10).concat(bAnimals.slice(bAnimals.length-14,bAnimals.length-10)).concat(
        bFood.slice(bFood.length-14,bFood.length-10)).concat(bActivities.slice(bActivities.length-13,bActivities.length-10))
        .concat(bPlaces.slice(bPlaces.length-13,bPlaces.length-10)).concat(bObjects.slice(bObjects.length-13,bObjects.length-10))
        .concat(bSymbols.slice(bSymbols.length-13,bSymbols.length-10)).concat(bFlags.slice(bFlags.length-13,bFlags.length-10));
    
    thirdRoundRedArray = rPeople.slice(rPeople.length-14,rPeople.length-10).concat(rAnimals.slice(rAnimals.length-14,rAnimals.length-10)).concat(
        rFood.slice(rFood.length-14,rFood.length-10)).concat(rActivities.slice(rActivities.length-13,rActivities.length-10))
        .concat(rPlaces.slice(rPlaces.length-13,rPlaces.length-10)).concat(rObjects.slice(rObjects.length-13,rObjects.length-10))
        .concat(rSymbols.slice(rSymbols.length-13,rSymbols.length-10)).concat(rFlags.slice(rFlags.length-13,rFlags.length-10));
    
    thirdRoundYellowArray = yPeople.slice(yPeople.length-14,yPeople.length-10).concat(yAnimals.slice(yAnimals.length-14,yAnimals.length-10)).concat(
        bFood.slice(yFood.length-14,yFood.length-10)).concat(yActivities.slice(yActivities.length-13,yActivities.length-10))
        .concat(yPlaces.slice(yPlaces.length-13,yPlaces.length-10)).concat(yObjects.slice(yObjects.length-13,yObjects.length-10))
        .concat(ySymbols.slice(ySymbols.length-13,ySymbols.length-10)).concat(yFlags.slice(yFlags.length-13,yFlags.length-10));
        console.log(thirdRoundBlueArray.length, thirdRoundRedArray.length, thirdRoundYellowArray.length);
    

}



app.get("/getEmojis", function(req, res) {
    getEmojis();
    // var data = ["a","b","c"]
    var data = "🐘";
    var data2 = "🐘";
// var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
// console.log(ciphertext);
// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    res.status(200).json({
        bCandidates: bCandidates,
        rCandidates: rCandidates,
        yCandidates: yCandidates,
        blueArray: blueArray,
        redArray: redArray,
        yellowArray: yellowArray,
        secondRoundBlueArray: secondRoundBlueArray,
        secondRoundRedArray: secondRoundRedArray,
        secondRoundYellowArray: secondRoundYellowArray,
        thirdRoundBlueArray: thirdRoundBlueArray,
        thirdRoundRedArray: thirdRoundRedArray,
        thirdRoundYellowArray: thirdRoundYellowArray
      })
})


app.get("/createUser", function(req, res) {

    console.log(req.query.userName);
    console.log(req.query.e1);
    console.log(req.query.e2);
    console.log(req.query.e3);
    console.log(req.query.e4);
    console.log(req.query.e5);
    // //red
    // hex1 = '#ff8a80';
    // //yellow
    // hex2 = '#ffcc80';
    // //blue
    // hex3 = '#90caf9';

    // var index1 = Math.floor(Math.random()*12);
    // var index2 = Math.floor((Math.floor(Math.random()*12)+12));

    // var index3 = Math.floor(Math.random()*12);
    // var index4 = Math.floor((Math.floor(Math.random()*12)+12));

    // var index5 = Math.floor(Math.random()*12);
    // var index6 = Math.floor((Math.floor(Math.random()*12)+12));

    // var firstIndexes = [];
    // var secondIndexes = [];
    // var thirdIndexes = [];

    // firstIndexes = [index1,index2];
    // secondIndexes = [index3, index4];
    // thirdIndexes = [index5, index6];

    // firstIndexes.sort(() => Math.random() - 0.5);
    // secondIndexes.sort(() => Math.random() - 0.5);
    // thirdIndexes.sort(() => Math.random() - 0.5);



    // if(req.query.color == hex1){
    //   //red

    //   req.query.redArray.sort(() => Math.random() - 0.5);
    //   req.query.secondRoundRedArray.sort(() => Math.random() - 0.5);
    //   req.query.thirdRoundRedArray.sort(() => Math.random() - 0.5);

    //   req.query.redArray.splice(index1,0,req.query.e1);
    //   req.query.redArray.splice(index2,0,req.query.e2);
    //   req.query.secondRoundRedArray.splice(index3,0,req.query.e3);
    //   req.query.secondRoundRedArray.splice(index4,0,req.query.e4);
    //   req.query.thirdRoundRedArray.splice(index5,0,req.query.e5);
    //   req.query.thirdRoundRedArray.splice(index6,0,req.query.e6);

    // } else if(req.query.color == hex2) {
    //   // //yellow
    //   req.query.yellowArray.splice(index1,0,req.query.e1);
    //   req.query.yellowArray.splice(index2,0,req.query.e2);
    //   req.query.secondRoundYellowArray.splice(index3,0,req.query.e3);
    //   req.query.secondRoundYellowArray.splice(index4,0,req.query.e4);
    //   req.query.thirdRoundYellowArray.splice(index5,0,req.query.e5);
    //   req.query.thirdRoundYellowArray.splice(index6,0,req.query.e6);

    //   console.log(index1,index2,index3,index4,index5, index6);
    // } else if(req.query.color == hex3) {
    //   //blue
    //   req.query.blueArray.splice(index1,0,req.query.e1);
    //   req.query.blueArray.splice(index2,0,req.query.e2);
    //   req.query.secondRoundBlueArray.splice(index3,0,req.query.e3);
    //   req.query.secondRoundBlueArray.splice(index4,0,req.query.e4);
    //   req.query.thirdRoundBlueArray.splice(index5,0,req.query.e5);
    //   req.query.thirdRoundBlueArray.splice(index6,0,req.query.e6);
    // }

    var data = [{redArray: req.query.redArray}, {blueArray: req.query.blueArray},
                {yellowArray: req.query.yellowArray}, {secondRoundBlueArray: req.query.secondRoundBlueArray}, 
                {secondRoundRedArray: req.query.secondRoundRedArray}, 
                {secondRoundYellowArray: req.query.secondRoundYellowArray},
                {thirdRoundBlueArray: req.query.thirdRoundBlueArray}, 
                {thirdRoundRedArray: req.query.thirdRoundRedArray},
                {thirdRoundYellowArray: req.query.thirdRoundYellowArray}]
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret').toString();
    console.log(ciphertext);

    var hash = CryptoJS.SHA3(req.query.e1);
    var hash2 = CryptoJS.SHA3(req.query.e2);
    var hash3 = CryptoJS.SHA3(req.query.e3);
    var hash4 = CryptoJS.SHA3(req.query.e4);
    var hash5 = CryptoJS.SHA3(req.query.e5);
    var hash6 = CryptoJS.SHA3(req.query.e6);


    var newUser = {
        userName: req.query.userName,
        color: req.query.color,
        e1: req.query.e1,
        e2: req.query.e2,
        e3: req.query.e3,
        e4: req.query.e4,
        e5: req.query.e5,
        e6: req.query.e6,
        e1Hash: hash,
        e2Hash: hash2,
        e3Hash: hash3,
        e4Hash: hash4,
        e5Hash: hash5,
        e6Hash: hash6,
        redArray: req.query.redArray,
        blueArray: req.query.blueArray,
        yellowArray: req.query.yellowArray,
        secondRoundBlueArray: req.query.secondRoundBlueArray,
        secondRoundRedArray: req.query.secondRoundRedArray,
        secondRoundYellowArray: req.query.secondRoundYellowArray,
        thirdRoundBlueArray: req.query.thirdRoundBlueArray,
        thirdRoundRedArray: req.query.thirdRoundRedArray,
        thirdRoundYellowArray: req.query.thirdRoundYellowArray,
        ciphertext: ciphertext
    }

    User.create(newUser, function(err,newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })
    res.status(200).json({
        connection: 'good'
    })
});



app.get('/getUser', function(req, res) {
    User.find({userName: req.query.username}, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            console.log(user);
                // Decrypt
            var bytes  = CryptoJS.AES.decrypt(user[0].ciphertext, 'secret');
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            
            console.log(decryptedData);
            res.status(200).json({
                user: user,
                rows: decryptedData
            })
        }

        // res.status(200).json({
        //     user: 'no user'
        // })
    })
});

app.get('/athutenticateUser', function(req, res) {
    console.log('this is the start of the authentication process')
    var rows = JSON.parse(req.query.rows);
    var status = false;
    User.find({userName: req.query.userName}, function(err, user) {
        if(err) {
            console.log(err);
        } else {

            // console.log(user[0].e1);
            var flag = false;
            var flag2 = false;
            var flag3 = false;
            var flag4 = false;
            var flag5 = false;
            var flag6 = false;
        
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[0][j].emoji) == user[0].e1Hash) {
                flag = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[1][j].emoji) == user[0].e2Hash) {
                flag2 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[2][j].emoji) == user[0].e3Hash) {
                flag3 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[3][j].emoji) == user[0].e4Hash) {
                flag4 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[4][j].emoji) == user[0].e5Hash) {
                flag5 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(CryptoJS.SHA3(rows[5][j].emoji) == user[0].e6Hash) {
                flag6 = true;
                break;
              }
            }
        
            console.log(flag, flag2, flag3, flag4, flag5, flag6);
        
            if(flag && flag2 && flag3 && flag4 && flag5 && flag6) {
              console.log('correctly inputed password');
              status = true;
        
            } else {
              console.log('wrong password');
              status = false;
            }
            res.status(200).json({
                user: status
            })
        }
    });
})





function insertPassword(pickedEmoji1,pickedEmoji2,pickedEmoji3,pickedEmoji4,pickedEmoji5,pickedEmoji6, pickedColor) {
    //red
    hex1 = '#ff8a80';
    //yellow
    hex2 = '#ffcc80';
    //blue
    hex3 = '#90caf9';

    var index1 = Math.floor(Math.random()*12);
    var index2 = Math.floor((Math.floor(Math.random()*12)+12));

    var index3 = Math.floor(Math.random()*12);
    var index4 = Math.floor((Math.floor(Math.random()*12)+12));

    var index5 = Math.floor(Math.random()*12);
    var index6 = Math.floor((Math.floor(Math.random()*12)+12));

    var firstIndexes = [];
    var secondIndexes = [];
    var thirdIndexes = [];

    firstIndexes = [index1,index2];
    secondIndexes = [index3, index4];
    thirdIndexes = [index5, index6];

    firstIndexes.sort(() => Math.random() - 0.5);
    secondIndexes.sort(() => Math.random() - 0.5);
    thirdIndexes.sort(() => Math.random() - 0.5);



    if(pickedColor == hex1){
      //red

      rArray.sort(() => Math.random() - 0.5);
      secondRoundRArray.sort(() => Math.random() - 0.5);
      thirdRoundRArray.sort(() => Math.random() - 0.5);

      rArray.splice(index1,0,pickedEmoji1);
      rArray.splice(index2,0,pickedEmoji2);
      secondRoundRArray.splice(index3,0,pickedEmoji3);
      secondRoundRArray.splice(index4,0,pickedEmoji4);
      thirdRoundRArray.splice(index5,0,pickedEmoji5);
      thirdRoundRArray.splice(index6,0,pickedEmoji6);

    } else if(pickedColor == hex2) {
      // //yellow
      yArray.splice(index1,0,pickedEmoji1);
      yArray.splice(index2,0,pickedEmoji2);
      secondRoundYArray.splice(index3,0,pickedEmoji3);
      secondRoundYArray.splice(index4,0,pickedEmoji4);
      thirdRoundYArray.splice(index5,0,pickedEmoji5);
      thirdRoundYArray.splice(index6,0,pickedEmoji6);

      console.log(index1,index2,index3,index4,index5, index6);
    } else if(pickedColor == hex3) {
      //blue
      bArray.splice(index1,0,this.pickedEmoji1);
      bArray.splice(index2,0,this.pickedEmoji2);
      secondRoundBArray.splice(index3,0,this.pickedEmoji3);
      secondRoundBArray.splice(index4,0,this.pickedEmoji4);
      thirdRoundBArray.splice(index5,0,this.pickedEmoji5);
      thirdRoundBArray.splice(index6,0,this.pickedEmoji6);
    }

   }

   function authenticated(username, rows) {

    User.find({userName: username}, function(err, user) {
        if(err) {
            console.log(err);
        } else {
            console.log("this is the user")
            // console.log(user);
            var flag = false;
            var flag2 = false;
            var flag3 = false;
            var flag4 = false;
            var flag5 = false;
            var flag6 = false;
        
        
            for(var j=0;j<rows[0].length;j++) {
              if(rows[0][j].emoji == user.e1) {
                flag = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(rows[1][j].emoji == user.e2) {
                flag2 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(rows[2][j].emoji == user.e3) {
                flag3 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(rows[3][j].emoji == user.e4) {
                flag4 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(rows[4][j].emoji == user.e5) {
                flag5 = true;
                break;
              }
            }
            for(var j=0;j<rows[0].length;j++) {
              if(rows[5][j].emoji == user.e6) {
                flag6 = true;
                break;
              }
            }
        
            console.log(flag, flag2, flag3, flag4, flag5, flag6);
        
            if(flag && flag2 && flag3 && flag4 && flag5 && flag6) {
              console.log('correctly inputed password');
              return true;
        
            } else {
              console.log('wrong password');
              return false;
            }
        }
    });
   };










const port = process.env.PORT || "3000";


app.listen(port, process.env.IP, function(){
  console.log("server has started on ", port);
});