const chars = [
    { 
    name: "Aziraphale",
    age: "6000+ years old - Immortal",
    pronouns: "He/Him",
    affiliation:["Crowley", "Heaven", "Shopkeepers and Street Traders Association"],
    species: "Angel",
    personality: "Aziraphale is generally very bubbly and cheerful and keen to do the right thing. He can become a bit anxious if he has to do something that isn’t 100% good such as lying. He also has difficulty recognizing gray morality compared to Crowley. He automatically assumes that Heaven are the good guys and Hell are the bad guys, often using this to try to justify some of Heaven’s more unpleasant actions.",
    quotes: ["You can't kill me! There'll be paperwork!", "I forgive you.", "Perhaps you could tell me... while we dance.","Not just a Southern pansy...THE Southern Pansy."],
    seasons: "Season 1 & 2",
    alias: ["Angel", "Mr. A. Z. Fell", "The Southern Pansy", "Dr. McFell"],
    title:"Angel of the Eastern Gate",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/5/54/Aziraphale-MP.jpg/revision/latest/scale-to-width-down/1000?cb=20190501214031" //url image

},
{ 
    name: "Crowley",
    age: "6000+ years old - Immortal",
    pronouns: "All or Any",
    affiliation:["Aziraphale", "Hell (formerly)", "Dowling Estate (formerly)"],
    species: "Demon",
    personality: "Crowley is overall a non-threatening demon. He somewhat attempts to be evil in his own way, but is actually quite morally decent in human terms. He objects to the killing of innocent people and animals and wants to save the world, albeit for his own reasons. He has a flair for the dramatic and can be a heavy drinker. He seems to not take his job seriously and doesn't really partake in 'normal demon' things. Most of his 'accomplishments' were faked or done by humans, whom he considers are better at making their own lives miserable than he is. He thinks of himself as evil, but is usually a minor inconvenience at worst.",
    quotes: ["Oh, Lord, heal this bike.", "Excuse me ma'am, we're two supernatural entities looking for the notorious son of Satan, wonder if you might help us with our inQUIRIES?","Sorry, consecrated ground. Ah, it's like being on the beach in bare feet!","Because humans are weird and that's how it works.","What kind of stupid question is that ‘still a demon’? What else am I going to be? An aardvark?"],
    seasons: "Season 1 & 2",
    alias: ["Demon", "Bildad the Shuhite", "Crawly", "Anthony J. Crowley","A.J. Crowley"],
    title:"Serpent of Eden",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/d/da/Crowley-MP.jpg/revision/latest?cb=20190501213946" //url image

},
{ 
    name: "Adam Young",
    age: "11",
    pronouns: "He/Him",
    affiliation:["The Them","Crowley","Aziraphale","Anathema Device"],
    species: "Antichrist",
    personality: "He is a friendly young boy. He is somewhat confident and a bit bossy as the leader of the Them, but is also shown to be very caring to his friends and other people he meets such as Anathema. He is shown to be a bit naive, as he believes everything he reads in the magazines that Anathema gives him and initially believes that Armageddon is the only way to undo all the damage that has been done to the Earth and make things right.",
    quotes: ["I think I'll call him... Dog!"],
    seasons: "Season 1",
    alias: ["The Antichrist", "Notorious Son of Satan","The Boy", "The Adversary, Destroyer of Kings, Angel of the Bottomless Pit, Prince of this World and Lord of Darkness"],
    title:"The Son of Satan",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/a/a0/Adam-MP.jpg/revision/latest?cb=20190501214130" //url image

},
{ 
    name: "Anathema Device",
    age: "Mid 20's",
    pronouns: "She/Her",
    affiliation:["Agnes Nutter","Virtue Device","John Device", "Newton Pulsifier","Adam Young"],
    species: "Human - Witch",
    personality: "Anathema is very goal-driven, working away from home to study and understand the prophecies of her ancestor Agnes Nutter. She is passionate about her work and various conspiracy theories, as evidenced by the many magazines she gives to Adam Young. She is smart, brave, and vaguely understands what's going on.",
    quotes: ["That's because schools are oppressive tools of the state!","... it's not enough to know what the future is. You have to know what it means."],
    seasons: "Season 1",
    alias: ["My Dear"],
    title:"Practical Occultist & Professional Descendant",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/1/1b/Anathema-MP.jpg/revision/latest?cb=20190501213551" //url image

},
{ 
    name: "Newton Pulsifer",
    age: "Unknown",
    pronouns: "He/Him",
    affiliation:["Witchfinder Sergeant Shadwell", "Anathema Device"],
    species: "Human",
    personality: "Newton is a big computer nerd, having studied and read book after book on computer engineering. Unfortunately, he was born with something similar to a curse in which he breaks whatever computer he tries to use, making his countless hours of studying computers useless. However, despite his 'curse', Newton is shown to be a very intelligent.",
    quotes: ["Oh, I'm not called Dick Turpin-it's my car's name. You can ask why if you like?",""],
    seasons: "You just have to pick a card. Any card.",
    alias: ["Witchfinder Pulsifer"],
    title:"Witchfinder Pulsifer",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/f/fd/Newt-MP.jpg/revision/latest?cb=20190501213649" //url image
},
{ 
    name: "Madame Tracy",
    age: "Unknown",
    pronouns: "She/Her",
    affiliation:["Witchfinder Sergeant Shadwell"],
    species: "Human",
    personality: "",
    quotes: [],
    seasons: "Season 1",
    alias: ["Jezebel"],
    title:"Medium",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/d/da/MadameTracy-MP.jpg/revision/latest?cb=20190501213445" //url image
},
{ 
    name: "Shadwell",
    age: "Unknown",
    pronouns: "He/Him",
    affiliation:["Newton Pulsifier", "Madame Tracy"],
    species: "Human",
    personality: "Shadwell is very blunt, and described as being a fool in Agnes Nutter's prophecy. However, he is very devoted to the Witchfinder Army, offering to recruit Newton Pulsifier after quickly checking how many nipples he has.",
    quotes: ["How many nipples have you got?"],
    seasons: "Season 1",
    alias: ["Witchfinder Sergeant"],
    title:"Witchfinder Sergeant",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/6/65/Shadwell-MP.jpg/revision/latest?cb=20190501213750" //url image
},
{ 
    name: "Pollution",
    age: "Unknown: Took over from Pestilence in 1936",
    pronouns: "They/Them",
    affiliation:["Death", "Famine", "War"],
    species: "Horseperson of the Apocalypse",
    personality: "Pollution is shown to be materialistic and tends to enjoy things they think look nice. They also enjoy their work, seeing defilement as lovely.",
    quotes: ["It's just so... damn beautiful.","We're in business."],
    seasons: "Season 1",
    alias: ["White","Chalky","Blanc","Albus","Weiss","Snowy"],
    title:"Horseperson of the Apocalypse",
    status: "Unknown",
    image: "https://static.wikia.nocookie.net/good-omens/images/9/93/Pollution-MP.jpg/revision/latest?cb=20190501213311" //url image
},
{ 
    name: "Famine",
    age: "Unknown",
    pronouns: "He/Him",
    affiliation:["Death", "Pollution", "War"],
    species: "Horseperson of the Apocalypse",
    personality: "Famine is a confident being. Dressed in a suit, he presents himself as a well put together individual.",
    quotes: [],
    seasons: "Season 1",
    alias: ["Dr. Raven Sable"],
    title:"Horseperson of the Apocalypse",
    status: "Unknown",
    image: "https://static.wikia.nocookie.net/good-omens/images/1/1f/Famine-MP.jpg/revision/latest?cb=20190501213400" //url image
}

]
// ^ array of character objects

// const Character = { 
//     name: "",
//     age: "",
//     pronouns: "",
//     affiliation:[],
//     species: "",
//     personality: "",
//     quotes: [],
//     seasons: "",
//     alias: [],
//     title:"",
//     status: "",
//     image: "" //url image

// }

const Character = { 
    name: "Death",
    age: "Immortal - Older than time",
    pronouns: "He/Him",
    affiliation:["Famine", "Pollution", "War"],
    species: "Horseperson of the Apocalypse",
    personality: "Death is said to have a logical and reasonable personality who is set in his ways. He is extremely intelligent and has natural leadership skill.",
    quotes: ["Don't think of it as dying. Think of it as leaving early to avoid the rush.", "I do not understand, surely your very existence requires the ending of the world. It is written."],
    seasons: "Season 1",
    alias: ["Dr. Raven Sable"],
    title:"Horseperson of the Apocalypse",
    status: "Alive",
    image: "https://static.wikia.nocookie.net/good-omens/images/1/1f/Famine-MP.jpg/revision/latest?cb=20190501213400" //url image
}

module.exports = chars