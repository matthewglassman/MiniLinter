let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');

//console.log(storyWords);

//Log Number of words in the string.
//console.log(storyWords.length);

//Look for words that are in the storyWords array and if there are any that are NOT also in overusedWords array and put them in the new betterWords array.
var betterWords = storyWords.filter(function(word){
    return !unnecessaryWords.includes(word);
});

//console.log(betterWords);

var countoverusedWords = overusedWords.reduce(function(wordStore, wordBeingChecked){
    //Loop over the storyWords array. If the words in overUsedWords (wordBeingChecked) exists in storyWords, add it to the new object (wordStore).  If it already exists in wordStore object than increment it.
    for (let i = 0; i < betterWords.length; i++) {
        const word = betterWords[i];
        if (word === wordBeingChecked){
            wordStore[wordBeingChecked] = (wordStore[wordBeingChecked] || 0 ) + 1
            //return wordStore
            
        }
    } 
    return wordStore
},{})

console.log(countoverusedWords);