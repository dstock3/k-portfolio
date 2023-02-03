import autohaus from '../assets/autohaus.webp'
import ettelson from '../assets/ettelson.webp'
import wkford from '../assets/wkford.webp'
import aronson from '../assets/aronson.webp'
import marketing from '../assets/marketing.webp'
import desk from '../assets/desk.webp'
import home from '../assets/home.webp'
import cost from '../assets/chronic.webp'
import mugger from '../assets/mugger.webp'
import drenge from '../assets/drenge.webp'
import fading from '../assets/fading.webp'
import cover from '../assets/cover.webp'
import sigh from '../assets/sigh.webp'
import artemis from '../assets/artemis.webp'
import canyon from '../assets/canyon.webp'
import audiPDF from '../assets/SantaMonicaAudi.pdf'
import wharvesPDF from '../assets/Wharves.pdf'
import palehoundPDF from '../assets/palehound.pdf'
import scratchPDF from '../assets/scratch.pdf'
import scratch from '../assets/scratch.webp'
import autohausPDF from '../assets/autohaus.pdf'
import ettlesonPDF from '../assets/ettleson.pdf'
import haggertyPDF from '../assets/haggerty.pdf'
import wkfordPDF from '../assets/wkford.pdf'
import aronsonPDF from '../assets/aronson.pdf'
import personasPDF from '../assets/personas.pdf'
import xmasPDF from '../assets/xmas.pdf'
import xmas2PDF from '../assets/xmas2.pdf'

