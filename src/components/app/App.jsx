import React from 'react';
import ArticleList from '../articles/ArticleList';

const articles =  [
  {
      "source": {
          "id": null,
          "name": "Yahoo Entertainment"
      },
      "author": "FOX News Videos",
      "title": "Rudy Guiliani on legitimacy of Hunter Biden emails",
      "description": "The former mayor of New York City and attorney for President Trump Rudy Giuliani joins 'Life, Liberty & Levin.'",
      "url": "https://news.yahoo.com/rudy-guiliani-legitimacy-hunter-biden-025430808.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/YruicGqy_8pTIRL2BosdGg--~B/aD03MjA7dz0xMjgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/hd/cp-video-transcode/prod/2020-10/19/5f8d03abe75f6910927b4bca/5f8d03abe75f6910927b4bcb_o_U_v2.jpg",
      "publishedAt": "2020-10-19T02:54:30Z",
      "content": "The former mayor of New York City and attorney for President Trump Rudy Giuliani joins 'Life, Liberty &amp; Levin.'"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Oma Seddiq",
      "title": "'End this nightmare': Rudy Giuliani's daughter urges Americans to vote for Joe Biden in Vanity Fair op-ed",
      "description": "Summary List PlacementWhile President Donald Trump's personal attorney Rudy Giuliani campaigns for his boss' reelection, his daughter is rallying behind former Vice President Joe Biden. \nIn a Vanity Fair column published Thursday, Caroline Giuliani openly exp…",
      "url": "https://www.businessinsider.com/rudy-giulianis-daughter-urges-americans-to-vote-for-biden-2020-10",
      "urlToImage": "https://i.insider.com/5f88b9f19e9fe40019009a62?width=1200&format=jpeg",
      "publishedAt": "2020-10-15T21:30:51Z",
      "content": "While President Donald Trump's personal attorney Rudy Giuliani campaigns for his boss' reelection, his daughter is rallying behind former Vice President Joe Biden. \r\nIn a Vanity Fair column published… [+2518 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Lucia Moses and Lauren Johnson",
      "title": "Insiders at the NY Post are griping about the Hunter Biden coverage, highlighting a political divide in the tabloid newsroom",
      "description": "Summary List Placement\n\nThe right-leaning New York Post published an explosive report on Wednesday about Hunter Biden, the son of former Vice President and Presidential candidate Joe Biden. Facebook and Twitter acted to limit its spread, questioning its credi…",
      "url": "https://www.businessinsider.com/ny-post-insiders-gripe-about-biden-coverage-2020-10",
      "urlToImage": "https://i.insider.com/5f8a00499e9fe40019009e3b?width=1200&format=jpeg",
      "publishedAt": "2020-10-16T23:37:59Z",
      "content": "The right-leaning New York Post published an explosive report on Wednesday about Hunter Biden, the son of former Vice President and Presidential candidate Joe Biden. Facebook and Twitter acted to lim… [+2762 chars]"
  },
  {
      "source": {
          "id": "business-insider",
          "name": "Business Insider"
      },
      "author": "Connor Perrett",
      "title": "Rudy Giuliani said there's a '50/50' chance he worked with a Russian spy to obtain harmful information about the Bidens",
      "description": "Summary List Placement\n\nRudy Giuliani, the former mayor of New York City and one of President Donald Trump's personal lawyers, said in an interview with The Daily Beast that there was a \"50/50\" chance one of his associates was a spy for Russia.  \n\"The chance …",
      "url": "https://www.businessinsider.com/giuliani-said-theres-a-chance-he-worked-with-russian-spy-2020-10",
      "urlToImage": "https://i.insider.com/5f8b1f79c21cfb0019468a13?width=1200&format=jpeg",
      "publishedAt": "2020-10-17T18:46:49Z",
      "content": "Rudy Giuliani, the former mayor of New York City and one of President Donald Trump's personal lawyers, said in an interview with The Daily Beast that there was a \"50/50\" chance one of his associates … [+2700 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Yahoo Entertainment"
      },
      "author": "John T. Bennett",
      "title": "Trumps adds Covid denial to his emerging homestretch re-election message",
      "description": "‘Democrats want to paralyse us. I think, in part, because they want a bad economy,’ Rudy Giuliani says",
      "url": "https://news.yahoo.com/trumps-adds-covid-denial-emerging-201129309.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/lH8bIjzxRnnQ_Emx.b6Ssw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD05NDAuOA--/https://s.yimg.com/uu/api/res/1.2/EtDylB73pEFbR5XZ2ml52g--~B/aD0yNjY3O3c9MzYyNztzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/the_independent_635/f3e9cc24102e721f1b2c474a16fdd7a2",
      "publishedAt": "2020-10-06T22:19:14Z",
      "content": "Donald Trump returned to the White House still with coronavirus but with a new campaign talking point. (Getty Images)\r\nDonald Trump returned to the White House in dramatic fashion, vowing to return t… [+5163 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Gizmodo.com"
      },
      "author": "Rhett Jones",
      "title": "Conservatives Pull Google Into Their Plan to Let People Die",
      "description": "The Great Barrington Declaration is the latest fringe evidence conservatives are using to bolster the argument that the U.S. just needs to embrace getting infected with covid-19. On Tuesday, the New York Times reported that White House officials are now citin…",
      "url": "https://gizmodo.com/conservatives-pull-google-into-their-plan-to-let-people-1845371054",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/lj3khbdwntwecl5ouovw.jpg",
      "publishedAt": "2020-10-14T17:41:00Z",
      "content": "The Great Barrington Declaration is the latest fringe evidence conservatives are using to bolster the argument that the U.S. just needs to embrace getting infected with covid-19. On Tuesday, the New … [+7562 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "/FILM"
      },
      "author": "Ben Pearson",
      "title": "‘Borat 2’ Will Debut on Amazon Prime Video Next Month",
      "description": "Sacha Baron Cohen‘s Borat sequel, which was filmed and edited in secret earlier this year, now has a release date. Well, it’s actually more of a release window, since the official date hasn’t been revealed quite yet. Borat 2, which just received its own ludic…",
      "url": "https://www.slashfilm.com/borat-2-release/",
      "urlToImage": "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/sachabaroncohen-borat-jimmykimmellive.jpg",
      "publishedAt": "2020-09-29T19:52:42Z",
      "content": "Sacha Baron Cohen‘s Borat sequel, which was filmed and edited in secret earlier this year, now has a release date. Well, it’s actually more of a release window, since the official date hasn’t been re… [+2430 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "/FILM"
      },
      "author": "Hoai-Tran Bui",
      "title": "‘Borat 2’ Teaser: Borat is Back With an Official Release Date on Amazon",
      "description": "Borat is back, baby. And it’s like nothing at all has changed for the Kazakh TV personality played by Sacha Baron Cohen in the 14 years since he took America by storm. He’s got the same boxy suit, the same mustache, the same oblivious attitude — but this time…",
      "url": "https://www.slashfilm.com/borat-2-teaser-release-date/",
      "urlToImage": "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Borat-2.jpg",
      "publishedAt": "2020-10-01T13:54:28Z",
      "content": "Borat is back, baby. And it’s like nothing at all has changed for the Kazakh TV personality played by Sacha Baron Cohen in the 14 years since he took America by storm. He’s got the same boxy suit, th… [+2460 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "/FILM"
      },
      "author": "Hoai-Tran Bui",
      "title": "‘Borat 2’ Releases a Very Nice Teaser Tied to the Presidential Debate",
      "description": "If there’s one thing that can be singled out as the key to comedy, it’s timing. And Sacha Baron Cohen certainly timed his teaser for his Borat sequel right, releasing a video from the “Republic of Kazakhstan” praising President Trump’s performance in last nig…",
      "url": "https://www.slashfilm.com/borat-2-teaser/",
      "urlToImage": "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/sacha-baron-cohen-borat-e1531146186150.jpg",
      "publishedAt": "2020-09-30T14:30:12Z",
      "content": "If there’s one thing that can be singled out as the key to comedy, it’s timing. And Sacha Baron Cohen certainly timed his teaser for his Borat sequel right, releasing a video from the “Republic of Ka… [+2613 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "TheBlaze"
      },
      "author": "BlazeTV Staff",
      "title": "EXCLUSIVE: Giuliani tells Steven Crowder he has proof Hunter Biden's hard drive is authentic",
      "description": "In an exclusive interview, Mayor Rudy Giuliani dropped a bombshell that may add more evidence of Joe Biden's first-hand knowledge of business his son, Hunter Biden, conducted in Ukraine. This comes despite the Biden campaign and Big Tech lashing out at New Yo…",
      "url": "https://www.theblaze.com/louder-with-crowder/exclusive-giuliani-tells-steven-crowder-he-has-proof-hunter-bidens-hard-drive-is-authentic",
      "urlToImage": null,
      "publishedAt": "2020-10-16T03:52:36Z",
      "content": null
  },
  {
      "source": {
          "id": "independent",
          "name": "Independent"
      },
      "author": "Chris Riotta",
      "title": "'He has dementia': Rudy Guiliani makes unfounded claims about Biden during rambling Fox News interview",
      "description": "<p>The president’s lawyer left Fox News hosts looking uncomfortable as he ramped up his fake conspiracies against Joe Biden</p>",
      "url": "https://www.independent.co.uk/news/world/americas/us-politics/rudy-guiliani-biden-dementia-claims-fox-news-interview-video-b694592.html",
      "urlToImage": "https://static.independent.co.uk/2020/09/29/14/rudy.jpg",
      "publishedAt": "2020-09-29T13:41:16Z",
      "content": "Fox News hosts appeared visibly uncomfortable when the presidents lawyer began launching baseless claims about former Vice President Joe Biden in an interview with the conservative networks morning s… [+3006 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Naturalnews.com"
      },
      "author": "Mike Adams",
      "title": "EXCLUSIVE: Chinese whistleblower reveals Hunter Biden \"sex tapes\" contain video of Joe Biden's son sexually ABUSING multiple under-age Chinese teens",
      "description": "<table>\n <tr>\n <td>\n \n </td>\n <td>\n (Natural News) We have exclusive breaking news that changes the trajectory of the upcoming US election. Because we speak Mandarin Chinese, we have been able to hear the correct Chinese description of what’s on Hunter Biden’…",
      "url": "https://www.naturalnews.com/2020-10-17-hunter-biden-sex-tapes-sexually-abusing-multiple-under-age-teens.html",
      "urlToImage": "https://www.naturalnews.com/wp-content/uploads/sites/91/2020/10/Hunter-Biden-Cigarette.jpg",
      "publishedAt": "2020-10-17T11:49:15Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "Dianeravitch.net"
      },
      "author": "dianeravitch",
      "title": "Caroline Rose Guiliani: Why You Should Vote for Biden & Harris",
      "description": "The children of prominent politicians are causing mighty waves. Kellyanne Conway’s daughter Claudia has one million followers on TikTok, Twitter and other social media outlets, where she regularly excoriates Trump and her parents. The niece of Donald Trump, M…",
      "url": "https://dianeravitch.net/2020/10/16/caroline-rose-guiliani-why-you-should-vote-for-biden-harris/",
      "urlToImage": "https://greatschoolwars.files.wordpress.com/2017/12/diane.jpg?w=200",
      "publishedAt": "2020-10-16T15:58:07Z",
      "content": "The children of prominent politicians are causing mighty waves. Kellyanne Conway’s daughter Claudia has one million followers on TikTok, Twitter and other social media outlets, where she regularly ex… [+5367 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Daily Dot"
      },
      "author": "Mikael Thalen",
      "title": "Computer repairman behind Biden email story is a pro-Trump conspiracy theorist",
      "description": "As it turns out, the computer repairman behind the New York Post's story surrounding alleged emails from Hunter Biden is an avid supporter of President Donald Trump and a conspiracy theorist.\n\n\nIn an interview with the Daily Beast on Wednesday, John Paul Isaa…",
      "url": "https://www.dailydot.com/debug/john-paul-issac-hunter-biden-emails/",
      "urlToImage": "https://uploads.dailydot.com/2020/10/rep.jpg?fm=pjpg&ixlib=php-3.3.0",
      "publishedAt": "2020-10-14T22:24:03Z",
      "content": "As it turns out, the computer repairman behind the New York Post’s story surrounding alleged emails from Hunter Biden is an avid supporter of President Donald Trump and a conspiracy theorist.\r\nIn an … [+2242 chars]"
  },
  {
      "source": {
          "id": "ign",
          "name": "IGN"
      },
      "author": "Jim Vejvoda",
      "title": "Borat 2 Busts Rudy Giuliani in a Very Compromising Scene",
      "description": "Rudy Giuliani, the former New York City mayor and the current personal attorney of President Donald Trump, is now embroiled in a personal scandal after being caught in a compromising position in Borat 2.",
      "url": "https://www.ign.com/articles/borat-2-rudy-giuliani-scene",
      "urlToImage": "https://assets1.ignimgs.com/2020/10/21/rudy-giuliani-thumb-1603303405827.jpg?width=1280",
      "publishedAt": "2020-10-21T18:29:18Z",
      "content": "Rudy Giuliani, the former New York City mayor and the current personal attorney of President Donald Trump, is now embroiled in a personal scandal after being caught in a compromising position in the … [+2857 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Crooksandliars.com"
      },
      "author": "John Amato",
      "title": "Giuliani Claims US Intelligence 'Out To Get' Trump After Laptop Scam Backfires",
      "description": "Rudy Giuliani went on Fox and Friends this morning to promote Russia's (now fizzled) \"October surprise.\" \nAs usual it was a despicable mess of lies, conspiracy theories, unverified information and things he wished were true against the Bidens. The story of th…",
      "url": "https://crooksandliars.com/2020/10/rudy-giuliani-claims-us-intelligence",
      "urlToImage": "https://crooksandliars.com/files/mediaposters/2020/10/46181.jpg",
      "publishedAt": "2020-10-16T16:01:00Z",
      "content": "Rudy Giuliani went on Fox and Friends this morning to promote Russia's (now fizzled) \"October surprise.\" \r\nAs usual it was a despicable mess of lies, conspiracy theories, unverified information and t… [+2705 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Www.vg.no"
      },
      "author": "Nora Thorp Bjørnstad",
      "title": "Hevder Trumps advokat videreformidlet russiske «fake news» til presidenten",
      "description": "Nok en gang spiller Trumps omstridte advokat Rudy Giuliani hovedrollen i et skittent drama. Amerikansk etterretning mener han har latt seg lure av desinformasjon fra russiske myndigheter, skriver Washington Post.",
      "url": "https://www.vg.no/nyheter/utenriks/i/dlO8OA/hevder-trumps-advokat-videreformidlet-russiske-fake-news-til-presidenten",
      "urlToImage": "https://akamai.vgc.no/v2/images/93d7ec8c-0e96-495b-93b9-5b0477b6d738?fit=crop&h=1069&w=1900&s=6c24d120514afef839710302b1bc0ce9a1a8b0d0",
      "publishedAt": "2020-10-16T09:10:35Z",
      "content": "RUSSISKE KOBLINGER: Trumps personlige advokat Rudy Giuliano har latt seg påvirke av russisk etterretning, hevder tidligere ansatte i amerikansk etterretning. Foto: Courtesy of the Committee on Arrang… [+4003 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "GeekTyrant"
      },
      "author": "Joey Paur",
      "title": "Borat is Back and Looking To Give His Daughter Away as a Gift in First Trailer For BORAT: SUBSEQUENT MOVIEFILM",
      "description": "Sacha Baron Cohen is back as Borat to make fun of and insult Americans again and this time he’s brought his daughter along for the ride to try and give his daughter away as a gift. The first trailer for the film has been released and we finally have a real ti…",
      "url": "https://geektyrant.com/news/borat-is-back-and-looking-to-give-his-daughter-away-as-a-gift-in-first-trailer-for-borat-subsequent-moviefilm",
      "urlToImage": "http://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/5f75f522df48bb24d6deb4bb/1601569539302/borat-is-back-and-looking-to-give-his-daughter-away-as-a-gift-in-first-trailer-for-borat-subsequent-moviefilm.jpg?format=1500w",
      "publishedAt": "2020-10-01T16:16:00Z",
      "content": "Sacha Baron Cohen is back as Borat to make fun of and insult Americans again and this time hes brought his daughter along for the ride to try and give his daughter away as a gift. The first trailer f… [+1050 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Daily Caller"
      },
      "author": "Shelby Talcott",
      "title": "Ron Johnson Calls On Former Buzzfeed Reporter To Verify Hunter Biden Email",
      "description": "Republican Wisconsin Sen. Ron Johnson called on a former Buzzfeed reporter to confirm the authenticity of an email allegedly found on Hunter Biden&#039;s laptop.",
      "url": "https://dailycaller.com/2020/10/21/ron-johnson-buzzfeed-max-heddon-verify-hunter-biden-email/",
      "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2020/10/GettyImages-465795294-scaled-e1603310364645.jpg",
      "publishedAt": "2020-10-21T20:19:31Z",
      "content": "Republican Wisconsin Sen. Ron Johnson called on a former Buzzfeed reporter to confirm the authenticity of an email allegedly found on Hunter Biden’s laptop.\r\nThe email in question is dated May 13, 20… [+2102 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "The Daily Caller"
      },
      "author": "Shelby Talcott",
      "title": "Trump Says Adam Schiff Should Be ‘Put Away’ After Suggesting Hunter Biden Laptop Stories Are Russian Disinformation",
      "description": "President Donald Trump said Adam Schiff &quot;ought to be put away&quot; over comments that the Hunter Biden laptop stories harbor traces of Russian disinformation.",
      "url": "https://dailycaller.com/2020/10/20/donald-trump-adam-schiff-put-away-hunter-biden-laptop-russian-disinformation/",
      "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2020/10/pjimage-27-e1603209699973.jpg",
      "publishedAt": "2020-10-20T16:03:14Z",
      "content": "President Donald Trump said Tuesday that House Intelligence Committee Chairman Adam Schiff “ought to be put away” over comments that the Hunter Biden laptop stories are part of a Russian disinformati… [+2322 chars]"
  }
];
export default function App() {
  return <ArticleList articles={articles}/>;
}
