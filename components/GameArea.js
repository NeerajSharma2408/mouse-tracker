import { useEffect } from 'react'

const GameArea = () => {

    const initialStart = () => {
        const myDiv = document.getElementById("game-area");

        const d = document.createElement("div");

        d.id = "target";

        d.style.border = '1px solid'
        d.style.borderRadius = '30px';
        d.style.height = '50px';
        d.style.width = '50px';
        d.style.position = 'absolute';
        d.style.backgroundColor = "#935FA7";
        d.style.display = 'inline-block';
        d.style.top = '0'
        d.style.left = '0'

        myDiv.appendChild(d);

        d.addEventListener("click", (e) => {


            // BELOW CODE IS TO MAKE THE TARGETS MOVE SLOWLY
            // let a = e.target.style.top;
            // let b = e.target.style.left;
            // let t = Number(a.slice(0, a.length - 2));
            // let l = Number(b.slice(0, b.length - 2));

            // I CAN ALSO MAKE THE ANIMATION OF THE TARGET FIRST SHRINKING THEN MOVING TO THE NEXT POSITION  AND THEN INCREASIGN IN SIZE TO GIVE A TECHY VIBE

            const top = Math.abs(Math.round(Math.random(400) * 1000 - 550)) + 50
            const left = Math.abs(Math.round(Math.random(400) * 1000 - 400)) + 50

            e.target.style.top = `${top}px`
            e.target.style.left = `${left}px`

            // BELOW CODE IS TO MAKE THE TARGETS MOVE SLOWLY
            //     console.log(top + " " + left)

            //     let id = null;

            //     clearInterval(id);

            //     const element = e.target;
            //     console.log(element);

            //     id = setInterval(() => {
            //         if (t !== top) {
            //             t = (top > t) ? t+1 : t-1;
            //             element.style.top = `${t}px`;
            //         }
            //         if (l !== left) {
            //             l = (left > l) ? l+1 : l-1;
            //             element.style.left = `${l}px`;
            //         }
            //         if (t === top && l === left) {
            //             clearInterval(id);
            //         }
            //         console.log(t + " " + l);
            //     }, 1)

        })

        console.log(myDiv.style.width + " width")
        console.log(myDiv.style.height + " height")
    }

    useEffect(() => {
        const myDiv = document.getElementById("game-area");

        for (let i = 0; i < 10000; i++) {
            const d = document.createElement("div");
            d.classList.add('game-area__div-hover');
            d.style.display = 'inline';
            myDiv.appendChild(d);
        }
        initialStart()
    })

    return (
        <div id='game-area'>

        </div>
    )
}

export default GameArea