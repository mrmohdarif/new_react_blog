import React, { createContext, useContext, useState } from "react";
import { Logo } from "./Logo";
import { Home } from "./home/Home";
import { Bollywood } from "./component/Bolywood/Bollywood";
import { Hollywood } from "./component/Hollywood/Hollywood";
import { Fitness } from "./component/Fitness/Fitness";
import { Technology } from "./component/Tech/Technology";
import { Food } from "./component/Food/Food";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Javan } from "./home/subcomponent/Javan";
import { TikTok } from "./home/subcomponent/TikTok";
import { Papaya } from "./home/subcomponent/Papaya";
import Bank from "./home/subcomponent/thelatestarticlecomponent/Bank";
import Indiannavey from "./home/subcomponent/thelatestarticlecomponent/Indiannavey";
import Manoj from "./component/Bolywood/Subcomponent/Manoj";
import Anushkha from "./component/Bolywood/Subcomponent/Anushkha";
import Dharavi from "./component/Bolywood/Subcomponent/Dharavi";
import Sid from "./component/Bolywood/Thelatestarticle/Sid";
import Priyanka from "./component/Bolywood/Thelatestarticle/Priyanka";
import Ahana from "./component/Bolywood/Thelatestarticle/Ahana";
import Netflex from "./component/Hollywood/subcomponent/Netflex";
import Wwe from "./component/Hollywood/subcomponent/Wwe";
import Cnn from "./component/Hollywood/subcomponent/Cnn";
import Microsoft from "./component/Hollywood/subcomponent2/Microsoft";
import Idol from "./component/Hollywood/subcomponent2/Indianidol";
import Nicjonas from "./component/Hollywood/subcomponent2/Nicjonas";
import Indianidol from "./component/Hollywood/subcomponent2/Indianidol";
import Medcine from "./component/Fitness/subcomponent/Medcine";
import Smoke from "./component/Fitness/subcomponent/Smoke";
import Mask from "./component/Fitness/subcomponent/Mask";
import Bone from "./component/Fitness/newcompforarticle/Bone.js";
import Mashroom from "./component/Fitness/newcompforarticle/Mashroom";
import Decise from "./component/Fitness/newcompforarticle/Decise";
import MicrosoftAi from "./component/Tech/latestcomponent/MicrosoftAi";
import Phone2 from "./component/Tech/latestcomponent/Phone2";
import Iphone from "./component/Tech/latestcomponent/Iphone";
import Chatgpt from "./component/Tech/articlecomp/Chatgpt";
import Nokia from "./component/Tech/articlecomp/Nokia";
import Whatsapp from "./component/Tech/articlecomp/Whatsapp";
import Malai from "./component/Food/component1/Malai";
import Phulahari from "./component/Food/component1/Phulahari";
import Puri from "./component/Food/component1/Puri";
import Pavbhaji from "./component/Food/component2/Pavbhaji";
import Masaladhosa from "./component/Food/component2/Masaladhosa";
import Roghanjosh from "./component/Food/component2/Roghanjosh";
import Footer from "./Footer";
import Rahul from "./home/homelateststories/Rahul";
import Virat from "./home/homelateststories/Virat";
import Upi from "./home/homelateststories/Upi";
import Akshay from "./component/Bolywood/bolywoodstores/Akshay";
import Zinta from "./component/Bolywood/bolywoodstores/Zinta";
import Khatro from "./component/Bolywood/bolywoodstores/Khatro";
import Prince from "./component/Hollywood/holywoodstores/Prince";
import Lily from "./component/Hollywood/holywoodstores/Lily";
import Kim from "./component/Hollywood/holywoodstores/Kim";
import Juce from "./component/Fitness/fitnessstores/Juce";

import Clinic from "./component/Fitness/fitnessstores/Clinic";
import Anand from "./component/Tech/techlateststores/Anand";
import Iq from "./component/Tech/techlateststores/Iq";
import Google from "./component/Tech/techlateststores/Google";
import Chicken65 from "./component/Food/foodstores/Chicken65";
import Gulabjamun from "./component/Food/foodstores/Gulabjamun";
import Pakoda from "./component/Food/foodstores/Pakoda";

export const store1=createContext();



