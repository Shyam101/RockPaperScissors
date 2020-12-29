const btns = document.querySelectorAll('.btn')

btns.forEach((button) => {
    button.addEventListener('click', handle);
});

const notice = document.querySelector('#notice');
const result = document.querySelector('#result');


//functions
let mp = {1:"rock",2:"paper",3:"scissors"};
let cmp=0;
let player=0;

function handle() {
    let p1= this.id;
    let p2= com();
    update(p1,p2);

    if(player==5)
    {
        notice.textContent = "Player won!! the series. Relod to play again";
        disableall();
    }
    if(cmp==5)
    {
        notice.textContent = "Computer won!! the series. Relod to play again"
        disableall();
    }
}

function disableall()
{
    for(let i=0;i<btns.length;++i)
        btns[i].disabled = true;
}

function update(p1,p2){
    let score = whowon(p1,p2);
    if(score==0)
        notice.textContent = "It's a Draw!"
    else if(score==1)
    {
        notice.textContent = mp[p1] + " beats " + mp[p2] +", Player won";
        player++;
        result.textContent = "Computer: " + cmp + "    " + "Player: "+ player;
    }
    else 
    {
        notice.textContent = mp[p2] + " beats " + mp[p1] +", Computer won";
        cmp++;
        result.textContent = "Computer: " + cmp + "\t" + "Player: "+ player;
    }

}

function whowon(pla1, pla2) {
    if (pla1 == pla2) {
        return 0; //nobody won;
    }
    else if ((pla1 == 1 && pla2 == 2) || (pla1 == 2 && pla2 == 3) || (pla1 == 3 && pla2 == 1)) {
        return -1; //player 1 lost
    }
    else
        return 1; //player 1 won
}

function com() {
    return r = Math.floor((Math.random() * 3) + 1);
}