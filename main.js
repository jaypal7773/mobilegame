import './style.css';
import "./services/game-server"
import "./UI/card-ui"
import "./UI/checkbox"
import "./UI/game-ui"
import "./UI/main-ui";
import "./UI/action-ui"
import "./UI/audio"
import "./UI/buyin-ui"
import "./UI/player-ui"
import "./UI/slider"
import "./UI/table-ui"
import "./UI/money-display"
import { getSocket, subscribe } from './socket-client';
//import "./services/zoom-communicator";

subscribe("onConnect", () => {
    window.socket = getSocket();
});

setTimeout(() => {
    $(".loader").hide();
    $("#turnActionsDiv").css("visibility", "visible");
    $("#raise-Button").css("visibility", "visible");
    $("#betDivWrapper").css("visibility", "visible");
    $(".player_wrapper").css("visibility", "visible");
    $(".player_wrapper").html(`
<div class="timeCircle">
<div>9</div>
</div>
<div class="avtar_img">
<div class = "betAmountAnimation">
    <span>+55</span>
</div>
<img src="./images/mobile/22 copy mailto:7@2x.png" class="avatar">
<div class="player-cards"></div>
<div class="betAnimation">
    <img src="./images/mobile/1 copy mailto:4-1@2x.png">
</div>
</div>
<div class="tangoHeadBlack">
<div class="title name">Tangotag</div>
<div class="price money">$5.24</div>
</div>
<div class="raise action">RAISE</div>
<div class="turnTime">
<div></div>
</div>
<!--<div class="bigSmallBlind">BIG BLIND</div>-->
<div class="lastBetDiv">
<img src="./images/mobile/1 copy mailto:4-1@2x.png">
<span>{X} 55</span>
</div>
<img src="./images/mobile/WINNER.png" class="winnerImg">
<img class="dealer" src="./images/mobile/newdealer.png">
<img class="blind" src="./images/mobile/SB.png">
<img class="missSb" src="./images/mobile/newms.png">
<img class="missBb" src="./images/mobile/newmb.png">
<div class="prize">
<span class="textset">Prize Amount</span>
</div>
<div class="toast-container text-black p-3">
        <div id="toastMessage" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Thank you user for 10BB Tips</strong>
              </div>
        </div>
      </div>
`);
}, 2000);