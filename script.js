/* =========================================================
   START JOURNEY
========================================================= */

function startJourney() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main");

    if (!intro || !main) return;

    intro.style.display = "none";
    main.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(createStickers, 100);
}


/* =========================================================
   THINGS I LOVE ABOUT YOU
========================================================= */

const loveMessages = [

    `أكتر حاجة بحبها فيك إنك عمرك ما بتعرف تسيبني زعلانة،
    وبتفضل تحاول تصالحني وتستفزني وتستنى اللحظة اللي أستسلم فيها وأضحك 😂❤️`,

    `بحب إنك مبتعرفش تنام من غير ما تكلمني،
    وإن الكول بتفضل شغالة لحد ما ننام وإحنا على الخط.
    يمكن حاجة بسيطة، بس بالنسبالي كانت دايمًا أكتر حاجة بتطمني. 🤍`,

    `بحب إني بقيت أحب الحاجات اللي بتحبها أنت كمان.
    حتى الفانتزي، ولعيبة الكورة، والماتشات والحاجات اللي مكنتش بتفرق معايا،
    بقيت أحب أشاركك فيها ⚽️❤️`,

    `بحب إحساسي إني مهما اتزنقت أو حصلتلي مشكلة،
    أول شخص بييجي في بالي هو أنت.
    حتى لما أبقى مش عارفة أتصرف، ببقى مطمنة إنك هتلاقي حل وتعرف تحللي مشكلتي 🤍`

];


function showLove(index) {

    const text = document.getElementById("loveText");

    if (!text) return;

    text.textContent = loveMessages[index];

    text.classList.add("show");

}

/* =========================================================
   BACKGROUND STICKERS
========================================================= */

function createStickers() {

    const stickerLayer =
        document.getElementById("stickerLayer");

    const main =
        document.getElementById("main");

    if (!stickerLayer || !main) return;

    stickerLayer.innerHTML = "";


    const totalImages = 44;

    const leftImages = [];
    const rightImages = [];


    for (let i = 1; i <= totalImages; i++) {

        if (i % 2 === 0) {
            rightImages.push(i);
        } else {
            leftImages.push(i);
        }

    }


    const pageHeight =
        main.scrollHeight;


    function addSticker(
        imageNumber,
        side,
        index,
        total
    ) {

        const sticker =
            document.createElement("img");


        sticker.src =
            `img.${imageNumber}.jpeg`;

        sticker.className =
            "sticker";

        sticker.alt = "";


        const usableHeight =
            Math.max(pageHeight - 220, 1000);


        const topPosition =
            80 +
            (index / Math.max(total - 1, 1))
            * usableHeight;


        sticker.style.top =
            `${topPosition}px`;


        if (side === "left") {

            sticker.style.left = "1.5%";

        } else {

            sticker.style.right = "1.5%";

        }


        const rotation =
            (Math.random() * 8 - 4)
            .toFixed(2);


        sticker.style.transform =
            `rotate(${rotation}deg)`;


        sticker.onerror = function () {

            this.style.display = "none";

        };


        stickerLayer.appendChild(sticker);

    }


    leftImages.forEach(
        (imageNumber, index) => {

            addSticker(
                imageNumber,
                "left",
                index,
                leftImages.length
            );

        }
    );


    rightImages.forEach(
        (imageNumber, index) => {

            addSticker(
                imageNumber,
                "right",
                index,
                rightImages.length
            );

        }
    );

}


/* =========================================================
   LOAD STICKERS
========================================================= */

window.addEventListener(
    "load",
    function () {

        setTimeout(
            createStickers,
            300
        );

    }
);


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    function () {

        clearTimeout(
            window.stickerResizeTimer
        );

        window.stickerResizeTimer =
            setTimeout(
                createStickers,
                300
            );

    }
);