const content = {
    "Automotive Agency": {
        "haggerty": {
            "id": 0,
            "client": "Mike Haggerty Buick GMC",
            "title": "2022 GMC Canyon Model Information in Oak Lawn, IL",
            "source": haggertyPDF,
            "desc": "Interested in driving a new small pickup truck with serious capabilities, modern style, and ahead-of-the-curve technology? The 2022 GMC Canyon is a great option to consider! With spacious seating, impressive towing capabilities, and much more to revel in, the new Canyon is sure to take your daily driving experience to the next level.",
            "type": "pdf",
            "img": {
                "source": canyon, 
                "alt": "the 2022 GMC Canyon"
            }
        },
        "ettleson": {
            "id": 3,
            "client": "Ettleson Hyundai",
            "title": "Hyundai Service Center Countryside, IL | Automotive Repair & Maintenance",
            "source": ettlesonPDF,
            "desc": "Whether you need an oil change on your new Hyundai Elantra or 100,000-mile service on your well-loved Hyundai Tucson, you’ll want to bring your vehicle to a service center you can trust. Look no further than the Ettleson Hyundai auto service center in Countryside, IL.",
            "type": "pdf",
            "img": {
                "source": ettelson, 
                "alt": "Ettelson Hyundai logo"
            }
        }, 
        "wkford": {
            "id": 5,
            "client": "W-K Ford",
            "title": "Used Ford Cars, Trucks & SUVs for Sale in Boonville, MO | W-K Ford",
            "source": wkfordPDF, 
            "desc": "Are you looking for a used Ford car, truck, or SUV? A great place to begin your search is at W-K Ford in Boonville, MO! We have a diverse range of used Ford models for drivers to choose from. Whether you're looking for a fully-loaded F-150 or a no-frills Fusion, there's a model for you in our used inventory.",
            "type": "pdf",
            "img": {
                "source": wkford, 
                "alt": "W-K Ford logo"
            }
        },
        "santa-monica-audi": {
            "id": 7,
            "client": "Santa Monica Audi",
            "title": "The 2019 Artemis Women in Action Film Festival",
            "source": audiPDF, 
            "desc": "Filmmakers Melanie Wise and Zac Baldwin recognized their love of female driven action movies early on in their lives. Then they took their passion a step further than moviemaking: honoring the women who create these globally beloved films by founding the Artemis Women in Action Film Festival (AWIAFF).",
            "type": "pdf",
            "img": {
                "source": artemis,
                "alt": "Banner for the Artemis Women in Action Film Festival"
            }
        },
        "aronson": {
            "id": 12,
            "client": "Aronson Advertising",
            "title": "February 2019 Employee of the Month | Aronson",
            "source": aronsonPDF, 
            "desc": "Aronson Advertising is proud to announce our February 2019 employees of the month! Each month, three outstanding team members are named an employee of the month for their hard work and dedication to their team and the company. They also receive one of the coveted employee of the month parking spots just steps from the front door.",
            "date": "02/15/2019",
            "type": "pdf",
            "img": {
                "source": aronson,
                "alt": "February 2019 Employee of the Month"
            }
        },
        "autohaus2": {
            "id": 25,
            "client": "Autohaus on Edens",
            "title": "2022 Mercedes-Benz GLS SUV Model",
            "source": autohausPDF,
            "desc": "Interested in a premium SUV with roomy passenger space, advanced technology, and impressive performance? The 2022 Mercedes-Benz GLS SUV is a great choice for all types of drivers. To see if it’s the perfect luxury SUV for your needs, read through the in-depth information from the Autohaus on Edens team.",
            "type": "pdf",
            "img": {
                "source": autohaus,
                "alt": "Autohaus on Edens logo"
            }
        }
    },
    "Content Marketing": {
        "trends": {
            "id": 14,
            "client": "Aronson Advertising",
            "title": "A Quick Look at the Biggest 2019 Content Marketing Trends",
            "source":  "https://www.aronsonads.com/blog/2019-content-marketing-trends/",
            "desc": "If you were to look back on content marketing strategies ten years ago, chances are you'd be scratching your head and wondering why those methods were ever used! Of course, the digital marketing landscape has changed significantly since then, and content marketers must adjust to those changes in order to create relevant, inventive, and helpful content.",
            "date": "01/29/2019",
            "type": "web",
            "img": {
                "source": marketing,
                "alt": "marketing illustration"
            }
        },
        "negative": {
            "id": 15,
            "client": "Aronson Advertising",
            "title": "3 Reasons for Avoiding Negative Language in Content Marketing",
            "source": "https://www.aronsonads.com/blog/3-reasons-avoiding-negative-language-content-marketing/",
            "desc":"At long last, the new 2021 Ford Bronco reveal is here! This legendary SUV, known for its off-road capabilities and rugged style, is back for the 2021 model year. And better yet, Ford Motor Company has an exciting premiere in store for fans and enthusiasts.",
            "date": "02/19/2018",
            "type": "web",
            "img": {
                "source": desk,
                "alt": "desk with various items displayed in a decorative fashion"
            }
        },
        "personas": {
            "id": 26,
            "client": "Aronson Advertising",
            "title": "Leveraging Customer Personas",
            "source": personasPDF,
            "desc": "Are you looking for a way to boost your content? Whether you’re looking to enhance search engine results or simply want to elevate your content, developing a customer persona strategy for your brand or clients is a sure-fire way to engage your audience and get the results you’re looking for. This article takes a snapshot of the persona creation process and how you can use it to your advantage.",
            "date": "09/15/2020",
            "type": "pdf",
            "img": {
                "source": marketing,
                "alt": "marketing illustration"
            }
        },
        "xmas": {   
            "id": 27,
            "client": "Aronson Advertising",
            "title": "Celebrating the Holidays at Aronson Advertising: A 2021 Recap",
            "source": xmasPDF,
            "desc": "The holiday season looked much different for everyone over the past couple of years. For health and safety reasons, we’ve had to come up with creative ways to see our friends and family during one of the most anticipated times of the year. Luckily, there was some relief in 2021! Although Aronson Advertising has always focused on keeping spirits high during the holidays, 2021 offered a welcome return to some in-person celebrations and volunteering opportunities, as well as many fun activities we could do from the comfort of our home offices.",
            "date": "01/28/2022",
            "type": "pdf",
            "img": {
                "source": marketing,
                "alt": "marketing illustration"
            }
        },
        "xmas2": {
            "id": 28,
            "client": "Aronson Advertising",
            "title": "2022 Holiday Activities & Celebrations at Aronson Advertising!",
            "source": xmas2PDF,
            "desc": "The holidays seem to sneak up on us more quickly as the years go by, which only means a month of fun festivities for Aronson Advertising employees to look forward to! Going into our third year of remote working, many holiday celebrations were held through our project management platform and via email, as were posts about our holiday traditions. Plus, we also had a couple of opportunities to hang out with our co-workers in person!",
            "date": "12/30/2022",
            "type": "pdf",
            "img": {
                "source": marketing,
                "alt": "marketing illustration"
            }
        }
    },
    "Personal Finance": {
        "home": {
            "id": 16,
            "client": "The Financial Diet",
            "title": "3 Ways Working From Home Has Actually Been Better For My Mental Health",
            "source": "https://thefinancialdiet.com/3-ways-working-from-home-has-been-better-for-my-mental-health/",
            "desc": "I am absolutely not a morning person. I struggle to get out of bed and prefer late nights over the early hours of the day. So when my employer announced that they would start letting us work from home, despite all my anxiety and uncertainty over coronavirus, I felt relieved.",
            "date": "07/09/2020",
            "type": "web",
            "img": {
                "source": home,
                "alt": "a woman working on her laptop"
            }
        },
        "chronic": {
            "id": 17,
            "client": "The Financial Diet",
            "title": "The Cost Of Living With Chronic Pain",
            "source": "https://thefinancialdiet.com/cost-living-chronic-pain/",
            "desc": "One day, seemingly out of nowhere, the left side of my jaw began to cause me dull, aching pain. I wasn't too worried because I'd had jaw pain before. Every once in a while...",
            "date": "01/08/2018",
            "type": "web", 
            "img": {
                "source": cost,
                "alt": "a woman with a sunset in the background"
            }
        }
    },
    "Music": {
        "segall": {
            "id": 18,
            "client": "Pop 'stache",
            "title": "Ty Segall - Emotional Mugger - Pop 'stache",
            "source": "http://popstache.com/album-review/ty-segall-emotional-mugger/",
            "desc": "Release Date: January 22, 2016 Ty Segall releases a new record nearly each year. Whether running solo or alongside the Ty Segall Band, he has over eight studio albums to his name since 2008. This is a prolific number for a 28-year-old. Segall adds another record to his psychedelic catalog with Emotion Mugger.",
            "date": "02/18/2016",
            "type": "web",
            "img": {
                "source": mugger,
                "alt": "album art for Ty Segall: Emotional Mugger "
            }
        }, 
        "drenge": {
            "id": 19,
            "client": "Pop 'stache",
            "title": "Drenge - Undertow - Pop 'stache",
            "source": "http://popstache.com/album-review/drenge-undertow/",
            "desc": "Release Date: April 7, 2015 Drenge's Undertow is only its second release, having released a self-titled album in the summer of 2013, and yet the album is exceptionally executed. Carefully formulated with heavy, echo-y guitars and powerful, non-stop drumming, Undertow is on its way to be a huge success for Drenge because of its dynamic and emotionally honest songs.",
            "date": "04/08/2015",
            "type": "web",
            "img": {
                "source": drenge,
                "alt": "album art for Drenge: Undertow "
            }
        },
        "deerhunter": {
            "id": 20,
            "client": "Pop 'stache",
            "title": "Deerhunter - Fading Frontier - Pop 'stache",
            "source": "http://popstache.com/album-review/deerhunter-fading-frontier/",
            "desc": "Release Date: October 16, 2015 Dream pop and shoegaze music have infiltrated indie music recently. With veteran bands like Slowdive and My Bloody Valentine reuniting, along with the success of more recent bands like Beach House and No Joy, the dream isn't over.",
            "date": "11/08/2015",
            "type": "web", 
            "img": {
                "source": fading,
                "alt": "album art for Deerhunter: Fading Frontier "
            }

        },
        "unknown": {
            "id": 21,
            "client": "Pop 'stache",
            "title": "Unknown Mortal Orchestra - Multi-Love - Pop 'stache",
            "source": "http://popstache.com/album-review/unknown-mortal-orchestra-multi-love/",
            "desc": "Release Date: May 26, 2015 Unknown Mortal Orchestra has a very off-putting band name. Is this band a group of metal dudes who love orchestral music and old video games? One could surmise this or whatever else comes to the imagination. The truth is, though, that Unknown Mortal Orchestra isn't any of the things listed above.",
            "date": "05/26/2015",
            "type": "web",
            "img": {
                "source": cover,
                "alt": "album art for Unknown Mortal Orchestra: Multi-Love"
            }
        },
        "sigh": {
            "id": 22,
            "client": "The Le Sigh",
            "title": "EP: PALEHOUND - BENT NAIL",
            "source": palehoundPDF,
            "desc": "Ellen Kempner’s voice is one you’ve never heard before. It’s soft and sweet but also mature and honest. It sounds like the voice of a woman in her mid-to-late twenties but in reality, it’s projected from the throat of a nineteen-year-old. Kempner’s voice is not the only thing that is distinctive of her band, Palehound.",
            "date": "11/21/2013",
            "type": "pdf",
            "img": {
                "source": sigh,
                "alt": "the Le Sigh logo"
            }

        }, 
        "sigh-two": {
            "id": 23,
            "client": "The Le Sigh",
            "title": "SPLIT: THE WHARVES / THE ROSY CRUCIFIXION",
            "source": wharvesPDF,
            "desc": "When I sat down to listen to the new split LP from The Wharves and The Rosy Crucifixion, I immediately knew that this was an album I’d gush about to my friends. Both bands have written some of the most refreshing songs I’ve heard in a long time. I’m genuinely excited about this album and I basically want to put it on repeat all day, every day. It’s just that good. The album is described on Soft Power Records’ website as a “total beast”, and rightly so.",
            "date": "10/24/2013",
            "type": "pdf",
            "img": {
                "source": sigh,
                "alt": "the Le Sigh logo"
            }

        }

    },
    "Cryptocurrency and NFTs": {
        "scratch": {
            "id": 24,
            "client": "Scratch",
            "title": "Scratch Token & The Scratch Engine, V1.5 Whitepaper",
            "source": scratchPDF,
            "desc": "Whether you’re a savvy investor or simply an enthusiast, chances are you’ve heard about non-fungible tokens (NFTs). NFTs are unique, one-of-a-kind digital assets that lie within the Ethereum blockchain, along with other real-world items are brought to life on the blockchain as digital assets.",
            "type": "pdf",
            "img": {
                "source": scratch,
                "alt": "the Scratch logo"
            }
        }
    }
}

export { content }