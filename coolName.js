let friends = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"];
function sheldon(answer)
{   try{
    if(answer.length < 4) throw "SmallNameException";
    answer= answer.slice(0,4);
    const mikeRoss = Math.floor(Math.random()* friends.length);
    return answer+" "+friends[mikeRoss];
}
catch(e)
{
    console.log(`Sorry Your name has less than 4 letters ${e}`);
    return answer;
}
}
const readline = require('readline');

const rl = readline.createInterface(
    {
        input : process.stdin,
        output : process.stdout
    }
);

rl.question('What is your name? ', (answer) => 
{
    console.log(`Your name is , ${sheldon(answer)}!`);
    rl.close();
});
// ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"]