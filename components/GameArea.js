import { useEffect } from 'react'

import anime from 'animejs';
import Script from 'next/script';

const GameArea = () => {
    

    // const shrink = () => {
    //     const myDiv = document.getElementById('target');

    //     let size = null;

    //     clearInterval(size);

    //     size = setInterval(() => {
    //         let w = Number((myDiv.style.width).slice(0, (myDiv.style.width).length - 2))
    //         let h = Number((myDiv.style.height).slice(0, (myDiv.style.height).length - 2))
    //         if (w > 0) {
    //             myDiv.style.width = `${w - 1}px`;
    //             myDiv.style.height = `${h - 1}px`;
    //         } else {
    //             clearInterval(size);
    //         }
    //     }, 1);
    // }

    // const posChange = () => {
    //     const myDiv = document.getElementById('target');

    //     setTimeout(() => {
    //         const top = Math.abs(Math.round(Math.random(400) * 1000 - 550)) + 50
    //         const left = Math.abs(Math.round(Math.random(400) * 1000 - 400)) + 50

    //         myDiv.style.top = `${top}px`
    //         myDiv.style.left = `${left}px`
    //     }, 600);
    // }

    // const expand = () => {
    //     const myDiv = document.getElementById('target');

    //     setTimeout(() => {
    //         let s = null;

    //         clearInterval(s)

    //         s = setInterval(() => {
    //             let w = Number((myDiv.style.width).slice(0, (myDiv.style.width).length - 2))
    //             let h = Number((myDiv.style.height).slice(0, (myDiv.style.height).length - 2))
    //             if (w < 50) {
    //                 myDiv.style.width = `${w + 1}px`;
    //                 myDiv.style.height = `${h + 1}px`;
    //             } else {
    //                 clearInterval(s);
    //             }
    //         }, 1);
    //     }, 1000);
    // }

    // const animation = async () => {

    //     const promise1 = new Promise((resolve, reject) => {
    //         const myDiv = document.getElementById('target');

    //         let size = null;

    //         clearInterval(size);

    //         size = setInterval(() => {
    //             let w = Number((myDiv.style.width).slice(0, (myDiv.style.width).length - 2))
    //             let h = Number((myDiv.style.height).slice(0, (myDiv.style.height).length - 2))
    //             if (w > 0) {
    //                 myDiv.style.width = `${w - 1}px`;
    //                 myDiv.style.height = `${h - 1}px`;
    //             } else {
    //                 clearInterval(size);
    //             }
    //         }, 1);

    //         setTimeout(()=>{
    //             resolve("shifting to next step");
    //         }, 1000);
    //     });

    //     promise1.then((value) => {
            
    //         const myDiv = document.getElementById('target');

    //         const top = Math.abs(Math.round(Math.random(400) * 1000 - 550)) + 50
    //         const left = Math.abs(Math.round(Math.random(400) * 1000 - 400)) + 50

    //         myDiv.style.top = `${top}px`
    //         myDiv.style.left = `${left}px`

    //         let s = null;

    //         clearInterval(s)

    //         s = setInterval(() => {
    //             let w = Number((myDiv.style.width).slice(0, (myDiv.style.width).length - 2))
    //             let h = Number((myDiv.style.height).slice(0, (myDiv.style.height).length - 2))
    //             if (w < 50) {
    //                 myDiv.style.width = `${w + 1}px`;
    //                 myDiv.style.height = `${h + 1}px`;
    //             } else {
    //                 clearInterval(s);
    //             }
    //         }, 1);
    //     });

    //     console.log(promise1);
    // }

    const animeAnimation = ()=>{

        const myDiv = document.getElementById('target');

        const top = Math.abs(Math.round(Math.random(400) * 1000 - 550)) + 50
        const left = Math.abs(Math.round(Math.random(400) * 1000 - 400)) + 50

        anime({

            targets: myDiv,
            translateX: top,
            translateY: left,
            rotate: 540
          });
    }

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

            animeAnimation();
            // animation();

            // BELOW APPROACH IS NOT WORKING CORRECTLY CHANGE IT WITH USING THE PROMISE AND AWAIT METHOD
            // FIRST TRY TO ADD THE EXPAND CODE IN THE POS CHANGE FUNCTION

            // shrink();

            // BELOW CODE IS TO MAKE THE TARGETS MOVE SLOWLY
            // let a = e.target.style.top;
            // let b = e.target.style.left;
            // let t = Number(a.slice(0, a.length - 2));
            // let l = Number(b.slice(0, b.length - 2));

            // I CAN ALSO MAKE THE ANIMATION OF THE TARGET FIRST SHRINKING THEN MOVING TO THE NEXT POSITION  AND THEN INCREASIGN IN SIZE TO GIVE A TECHY VIBE

            // posChange();

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

            // expand();

        })
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
        <>
            <Script src="anime.min.js"></Script>
            <div id='game-area'>

            </div>
        </>

    )
}

export default GameArea