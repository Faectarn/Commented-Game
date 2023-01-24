import { hints } from './hints';

export const questions = [
    {
        id: 1,
        pronouns: "Vilken",
        category: "politiker",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/YSRFoU5qT64AAAAM/joseph-stalin-hats-off.gif",
        images: [
            "/images/stalin1.jpg",
            "/images/stalin2.jpg",
            "/images/stalin3.jpg",
            "/images/stalin4.jpg",
            "/images/stalin5.jpg",
        ],
        correctAnswer: [
            "Josef Stalin",
            "Stalin",
        ],
        options: hints.politician
        
    },
    {
        id: 2,
        pronouns: "Vilken",
        category: "kändis",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/sBtFfckawokAAAAM/princess-diana-hello.gif",
        images: [
            "/images/diana1.jpg",
            "/images/diana2.jpg",
            "/images/diana3.jpg",
            "/images/diana4.jpg",
            "/images/diana5.jpg",
        ],
        correctAnswer: [
            "Prinsessan Diana",
            "Princess Diana",
            "Diana",
            "Diana Frances",
            "Diana Spencer",
        ],
        options: hints.celebrity
    },
    {
        id: 3,
        pronouns: "Vilken",
        category: "filmkaraktär",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/f51c1QDVcxUAAAAM/star-wars-leia.gif",
        images: [
            "/images/leia1.jpg",
            "/images/leia2.jpg",
            "/images/leia3.jpg",
            "/images/leia4.jpg",
            "/images/leia5.jpg",
        ],
        correctAnswer: [
            "Prinsessan Leia",
            "Leia",
            "Princess Leia",
        ],
        options: hints.character
    },
    {
        id: 4,
        pronouns: "Vilken",
        category: "viral video",
        type: "kommenteras",
        color: "#191919",
        gif: "https://i.ytimg.com/vi/DD04Q8-e3kI/hqdefault.jpg",
        images: [
            "/images/40tusenmiljarder1.jpg",
            "/images/40tusenmiljarder2.jpg",
            "/images/40tusenmiljarder3.jpg",
            "/images/40tusenmiljarder4.jpg",
            "/images/40tusenmiljarder5.jpg",
        ],
        correctAnswer: [
            "Margareta Sandstedt (SD) räknar i Riksdagen",
            "40000 miljarder",
            "40000 miljarder kronor",
            "40 tusen miljarder",
            "40 tusen miljarder kronor",
        ],
        options: hints.viralVideo
    },
    {
        id: 5,
        pronouns: "Vilket",
        category: "barnprogram",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/G1clF5f6h_IAAAAM/alfie-atkins-alfons%C3%A5berg.gif",
        images: [
            "/images/alfons1.jpg",
            "/images/alfons2.jpg",
            "/images/alfons3.jpg",
            "/images/alfons4.jpg",
            "/images/alfons5.jpg",
        ],
        correctAnswer: [
            "Alfons Åberg",
            "Alfons",
        ],
        options: hints.kidsShow
    },
    {
        id: 6,
        pronouns: "Vilken",
        category: "bok",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/9oWzGxf0N84AAAAM/two-broke-girls-bible.gif",
        images: [
            "/images/bible1.jpg",
            "/images/bible2.jpg",
            "/images/bible3.jpg",
            "/images/bible4.jpg",
            "/images/bible5.jpg",
        ],
        correctAnswer: [
            "Bibeln",
            "The Bible",
            "Bible",
        ],
        options: hints.book
    },
    {
        id: 7,
        pronouns: "Vilken",
        category: "dödad person",
        type: "kommenteras",
        color: "#191919",
        gif: "",
        images: [
            "/images/binladen1.jpg",
            "/images/binladen2.jpg",
            "/images/binladen3.jpg",
            "/images/binladen4.jpg",
            "/images/binladen5.jpg",
        ],
        correctAnswer: [
            "Usama bin Ladin",
            "Osama bin Laden",
            "Bin Laden",
            "Bin Ladin"
        ],
        options: hints.killed
    },
    {
        id: 8,
        pronouns: "Vilken",
        category: "viral video",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/vbqJqlRRnJQAAAAM/leave-her-alone-crying.gif",
        images: [
            "/images/britneyalone1.jpg",
            "/images/britneyalone2.jpg",
            "/images/britneyalone3.jpg",
            "/images/britneyalone4.jpg",
            "/images/britneyalone5.jpg",
        ],
        correctAnswer: [
            "Leave Britney Alone!",
            "Leave Britney Alone",
            "Leave Britney",
            "Britney Alone"
        ],
        options: hints.viralVideo
    },
    {
        id: 9,
        pronouns: "Vilken",
        category: "viral video",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/3CLUTyj-EjkAAAAM/tom-cruise-oprah.gif",
        images: [
            "/images/cruiseoprah1.jpg",
            "/images/cruiseoprah2.jpg",
            "/images/cruiseoprah3.jpg",
            "/images/cruiseoprah4.jpg",
            "/images/cruiseoprah5.jpg",
        ],
        correctAnswer: [
            "Tom Cruise Jumpes On Oprah's Couch",
            "Tom Cruise Jumpes On Oprah Couch",
            "Tom Cruise Oprah",
            "Tom Cruise Couch Oprah",
            "Tom Cruise Jumpes",
            "Tom Cruise Couch",
            "Oprah, Tom Cruise"
        ],
        options: hints.viralVideo
    },
    {
        id: 10,
        pronouns: "Vilken",
        category: "fobi",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/zMPmq5AF1MsAAAAM/mr-bean-d3nt1st.gif",
        images: [
            "/images/dentist1.jpg",
            "/images/dentist2.jpg",
            "/images/dentist3.jpg",
            "/images/dentist4.jpg",
            "/images/dentist5.jpg",
        ],
        correctAnswer: [
            "Tandläkarskräck",
            "Tandläkare",
            "Dentists",
            "Odontofobi",
        ],
        options: hints.phobia
    },
    {
        id: 11,
        pronouns: "Vilken",
        category: "viral video",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/bXAKEBgc_D0AAAAM/do-it-what-are-you-waiting-for.gif",
        images: [
            "/images/doit1.jpg",
            "/images/doit2.jpg",
            "/images/doit3.jpg",
            "/images/doit4.jpg",
            "/images/doit5.jpg",
        ],
        correctAnswer: [
            'Shia LaBeouf "Just Do It" Motivational Speech',
            "Just Do It",
            "Shia LaBeouf Just Do It",
            "Just Do It Shia LaBeouf",
        ],
        options: hints.viralVideo
    },
    {
        id: 12,
        pronouns: "Vilket",
        category: "djur",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/xW3QYN8HJ2wAAAAM/fiona-hippo.gif",
        images: [
            "/images/hippo1.jpg",
            "/images/hippo2.jpg",
            "/images/hippo3.jpg",
            "/images/hippo4.jpg",
            "/images/hippo5.jpg",
        ],
        correctAnswer: [
            "Flodhäst",
            "Hippo",
            "Hippopotamus",
        ],
        options: hints.animal
    },
    {
        id: 13,
        pronouns: "Vilken",
        category: "films filmscen",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/alpOB08F6M4AAAAM/cold-tired.gif",
        images: [
            "/images/jacktitanic1.jpg",
            "/images/jacktitanic2.jpg",
            "/images/jacktitanic3.jpg",
            "/images/jacktitanic4.jpg",
            "/images/jacktitanic5.jpg",
        ],
        correctAnswer: [
            "Titanic",
        ],
        options: hints.movie
    },
    {
        id: 14,
        pronouns: "Vilken",
        category: "TV-spelskaraktär",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/vZPqW9KdENUAAAAM/teteshrek-mario.gif",
        images: [
            "/images/luigi1.jpg",
            "/images/luigi2.jpg",
            "/images/luigi3.jpg",
            "/images/luigi4.jpg",
            "/images/luigi5.jpg",
        ],
        correctAnswer: [
            "Luigi",
            "Luigi Mario",
        ],
        options: hints.gameCharacter
    },
    {
        id: 15,
        pronouns: "Vilken",
        category: "känd person",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/tNQXG57YITcAAAAM/nelson-mandela.gif",
        images: [
            "/images/mandela1.jpg",
            "/images/mandela2.jpg",
            "/images/mandela3.jpg",
            "/images/mandela4.jpg",
            "/images/mandela5.jpg",
        ],
        correctAnswer: [
            "Nelson Mandela",
            "Mandela",
        ],
        options: hints.celebrity
    },
    {
        id: 16,
        pronouns: "Vilken",
        category: "händelse",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/MXSeMC3lXF4AAAAM/twin-towers-south-tower.gif",
        images: [
            "/images/nineeleven1.jpg",
            "/images/nineeleven2.jpg",
            "/images/nineeleven3.jpg",
            "/images/nineeleven4.jpg",
            "/images/nineeleven5.jpg",
        ],
        correctAnswer: [
            "9/11",
            "nine eleven",
            "Elfte september",
        ],
        options: hints.event
    },
    {
        id: 17,
        pronouns: "Vilken",
        category: "Disney-låt",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/oxvwgtLoHfcAAAAM/the-jungle-book-disney.gif",
        images: [
            "/images/nöjdsomlivetger1.jpg",
            "/images/nöjdsomlivetger2.jpg",
            "/images/nöjdsomlivetger3.jpg",
            "/images/nöjdsomlivetger4.jpg",
            "/images/nöjdsomlivetger5.jpg",
            "/images/nöjdsomlivetger6.jpg",
            "/images/nöjdsomlivetger7.jpg",
            "/images/nöjdsomlivetger8.jpg",
            "/images/nöjdsomlivetger9.jpg",
            "/images/nöjdsomlivetger10.jpg",
        ],
        correctAnswer: [
            "Var nöjd med allt som livet ger",
            "Nöjd som liver ger",
            "Allt som livet ger",
            "Djungelboken",
        ],
        options: hints.disneySong
    },
    {
        id: 18,
        pronouns: "Vilket",
        category: "uppmärksammat brottsfall",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/6ujfExWdBVMAAAAM/oj-simpson.gif",
        images: [
            "/images/ojsimpson1.jpg",
            "/images/ojsimpson2.jpg",
            "/images/ojsimpson3.jpg",
            "/images/ojsimpson4.jpg",
            "/images/ojsimpson5.jpg",
        ],
        correctAnswer: [
            "Mordrättegången mot OJ Simpson",
            "OJ Simpson rättegången",
            "OJ Simpson",
            "OJ",
        ],
        options: hints.crime
    },
    {
        id: 19,
        pronouns: "Vilken",
        category: "musikvideo",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/IAWKXaW_52sAAAAM/rickroll.gif",
        images: [
            "/images/rickastley1.jpg",
            "/images/rickastley2.jpg",
            "/images/rickastley3.jpg",
            "/images/rickastley4.jpg",
            "/images/rickastley5.jpg",
        ],
        correctAnswer: [
            "Rick Astley - Never Gonna Give You Up",
            "Never Gonna Give You Up - Rick Astley",
            "Never Gonna Give You Up",
            "Rick Astley",
        ],
        options: hints.musicvideo
    },
    {
        id: 20,
        pronouns: "Vilken",
        category: "viral video",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/yZFT368MiO4AAAAM/skogsturken-vem-vare.gif",
        images: [
            "/images/skogsturken1.jpg",
            "/images/skogsturken2.jpg",
            "/images/skogsturken3.jpg",
            "/images/skogsturken4.jpg",
            "/images/skogsturken5.jpg",
        ],
        correctAnswer: [
            "Vem var det som kasta? (Skogsturken)",
            "Vem var det som kasta?",
            "Skogsturken",
        ],
        options: hints.viralVideo
    },
    {
        id: 21,
        pronouns: "Vilken",
        category: "byggnad",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/JvLh_Gs0qUwAAAAM/matematica-rio-professor.gif",
        images: [
            "/images/tajmahal1.jpg",
            "/images/tajmahal2.jpg",
            "/images/tajmahal3.jpg",
            "/images/tajmahal4.jpg",
            "/images/tajmahal5.jpg",
        ],
        correctAnswer: [
            "Taj Mahal",
        ],
        options: hints.building
    },
    {
        id: 22,
        pronouns: "Vilken",
        category: "musikvideo",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/NfvDWkLlWrUAAAAM/toxic-music-video-britney-spears.gif",
        images: [
            "/images/toxic1.jpg",
            "/images/toxic2.jpg",
            "/images/toxic3.jpg",
            "/images/toxic4.jpg",
            "/images/toxic5.jpg",
        ],
        correctAnswer: [
            "Britney Spears - Toxic",
            "Toxic - Britney Spears",
            "Toxic"
        ],
        options: hints.musicvideo
    },
    {
        id: 23,
        pronouns: "Vilket",
        category: "uppmärksammat brottsfall",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/mOiigyWpGT8AAAAM/richard-nixon-republican.gif",
        images: [
            "/images/watergate1.jpg",
            "/images/watergate2.jpg",
            "/images/watergate3.jpg",
            "/images/watergate4.jpg",
            "/images/watergate5.jpg",
        ],
        correctAnswer: [
            "Watergate-skandalen",
            "Watergate",
        ],
        options: hints.crime
    },
    {
        id: 24,
        pronouns: "Vilket",
        category: "sport-ögonblick",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media3.giphy.com/media/PDmXIQru17Udy/200.webp?cid=ecf05e47ecbp288tv1vzb3faqwfsei0o2fb18ytu3xqzwoub&rid=200.webp&ct=g",
        images: [
            "/images/zidane1.jpg",
            "/images/zidane2.jpg",
            "/images/zidane3.jpg",
            "/images/zidane4.jpg",
            "/images/zidane5.jpg",
        ],
        correctAnswer: [
            "Zinedine Zidane knockar Materazzi i VM-finalen 2006",
            "Zidane knockar Materazzi",
        ],
        options: hints.sport
    },
    {
        id: 25,
        pronouns: "Vilken",
        category: "seriemördare",
        type: "kommenteras",
        color: "#191919",
        gif: "https://media.tenor.com/0uDR4kOpFnAAAAAM/office-gunshow.gif",
        images: [
            "/images/zodiac1.jpg",
            "/images/zodiac2.jpg",
            "/images/zodiac3.jpg",
            "/images/zodiac4.jpg",
            "/images/zodiac5.jpg",
        ],
        correctAnswer: [
            "Zodiac-mördaren",
            "The Zodiac Killer",
            "Zodiac Killer",
            "Zodiac"
        ],
        options: hints.serialkiller
    },
    {
        id: 26,
        pronouns: "Vilken",
        category: "film",
        type: "recenseras",
        color: "#181b20",
        gif: "https://media.tenor.com/l9YjrqYPo4YAAAAM/the-lion-king-simba.gif",
        images: [
            "/images/lionking1.png",
            "/images/lionking2.jpg",
            "/images/lionking3.png",
            "/images/lionking4.png",
            "/images/lionking5.jpg",
        ],
        correctAnswer: [
            "Lejonkungen",
            "The Lion King",
            "Lion King",
        ],
        options: hints.movie
    },
    {
        id: 27,
        pronouns: "Vilken",
        category: "film",
        type: "recenseras",
        color: "#14171c",
        gif: "https://media.tenor.com/AAMlkVnDjXgAAAAM/its-groundhog-day-again-reporting.gif",
        images: [
            "/images/groundhog1.jpg",
            "/images/groundhog2.jpg",
            "/images/groundhog3.jpg",
            "/images/groundhog4.jpg",
            "/images/groundhog5.jpg",
        ],
        correctAnswer: [
            "Måndag Hela Veckan",
            "Groundhog Day",
        ],
        options: hints.movie
    },
    {
        id: 28,
        pronouns: "Vilken",
        category: "film",
        type: "recenseras",
        color: "#14171c",
        gif: "https://media.tenor.com/82rzvAm6G68AAAAM/ratatouille.gif",
        images: [
            "/images/rat1.jpg",
            "/images/rat2.jpg",
            "/images/rat3.jpg",
            "/images/rat4.jpg",
            "/images/rat5.jpg",
        ],
        correctAnswer: [
            "Ratatouille",
            "Råttatouille",
        ],
        options: hints.movie
    },
    {
        id: 29,
        pronouns: "Vilken",
        category: "film",
        type: "recenseras",
        color: "#14171c",
        gif: "http://i.imgur.com/1iPcGK2.gif",
        images: [
            "/images/sune1.jpg",
            "/images/sune2.jpg",
            "/images/sune3.jpg",
            "/images/sune4.jpg",
            "/images/sune5.jpg",
        ],
        correctAnswer: [
            "Sunes Sommar",
            "Sune",
        ],
        options: hints.movie
    },
]