export function NavigationBar() {
  const [navdata1, setnavdata1] = useState([
    {
      id: "1",

      name: "Hindustan Times",
      author: "HT Entertainment Desk",
      title:
        "Shah Rukh video calls 60-year-old fan battling cancer, promises financial help - Hindustan Times",
      description:
        "Shah Rukh Khan recently video-called a 60-year-old fan battling cancer and promised to meet her soon as well as help her financially for the treatment. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-video-calls-60-year-old-fan-battling-cancer-promises-financial-help-reads-a-dua-for-her-101684832226705.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/srk_1684832445167_1684832445534.jpg",
      publishedAt: "2023-05-23T09:40:49Z",
      content:
        "Shah Rukh Khan won hearts once again with his sweet gesture towards an ailing patient who is a huge fan of the star. The fan had expressed her wish of meeting him at least once in her life, and the D… [+1922 chars]",
    },
    {
      id: "2",
      categorey: "News",
      path: "/manoj",
      name: "The Hindu",
      author: "The Hindu",
      title:
        "‘Sirf Ek Bandaa Kaafi Hai’ movie review: Manoj Bajpayee steps up in court - The Hindu",
      description: "",
      url: "https://www.thehindu.com/entertainment/movies/sirf-ek-bandaa-kaafi-hai-movie-review-manoj-bajpayee-steps-up-in-court/article66883486.ece",
      urlToImage:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/05/sirf-ek-bandaa-kaafi-hai-movie-review-00.jpg",
      publishedAt: "2023-05-23T07:37:00Z",
      content:
        "For a while now, we’ve craved a great Manoj Bajpayee performance in theatres. Sonchiriya was a lifetime ago, Suraj Pe Mangal Bhari droll but undistinguished. Instead, all his recent feats have been on the web; season two of The Family Man, Rayand Gulmohar. He has found a new home on OTT (and a dedicated audience base). The exhibition arena is still wobbly, so it makes sense for Sirf Ek Bandaa Kaafi Hai — a debut feature by Apoorv Singh Karki — to arrive directly on ZEE5. Nevertheless, I wish the film had secured a theatrical release. A courtroom drama of the old school, it features a blazing, live wire Bajpayee; not the sort of performance to be savoured on laptops and phones. andaa begins with multiple disclaimers, including one that says, “The film is a dramatisation of events.” By the time a devastated young girl has recorded her statement in Delhi and a bearded saint with a beatific smile is picked up in Jodhpur, we know what events are being traced. In 2013, self-styled godman Asaram Bapu was arrested for raping a 16-year-old minor in one of his ashrams. After five years, he was held guilty and imprisoned for life. It was a landmark case under The Protection of Children from Sexual Offences (POCSO) Act; PC Solanki, a small-time Jodhpur lawyer who went toe-to-toe with formidable legal bigwigs, became its heroic face. In the film, Asaram isn’t referred to by name (the character, played with creepy equanimity by Surya Mohan Kulshreshtha, is simply addressed as ‘Baba’). PC Solanki, however, is PC Solanki. Early on, he’s approached by the victim’s parents to fight their case. Their previous lawyer was outed negotiating a bribe with Baba’s cohorts, a tactic that will recur throughout the film, along with witness intimidation, vitriolage, and open murder outside court. “There will be many dangers, difficulties,” Solanki (Manoj) forewarns his clients and himself. He’s fully aware of the implications of going against a dangerous and influential cult; he has a young son and an aging mother at home.  ",
    },
    {
      id: "3",
      path: "/anushkha",
      author: "Simran Khan",
      categorey: "News",
      title:
        "Bachcha Saath Mein Hai: Anushka Sharma Refuses To Pose For Paps Because Of Daughter Vamika Kohli. Watch - Times Now",
      description:
        "Anushka Sharma was spotted with daughter Vamika Kholi. The actress refused to pose for the paparazzi who had requested her to do so. For unversed, Anushka and Virat Kohli are private about their daughter and have never revealed her face. They have also reques…",
      url: "https://www.timesnownews.com/entertainment-news/bachcha-saath-mein-hai-anushka-sharma-refuses-to-pose-for-paps-because-of-daughter-vamika-kohli-watch-bollywood-news-entertainment-news-article-100441724",
      urlToImage:
        "https://static.tnn.in/thumb/msid-100441724,updatedat-1684830884351,width-1280,height-720,resizemode-75/100441724.jpg",
      publishedAt: "2023-05-23T08:34:00Z",
      content:
        "TV Newsmakers Today: Aditya Singh Rajput Cremated Today, Anupamaas Nidhi, Aashish React To Paras Statement",
    },
    {
      id: "4",
      path: "/Dharavi",
      categorey: "News",
      name: "Hindustan Times",
      author: "Arfa Javaid",
      title:
        "Teen from Mumbai’s Dharavi becomes luxury beauty brand’s face - Hindustan Times",
      description:
        "Maleesha Kharwa aspires to be a supermodel and draws inspiration from actor Priyanka Chopra.  | Trending",
      url: "https://www.hindustantimes.com/trending/meet-maleesha-kharwa-15-yr-old-from-dharavi-who-became-the-face-of-luxury-beauty-brand-101684828284029.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/maleesha-kharwa-dharavi-mumbai-forest-essentials_1684829209350_1684829226209.jpg",
      publishedAt: "2023-05-23T08:09:21Z",
      content:
        "Maleesha Kharwa, a 15-year-old girl from Mumbai’s Dharavi, has become the face of Forest Essentials, a luxury skincare brand. Forest Essentials introduced her to the world in March this year as their new ‘Yuvati’. Beyond just a personal triumph for Kharwa, this collaboration carries a greater purpose, as the brand strives to empower underprivileged children through education, helping them to transform their dreams into realities. Recently, Forest Essentials posted a clip of Kharwa visiting a store that had her campaign photos. Her wholesome reaction has struck a chord with people.After introducing her as the face of their new campaign, the brand even interviewed her, where she answered 13 questions. Kharwa revealed that Priyanka Chopra is her inspiration and expressed her admiration for Nora Fatehi’s dancing skills. She even showcased her go-to dance move and sang her favourite song.",
    },
    {
      id: "5",
      path: "/sid",
      categorey: "The Latest Article",
      name: "Bollywood",
      author: "HT Entertainment Desk",
      title:
        "Sidharth Malhotra and Kiara Advani return from their Japan vacation. Watch - Hindustan Times",
      description:
        "Sidharth Malhotra and Kiara Advani are back from their Japan vacation. The couple were spotted at the Mumbai airport. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/sidharth-malhotra-and-kiara-advani-walk-hand-in-hand-as-they-return-from-their-japan-vacation-watch-101684851754309.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/kiara-sid_1684851963445_1684851963992.jpg",
      publishedAt: "2023-05-23T14:45:01Z",
      content:
        "Kiara Advani and Sidharth Malhotra were spotted together as they returned from their Japan vacation at the Mumbai airport on Tuesday. The couple walked hand-in-hand as the paparazzi followed them to ",
    },
    {
      id: "6",
      path: "/priyanka",
      name: "Bollywood",
      categorey: "The Latest Article",
      author: "HT Entertainment Desk",
      title:
        "Harman Baweja calls link-up with Priyanka Chopra 'part and parcel of the line’ - Hindustan Times",
      description:
        "Harman Baweja opened up about the media attention to his relationship with Priyanka Chopra and said its ‘part and parcel’ of the celebrity and media culture. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/harman-baweja-calls-link-up-with-priyanka-chopra-part-and-parcel-of-the-line-101684842065652.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/harman1_1684843042106_1684843042504.jpg",
      publishedAt: "2023-05-23T12:07:49Z",
      content:
        "Harman Baweja is all set to make his OTT debut with Hansal Mehta's Scoop. The actor recently opened up about his past relationship with actor Priyanka Chopra and how he can't really complain about ....",
    },
    {
      id: "7",
      path: "/ahana",
      name: "Bollywood",
      categorey: "The Latest Article",
      author: null,
      title:
        'Aahana Kumra On Fan Who Tried To Touch Her: "It Was Kind Of Weird" - NDTV Movies',
      description:
        "There should be bouncers to make sure that these kinds of people are not there, noted Aahana Kumra",
      url: "https://www.ndtv.com/entertainment/aahana-kumra-on-fan-who-tried-to-touch-her-it-was-kind-of-weird-4059267",
      urlToImage:
        "https://c.ndtvimg.com/2023-05/2om7t7t_aahana-_625x300_23_May_23.jpg",
      publishedAt: "2023-05-23T11:40:07Z",
      content:
        "Image was shared by Aahana Kumra. (courtesy: aahanakumra )\r\nNew Delhi: After she was filmed telling a fan posing for a photo with her not to touch her, actress Aahana Kumra told Hindustan Times that … ",
    },
    {
      id: "8",
      path:"/akshay",
      categorey: "Latest Stories",
      name: "Bollywood",
      author: "etimes.in",
      title:"Akshay Kumar offers prayers at Kedarnath Temple, greets fans with folded hands - watch video - Indiatimes.com",
      description:"Akshay Kumar took some time off from the shoot of 'Bade Miyan Chote Miyan', to offer prayers at the Kedarath temple.",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/akshay-kumar-offers-prayers-at-kedarnath-temple-chants-bam-bam-bhole-watch-video/articleshow/100444644.cms",
      urlToImage:"https://static.toiimg.com/thumb/msid-100444972,width-1070,height-580,imgsize-51318,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-05-23T09:48:00Z",
      content:'"Only respect for these artists": Tiger Shroff expresses gratitude towards stunt artistsThe actor Tiger Shroff is one of the best performers when it comes to action sequences. Alongside all of the ha…',
    },
    {
      id: "9",
      path:"/zinta",
      categorey: "Latest Stories",
      name: "Bollywood",
      author: "HT Entertainment Desk",
      title:"Preity Zinta, husband Gene chat and laugh with Dalai Lama in Dharamshala - Hindustan Times",
      description:"Preity Zinta, along with Gene Goodenough, met Dalai Lama in Himachal Pradesh. The actor said she was grateful as she could spend time with him. | Bollywood",
      url: "https://www.hindustantimes.com/entertainment/bollywood/preity-zinta-husband-gene-goodenough-chat-and-laugh-with-dalai-lama-in-dharamshala-see-pics-101684828315003.html",
      urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/preity_zinta_1684829537729_1684829553591.jpg",
      publishedAt: "2023-05-23T08:20:36Z",
      content:"Actor Preity Zinta shared pictures as she and her husband Gene Goodenough met Dalai Lama in Dharamshala. Taking to Instagram, Preity posted a series of photos as they shared a conversation and some ",
    },
    {
      id: "10",
      path:"/khatro",
      categorey: "Latest Stories",
      name: "Bollywood",
      author: "HT Entertainment Desk",
      title:"Khatron Ke Khiladi 13's complete list of confirmed contestants - Hindustan Times",
      description:"Producers of the adventure reality show Khatron Ke Khiladi 13 officially confirmed the final list of contestant for the upcoming show.",
      url: "https://www.hindustantimes.com/entertainment/tv/khatron-ke-khiladi-13s-complete-list-of-confirmed-contestants-daisy-shah-sheezan-khan-and-more-101684824765314.html",
      urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/kkk13confirmedlist_sheezandaisy_1684828449423_1684828449670.jpg",
      publishedAt: "2023-05-23T08:13:23Z",
      content:"The final list of confirmed contestants for the upcoming season of the adventure reality show Khatron Ke Khiladi 13 is out. The channel announced season 13 of Rohit Shetty's show on Tuesday. ",
    },

    {
      id: "11",
      path: "/netflex",
      categorey: "The Latest",
      name: "Hollywood",
      author: "Jay Peters",
      title:
        "Netflix's password sharing crackdown is here — and it costs $7.99 per month - The Verge",
      description:
        "Netflix has revealed more details about its password-sharing crackdown. It says it will cost users in the US an extra $7.99 per month to share their account with another user outside their households.",
      url: "https://www.theverge.com/2023/5/23/23734725/netflix-password-sharing-us-pricing-streaming",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/ScXzGQ8lrcWwmyFEyuCWvqtTjPE=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951360/STK072_VRG_Illo_N_Barclay_8_netflix.jpg",
      publishedAt: "2023-05-23T18:22:43Z",
      content:
        "Netflixs password sharing crackdown is here and it costs $7.99 per month\r\nNetflixs password sharing crackdown is here and it costs $7.99 per month\r\n / Netflixs password sharing crackdown has reached … [+3658 chars]",
    },
    {
      id: "12",
      path: "/wwe",
      categorey: "The Latest",
      name: "Hollywood",
      title:
        "FULL MATCH — Cena vs. Foley vs. Lashley vs. Orton vs. Booker: Night of Champions 2007 - WWE",
      description:
        "John Cena defends the WWE Championship against Bobby Lashley, Mick Foley, Randy Orton and King Booker in an action-packed Five Pack Challenge: Courtesy of Pe...",
      url: "https://www.youtube.com/watch?v=lItxvpYRoHY",
      urlToImage: "https://i.ytimg.com/vi/lItxvpYRoHY/maxresdefault.jpg",
      publishedAt: "2023-05-23T15:00:37Z",
      content: "",
    },
    {
      id: "13",
      path: "/cnn",
      categorey: "The Latest",
      name: "Hollywood",
      author: "Marianne Garvey",
      title: "Emma Heming Willis shares update on Bruce Willis’ health - CNN",
      description: "Emma Heming Willis is sharing a family update.",
      ur: "https://www.cnn.com/2023/05/23/entertainment/emma-heming-willis-bruce-willis-health-dementia/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230523104943-emma-bruce-willis-file-2019-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-23T15:24:00Z",
      content:
        "Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter, Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,",
    },

    {
      id: "14",
      path: "/microsoft",
      name: "Hollywood",
      categorey: "The Latest Article",
      author: "Tom Warren",
      title:
        "Microsoft's Copilot and Bing AI plug-ins will be interoperable with ChatGPT - The Verge",
      description:
        "Microsoft is using the same open standard as OpenAI for plug-ins across Bing and Copilot. It means developers and users can create AI plug-ins that are interoperable between ChatGPT, Bing, and Copilot.",
      url: "https://www.theverge.com/2023/5/23/23732505/microsoft-ai-bing-copilot-chatgpt-interoperability-support-build",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/CCAiZOaSXBZ90QlUG4O76gDxwwc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24347780/STK095_Microsoft_04.jpg",
      publishedAt: "2023-05-23T15:00:00Z",
      content:
        "Microsofts Copilot and Bing AI plug-ins will be interoperable with ChatGPT\r\nMicrosofts Copilot and Bing AI plug-ins will be interoperable with ChatGPT\r\n / Microsoft will use the same open standard as Microsofts Copilot and Bing AI plug-ins will be interoperable Copilot and Bing AI plug-ins will be interoperable Copilot and Bing AI plug-ins will be interoperable Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter, Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,Emma Heming Willis is sharing a family update.\r\nThe actor, who was diagnosed with frontotemporal dementia earlier this year, has support from his family, which includes his 9-year-old daughter,",
    },
    {
      id: "15",
      path: "/indianidol",
      name: "Hollywood",
      categorey: "The Latest Article",
      author: "Jack Hobbs",
      title:
        "'American Idol' winner Iam Tongi speaks out for first time after 'rigged' backlash - New York Post ",
      description:
        "Iam Tongi spoke out Monday about his “American Idol” win after being crowned the youngest male to ever win the competition.",
      url: "https://nypost.com/2023/05/23/american-idol-winner-iam-tongi-speaks-out-after-rigged-backlash/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011604441.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-05-23T16:25:00Z",
      content:
        "I am Tongi spoke out Monday about his “American Idol” victory after being crowned the youngest male to ever win the competition and how he honored his late father during his time on the show.\r\n“Its am I am Tongi spoke out Monday about his “American Idol” victory after being crowned the youngest male to ever win the competition and how he honored his late father during his time on the show.\r\n“Its am I am Tongi spoke out Monday about his “American Idol” victory after being crowned the youngest male to ever win the competition and how he honored his late father during his time on the show.\r\n“Its am ",
    },

    {
      id: "16",
      path: "/nicjonas",
      name: "Hollywood",
      categorey: "The Latest Article",
      author: "Ellen Durney",
      title:
        'Nick Jonas Got Therapy After "Tragic" ACM Awards Performance - BuzzFeed',
      description:
        "“As I walked toward her, I just went completely blank, and I hit a wrong note and blacked out basically and clocked that it was wrong, and I couldn't stop.”",
      url: "https://www.buzzfeed.com/ellendurney/nick-jonas-got-therapy-after-tragic-acm-awards-performance",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2023-05/23/15/enhanced/1cd25a03c691/original-810-1684856000-2.jpg?crop=1243:651;0,15%26downsize=1250:*",
      publishedAt: "2023-05-23T15:54:32Z",
      content:
        "Nick Jonas Revealed He Had To Seek Therapy After His Infamous Blunder At The 2016 ACM Awards When He “Blacked Out” On Live TV Nick Jonas reflected on the “traumatic” moment in his career that led him to seek therapy.This week, Nick and his fellow Jonas Brothers, Kevin and Joe Jonas, appeared on an episode of Dax Shepard’s Armchair Expert podcast to look back on the various highs and lows of their long careers in the spotlight At one point, when discussing the lower moments they’ve experienced as musicians, Nick brought up a “tragic guitar solo debacle that happened on live TV” while the JoBros were on a break between 2013 and their 2019 comeback.",
    },
    {
      id: "17",
      path:"/kim",
      name: "Hollywood",
      categorey: "Latest Stories",
      author: "Riley Cardoza",
      title:"Kim Kardashian: Kanye West marriage was 'beautiful,' but I can't 'help' him - Page Six",
      description:"“People think that if a relationship doesn’t work out that it’s a failure, but I don’t really look at it like that,” the “Kardashians” star said.",
      url: "https://pagesix.com/2023/05/23/kim-kardashian-kanye-west-marriage-was-beautiful-cant-help-him/",
      urlToImage:"https://pagesix.com/wp-content/uploads/sites/3/2023/05/kim-kardashian-kanye-west-18.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-05-23T13:37:00Z",
      content:"Kim Kardashian doesn’t consider her marriage to Kanye West a “failure.”\r\nThe “Kardashians” star reflected on their “beautiful” but broken union on Jay Shetty’s “On Purpose” podcast Monday, explaining… [+2534 chars]",
    },
    {
      id: "18",
      path:"/prince",
      name: "Hollywood",
      categorey: "Latest Stories",
      author: "Jess Cohen",
      title:'Prince Harry and Meghan Markle\'s Rep Slams "Abhorrent" Allegations About Car Chase Being a PR Stunt - E! NEWS',
      description:'Days after Prince Harry and Meghan Markle’s team said were involved in a "near catastrophic" car chase with paparazzi, the couple\'s rep is responding to critics claiming the incident was a PR stunt.',
      url: "https://www.eonline.com/news/1375230/prince-harry-and-meghan-markles-rep-slams-abhorrent-allegations-about-car-chase-being-a-pr-stunt",
      urlToImage:"https://pagesix.com/wp-content/uploads/sites/3/2023/05/NYPICHPDPICT000011605749.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2023-05-23T15:15:00Z",
      content:"Prince Harry and Meghan Markle's team is serving up some royal tea for critics of the couple.\r\nNearly a week after a rep for the Duke and Duchess of Sussex said they were involved in a two-hour car c… [+751 chars]",
    },
    {
      id: "19",
      path:"/lily",
      name: "Hollywood",
      categorey: "Latest Stories",
      author: "Baz Bamigboye",
      title:"Breaking Baz @ Cannes: Lily-Rose Depp Rises Above ‘The Idol’; The Pain That Underpins Todd Haynes’ Brilliant ‘May December’ - Deadline",
      description:"Sometimes in Cannes it’s fun just to hover at the fringes of a party to observe the interactions, the body language, the eye-rolling, who’s drinking what and who isn’t. The shindig for HBO&#82…",
      url: "https://deadline.com/2023/05/lily-rose-depp-the-idol-todd-haynes-may-december-cannes-breaking-baz-1235376824/",
      urlToImage:"https://stylecaster.com/wp-content/uploads/2020/07/the-old-guard.png",
      publishedAt: "2023-05-23T15:46:00Z",
      content:"Sometimes in Cannes it’s fun just to hover at the fringes of a party to observe the interactions, the body language, the eye-rolling, who’s drinking what and who isn’t.\r\nThe shindig for HBO’s The Ido… [+6137 chars]",
    },
    {
      id: "20",
      path: "/medcine",
      name: "Fitness",
      categorey: "The Latest",
      author: "Hallie Levine",
      title:
        "When to consider statins for cholesterol, especially as you age - The Washington Post",
      description:
        "The ideal cholesterol levels for you — and whether you rely on lifestyle measures alone or use medication as well — should be personalized, an expert says.",
      url: "https://www.washingtonpost.com/wellness/2023/05/22/statins-cholesterol-aging/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/V2E5GXYCJCWV52UC2FC7BU7BW4.jpg&w=1440",
      publishedAt: "2023-05-22T19:45:02Z",
      content:
        "Sometimes it may seem as if half the population of the United States takes medication for high cholesterol levels. About 40 million Americans are taking statins such as atorvastatin (Lipitor and generic), lovastatin (Altoprev) and simvastatin (Zocor), which are by far the most commonly prescribed of all types of cholesterol drugs.Statins can be quite effective. They can lower LDL (“bad”) cholesterol by up to 25 to 55 percent, reduce the levels of blood fats called triglycerides and subdue inflammation — and they could prevent heart attacks and strokes.But there may be some confusion about when to start on statins, especially among older adults. While we are more vulnerable to heart ­attacks and strokes with age, data showing that statins reduce such risks are “strongest for adults in their 70s and less clear as adults age beyond 80,” says Daniel Forman, chair of the section of geriatric cardiology at the University of Pittsburgh Medical Center. Concerns about statin side effects also increase with age, he says.Last year, the U.S. Preventive Services Task Force reaffirmed that not enough evidence exists to recommend — or not recommend — starting statin use in people 76 and older for the prevention of a first heart attack or stroke. “The USPSTF isn’t saying you shouldn’t do it, just that there’s not enough research out there to say definitively that you should,” says Robert Rosenson, director of cardiometabolic disorders at the Icahn School of Medicine at Mount Sinai in New York.",
    },
    {
      id: "21",
      path: "/smoke",
      name: "Fitness",
      categorey: "The Latest",
      title:
        "Smoking cannabis doesn’t carry same risks as tobacco, UCLA study finds - KTLA Los Angeles",
      description:
        "A new study from researchers at the University of California, Los Angeles found some good news for cannabis smokers: one of the major risks associated with tobacco smoking isn’t connected with marijuana. The study, “Impact of Marijuana Smoking on COPD Progres…",
      url: "https://ktla.com/news/local-news/smoking-cannabis-doesnt-carry-same-risks-as-tobacco-ucla-study/",
      urlToImage:
        "https://ktla.com/wp-content/uploads/sites/4/2023/05/CannabisSmoker.jpg?w=1280",
      publishedAt: "2023-05-22T21:15:43Z",
      content:
        "A new study from researchers at the University of California, Los Angeles found some good news for cannabis smokers: one of the major risks associated with tobacco smoking isn’t connected with marijuana.The study, “Impact of Marijuana Smoking on COPD Progression in a Cohort of Middle-Aged and Older Persons,” was published in the journal “Chronic Obstructive Pulmonary Diseases” this month.The researchers compared groups of people who currently, used to or have never smoked marijuana as part of the longitudinal research. Many of the subjects were studied for more than four years.“Neither former nor current marijuana smoking of any lifetime amount was associated with evidence of COPD progression or its development,” the study said.Cannabis advocates, including the National Organization for the Reform of Marijuana Laws, celebrated the findings, noting that they “are consistent with those of prior studies concluding that cannabis inhalation, even long-term, is not positively associated with COPD, lung cancer, or irreversible airway damage.”“They should be reassuring to cannabis consumers and to health professionals alike, and they should help to guide future policies with respect to the crafting of evidence-based public health messages and associated regulations,” NORML’s Deputy Director Paul Armentano said in a statement.",
    },
    {
      id: "22",
      name: "Fitness",
      path: "/mask",
      categorey: "The Latest",
      title:
        "Teens wearing masks unnecessary, parenting advice from Care and Feeding. - Slate",
      description: "There’s really no good reason for this.",
      url: "https://slate.com/human-interest/2023/05/unnecessary-mask-care-and-feeding-advice.html",
      urlToImage:
        "https://compote.slate.com/images/60b2e411-d74e-4bce-ab82-70798c7babcc.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
      publishedAt: "2023-05-23T10:00:00Z",
      content:
        "My 14-year-old daughter still insists on wearing a mask in any and all public spaces. COVID is no longer a big risk for us in our area, our family and all of her friends are up to date on all vaccinations, and none of our friends and family are at high-risk. My daughter is one of the few people in her school that still wears a mask each day, but not primarily to protect herself from illness.She has told me that part of the reason why she prefers to wear a mask is that it conceals her facial expressions, and eliminates some of the social anxiety she feels about talking to others. While I fully understand this (both my husband and I are introverts ourselves), I do think it is necessary for her to re-learn how to interact with people without something covering her face, especially since wearing a mask will become less and less socially acceptable as we move further away from the pandemic years.In addition, she appreciates that wearing a mask hides some of her acne struggles. While she does have an established skincare routine, she often experiences breakouts (like most teens) which cause her a great deal of embarrassment. Although she knows (and I have told her) that wearing a mask limits air circulation to the face, causing more breakouts, she insists that she still wants to wear one. Part of her embarrassment appears to be exacerbated by the fact that most of her peers wear makeup (which covers the skin troubles that I assume that nearly all teens have), leaving them with the illusion of perfect skin, while my daughter has no interest in touching any sort of makeup product whatsoever.Every time I suggest that she can try going to school for a day (or even just until lunchtime!) without a mask, she comes up with some kind of excuse for why she shouldn’t. It is clear that she feels very strongly about this, and is incredibly uncomfortable with the idea of taking her mask off.",
      subheading: "Dear Care and Feeding,",
    },
    {
      id: "23",
      path: "/bone",
      name: "Fitness",
      categorey: "The Latest Article",
      author: "Sara Moniuszko",
      title:
        "Bone broth: Is it good for you? Here's what experts say. - CBS News",
      description:
        "Bone broth is gaining attention on social media, but is it actually healthy or all hype? We asked experts to weigh in and answer common questions.",
      url: "https://www.cbsnews.com/news/bone-broth-is-it-good-for-you-heres-what-experts-say/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/17/d9ab918b-b2e3-49c5-990c-1702ef6e35b4/thumbnail/1200x630/d5e98bdf56097a451a39bbbcf4b42b3b/gettyimages-936161838.jpg",
      publishedAt: "2023-05-23T12:05:24Z",
      content:
        "You've probably been seeing bone broth videos popping up on your social media feed. Celebrities mention sipping it for lunch. But is it actually healthy, or a lot of hype? Laura Ligos, a registered dietitian nutritionist and specialist in sports dietetics, says bone broth has been a trend for a while, first gaining popularity when keto and paleo diets were on the rise. Now, the drink is gaining more attention thanks to celebrities and influencers sharing their interest online While bone broth can provide some beneficial nutrients, experts don't view the popular beverage as vital addition to your wellness regime. What else do you need to know about the trend? We asked some commonly searched questions: Made by simmering animal bones in water for a long time with vegetables, spices and sometimes other ingredients like apple cider vinegar, bone broth can be part of the puzzle, but is not a quick fix, Ligos says.",
    },
    {
      id: "24",
      name: "Fitness",
      path: "/mashroom",
      categorey: "The Latest Article",
      author: "Eric W. Dolan",
      title:
        "New study provides insights into the neurophysiological basis of psilocybin-induced alterations in consciousness - PsyPost",
      description:
        "New research published in iScience provides unique insights into how psilocybin alters brain activity during psychedelic experiences. The findings suggest that while the overall activity of the brain becomes more chaotic during the psychedelic state, the brai…",
      url: "https://www.psypost.org/2023/05/new-study-provides-insights-into-the-neurophysiological-basis-of-psilocybin-induced-alterations-in-consciousness-163548",
      urlToImage:
        "https://www.psypost.org/wp-content/uploads/2021/12/psychedelic-psilocybin-magic-mushrooms.jpg",
      publishedAt: "2023-05-23T11:02:31Z",
      content:
        "New research published in iScience provides unique insights into how psilocybin alters brain activity during psychedelic experiences. The findings suggest that while the overall activity of the brain becomes more chaotic during the psychedelic state, the brain’s ability to maintain complex interactions in response to external stimulation is not affected.Psilocybin is a naturally occurring psychedelic compound found in certain species of mushrooms, commonly known as “magic mushrooms.” The substance can induce profound changes in perception, cognition, and emotions, leading to altered states of consciousness. The scientists behind the new study were interested in better understanding the neurophysiological effects of psilocybin and their relationship to subjective experiences during altered states of consciousness.To this aim, we used a psychedelic substance and a brain-imaging technology: first, we used psilocybin, which acts as pharmaceutical tool to induce a well-defined altered state of consciousness. Second, a combination of transcranial magnetic stimulation and electroencephalography (EEG). This allows you to decode aspects of the underlying brain signature and visualize its current electrophysiological state,” said study author Andres Ort, a member of the Neurophenomenology of Consciousness Lab at the University of Zurich.The researchers employed a method known as the Perturbational Complexity Index (PCI) to quantify the complexity of spatiotemporal activity patterns in the brain. They applied a perturbation to a specific area of the brain using transcranial magnetic stimulation and recorded the resulting electrical activity via EEG. The recorded brain signals were then analyzed to evaluate the complexity and integration of the neural responses.“Psychedelics like psilocybin are ideal pharmaceutical tools to alter and study human consciousness,” Ort told PsyPost. “In analogy to the well established ultrasound technology, which transforms echo soundwaves into a grayscale to visualize tissues, transcranial magnetic stimulation sends an impulse to the cortex, which sends back a wave-like electromagnetic response. This response can be used to calculate the underlying complexity of information processing (as binary code in time and space) or to visualize the brain’s given state.",
    },
    {
      id: "25",
      name: "Fitness",
      path: "/decise",
      categorey: "The Latest Article",
      author: null,
      title:
        "Univ. of Iowa Hospitals & Clinics shares findings on newer type of cancer treatment - KCRG",
      description:
        "Not only are the success rates higher than ever, but it has also proven to be quicker and less invasive than other forms of treatment.",
      url: "https://www.kcrg.com/2023/05/22/univ-iowa-hospitals-clinics-shares-findings-newer-type-cancer-treatment/",
      urlToImage:
        "https://gray-kcrg-prod.cdn.arcpublishing.com/resizer/juOHX-RQ5am_XPApj-LI8vprtZM=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/KJKZB7NKZFFRVILRE4F3FV7AAY.JPG",
      publishedAt: "2023-05-22T23:16:00Z",
      content:
        "IOWA CITY, Iowa (KCRG) - Doctors at the University of Iowa Hospitals and Clinics say lives are being saved today thanks to research that started five years ago. It’s the result of a clinical trial into a newer type of cancer treatment. CAR-T cell therapy is a way to alter someone’s immune system to better recognize cancer in the body and kill it faster and more effectively.One patient to be a part of the clinical trial, Chris Ferenzi, remembers his first battle with cancer like it was yesterday.“It was about 6 months of chemo, every three weeks I’d go for about 8 hours,” he told TV-9.Once chemo was over, the cancer had seemed to go away. But then it came back. That’s when he was introduced to a clinical trial of CAR-T cell therapy.“We were leaning towards hopefully getting at least a 50% chance of getting that CAR-T cell therapy and I was lucky enough to get chose for that arm of the study,” said Ferenzi.That study was led by Dr. Umar Farooq. For five years they would study what happens when a patient’s own immune system is able to identify and destroy blood cancer.",
    },
    {
      id: "26",
      path:"/juce",
      name: "Fitness",
      categorey: "Latest Stories",
      author: "Rishabh Raj",
      title:"9 green juices that can help manage diabetes and high blood pressure - Recipes",
      description:"As per data, every fifth person in the world is either suffering from diabetes or high blood pressure, and the main reason behind all these health issues is an erratic lifestyle. Swear by these 10 natural green juices that will help manage diabetes and blood …",
      url: "https://recipes.timesofindia.com/web-stories/9-green-juices-that-can-help-manage-diabetes-and-high-blood-pressure/photostory/100448937.cms",
      urlToImage:"https://static.toiimg.com/thumb/msid-100448988,imgsize-64516,width-900,height-1200,resizemode-6/100448988.jpg",
      publishedAt: "2023-05-23T13:34:50Z",
      content:"Blend 1 green apple, 1/2 cucumber, 1 tbsp lemon juice, 4 kale leaves, 1 sprig celery, 4-6 spinach leaves, 1/2 beetroot, 1/2 tomato, 1 inch ginger, and 1 cup bitter gourd. Drink it fresh.",
    },
    {
      id: "28",
      path:"/clinic",
      name: "Fitness",
      categorey: "Latest Stories",
      author: "Vicky Pathare",
      title:"Pune’s KEM hosp study to reduce children’s susceptibility to type 2 diabetes - Hindustan Times",
      description:"According to the researchers, children born to diabetic parents and children who are underweight at birth are genetically likely to develop type 2 Diabetes",
      url: "https://www.hindustantimes.com/cities/pune-news/priya-follow-up-study-aims-to-decrease-children-s-susceptibility-to-type-2-diabetes-from-the-time-they-are-inside-their-mothers-wombs-101684860383359.html",
      urlToImage:"https://www.hindustantimes.com/ht-img/img/2023/05/23/1600x900/Researchers-at-the-city-based-KEM-Hospital-have-in_1684860379584.jpg",
      publishedAt: "2023-05-23T16:46:22Z",
      content:"Researchers at the city-based KEM Hospital have initiated a study to decrease the childrens susceptibility to type 2 Diabetes from the time they are inside their mothers wombs. According to the resea… [+2948 chars]",
    },
    {
      id: "29",
      path:"/papya",
      name: "Fitness",
      categorey: "Latest Stories",
      author: "Ivy C",
      title:"Papaya: The antioxidant powerhouse for weight loss, digestion and anti-cancer benefits - Longevity.Technology",
      description:"The papaya is a powerhouse of antioxidant. It has anti-cancerous properties, aids in digestion, protects the heart, may also provide protection against sunburns.",
      url: "https://longevity.technology/lifestyle/papaya-the-antioxidant-powerhouse-for-weight-loss-digestion-and-anti-cancer-benefits/",
      urlToImage:"https://longevity.technology/lifestyle/wp-content/uploads/2023/05/sliced-papaya-laid-on-wooden-table.jpg",
      publishedAt: "2023-05-23T17:04:23Z",
      content:"Get to know the extraordinary power of papaya, a remarkable fruit renowned for its exceptional antioxidant properties.\r\nPapaya can cause allergies in some people. If you encounter any adverse reactio… [+3588 chars]",
    },
    {
      id: "29",
      name: "Technology",
      path: "/microsoftai",
      categorey: "The Latest",
      author: "Kyle Wiggers",
      title:
        "Microsoft launches new AI tool to moderate text and images - TechCrunch",
      description:
        "Microsoft has launched a new AI-powered service, Azure AI Content Safety, to detect potentially problematic speech and images online.",
      url: "https://techcrunch.com/2023/05/23/microsoft-launches-new-ai-tool-to-moderate-text-and-images/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-1175327728.jpg?w=1024",
      publishedAt: "2023-05-23T15:01:58Z",
      content:
        "Microsoft is launching a new AI-powered moderation service that it says is designed to foster safer online environments and communities Called Azure AI Content Safety, the new offering, available through the Azure AI product platform, offers a range of AI models trained to detect “inappropriate” content across images and text. The models — which can understand text in English, Spanish, German, French, Japanese, Portuguese, Italian and Chinese — assign a severity score to flagged content, indicating to moderators what content requires action.Microsoft has been working on solutions in response to the challenge of harmful content appearing in online communities for over two years. We recognized that existing systems weren’t effectively taking into account context or able to work in multiple languages,” the Microsoft spokesperson said via email. “New [AI] models are able to understand content and cultural context so much better. They are multilingual from the start … and they provide clear and understandable explanations, allowing users to understand why content was flagged or removed.During a demo at Microsoft’s annual Build conference, Sarah Bird, Microsoft’s responsible AI lead, explained that Azure AI Content Safety is a productized version of the safety system powering Microsoft’s chatbot in Bing and Copilot, GitHub’s AI-powered code-generating service",
    },
    {
      id: "30",
      name: "Technology",
      path: "/iphone",
      categorey: "The Latest",
      author: null,
      title: "Pixel 7a versus iPhone 14 Pro camera comparison - Phandroid",
      description:
        "Can the new $500 Pixel 7a outperform the $1000 iPhone 14 Pro in a head-to-head camera comparison? That's exactly what we're looking at today with the Pixel 7...",
      url: "https://www.youtube.com/watch?v=bJA84W9wztA",
      urlToImage: "https://i.ytimg.com/vi/bJA84W9wztA/maxresdefault.jpg",
      publishedAt: "2023-05-23T15:24:26Z",
      content:
        "Pixel 7a versus iPhone 14 Pro camera comparison - PhandroidThe cameras in the Pixel series have been known for its AI smarts but this time, Google hasn't skimped on the hardware. The iPhone 14 Pro ushers in one of the biggest changes to its camera hardware in years and that shows in the quality of photos and videos it takes. It's time to find out which smartphone offers the best cameras. If you are looking to buy any of the above camera-centric smartphones, you have to keep in mind that the smaller Google Pixel 7 is vastly different from the Pixel 7 Pro in terms of the camera setup. Apart from the obvious lack of a telephoto camera in the 7, there's also no macro mode available. In the walled garden, there are no differences between the iPhone 14 Pro (Review) and the iPhone 14 Pro Max when it comes to the cameras. ",
    },
    {
      id: "30",
      name: "Technology",
      path: "/phone2",
      categorey: "The Latest",
      author: "Deirdre O'Donnell",
      title:
        "iQOO Neo8 series launch with Android 13, 144Hz displays and at least 12GB of RAM - Notebookcheck.net",
      description:
        "iQOO has officially beaten other OEMs such as Xiaomi to the launch of the world's first Dimensity 9200 Plus (or 9200+) -powered smartphone. It has the potential to outclass the Snapdragon 8+ Gen 1 of the Neo8 - then again, this new vanilla model has the same …",
      url: "https://www.notebookcheck.net/iQOO-Neo8-series-launch-with-Android-13-144Hz-displays-and-at-least-12GB-of-RAM.719581.0.html",
      urlToImage:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/25afcd1ed87e2b0630.jpg",
      publishedAt: "2023-05-23T15:41:22Z",
      content:
        "iQOO has officially beaten other OEMs such as Xiaomi to the launch of the world's first Dimensity 9200 Plus (or 9200+) -powered smartphone. It has the potential to outclass the Snapdragon 8+ Gen 1 of the Neo8 - then again, this new vanilla model has the same appreciably bright, fast AMOLED display, 120W charging and updated dual rear camera window as its Pro sibling.The Neo8 and Neo8 Pro boast the same iQOO hallmark of a remarkably fast 144Hz refresh rate as the brand's first-gen Pad - then again, both new smartphones have been graced with very different 6.78-inch, 1,300-nit 1.5K AMOLED displays. They also feature faster 120W charging technology - however, the Pro variant stands apart as the world's first Dimensity 9200+ vehicle.n fact, iQOO seeks to outdo potential future rivals in using this new flagship SoC refresh by further augmenting the chipset with a 5K vapor chamber system and the same V1+ co-processor as the Neo8's Snapdragon 8+ Gen 1. The secondary chipset is there to help out with things such as ISP duty for both new devices ",
    },
    {
      id: "32",
      path: "/chatgpt",
      name: "Technology",
      categorey: "The Latest Article",
      author: "Barry Schwartz",
      title:
        "Bing to be default search engine on Open AI's ChatGPT - Search Engine Land",
      description:
        "ChatGPT Plus subscribers will have access to Bing Search today and it will expand to more users in the future.",
      url: "https://searchengineland.com/bing-to-be-default-search-engine-on-open-ais-chatgpt-427465",
      urlToImage:
        "https://searchengineland.com/wp-content/seloads/2023/05/woman-searching-1920.jpg",
      publishedAt: "2023-05-23T15:48:00Z",
      content:
        "Bing Search is the default search engine on Open AI’s popular ChatGPT service, Microsoft announced today. Microsoft said that Bing is now the default search experience on ChatGPT.Who will see it. First ChatGPT Plus subscribers will begin to see Bing Search as an option starting today. Then free users of ChatGPT will “soon” be able to use it by enabling a plugin.What it does. This will give ChatGPT more up-to-date information and timely information powered by Bing Search. ChatGPT has a data set from 2021 or earlier, which is why using Bing Chat provided a better experience for more timely questions.Now, with Bing Search in ChatGPT, the service can “provide timelier and more up-to-date answers with access from the web,” the company wrote.",
    },

    {
      id: "33",
      name: "Technology",
      path: "/nokia",
      categorey: "The Latest Article",
      author: "https://www.india.com/author/ians/",
      title:"Nokia Launches New Budget Smartphone 'C32' in India: Check Price, Feature, Specification - India.com",
      description:"Nokia C32 comes in three colour variants -- Charcoal, Breezy Mint, and Beach Pink --with 7GB + 64GB and 7GB + 128 GB storage and memory configurations at Rs 8,999 and Rs 9,499, respectively.",
      url: "https://www.india.com/technology/nokia-launches-new-budget-smartphone-c32-in-india-check-price-feature-specification-6067476/",
      urlToImage:"https://static.india.com/wp-content/uploads/2023/05/Nokia-C32.jpg",
      publishedAt: "2023-05-23T15:49:24Z",
      content:"New Delhi: HMD Global, the home of Nokia phones, on Tuesday launched a new budget-friendly smartphone ‘C32’, with a 50MP Dual camera in India. Nokia C32 comes in three colour variants — Charcoal, Breezy Mint, and Beach Pink –with 7GB + 64GB and 7GB + 128 GB storage and memory configurations at Rs 8,999 and Rs 9,499, respectively, which are available to buy from the company’s official website and key retail stores starting Tuesday.The success of the Nokia C-series in India motivates us to continue to offer great value and innovation in this segment. Moreover, we believe that value should not sacrifice design, so we have included a toughened glass finish usually seen in more premium designs to ensure that it looks as good as the pictures it takes,” Ravi Kunwar, VP-India and APAC, HMD Global, said in a statement.The new Nokia C32 features a bright 6.5-inch HD+ display, toughened glass back, dual-tone finish and elegant straight sidewalls.",
    },
    {
      id: "34",
      path: "/whatsapp",
      name: "Technology",
      categorey: "The Latest Article",
      author: null,
      title:
        "Whatsapp now lets users edit sent messages | WION Fineprint | Latest World News | English News - WION",
      description:
        "The new edit feature in WhatsApp allows users to make changes to messages after they have been sent. WhatsApp is known for adding new features to the messagi...",
      url: "https://www.youtube.com/watch?v=drKP39sAI5k",
      urlToImage: "https://i.ytimg.com/vi/drKP39sAI5k/maxresdefault.jpg",
      publishedAt: "2023-05-23T15:51:55Z",
      content: "WhatsApp on Monday released a new edit feature which will let users make changes to their messages up to 15 minutes after they are sent.Meta CEO Mark Zuckerberg said in a post on Facebook, “You can now edit your WhatsApp messages up to 15 minutes after they’re sent.”Just like messages and calls, the messaging platform assured that edits are protected by end-to-end encryption. ",
    },
    {
      id: "35",
      path:"/anand",
      name: "Technology",
      categorey: "Latest Stories",
      author: "Moneycontrol News",
      title:"India surges as second-largest steel producer; Anand Mahindra celebrates in emotional tweet - Moneycontrol",
      description:"This was in response to a striking statistic that highlighted India's remarkable growth in the global steel manufacturing industry",
      url: "https://www.moneycontrol.com/news/trends/india-surges-as-second-largest-steel-producer-anand-mahindra-celebrates-in-emotional-tweet-10647281.html",
      urlToImage:"https://images.moneycontrol.com/static-mcnews/2023/04/ezgif.com-webp-to-jpg-4-770x431.jpg",
      publishedAt: "2023-05-23T16:01:51Z",
      content:"Renowned business tycoon Anand Mahindra, Chairman of the Mahindra Group, recently took to Twitter to express his deep-rooted emotions regarding the success of the Indian steel industry.\r\nThis was in … [+1345 chars]",
    },
    {
      id: "36",
      path:"/iq",
      name: "Technology",
      categorey: "Latest Stories",
      author: "Michail",
      title: "iQOO Pad and TWS Air Pro also announced - GSMArena.com",
      description:"iQOO Pad packs a Dimensity 9000+ chipset while the TWS Air Pro feature 14.2 drivers and ANC. Alongside its new iQOO Neo8 series smartphones, vivo also...",
      url: "https://www.gsmarena.com/iqoo_pad_and_tws_air_pro_also_announced-news-58649.php",
      urlToImage:"https://fdn.gsmarena.com/imgroot/news/23/05/iqoo-pad-tws-air-pro-ofic/-952x498w6/gsmarena_00.jpg",
      publishedAt: "2023-05-23T16:28:01Z",
      content:"Alongside its new iQOO Neo8 series smartphones, vivo also announced the iQOO Pad and iQOO TWS Air Pro wireless earbuds. The tablet is nearly identical to the vivo Pad2 but with a Dimensity 9000+ chip… [+1446 chars]",
    },
    {
      id: "37",
      path:"/google",
      name: "Technology",
      categorey: "Latest Stories",
      author: "Greg Finn",
      title:"Google Ads adds 2 new campaign types: Video views, demand gen - Search Engine Land",
      description:"Advertisers will have new video-first campaign types at their disposal, Video view campaigns and lead gen campaigns.",
      url: "https://searchengineland.com/google-ads-video-views-demand-gen-427496",
      urlToImage:"https://searchengineland.com/wp-content/seloads/2023/05/Demand-Gen-header.png",
      publishedAt: "2023-05-23T17:28:00Z",
      content:"Two new campaign types are coming to Google Ads that help with very specific needs: video views and demand generation.\r\nThese campaigns have a specific goal and appear to be video-first campaigns, wi… [+1995 chars]",
    },
    {
      id: "38",
      path:"/malai",
      name: "Food",
      categorey:"The Latest",
      author: "Doodhpak  Santula",
      title: "Malai",
      description:"The thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until ...",
      url: "https://www.tasteatlas.com/malai",
      urlToImage:"https://cdn.tasteatlas.com/images/ingredients/1ff8aa710cb6476491816569c639f99d.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content: "The thick, mild malai is a homemade dairy product made with heated milk which is refrigerated until a thick layer of fat is created on top. Yellow in color, malai is usually skimmed off by hands, stored in containers, and the procedure is repeated until all fat and proteins have been separated from the milk.Even though it is a time-consuming process, malai is commonly prepared in many Indian households, and usually used as an ingredient in creamy sauces, curries, and traditional desserts",
    },
    {
      id: "39",
      path:"/phulahari",
      name: "Food",
      categorey: "The Latest",
      author: "Doodhpak  Santula",
      title: "Pulihora",
      description:"Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka... ",
      url: "https://www.tasteatlas.com/pulihora",
      urlToImage:"https://cdn.tasteatlas.com/images/dishes/2a00c116070d46a7a8dd91c0e086f76d.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:"Pulihora is a popular south Indian dish that can easily be found in the states of Andhra Pradesh, Tamil Nadu, and Karnataka. It consists of rice, turmeric, tamarind, curry leaves, coriander, ginger, and green chiles. Additionally, yellow lentils, roasted sesame seed powder, and mustard seeds can be added to enhance the already rich flavors of the dish.It is commonly prepared for festivals, yellow in color due to turmeric - considered sacred and symbolizing festive occasions in the Hindu world. The word puli in its name means sour, reflecting the tangy flavor of the dish. However, spicy and salty flavors that are also present in the dish are well balanced with the sour tamarind",
    },
    {
      id: "40",
      path:"/puri",
      name: "Food",
      categorey: "The Latest",
      author: "Doodhpak  Santula",
      title: "Puri",
      description:
        "Puri is an unleavened, fried Indian bread made with water, finer or coarser wheat flour, and occasionally cumin seeds... ",
      url: "https://www.tasteatlas.com/puri",
      urlToImage:
        "https://cdn.tasteatlas.com//Images/Dishes/9d3c2351d9814a4daba235d7bf7c79f2.jpg?w=905&h=510",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:
        "Puri is an unleavened, fried Indian bread made with water, finer or coarser wheat flour, and occasionally cumin seeds. The dough is rolled into flat round shapes and fried in copious amounts of vegetable oil or ghee. During frying, the dough absorbs oil and puri acquires the typical puffy appearance, crispy texture, and an appealing golden color. Occasionally, uncooked puri is punctured to produce a flat variety of the bread. It is consumed across the Indian subcontinent, but its origin is probably in the northern regions, where wheat flour was more usually employed. Most commonly, puri is consumed as a side dish, alongside creamy and spicy curries or a variety of vegetable dishes. ",
    },
    {
      id: "41",
      path:"/pavbhaji",
      name: "Food",
      categorey: "The Latest Article",
      author: "Doodhpak  Santula",
      title: "Pav bhaji",
      description:
        "Pav bhaji is a popular street snack originating from the Indian state of Maharashtra.",
      url: "https://www.tasteatlas.com/pav-bhaji",
      urlToImage:
        "https://cdn.tasteatlas.com/Images/Dishes/f77866f0f5474fc0b41d316f885edcc3.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:
        "Pav bhaji is a popular street snack originating from the Indian state of Maharashtra. It consists of a vegetable curry that is typically served with a soft bread roll known as pav. The dish was invented in the 1850s as a midnight meal by street vendors who prepared it with all the leftover vegetables from the day, which were then mashed and combined with spices and ghee butter.Originally, it was a quick and easy meal for Mumbai's textile mill workers, but today it is a favorite street snack that is also served in some restaurants in Mumbai. There are a lot of varieties of the basic pav bhaji, with added cheese, paneer, mushrooms, plantains, and even dried fruits thrown in the flavorful curry mix. ",
    },
    {
      id: "42",
      path:"/masaladhosa",
      name: "Food",
      categorey: "The Latest Article",
      author: "Doodhpak  Santula",
      title: "Masala dosa",
      description:
        "A traditional southern Indian dish known as masala dosa is popular throughout the country, ",
      url: "https://www.tasteatlas.com/masala-dosa",
      urlToImage:
        "https://cdn.tasteatlas.com/Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:
        " A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds. The dish is often garnished with grated coconut and chopped coriander.With its huge popularity, there are also some variations of the dish, such as mysore masala dosa, rava masala dosa, onion masala dosa, and paper masala dosa. It is usually consumed as a quick snack or as a part of an Masala dosa has even made the list of 10 foods to try before you die, complied by the Huffington Post, alongside famous dishes such as Beijing duck, moussaka, and BBQ ribs.",
    },
    {
      id: "43",
      path:"/roghanjosh",
      name: "Food",
      categorey: "The Latest Article",
      author: "Doodhpak  Santula",
      title: "Rogan josh",
      description:
        "Rogan josh is an aromatic lamb curry that is believed to be of Persian origin, although today it is more closely associated with the Kashmir region of India. ",
      url: "https://www.tasteatlas.com/rogan-josh",
      urlToImage:
        "https://cdn.tasteatlas.com/Images/Dishes/99d92862af9a42a2973a8213144f39ca.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:
        "Rogan josh is an aromatic lamb curry that is believed to be of Persian origin, although today it is more closely associated with the Kashmir region of India. The stew is characterized by tender meat and a thick, fiery red sauce coming from deseeded Kashmiri chillies.Lamb pieces are typically stewed in a gravy made with browned onions, garlic, yogurt, ginger, and aromatic herbs and spices. The name of the dish is derived from two words: rogan, meaning clarified butter or oil, and josh, referring to passion or heat.Rogan josh is usually accompanied by plain or spiced basmati rice and Indian flatbreads such as naan on the side. The dish is also popular in the United Kingdom since the 1950s, when Indian cuisine was brought over to the country.",
    },
    {
      id: "44",
      path:"/chicken65",
      name: "Food",
      categorey: "Latest Stories",
      author: "Doodhpak  Santula",
      title: "Chicken 65",
      description:" Chicken 65 is a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken that is marinated in ginger, lemon, red chiles, and a variety of other spices. ",
      url: "https://www.tasteatlas.com/chicken-65",
      urlToImage:"https://cdn.tasteatlas.com/images/dishes/55f00ba4fe8746a68b8ad62b24226e3b.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:" Chicken 65 is a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken that is marinated in ginger, lemon, red chiles, and a variety of other spices. There are a few theories about the origin of chicken 65. The most popular theory says that it was created in Tamil Nadu by A. M. Buhari in 1965.Another one says that the original dish was made with 65 hot chili peppers, as a testament of manliness. There are also some unlikely theories, such as the one claiming that the chicken was cut into 65 pieces, or that the chicken was 65 days old when the dish was prepared.Due to the dish's popularity, there are numerous variations, and each South Indian state has its own version. In Karnataka, the dish is garnished with grated coconut, and in Andhra Pradesh, the chicken is cooked instead of fried. Chicken 65 is commonly served with hot, red chutneys.",
    },
    {
      id: "45",
      path:"/gulabjamun",
      name: "Food",
      categorey: "Latest Stories",
      author: "Doodhpak  Santula",
      title: "Gulab jamun",
      description:"Gulab jamun is a dessert based on milk solids that are kneaded into a dough, shaped into balls, and deep-fried in ghee.",
      url: "https://www.tasteatlas.com/gulab-jamun",
      urlToImage:"https://cdn.tasteatlas.com/Images/Dishes/23fba80da08c46ceba5a99a5b1f1f200.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:"Gulab jamun is a dessert based on milk solids that are kneaded into a dough, shaped into balls, and deep-fried in ghee. The balls then get soaked in a sugary concoction flavored with saffron, green cardamom, and rose water. When served, gulab jamun is often garnished with dried nuts to further enhance its flavors.The name of the dish is derived from two words: gulab, meaning rose, and jamun, referring to the purple-colored jamun berry fruit. It is believed that the dessert originated from an Arabic dessert called luqmat al-qadi, which became popular during the Mughal era, when Indian cooks at the palace kitchens adapted their cuisine by combining the newly arrived Persian ingredients with their own Hindu flavors.Nowadays, gulab jamun is often prepared for weddings and during the Diwali festival, both in India and in Trinidad and Tobago, where gulab jamun is also quite popular.Five TikTok users last week filed a suit of their own, calling on a federal court to overturn Montana's ban on the app, arguing that it violates their free speech rights. ",
    },
    {
      id: "46",
      path:"/pakoda",
      name: "Food",
      categorey: "Latest Stories",
      author: "Doodhpak  Santula",
      title: "Pakora",
      description:
        "Pakora is a savory, deep-fried Indian snack made with pieces of vegetables such as cauliflower and eggplant.  ",
      url: "https://www.tasteatlas.com/pakora",
      urlToImage:
        "https://cdn.tasteatlas.com/Images/Dishes/b4deb1913b6b48c2baff9e6cf8d25923.jpg?mw=1300",
      publishedAt: "LAST UPDATE: THU MAR 30 2023",
      content:
        " Pakora is a savory, deep-fried Indian snack made with pieces of vegetables such as cauliflower and eggplant. Although it is a quintessential Indian snack that can be easily found on numerous street corners, it can also be made at home. Traditionally, pakoras are at their most popular during spring, when the locals enjoy fried foods to celebrate the monsoon season.The snack comes in many varieties but is usually made from two main ingredients - potato, and another vegetable or meat of choice, which is then dipped in flour and deep-fried in ghee. Pakoras are usually seasoned with turmeric, salt, chili, or other spices.There is also bhaji, the same snack with a different name, but made without any seasonings. Bhaji is popular in South India, while pakoras are mostly consumed in North India. Regardless of the nomenclature, pakoras make a great appetizer or a snack, and it is recommended to pair them with chutneys and a hot cup of tea on the side.",
    },
    {
      id: "47",
      name: "move",
      path: "/javan",
      categorey: "The Latest",
      img: "https://www.filmibeat.com/ph-big/2023/02/jawan_167688637400.jpg",
      heading: "Jawan Move",
      text: "Jawan is a 2023 Bollywood action, thriller movie, directed by Atlee Kumars...",
      ReleaseDate: "7 September 2023",
      Language: "Hindi",
      DubbedIn: "Tamil, Telugu, Malayalam, Kannad",
      Genre: "Drama",
      Cast: "Shah Rukh Khan, Nayanthara, Priyamani, Sanya Malhotra, Yogi Babu, ",
      Director: "Atlee Kumar, Cinematography, G.K. Vishnu",
      Music: "Anirudh Ravichander",
      Producer: "Shah Rukh Khan",
      Production: "Red Chillies Entertainment",
      title: "Jawan: Release Date, Trailer, Songs, Cast",
      urlToimg:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202206/MV5BNTFjMGVlZDQtN2M2ZS00N2UxLTgyYjItN2YzYWIyOTQyNjFiXkEyXkFqcGdeQXVyOTI3MzI4MzA._V1__1655912225.jpg?downsize=680:*",
      content:
        "Shah Rukh Khan makes a comeback to the silver screen after a sabbatical of about half a decade. The patriotic thriller marks his third release in 2023 and puts on the platter suspense, action, and drama.",
      contentheading: "About Jawan Movie (2023)",
    },
    {
      id: "48",
      path: "/papaya",
      name: "fruit",
      categorey: "The Latest",
      img: "https://images.pexels.com/photos/4113798/pexels-photo-4113798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Papaya",
      text: "Papaya or Carica papaya is a tropical succulent fruit of the Caricaceae family. Papaya fruit is edible raw when ripe, and its young fruit, leaves.... ",
      title: "7 Reasons Why You Should Eat Papaya Empty Stomach",
      descriptin:
        "Read on as we discuss the many benefits of consuming papaya on an empty stomach.",
      urltoimg:
        "https://c.ndtvimg.com/2023-04/3bdqs4po_skincare-benefits-of-papayas_625x300_20_April_23.jpg",
      content:
        "Besides being a tasty fruit, papaya also has several benefits. This tropical treasure offers a wealth of health advantages. While papayas rank among the tastiest and most useful fruits, they offer much more than just a sweet flavour and attractive appearance. Eating papaya has a number of health advantages, including the capacity to aid in weight loss, lessen oxidative stress, treat diabetes, combat ageing, and promote wound healing.                                                                                Second only to the banana in terms of popularity, papayas are among the most common fruits in tropical and subtropical areas. The benefits of papaya fruit come from its high concentration of antioxidants, enzymes, vitamins C, E, and A, dietary fibre, and minerals including magnesium and potassium. Eating papaya empty stomach might provide even more benefits. Continue reading as we discuss these benefits.",
    },
    {
      id: "49",

      name: "tiktok",
      path: "/tiktok",
      categorey: "The Latest",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/18412/production/_129764399_tiktok-index-getty.jpg.webp",
      heading: "TikTok",
      text: "Montana is set to become the first US state to ban Chinese-owned media giant TikTok from personal devices.....",
      title: "TikTok Sues To Stop Ban In US State Of Montana",
      description:
        "The unprecedented ban, set to start in 2024, violates the constitutionally protected right to free speech, TikTok argued in the suit.",
      urltoimg:
        "https://c.ndtvimg.com/2021-12/hae50fi8_tiktok-generic_625x300_24_December_21.jpg",
      content:
        "San Francisco: TikTok on Monday filed suit in US federal court to stop the state of Montana from implementing an overall ban on the video sharing app.The unprecedented ban, set to start in 2024, violates the constitutionally protected right to free speech, TikTok argued in the suit.We believe our legal challenge will prevail based on an exceedingly strong set of precedents and facts, a TikTok spokesperson told AFP.Montana Governor Greg Gianforte signed the unprecedented prohibition into law on May 17.Gianforte said on Twitter that he endorsed the ban in order to protect Montanans' personal and private data from the Chinese Communist Party.The state has enacted these extraordinary and unprecedented measures based on nothing more than unfounded speculation, TikTok contended in its lawsuit.TikTok called on the federal court to declare the Montana ban on its app unconstitutional and block the state from ever putting it into ..",
    },
    {
      id: "50",
      name:'home',
      path: "/bank",
      categorey: "The Latest Article",
      img: "https://bl-i.thgim.com/public/incoming/ivmgyn/article66424989.ece/alternates/LANDSCAPE_1200/2023-01-23T102603Z_550141351_RC29WY90SDM5_RTRMADP_3_AXIS-BANK-RESULTS.JPG",
      title:"Axis Bank will offer the farmers, part of ITC’s agri ecosystem, a range of products, including gold loans",
      heading: "Axis Bank ties up with ITC to offer loans to farmers",
      text: "Axis Bank has collaborated with ITC Ltd to offer loans and services to farmers who are part of ITC’s agriculture ecosystem, the two companies said in a joint release.The partnership will enable Axis Bank to cater to the financial requirements of unserved and under-served farmers based in remote regions by offering them a range of assets and liability products such as farmer loans and gold loans, among others.Axis Bank will leverage ITCMAARS (Meta Market for Advanced Agricultural Rural Services), a full-stack agri-tech application to reach out to the farmers and address their financial requirements. The bank will also offer farmers a range of products and services through its rural-urban and semi-urban (RUSU) branches located across 656 districts.Axis Bank will leverage ITCMAARS (Meta Market for Advanced Agricultural Rural Services), a full-stack agri-tech application to reach out to the farmers and address their financial requirements. The bank will also offer farmers a range of products and services through its rural-urban and semi-urban (RUSU) branches located across 656 districts. Axis Bank will leverage ITCMAARS (Meta Market for Advanced Agricultural Rural Services), a full-stack agri-tech application to reach out to the farmers and address their financial requirements. The bank will also offer farmers a range of products and services through its rural-urban and semi-urban (RUSU) branches located across 656 districts. Powered by the ITC e-Choupal ecosystem that connects with over 4 million farmers, we have now implemented ITCMAARS a phygital ecosystem that provides a range of solutions through Hyperlocal and personalised advisory, Agri- Inputs, Financial services and Market linkages,” said Rajnikant Rai, Divisional Chief Executive, Agri Business Division, ITC.Timely availability of institutional credit will enable the farmer to buy quality Inputs, which will help improve productivity and enhance farm incomes, he added.Through this initiative, Axis Bank aims to further scale up its Bharat Banking strategy by increasing new-to-bank accounts. As of December 31, the bank’s rural advances were up 27 per cent YoY, disbursements were higher by 12 per cent and deposits were up 16 per cent on year. ",
    },
    {
      id: "51",
      path:"/rahul",
      name:"homepage",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/rahul-gandhi-truck-ride.jpg?w=640",
      heading:"A people’s leader’: After delivery agent, bus commuters, Rahul Gandhi now rides with truck drivers",
      description:"Gandhi reportedly made the trip to interact with truck drivers and understand their problems.",
      text: "Congress leader Rahul Gandhi took a truck ride in Haryana, from Murthal to Ambala, in an effort to understand the issues and problems faced by the drivers.After the Bharat Jodo Yatra, where Gandhi interacted with people from all walks of life, the party is now projecting Gandhi as a “jan nayak“, or a people’s leader. During his campaign for the Karnataka elections, several tweets by the Congress handle called Gandhi a peoples leader.Recently, Gandhi rode pillion with a Blinkit delivery agent in Bengaluru as part of Congress’s outreach to gig workers ahead of the Karnataka Assembly elections, which the party won with a resounding mandate.He also boarded a Bengaluru Metropolitan Transport Corporation (BMTC) bus to interact with passengers as part of his campaign. There, he spoke with some women passengers about their aspirations for Karnataka, according to the Congress camp. In its election manifesto, the Congress has also pledged to ensure free travel for women in government buses in the state.",
      url:"https://indianexpress.com/article/india/rahul-gandhi-truck-ride-murthal-ambala-haryana-8624107/"
    },
    {
      id: "52",
      path:"/virat",
      name:"homepage",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/Kohli-41.jpg?w=640",
      heading:"Disappointed but…’: Virat Kohli breaks silence on RCB’s exit from IPL 2023",
      description:"Virat Kohli wrote an emotional note after RCB's exit from season 16 of the Indian Premier League.",
      text: "Virat Kohli enjoyed a successful season in the 2023 Indian Premier League (IPL) with the willow, scoring 639 runs in 14 innings. However, his team – the Royal Challengers Bangalore once again fell short of qualifying for the playoffs.In the last league game, Kohli dished out his best performance of the season against Gujarat Titans, scoring a brilliant hundred. But it wasn’t enough as RCB lost the match and bowed out without making it to the knockout stage.Breaking his silence for the first time since RCB’s exit, Kohli in a post on social media wrote: “A season which had it’s moments but unfortunately we fell short of the goal. Disappointed but we must hold our heads high. To our loyal supporters, grateful for backing us every step of the way.“A big thank you to the coaches, management and my teammates. We aim to be back stronger,” he added.Bangalore had to win the final IPL game in the league stage to claim the last available playoff spot, but Gill followed his century against Sunrisers Hyderabad with an unbeaten 104 off 52 balls as Gujarat reached 198-4 with five balls to spare for a six-wicket win.",
    },
    {
      id: "53",
      name:"homepage",
      path:"/upi",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/rupay-upi-payment.jpg?w=640",
      description:"You can now make UPI payments using RuPay credit cards on Google Pay. Here's how to add it to your Google Pay account.",
      heading: "Google Pay now supports UPI payments using RuPay credit cards",
      text: "Google has partnered with the National Payments Corporation of India (NCPI) to launch RuPay credit card-based UPI payments on Google Pay. Users can now add RuPay credit cards on Google Pay and make payments to online and offline merchants.Right now, Google Pay supports RuPay credit cards issued by Axis Bank, Bank of Baroda, Canara Bank, HDFC Bank, Indian Bank, Kotak Mahindra Bank, Punjab National Bank and Union Bank of India, and the company has confirmed to add more banks in the coming days.For the unaware, Google Pay, a UPI-based payment app like most payments apps only support payment using a debit card. With this update, users can now add their RuPay credit card and make payments seamlessly to merchants across the country. At present, there is no option to add Visa and Master-issued credit cards to Google Pay or any other UPI payment app in India.Nalin Bansal, Chief Relationship Management and Key Initiatives, Corporate Business from NPCI, said, “The integration of RuPay Credit Card on UPI delivers a remarkable user experience seamlessly combining the convenience of UPI with the benefits of RuPay Credit Card. We believe this service will mature to provide access to digital credit on demand and consumers will be able to make payments by taking benefit of the inherent security and availability of UPI network across both offline and online platforms. We are delighted to partner with Google Pay as we believe that this combination will play a vital role in democratizing credit in India.”",
    },
  ]);

  return (
    <>
      <div>
        <Logo />
      </div>
      <div>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/bollywood"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Bollywood />
                </store1.Provider>
              }
            />
            <Route
              path="/hollywood"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Hollywood />
                </store1.Provider>
              }
            />
            <Route
              path="/fitness"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Fitness />
                </store1.Provider>
              }
            />
            <Route
              path="/technology"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Technology />
                </store1.Provider>
              }
            />
            <Route
              path="/food"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Food />{" "}
                </store1.Provider>
              }
            />
            <Route
              path="/javan"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Javan />
                </store1.Provider>
              }
            />
            <Route
              path="/papaya"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Papaya />
                </store1.Provider>
              }
            />
            <Route
              path="/tiktok"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <TikTok />
                </store1.Provider>
              }
            />
            <Route
              path="/bank"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Bank />
                </store1.Provider>
              }
            />
            <Route
              path="/indiannavey"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Indiannavey />
                </store1.Provider>
              }
            />
            <Route
              path="/lalu"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <TikTok />
                </store1.Provider>
              }
            />
            <Route
              path="/manoj"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Manoj />
                </store1.Provider>
              }
            />
            <Route
              path="/anushkha"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Anushkha />
                </store1.Provider>
              }
            />
            <Route
              path="/Dharavi"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Dharavi />
                </store1.Provider>
              }
            />
            <Route
              path="/sid"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Sid />
                </store1.Provider>
              }
            />
            <Route
              path="/priyanka"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Priyanka />
                </store1.Provider>
              }
            />
            <Route
              path="/ahana"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Ahana />
                </store1.Provider>
              }
            />
            <Route
              path="/netflex"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Netflex />
                </store1.Provider>
              }
            />
            <Route
              path="/wwe"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Wwe />
                </store1.Provider>
              }
            />
            <Route
              path="/cnn"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Cnn />
                </store1.Provider>
              }
            />
            <Route
              path="/microsoft"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Microsoft />
                </store1.Provider>
              }
            />
            <Route
              path="/indianidol"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Indianidol />
                </store1.Provider>
              }
            />
            <Route
              path="/nicjonas"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Nicjonas />
                </store1.Provider>
              }
            />
            <Route
              path="/medcine"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Medcine />
                </store1.Provider>
              }
            />
            <Route
              path="/smoke"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Smoke />
                </store1.Provider>
              }
            />
            <Route
              path="/mask"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Mask />
                </store1.Provider>
              }
            />
            <Route
              path="/bone"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Bone />
                </store1.Provider>
              }
            />
            <Route
              path="/mashroom"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Mashroom />
                </store1.Provider>
              }
            />
            <Route
              path="/decise"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Decise />
                </store1.Provider>
              }
            />
            <Route
              path="/microsoftai"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <MicrosoftAi />
                </store1.Provider>
              }
            />
            <Route
              path="/iphone"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Iphone />
                </store1.Provider>
              }
            />
            <Route
              path="/phone2"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Phone2 />
                </store1.Provider>
              }
            />
            <Route
              path="/chatgpt"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Chatgpt />
                </store1.Provider>
              }
            />
            <Route
              path="/nokia"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Nokia />
                </store1.Provider>
              }
            />
            <Route
              path="/whatsapp"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Whatsapp />
                </store1.Provider>
              }
            />
             <Route
              path="/malai"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Malai/>
                </store1.Provider>
              }
            />
             <Route
              path="/phulahari"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Phulahari/>
                </store1.Provider>
              }
            />
            <Route
              path="/Puri"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Puri/>
                </store1.Provider>
              }
            />
            <Route
              path="/pavbhaji"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Pavbhaji/>
                </store1.Provider>
              }
            />
            <Route
              path="/masaladhosa"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Masaladhosa/>
                </store1.Provider>
              }
            />
             <Route
              path="/roghanjosh"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Roghanjosh/>
                </store1.Provider>
              }
            />
            <Route
              path="/rahul"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Rahul/>
                </store1.Provider>
              }
            />
            <Route
              path="/virat"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Virat/>
                </store1.Provider>
              }
            />
            <Route
              path="/upi"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Upi/>
                </store1.Provider>
              }
            />
            <Route
              path="/akshay"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Akshay/>
                </store1.Provider>
              }
            />
             <Route
              path="/zinta"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Zinta/>
                </store1.Provider>
              }
            />
              <Route
              path="/khatro"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Khatro/>
                </store1.Provider>
              }
            />
            <Route
              path="/kim"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Kim/>
                </store1.Provider>
              }
            />
            <Route
              path="/prince"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Prince/>
                </store1.Provider>
              }
            />
            <Route
              path="/Lily"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Lily/>
                </store1.Provider>
              }
            />
            <Route
              path="/juce"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Juce/>
                </store1.Provider>
              }
            />
            <Route
              path="/clinic"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Clinic/>
                </store1.Provider>
              }
            />
             <Route
              path="/papya"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Papaya/>
                </store1.Provider>
              }
            />
            <Route
              path="/anand"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Anand/>
                </store1.Provider>
              }
            />
            <Route
              path="/iq"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Iq/>
                </store1.Provider>
              }
            />
             <Route
              path="/google"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Google/>
                </store1.Provider>
              }
            />
            <Route
              path="/chicken65"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                 <Chicken65/>
                </store1.Provider>
              }
            />
            <Route
              path="/gulabjamun"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Gulabjamun/>
                </store1.Provider>
              }
            />
            <Route
              path="/pakoda"
              element={
                <store1.Provider value={[navdata1, setnavdata1]}>
                  <Pakoda/>
                </store1.Provider>
              }
            />
          </Routes>       
        </BrowserRouter>
      </div>
    </>
  );
}
