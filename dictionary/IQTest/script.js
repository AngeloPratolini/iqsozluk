"use strict";

const yanitList = [];
const dogrular = [
  "b",
  "c",
  "b",
  "b",
  "e",
  "a",
  "d",
  "c",
  "b",
  "b",
  "c",
  "c",
  "b",
  "b",
  "a",
  "e",
  "d",
  "c",
  "d",
  "b",
];

document.querySelector(".container-21").style.display = "none";
const timer = document.querySelector(".timer");

function next(yanit, sakla, goster) {
  yanitList.push(yanit);
  document.querySelector(sakla).style.display = "none";
  document.querySelector(goster).style.display = "block";
}

//1. soru
const şıklar1 = document.querySelectorAll(".şık-1");

document.querySelector(".container-2").style.display = "none";

şıklar1.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.alt, ".container-1", ".container-2");
  });
});

// for (let i = 1; i < 21; i++) {

//   `şıklar${i}`.forEach(function (şık) {
//     şık.addEventListener("click", function (e) {
//       next(e.target.id, `.container-${i}`, `.container-${i+1}`);
//     })
//   })
// }

//2. soru
const şıklar2 = document.querySelectorAll(".şık-2");

şıklar2.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-2", ".container-3");
  });
});

//3. soru

const şıklar3 = document.querySelectorAll(".şık-3");
document.querySelector(".container-3").style.display = "none";
şıklar3.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-3", ".container-4");
  });
});
//4. soru
const şıklar4 = document.querySelectorAll(".şık-4");
document.querySelector(".container-4").style.display = "none";
şıklar4.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-4", ".container-5");
  });
});
//5. soru
const şıklar5 = document.querySelectorAll(".şık-5");
document.querySelector(".container-5").style.display = "none";
şıklar5.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-5", ".container-6");
  });
});
//6. soru
const şıklar6 = document.querySelectorAll(".şık-6");
document.querySelector(".container-6").style.display = "none";
şıklar6.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-6", ".container-7");
  });
});
//7. soru
const şıklar7 = document.querySelectorAll(".şık-7");

document.querySelector(".container-7").style.display = "none";

şıklar7.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-7", ".container-8");
  });
});
//8.soru
const şıklar8 = document.querySelectorAll(".şık-8");

document.querySelector(".container-8").style.display = "none";

şıklar8.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.alt, ".container-8", ".container-9");
  });
});
//9.soru
const şıklar9 = document.querySelectorAll(".şık-9");

document.querySelector(".container-9").style.display = "none";

şıklar9.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-9", ".container-10");
  });
});
//10.soru
const şıklar10 = document.querySelectorAll(".şık-10");

document.querySelector(".container-10").style.display = "none";

şıklar10.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-10", ".container-11");
  });
});

//11.soru
const şıklar11 = document.querySelectorAll(".şık-11");

document.querySelector(".container-11").style.display = "none";

şıklar11.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-11", ".container-12");
  });
});

//12.soru
const şıklar12 = document.querySelectorAll(".şık-12");

document.querySelector(".container-12").style.display = "none";

şıklar12.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-12", ".container-13");
  });
});

//13.soru
const şıklar13 = document.querySelectorAll(".şık-13");

document.querySelector(".container-13").style.display = "none";

şıklar13.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-13", ".container-14");
  });
});
//14.soru
const şıklar14 = document.querySelectorAll(".şık-14");

document.querySelector(".container-14").style.display = "none";

şıklar14.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-14", ".container-15");
  });
});
//15.soru
const şıklar15 = document.querySelectorAll(".şık-15");

document.querySelector(".container-15").style.display = "none";

şıklar15.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-15", ".container-16");
  });
});
//16.soru
const şıklar16 = document.querySelectorAll(".şık-16");

document.querySelector(".container-16").style.display = "none";

şıklar16.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-16", ".container-17");
  });
});
//17.soru
const şıklar17 = document.querySelectorAll(".şık-17");

document.querySelector(".container-17").style.display = "none";

şıklar17.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-17", ".container-18");
  });
});
//18.soru
const şıklar18 = document.querySelectorAll(".şık-18");

document.querySelector(".container-18").style.display = "none";

şıklar18.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-18", ".container-19");
  });
});

//19.soru
const şıklar19 = document.querySelectorAll(".şık-19");

document.querySelector(".container-19").style.display = "none";

şıklar19.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.alt, ".container-19", ".container-20");
  });
});

//20.soru
const şıklar20 = document.querySelectorAll(".şık-20");

document.querySelector(".container-20").style.display = "none";

şıklar20.forEach(function (şık) {
  şık.addEventListener("click", function (e) {
    next(e.target.id, ".container-20", ".container-21");
    timer.classList.add("hidden");
    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    for (let i = 0; i < dogrular.length; i++) {
      if (yanitList[i] === dogrular[i]) {
        dogruSayisi++;
      } else {
        yanlisSayisi++;
      }
    }
    document.querySelector(
      ".sonuc"
    ).textContent = `Doğru sayınız ${dogruSayisi} yanlış sayınız ${yanlisSayisi}`;
  });
});

const container = document.querySelectorAll(".container");
console.log(container);

let time = 60;
const sayac = setInterval(function () {
  const min = String(Math.trunc(time / 60)).padStart(2, 0);
  const sec = String(time % 60).padStart(2, 0);
  timer.textContent = `${min}:${sec}`;
  time--;
  if (time === 0) {
    container.forEach(function (div) {
      div.classList.add("hidden");
      clearInterval(sayac);
      timer.textContent = `Süreniz bittiği için sınav sonuçlanmıştır.`;
    });
  }
}, 1000);
