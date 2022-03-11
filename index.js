let donutcount = 0;
let increment = 1;
let donutsPurchased = 0;
let autoClickCostChecker = 100;
let autoclickchecker = 0;
let multiplierCostChecker = 10;
let autoClicksPurchased = 0;
let donutsToPlay = document.getElementById("totalcount");
let dntcount = document.querySelector(".donutcount");
let donutclick = document.querySelector(".donutclick");
let autoClick = document.querySelector(".autoclick");
let clickspurchased = document.getElementById("autoclickerspurchased");
let donutMultiplierPurchase = document.querySelector(".donutmultiplierpurchase");
let donutmultipliercount = document.getElementById("donutmultipliercount");
let donutCost = document.querySelector(".donutcost");

//event listner for making donuts when clicked on image of donut
donutclick.addEventListener("click", () => {
  var bflat = new Audio();
  bflat.src = "./sounds/donutcick.mp3";
  document.getElementById(bflat);
  bflat.play();
  donutcount += increment;
  console.log(donutcount);
  donutsToPlay.innerHTML = "Donuts count:" + donutcount;
  donutCost.innerText = "Cost Of Each Donut:" + increment;
  conditionCheck();
});

//event listner for autoclicker
autoClick.addEventListener("click", () => {
  donutcount -= autoClickCostChecker;
  autoClicksPurchased++;
  autoClickCostChecker += autoClickCostChecker * 0.1;

  clickspurchased.innerText = "clickspurchased" + autoClicksPurchased;

  donutsToPlay.innerHTML = "Donuts count:" + donutcount;
  for (let i = 0; i < autoClickCostChecker; i++) {
    setTimeout(function () {
      conditionCheck();
      donutcount += increment;
      donutsToPlay.innerHTML = "Donuts count:" + donutcount;
    }, 1000 * i)
  }
});

//Event listner for donutmultiplier
donutMultiplierPurchase.addEventListener("click", () => {
  donutcount -= multiplierCostChecker;
  multiplierCostChecker += multiplierCostChecker * 0.1;
  donutsToPlay.innerHTML = "Donuts count:" + donutcount;
  donutsPurchased++;
  donutmultipliercount.innerHTML = "Donut Multipliers purchased:" + donutsPurchased;
  increment = Math.pow(1.2, donutsPurchased);
  donutCost.innerText = "Cost Of Each Donut:" + increment;
  conditionCheck();
});

//function to check condition to enable or disable autoclick and multipplier buttons
function conditionCheck() {
  if (donutcount >= autoClickCostChecker) {
    autoClick.innerHTML = "<button enabled class='auto' type='button'>Autoclick</button>";
  }
  else {
    autoClick.innerHTML = "<button disabled class='auto' type='button'>Autoclick</button>";
  }
  if (donutcount >= multiplierCostChecker) {
    donutMultiplierPurchase.innerHTML = "<button enable class='multiplier' type='button'>Multiplier</button>";
  }
  else {
    donutMultiplierPurchase.innerHTML = "<button disabled class='multiplier' type='button'>Multiplier</button>";
  }
}



