const episodes = [
{name: "The One with Ross's Tan", season: 10, ep_no: 3, avg_rating: 8.5},
{name: "The One with the Prom Video", season: 2, ep_no: 14, avg_rating: 9.6},
{name: "The Last One, Part 2", season: 10, ep_no: 18, avg_rating: 9.6},
{ name: "The One Where Everybody Finds Out", season: 5, ep_no: 14, avg_rating: 9.5 }
]

for(let j = 0 ; j< episodes.length;j++)
{    for(let i=0 ;i< episodes.length-j-1;i++)
{
    if((episodes[i].avg_rating < episodes[i+1].avg_rating) || ((episodes[i].avg_rating === episodes[i+1].avg_rating) && (episodes[i].season < episodes[i+1].season)
) ||((episodes[i].season === episodes[i+1].season) && (episodes[i].ep_no < episodes[i+1].ep_no))
    )
    {
    [episodes[i], episodes[i+1]] = [episodes[i+1] , episodes[i]];
    }
}
}

console.log(episodes);
