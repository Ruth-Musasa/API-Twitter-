const twiterAPI = {
    tweets: [
        {
            "date": 1604299903000,
            'favorites': '92',
            "id": 1,
            "iduser": 1,
            "replies": "24785",
            "retweets": "16287",
            "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!",
            "image": "https://pbs.twimg.com/media/ETlzAqaWAAcxs0H?format=jpg&name=medium"
        },
        // {
        //     "author_avatar": "https://pbs.twimg.com/profile_images/1728471942888353792/goWaFS7q_400x400.jpg",
        //     "source": "King-Anna",
        //     "date": 1609942590000,
        //     "favorites": "396603",
        //     "id": "2",
        //     "iduser": "1",
        //     "isVerified": false,
        //     "replies": "896",
        //     "retweets": "54694",
        //     "text": "Even Mexico uses Voter I.D.",
        //     "image": "https://pbs.twimg.com/media/GD5aUwEXYAAjSWg?format=jpg&name=360x360"
        // },
        // {
        //     "author_avatar": "https://pbs.twimg.com/profile_images/1742813598882123776/SV3YhOHB_400x400.jpg",
        //     "source": "Yvan Castanou",
        //     "date": 1604231375000,
        //     "favorites": "124689",
        //     "id": "3",
        //     "iduser": "2",
        //     "isVerified": true,
        //     "replies": "8",
        //     "retweets": "22972",
        //     "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",
        //     "image": "https://pbs.twimg.com/media/GECLQfEW8AAEA_g?format=jpg&name=small"
        // },
        // {
        //     "author_avatar": "https://pbs.twimg.com/profile_images/1626318096100126721/pSeya3Bt_400x400.jpg",
        //     "source": "Chancel Mbemba",
        //     "date": 1604084613000,
        //     "favorites": "44842",
        //     "id": "4",
        //     "iduser": "2",

        //     "isVerified": false,
        //     "replies": "1024",
        //     "retweets": "9563",
        //     "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",
        //     "image": "https://pbs.twimg.com/media/GEH6bzGXsAAZlxD?format=jpg&name=small"
        // },
        // {
        //     "author_avatar": "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
        //     "source": "Trump D.",
        //     "date": 1603037689000,
        //     "favorites": 62414,
        //     "id": "5",
        //     "isVerified": false,
        //     "replies": "258",
        //     "retweets": 16811,
        //     "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"
        // },
        // {
        //     "author_avatar": "https://pbs.twimg.com/media/EynSNt8XMAEX0V7?format=jpg&name=4096x4096",
        //     "source": "Majabu Rafiki",
        //     "date": 1602377246000,
        //     "favorites": 34952,
        //     "id": "6",
        //     "isVerified": true,
        //     "replies": "85",
        //     "retweets": 10008,
        //     "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",
        //     "image": "https://pbs.twimg.com/media/GDz-CBoWcAAGlwx?format=jpg&name=small"
        // },
        // {
        //     "author_avatar": "https://pbs.twimg.com/profile_images/1606223963604090881/H8u2bORe_400x400.jpg",
        //     "source": "Mexico City",
        //     "date": 1601996447000,
        //     "favorites": 58201,
        //     "id": "7",
        //     "isVerified": true,
        //     "replies": "0",
        //     "retweets": 14359,
        //     "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"
        // },
        // {
        //     "author_avatar": "https://picsum.photos/200?random=1554075712000",
        //     "source": "New York Times",
        //     "date": 1554075712000,
        //     "favorites": 58201,
        //     "id": "8",
        //     "isVerified": true,
        //     "replies": "0",
        //     "retweets": 14359,
        //     "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."
        // },
        // {
        //     "author_avatar": "https://picsum.photos/200?random=1604231375000",
        //     "source": "Twitter for iPhone",
        //     "date": 1601996447000,
        //     "favorites": 58201,
        //     "id": "9",
        //     "isVerified": true,
        //     "replies": "0",
        //     "retweets": 14359,
        //     "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"
        // },
        // {
        //     "author_avatar": "https://picsum.photos/200?random=1548956601000",
        //     "source": "Samsung",
        //     "date": 1601996447000,
        //     "favorites": 58201,
        //     "id": "10",
        //     "iduser": "10",
        //     "isVerified": true,
        //     "replies": "0",
        //     "retweets": 14359,
        //     "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",
        //     "image": "https://cancerfocusni.org/wp-content/uploads/2022/05/Mourne-Seven-summits-homepage-1650-%C3%97-1000px.jpeg"
        // }
    ],

    users: [
        {
            "author_avatar": "https://pbs.twimg.com/profile_images/980157462887256064/CcnUIYrA_400x400.jpg",
            "source": "EMCI TV",
            "iduser": "1",
            "isVerified": true,

        }
    ]
}


module.exports = twiterAPI;
