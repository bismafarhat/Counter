const decreasebtn = document.getElementById("decrease");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const countspan = document.querySelector(".count");
// jb html load hoti ha web browser pa tu wo document(web page) ban jata
// ya build in function ha js ka jo current html ka elements ko acess,manipulate karna ka lia use hota 
//let count = 0;

// decreasebtn.addEventListener('click', ()=>{

//   count-=1;
//   countspan.textContent=count;// html ka element ma jitna bi content ha us ko as a plain text la ga textual content ko retrive ya manipulate karna ka lia

// })

// increasebtn.addEventListener('click',()=>{
//     count+=1;
//     countspan.textContent=count;
// })
// resetbtn.addEventListener('click', ()=>{
//     count=a;
//     countspan.textContent=count;
// })


let count = 0;

increasebtn.addEventListener('click', () => {
    updateCount(1);
});

decreasebtn.addEventListener('click', () => {
    updateCount(-1);
});


function updateCount(change) {
    count += change;
    if (count < 0) {
        count = 25;
    } else if (count > 25) {
        count = 0;
    }
    const letter = String.fromCharCode(97 + count);
    countspan.textContent = letter;
}
resetbtn.addEventListener('click', () => {
    count = 0;
    const letter = 'a';
    countspan.textContent = letter;
})
