/**
 * Created by Yibo on 8/26/2015.
 */
var nyt = angular.module('yoApp');
nyt.controller("NytCtrl", function ($scope) {
  $scope.nytMedia  =   {};
  $scope.nytMedia.iframeComment  =   'Sites like The New York Times have many articles and posts about the 2016 Election, but it is difficult to know all the topics covered and the sentiment behind the discussions in this large amount of unstructured data.';
  $scope.nytMedia.containerShow    =   true;
  $scope.nytMedia.analysisShow    =   false;
  $scope.nytMedia.topics = {};

  //do ajax to get data

  //fake data

  var fakeData  =
  {
    "topictree": {
      "level_1": [
        {
          "header": "Hillary Clinton",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "got an open wound, and part of our job is to pour salt in it",
              "sentiment": "negative",
              "link": "0-18-39"
            },
            {
              "text": "allowing her to give voice",
              "sentiment": "positive",
              "link": "0-52-80"
            },
            {
              "text": "confronting a stark reality",
              "sentiment": "negative",
              "link": "0-56-25"
            },
            {
              "text": "draw stronger support from african-american, latino voter and moderate voter",
              "sentiment": "positive",
              "link": "0-28-95"
            },
            {
              "text": "appealed to mr. obama's coalition of young and african-american voter with , and civil right",
              "sentiment": "positive",
              "link": "0-64-34"
            },
            {
              "text": "offering an unpleasant reminder",
              "sentiment": "negative",
              "link": "0-58-12"
            },
            {
              "text": "more of an activist",
              "sentiment": "positive",
              "link": "0-64-56"
            }
          ]
        },
        {
          "header": "Clinton",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "effort to vilify mrs. clinton",
              "sentiment": "negative",
              "link": "0-18-20"
            },
            {
              "text": "her concern about the emergence of a potentially bigger problem, so-called shadow banking",
              "sentiment": "negative",
              "link": "0-10-86"
            },
            {
              "text": "strategists appear mostly unmoved",
              "sentiment": "negative",
              "link": "0-78-70"
            },
            {
              "text": "dealing with debt and legal fee",
              "sentiment": "negative",
              "link": "0-18-66"
            },
            {
              "text": "particularly sensitive to criticism",
              "sentiment": "negative",
              "link": "0-34-76"
            },
            {
              "text": "understand their problem",
              "sentiment": "positive",
              "link": "0-74-67"
            }
          ]
        },
        {
          "header": "Bernie Sanders",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "unlikely to beat her",
              "sentiment": "negative",
              "link": "0-24-21"
            },
            {
              "text": "offering to america about income inequality and climate change",
              "sentiment": "positive",
              "link": "0-62-11"
            },
            {
              "text": "gone from an annoyance to a threat",
              "sentiment": "negative",
              "link": "0-28-55"
            },
            {
              "text": "sanders's adviser concede",
              "sentiment": "negative",
              "link": "0-40-32"
            },
            {
              "text": "will lose",
              "sentiment": "negative",
              "link": "0-24-17"
            },
            {
              "text": "challenge facing mr. sanders",
              "sentiment": "negative",
              "link": "0-40-44"
            },
            {
              "text": "also further energize his fund-raising base",
              "sentiment": "positive",
              "link": "0-28-36"
            },
            {
              "text": "responded with empathy",
              "sentiment": "positive",
              "link": "0-40-76"
            }
          ]
        },
        {
          "header": "Campaign",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "not concerned about the campaign's potential",
              "sentiment": "negative",
              "link": "0-12-72"
            },
            {
              "text": "warning the campaign",
              "sentiment": "negative",
              "link": "0-28-79"
            },
            {
              "text": "failed 2008 presidential campaign",
              "sentiment": "negative",
              "link": "0-50-48"
            },
            {
              "text": "persuading undecided voter",
              "sentiment": "negative",
              "link": "0-78-3"
            },
            {
              "text": "criticized for lacking passion",
              "sentiment": "negative",
              "link": "0-66-71"
            }
          ]
        },
        {
          "header": "Obama",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "quick to note the irony",
              "sentiment": "negative",
              "link": "0-58-33"
            },
            {
              "text": "able to match the republican candidate, mitt romney",
              "sentiment": "positive",
              "link": "0-12-17"
            },
            {
              "text": "disappointed by mr. obama's occasional lack of gumption",
              "sentiment": "negative",
              "link": "0-64-92"
            },
            {
              "text": "often infuriated teacher union",
              "sentiment": "negative",
              "link": "0-16-63"
            },
            {
              "text": "rebuffed mr. obama",
              "sentiment": "negative",
              "link": "0-64-36"
            },
            {
              "text": "often with the help of self-described independent and republican",
              "sentiment": "positive",
              "link": "0-24-64"
            },
            {
              "text": "obama's quiet, a studious person",
              "sentiment": "positive",
              "link": "0-64-55"
            },
            {
              "text": "not help obama",
              "sentiment": "negative",
              "link": "0-58-33"
            }
          ]
        },
        {
          "header": "State Department",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "also criticized the state department",
              "sentiment": "negative",
              "link": "0-6-30"
            },
            {
              "text": "not work at the state department",
              "sentiment": "negative",
              "link": "0-36-16"
            },
            {
              "text": "used every excuse to avoid complying with fundamental",
              "sentiment": "negative",
              "link": "0-6-56"
            },
            {
              "text": "acknowledged the missing correspondence",
              "sentiment": "negative",
              "link": "0-26-27"
            },
            {
              "text": "widened a rift between the state department",
              "sentiment": "negative",
              "link": "0-48-7"
            }
          ]
        },
        {
          "header": "Democrat",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "a problem with moderate and less educated democrat",
              "sentiment": "negative",
              "link": "0-24-85"
            },
            {
              "text": "rebuffed mr. obama",
              "sentiment": "negative",
              "link": "0-64-36"
            },
            {
              "text": "one step short of communism",
              "sentiment": "negative",
              "link": "0-0-47"
            },
            {
              "text": "fight back",
              "sentiment": "positive",
              "link": "0-70-31"
            },
            {
              "text": "favor mrs. clinton, and democrat",
              "sentiment": "positive",
              "link": "0-60-57"
            },
            {
              "text": "embrace president johnson's view",
              "sentiment": "positive",
              "link": "0-14-47"
            },
            {
              "text": "prominent backer of democrat",
              "sentiment": "positive",
              "link": "0-64-85"
            },
            {
              "text": "deal and ensure better protection for american worker",
              "sentiment": "positive",
              "link": "0-56-8"
            },
            {
              "text": "shocked almost everyone by rejecting key provision",
              "sentiment": "negative",
              "link": "0-60-0"
            },
            {
              "text": "more comfortable with a modest tax-and-spend agenda",
              "sentiment": "positive",
              "link": "0-60-54"
            }
          ]
        },
        {
          "header": "Bill Clinton",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "also berated mr. clinton",
              "sentiment": "negative",
              "link": "0-74-39"
            },
            {
              "text": "good family man",
              "sentiment": "positive",
              "link": "0-74-86"
            },
            {
              "text": "celebrated his 67th",
              "sentiment": "positive",
              "link": "0-44-112"
            },
            {
              "text": "helped mrs. clinton",
              "sentiment": "positive",
              "link": "0-10-82"
            },
            {
              "text": "accepted the role of united nation",
              "sentiment": "positive",
              "link": "0-32-66"
            }
          ]
        },
        {
          "header": "Rodham",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "on blood thinner and unable to travel to",
              "sentiment": "negative",
              "link": "0-0-104"
            },
            {
              "text": "mr. rodham's sour, demeaning nature",
              "sentiment": "negative",
              "link": "0-0-97"
            },
            {
              "text": "cheering her",
              "sentiment": "positive",
              "link": "0-0-135"
            }
          ]
        },
        {
          "header": "Voter",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "voter distrust washington and politics",
              "sentiment": "negative",
              "link": "0-76-20"
            },
            {
              "text": "struck many voter",
              "sentiment": "negative",
              "link": "0-62-28"
            },
            {
              "text": "could also offend some voter",
              "sentiment": "negative",
              "link": "0-20-56"
            },
            {
              "text": "alienate the democratic base of voter",
              "sentiment": "negative",
              "link": "0-64-62"
            },
            {
              "text": "tend to like politician who lead",
              "sentiment": "positive",
              "link": "0-72-34"
            },
            {
              "text": "want better politics",
              "sentiment": "positive",
              "link": "0-72-61"
            },
            {
              "text": "represent the natural opposition to mrs. clinton",
              "sentiment": "negative",
              "link": "0-24-19"
            },
            {
              "text": "can help build voter list",
              "sentiment": "positive",
              "link": "0-12-10"
            },
            {
              "text": "register voter and ensure mrs. clinton",
              "sentiment": "positive",
              "link": "0-78-109"
            },
            {
              "text": "don't exist",
              "sentiment": "negative",
              "link": "0-60-22"
            }
          ]
        },
        {
          "header": "Email",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "attack in benghazi",
              "sentiment": "negative",
              "link": "0-48-1"
            },
            {
              "text": "directly contradict her public statement",
              "sentiment": "negative",
              "link": "0-36-26"
            },
            {
              "text": "apparently failed",
              "sentiment": "negative",
              "link": "0-26-5"
            },
            {
              "text": "widened a rift between the state department",
              "sentiment": "negative",
              "link": "0-48-7"
            },
            {
              "text": "waiting for an email",
              "sentiment": "negative",
              "link": "0-38-39"
            },
            {
              "text": "missing email record",
              "sentiment": "negative",
              "link": "0-26-20"
            }
          ]
        },
        {
          "header": "Gowdy",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "mr. gowdy on tuesday cast doubt",
              "sentiment": "negative",
              "link": "0-46-24"
            },
            {
              "text": "argued with representative darrell issa",
              "sentiment": "negative",
              "link": "0-46-52"
            }
          ]
        },
        {
          "header": "Republican",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "super pac",
              "sentiment": "positive",
              "link": "0-12-50"
            },
            {
              "text": "potential republican rival",
              "sentiment": "positive",
              "link": "0-50-47"
            },
            {
              "text": "to attack a republican nominee",
              "sentiment": "negative",
              "link": "0-18-81"
            },
            {
              "text": "early attack labeling mitt romney",
              "sentiment": "negative",
              "link": "0-18-23"
            },
            {
              "text": "impossible for him to shake",
              "sentiment": "negative",
              "link": "0-18-23"
            },
            {
              "text": "blamed republican",
              "sentiment": "negative",
              "link": "0-10-48"
            },
            {
              "text": "stunt by republican",
              "sentiment": "negative",
              "link": "0-46-50"
            },
            {
              "text": "develop line of attack",
              "sentiment": "negative",
              "link": "0-18-31"
            }
          ]
        },
        {
          "header": "Aide",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "irked some white house aide",
              "sentiment": "negative",
              "link": "0-56-11"
            },
            {
              "text": "helped her shape",
              "sentiment": "positive",
              "link": "0-76-78"
            },
            {
              "text": "aide reject criticism",
              "sentiment": "negative",
              "link": "0-56-74"
            }
          ]
        },
        {
          "header": "Department",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "working diligently",
              "sentiment": "positive",
              "link": [
                "0-48-46",
                "0-36-53"
              ]
            },
            {
              "text": "also criticized the state department",
              "sentiment": "negative",
              "link": "0-6-30"
            },
            {
              "text": "to use those process to protect mrs. clinton",
              "sentiment": "positive",
              "link": "0-6-65"
            },
            {
              "text": "not work at the state department",
              "sentiment": "negative",
              "link": "0-36-16"
            },
            {
              "text": "could not find",
              "sentiment": "negative",
              "link": "0-26-28"
            },
            {
              "text": "used every excuse to avoid complying with fundamental",
              "sentiment": "negative",
              "link": "0-6-56"
            },
            {
              "text": "acknowledged the missing correspondence",
              "sentiment": "negative",
              "link": "0-26-27"
            }
          ]
        },
        {
          "header": "President",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "full of sticky wicket",
              "sentiment": "negative",
              "link": "0-58-61"
            },
            {
              "text": "will also praise president obama's",
              "sentiment": "positive",
              "link": "0-16-22"
            },
            {
              "text": "could help with a settlement",
              "sentiment": "positive",
              "link": "0-30-75"
            },
            {
              "text": "sometimes scathing assessment of the president",
              "sentiment": "negative",
              "link": "0-22-22"
            },
            {
              "text": "occasionally disagree with the president",
              "sentiment": "negative",
              "link": "0-56-21"
            }
          ]
        },
        {
          "header": "Speech",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "offering sweeping and passionate speech",
              "sentiment": "positive",
              "link": "0-52-20"
            },
            {
              "text": "giving an eloquent speech",
              "sentiment": "positive",
              "link": "0-62-34"
            },
            {
              "text": "time sweeping",
              "sentiment": "positive",
              "link": "0-66-0"
            },
            {
              "text": "showed a clear understanding",
              "sentiment": "positive",
              "link": "0-10-58"
            },
            {
              "text": "pointed repudiation of republican",
              "sentiment": "negative",
              "link": "0-66-0"
            },
            {
              "text": "poor at her biggest campaign event to date",
              "sentiment": "negative",
              "link": "0-66-0"
            },
            {
              "text": "convincing them",
              "sentiment": "positive",
              "link": "0-66-81"
            },
            {
              "text": "not offered",
              "sentiment": "negative",
              "link": "0-66-85"
            },
            {
              "text": "stump speech",
              "sentiment": "negative",
              "link": "0-34-30"
            },
            {
              "text": "sharply attack republican on issue",
              "sentiment": "negative",
              "link": "0-34-30"
            },
            {
              "text": "more children's defense fund than thomas",
              "sentiment": "positive",
              "link": "0-2-22"
            },
            {
              "text": "freedom of speech and worship",
              "sentiment": "positive",
              "link": "0-76-62"
            }
          ]
        },
        {
          "header": "Roger Clinton",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "aspiring singer with a rock band",
              "sentiment": "positive",
              "link": "0-30-55"
            },
            {
              "text": "lawyer defending roger clinton in a lawsuit",
              "sentiment": "positive",
              "link": "0-30-75"
            },
            {
              "text": "height of roger clinton's fame",
              "sentiment": "positive",
              "link": "0-30-1"
            },
            {
              "text": "had no money",
              "sentiment": "negative",
              "link": "0-30-10"
            }
          ]
        },
        {
          "header": "Government",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "government fee on the sale",
              "sentiment": "negative",
              "link": "0-10-71"
            },
            {
              "text": "more competent",
              "sentiment": "positive",
              "link": "0-2-47"
            },
            {
              "text": "apostle of government policy",
              "sentiment": "positive",
              "link": "0-14-51"
            },
            {
              "text": "want an expansive government",
              "sentiment": "positive",
              "link": "0-14-54"
            },
            {
              "text": "create more opportunity",
              "sentiment": "positive",
              "link": "0-76-75"
            },
            {
              "text": "own best interest than the company",
              "sentiment": "positive",
              "link": "0-2-47"
            },
            {
              "text": "can direct investor toward more sensible long-term investment",
              "sentiment": "positive",
              "link": "0-2-40"
            }
          ]
        },
        {
          "header": "Father",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "to visit her father's grave",
              "sentiment": "negative",
              "link": "0-0-70"
            },
            {
              "text": "not the odorless kind",
              "sentiment": "negative",
              "link": "0-0-30"
            },
            {
              "text": "shared the same distinct laugh",
              "sentiment": "positive",
              "link": "0-0-114"
            },
            {
              "text": "know best",
              "sentiment": "positive",
              "link": "0-0-101"
            },
            {
              "text": "equally powerful",
              "sentiment": "positive",
              "link": "0-0-12"
            }
          ]
        },
        {
          "header": "American",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "built the greatest economy and strongest middle class",
              "sentiment": "positive",
              "link": "0-8-7"
            },
            {
              "text": "not trust her",
              "sentiment": "negative",
              "link": "0-76-14"
            },
            {
              "text": "overly dependent on government",
              "sentiment": "negative",
              "link": "0-18-100"
            },
            {
              "text": "live of poor and elderly american",
              "sentiment": "negative",
              "link": "0-14-36"
            }
          ]
        },
        {
          "header": "Committee",
          "sentiment": "neutral",
          "level_2": {
            "text": "co-founder of progressive change campaign committee",
            "sentiment": "positive",
            "link": "0-66-83"
          }
        },
        {
          "header": "Mr. Drumheller",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "declined",
              "sentiment": "negative",
              "link": "0-46-41"
            },
            {
              "text": "tried unsuccessfully",
              "sentiment": "negative",
              "link": "0-46-38"
            }
          ]
        },
        {
          "header": "Family",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "mr. rodham's sour, demeaning nature",
              "sentiment": "negative",
              "link": "0-0-97"
            },
            {
              "text": "person familiar with the clinton family",
              "sentiment": "positive",
              "link": "0-30-133"
            },
            {
              "text": "substantially engaged in lifting american family",
              "sentiment": "positive",
              "link": "0-76-6"
            }
          ]
        },
        {
          "header": "Party",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "include a large number of less educated, more religious",
              "sentiment": "negative",
              "link": "0-24-54"
            },
            {
              "text": "to help her fend off illness on the campaign trail",
              "sentiment": "negative",
              "link": "0-0-28"
            },
            {
              "text": "has no debate",
              "sentiment": "positive",
              "link": "0-72-6"
            },
            {
              "text": "philosophical fight in the party",
              "sentiment": "negative",
              "link": "0-14-7"
            },
            {
              "text": "traditional value",
              "sentiment": "positive",
              "link": "0-60-4"
            },
            {
              "text": "more assertive",
              "sentiment": "positive",
              "link": "0-60-4"
            },
            {
              "text": "can accept",
              "sentiment": "positive",
              "link": "0-12-68"
            }
          ]
        },
        {
          "header": "Husband",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "survived so many controversy",
              "sentiment": "positive",
              "link": "0-18-30"
            },
            {
              "text": "expressed concern last year",
              "sentiment": "negative",
              "link": "0-78-91"
            }
          ]
        },
        {
          "header": "Country",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "unfamiliar with the borough and thought",
              "sentiment": "negative",
              "link": "0-38-76"
            },
            {
              "text": "interest in the country",
              "sentiment": "positive",
              "link": "0-36-25"
            },
            {
              "text": "could transcend its racially divisive root",
              "sentiment": "negative",
              "link": "0-52-0"
            },
            {
              "text": "isn't hungering for liberalism",
              "sentiment": "positive",
              "link": "0-14-16"
            },
            {
              "text": "protecting the country",
              "sentiment": "positive",
              "link": "0-76-65"
            }
          ]
        },
        {
          "header": "Dorothy",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "not allowed to leave her room for a year",
              "sentiment": "negative",
              "link": "0-74-8"
            },
            {
              "text": "forming the emotional foundation of her daughter's campaign for president",
              "sentiment": "negative",
              "link": "0-74-15"
            }
          ]
        },
        {
          "header": "Adviser",
          "sentiment": "neutral",
          "level_2": [
            {
              "text": "also argued that",
              "sentiment": "negative",
              "link": "0-28-85"
            },
            {
              "text": "sanders's adviser concede",
              "sentiment": "negative",
              "link": "0-40-32"
            },
            {
              "text": "helped choreograph",
              "sentiment": "positive",
              "link": "0-76-46"
            },
            {
              "text": "worry among adviser and ally",
              "sentiment": "negative",
              "link": "0-28-0"
            },
            {
              "text": "fairly seriously",
              "sentiment": "positive",
              "link": "0-26-49"
            }
          ]
        },
        {
          "header": "MINOR TOPICS",
          "sentiment": "neutral",
          "level_2": {
            "text": "underdog",
            "sentiment": "negative",
            "link": [
              "0-62-100",
              "0-62-97",
              "0-62-67",
              "0-62-94",
              "0-62-4",
              "0-62-27"
            ]
          }
        }
      ],
      "review-text": {
        "p": [
          {
            "a": [
              {
                "-id": "0-0-0",
                "#text": "As a little girl, if Hillary Rodham forgot to screw the cap back on the toothpaste, "
              },
              {
                "-id": "0-0-1",
                "#text": "her father would toss the tube out the bathroom window. "
              },
              {
                "-id": "0-0-2",
                "#text": "She'd scurry around in the snow-covered evergreen bushes outside their suburban Chicago home to find it and return inside to brush her teeth, "
              },
              {
                "-id": "0-0-3",
                "#text": "reminded, once again, of one of Hugh E. "
              },
              {
                "-id": "0-0-4",
                "#text": "Rodham's many rules.,"
              },
              {
                "-id": "0-0-5",
                "#text": "When she lagged behind in Miss Metzger's fourth-grade math class, Mr. Rodham would wake his daughter at dawn to grill her on multiplication tables. "
              },
              {
                "-id": "0-0-6",
                "#text": "When she brought home an A, "
              },
              {
                "-id": "0-0-7",
                "span": {
                  "-class": "negative",
                  "#text": "he would sneer"
                },
                "#text": ": \""
              },
              {
                "-id": "0-0-8",
                "span": {
                  "-class": "positive",
                  "#text": "You must go to a pretty easy school"
                },
                "#text": ".\""
              },
              {
                "-id": "0-0-9",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-10",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton has made the struggles of her mother, Dorothy Rodham, a central part of her 2016 campaign's message"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-11",
                "#text": "and has repeatedly described Mrs. Rodham's life story to crowds around the country. "
              },
              {
                "-id": "0-0-12",
                "span": {
                  "-class": "positive",
                  "#text": "But her father, whom Mrs. Clinton rarely talks about publicly, exerted an equally powerful"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-13",
                "#text": "if sometimes bruising, influence on the woman who wants to become the first female president.,"
              },
              {
                "-id": "0-0-14",
                "span": {
                  "-class": "negative",
                  "#text": "The brusque son of an English immigrant and a coal miner's daughter in Scranton"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-15",
                "#text": "Pa., "
              },
              {
                "-id": "0-0-16",
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Rodham, for most of his life, harbored prejudices against blacks, Catholics and anyone else not like him"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-17",
                "span": {
                  "-class": "negative",
                  "#text": "He hurled biting sarcasm at his wife and his only daughter and spanked, at times excessively"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-18",
                "#text": "his three children to keep them in line, according to interviews with friends and a review of documents, "
              },
              {
                "-id": "0-0-19",
                "#text": "Mrs. Clinton's writings and former President Bill Clinton's memoir.,\""
              },
              {
                "-id": "0-0-20",
                "span": {
                  "-class": "negative",
                  "#text": "By all accounts he was kind of a tough customer"
                },
                "#text": ",\"?said Lissa Muscatine, a longtime friend and adviser to Mrs. Clinton. \""
              },
              {
                "-id": "0-0-21",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Hard-working"
                  },
                  {
                    "-class": "negative",
                    "#text": "believed in no free rides"
                  }
                ],
                "#text": [
                  ", ",
                  ", believed you had to earn what you're going to get, "
                ]
              },
              {
                "-id": "0-0-22",
                "span": {
                  "-class": "positive",
                  "#text": "believed his kids could always do better"
                },
                "#text": ".\""
              },
              {
                "-id": "0-0-23",
                "span": {
                  "-class": "negative",
                  "#text": "Presidential candidates often turn to hard-knocks family stories to help them connect with voters, but for years Mrs. Clinton refrained from sharing a detailed portrait of her childhood"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-24",
                "span": {
                  "-class": "positive",
                  "#text": "In her 2016 campaign, she has shown an increased willingness to talk about her mother"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-25",
                "#text": [
                  "a ",
                  " and "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "warm"
                  },
                  {
                    "-class": "negative",
                    "#text": "devoted parent who had been abandoned by her own parents"
                  }
                ]
              },
              {
                "-id": "0-0-26",
                "#text": "and who worked as a housekeeper as a teenager before she met and married Mr. Rodham.,"
              },
              {
                "-id": "0-0-27",
                "span": {
                  "-class": "negative",
                  "#text": "But Mrs. Clinton refers in only oblique ways to her father"
                },
                "#text": ".,"
              },
              {
                "-id": "0-0-28",
                "#text": [
                  "At a house party in Iowa this month, a supporter gave Mrs. Clinton garlic pills ",
                  ". "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "to help her fend off illness on the campaign trail"
                }
              },
              {
                "-id": "0-0-29",
                "span": {
                  "-class": "negative",
                  "#text": "The unexpected gift brought about an olfactory, and impromptu, memory"
                },
                "#text": ". \""
              },
              {
                "-id": "0-0-30",
                "span": {
                  "-class": "negative",
                  "#text": "My late father was a huge believer in garlic,\"?and not the odorless kind, Mrs. Clinton said"
                },
                "#text": ". \""
              },
              {
                "-id": "0-0-31",
                "#text": "I couldn't believe it "
              },
              {
                "-id": "0-0-32",
                "#text": "when I saw him eating a garlic and peanut butter and jelly sandwich.\""
              },
              {
                "-id": "0-0-33",
                "#text": "Even her Father's Day message this year, ,, was, essentially, an ode to her mother.,\""
              },
              {
                "-id": "0-0-34",
                "#text": "I wish she could have seen the America we are going to build together,\"?"
              },
              {
                "-id": "0-0-35",
                "#text": "she wrote of Mrs. Rodham, "
              },
              {
                "-id": "0-0-36",
                "#text": "who died in 2011. \""
              },
              {
                "-id": "0-0-37",
                "#text": "An America,\" Mrs. Clinton continued, \"where a father can tell his daughter: "
              },
              {
                "-id": "0-0-38",
                "#text": "Yes, you can be anything you want to be. "
              },
              {
                "-id": "0-0-39",
                "#text": "Even President of the United States.\""
              },
              {
                "-id": "0-0-40",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "It is unclear"
                  },
                  {
                    "-class": "positive",
                    "#text": "ardent conservative"
                  }
                ],
                "#text": [
                  " what Mr. Rodham, an ",
                  ", "
                ]
              },
              {
                "-id": "0-0-41",
                "#text": [
                  "would have thought about his only daughter's trying (again) to ",
                  "., "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "capture the Democratic nomination"
                }
              },
              {
                "-id": "0-0-42",
                "span": {
                  "-class": "positive",
                  "#text": "in 1993, not long after he watched his daughter hold the Bible as his son-in-law was sworn into office"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-43",
                "#text": "but long before she began her own political career.,"
              },
              {
                "-id": "0-0-44",
                "#text": "When Mr. Clinton eulogized Mr. Rodham, he described him as \""
              },
              {
                "-id": "0-0-45",
                "span": {
                  "-class": "negative",
                  "#text": "tough and gruff"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-0-46",
                "#text": "and said he \""
              },
              {
                "-id": "0-0-47",
                "span": {
                  "-class": "negative",
                  "#text": "thought Democrats were one step short of Communism"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-0-48",
                "#text": "but that I might be O."
              },
              {
                "-id": "0-0-49",
                "#text": "K.\""
              },
              {
                "-id": "0-0-50",
                "#text": "If Mrs. Rodham, a homemaker who never attended college but who raised her daughter to be confident and caring, "
              },
              {
                "-id": "0-0-51",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "is forming the emotional core of Mrs. Clinton's 2016 campaign, invoked"
                  },
                  {
                    "-class": "positive",
                    "#text": "inspiration behind her decades of public service"
                  }
                ],
                "#text": [
                  " as the ",
                  ", "
                ]
              },
              {
                "-id": "0-0-52",
                "span": {
                  "-class": "negative",
                  "#text": "then Mrs. Clinton's father quietly represents the candidate's combative, determined and scrappy side"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-53",
                "span": {
                  "-class": "positive",
                  "#text": "The inspiration, friends said"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-54",
                "#text": [
                  "that toughened his daughter up to not just withstand but ",
                  " yet ",
                  ".,\""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "embrace"
                  },
                  {
                    "-class": "negative",
                    "#text": "another political battle"
                  }
                ]
              },
              {
                "-id": "0-0-55",
                "#text": "He was such a force in the family, and there's a lot of him in Hillary,\"?"
              },
              {
                "-id": "0-0-56",
                "#text": "said Lisa Caputo, a friend and former White House press aide who knew Mr. Rodham. \""
              },
              {
                "-id": "0-0-57",
                "#text": [
                  "The discipline, the ",
                  ", the work ethic, a lot of that's from him.\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "tenacity"
                }
              },
              {
                "-id": "0-0-58",
                "#text": "When Mrs. Clinton does invoke her father on the campaign trail, "
              },
              {
                "-id": "0-0-59",
                "#text": [
                  "she talks about him as a small-business owner who \"just believed that you ",
                  " and do whatever ",
                  " and ",
                  ".\"?("
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "had to work"
                  },
                  {
                    "-class": "negative",
                    "#text": "hard to make your way"
                  },
                  {
                    "-class": "positive",
                    "#text": "you had to do to be successful"
                  },
                  {
                    "-class": "positive",
                    "#text": "provided a good living for our family"
                  }
                ]
              },
              {
                "-id": "0-0-60",
                "#text": "Mr. "
              },
              {
                "-id": "0-0-61",
                "#text": "Rodham shut his drapery business in 1965.),"
              },
              {
                "-id": "0-0-62",
                "#text": "Or Mrs. Clinton reminds people that her father was a Republican, an aside to show she can work with the other side. "
              },
              {
                "-id": "0-0-63",
                "#text": "She did highlight her father's geographic roots in her 2008 campaign, "
              },
              {
                "-id": "0-0-64",
                "#text": "when she tried to win white working-class voters in the Democratic primaries against Barack Obama. "
              },
              {
                "-id": "0-0-65",
                "#text": "Mr. Rodham was born to strict Methodists in working-class eastern Pennsylvania.,"
              },
              {
                "-id": "0-0-66",
                "span": {
                  "-class": "negative",
                  "#text": "His father, Hugh Simpson Rodham, toiled in a Scranton lace mill, and his mother, Hannah Jones Rodham"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-67",
                "#text": "came from a long line of coal miners. "
              },
              {
                "-id": "0-0-68",
                "#text": "When she was a girl, Hillary and her two brothers spent summers at a cabin in the Pocono Mountains that had no indoor bath.,"
              },
              {
                "-id": "0-0-69",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-70",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton tries to visit her father's grave, in the Rodham plot at the Washburn Street Cemetery in Scranton"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-71",
                "#text": "when she passes through. ("
              },
              {
                "-id": "0-0-72",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The headstone was toppled by vandals"
                  },
                  {
                    "-class": "positive",
                    "#text": "restored, shortly after she announced her campaign in April"
                  }
                ],
                "#text": [
                  ", and ",
                  ".)\"?"
                ]
              },
              {
                "-id": "0-0-73",
                "#text": [
                  "She will return to Scranton on July 29 to ",
                  ", her first trip back since she began her 2016 campaign.,\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "raise money"
                }
              },
              {
                "-id": "0-0-74",
                "#text": "My grandfather, like so many of his generation, came to this country as a young child, "
              },
              {
                "-id": "0-0-75",
                "#text": "as an immigrant, went to work at age 11 in the lace mills in Scranton,\"?"
              },
              {
                "-id": "0-0-76",
                "#text": "she says. \""
              },
              {
                "-id": "0-0-77",
                "#text": "So when my dad was born in Scranton, "
              },
              {
                "-id": "0-0-78",
                "#text": "he was born with that American dream.\""
              },
              {
                "-id": "0-0-79",
                "span": {
                  "-class": "negative",
                  "#text": "But unlike her mother's struggles, the darker parts of her father's biography rarely come up when Mrs. Clinton speaks"
                },
                "#text": ".,"
              },
              {
                "-id": "0-0-80",
                "span": {
                  "-class": "negative",
                  "#text": "Depression ran in the family"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-81",
                "#text": "Mrs. Clinton's father found his brother Russell hanging but alive in the attic of his parents' home and had to cut him down. "
              },
              {
                "-id": "0-0-82",
                "#text": "Russell came to live with the Rodhams in their one-bedroom Lincoln Park apartment in Chicago. ("
              },
              {
                "-id": "0-0-83",
                "#text": "In 1950, when Hillary was a toddler, the family moved to a two-story brick house in the affluent suburb of Park Ridge, "
              },
              {
                "-id": "0-0-84",
                "span": {
                  "-class": "negative",
                  "#text": "Ill"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-85",
                "#text": "Russell rented an apartment nearby, but he died in 1962 "
              },
              {
                "-id": "0-0-86",
                "#text": "when he left a cigarette burning, setting his home afire.),"
              },
              {
                "-id": "0-0-87",
                "#text": "Mr. "
              },
              {
                "-id": "0-0-88",
                "#text": "Rodham, who was 230 pounds and 6-foot-2, with thick black hair and furrowed eyebrows, "
              },
              {
                "-id": "0-0-89",
                "span": {
                  "-class": "negative",
                  "#text": "had played football at Pennsylvania State University and worked as a fitness instructor in the Navy during World War II"
                },
                "#text": ".,"
              },
              {
                "-id": "0-0-90",
                "span": {
                  "-class": "negative",
                  "#text": "He would hurl criticism at his wife around the kitchen table at 235 Wisner Street"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-91",
                "#text": "When she encouraged Hillary to learn for learning's sake, Mr. Rodham, "
              },
              {
                "-id": "0-0-92",
                "#text": "who drove a Cadillac, would quip: \""
              },
              {
                "-id": "0-0-93",
                "#text": "Learn for earning's sake.\"?"
              },
              {
                "-id": "0-0-94",
                "#text": "If his children asked for an allowance for their many household chores, he would reply bluntly: \""
              },
              {
                "-id": "0-0-95",
                "#text": "I feed you, "
              },
              {
                "-id": "0-0-96",
                "#text": "don't I?\""
              },
              {
                "-id": "0-0-97",
                "span": {
                  "-class": "negative",
                  "#text": "The family was isolated from its neighbors because of Mr. Rodham's sour, demeaning nature and his misanthropic tendencies"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-98",
                "#text": "said Carl Bernstein, "
              },
              {
                "-id": "0-0-99",
                "#text": "who wrote a 2007 biography of ,, \",.\"\""
              },
              {
                "-id": "0-0-100",
                "#text": "It was anything "
              },
              {
                "-id": "0-0-101",
                "span": {
                  "-class": "positive",
                  "#text": "but \"Father Knows Best,'\"??Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-102",
                "#text": "Bernstein said in an interview.,"
              },
              {
                "-id": "0-0-103",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-104",
                "span": {
                  "-class": "negative",
                  "#text": "Rodham was on blood thinners and unable to travel to see her daughter deliver the"
                },
                "#text": " ,. "
              },
              {
                "-id": "0-0-105",
                "span": {
                  "-class": "negative",
                  "#text": "Hillary was devastated that her mother could not make it"
                },
                "#text": ". "
              },
              {
                "-id": "0-0-106",
                "#text": "Mr. Rodham attended instead.,"
              },
              {
                "-id": "0-0-107",
                "span": {
                  "-class": "negative",
                  "#text": "Her relationship with her father had deteriorated as she drifted"
                },
                "#text": " away from the party of Barry Goldwater and got swept up in the liberalism of the late 1960s. \""
              },
              {
                "-id": "0-0-108",
                "#text": "In typical Hugh Rodham fashion, he flew to Boston late the night before, stayed out by the airport, "
              },
              {
                "-id": "0-0-109",
                "#text": "took the MTA to campus, attended graduation\"?"
              },
              {
                "-id": "0-0-110",
                "#text": "and, after lunch with some of Hillary's classmates, went right back to Chicago, Mrs. Clinton wrote in her 2003 memoir, \""
              },
              {
                "-id": "0-0-111",
                "#text": "Living History.\""
              },
              {
                "-id": "0-0-112",
                "span": {
                  "-class": "positive",
                  "#text": "But their relationship was not without warmth"
                },
                "#text": ".,"
              },
              {
                "-id": "0-0-113",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-114",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton and her father shared the same distinct laugh, a"
                },
                "#text": " \""
              },
              {
                "-id": "0-0-115",
                "#text": "big, rolling guffaw that can turn heads in a restaurant and send cats running from the room,\"?"
              },
              {
                "-id": "0-0-116",
                "#text": "as she described it in \""
              },
              {
                "-id": "0-0-117",
                "#text": "Living History.\"?"
              },
              {
                "-id": "0-0-118",
                "#text": "They played heated games of pinochle (though Mr. Rodham was known to flip the table "
              },
              {
                "-id": "0-0-119",
                "#text": "if he lost).,"
              },
              {
                "-id": "0-0-120",
                "#text": "Mr. "
              },
              {
                "-id": "0-0-121",
                "#text": "Rodham taught his only daughter that she could play sports and do anything the boys did. "
              },
              {
                "-id": "0-0-122",
                "#text": "When she was racked with self-doubt at Wellesley and Yale, her father wrote her tough but tender letters telling her to buck up. \""
              },
              {
                "-id": "0-0-123",
                "#text": "Even "
              },
              {
                "-id": "0-0-124",
                "#text": "when he erupted at me, "
              },
              {
                "-id": "0-0-125",
                "span": {
                  "-class": "positive",
                  "#text": "he admired my independence and accomplishments"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-0-126",
                "#text": "she later wrote.,"
              },
              {
                "-id": "0-0-127",
                "#text": [
                  "At his daughter's wedding in 1975, ",
                  " away to Mr. Clinton, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Rodham was hesitant to give the bride"
                }
              },
              {
                "-id": "0-0-128",
                "#text": "a penniless Southern Baptist Democrat. \""
              },
              {
                "-id": "0-0-129",
                "span": {
                  "-class": "positive",
                  "#text": "You can step back now, Mr. Rodham,\"?the minister finally said"
                },
                "#text": ".,"
              },
              {
                "-id": "0-0-130",
                "#text": "In 1987, after Mr. Rodham had quadruple-bypass surgery, "
              },
              {
                "-id": "0-0-131",
                "#text": "he and Dorothy moved to Little Rock, Ark., "
              },
              {
                "-id": "0-0-132",
                "#text": "to be closer to their daughter and granddaughter, Chelsea. "
              },
              {
                "-id": "0-0-133",
                "#text": "Mrs. Clinton arranged for them to live in a condominium in the city's leafy Hillcrest district. "
              },
              {
                "-id": "0-0-134",
                "#text": "Chelsea Clinton called her grandfather Pop Pop. "
              },
              {
                "-id": "0-0-135",
                "#text": [
                  "The Rodhams attended her softball games, ",
                  " and taking her and her friends out for frozen yogurt afterward.,\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "cheering her on"
                }
              },
              {
                "-id": "0-0-136",
                "#text": [
                  "Her father at that point was beginning to ",
                  ", "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "decline"
                }
              },
              {
                "-id": "0-0-137",
                "#text": "so I think it was to be close to family, and obviously Hillary was close to her family, "
              },
              {
                "-id": "0-0-138",
                "#text": "especially to her mom,\"?said Skip Rutherford, a longtime friend in Little Rock.,"
              },
              {
                "-id": "0-0-139",
                "#text": "After President Clinton's 1993 inauguration, when friends and family toasted the Clintons' arrival in Washington at a party, "
              },
              {
                "-id": "0-0-140",
                "#text": "Mr. Rodham was spotted stewing in a corner and nursing a drink. \""
              },
              {
                "-id": "0-0-141",
                "#text": "My daughter is a real special girl,\"?"
              },
              {
                "-id": "0-0-142",
                "#text": "he told a friend from Scranton, Manny Gelb, "
              },
              {
                "-id": "0-0-143",
                "#text": "who relayed the story to The Associated Press.,"
              },
              {
                "-id": "0-0-144",
                "#text": "When her father had a stroke in 1993, Mrs. Clinton, "
              },
              {
                "-id": "0-0-145",
                "span": {
                  "-class": "negative",
                  "#text": "who was having difficulty adjusting to life in the White House"
                },
                "#text": ", "
              },
              {
                "-id": "0-0-146",
                "#text": "was deeply shaken.,"
              },
              {
                "-id": "0-0-147",
                "#text": "After his life-support machines had been removed and Mr. Rodham lay in a coma at St. Vincent Infirmary in Little Rock, "
              },
              {
                "-id": "0-0-148",
                "#text": [
                  "a scrum of news cameras and ",
                  " outside for any updates, Mrs. Clinton traveled to Austin, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "reporters waiting"
                }
              },
              {
                "-id": "0-0-149",
                "#text": "Tex., "
              },
              {
                "-id": "0-0-150",
                "#text": "to deliver a speech she felt obligated to give.,"
              },
              {
                "-id": "0-0-151",
                "#text": "It became one of the more unusual addresses ever delivered by a first lady. "
              },
              {
                "-id": "0-0-152",
                "#text": "Ms. Caputo, who accompanied Mrs. Clinton on the trip, described the stream-of-consciousness speech \"?"
              },
              {
                "-id": "0-0-153",
                "#text": [
                  "about the meaning of life, ",
                  " and the ",
                  ", delivered without a script \"?"
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "death"
                  },
                  {
                    "-class": "positive",
                    "#text": "need to remake civil society"
                  }
                ]
              },
              {
                "-id": "0-0-154",
                "#text": "as \""
              },
              {
                "-id": "0-0-155",
                "#text": "cathartic.\"\""
              },
              {
                "-id": "0-0-156",
                "#text": "When does life start? "
              },
              {
                "-id": "0-0-157",
                "#text": "When does life end? "
              },
              {
                "-id": "0-0-158",
                "#text": "Who makes those decisions? "
              },
              {
                "-id": "0-0-159",
                "#text": "How do we dare to impinge upon these areas of such delicate, difficult questions?\"?"
              },
              {
                "-id": "0-0-160",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-161",
                "#text": "Clinton asked the crowd.,"
              },
              {
                "-id": "0-0-162",
                "span": {
                  "-class": "negative",
                  "#text": "She never mentioned her father, but quoted Lee Atwater, the Republican strategist who wrote that America was suffering from a"
                },
                "#text": " \""
              },
              {
                "-id": "0-0-163",
                "span": {
                  "-class": "positive",
                  "#text": "spiritual vacuum,\"?caught up in its"
                },
                "#text": " \""
              },
              {
                "-id": "0-0-164",
                "span": {
                  "-class": "negative",
                  "#text": "ruthless ambitions and moral decay,\"?before ,.,\"You can acquire all you want and still feel empty"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-0-165",
                "#text": "Mrs. "
              },
              {
                "-id": "0-0-166",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-0-167",
                "#text": "What power wouldn't I trade for a little more time with my family?\""
              },
              {
                "-id": "0-0-168",
                "#text": "Hugh Rodham died the next day."
              }
            ]
          },
          {
            "a": {
              "-id": "0-1-0",
              "#text": "1437289200989"
            }
          },
          {
            "a": [
              {
                "-id": "0-2-0",
                "span": {
                  "-class": "positive",
                  "#text": "Well, Hillary Clinton hasn't gone crazy"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-1",
                "#text": "At a time when some in her party are drifting toward Bernie Sanders/Occupy Wall Street-style rhetoric, "
              },
              {
                "-id": "0-2-2",
                "#text": "Clinton delivered her , of the campaign. "
              },
              {
                "-id": "0-2-3",
                "#text": "It was solidly liberal \"?"
              },
              {
                "-id": "0-2-4",
                "#text": "very solidly \"?"
              },
              {
                "-id": "0-2-5",
                "#text": "but in tone and substance it was well within the general election mainstream. "
              },
              {
                "-id": "0-2-6",
                "#text": "If any Republicans were hoping that Clinton would make herself unelectable by wandering into the class warfare fever swamps, "
              },
              {
                "-id": "0-2-7",
                "span": {
                  "-class": "negative",
                  "#text": "they can forget about it"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-8",
                "#text": "The main narrative of the Sanders camp is that the economic game is rigged against ordinary people. "
              },
              {
                "-id": "0-2-9",
                "#text": "The top 1 percent controls the fundamental economic conditions. "
              },
              {
                "-id": "0-2-10",
                "#text": "Major transformation is required. "
              },
              {
                "-id": "0-2-11",
                "span": {
                  "-class": "positive",
                  "#text": "There's not much individuals can do given the structure of economic power"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-12",
                "#text": [
                  "Clinton did some Wall Street bashing in ,, but it was either ",
                  " (",
                  ") or ",
                  "). "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "meaningless, bland"
                  },
                  {
                    "-class": "negative",
                    "#text": "punish"
                  },
                  {
                    "-class": "negative",
                    "#text": "criminals"
                  },
                  {
                    "-class": "positive",
                    "#text": "broadly sensible (end the carried interest deduction"
                  }
                ]
              },
              {
                "-id": "0-2-13",
                "span": {
                  "-class": "positive",
                  "#text": "The main underlying assumption behind her speech was that individuals , rise and succeed"
                }
              },
              {
                "-id": "0-2-14",
                "#text": "if they are given the right helping hands from government.,"
              },
              {
                "-id": "0-2-15",
                "span": {
                  "-class": "positive",
                  "#text": "This speech revealed a woman who does not have her heart in class conflict"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-16",
                "span": {
                  "-class": "positive",
                  "#text": "The most passionate parts of her speech involved classic liberal efforts to give people a boost"
                },
                "#text": ": "
              },
              {
                "-id": "0-2-17",
                "#text": "early childhood education, family "
              },
              {
                "-id": "0-2-18",
                "span": {
                  "-class": "positive",
                  "#text": "and medical leave, tax credits for job training, affordable child care programs"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-19",
                "span": {
                  "-class": "positive",
                  "#text": "She carefully avoided the more radical policy ideas embraced by the left, such as a blanket tax on the rich"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-20",
                "#text": "She dodged the trade issue. "
              },
              {
                "-id": "0-2-21",
                "span": {
                  "-class": "positive",
                  "#text": "She endorsed a minimum wage hike but didn't commit, as many progressives do, to a $15an-hour rate"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-22",
                "span": {
                  "-class": "positive",
                  "#text": "This speech was more Children's Defense Fund than Thomas Piketty"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-23",
                "#text": "It was the sort of speech you give if you spend more time listening to voters, "
              },
              {
                "-id": "0-2-24",
                "#text": "especially female ones, than studying the quintiles in the income distribution charts.,"
              },
              {
                "-id": "0-2-25",
                "#text": "Stylistically, Clinton still sounds as "
              },
              {
                "-id": "0-2-26",
                "#text": "if she is talking down to her audiences. "
              },
              {
                "-id": "0-2-27",
                "span": {
                  "-class": "negative",
                  "#text": "But there was a wonky authenticity to this speech"
                },
                "#text": ", "
              },
              {
                "-id": "0-2-28",
                "#text": "which would not have been there "
              },
              {
                "-id": "0-2-29",
                "#text": "if she had tried to sound like a pitchfork marauder. "
              },
              {
                "-id": "0-2-30",
                "#text": "She has echoes of Hubert Humphrey or George McGovern in her voice, or a more liberal Michael Dukakis.,"
              },
              {
                "-id": "0-2-31",
                "#text": "She's way to the left of where her husband was and to the left of where Barack Obama was in 2008 or 2012. "
              },
              {
                "-id": "0-2-32",
                "span": {
                  "-class": "negative",
                  "#text": "But she's responded to the reality of growing inequality with a revived paleoliberalism, not with the edgier"
                },
                "#text": ", "
              },
              {
                "-id": "0-2-33",
                "span": {
                  "-class": "negative",
                  "#text": "angry economic policy you find among Bernie Sanders and the cutting-edge left"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-34",
                "span": {
                  "-class": "positive",
                  "#text": "She is best viewed, as the progressive commentator Matt Yglesias put it in ,, as a new paleoliberal"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-35",
                "#text": "This neopaleoliberalism is built less on going after Wall Street and the rich and more on a tremendous faith in government to manage the economy more intelligently than the private sector. "
              },
              {
                "-id": "0-2-36",
                "span": {
                  "-class": "positive",
                  "#text": "It's less a negative assault on the elites and more an optimistic faith in the power of planning"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-37",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The private sector is not evil or power"
                  },
                  {
                    "-class": "negative",
                    "#text": "hungry"
                  },
                  {
                    "-class": "positive",
                    "#text": "kind of dumb"
                  }
                ],
                "#text": [
                  ", just ",
                  ".,"
                ]
              },
              {
                "-id": "0-2-38",
                "span": {
                  "-class": "positive",
                  "#text": "New Democrats like her husband believed in using market mechanisms to increase economic security"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-39",
                "span": {
                  "-class": "positive",
                  "#text": "As a neopaleoliberal, Hillary Clinton used her kickoff economic address to embrace the idea that government can write rules to govern how much companies pay their workers"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-40",
                "span": {
                  "-class": "positive",
                  "#text": "Government can direct investors toward more sensible long-term investments"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-41",
                "#text": "Government can refashion the way companies distribute equity in their companies. "
              },
              {
                "-id": "0-2-42",
                "#text": "Government can determine how companies should structure and manage themselves. \""
              },
              {
                "-id": "0-2-43",
                "span": {
                  "-class": "positive",
                  "#text": "We'll ensure that no firm is too complex to manage and oversee,\"?Clinton declared"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-44",
                "span": {
                  "-class": "positive",
                  "#text": "One pictures squads of Federal Simplicity Enforcers roaming through the corridors of Midtown Manhattan telling C"
                },
                "#text": "."
              },
              {
                "-id": "0-2-45",
                "#text": "E."
              },
              {
                "-id": "0-2-46",
                "#text": "O.s when their outfits are too mind-boggling.,"
              },
              {
                "-id": "0-2-47",
                "span": {
                  "-class": "positive",
                  "#text": "In each case, in this view, government is more competent at steering companies toward their own best interests than the companies are themselves"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-48",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton's constant refrain in this speech was that these federal interventions would increase growth and productivity"
                },
                "#text": ", "
              },
              {
                "-id": "0-2-49",
                "span": {
                  "-class": "negative",
                  "#text": "not limit them in the name of fairness"
                },
                "#text": ".,"
              },
              {
                "-id": "0-2-50",
                "span": {
                  "-class": "positive",
                  "#text": "Personally I find this faith epistemologically naÃ¯ve"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-51",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Clinton seems to have no awareness that many of the programs"
                  },
                  {
                    "-class": "positive",
                    "#text": "endorsed"
                  },
                  {
                    "-class": "negative",
                    "#text": "not work"
                  }
                ],
                "#text": [
                  " she ",
                  " have been tried and did ",
                  ". "
                ]
              },
              {
                "-id": "0-2-52",
                "span": {
                  "-class": "positive",
                  "#text": "The Obama administration spent mightily on green energy jobs programs"
                }
              },
              {
                "-id": "0-2-53",
                "#text": "and they did not work to significantly increase employment. "
              },
              {
                "-id": "0-2-54",
                "span": {
                  "-class": "positive",
                  "#text": "Empowerment zones, which she endorsed"
                },
                "#text": ", "
              },
              {
                "-id": "0-2-55",
                "#text": "have mostly failed to help low-income neighborhoods. "
              },
              {
                "-id": "0-2-56",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton displayed no awareness that most federal requirements involve difficult trade-offs"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-57",
                "#text": "According to the Congressional Budget Office, raising the minimum wage to even $10.10 an hour would increase pay for millions of workers, "
              },
              {
                "-id": "0-2-58",
                "#text": "but would cost roughly 500,000 jobs.,"
              },
              {
                "-id": "0-2-59",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's unchastened faith in the power of government planning is not shared by most voters"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-60",
                "span": {
                  "-class": "negative",
                  "#text": "And she has no plausible chance"
                },
                "#text": " of getting any of this through a divided Congress. "
              },
              {
                "-id": "0-2-61",
                "span": {
                  "-class": "negative",
                  "#text": "But this agenda does pull off a neat trick"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-62",
                "span": {
                  "-class": "positive",
                  "#text": "It will excite the progressive base without automatically alienating the rest of the country"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-63",
                "span": {
                  "-class": "positive",
                  "#text": "Substantively she's offered at least a coherent response to today's economic conditions"
                },
                "#text": ". "
              },
              {
                "-id": "0-2-64",
                "#text": "Politically, she's cleared the first hurdle in this campaign."
              }
            ]
          },
          {
            "a": {
              "-id": "0-3-0",
              "#text": "1436857200321"
            }
          },
          {
            "a": [
              {
                "-id": "0-4-0",
                "span": {
                  "-class": "positive",
                  "#text": "Hillary Clinton gave her first big , on Monday, and progressives were by and large gratified"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-1",
                "#text": "For Mrs. Clinton's core message was that the federal government can and should use its influence to push for higher wages.,"
              },
              {
                "-id": "0-4-2",
                "#text": "Conservatives, however \"?at least those who could stop chanting \""
              },
              {
                "-id": "0-4-3",
                "#text": "Benghazi! "
              },
              {
                "-id": "0-4-4",
                "#text": "Benghazi! "
              },
              {
                "-id": "0-4-5",
                "#text": "Benghazi!\"?"
              },
              {
                "-id": "0-4-6",
                "#text": "long enough to pay attention \"?"
              },
              {
                "-id": "0-4-7",
                "span": {
                  "-class": "negative",
                  "#text": "seemed bemused"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-8",
                "#text": "They believe that Ronald Reagan proved that government is the problem, not the solution. "
              },
              {
                "-id": "0-4-9",
                "span": {
                  "-class": "positive",
                  "#text": "So wasn't Mrs. Clinton just reviving defunct"
                },
                "#text": " \""
              },
              {
                "-id": "0-4-10",
                "#text": "paleoliberalism\"? "
              },
              {
                "-id": "0-4-11",
                "#text": "And don't we know "
              },
              {
                "-id": "0-4-12",
                "#text": "that government intervention in markets produces terrible side effects?,"
              },
              {
                "-id": "0-4-13",
                "#text": "No, she wasn't, and no, "
              },
              {
                "-id": "0-4-14",
                "#text": "we don't. "
              },
              {
                "-id": "0-4-15",
                "#text": "In fact, Mrs. Clinton's speech reflected major changes, deeply grounded in evidence, in our understanding of what determines wages. "
              },
              {
                "-id": "0-4-16",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "And a key implication"
                  },
                  {
                    "-class": "positive",
                    "#text": "new understanding is that public policy can do a lot to help workers"
                  },
                  {
                    "-class": "positive",
                    "#text": "without bringing down the wrath of the invisible hand"
                  }
                ],
                "#text": [
                  " of that ",
                  ".,"
                ]
              },
              {
                "-id": "0-4-17",
                "span": {
                  "-class": "positive",
                  "#text": "Many economists used to think of the labor market as being pretty much like the market for anything else"
                },
                "#text": ", "
              },
              {
                "-id": "0-4-18",
                "#text": "with the prices of different kinds of labor \"?"
              },
              {
                "-id": "0-4-19",
                "#text": "that is, wage rates \"?"
              },
              {
                "-id": "0-4-20",
                "#text": "fully determined by supply and demand. "
              },
              {
                "-id": "0-4-21",
                "#text": "So if wages for many workers have stagnated or declined, "
              },
              {
                "-id": "0-4-22",
                "span": {
                  "-class": "negative",
                  "#text": "it must be because demand for their services is falling"
                },
                "#text": ".,"
              },
              {
                "-id": "0-4-23",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "In particular, the conventional wisdom attributed rising inequality to technological change"
                  },
                  {
                    "-class": "positive",
                    "#text": "highly educated workers while devaluing blue-collar work"
                  }
                ],
                "#text": [
                  ", which was raising the demand for ",
                  ". "
                ]
              },
              {
                "-id": "0-4-24",
                "#text": "And there was nothing much policy could do to change the trend, other than aiding low-wage workers via subsidies like the earned-income tax credit.,"
              },
              {
                "-id": "0-4-25",
                "#text": "You still see commentators who haven't kept up invoking this story as if it were obviously true. "
              },
              {
                "-id": "0-4-26",
                "#text": "But the case for \",\"?"
              },
              {
                "-id": "0-4-27",
                "span": {
                  "-class": "negative",
                  "#text": "as the main driver of wage stagnation has largely fallen apart"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-28",
                "span": {
                  "-class": "negative",
                  "#text": "Most notably, high levels of education have offered no guarantee of rising incomes"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-4-29",
                "#text": "for example, ,, adjusted for inflation, have been flat for 15 years.,"
              },
              {
                "-id": "0-4-30",
                "span": {
                  "-class": "positive",
                  "#text": "Meanwhile, our understanding of wage determination has been transformed by an intellectual revolution"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-4-31",
                "#text": "that's not too strong a word \"?"
              },
              {
                "-id": "0-4-32",
                "span": {
                  "-class": "positive",
                  "#text": "brought on by a series of remarkable studies of what happens when governments change the minimum wage"
                },
                "#text": ".,"
              },
              {
                "-id": "0-4-33",
                "#text": "More than two decades ago the economists David Card and Alan Krueger realized that when an individual state raises its minimum wage rate, "
              },
              {
                "-id": "0-4-34",
                "#text": "it in effect performs an experiment on the labor market. "
              },
              {
                "-id": "0-4-35",
                "span": {
                  "-class": "positive",
                  "#text": "Better still, it's an experiment that offers a natural control group"
                },
                "#text": ": "
              },
              {
                "-id": "0-4-36",
                "#text": "neighboring states that don't raise their minimum wages. "
              },
              {
                "-id": "0-4-37",
                "span": {
                  "-class": "positive",
                  "#text": "Mr. Card and Mr. Krueger applied their insight by looking at what happened to the fast-food sector"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-4-38",
                "#text": "which is where the effects of the minimum wage should be most pronounced \"?"
              },
              {
                "-id": "0-4-39",
                "#text": "after New Jersey hiked its minimum wage "
              },
              {
                "-id": "0-4-40",
                "#text": "but Pennsylvania did not.,"
              },
              {
                "-id": "0-4-41",
                "#text": "Until the ,, most economists, myself included, assumed that raising the minimum wage would have a clear negative effect on employment. "
              },
              {
                "-id": "0-4-42",
                "#text": "But they found, "
              },
              {
                "-id": "0-4-43",
                "#text": "if anything, a positive effect. "
              },
              {
                "-id": "0-4-44",
                "#text": "Their result has since , using data from many episodes. "
              },
              {
                "-id": "0-4-45",
                "#text": [
                  "There's just no evidence that ",
                  ", at least when the starting point is as low as it is in modern America.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "raising the minimum wage costs jobs"
                }
              },
              {
                "-id": "0-4-46",
                "#text": "How can this be? "
              },
              {
                "-id": "0-4-47",
                "#text": "There are several answers, but the most important is probably that the market for labor isn't like the market for, "
              },
              {
                "-id": "0-4-48",
                "#text": "say, wheat, because workers are people. "
              },
              {
                "-id": "0-4-49",
                "#text": "And "
              },
              {
                "-id": "0-4-50",
                "#text": "because they're people, "
              },
              {
                "-id": "0-4-51",
                "span": {
                  "-class": "positive",
                  "#text": "there are important benefits"
                },
                "#text": ", even to the employer, from paying them more: "
              },
              {
                "-id": "0-4-52",
                "span": {
                  "-class": "positive",
                  "#text": "better morale, lower turnover, increased productivity"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-53",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "These benefits largely offset the direct effect"
                  },
                  {
                    "-class": "negative",
                    "#text": "higher labor costs"
                  }
                ],
                "#text": [
                  " of ",
                  ", so that raising the minimum wage needn't cost jobs after all.,"
                ]
              },
              {
                "-id": "0-4-54",
                "span": {
                  "-class": "positive",
                  "#text": "The direct takeaway from this intellectual revolution is, of course"
                },
                "#text": ", "
              },
              {
                "-id": "0-4-55",
                "#text": "that we should raise minimum wages. "
              },
              {
                "-id": "0-4-56",
                "span": {
                  "-class": "negative",
                  "#text": "But there are broader implications, too"
                },
                "#text": ": "
              },
              {
                "-id": "0-4-57",
                "#text": "Once you take what we've learned from minimum-wage studies seriously, "
              },
              {
                "-id": "0-4-58",
                "#text": "you realize that they're not relevant just to the lowest-paid workers.,"
              },
              {
                "-id": "0-4-59",
                "#text": "For employers always face a trade-off between low-wage and higher-wage strategies \"?"
              },
              {
                "-id": "0-4-60",
                "span": {
                  "-class": "positive",
                  "#text": "between, say, the traditional Walmart model of paying as little as possible and accepting high turnover and low morale"
                },
                "#text": ", "
              },
              {
                "-id": "0-4-61",
                "span": {
                  "-class": "positive",
                  "#text": "and the Costco model of higher pay and benefits leading to a more stable work force"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-62",
                "#text": "And there's every reason to believe that public policy can, in a variety of ways \"?"
              },
              {
                "-id": "0-4-63",
                "#text": [
                  "including making it ",
                  " for workers to organize \"?"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "easier"
                }
              },
              {
                "-id": "0-4-64",
                "span": {
                  "-class": "positive",
                  "#text": "encourage more firms to choose the good-wage strategy"
                },
                "#text": ".,"
              },
              {
                "-id": "0-4-65",
                "span": {
                  "-class": "negative",
                  "#text": "So there was a lot more behind Hillary's speech than I suspect most commentators realized"
                },
                "#text": ". "
              },
              {
                "-id": "0-4-66",
                "#text": "And for those trying to play gotcha by pointing out that some of what she said differed from ideas that prevailed when her husband was president, "
              },
              {
                "-id": "0-4-67",
                "#text": "well, many liberals have changed their views in response to new evidence. "
              },
              {
                "-id": "0-4-68",
                "span": {
                  "-class": "positive",
                  "#text": "It's an interesting experience"
                },
                "#text": "; "
              },
              {
                "-id": "0-4-69",
                "#text": "conservatives should try it some time."
              }
            ]
          },
          {
            "a": {
              "-id": "0-5-0",
              "#text": "1437116400481"
            }
          },
          {
            "a": [
              {
                "-id": "0-6-0",
                "#text": "WASHINGTON \"?"
              },
              {
                "-id": "0-6-1",
                "span": {
                  "-class": "positive",
                  "#text": "Two inspectors general have asked the Justice Department to open"
                },
                "#text": " an investigation into whether sensitive government information was mishandled in connection with the personal email account , "
              },
              {
                "-id": "0-6-2",
                "#text": "used as secretary of state, senior government officials said Thursday.,"
              },
              {
                "-id": "0-6-3",
                "#text": [
                  "The request follows an assessment in a June 29 memo by the inspectors general for the State Department and the ",
                  " that Mrs. Clinton's private account contained \""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "intelligence agencies"
                }
              },
              {
                "-id": "0-6-4",
                "#text": "hundreds of potentially classified emails.\"?"
              },
              {
                "-id": "0-6-5",
                "#text": "The memo was written to Patrick F. "
              },
              {
                "-id": "0-6-6",
                "#text": "Kennedy, the under secretary of state for management.,"
              },
              {
                "-id": "0-6-7",
                "span": {
                  "-class": "negative",
                  "#text": "It is not clear if any of the information in the emails was marked as classified by the State Department when Mrs. Clinton sent or received them"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-8",
                "#text": "But since her use of a private email account for official State Department business was revealed in March, "
              },
              {
                "-id": "0-6-9",
                "#text": "she has repeatedly said that she had no classified information on the account.,"
              },
              {
                "-id": "0-6-10",
                "span": {
                  "-class": "positive",
                  "#text": "The initial revelation has been an issue in the early stages of her presidential campaign"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-11",
                "span": {
                  "-class": "positive",
                  "#text": "The Justice Department"
                },
                "#text": " has not decided if it will open an investigation, senior officials said. "
              },
              {
                "-id": "0-6-12",
                "#text": "A spokesman for Mrs. Clinton's campaign released a statement on Twitter on Friday morning. \""
              },
              {
                "-id": "0-6-13",
                "#text": "Any released emails deemed classified by the administration have been done so after the fact, "
              },
              {
                "-id": "0-6-14",
                "#text": "and not at the time they were transmitted,\"?"
              },
              {
                "-id": "0-6-15",
                "#text": "it read.,"
              },
              {
                "-id": "0-6-16",
                "#text": "At issue are thousands of pages of State Department emails from Mrs. Clinton's private account. "
              },
              {
                "-id": "0-6-17",
                "#text": "Mrs. Clinton has said she used the account "
              },
              {
                "-id": "0-6-18",
                "span": {
                  "-class": "positive",
                  "#text": "because it was more convenient, but it also shielded her correspondence from congressional and Freedom of Information Act requests"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-19",
                "span": {
                  "-class": "negative",
                  "#text": "She faced sharp criticism after her use of the account became public"
                },
                "#text": ", and subsequently said she would ask the State Department to release her emails.,"
              },
              {
                "-id": "0-6-20",
                "#text": "The department is now reviewing some 55,000 pages of emails. "
              },
              {
                "-id": "0-6-21",
                "#text": "A first batch of 3,000 pages was made public on June 30.,"
              },
              {
                "-id": "0-6-22",
                "#text": "In the course of the email review, State Department officials determined that some information in the messages should be retroactively classified. "
              },
              {
                "-id": "0-6-23",
                "#text": "In the 3,000 pages that were released, for example, portions of two dozen emails were redacted "
              },
              {
                "-id": "0-6-24",
                "#text": "because they were upgraded to \""
              },
              {
                "-id": "0-6-25",
                "#text": "classified status.\"?"
              },
              {
                "-id": "0-6-26",
                "#text": "But none of those were marked as classified at the time Mrs. Clinton handled them.,"
              },
              {
                "-id": "0-6-27",
                "#text": "In a second memo to Mr. Kennedy, sent on July 17, the inspectors general said that at least one email made public by the State Department contained classified information. "
              },
              {
                "-id": "0-6-28",
                "#text": "The inspectors general did not identify the email or reveal its substance.,"
              },
              {
                "-id": "0-6-29",
                "#text": "The memos were provided to The New York Times by a senior government official.,"
              },
              {
                "-id": "0-6-30",
                "span": {
                  "-class": "negative",
                  "#text": "The inspectors general also criticized the State Department for its handling of sensitive information"
                },
                "#text": ", particularly its reliance on retired senior Foreign Service officers to decide if information should be classified, "
              },
              {
                "-id": "0-6-31",
                "span": {
                  "-class": "negative",
                  "#text": "and for not consulting with the intelligence agencies about its determinations"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-32",
                "#text": "In March, Mrs. Clinton insisted that she was careful in her handling of information on her private account. \""
              },
              {
                "-id": "0-6-33",
                "#text": "I did not email any classified material to anyone on my email,\"?"
              },
              {
                "-id": "0-6-34",
                "#text": "she said. \""
              },
              {
                "-id": "0-6-35",
                "#text": "There is no classified material. "
              },
              {
                "-id": "0-6-36",
                "span": {
                  "-class": "positive",
                  "#text": "So I'm certainly well aware of the classification requirements and did not send classified material"
                },
                "#text": ".\""
              },
              {
                "-id": "0-6-37",
                "#text": "In May, the F."
              },
              {
                "-id": "0-6-38",
                "#text": "B."
              },
              {
                "-id": "0-6-39",
                "#text": "I. "
              },
              {
                "-id": "0-6-40",
                "#text": [
                  "asked the State Department to classify a section of Mrs. Clinton's emails that related to suspects who may have been arrested in connection with the 2012 ",
                  ", "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "attacks in Benghazi"
                }
              },
              {
                "-id": "0-6-41",
                "#text": "Libya. "
              },
              {
                "-id": "0-6-42",
                "span": {
                  "-class": "negative",
                  "#text": "The information was not classified at the time Mrs. Clinton received it"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-43",
                "#text": [
                  "The ",
                  " about how Mrs. Clinton handled her email have been an embarrassment for the State Department, "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "revelations"
                }
              },
              {
                "-id": "0-6-44",
                "#text": "which has been repeatedly criticized over its handling of documents related to Mrs. Clinton and her advisers.,"
              },
              {
                "-id": "0-6-45",
                "#text": "On Monday, a federal judge sharply questioned State Department lawyers at a hearing in Washington about why they had not responded to Freedom of Information Act requests from The Associated Press, "
              },
              {
                "-id": "0-6-46",
                "#text": "some of which were four years old.,\""
              },
              {
                "-id": "0-6-47",
                "#text": "I want to find out what's been going on over there \"?"
              },
              {
                "-id": "0-6-48",
                "#text": "I should say, "
              },
              {
                "-id": "0-6-49",
                "#text": "what's not been going on over there,\"?said Judge Richard J. "
              },
              {
                "-id": "0-6-50",
                "span": {
                  "-class": "positive",
                  "#text": "Leon of United States District Court, according to a transcript obtained by Politico"
                },
                "#text": ". "
              },
              {
                "-id": "0-6-51",
                "#text": "The judge said that \"for reasons known only to itself,\"?the State Department \""
              },
              {
                "-id": "0-6-52",
                "#text": "has been, "
              },
              {
                "-id": "0-6-53",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "to say the least"
                  },
                  {
                    "-class": "negative",
                    "#text": "recalcitrant in responding"
                  }
                ],
                "#text": [
                  ", ",
                  ".\""
                ]
              },
              {
                "-id": "0-6-54",
                "#text": [
                  "Two days later, lawmakers on the Republican-led House committee investigating the ",
                  " to summon Secretary of State John Kerry's chief of staff to Capitol Hill to answer questions about why the department has not produced documents that the panel subpoenaed. "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "Benghazi attacks said they planned"
                }
              },
              {
                "-id": "0-6-55",
                "#text": "That hearing is set for next Wednesday.,\""
              },
              {
                "-id": "0-6-56",
                "span": {
                  "-class": "negative",
                  "#text": "The State Department has used every excuse to avoid complying with fundamental requests for documents"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-6-57",
                "#text": "said the chairman of the House committee, Representative Trey Gowdy, Republican of South Carolina.,"
              },
              {
                "-id": "0-6-58",
                "#text": "Mr. "
              },
              {
                "-id": "0-6-59",
                "#text": "Gowdy said that while the committee has used an array of measures to try to get the State Department to hand over documents, "
              },
              {
                "-id": "0-6-60",
                "#text": "the results have been the same. \""
              },
              {
                "-id": "0-6-61",
                "span": {
                  "-class": "negative",
                  "#text": "Our committee is not in possession of all documents needed to do the work assigned to us"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-6-62",
                "#text": "he said.,"
              },
              {
                "-id": "0-6-63",
                "#text": "The State Department has sought to delay the hearing, citing continuing efforts to brief members of Congress on the details of the nuclear accord with Iran. "
              },
              {
                "-id": "0-6-64",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "It is not clear"
                  },
                  {
                    "-class": "positive",
                    "#text": "State Department has struggled with the classification issues and document production"
                  }
                ],
                "#text": [
                  " why the ",
                  ". "
                ]
              },
              {
                "-id": "0-6-65",
                "span": {
                  "-class": "positive",
                  "#text": "Republicans have said the department is trying to use those processes to protect Mrs. Clinton"
                },
                "#text": ".,"
              },
              {
                "-id": "0-6-66",
                "span": {
                  "-class": "negative",
                  "#text": "State Department officials say they simply do not have the resources or infrastructure"
                },
                "#text": " to properly comply with all the requests. "
              },
              {
                "-id": "0-6-67",
                "#text": "Since March, requests for documents have significantly increased.,"
              },
              {
                "-id": "0-6-68",
                "span": {
                  "-class": "negative",
                  "#text": "Some State Department officials said they believe that many senior officials did not initially take the House committee seriously"
                },
                "#text": ", "
              },
              {
                "-id": "0-6-69",
                "#text": "which slowed document production and created an appearance of stonewalling.,"
              },
              {
                "-id": "0-6-70",
                "#text": [
                  "State Department officials also said that Mr. Kerry is concerned about the ",
                  " the ",
                  " and has urged his deputies to comply with the requests quickly."
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "toll"
                  },
                  {
                    "-class": "negative",
                    "#text": "criticism has had on the department"
                  }
                ]
              }
            ]
          },
          {
            "a": {
              "-id": "0-7-0",
              "#text": "1437634800106"
            }
          },
          {
            "a": [
              {
                "-id": "0-8-0",
                "#text": "Could President , restore the American middle class?,"
              },
              {
                "-id": "0-8-1",
                "span": {
                  "-class": "negative",
                  "#text": "On Monday,,, Mrs. Clinton offered an informed diagnosis of the troubles afflicting"
                },
                "#text": " \""
              },
              {
                "-id": "0-8-2",
                "#text": "everyday Americans\"?"
              },
              {
                "-id": "0-8-3",
                "#text": "struggling to get ahead.,"
              },
              {
                "-id": "0-8-4",
                "#text": "Her prescriptions to help workers share more equitably in the fruits of economic growth are grounded in top-notch economic research. "
              },
              {
                "-id": "0-8-5",
                "#text": "Yet for all the scholarship, the economic agenda outlined by Mrs. Clinton, the top Democratic contender for the presidency, "
              },
              {
                "-id": "0-8-6",
                "span": {
                  "-class": "negative",
                  "#text": "still fails to measure up to the nature of the challenge"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-8-7",
                "span": {
                  "-class": "positive",
                  "#text": "Previous generations of Americans built the greatest economy and strongest middle class the world has ever known on the promise of a basic bargain"
                },
                "#text": ": "
              },
              {
                "-id": "0-8-8",
                "#text": "If you work hard and do your part, "
              },
              {
                "-id": "0-8-9",
                "span": {
                  "-class": "positive",
                  "#text": "you should be able to get ahead"
                },
                "#text": ",\"?Mrs. "
              },
              {
                "-id": "0-8-10",
                "#text": "Clinton declared.,"
              },
              {
                "-id": "0-8-11",
                "#text": "The task, she continued, "
              },
              {
                "-id": "0-8-12",
                "#text": "is to take that promise \"?"
              },
              {
                "-id": "0-8-13",
                "span": {
                  "-class": "negative",
                  "#text": "eroded by corporate consolidation and technological change, and also battered"
                },
                "#text": " by hundreds of millions of workers from China entering the global economy to compete with American labor \"?"
              },
              {
                "-id": "0-8-14",
                "#text": "and \""
              },
              {
                "-id": "0-8-15",
                "#text": "make it strong again.\""
              },
              {
                "-id": "0-8-16",
                "span": {
                  "-class": "negative",
                  "#text": "Problem"
                },
                "#text": " is, the role of the United States in the world economy looks nothing like it did for bygone generations. "
              },
              {
                "-id": "0-8-17",
                "span": {
                  "-class": "negative",
                  "#text": "And the laws, norms and institutions that supported the middle were crushed in the four-decade-long effort ostensibly intended"
                },
                "#text": " to help American business compete.,"
              },
              {
                "-id": "0-8-18",
                "span": {
                  "-class": "negative",
                  "#text": "Today, the labor market has lost much of its power to deliver a living wage"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-19",
                "span": {
                  "-class": "positive",
                  "#text": "More than 30 percent of men in their prime are either unemployed or earn less than what's needed to keep a family of four out of poverty"
                },
                "#text": ", "
              },
              {
                "-id": "0-8-20",
                "#text": "according to estimates by Lawrence Katz of Harvard. "
              },
              {
                "-id": "0-8-21",
                "#text": "That's double the share of three decades ago.,"
              },
              {
                "-id": "0-8-22",
                "#text": "The Economic Policy Institute estimates that wages in the middle of the distribution have increased by all of 6 percent since 1979.,"
              },
              {
                "-id": "0-8-23",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Stagnant wages have failed to"
                  },
                  {
                    "-class": "positive",
                    "#text": "continuing productivity gains"
                  },
                  {
                    "-class": "negative",
                    "#text": "breaking a stable pattern that linked"
                  },
                  {
                    "-class": "positive",
                    "#text": "gains in output per worker and wages throughout much of the 20th century"
                  }
                ],
                "#text": [
                  " keep up with ",
                  ", ",
                  ". "
                ]
              },
              {
                "-id": "0-8-24",
                "span": {
                  "-class": "positive",
                  "#text": "And they are contributing to a vast, expanding income gap, the most extreme among advanced nations"
                },
                "#text": ".,"
              },
              {
                "-id": "0-8-25",
                "span": {
                  "-class": "positive",
                  "#text": "Workers in other rich countries are"
                },
                "#text": " ,. \""
              },
              {
                "-id": "0-8-26",
                "#text": "We know "
              },
              {
                "-id": "0-8-27",
                "#text": "that middle-skilled jobs were disappearing due to automation in the United States and Europe,\"?said David Dorn of the University of Zurich. \""
              },
              {
                "-id": "0-8-28",
                "#text": "Now we are seeing a similar pattern in Japan and South Korea.\""
              },
              {
                "-id": "0-8-29",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Even Germany, an industrial powerhouse that has maintained robust employment"
                  },
                  {
                    "-class": "negative",
                    "#text": "Europe's economic crisis"
                  }
                ],
                "#text": [
                  " during ",
                  ", "
                ]
              },
              {
                "-id": "0-8-30",
                "#text": "has experienced ,. Last year, for the first time, it introduced a minimum wage, "
              },
              {
                "-id": "0-8-31",
                "span": {
                  "-class": "positive",
                  "#text": "acknowledging that its once formidable trade unions could not protect workers at the bottom"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-8-32",
                "span": {
                  "-class": "negative",
                  "#text": "There's a general perception that the global economy is moving in ways that disadvantage workers"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-8-33",
                "span": {
                  "-class": "positive",
                  "#text": "said Paul Swaim, a senior labor economist at the Organization for Economic Cooperation and Development"
                },
                "#text": ", "
              },
              {
                "-id": "0-8-34",
                "span": {
                  "-class": "positive",
                  "#text": "the policy and research arm of the world's advanced industrial nations"
                },
                "#text": ". \""
              },
              {
                "-id": "0-8-35",
                "span": {
                  "-class": "negative",
                  "#text": "Even the Scandinavian countries have seen sharp increases in wage inequality"
                },
                "#text": ".\""
              },
              {
                "-id": "0-8-36",
                "span": {
                  "-class": "positive",
                  "#text": "This has set off a scramble for reforms around the world"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-37",
                "#text": "In 2002, 12 countries in the O."
              },
              {
                "-id": "0-8-38",
                "#text": "E."
              },
              {
                "-id": "0-8-39",
                "#text": "C."
              },
              {
                "-id": "0-8-40",
                "#text": "D. "
              },
              {
                "-id": "0-8-41",
                "span": {
                  "-class": "positive",
                  "#text": "offered in-work benefits"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-8-42",
                "span": {
                  "-class": "positive",
                  "#text": "programs like the earned-income tax credit in the United States"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-8-43",
                "span": {
                  "-class": "positive",
                  "#text": "aimed to lift the incomes of less-skilled workers without sapping their incentive to work"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-44",
                "#text": "By 2010, the number had increased to 18.,"
              },
              {
                "-id": "0-8-45",
                "#text": "Even Singapore, which imports millions of workers from the rest of Asia to perform low-skill jobs, "
              },
              {
                "-id": "0-8-46",
                "#text": [
                  "has introduced a wage subsidy to help mostly older Singaporean workers ",
                  " to keep up.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "whose wages have failed"
                }
              },
              {
                "-id": "0-8-47",
                "#text": "Mrs. "
              },
              {
                "-id": "0-8-48",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's collection of proposals is mostly sensible"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-49",
                "#text": "The older ones \"?"
              },
              {
                "-id": "0-8-50",
                "span": {
                  "-class": "positive",
                  "#text": "raising the minimum wage, guaranteeing child care to encourage women into the labor force, paying for early childhood education"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-8-51",
                "span": {
                  "-class": "positive",
                  "#text": "have a solid track record of research on their side"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-52",
                "span": {
                  "-class": "positive",
                  "#text": "The newer propositions, like encouraging profit-sharing, also push in the right direction"
                },
                "#text": ".,"
              },
              {
                "-id": "0-8-53",
                "#text": "But here's the rub: "
              },
              {
                "-id": "0-8-54",
                "#text": "This isn't enough.,"
              },
              {
                "-id": "0-8-55",
                "#text": [
                  "It is critical to remember that, for all ",
                  ", the ",
                  " in ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "its riches"
                  },
                  {
                    "-class": "negative",
                    "#text": "United States lags behind the community of advanced nations"
                  },
                  {
                    "-class": "negative",
                    "#text": "building a society that could cope with the harsh new global economy"
                  }
                ]
              },
              {
                "-id": "0-8-56",
                "span": {
                  "-class": "negative",
                  "#text": "Not only does the American economy suffer from one of the ,, according to the O"
                },
                "#text": "."
              },
              {
                "-id": "0-8-57",
                "#text": "E."
              },
              {
                "-id": "0-8-58",
                "#text": "C."
              },
              {
                "-id": "0-8-59",
                "#text": "D. "
              },
              {
                "-id": "0-8-60",
                "span": {
                  "-class": "negative",
                  "#text": "The American political system has not done enough to build a social insurance apparatus to help everyday workers and their families sustain prosperous lives"
                },
                "#text": ".,"
              },
              {
                "-id": "0-8-61",
                "span": {
                  "-class": "negative",
                  "#text": "The consequences of these shortcomings ,. They underscore the real nature of America's problem"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-62",
                "span": {
                  "-class": "negative",
                  "#text": "It is not a lack of ideas"
                },
                "#text": " about how to improve the lives of workers. "
              },
              {
                "-id": "0-8-63",
                "span": {
                  "-class": "positive",
                  "#text": "It is the lack of political"
                },
                "#text": " will to put them in practice.,"
              },
              {
                "-id": "0-8-64",
                "span": {
                  "-class": "positive",
                  "#text": "Consider the Affordable Care Act"
                },
                "#text": ", the biggest expansion of the nation's social safety net since the 1960s. "
              },
              {
                "-id": "0-8-65",
                "#text": "At best, it matched what governments in the rest of the industrialized world have been offering their citizens for decades. "
              },
              {
                "-id": "0-8-66",
                "#text": "But not a single Republican lawmaker supported the effort.,"
              },
              {
                "-id": "0-8-67",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Judging by the visceral political warfare against universal health insurance"
                  },
                  {
                    "-class": "positive",
                    "#text": "any strategy to lift the prospects of the American middle class looks bound to"
                  },
                  {
                    "-class": "negative",
                    "#text": "crash into an ideological wall"
                  }
                ],
                "#text": [
                  ", ",
                  ".,"
                ]
              },
              {
                "-id": "0-8-68",
                "span": {
                  "-class": "positive",
                  "#text": "Success won't hinge on a list of proposals"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-69",
                "span": {
                  "-class": "positive",
                  "#text": "It will require reshaping entrenched political positions, and convincing solid majorities of voters of the vital role of government in their lives"
                },
                "#text": ".,"
              },
              {
                "-id": "0-8-70",
                "#text": "And it will require something that America hasn't experienced since President Bill Clinton was in office: "
              },
              {
                "-id": "0-8-71",
                "#text": "a full-employment economy. "
              },
              {
                "-id": "0-8-72",
                "span": {
                  "-class": "positive",
                  "#text": "With help from the Federal Reserve"
                },
                "#text": ", the most important thing that Washington needs to do is keep the nation's job machine humming.,"
              },
              {
                "-id": "0-8-73",
                "#text": [
                  "There is something a future President Clinton could do to ",
                  " that ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "encourage"
                  },
                  {
                    "-class": "positive",
                    "#text": "accomplishment"
                  }
                ]
              },
              {
                "-id": "0-8-74",
                "#text": "In her speech, Mrs. Clinton noted how \"many companies have prospered by improving wages and training their workers that then yield higher productivity, "
              },
              {
                "-id": "0-8-75",
                "span": {
                  "-class": "positive",
                  "#text": "better service and larger profits"
                },
                "#text": ".\""
              },
              {
                "-id": "0-8-76",
                "#text": "She was speaking from the research of Zeynep Ton, from the M.I.T. Sloan School of Management. "
              },
              {
                "-id": "0-8-77",
                "span": {
                  "-class": "positive",
                  "#text": "Jobs in the economy's largest, fastest growing occupations, in retail sales, food preparation and the like"
                },
                "#text": ", "
              },
              {
                "-id": "0-8-78",
                "span": {
                  "-class": "negative",
                  "#text": "are awful"
                },
                "#text": ", "
              },
              {
                "-id": "0-8-79",
                "#text": "she said, because \"companies have created strategies that use people as interchangeable parts.\""
              },
              {
                "-id": "0-8-80",
                "#text": "It doesn't have to be so. "
              },
              {
                "-id": "0-8-81",
                "#text": "Professor Ton has identified companies, like the convenience store chain QuikTrip, "
              },
              {
                "-id": "0-8-82",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "that train and motivate their lowliest employees"
                  },
                  {
                    "-class": "positive",
                    "#text": "to improve service and hold down costs"
                  }
                ],
                "#text": ". "
              },
              {
                "-id": "0-8-83",
                "#text": "These companies pay their workers more. "
              },
              {
                "-id": "0-8-84",
                "span": {
                  "-class": "positive",
                  "#text": "Still, they record higher profits and labor productivity than their rivals, more sales per square foot and faster inventory turnover"
                },
                "#text": ".,"
              },
              {
                "-id": "0-8-85",
                "#text": "Why aren't most companies this way? "
              },
              {
                "-id": "0-8-86",
                "span": {
                  "-class": "positive",
                  "#text": "Perhaps because labor costs are easy to measure, while the long-term benefits of investing in training a work force that can provide better service are not"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-87",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Moreover, corporate executives focused on enhancing their"
                  },
                  {
                    "-class": "negative",
                    "#text": "own bonus through short-term measures have scant"
                  },
                  {
                    "-class": "positive",
                    "#text": "incentive to invest in developing talent"
                  }
                ],
                "#text": ".,"
              },
              {
                "-id": "0-8-88",
                "span": {
                  "-class": "positive",
                  "#text": "A future Clinton administration might help change"
                },
                "#text": " the norms of corporate governance to foster the kind of labor relations that everyday workers have not experienced in decades.,"
              },
              {
                "-id": "0-8-89",
                "span": {
                  "-class": "positive",
                  "#text": "For this she would have an extremely powerful force on her side"
                },
                "#text": ": "
              },
              {
                "-id": "0-8-90",
                "#text": "demography.,\""
              },
              {
                "-id": "0-8-91",
                "#text": "The labor force is already shrinking,\"?said Alan Krueger, a Princeton economist who served as chief economic adviser to President Obama from late 2011 to the summer of 2013. \""
              },
              {
                "-id": "0-8-92",
                "span": {
                  "-class": "negative",
                  "#text": "As it gets harder to hire"
                },
                "#text": ", "
              },
              {
                "-id": "0-8-93",
                "#text": "companies will come around to recognize that investments in their work force are in their long-term interest.\""
              },
              {
                "-id": "0-8-94",
                "#text": "Relying on corporate incentives to change the economics of the middle class might appear irretrievably naÃ¯ve. "
              },
              {
                "-id": "0-8-95",
                "span": {
                  "-class": "positive",
                  "#text": "But it offers candidate Clinton perhaps her best shot"
                },
                "#text": ". "
              },
              {
                "-id": "0-8-96",
                "#text": [
                  "Otherwise she will have to build a strategy for all-out ",
                  "."
                ],
                "span": {
                  "-class": "negative",
                  "#text": "political war"
                }
              }
            ]
          },
          {
            "a": {
              "-id": "0-9-0",
              "#text": "1436857200486"
            }
          },
          {
            "a": [
              {
                "-id": "0-10-0",
                "span": {
                  "-class": "positive",
                  "#text": "In the most comprehensive policy speech of her presidential campaign"
                },
                "#text": ", , on Monday presented her vision of a \""
              },
              {
                "-id": "0-10-1",
                "span": {
                  "-class": "positive",
                  "#text": "growth and fairness economy,\"?an economic agenda intended to lift middle-class wages, expand social services"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-2",
                "#text": [
                  "and increase taxes on the wealthiest Americans to ",
                  " and ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "combat a widening gap between rich"
                  },
                  {
                    "-class": "negative",
                    "#text": "poor"
                  }
                ]
              },
              {
                "-id": "0-10-3",
                "#text": "Mrs. "
              },
              {
                "-id": "0-10-4",
                "#text": "Clinton said \""
              },
              {
                "-id": "0-10-5",
                "span": {
                  "-class": "negative",
                  "#text": "the defining economic challenge of our time"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-10-6",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "is raising incomes for the vast majority of Americans"
                  },
                  {
                    "-class": "negative",
                    "#text": "virtually stagnant for 15 years as the costs of housing"
                  }
                ],
                "#text": [
                  " whose wages have remained ",
                  ", "
                ]
              },
              {
                "-id": "0-10-7",
                "#text": "college, child care and health care have soared.,\""
              },
              {
                "-id": "0-10-8",
                "span": {
                  "-class": "positive",
                  "#text": "We must raise incomes for hard-working Americans so they can afford a middle-class life,\"?Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-9",
                "#text": "Clinton said in a speech at the liberal New School in Greenwich Village in New York. \""
              },
              {
                "-id": "0-10-10",
                "#text": "That will be my mission from the first day I'm president to the last.\""
              },
              {
                "-id": "0-10-11",
                "span": {
                  "-class": "negative",
                  "#text": "The widespread feeling that the economic recovery has not benefited large parts of the population has helped frame the 2016 presidential race"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-12",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "But devising an agenda that addresses income inequality"
                  },
                  {
                    "-class": "negative",
                    "#text": "without vilifying the wealthy has been a central challenge of Mrs. Clinton's early candidacy"
                  }
                ],
                "#text": ", "
              },
              {
                "-id": "0-10-13",
                "span": {
                  "-class": "negative",
                  "#text": "and for weeks she pored over policy briefings and academic papers and fielded advice from 200 policy experts who often offered divergent opinions"
                },
                "#text": ".,"
              },
              {
                "-id": "0-10-14",
                "#text": "Mrs. "
              },
              {
                "-id": "0-10-15",
                "#text": "Clinton did not sign off on a final version of her speech until just before she took the stage, "
              },
              {
                "-id": "0-10-16",
                "#text": "according to advisers involved in the process who would discuss private conversations only unless they were not named. "
              },
              {
                "-id": "0-10-17",
                "#text": [
                  "At the last minute, Mrs. Clinton decided to ",
                  ", "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "criticize by name three of her potential Republican rivals"
                }
              },
              {
                "-id": "0-10-18",
                "#text": "adding Senator Marco Rubio of Florida and Gov. "
              },
              {
                "-id": "0-10-19",
                "#text": "Scott Walker of Wisconsin to the speech in addition to Jeb Bush, the former Florida governor. "
              },
              {
                "-id": "0-10-20",
                "#text": "And considerable hand-wringing went into deciding how forcefully to speak about criminalizing financial industry executives before an audience made up largely of her Wall Street donors.,"
              },
              {
                "-id": "0-10-21",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "In the end, Mrs. Clinton did forcefully denounce"
                  },
                  {
                    "-class": "negative",
                    "#text": "fraud and manipulation of currency"
                  }
                ],
                "#text": " in the financial sector and said there could be \""
              },
              {
                "-id": "0-10-22",
                "span": {
                  "-class": "positive",
                  "#text": "no justification or tolerance for this kind of criminal behavior"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-10-23",
                "#text": "language that some of her top Wall Street backers had been told of in advance. "
              },
              {
                "-id": "0-10-24",
                "span": {
                  "-class": "positive",
                  "#text": "But Mrs. Clinton also appealed to the private sector and Wall Street to work"
                },
                "#text": " with the government to help lift middle-class wages through long-term investment in employees rather than focus on quarterly results.,\""
              },
              {
                "-id": "0-10-25",
                "span": {
                  "-class": "positive",
                  "#text": "The truth is, Hillary"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-26",
                "#text": "and I've always said this, "
              },
              {
                "-id": "0-10-27",
                "span": {
                  "-class": "positive",
                  "#text": "she is a bold but practical progressive,\"?said Neera Tanden, the president of the Center for American Progress"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-28",
                "span": {
                  "-class": "positive",
                  "#text": "a liberal think tank, and one of the many advisers who helped Mrs. Clinton write the speech"
                },
                "#text": ". \""
              },
              {
                "-id": "0-10-29",
                "#text": "I really think that's the stamp of her vision on this.\""
              },
              {
                "-id": "0-10-30",
                "#text": [
                  "That vision may not appease the ",
                  ", and ",
                  " that Mrs. Clinton is a tax-and-spend liberal. "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "restless left of the Democratic Party"
                  },
                  {
                    "-class": "positive",
                    "#text": "it may not assuage concerns among moderates and independents"
                  }
                ]
              },
              {
                "-id": "0-10-31",
                "#text": "But aides said the speech \"?"
              },
              {
                "-id": "0-10-32",
                "#text": "even with all of the disparate voices that had weighed in to draft it \"?"
              },
              {
                "-id": "0-10-33",
                "#text": "presented the clearest encapsulation yet of what Mrs. Clinton's economic doctrine would look like, "
              },
              {
                "-id": "0-10-34",
                "#text": "and the way in which it would be both similar to and distinct from the policies of her husband, "
              },
              {
                "-id": "0-10-35",
                "#text": "former President Bill Clinton, and President Obama.,\""
              },
              {
                "-id": "0-10-36",
                "span": {
                  "-class": "negative",
                  "#text": "Both of them were coming into recessions"
                },
                "#text": "; "
              },
              {
                "-id": "0-10-37",
                "span": {
                  "-class": "negative",
                  "#text": "she is walking into stagnation,\"?said Matt Bennett, a senior vice president at Third Way"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-38",
                "#text": "a centrist think tank."
              },
              {
                "-id": "0-10-39",
                "#text": "Mrs. "
              },
              {
                "-id": "0-10-40",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton's assessment Monday of the country's economic problems, and the message she will carry throughout the campaign"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-41",
                "#text": "rested entirely on what economists refer to as \""
              },
              {
                "-id": "0-10-42",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "the great wage slowdown"
                  },
                  {
                    "-class": "negative",
                    "#text": "problem that has persisted through recent administrations, both Democratic and Republican"
                  }
                ],
                "#text": [
                  ",\"?a ",
                  ". "
                ]
              },
              {
                "-id": "0-10-43",
                "#text": "It has only worsened as globalization and new technology put added pressures on middle- and low-income earners, "
              },
              {
                "-id": "0-10-44",
                "span": {
                  "-class": "negative",
                  "#text": "and has been exacerbated by the rising costs of housing, education and retirement"
                },
                "#text": ".,"
              },
              {
                "-id": "0-10-45",
                "span": {
                  "-class": "positive",
                  "#text": "The problem has led to widespread frustration"
                },
                "#text": "; , "
              },
              {
                "-id": "0-10-46",
                "#text": "said they thought the distribution of money and wealth in this country should be more even, "
              },
              {
                "-id": "0-10-47",
                "#text": "according to a , conducted in late May.,"
              },
              {
                "-id": "0-10-48",
                "span": {
                  "-class": "negative",
                  "#text": "In her speech, Mrs. Clinton blamed Republicans"
                },
                "#text": ", pointing to Mr. Walker, Mr. Bush and Mr. Rubio, specifically, for \""
              },
              {
                "-id": "0-10-49",
                "#text": "trickle down\"?"
              },
              {
                "-id": "0-10-50",
                "#text": "policies that \"give more wealth to those at the top, by cutting their taxes and letting big corporations write their own rules.\""
              },
              {
                "-id": "0-10-51",
                "span": {
                  "-class": "negative",
                  "#text": "Republicans lost little time in firing back"
                },
                "#text": ". \""
              },
              {
                "-id": "0-10-52",
                "span": {
                  "-class": "positive",
                  "#text": "It's pretty clear"
                },
                "#text": ": "
              },
              {
                "-id": "0-10-53",
                "#text": "She will have to raise taxes on American families,\"?Allison Moore, a spokeswoman for the Republican National Committee, "
              },
              {
                "-id": "0-10-54",
                "#text": "said of Mrs. Clinton's proposals. \""
              },
              {
                "-id": "0-10-55",
                "#text": "There's no way around it.\""
              },
              {
                "-id": "0-10-56",
                "#text": "But Joseph E. "
              },
              {
                "-id": "0-10-57",
                "span": {
                  "-class": "negative",
                  "#text": "Stiglitz, a Nobel laureate in economics who has written extensively about inequality and is now an adviser to Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-58",
                "span": {
                  "-class": "positive",
                  "#text": "said that \"the speech showed a clear understanding that our economy is not working for most Americans"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-10-59",
                "#text": "and that \"we need to fundamentally rewrite the rules.\""
              },
              {
                "-id": "0-10-60",
                "span": {
                  "-class": "negative",
                  "#text": "To that end, Mrs. Clinton called for closing corporate loopholes, eliminating the"
                },
                "#text": " \""
              },
              {
                "-id": "0-10-61",
                "#text": "carried interest\"?"
              },
              {
                "-id": "0-10-62",
                "span": {
                  "-class": "negative",
                  "#text": "loophole that allows some financiers to avoid paying millions in income taxes, and expanding the 2010 Dodd-Frank"
                },
                "#text": " , "
              },
              {
                "-id": "0-10-63",
                "#text": "bill. "
              },
              {
                "-id": "0-10-64",
                "#text": "And while she did not present details of her tax policy, "
              },
              {
                "-id": "0-10-65",
                "#text": "she said she would delve more deeply into policies that would \""
              },
              {
                "-id": "0-10-66",
                "span": {
                  "-class": "negative",
                  "#text": "rein in excessive risks on Wall Street"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-10-67",
                "#text": "in the coming weeks.,"
              },
              {
                "-id": "0-10-68",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Still, she did not embrace the fiery populism of Senator Bernie Sanders"
                  },
                  {
                    "-class": "positive",
                    "#text": "of her Democratic opponents"
                  }
                ],
                "#text": [
                  " of Vermont, one ",
                  ", "
                ]
              },
              {
                "-id": "0-10-69",
                "span": {
                  "-class": "positive",
                  "#text": "whose message has helped him draw big crowds in Iowa and New Hampshire"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-70",
                "#text": [
                  "And she stopped short of ",
                  " championed by Mr. Sanders and others in the liberal wing of the party, "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "endorsing policies"
                }
              },
              {
                "-id": "0-10-71",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "including breaking up the big banks"
                  },
                  {
                    "-class": "negative",
                    "#text": "government fee on the sale or purchase"
                  },
                  {
                    "-class": "positive",
                    "#text": "certain financial assets"
                  }
                ],
                "#text": [
                  " and a financial transaction tax, or a ",
                  " of ",
                  ".,\""
                ]
              },
              {
                "-id": "0-10-72",
                "#text": "She gave something rhetorically to both sides, "
              },
              {
                "-id": "0-10-73",
                "span": {
                  "-class": "positive",
                  "#text": "and she didn't go too far that"
                }
              },
              {
                "-id": "0-10-74",
                "span": {
                  "-class": "negative",
                  "#text": "either side got uncomfortable,\"?Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-75",
                "#text": "Bennett said.,"
              },
              {
                "-id": "0-10-76",
                "span": {
                  "-class": "negative",
                  "#text": "A heckler who interrupted Mrs. Clinton with a question about"
                }
              },
              {
                "-id": "0-10-77",
                "#text": "whether she would reinstate the , seemed to disagree. "
              },
              {
                "-id": "0-10-78",
                "#text": "The act, "
              },
              {
                "-id": "0-10-79",
                "#text": "which Mr. Clinton repealed parts of in 1999 leading to the commingling of commercial and investment banking, "
              },
              {
                "-id": "0-10-80",
                "span": {
                  "-class": "negative",
                  "#text": "is widely criticized by liberals as contributing to the 2008 financial crisis"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-81",
                "#text": "But Alan S. "
              },
              {
                "-id": "0-10-82",
                "span": {
                  "-class": "positive",
                  "#text": "Blinder, a former White House economic adviser under Mr. Clinton who helped Mrs. Clinton shape her proposals"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-83",
                "#text": "told Reuters she would not reinstate the 1933 act, "
              },
              {
                "-id": "0-10-84",
                "span": {
                  "-class": "negative",
                  "#text": "which many economists believe is antiquated"
                },
                "#text": ".,"
              },
              {
                "-id": "0-10-85",
                "#text": "Mrs. "
              },
              {
                "-id": "0-10-86",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton did express her concerns about the emergence of a potentially bigger problem, so-called shadow banking"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-87",
                "#text": [
                  "the system of hedge funds and ",
                  ". \""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "algorithmic traders that has thrived in the wake of the 2008 financial crisis with little to no government regulation"
                }
              },
              {
                "-id": "0-10-88",
                "span": {
                  "-class": "negative",
                  "#text": "Too many of our major financial institutions are still too complex and too risky,\"?Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-10-89",
                "#text": "Clinton said.,"
              },
              {
                "-id": "0-10-90",
                "#text": "Some of what Mrs. Clinton presented, particularly a plan that would offer companies incentives to increase profit-sharing with employees and that she will pitch in more detail to voters in New Hampshire on Thursday, "
              },
              {
                "-id": "0-10-91",
                "span": {
                  "-class": "negative",
                  "#text": "left some liberal economists skeptical"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-10-92",
                "span": {
                  "-class": "positive",
                  "#text": "It's unlikely companies are ever going to"
                },
                "#text": " give something for nothing,\"?said Dean Baker, "
              },
              {
                "-id": "0-10-93",
                "#text": "an economist and co-director of the Center for Economic and Policy Research.,"
              },
              {
                "-id": "0-10-94",
                "span": {
                  "-class": "positive",
                  "#text": "Other proposals, like raising the federal minimum wage, expanding overtime benefits and promoting equal pay for women"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-95",
                "span": {
                  "-class": "positive",
                  "#text": "had the feel of a laundry list of standard Democratic proposals advanced by Mr. Obama in his"
                },
                "#text": " , "
              },
              {
                "-id": "0-10-96",
                "#text": "in January.,"
              },
              {
                "-id": "0-10-97",
                "span": {
                  "-class": "positive",
                  "#text": "Predictable or not, the economic vision Mrs. Clinton presented on Monday placed a strong emphasis on the issues she has long advocated"
                },
                "#text": ", "
              },
              {
                "-id": "0-10-98",
                "span": {
                  "-class": "positive",
                  "#text": "including helping women in the work force by advancing"
                },
                "#text": " \""
              },
              {
                "-id": "0-10-99",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "fair scheduling"
                  },
                  {
                    "-class": "negative",
                    "#text": "leave and earned sick days"
                  }
                ],
                "#text": [
                  ", paid ",
                  "\"? "
                ]
              },
              {
                "-id": "0-10-100",
                "span": {
                  "-class": "positive",
                  "#text": "providing better access to early childhood education"
                },
                "#text": "; "
              },
              {
                "-id": "0-10-101",
                "span": {
                  "-class": "negative",
                  "#text": "and addressing rising health care costs"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-10-102",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "I'm well aware"
                  },
                  {
                    "-class": "negative",
                    "#text": "too long"
                  },
                  {
                    "-class": "negative",
                    "#text": "these challenges have been dismissed by some as"
                  }
                ],
                "#text": [
                  " that for far ",
                  ", ",
                  " \""
                ]
              },
              {
                "-id": "0-10-103",
                "#text": "women's issues,'\"? she said. \""
              },
              {
                "-id": "0-10-104",
                "#text": "Well, those days are over.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-11-0",
              "#text": "1436770800509"
            }
          },
          {
            "a": [
              {
                "-id": "0-12-0",
                "#text": [
                  "'",
                  " the fund-raising power of the Democratic Party's legions of grass-roots donors, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "s presidential campaign has been slow to harness"
                }
              },
              {
                "-id": "0-12-1",
                "#text": [
                  "according to reports filed Wednesday, a ",
                  " that her campaign is racing to combat.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "weakness"
                }
              },
              {
                "-id": "0-12-2",
                "#text": "Of the $47.5 million that Mrs. Clinton has raised, less than one-fifth has come from donations of $200 or less. "
              },
              {
                "-id": "0-12-3",
                "span": {
                  "-class": "positive",
                  "#text": "That is a far smaller proportion than that of her Democratic and Republican rivals who have excited grass-roots donors on the left and right"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-4",
                "#text": "such as Senators Bernie Sanders of Vermont and Ted Cruz of Texas. "
              },
              {
                "-id": "0-12-5",
                "#text": "While Mr. Sanders raised far less than Mrs. Clinton over all \"?"
              },
              {
                "-id": "0-12-6",
                "#text": "about $15 million, including money transferred from his Senate account \"?"
              },
              {
                "-id": "0-12-7",
                "#text": "about four-fifths of that amount came from smaller donors.,"
              },
              {
                "-id": "0-12-8",
                "span": {
                  "-class": "positive",
                  "#text": "The slow response of grass-roots donors is a consequence, Mrs. Clinton's aides"
                }
              },
              {
                "-id": "0-12-9",
                "#text": "and advisers said, of the deliberately low-key approach she has taken on the campaign trail \"?"
              },
              {
                "-id": "0-12-10",
                "span": {
                  "-class": "positive",
                  "#text": "with few of the big rallies and campaign events that can help build voter lists and drive donations"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-12-11",
                "#text": [
                  "along with the ",
                  " in persuading some donors that Mrs. Clinton, who is far ahead in primary polls, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "challenge"
                }
              },
              {
                "-id": "0-12-12",
                "#text": "needs their money.,"
              },
              {
                "-id": "0-12-13",
                "span": {
                  "-class": "negative",
                  "#text": "The deficit could represent a financial and strategic liability for Mrs. Clinton"
                }
              },
              {
                "-id": "0-12-14",
                "#text": "if she were to win the nomination. "
              },
              {
                "-id": "0-12-15",
                "span": {
                  "-class": "positive",
                  "#text": "The pool of Republican donors willing to write the maximum"
                },
                "#text": " $2,700 check has grown so large that no Democrat, "
              },
              {
                "-id": "0-12-16",
                "span": {
                  "-class": "positive",
                  "#text": "not even Mrs. Clinton, is likely to be able to match a mainstream Republican nominee"
                },
                "#text": " on high-dollar fund-raising over the long term. "
              },
              {
                "-id": "0-12-17",
                "span": {
                  "-class": "positive",
                  "#text": "In 2012, President Obama and his party were able to match the Republican candidate, Mitt Romney"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-18",
                "#text": "only by raising far more money than Mr. Romney from small donors.,\""
              },
              {
                "-id": "0-12-19",
                "span": {
                  "-class": "positive",
                  "#text": "Given the prodigious amount of money on the Republican side"
                },
                "#text": ", the Democratic nominee absolutely has to overperform\"?"
              },
              {
                "-id": "0-12-20",
                "#text": "among small donors, said David Axelrod, "
              },
              {
                "-id": "0-12-21",
                "span": {
                  "-class": "positive",
                  "#text": "who advised Mr. Obama's two successful presidential campaigns"
                },
                "#text": ".,"
              },
              {
                "-id": "0-12-22",
                "span": {
                  "-class": "negative",
                  "#text": "Campaign officials said that operational hurdles and administrative delays also have impeded her outreach to small donors"
                },
                "#text": ". "
              },
              {
                "-id": "0-12-23",
                "#text": "On the day that Mrs. Clinton sent out emails in April announcing her presidential bid, "
              },
              {
                "-id": "0-12-24",
                "#text": "a campaign official said, many of the messages bounced back. "
              },
              {
                "-id": "0-12-25",
                "#text": "Fewer than 100,000 of the 2.5 million email addresses collected during her 2008 campaign, it turned out, "
              },
              {
                "-id": "0-12-26",
                "span": {
                  "-class": "positive",
                  "#text": "were still active"
                },
                "#text": ". "
              },
              {
                "-id": "0-12-27",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The campaign did not gain access to a huge list"
                  },
                  {
                    "-class": "positive",
                    "#text": "years at substantial expense by a pro-Clinton"
                  }
                ],
                "#text": [
                  " of supporters, built over two ",
                  " \",,\"?"
                ]
              },
              {
                "-id": "0-12-28",
                "#text": "Ready for Hillary, until a month and a half after Mrs. Clinton's announcement.,"
              },
              {
                "-id": "0-12-29",
                "span": {
                  "-class": "positive",
                  "#text": "Some of Mrs. Clinton's allies acknowledge that Mr. Sanders has done a better job of engaging small donors on the left"
                },
                "#text": ". \""
              },
              {
                "-id": "0-12-30",
                "span": {
                  "-class": "positive",
                  "#text": "The small donors right now are very much attracted to what Bernie is saying,\"?said Ed Rendell"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-31",
                "#text": "a former Pennsylvania governor and a Clinton supporter.,"
              },
              {
                "-id": "0-12-32",
                "#text": "Mrs. "
              },
              {
                "-id": "0-12-33",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's campaign has responded with a new program, the Hillbuilder Initiative, intended to build a more robust online presence and harvest the grass-roots money and enthusiasm that can come with it"
                },
                "#text": ". "
              },
              {
                "-id": "0-12-34",
                "span": {
                  "-class": "positive",
                  "#text": "But the slow start has bewildered some longtime supporters"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-35",
                "span": {
                  "-class": "positive",
                  "#text": "who recall small-donor enthusiasm"
                },
                "#text": " as a crucial piece of Mr. Obama's win over Mrs. Clinton in 2008.,"
              },
              {
                "-id": "0-12-36",
                "span": {
                  "-class": "negative",
                  "#text": "Relying more heavily on large donors could also present an unwanted contrast not only to other candidates"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-37",
                "#text": "like Mr. Sanders, but with Mrs. Clinton's own statements about fighting for those who feel locked out of the economy. "
              },
              {
                "-id": "0-12-38",
                "#text": "Mrs. Clinton has attended 46 fund-raisers since she entered the campaign, many of them for donors giving the largest possible check. "
              },
              {
                "-id": "0-12-39",
                "#text": "Mr. Sanders has attended two.,\""
              },
              {
                "-id": "0-12-40",
                "span": {
                  "-class": "positive",
                  "#text": "We're spending our time talking to people, rather than sitting around in small rooms talking to very wealthy people"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-12-41",
                "#text": "Mr. "
              },
              {
                "-id": "0-12-42",
                "#text": "Sanders said in an interview on Wednesday, "
              },
              {
                "-id": "0-12-43",
                "#text": "as he prepared for a campaign rally in Phoenix. \""
              },
              {
                "-id": "0-12-44",
                "span": {
                  "-class": "positive",
                  "#text": "These are working people, middle-class people who are making these contributions"
                },
                "#text": ".\""
              },
              {
                "-id": "0-12-45",
                "#text": "Wednesday's campaign filings underscored not only how small donors have powered insurgent candidates, "
              },
              {
                "-id": "0-12-46",
                "#text": "but how the growing world of super PACs and outside spending have upended conventional measures of fund-raising strength.,"
              },
              {
                "-id": "0-12-47",
                "#text": "Mrs. "
              },
              {
                "-id": "0-12-48",
                "#text": "Clinton's campaign has taken in three times more money than any of her Democratic or Republican rivals, "
              },
              {
                "-id": "0-12-49",
                "#text": "according to Federal Election Commission data filed by the 2016 candidates on Wednesday.,"
              },
              {
                "-id": "0-12-50",
                "span": {
                  "-class": "positive",
                  "#text": "But super PACs and other outside groups set up by allies or former aides to the Republican candidates have dwarfed the top Democratic super PAC"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-12-51",
                "#text": "as well as most of the Republican campaigns \"?"
              },
              {
                "-id": "0-12-52",
                "span": {
                  "-class": "negative",
                  "#text": "collectively raising in excess of $200 million and startling some in Mrs. Clinton's camp"
                },
                "#text": ".,"
              },
              {
                "-id": "0-12-53",
                "span": {
                  "-class": "positive",
                  "#text": "Jeb Bush's super PAC"
                },
                "#text": ", Right to Rise, raised more than $103 million, on top of $11 million raised by his campaign, "
              },
              {
                "-id": "0-12-54",
                "#text": "giving him an effective war chest twice as large as Mrs. Clinton's. "
              },
              {
                "-id": "0-12-55",
                "span": {
                  "-class": "positive",
                  "#text": "Priorities USA, the lead Democratic super PAC"
                },
                "#text": ", has raised $15 million, and Mrs. Clinton's allies are struggling to persuade her wealthiest backers to make seven- and eight-figure donations to the group.,"
              },
              {
                "-id": "0-12-56",
                "#text": "The only silver lining, Democrats said, "
              },
              {
                "-id": "0-12-57",
                "#text": [
                  "was the knowledge that much of the Republican ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "super PAC money would be used to savage other Republicans"
                }
              },
              {
                "-id": "0-12-58",
                "#text": "in what is likely to be a long and hard-fought primary campaign.,\""
              },
              {
                "-id": "0-12-59",
                "#text": "What it means is that they are going to tear each other apart in the primary season,\"?"
              },
              {
                "-id": "0-12-60",
                "#text": "said Mr. Rendell, "
              },
              {
                "-id": "0-12-61",
                "#text": "who predicted that Mrs. Clinton's small-dollar fund-raising would grow substantially in the months ahead.,"
              },
              {
                "-id": "0-12-62",
                "#text": "Some Democrats privately said that Mrs. Clinton's campaign fund-raising is less impressive than it appears. "
              },
              {
                "-id": "0-12-63",
                "#text": "Aside from Martin O'Malley, the former Maryland governor, "
              },
              {
                "-id": "0-12-64",
                "#text": "who reported raising $2 million for his campaign, Mrs. Clinton has no competition for the Democrats' big-donor establishment, "
              },
              {
                "-id": "0-12-65",
                "span": {
                  "-class": "negative",
                  "#text": "which handed out a combined $80 million to a crowded Democratic primary field"
                },
                "#text": " during the equivalent fund-raising period in 2007, "
              },
              {
                "-id": "0-12-66",
                "#text": "the last open primary.,"
              },
              {
                "-id": "0-12-67",
                "#text": "She also has been slow to seize the chance to raise money jointly with the Democratic National Committee. "
              },
              {
                "-id": "0-12-68",
                "#text": [
                  "Under legislation passed in December, the ",
                  " to $334,000 from each donor every calendar year \"?"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "party can accept up"
                }
              },
              {
                "-id": "0-12-69",
                "#text": "10 times the amount in past years. "
              },
              {
                "-id": "0-12-70",
                "#text": [
                  "One leading Democratic donor, who asked not to be identified so as ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "not to damage his relations with Mrs. Clinton"
                }
              },
              {
                "-id": "0-12-71",
                "#text": "estimated that the Democrats could be leaving $60 million to $70 million on the table.,"
              },
              {
                "-id": "0-12-72",
                "span": {
                  "-class": "negative",
                  "#text": "While some Clinton allies say they are not concerned about the campaign's potential to excite small donors"
                },
                "#text": ", "
              },
              {
                "-id": "0-12-73",
                "span": {
                  "-class": "negative",
                  "#text": "the difficulty that Mrs. Clinton has faced presents a paradox of her position as a kind of de facto incumbent in the fight for the Democratic nomination"
                },
                "#text": ". "
              },
              {
                "-id": "0-12-74",
                "span": {
                  "-class": "positive",
                  "#text": "Without a pitched primary battle"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-12-75",
                "#text": "like the one she faced against then-Senator Barack Obama eight years ago \"?"
              },
              {
                "-id": "0-12-76",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "it is far more difficult for Mrs. Clinton"
                  },
                  {
                    "-class": "negative",
                    "#text": "create urgency among her financial"
                  }
                ],
                "#text": [
                  " to ",
                  " and political base this early in the campaign.,"
                ]
              },
              {
                "-id": "0-12-77",
                "#text": "But an all-out fund-raising blitz, or a campaign built around larger events, could stoke the aura of \""
              },
              {
                "-id": "0-12-78",
                "#text": "inevitability\"?"
              },
              {
                "-id": "0-12-79",
                "#text": [
                  "that she is determined to ",
                  ".,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "avoid"
                }
              },
              {
                "-id": "0-12-80",
                "#text": "A spokesman for Mrs. Clinton, Josh Schwerin, said the campaign was \""
              },
              {
                "-id": "0-12-81",
                "span": {
                  "-class": "positive",
                  "#text": "thrilled to have 250,000 donors in our first quarter in the race, and our Hillbuilder program is already paying off with a rapidly growing list that is active and engaged"
                },
                "#text": ".\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-13-0",
              "#text": "1436943600302"
            }
          },
          {
            "a": [
              {
                "-id": "0-14-0",
                "#text": "Nearly 20 years after President Bill Clinton declared that \"the era of big government is over,\"?, "
              },
              {
                "-id": "0-14-1",
                "#text": "is proposing muscular federal policies that would require hundreds of billions of dollars in new spending "
              },
              {
                "-id": "0-14-2",
                "span": {
                  "-class": "positive",
                  "#text": "and markedly expand Washington's influence in a host of areas, from universal prekindergarten to Alzheimer's disease research"
                },
                "#text": ".,"
              },
              {
                "-id": "0-14-3",
                "#text": "Her presidential campaign has said little yet about the costs of her policy ideas or "
              },
              {
                "-id": "0-14-4",
                "#text": "how she would pay for them, but Mrs. Clinton is calling for government activism on a scale that she has not sought since her failed health care initiative in 1993 and 1994. "
              },
              {
                "-id": "0-14-5",
                "#text": "But if her liberalism was seen as out in front of where many Democrats were "
              },
              {
                "-id": "0-14-6",
                "#text": "then, she now seems to be catching up to the mood of the party.,\""
              },
              {
                "-id": "0-14-7",
                "span": {
                  "-class": "negative",
                  "#text": "It's not that the philosophical fights in the party between the left and the center have been settled in favor of big government"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-14-8",
                "#text": "said the presidential historian Robert Dallek. \""
              },
              {
                "-id": "0-14-9",
                "span": {
                  "-class": "positive",
                  "#text": "It's that likely Democratic primary voters right now want to"
                },
                "#text": " see government used to build the economy.\""
              },
              {
                "-id": "0-14-10",
                "#text": [
                  "As ambitious as that may sound, ",
                  ", "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton's agenda may not be enough to satisfy restive liberals"
                }
              },
              {
                "-id": "0-14-11",
                "span": {
                  "-class": "negative",
                  "#text": "including those supporting Senator , of Vermont, who still suspect that she is not one of them"
                },
                "#text": ". "
              },
              {
                "-id": "0-14-12",
                "#text": "Nor is it likely to win many converts among the Republicans who control both houses of Congress and give her ideas (and Mr. Sanders's) little chance of gaining traction there.,"
              },
              {
                "-id": "0-14-13",
                "#text": "The question is "
              },
              {
                "-id": "0-14-14",
                "#text": "whether the lofty vision she is articulating as a candidate for the Democratic nomination is one that can be turned into a mandate "
              },
              {
                "-id": "0-14-15",
                "#text": "if she is elected president.,\""
              },
              {
                "-id": "0-14-16",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The problem for Hillary is that the country"
                  },
                  {
                    "-class": "positive",
                    "#text": "isn't hungering for liberalism,\"?said Jeremy Mayer"
                  }
                ],
                "#text": [
                  " itself ",
                  ", "
                ]
              },
              {
                "-id": "0-14-17",
                "#text": "an associate professor of politics at George Mason University. \""
              },
              {
                "-id": "0-14-18",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Republicans will be well positioned to say to Hillary"
                  },
                  {
                    "-class": "positive",
                    "#text": "Great"
                  }
                ],
                "#text": [
                  ", \"",
                  ", "
                ]
              },
              {
                "-id": "0-14-19",
                "#text": "and how are you going to pay for that?'\"Large majorities of Americans say in opinion polls that the federal government is too big or too powerful, "
              },
              {
                "-id": "0-14-20",
                "span": {
                  "-class": "negative",
                  "#text": "creating a risk that Mrs. Clinton's proposals could overreach and turn off some voters"
                },
                "#text": ".,"
              },
              {
                "-id": "0-14-21",
                "#text": "Mrs. "
              },
              {
                "-id": "0-14-22",
                "#text": "Clinton is expected to begin spelling out details of her policies on Monday in a speech about the economy. "
              },
              {
                "-id": "0-14-23",
                "span": {
                  "-class": "positive",
                  "#text": "Meanwhile, her aides say that she will seek to pay for them with higher taxes on wealthy Americans"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-24",
                "span": {
                  "-class": "negative",
                  "#text": "along with cutbacks and closing loopholes elsewhere"
                },
                "#text": "; "
              },
              {
                "-id": "0-14-25",
                "span": {
                  "-class": "positive",
                  "#text": "the amounts in play are expected to be substantial"
                },
                "#text": ".,"
              },
              {
                "-id": "0-14-26",
                "span": {
                  "-class": "positive",
                  "#text": "Her most ambitious ideas"
                },
                "#text": ", which her advisers say are designed to help families, include prekindergarten for all 4-year-olds, "
              },
              {
                "-id": "0-14-27",
                "#text": [
                  "expanded access to child care, ",
                  ", ",
                  " \""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "paid sick days and paid family leave"
                  },
                  {
                    "-class": "positive",
                    "#text": "helping to make college students"
                  }
                ]
              },
              {
                "-id": "0-14-28",
                "span": {
                  "-class": "negative",
                  "#text": "as debt-free as possible,\"?a higher minimum wage, company profit-sharing for employees, legal protections for people in the country illegally"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-29",
                "#text": "and more financing for medical research.,"
              },
              {
                "-id": "0-14-30",
                "span": {
                  "-class": "positive",
                  "#text": "Universal prekindergarten alone could cost tens of billions of dollars"
                },
                "#text": " over the next decade, according to outside advisers to Mrs. Clinton.,"
              },
              {
                "-id": "0-14-31",
                "#text": [
                  "Against the sweep of , history, Mrs. Clinton's proposals reflect a ",
                  ".,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "decided return to vibrant liberalism"
                }
              },
              {
                "-id": "0-14-32",
                "#text": "The government programs of Franklin D. "
              },
              {
                "-id": "0-14-33",
                "#text": "Roosevelt \"?"
              },
              {
                "-id": "0-14-34",
                "#text": "whose presidency Mrs. Clinton regularly invokes \"?"
              },
              {
                "-id": "0-14-35",
                "#text": "and Lyndon B. "
              },
              {
                "-id": "0-14-36",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Johnson aimed to transform the lives of poor and elderly Americans with jobs, health care"
                  },
                  {
                    "-class": "positive",
                    "#text": "retirement benefits"
                  }
                ],
                "#text": [
                  " and ",
                  ". "
                ]
              },
              {
                "-id": "0-14-37",
                "span": {
                  "-class": "negative",
                  "#text": "But the consecutive electoral losses of Jimmy Carter, Walter F"
                },
                "#text": ". "
              },
              {
                "-id": "0-14-38",
                "#text": "Mondale, and Michael S. "
              },
              {
                "-id": "0-14-39",
                "#text": "Dukakis in the 1980s \"?"
              },
              {
                "-id": "0-14-40",
                "#text": "as well as President Ronald Reagan's framing of government as \""
              },
              {
                "-id": "0-14-41",
                "span": {
                  "-class": "negative",
                  "#text": "the problem"
                },
                "#text": "\"?\"?"
              },
              {
                "-id": "0-14-42",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "gave rise to centrist Democrats like Bill Clinton who envisioned federal programs"
                  },
                  {
                    "-class": "negative",
                    "#text": "safety nets rather than solutions to every social ill"
                  }
                ],
                "#text": [
                  " as ",
                  ".,"
                ]
              },
              {
                "-id": "0-14-43",
                "#text": [
                  "Government actions became more ",
                  " after the ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "robust"
                  },
                  {
                    "-class": "negative",
                    "#text": "Great Recession, beginning in 2009 with President Obama's stimulus program"
                  }
                ]
              },
              {
                "-id": "0-14-44",
                "span": {
                  "-class": "positive",
                  "#text": "corporate bailouts and the Affordable Care Act"
                },
                "#text": ". "
              },
              {
                "-id": "0-14-45",
                "#text": "Mrs. Clinton is now moving to build on those programs.,"
              },
              {
                "-id": "0-14-46",
                "#text": "Mr. "
              },
              {
                "-id": "0-14-47",
                "#text": [
                  "Dallek said that Democrats were increasingly determined to ",
                  " that, in the historian's words, \""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "embrace President Johnson's view"
                }
              },
              {
                "-id": "0-14-48",
                "#text": "What's the point of being president if you're not going to use the government and its powers to make progress in society?\""
              },
              {
                "-id": "0-14-49",
                "#text": "Friends "
              },
              {
                "-id": "0-14-50",
                "span": {
                  "-class": "positive",
                  "#text": "and associates say Mrs. Clinton is revealing her natural political self"
                },
                "#text": ": "
              },
              {
                "-id": "0-14-51",
                "span": {
                  "-class": "positive",
                  "#text": "a blend of progressive and pragmatic, an apostle of government policy as a force for change"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-52",
                "#text": "and a more left-of-center leader than her husband.,\""
              },
              {
                "-id": "0-14-53",
                "span": {
                  "-class": "positive",
                  "#text": "She's an activist at heart and a liberal at heart"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-54",
                "span": {
                  "-class": "positive",
                  "#text": "and she finally fits the times because more people want an expansive government than they did in the 1990s"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-14-55",
                "span": {
                  "-class": "negative",
                  "#text": "said Al From, the founder of the Democratic Leadership Council, a centrist group, now defunct"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-56",
                "#text": "that had close ties to President Clinton. \""
              },
              {
                "-id": "0-14-57",
                "span": {
                  "-class": "negative",
                  "#text": "The big challenge for her is"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-58",
                "span": {
                  "-class": "positive",
                  "#text": "can she offer progressive policies that are constructive and efficient"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-14-59",
                "span": {
                  "-class": "positive",
                  "#text": "but are ones that appeal to the liberal base but aren't too hard-left"
                },
                "#text": "?\""
              },
              {
                "-id": "0-14-60",
                "#text": "It is also a return to form by Mrs. Clinton, "
              },
              {
                "-id": "0-14-61",
                "#text": [
                  "who shifted in the 1990s to supporting more moderate and piecemeal policies after being vilified during the ",
                  ". "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "health care battle"
                }
              },
              {
                "-id": "0-14-62",
                "#text": [
                  "She is on safer political ground now, not only because a growing number of Democrats identify as liberal but also because the ",
                  " the country are more acute today than during her years in the Senate and as a presidential candidate in 2008.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "economic challenges facing"
                }
              },
              {
                "-id": "0-14-63",
                "#text": "Neera Tanden, the president of the Center for American Progress and Mrs. Clinton's policy director in the 2008 campaign, "
              },
              {
                "-id": "0-14-64",
                "#text": "said that Mrs. Clinton was offering a mix of ideas she has long supported, like prekindergarten and paid sick leave, "
              },
              {
                "-id": "0-14-65",
                "span": {
                  "-class": "positive",
                  "#text": "and newer ones that address problems like income inequality and wage stagnation that have become worse since"
                }
              },
              {
                "-id": "0-14-66",
                "#text": "then.,\"She talked about the family economic issues in 2008, but there wasn't a lot of traction,\"?"
              },
              {
                "-id": "0-14-67",
                "#text": "Ms. "
              },
              {
                "-id": "0-14-68",
                "#text": "Tanden said. \""
              },
              {
                "-id": "0-14-69",
                "#text": "The country has shifted a lot more. "
              },
              {
                "-id": "0-14-70",
                "span": {
                  "-class": "negative",
                  "#text": "There is a lot more debate in the culture today"
                },
                "#text": " about women's roles and families and trying to make ends meet.\""
              },
              {
                "-id": "0-14-71",
                "#text": "Gene Sperling, a former economic adviser to Mr. Clinton and Mr. Obama, and someone whom Mrs. Clinton has consulted in her current campaign, "
              },
              {
                "-id": "0-14-72",
                "#text": "said that after more than three decades in public life and in her second national campaign, "
              },
              {
                "-id": "0-14-73",
                "span": {
                  "-class": "positive",
                  "#text": "she has made clear that her goal is to have the biggest effect"
                },
                "#text": " possible "
              },
              {
                "-id": "0-14-74",
                "#text": "if she wins.,\""
              },
              {
                "-id": "0-14-75",
                "span": {
                  "-class": "negative",
                  "#text": "I think the issues of economic inequality and middle class economic insecurity have become more serious and longstanding"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-76",
                "#text": "and as a result are demanding bigger responses,\"?Mr. "
              },
              {
                "-id": "0-14-77",
                "#text": "Sperling said.,"
              },
              {
                "-id": "0-14-78",
                "#text": "A sizable portion of Democratic primary voters want even more dramatic changes than Mrs. Clinton is calling for: "
              },
              {
                "-id": "0-14-79",
                "span": {
                  "-class": "positive",
                  "#text": "The dismantling of banks and stricter regulation of the financial industry, higher taxes on Wall Street firms and corporate profits"
                },
                "#text": ", "
              },
              {
                "-id": "0-14-80",
                "span": {
                  "-class": "positive",
                  "#text": "and reduced or even free college tuition"
                },
                "#text": ".,"
              },
              {
                "-id": "0-14-81",
                "#text": "Several Democrats in Iowa and New Hampshire, the first states to vote for the 2016 presidential nominees, "
              },
              {
                "-id": "0-14-82",
                "span": {
                  "-class": "negative",
                  "#text": "said they remained skeptical"
                },
                "#text": " that Mrs. Clinton's core beliefs were truly progressive, given her history as a pragmatist who, as a senator, "
              },
              {
                "-id": "0-14-83",
                "#text": "sought common ground with Republicans and voted to authorize the 2003 invasion of Iraq.,\""
              },
              {
                "-id": "0-14-84",
                "#text": "When , talks about a political revolution, I believe it because that's always been his message. "
              },
              {
                "-id": "0-14-85",
                "#text": "But Hillary? "
              },
              {
                "-id": "0-14-86",
                "#text": "Not so much,\"?said Ellen Shipitalo, a graduate student in political studies at Queen's University in Ontario, "
              },
              {
                "-id": "0-14-87",
                "#text": "who attended a recent rally for Mrs. Clinton in Des Moines. \""
              },
              {
                "-id": "0-14-88",
                "#text": "No Democrat I know really thinks she'll change much as president.\""
              },
              {
                "-id": "0-14-89",
                "span": {
                  "-class": "positive",
                  "#text": "Liberals may feel good about Mr. Sanders's proposals"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-14-90",
                "#text": "a breakup of big banks, $1 trillion for public works jobs, a \",-"
              },
              {
                "-id": "0-14-91",
                "#text": "for-all\"?"
              },
              {
                "-id": "0-14-92",
                "span": {
                  "-class": "positive",
                  "#text": "system of universal health care"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-14-93",
                "span": {
                  "-class": "negative",
                  "#text": "but many Democrats in Congress view them as impractical given Republican control"
                },
                "#text": ".,"
              },
              {
                "-id": "0-14-94",
                "#text": "Mrs. "
              },
              {
                "-id": "0-14-95",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's allies said they believed her policies had a far better chance of success"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-14-96",
                "#text": "If Hillary wins, and/"
              },
              {
                "-id": "0-14-97",
                "#text": "or we take back the Senate, the mainstream conservatives who want to work with us will have the upper hand over their , "
              },
              {
                "-id": "0-14-98",
                "#text": "members,\"?said Senator Chuck Schumer of New York. \""
              },
              {
                "-id": "0-14-99",
                "#text": "If they lose three consecutive presidential elections, "
              },
              {
                "-id": "0-14-100",
                "#text": "you'll have Republicans who will say, \""
              },
              {
                "-id": "0-14-101",
                "#text": "We can't keep following the ,.'\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-15-0",
              "#text": "1436425200693"
            }
          },
          {
            "a": [
              {
                "-id": "0-16-0",
                "#text": [
                  "A major teachers' union voted on Saturday to give , an ",
                  ", a ",
                  " credentials as she prepares to outline in more detail an economic vision focused on lifting middle-class incomes and ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "early endorsement for president"
                  },
                  {
                    "-class": "positive",
                    "#text": "boost to her pro-labor"
                  },
                  {
                    "-class": "negative",
                    "#text": "tries to fend off a stronger-than-expected challenge from the left"
                  }
                ]
              },
              {
                "-id": "0-16-1",
                "span": {
                  "-class": "positive",
                  "#text": "The endorsement from the , was not a surprise"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-2",
                "span": {
                  "-class": "negative",
                  "#text": "The group is led by Randi Weingarten, a longtime ally of Mrs. Clinton, and backed her in her losing primary battle against Barack Obama in 2008"
                },
                "#text": ".,"
              },
              {
                "-id": "0-16-3",
                "span": {
                  "-class": "positive",
                  "#text": "But the union's support comes at an opportune moment for Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-16-4",
                "span": {
                  "-class": "negative",
                  "#text": "who on Monday plans to give her first major speech on the economy, designed in part to neutralize criticism from her leading Democratic challenger"
                },
                "#text": ", "
              },
              {
                "-id": "0-16-5",
                "#text": "Senator Bernie Sanders of Vermont. "
              },
              {
                "-id": "0-16-6",
                "#text": [
                  "Mr. Sanders has surged in the polls by ",
                  " to the ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "appealing"
                  },
                  {
                    "-class": "negative",
                    "#text": "populist anger of many Democrats over economic issues"
                  }
                ]
              },
              {
                "-id": "0-16-7",
                "#text": "Mrs. "
              },
              {
                "-id": "0-16-8",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton will present a stark assessment of a middle class whose weekly earnings have virtually stalled for 15 years"
                },
                "#text": ", "
              },
              {
                "-id": "0-16-9",
                "span": {
                  "-class": "negative",
                  "#text": "and she will criticize"
                },
                "#text": " \""
              },
              {
                "-id": "0-16-10",
                "#text": "trickle-down\"?"
              },
              {
                "-id": "0-16-11",
                "span": {
                  "-class": "positive",
                  "#text": "Republican policies as having contributed to a vast concentration of wealth among the richest Americans"
                },
                "#text": ", "
              },
              {
                "-id": "0-16-12",
                "#text": "according to campaign aides. "
              },
              {
                "-id": "0-16-13",
                "#text": "They offered a preview of the speech, "
              },
              {
                "-id": "0-16-14",
                "#text": "to be delivered at the New School in New York, on the condition of anonymity.,"
              },
              {
                "-id": "0-16-15",
                "#text": "The emphasis on what economists have called \""
              },
              {
                "-id": "0-16-16",
                "span": {
                  "-class": "positive",
                  "#text": "the great wage slowdown"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-16-17",
                "#text": "of the 21st century is the result of Mrs. Clinton's months of conversations with more than 200 domestic policy experts and dozens of economists. "
              },
              {
                "-id": "0-16-18",
                "#text": [
                  "She believes that increasing the wages of average Americans to ",
                  " is the \""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "reduce income inequality"
                }
              },
              {
                "-id": "0-16-19",
                "span": {
                  "-class": "negative",
                  "#text": "defining economic challenge of our time,\"?a campaign aide said"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-20",
                "#text": "To that end, Mrs. Clinton will present proposals that include paid family medical leave, "
              },
              {
                "-id": "0-16-21",
                "#text": "an increase in the federal minimum wage and incentives for corporations to increase profit-sharing programs. "
              },
              {
                "-id": "0-16-22",
                "span": {
                  "-class": "positive",
                  "#text": "She will also praise President Obama's ,.,Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-23",
                "#text": "Clinton will highlight the economic record of the administration of her husband, former President Bill Clinton, "
              },
              {
                "-id": "0-16-24",
                "#text": "when median family income, adjusted for inflation, increased to $56,080 in 1999 from $48,884 in 1993, "
              },
              {
                "-id": "0-16-25",
                "#text": "according to census data. "
              },
              {
                "-id": "0-16-26",
                "#text": "But she will also lay out a vision that contrasts with Mr. Clinton's message of self-reliance and his assertion that the era of big government was over.,"
              },
              {
                "-id": "0-16-27",
                "#text": "Mrs. "
              },
              {
                "-id": "0-16-28",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton will also propose more investment in infrastructure, tax relief for small businesses, better access to child care"
                },
                "#text": ", "
              },
              {
                "-id": "0-16-29",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "assistance to make college more affordable"
                  },
                  {
                    "-class": "positive",
                    "#text": "stronger support"
                  }
                ],
                "#text": [
                  ", ",
                  " for collective bargaining "
                ]
              },
              {
                "-id": "0-16-30",
                "#text": "and tax increases on the wealthiest Americans.,"
              },
              {
                "-id": "0-16-31",
                "#text": "Many of these proposals are part of the economic agenda pressed on Mrs. Clinton by union leaders, "
              },
              {
                "-id": "0-16-32",
                "#text": "in particular Richard Trumka, the president of the A."
              },
              {
                "-id": "0-16-33",
                "#text": "F."
              },
              {
                "-id": "0-16-34",
                "#text": "L.-"
              },
              {
                "-id": "0-16-35",
                "#text": "C."
              },
              {
                "-id": "0-16-36",
                "#text": "I."
              },
              {
                "-id": "0-16-37",
                "#text": "O. "
              },
              {
                "-id": "0-16-38",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Mr. Trumka has been privately urging individual unions like the teachers' federation to hold"
                  },
                  {
                    "-class": "positive",
                    "#text": "endorsements until they are satisfied"
                  }
                ],
                "#text": [
                  " off any ",
                  " that this agenda has been fully embraced.,"
                ]
              },
              {
                "-id": "0-16-39",
                "#text": "But in an interview, Ms. Weingarten said the membership overwhelmingly supported Mrs. Clinton, "
              },
              {
                "-id": "0-16-40",
                "#text": [
                  "which became ",
                  " in two town hall meetings and two polls of the membership in the last six weeks.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "clear"
                }
              },
              {
                "-id": "0-16-41",
                "#text": "The economic team that advised Mrs. Clinton included Jake Sullivan, Ann O'Leary and Maya Harris from her campaign; "
              },
              {
                "-id": "0-16-42",
                "#text": "Neera Tanden, the president of the ,, a liberal think tank, and the policy director of Mrs. Clinton's 2008 presidential campaign; "
              },
              {
                "-id": "0-16-43",
                "#text": "and the former White House advisers Gene Sperling and Alan S. "
              },
              {
                "-id": "0-16-44",
                "#text": "Blinder.,"
              },
              {
                "-id": "0-16-45",
                "#text": "The liberal economists Joseph E. "
              },
              {
                "-id": "0-16-46",
                "span": {
                  "-class": "negative",
                  "#text": "Stiglitz, a Nobel laureate in economics who has written extensively about inequality, and Alan B"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-47",
                "#text": "Krueger, a co-author of \""
              },
              {
                "-id": "0-16-48",
                "span": {
                  "-class": "negative",
                  "#text": "Inequality in America"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-16-49",
                "#text": "and a professor at Princeton, also influenced Mrs. Clinton.,"
              },
              {
                "-id": "0-16-50",
                "#text": "Campaign aides said Mrs. Clinton planned to use Monday's speech to present her overall assessment of the economy. "
              },
              {
                "-id": "0-16-51",
                "#text": "She will delve more deeply into specifics, including her plans to change the tax code, "
              },
              {
                "-id": "0-16-52",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "regulate Wall Street and curb corporations' emphasis"
                  },
                  {
                    "-class": "positive",
                    "#text": "short-term profits rather than long-term investment in employees"
                  }
                ],
                "#text": [
                  " on ",
                  ", "
                ]
              },
              {
                "-id": "0-16-53",
                "#text": "in a series of future speeches, they said.,"
              },
              {
                "-id": "0-16-54",
                "#text": "It remains to be seen whether Mrs. Clinton's emphasis on wage growth to alleviate income inequality will be enough to allay growing concerns over economic disparity. "
              },
              {
                "-id": "0-16-55",
                "#text": "In a ,, two-thirds of Americans said they thought the distribution of money and wealth in this country should be more even.,"
              },
              {
                "-id": "0-16-56",
                "span": {
                  "-class": "negative",
                  "#text": "Two of Mrs. Clinton's opponents for the Democratic presidential nomination, Mr. Sanders and former Gov"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-57",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Martin O'Malley of Maryland, are trying to appeal to liberals concerned that Mrs. Clinton will not go far enough"
                  },
                  {
                    "-class": "positive",
                    "#text": "addressing inequality"
                  },
                  {
                    "-class": "negative",
                    "#text": "paid speeches to Wall Street have made"
                  },
                  {
                    "-class": "positive",
                    "#text": "overly cozy with the top 1 percent"
                  }
                ],
                "#text": [
                  " in ",
                  " and that her $200,000 ",
                  " her ",
                  ".,"
                ]
              },
              {
                "-id": "0-16-58",
                "#text": "Both Mr. Sanders and Mr. O'Malley met with the teachers' union. "
              },
              {
                "-id": "0-16-59",
                "#text": "At her meeting, Mrs. Clinton said teachers shouldn't be the \""
              },
              {
                "-id": "0-16-60",
                "span": {
                  "-class": "negative",
                  "#text": "scapegoat"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-16-61",
                "span": {
                  "-class": "negative",
                  "#text": "for society's ills"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-16-62",
                "span": {
                  "-class": "positive",
                  "#text": "an acknowledgment that education policy remains one of the few areas of unsettled debate within the Democratic Party"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-63",
                "#text": [
                  "President Obama's education agenda has ",
                  ", and last year the head of the ,, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "often infuriated teachers' unions"
                }
              },
              {
                "-id": "0-16-64",
                "#text": "another union representing teachers, called for the secretary of education, Arne Duncan, ,.,Months ago, Ms. O'Leary, "
              },
              {
                "-id": "0-16-65",
                "span": {
                  "-class": "negative",
                  "#text": "an adviser to Mrs. Clinton, said the candidate would listen to both sides in the education debate"
                },
                "#text": ". "
              },
              {
                "-id": "0-16-66",
                "span": {
                  "-class": "positive",
                  "#text": "In a statement after the endorsement"
                },
                "#text": " from the ,, Mrs. Clinton said that teachers' voices \""
              },
              {
                "-id": "0-16-67",
                "span": {
                  "-class": "positive",
                  "#text": "and voices of all workers are essential to this country"
                },
                "#text": ".\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-17-0",
              "#text": "1436598000488"
            }
          },
          {
            "a": [
              {
                "-id": "0-18-0",
                "#text": "ORLANDO, Fla. \"? "
              },
              {
                "-id": "0-18-1",
                "#text": "Inside an office park here, about a dozen women gathered to watch a 30-second television spot that opened with , "
              },
              {
                "-id": "0-18-2",
                "#text": [
                  "looking well-coiffed and ",
                  ", toasting champagne with her tuxedoed husband, the former president, against a golden-hued backdrop.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "aristocratic"
                }
              },
              {
                "-id": "0-18-3",
                "#text": "The ad then cut to Mrs. Clinton describing being \""
              },
              {
                "-id": "0-18-4",
                "span": {
                  "-class": "positive",
                  "#text": "dead broke"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-18-5",
                "#text": "when she and her husband left the White House, before a narrator intoned that Mrs. Clinton makes more money in a single speech, "
              },
              {
                "-id": "0-18-6",
                "#text": "about $300,000, than an average family earns in five years.,"
              },
              {
                "-id": "0-18-7",
                "#text": "The message hit a nerve. \""
              },
              {
                "-id": "0-18-8",
                "#text": "She's out of touch,\"?said one of the women, "
              },
              {
                "-id": "0-18-9",
                "#text": "who works as a laundry attendant.,\""
              },
              {
                "-id": "0-18-10",
                "#text": "Her reality is just so different than mine,\"?murmured another, as operatives from American Crossroads, "
              },
              {
                "-id": "0-18-11",
                "#text": "a Republican \",,\"?"
              },
              {
                "-id": "0-18-12",
                "#text": "watched closely from behind a one-way mirror.,"
              },
              {
                "-id": "0-18-13",
                "#text": [
                  "In rooms like this one around the country, an ",
                  " and ",
                  " test and ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "expensive"
                  },
                  {
                    "-class": "positive",
                    "#text": "sophisticated effort is underway to"
                  },
                  {
                    "-class": "negative",
                    "#text": "refine the most potent lines of attack against Mrs. Clinton"
                  }
                ]
              },
              {
                "-id": "0-18-14",
                "#text": "and, ultimately, to persuade Americans that she does not deserve their votes. "
              },
              {
                "-id": "0-18-15",
                "span": {
                  "-class": "positive",
                  "#text": "While the general election is 16 months away, Republican groups are eager to begin building a powerful case against the woman they believe will be the Democratic nominee"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-16",
                "#text": "and to infuse the public consciousness with those messages.,"
              },
              {
                "-id": "0-18-17",
                "#text": "On the campaign trail, Mrs. Clinton focuses on policy issues, like the economic vision she plans to lay out in a speech\" "
              },
              {
                "-id": "0-18-18",
                "#text": "on Monday.,"
              },
              {
                "-id": "0-18-19",
                "span": {
                  "-class": "negative",
                  "#text": "But in private, her campaign has prepped for the anticipated lines of attack against her"
                },
                "#text": ".\"?"
              },
              {
                "-id": "0-18-20",
                "span": {
                  "-class": "negative",
                  "#text": "The effort to vilify Mrs. Clinton could ultimately cost several hundred million dollars"
                },
                "#text": ", given the variety and volume of political organizations involved.,"
              },
              {
                "-id": "0-18-21",
                "#text": "The typical voter has not necessarily fully tuned in to election coverage or followed the intricacies of Mrs. Clinton's , "
              },
              {
                "-id": "0-18-22",
                "#text": "or , to her family's foundation. "
              },
              {
                "-id": "0-18-23",
                "span": {
                  "-class": "negative",
                  "#text": "But Republicans are acutely aware that early attacks labeling Mitt Romney as elitist were impossible for him to shake in 2012"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-24",
                "span": {
                  "-class": "negative",
                  "#text": "and they view these next several months as critical in laying the groundwork to taint"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-25",
                "span": {
                  "-class": "negative",
                  "#text": "and ultimately defeat, Mrs. Clinton"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-26",
                "#text": "That is why, on a rainy night here, "
              },
              {
                "-id": "0-18-27",
                "#text": "Crossroads, which was founded by the Republican strategist Karl Rove, gathered about 50 voters representing groups that it believes can be persuaded to vote against Mrs. Clinton \"?"
              },
              {
                "-id": "0-18-28",
                "span": {
                  "-class": "positive",
                  "#text": "an all-white mix of young men, low-income adults, married mothers and politically moderate women"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-29",
                "span": {
                  "-class": "negative",
                  "#text": "One problem in developing negative messages about Mrs. Clinton, Republican strategists have found"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-30",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "is that she and her husband have survived so many controversies"
                  },
                  {
                    "-class": "negative",
                    "#text": "partisan attacks"
                  }
                ],
                "#text": [
                  " by dismissing them as ",
                  ". "
                ]
              },
              {
                "-id": "0-18-31",
                "span": {
                  "-class": "negative",
                  "#text": "So the Republican organizations are seeking to develop lines of attack that resonate more deeply or raise unsettling questions about Mrs. Clinton's character"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-32",
                "#text": "They showed the voters, "
              },
              {
                "-id": "0-18-33",
                "#text": "who received $100, sandwiches and soft drinks for their time, more than a dozen 30-second ads. ("
              },
              {
                "-id": "0-18-34",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Crossroads allowed a reporter to observe the focus groups"
                  },
                  {
                    "-class": "negative",
                    "#text": "participants' names be withheld"
                  }
                ],
                "#text": [
                  " under the condition that the ",
                  ".),"
                ]
              },
              {
                "-id": "0-18-35",
                "#text": "The ads highlighted Mrs. Clinton's deleting of emails from her private account, tried to tie her to President Obama, "
              },
              {
                "-id": "0-18-36",
                "#text": "portrayed her as distant from middle-class Americans and sought to persuade women that they do not need to support her because of her gender.,"
              },
              {
                "-id": "0-18-37",
                "span": {
                  "-class": "negative",
                  "#text": "But many, essentially, struck the same theme, depicting Mrs. Clinton as untrustworthy, an image that even Democrats supporting the Clinton campaign acknowledge is a weakness"
                },
                "#text": ". "
              },
              {
                "-id": "0-18-38",
                "span": {
                  "-class": "negative",
                  "#text": "About 57 percent of Americans do not believe Mrs. Clinton is honest and trustworthy, according to"
                },
                "#text": " ,.,\""
              },
              {
                "-id": "0-18-39",
                "span": {
                  "-class": "negative",
                  "#text": "She's got an open wound, and part of our job is to pour salt in it"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-18-40",
                "#text": "said Glen Bolger, a co-founder of Public Opinion Strategies, the Republican polling firm that conducted the focus groups.,"
              },
              {
                "-id": "0-18-41",
                "#text": "Mrs. "
              },
              {
                "-id": "0-18-42",
                "#text": [
                  "Clinton's allies point to ",
                  " in the 1992 and 1996 elections and his ability to ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "relatively low trust numbers for Mr. Clinton"
                  },
                  {
                    "-class": "negative",
                    "#text": "win voters despite his personal failings"
                  }
                ]
              },
              {
                "-id": "0-18-43",
                "#text": "An ad titled \""
              },
              {
                "-id": "0-18-44",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Shadow,\"?which ranked among the most effective ads that Crossroads"
                  },
                  {
                    "-class": "negative",
                    "#text": "argued"
                  },
                  {
                    "-class": "negative",
                    "#text": "scandal trailed Mrs. Clinton like a menacing shadow"
                  }
                ],
                "#text": [
                  " tested in Orlando, ",
                  " that ",
                  ". \""
                ]
              },
              {
                "-id": "0-18-45",
                "span": {
                  "-class": "negative",
                  "#text": "Whitewater, Travelgate and Filegate,\"?a narrator began, referring to scandals from decades ago, including one over a real estate deal"
                },
                "#text": ". "
              },
              {
                "-id": "0-18-46",
                "span": {
                  "-class": "negative",
                  "#text": "Then the narrator moved on to more recent controversies, including her deleted emails, the foreign donations to her family foundation and the four Americans killed in the 2012 attacks on the United States compound in Benghazi"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-47",
                "#text": "Libya.,\""
              },
              {
                "-id": "0-18-48",
                "span": {
                  "-class": "negative",
                  "#text": "There's a sense of distrust, a sense of unease about her authenticity and her candor"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-49",
                "span": {
                  "-class": "negative",
                  "#text": "that isn't hard to stimulate,\"?said Steven Law, the president of Crossroads"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-50",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "In modern campaigns"
                  },
                  {
                    "-class": "negative",
                    "#text": "given the fragmented way media is consumed"
                  }
                ],
                "#text": [
                  ", ",
                  ", television ads are important but not always enough to create a narrative, "
                ]
              },
              {
                "-id": "0-18-51",
                "#text": "especially over a long period.,"
              },
              {
                "-id": "0-18-52",
                "#text": "Crossroads plans to use a kaleidoscopic approach for its anti-Clinton campaign. "
              },
              {
                "-id": "0-18-53",
                "#text": "In order to target particular voters with tailored messages, the campaign will feature tools including television and radio spots, "
              },
              {
                "-id": "0-18-54",
                "#text": "digital ads on mobile devices, and pre-roll, the commercials that play before videos online.,"
              },
              {
                "-id": "0-18-55",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Crossroads is eager to"
                  },
                  {
                    "-class": "negative",
                    "#text": "leading attack dog against Mrs. Clinton"
                  }
                ],
                "#text": [
                  " establish itself as the ",
                  ", ,, especially as other , "
                ]
              },
              {
                "-id": "0-18-56",
                "#text": "are emerging as bigger players in the Republican money world.,"
              },
              {
                "-id": "0-18-57",
                "span": {
                  "-class": "positive",
                  "#text": "Right to Rise, a super PAC supporting former Gov"
                },
                "#text": ". "
              },
              {
                "-id": "0-18-58",
                "#text": "Jeb Bush of Florida, recently held its own briefing for Republican groups to highlight data it gathered from its own focus groups and polling of women, "
              },
              {
                "-id": "0-18-59",
                "#text": "information "
              },
              {
                "-id": "0-18-60",
                "span": {
                  "-class": "negative",
                  "#text": "that can be used in attacks against Mrs. Clinton"
                },
                "#text": ". "
              },
              {
                "-id": "0-18-61",
                "#text": "It stressed that Mrs. Clinton's \""
              },
              {
                "-id": "0-18-62",
                "span": {
                  "-class": "positive",
                  "#text": "dead broke"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-18-63",
                "span": {
                  "-class": "negative",
                  "#text": "comments were particularly devastating"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-64",
                "#text": "as were her deleted emails, "
              },
              {
                "-id": "0-18-65",
                "#text": "though they required more explanation. "
              },
              {
                "-id": "0-18-66",
                "span": {
                  "-class": "negative",
                  "#text": "Though the Clintons were in fact dealing with debt and legal fees"
                }
              },
              {
                "-id": "0-18-67",
                "#text": "when they left the White House, ,In addition, America Rising PAC, an opposition research group that focuses heavily on attacking Mrs. Clinton, "
              },
              {
                "-id": "0-18-68",
                "#text": "began its effort with Twitter and other online posts more than a year ago before moving to paid digital ads.,"
              },
              {
                "-id": "0-18-69",
                "#text": "Mrs. "
              },
              {
                "-id": "0-18-70",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's campaign and Democratic groups believe that attacks on her trustworthiness"
                }
              },
              {
                "-id": "0-18-71",
                "span": {
                  "-class": "negative",
                  "#text": "and wealth could be the most damaging"
                }
              },
              {
                "-id": "0-18-72",
                "#text": "if they do not aggressively combat them. "
              },
              {
                "-id": "0-18-73",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Rather than debating policies"
                  },
                  {
                    "-class": "positive",
                    "#text": "help working Americans"
                  }
                ],
                "#text": [
                  " that would ",
                  ", \""
                ]
              },
              {
                "-id": "0-18-74",
                "#text": "they're trying to make her Mitt Romney in a pantsuit,\"?said David Brock, the founder of several pro-Clinton outside groups and author of the forthcoming book, \""
              },
              {
                "-id": "0-18-75",
                "span": {
                  "-class": "negative",
                  "#text": "Killing the Messenger"
                },
                "#text": ": "
              },
              {
                "-id": "0-18-76",
                "#text": "The Right Wing Plot to Derail Hillary and Hijack Your Government.\""
              },
              {
                "-id": "0-18-77",
                "#text": [
                  "The Clinton campaign has also tried to ",
                  " by ",
                  " that while the ",
                  " how Mrs. Clinton handled her email as secretary of state, "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "turn the trust issue around"
                  },
                  {
                    "-class": "negative",
                    "#text": "arguing"
                  },
                  {
                    "-class": "positive",
                    "#text": "opposition tries to make voters distrust"
                  }
                ]
              },
              {
                "-id": "0-18-78",
                "span": {
                  "-class": "positive",
                  "#text": "they can trust her"
                },
                "#text": " more than Republicans to look out for middle-class Americans.,"
              },
              {
                "-id": "0-18-79",
                "span": {
                  "-class": "negative",
                  "#text": "Christina Reynolds, a spokeswoman for the campaign, said billionaires funding the attacks"
                },
                "#text": " \""
              },
              {
                "-id": "0-18-80",
                "#text": [
                  "are committed to keeping the policies in place that keep the deck ",
                  " of the voters she talks to around the country.\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "stacked in favor of them at the expense"
                }
              },
              {
                "-id": "0-18-81",
                "span": {
                  "-class": "negative",
                  "#text": "Democratic political groups, of course, will undertake their own offensive to attack a Republican nominee or front-runner"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-82",
                "#text": "much as they did with Mr. Romney. "
              },
              {
                "-id": "0-18-83",
                "span": {
                  "-class": "negative",
                  "#text": "But their task has been made more difficult by the large and uncertain Republican field"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-84",
                "span": {
                  "-class": "positive",
                  "#text": "Both sides agree"
                },
                "#text": " that the work undertaken long before the election, often in the year before it, "
              },
              {
                "-id": "0-18-85",
                "span": {
                  "-class": "negative",
                  "#text": "creates the foundation for the most damaging attacks"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-86",
                "#text": "Ahead of the 2004 election, Mr. Rove and others involved in President George W. "
              },
              {
                "-id": "0-18-87",
                "span": {
                  "-class": "negative",
                  "#text": "Bush's re-election campaign tried to convince voters that Senator John Kerry was an opportunistic flip-flopper"
                },
                "#text": ". "
              },
              {
                "-id": "0-18-88",
                "#text": "The critique did not catch on until March of that year, "
              },
              {
                "-id": "0-18-89",
                "#text": "when Mr. Kerry, in response to a question about funding for the military operations in Iraq and Afghanistan, "
              },
              {
                "-id": "0-18-90",
                "#text": "said he \""
              },
              {
                "-id": "0-18-91",
                "#text": "actually did vote for the $87 billion before I voted against it.\"\""
              },
              {
                "-id": "0-18-92",
                "#text": "The groundwork had been laid pointing out all the examples of flip-flopping in the past,\"?"
              },
              {
                "-id": "0-18-93",
                "#text": "said Colin Reed, the executive director of America Rising.,"
              },
              {
                "-id": "0-18-94",
                "#text": "Republicans could hardly hide their giddiness when Mrs. Clinton made her \""
              },
              {
                "-id": "0-18-95",
                "span": {
                  "-class": "positive",
                  "#text": "dead broke"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-18-96",
                "#text": "remark last year. "
              },
              {
                "-id": "0-18-97",
                "#text": "To many in the political world, the comment evoked Mr. Romney's misstep at a 2012 fund-raiser "
              },
              {
                "-id": "0-18-98",
                "#text": "where he said \""
              },
              {
                "-id": "0-18-99",
                "#text": "47 percent\"?"
              },
              {
                "-id": "0-18-100",
                "span": {
                  "-class": "negative",
                  "#text": "of Americans were overly dependent on government"
                },
                "#text": ".,"
              },
              {
                "-id": "0-18-101",
                "#text": [
                  "Long before Mr. Romney made that comment, Priorities USA Action, the Democratic ",
                  ", ",
                  " as \""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "super PAC"
                  },
                  {
                    "-class": "positive",
                    "#text": "had devoted months to portraying the Republican candidate"
                  }
                ]
              },
              {
                "-id": "0-18-102",
                "span": {
                  "-class": "negative",
                  "#text": "a plutocrat who doesn't care about people like you,\"?said Bill Burton, a Priorities co-founder"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-18-103",
                "span": {
                  "-class": "positive",
                  "#text": "The best thing you can do is set the table for a key vulnerability"
                },
                "#text": " and hope the candidate lives up to the hype, "
              },
              {
                "-id": "0-18-104",
                "#text": "which they likely will do,\"?Mr. "
              },
              {
                "-id": "0-18-105",
                "#text": "Burton said.,"
              },
              {
                "-id": "0-18-106",
                "#text": "In Orlando, the \""
              },
              {
                "-id": "0-18-107",
                "span": {
                  "-class": "positive",
                  "#text": "dead broke"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-18-108",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "ad emerged as the most effective spot"
                  },
                  {
                    "-class": "negative",
                    "#text": "it captured the gulf between Mrs. Clinton's life"
                  },
                  {
                    "-class": "negative",
                    "#text": "of the less affluent people gathered"
                  }
                ],
                "#text": [
                  ", partly because ",
                  " and those ",
                  ".,\""
                ]
              },
              {
                "-id": "0-18-109",
                "span": {
                  "-class": "negative",
                  "#text": "She's broke at another level,\"?said one man"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-110",
                "#text": "who owns an electrical company and makes less than $50,000 annually. \""
              },
              {
                "-id": "0-18-111",
                "span": {
                  "-class": "negative",
                  "#text": "She could be broke"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-112",
                "#text": "you know, compared to the people in her world. "
              },
              {
                "-id": "0-18-113",
                "#text": "O."
              },
              {
                "-id": "0-18-114",
                "#text": "K., "
              },
              {
                "-id": "0-18-115",
                "#text": "in her status. \""
              },
              {
                "-id": "0-18-116",
                "#text": "Oh, my God, I can't buy a jet this year \"?"
              },
              {
                "-id": "0-18-117",
                "span": {
                  "-class": "negative",
                  "#text": "we're broke"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-118",
                "span": {
                  "-class": "negative",
                  "#text": "we're not going to Europe, sorry"
                },
                "#text": ".'\"?"
              },
              {
                "-id": "0-18-119",
                "#text": "Another ad that resonated, called \""
              },
              {
                "-id": "0-18-120",
                "#text": "Throw Away,\"?opens with Mrs. Clinton saying she never throws anything away and is \""
              },
              {
                "-id": "0-18-121",
                "span": {
                  "-class": "positive",
                  "#text": "two steps short of a hoarder"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-18-122",
                "#text": "before a narrator points out that she deleted about 30,000 emails from her time at the State Department.,"
              },
              {
                "-id": "0-18-123",
                "#text": "But Crossroads still has some fine-tuning to do. "
              },
              {
                "-id": "0-18-124",
                "span": {
                  "-class": "negative",
                  "#text": "A few women watching expressed sympathy for Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-18-125",
                "#text": "saying they sometimes felt like hoarders, too, and often deleted spam and other personal emails. "
              },
              {
                "-id": "0-18-126",
                "#text": "Maybe that was what Mrs. Clinton had done?,\""
              },
              {
                "-id": "0-18-127",
                "#text": "They could have been from Bed Bath & Beyond,\"?one woman said of the emails. \""
              },
              {
                "-id": "0-18-128",
                "#text": "Who knows?\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-19-0",
              "#text": "1436598000852"
            }
          },
          {
            "a": [
              {
                "-id": "0-20-0",
                "span": {
                  "-class": "positive",
                  "#text": "In honor of Gay Pride Month in June, ,'s campaign held a"
                },
                "#text": " \""
              },
              {
                "-id": "0-20-1",
                "#text": "Broadway Brunches\"?"
              },
              {
                "-id": "0-20-2",
                "#text": "fund-raiser in Manhattan, featuring a performance from the stars of the drag queen musical \""
              },
              {
                "-id": "0-20-3",
                "#text": "Kinky Boots.\""
              },
              {
                "-id": "0-20-4",
                "#text": "The campaign also opened a \""
              },
              {
                "-id": "0-20-5",
                "span": {
                  "-class": "positive",
                  "#text": "Pride"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-20-6",
                "#text": "section on its website, , including a \""
              },
              {
                "-id": "0-20-7",
                "span": {
                  "-class": "positive",
                  "#text": "Loud and Proud"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-20-8",
                "#text": "shirt with a young Hillary with a bob haircut silk-screened, Andy Warhol-style, against a yellow background. "
              },
              {
                "-id": "0-20-9",
                "span": {
                  "-class": "negative",
                  "#text": "Later in the month, Mrs. Clinton posed with Lady Gaga at a fund-raiser"
                },
                "#text": ", and her campaign promoted a kitschy pro-Clinton video made by the gay quartet Well-Strung.,"
              },
              {
                "-id": "0-20-10",
                "#text": "Mrs. "
              },
              {
                "-id": "0-20-11",
                "#text": "Clinton does not have the most cutting-edge record when it comes to gay rights. "
              },
              {
                "-id": "0-20-12",
                "#text": "She did not speak out on behalf of , until 2013. "
              },
              {
                "-id": "0-20-13",
                "#text": "But what she lacks on the policy front, "
              },
              {
                "-id": "0-20-14",
                "span": {
                  "-class": "positive",
                  "#text": "she is trying to make up for partly with a tongue-in-cheek recognition that in her decades in the public eye she has developed a certain pop culture status"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-15",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "particularly among some gay men who identify with her triumphs"
                  },
                  {
                    "-class": "negative",
                    "#text": "adversity"
                  },
                  {
                    "-class": "positive",
                    "#text": "her redemption, and her evolving personal style"
                  }
                ],
                "#text": [
                  " over ",
                  ", ",
                  ".,"
                ]
              },
              {
                "-id": "0-20-16",
                "#text": "The difference between her current campaign and her 2008 effort is that Mrs. Clinton, "
              },
              {
                "-id": "0-20-17",
                "#text": "67, seems to be playing up this cultural connection, "
              },
              {
                "-id": "0-20-18",
                "#text": "whether it is making jokes about being a \""
              },
              {
                "-id": "0-20-19",
                "#text": "hair icon\"?"
              },
              {
                "-id": "0-20-20",
                "span": {
                  "-class": "positive",
                  "#text": "or sending around the Well-Strung tribute video on social media"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-20-21",
                "span": {
                  "-class": "positive",
                  "#text": "She's having fun with it and winking back at the audience"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-22",
                "#text": "which is a nice part of the evolution to see,\"?said Greg Berlanti, a television writer and producer.,"
              },
              {
                "-id": "0-20-23",
                "#text": "Mr. "
              },
              {
                "-id": "0-20-24",
                "span": {
                  "-class": "positive",
                  "#text": "Berlanti, a Clinton supporter best known for his work on the show"
                },
                "#text": " \""
              },
              {
                "-id": "0-20-25",
                "#text": "Dawson's Creek,\"?"
              },
              {
                "-id": "0-20-26",
                "span": {
                  "-class": "positive",
                  "#text": "is one of many Hollywood writers inspired by Mrs. Clinton's arc"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-27",
                "#text": "He created \""
              },
              {
                "-id": "0-20-28",
                "#text": "Political Animals,\"?a 2012 mini-series on the USA Network in which Sigourney Weaver portrayed a former first lady (married to a philandering Southern husband) who runs for president, "
              },
              {
                "-id": "0-20-29",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "loses to a charismatic man"
                  },
                  {
                    "-class": "positive",
                    "#text": "state and plots her comeback"
                  }
                ],
                "#text": [
                  ", serves as his secretary of ",
                  ". "
                ]
              },
              {
                "-id": "0-20-30",
                "#text": "Sound familiar?,"
              },
              {
                "-id": "0-20-31",
                "#text": "On Thursday, Mrs. Clinton will attend a fund-raiser in Provincetown, Mass., "
              },
              {
                "-id": "0-20-32",
                "span": {
                  "-class": "positive",
                  "#text": "hosted by Alix Ritchie, a prominent gay rights activist, and Bryan Rafanelli, an event planner who oversaw"
                },
                "#text": " ,.,"
              },
              {
                "-id": "0-20-33",
                "#text": "The seaside enclave, often called \""
              },
              {
                "-id": "0-20-34",
                "#text": "P-town\"?\"?"
              },
              {
                "-id": "0-20-35",
                "#text": "in the state that was the first to legalize , \"?"
              },
              {
                "-id": "0-20-36",
                "span": {
                  "-class": "positive",
                  "#text": "has long been a Shangri-La for gays, and the event will highlight Mrs. Clinton's ties to the powerful gay Democratic donors who vacation there"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-37",
                "#text": "The 2012 census reported that Provincetown had 163.1 same-sex couples per 1,000 people, the most of any city or town nationwide.,"
              },
              {
                "-id": "0-20-38",
                "span": {
                  "-class": "positive",
                  "#text": "As some Republican presidential candidates issued measured responses to the Supreme Court's decision on Friday"
                },
                "#text": " , "
              },
              {
                "-id": "0-20-39",
                "span": {
                  "-class": "positive",
                  "#text": "and others , in the name of religious freedom, Mrs. Clinton was effusive in her praise"
                },
                "#text": ".,"
              },
              {
                "-id": "0-20-40",
                "#text": "She called the ruling a \""
              },
              {
                "-id": "0-20-41",
                "span": {
                  "-class": "positive",
                  "#text": "historic victory"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-20-42",
                "span": {
                  "-class": "positive",
                  "#text": "and celebrated"
                },
                "#text": " \""
              },
              {
                "-id": "0-20-43",
                "span": {
                  "-class": "positive",
                  "#text": "the courage and determination of L"
                },
                "#text": "."
              },
              {
                "-id": "0-20-44",
                "#text": "G."
              },
              {
                "-id": "0-20-45",
                "#text": "B."
              },
              {
                "-id": "0-20-46",
                "#text": "T. "
              },
              {
                "-id": "0-20-47",
                "#text": "Americans who made it possible.\"?"
              },
              {
                "-id": "0-20-48",
                "span": {
                  "-class": "positive",
                  "#text": "Her campaign gave out free bumper stickers with the"
                },
                "#text": " \""
              },
              {
                "-id": "0-20-49",
                "#text": "H\"?"
              },
              {
                "-id": "0-20-50",
                "#text": "logo in rainbow colors spelling out the word \""
              },
              {
                "-id": "0-20-51",
                "#text": "History\"?"
              },
              {
                "-id": "0-20-52",
                "span": {
                  "-class": "positive",
                  "#text": "and had a huge presence at pride parades across the country, including four such events in Iowa"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-53",
                "#text": "Chelsea Clinton and much of the Brooklyn-based campaign staff attended the New York City parade.,"
              },
              {
                "-id": "0-20-54",
                "span": {
                  "-class": "positive",
                  "#text": "Of course, gay life is incredibly diverse, and the clichÃ© of the strong woman with diva appeal does not speak to everyone"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-55",
                "span": {
                  "-class": "negative",
                  "#text": "or cancel out more substantive concerns about Mrs. Clinton's policy positions"
                },
                "#text": ". ("
              },
              {
                "-id": "0-20-56",
                "span": {
                  "-class": "negative",
                  "#text": "It could also offend some voters"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-57",
                "#text": "if not delicately managed.),"
              },
              {
                "-id": "0-20-58",
                "span": {
                  "-class": "negative",
                  "#text": "Some people criticized Mrs. Clinton's response to the court's same-sex marriage ruling as politically opportunistic and overkill"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-59",
                "#text": "given her relatively late arrival to the cause. \""
              },
              {
                "-id": "0-20-60",
                "#text": "Shout out to , who opposed gay marriage until 2013. "
              },
              {
                "-id": "0-20-61",
                "#text": [
                  "Truly a ",
                  ",\"?Hamilton Nolan, a writer at Gawker, ,.,",
                  " of Marriage Act "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "visionary"
                  },
                  {
                    "-class": "positive",
                    "#text": "Others pointed to President Bill Clinton's signing of the Defense"
                  }
                ]
              },
              {
                "-id": "0-20-62",
                "span": {
                  "-class": "negative",
                  "#text": "and Don't Ask Don't Tell, two of the most significant setbacks in the modern gay rights movement"
                },
                "#text": ". ("
              },
              {
                "-id": "0-20-63",
                "#text": "Mr. "
              },
              {
                "-id": "0-20-64",
                "#text": "Clinton has said he regretted those measures, and Mrs. Clinton has said she has \""
              },
              {
                "-id": "0-20-65",
                "#text": "evolved\"?"
              },
              {
                "-id": "0-20-66",
                "span": {
                  "-class": "positive",
                  "#text": "to become a forceful advocate of same-sex marriage and measures to prevent discrimination"
                },
                "#text": " against lesbian, "
              },
              {
                "-id": "0-20-67",
                "#text": "gay, bisexual and transgender people.),"
              },
              {
                "-id": "0-20-68",
                "span": {
                  "-class": "negative",
                  "#text": "It is hard to measure gay support for candidates"
                },
                "#text": "; "
              },
              {
                "-id": "0-20-69",
                "#text": "until recently, most pollsters did not collect that data. "
              },
              {
                "-id": "0-20-70",
                "#text": [
                  "But in the 2008 Democratic primaries, voters who identified as gay, lesbian or ",
                  " over Senator Barack Obama by 23 percentage points in New York and by 34 points in California, "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "bisexual favored Mrs. Clinton"
                }
              },
              {
                "-id": "0-20-71",
                "#text": "the only states that asked voters about their sexual orientation in exit polls.,"
              },
              {
                "-id": "0-20-72",
                "#text": "In the four years she served as secretary of state, Mrs. Clinton prioritized gay rights, , "
              },
              {
                "-id": "0-20-73",
                "span": {
                  "-class": "positive",
                  "#text": "in which she urged nations to accept gays and lesbians"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-74",
                "#text": "She has now made the issue central to her 2016 campaign. ("
              },
              {
                "-id": "0-20-75",
                "#text": [
                  "Her campaign manager, Robby Mook, is the ",
                  " in a major presidential campaign.),"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "first openly gay man to hold the top role"
                }
              },
              {
                "-id": "0-20-76",
                "#text": "The biggest applause lines of Mrs. Clinton's June 13 speech in New York that signified the official start of her campaign were about gay rights issues, "
              },
              {
                "-id": "0-20-77",
                "#text": "including this zinger about Republicans: \""
              },
              {
                "-id": "0-20-78",
                "span": {
                  "-class": "positive",
                  "#text": "They turn their backs on gay people who love each other"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-20-79",
                "span": {
                  "-class": "positive",
                  "#text": "she said to raucous cheers"
                },
                "#text": ".,"
              },
              {
                "-id": "0-20-80",
                "#text": "Several of Mrs. Clinton's gay supporters cautioned against generalizations. "
              },
              {
                "-id": "0-20-81",
                "span": {
                  "-class": "positive",
                  "#text": "But at the same time, they suggested that there was something visceral about Mrs. Clinton's appeal to some of her most ardent gay supporters"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-82",
                "#text": "The campaign's positioning of Mrs. Clinton as a \""
              },
              {
                "-id": "0-20-83",
                "#text": "fighter\"?"
              },
              {
                "-id": "0-20-84",
                "#text": "plays into this idea.,\""
              },
              {
                "-id": "0-20-85",
                "#text": [
                  "She has had to overcome a whole lot of setbacks and ",
                  ", literally, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "personal attacks"
                }
              },
              {
                "-id": "0-20-86",
                "#text": "since she came into public life,\"?said Chad Griffin, the president of the , and a former Clinton aide. \""
              },
              {
                "-id": "0-20-87",
                "#text": "If you look at the L."
              },
              {
                "-id": "0-20-88",
                "#text": "G."
              },
              {
                "-id": "0-20-89",
                "#text": "B."
              },
              {
                "-id": "0-20-90",
                "#text": "T. "
              },
              {
                "-id": "0-20-91",
                "#text": "experience, there are a lot of parallels.\""
              },
              {
                "-id": "0-20-92",
                "#text": "George Chauncey Jr., a professor of history "
              },
              {
                "-id": "0-20-93",
                "#text": "and American studies at Yale and author of \",,\"?"
              },
              {
                "-id": "0-20-94",
                "span": {
                  "-class": "negative",
                  "#text": "said that while he had not noticed his students to be particularly enthusiastic about Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-95",
                "span": {
                  "-class": "positive",
                  "#text": "that resonance of the long-suffering woman with older gay men, in particular, cannot be underestimated"
                },
                "#text": ".,"
              },
              {
                "-id": "0-20-96",
                "span": {
                  "-class": "negative",
                  "#text": "He pointed to Judy Garland, her tortured relationship with men, her alcohol addiction and the heartbreak felt in her songs"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-20-97",
                "#text": "That really resonated with many gay men in a period "
              },
              {
                "-id": "0-20-98",
                "#text": "when they did face a lot of anguish themselves, because there was such widespread hostility and discrimination,\"?"
              },
              {
                "-id": "0-20-99",
                "#text": "Mr. "
              },
              {
                "-id": "0-20-100",
                "#text": "Chauncey said. \""
              },
              {
                "-id": "0-20-101",
                "span": {
                  "-class": "positive",
                  "#text": "We can laugh at it, but these were really powerful anthems for gay men, and there is something really powerful about that connection"
                },
                "#text": ".\""
              },
              {
                "-id": "0-20-102",
                "#text": "Blake Drummond, 34, a freelance videographer, shot the tribute video in which Well-Strung sings \""
              },
              {
                "-id": "0-20-103",
                "#text": "Chelsea's Mom,\"?a variation of \""
              },
              {
                "-id": "0-20-104",
                "#text": "Stacy's Mom\"?"
              },
              {
                "-id": "0-20-105",
                "#text": "by the rock band Fountains of Wayne. ("
              },
              {
                "-id": "0-20-106",
                "#text": "As they dance in what is supposed to look like a campaign office, the band sings, \""
              },
              {
                "-id": "0-20-107",
                "span": {
                  "-class": "positive",
                  "#text": "She's sexy"
                },
                "#text": ", "
              },
              {
                "-id": "0-20-108",
                "#text": "and she's strong, "
              },
              {
                "-id": "0-20-109",
                "#text": "I'm gonna vote for Chelsea's mom.\"?,"
              },
              {
                "-id": "0-20-110",
                "span": {
                  "-class": "positive",
                  "#text": "At the New York City gay pride parade on Sunday, aides to Mrs. Clinton wore"
                },
                "#text": " \""
              },
              {
                "-id": "0-20-111",
                "#text": "Chelsea's Mom\"?"
              },
              {
                "-id": "0-20-112",
                "#text": "T-shirts as they marched.,"
              },
              {
                "-id": "0-20-113",
                "span": {
                  "-class": "negative",
                  "#text": "Still, Mr. Drummond said he was not ready to"
                },
                "#text": " support Mrs. Clinton. "
              },
              {
                "-id": "0-20-114",
                "span": {
                  "-class": "positive",
                  "#text": "He is eager to learn more about Senator Bernie Sanders"
                },
                "#text": " of Vermont, another challenger for the Democratic nomination.,"
              },
              {
                "-id": "0-20-115",
                "span": {
                  "-class": "positive",
                  "#text": "He did say that for a filmmaker, Mrs. Clinton's extraordinary career"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-20-116",
                "span": {
                  "-class": "negative",
                  "#text": "from embattled first lady to senator to secretary of state"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-20-117",
                "span": {
                  "-class": "positive",
                  "#text": "makes for an irresistible narrative"
                },
                "#text": ". \""
              },
              {
                "-id": "0-20-118",
                "span": {
                  "-class": "positive",
                  "#text": "Gay men love powerful women"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-20-119",
                "#text": "we just do,\"?"
              },
              {
                "-id": "0-20-120",
                "#text": "he said. \""
              },
              {
                "-id": "0-20-121",
                "span": {
                  "-class": "positive",
                  "#text": "Go back and look at icons of Liza and Barbra and the kinds of movies we like with big female actors"
                },
                "#text": ". "
              },
              {
                "-id": "0-20-122",
                "span": {
                  "-class": "negative",
                  "#text": "We understand their fights"
                },
                "#text": ".\""
              },
              {
                "-id": "0-20-123",
                "#text": "Mr. "
              },
              {
                "-id": "0-20-124",
                "#text": "Berlanti, the television writer, said he did not want to resort to the stereotype that \"gay men have strong moms and distant fathers.\""
              },
              {
                "-id": "0-20-125",
                "#text": "But he compared Mrs. Clinton's 2016 campaign to a theatrical denouement: \""
              },
              {
                "-id": "0-20-126",
                "#text": "If nothing else, in 10 to 15 years, we can count on the musical,\"?"
              },
              {
                "-id": "0-20-127",
                "#text": "he said. \""
              },
              {
                "-id": "0-20-128",
                "span": {
                  "-class": "positive",
                  "#text": "We want it to have the appropriate finish"
                },
                "#text": ".\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-21-0",
              "#text": "1435734000381"
            }
          },
          {
            "a": [
              {
                "-id": "0-22-0",
                "#text": "WASHINGTON \"? "
              },
              {
                "-id": "0-22-1",
                "span": {
                  "-class": "positive",
                  "#text": "In December 2009, toward the end of her first year as secretary of state, , agreed to a joint interview with perhaps her best-known living predecessor"
                },
                "#text": ", "
              },
              {
                "-id": "0-22-2",
                "#text": "Henry Kissinger.,"
              },
              {
                "-id": "0-22-3",
                "#text": "As she pondered the encounter, "
              },
              {
                "-id": "0-22-4",
                "#text": "she began to worry that her distant relationship with President Obama, "
              },
              {
                "-id": "0-22-5",
                "#text": "who beat her for their party's presidential nomination, "
              },
              {
                "-id": "0-22-6",
                "#text": "might contrast unfavorably with Mr. Kissinger's close collaboration with President Richard M. "
              },
              {
                "-id": "0-22-7",
                "#text": "Nixon.,\""
              },
              {
                "-id": "0-22-8",
                "#text": "In thinking about the Kissinger interview, the only issue I think that might be raised is that I see POTUS at least once a week while K saw Nixon every day,\"?"
              },
              {
                "-id": "0-22-9",
                "#text": "she wrote in an email to aides, using the acronym for the president of the United States. \""
              },
              {
                "-id": "0-22-10",
                "#text": "Of course, if I were dealing w that POTUS I'd probably camp in his office to prevent him from doing something problematic,\"?"
              },
              {
                "-id": "0-22-11",
                "#text": "she added cheekily before returning to the main point: \""
              },
              {
                "-id": "0-22-12",
                "span": {
                  "-class": "negative",
                  "#text": "Do you see this as a problem"
                },
                "#text": "?\""
              },
              {
                "-id": "0-22-13",
                "#text": "She evidently did, at least potentially, "
              },
              {
                "-id": "0-22-14",
                "#text": "then went ahead with the interview. "
              },
              {
                "-id": "0-22-15",
                "span": {
                  "-class": "negative",
                  "#text": "But her concern reflected the awkward marriage of former rivals at the start of the Obama presidency"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-16",
                "#text": "The release this week of about 3,000 pages of emails from Mrs. Clinton's first year at the State Department presents a rare glimpse into the daily life of a secretary of state \"?"
              },
              {
                "-id": "0-22-17",
                "#text": "especially one whose tenure will be at the heart of a campaign to win the presidency, "
              },
              {
                "-id": "0-22-18",
                "#text": "which eluded Mrs. Clinton seven years ago.,"
              },
              {
                "-id": "0-22-19",
                "span": {
                  "-class": "positive",
                  "#text": "Trying to find her place at the head of a cabinet run by the man who had vanquished her"
                },
                "#text": ", "
              },
              {
                "-id": "0-22-20",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton nursed concerns about"
                }
              },
              {
                "-id": "0-22-21",
                "#text": "whether she was in the right meetings and whether the president or his people were holding grudges against those who had supported her during their epic 2008 primary contest. "
              },
              {
                "-id": "0-22-22",
                "span": {
                  "-class": "negative",
                  "#text": "She traded messages with political advisers who sent her sometimes scathing assessments of the president she now served"
                },
                "#text": ", "
              },
              {
                "-id": "0-22-23",
                "span": {
                  "-class": "positive",
                  "#text": "although she was careful not to respond in kind"
                },
                "#text": " in writing.,"
              },
              {
                "-id": "0-22-24",
                "#text": "While Mrs. Clinton's portfolio was foreign policy, a former adviser made sure that she knew when Mr. Obama reversed his campaign position to embrace a version of a , "
              },
              {
                "-id": "0-22-25",
                "#text": "that he had criticized "
              },
              {
                "-id": "0-22-26",
                "#text": "when she advocated it. "
              },
              {
                "-id": "0-22-27",
                "span": {
                  "-class": "positive",
                  "#text": "And like most politicians, Mrs. Clinton paid careful attention to her press clippings, even fretting over an article buried on Page A8 of a newspaper that mentioned her old campaign spending and pressing for a correction"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-22-28",
                "#text": "I can't tell if anyone is listening to Obama at un,\"?Mark Penn, her former campaign strategist, "
              },
              {
                "-id": "0-22-29",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "wrote to her in September 2009, referring to the United Nations"
                  },
                  {
                    "-class": "negative",
                    "#text": "lack of clear Afghanistan policy is unwinding the coalition"
                  },
                  {
                    "-class": "negative",
                    "#text": "threatens to cause a massive deer in headlights problem"
                  }
                ],
                "#text": [
                  ", \"but the ",
                  " and ",
                  " for administration if not resolved soon.\""
                ]
              },
              {
                "-id": "0-22-30",
                "#text": "Mr. "
              },
              {
                "-id": "0-22-31",
                "#text": "Penn suggested thoughts for a speech by Mrs. Clinton, which she forwarded to aides. \""
              },
              {
                "-id": "0-22-32",
                "#text": "Overlook the source,\"?she wrote, "
              },
              {
                "-id": "0-22-33",
                "#text": "knowing "
              },
              {
                "-id": "0-22-34",
                "#text": "that Mr. Penn was not popular among other Clinton advisers, \"but idea "
              },
              {
                "-id": "0-22-35",
                "#text": "that I should do a topper on timely events and make case is probably right.\""
              },
              {
                "-id": "0-22-36",
                "span": {
                  "-class": "negative",
                  "#text": "Other than those related to the 2012 terrorist attacks in Benghazi, Libya"
                },
                "#text": ", the messages released by the State Department on Tuesday night represented just the first tranche of more than 50,000 pages to be disclosed in the coming months. "
              },
              {
                "-id": "0-22-37",
                "#text": "Moreover, Mrs. Clinton deleted tens of thousands of other messages that she said were personal.,"
              },
              {
                "-id": "0-22-38",
                "span": {
                  "-class": "negative",
                  "#text": "So conclusions at this point would be incomplete"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-39",
                "#text": [
                  "But the messages made public so far ",
                  " that anything she wrote could someday be read by a wider audience. "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "reveal an exceedingly cautious politician acutely aware"
                }
              },
              {
                "-id": "0-22-40",
                "#text": "Most of Mrs. Clinton's messages were clipped, usually no more than two or three sentences, "
              },
              {
                "-id": "0-22-41",
                "#text": "dealing with schedules or setting up phone calls.,"
              },
              {
                "-id": "0-22-42",
                "span": {
                  "-class": "positive",
                  "#text": "The banality of some of the emails is striking given her stature as one of the world's most prominent figures"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-43",
                "#text": "She asked an aide to get her an iced tea. "
              },
              {
                "-id": "0-22-44",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "She engaged"
                  },
                  {
                    "-class": "negative",
                    "#text": "protracted struggle to get her fax machine"
                  }
                ],
                "#text": [
                  " in a ",
                  " to work. "
                ]
              },
              {
                "-id": "0-22-45",
                "#text": "She evidently did not have a printer "
              },
              {
                "-id": "0-22-46",
                "#text": "because she forwarded numerous messages to aides with the note, \"Pls print.\""
              },
              {
                "-id": "0-22-47",
                "span": {
                  "-class": "positive",
                  "#text": "Hints of personality emerge"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-48",
                "#text": "In a message with the subject line \""
              },
              {
                "-id": "0-22-49",
                "span": {
                  "-class": "negative",
                  "#text": "Don't laugh"
                },
                "#text": "!!\"?"
              },
              {
                "-id": "0-22-50",
                "#text": "she asked an aide to find out about the carpets in the room "
              },
              {
                "-id": "0-22-51",
                "#text": "where she met with China's leadership. "
              },
              {
                "-id": "0-22-52",
                "#text": "In another, when an aide reported that a Florida senator had stopped blocking a State Department nomination, "
              },
              {
                "-id": "0-22-53",
                "#text": "she jokingly asked what price had to be paid: \""
              },
              {
                "-id": "0-22-54",
                "#text": "Does this mean you have to go to Cuba and arrest Castro or just shovel more $ into Little Havana?\""
              },
              {
                "-id": "0-22-55",
                "#text": "When another aide, P. "
              },
              {
                "-id": "0-22-56",
                "#text": "J. "
              },
              {
                "-id": "0-22-57",
                "span": {
                  "-class": "positive",
                  "#text": "Crowley, complimented a coat she had been photographed wearing during a trip to Afghanistan"
                },
                "#text": " \"?\""
              },
              {
                "-id": "0-22-58",
                "#text": "its favorability rating was 77 percent,\"?"
              },
              {
                "-id": "0-22-59",
                "span": {
                  "-class": "positive",
                  "#text": "he said about an online poll it inspired"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-22-60",
                "#text": "she replied: \""
              },
              {
                "-id": "0-22-61",
                "#text": "Thx! "
              },
              {
                "-id": "0-22-62",
                "#text": "I bought the coat in Kabul in 03 and thought it should get a chance to go home for a visit!!\""
              },
              {
                "-id": "0-22-63",
                "#text": "The diplomat Richard C. "
              },
              {
                "-id": "0-22-64",
                "#text": "Holbrooke, a longtime friend who has since died, provided fodder for others who knew of his aspirations for her job. "
              },
              {
                "-id": "0-22-65",
                "span": {
                  "-class": "negative",
                  "#text": "After she fell and injured her elbow, former Secretary of State Colin L"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-66",
                "#text": "Powell sent her a message: \""
              },
              {
                "-id": "0-22-67",
                "#text": "Hillary, Is it true that Holbrooke tripped you? "
              },
              {
                "-id": "0-22-68",
                "#text": "Just kidding.\""
              },
              {
                "-id": "0-22-69",
                "#text": "John D. "
              },
              {
                "-id": "0-22-70",
                "#text": "Podesta, a White House chief of staff to President Bill Clinton who is now chairman of Mrs. Clinton's presidential campaign, "
              },
              {
                "-id": "0-22-71",
                "#text": "had the same thought. \""
              },
              {
                "-id": "0-22-72",
                "#text": "No matter what anybody says, "
              },
              {
                "-id": "0-22-73",
                "span": {
                  "-class": "negative",
                  "#text": "we refuse to believe that Holbrooke tripped you"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-22-74",
                "#text": "he wrote to her.,"
              },
              {
                "-id": "0-22-75",
                "#text": "In a few instances, Mrs. Clinton asked aides what could be done to help, for instance, "
              },
              {
                "-id": "0-22-76",
                "span": {
                  "-class": "negative",
                  "#text": "a 10-year-old Yemeni girl who felt oppressed"
                },
                "#text": ", or a Turkish Kurd who was about to be sent back to a country "
              },
              {
                "-id": "0-22-77",
                "#text": "where he had been tortured, or Christians under siege in Iraq. "
              },
              {
                "-id": "0-22-78",
                "span": {
                  "-class": "negative",
                  "#text": "But for the most part, she seemed to deal with substantive questions by telephone and rarely showed her hand in writing"
                },
                "#text": ".,"
              },
              {
                "-id": "0-22-79",
                "#text": "Still, she stayed in touch with outside political advisers like Mr. Penn and Sidney Blumenthal, "
              },
              {
                "-id": "0-22-80",
                "#text": "who wanted a State Department job but was rejected by Mr. Obama's White House. "
              },
              {
                "-id": "0-22-81",
                "#text": "Mr. Blumenthal sent long memos trying to shape her image, suggesting themes for speeches and passing along messages from people like Gordon Brown, "
              },
              {
                "-id": "0-22-82",
                "#text": "then the British prime minister.,"
              },
              {
                "-id": "0-22-83",
                "span": {
                  "-class": "positive",
                  "#text": "While aides have said Mr. Blumenthal's input was not solicited, Mrs. Clinton seemed to welcome his advice and insights"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-84",
                "#text": "At different points, each sent a message after 10 p.m. asking if the other was awake and available for a phone call. "
              },
              {
                "-id": "0-22-85",
                "#text": "Mrs. Clinton also heard from Mr. Penn, "
              },
              {
                "-id": "0-22-86",
                "#text": "who scorned Mr. Obama's Afghanistan policy. "
              },
              {
                "-id": "0-22-87",
                "span": {
                  "-class": "negative",
                  "#text": "Any consideration of downgrading the Taliban"
                },
                "#text": " as a focus of American military efforts, Mr. Penn wrote her, \""
              },
              {
                "-id": "0-22-88",
                "span": {
                  "-class": "negative",
                  "#text": "defies the imagination"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-22-89",
                "#text": "and would make the administration \""
              },
              {
                "-id": "0-22-90",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "vulnerable to losing moderate support"
                  },
                  {
                    "-class": "negative",
                    "#text": "seeming weak and indecisive"
                  }
                ],
                "#text": [
                  " and ",
                  ".\""
                ]
              },
              {
                "-id": "0-22-91",
                "#text": "But the White House was always hovering overhead. "
              },
              {
                "-id": "0-22-92",
                "#text": "When Mrs. Clinton went on NBC's \""
              },
              {
                "-id": "0-22-93",
                "#text": "Meet the Press,\"?Mr. "
              },
              {
                "-id": "0-22-94",
                "#text": "Obama's advisers insisted on briefing her first. "
              },
              {
                "-id": "0-22-95",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton seemed intent on avoiding any public reports of friction with the White House"
                },
                "#text": ". "
              },
              {
                "-id": "0-22-96",
                "#text": "One aide, aware of this sensitivity, sent her an article after the television appearance that, in the aide's recounting, \""
              },
              {
                "-id": "0-22-97",
                "#text": "says you and the President are closer than any administration in recent memory.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-23-0",
              "#text": "1435734000165"
            }
          },
          {
            "a": [
              {
                "-id": "0-24-0",
                "#text": ",. He trailed , by as much as 50 points in the polls a few months ag"
              },
              {
                "-id": "0-24-1",
                "#text": "o, but he has pulled within 10 points in New Hampshire, according to some survey"
              },
              {
                "-id": "0-24-2",
                "span": {
                  "-class": "positive",
                  "#text": "s. He has doubled his support in Iowa over the last mo"
                },
                "#text": "nt"
              },
              {
                "-id": "0-24-3",
                "span": {
                  "-class": "positive",
                  "#text": "h. The signs of his support are palpa"
                },
                "#text": "bl"
              },
              {
                "-id": "0-24-4",
                "#text": "e: Last week, about 10,000 people attended an event in Madison, Wis"
              },
              {
                "-id": "0-24-5",
                "#text": "., and he announced , in the first three months of his campaig"
              },
              {
                "-id": "0-24-6",
                "span": {
                  "-class": "positive",
                  "#text": "n.,But the Sanders surge is about"
                },
                "#text": " to hit a wal"
              },
              {
                "-id": "0-24-7",
                "#text": "l: the rank and file of the Democratic primary electorat"
              },
              {
                "-id": "0-24-8",
                "#text": "e.,Senator Sanders is now doing nearly as well as Barack Obama did among liberal voters in 200"
              },
              {
                "-id": "0-24-9",
                "span": {
                  "-class": "positive",
                  "#text": "8. That makes him competitive in relatively liberal contests, like the Iowa caucuses or the New Hampshire prim"
                },
                "#text": "ar"
              },
              {
                "-id": "0-24-10",
                "span": {
                  "-class": "positive",
                  "#text": "y.,But Mrs. Clinton still holds a huge lead among moderate and conservative Democr"
                },
                "#text": "ats"
              },
              {
                "-id": "0-24-11",
                "#text": " \"?white and nonwhite alik"
              },
              {
                "-id": "0-24-12",
                "#text": "e. Whether Mr. Sanders can close the gap among these voters will determine the seriousness of his candidacy a"
              },
              {
                "-id": "0-24-13",
                "#text": "nd whether he can pick up more delegates in other primarie"
              },
              {
                "-id": "0-24-14",
                "span": {
                  "-class": "positive",
                  "#text": "s. There aren't many reasons to expect he will break thro"
                },
                "#text": "ug"
              },
              {
                "-id": "0-24-15",
                "#text": "h, and he certainly isn't doing it ye"
              },
              {
                "-id": "0-24-16",
                "#text": "t.,If he doesn'"
              },
              {
                "-id": "0-24-17",
                "span": {
                  "-class": "negative",
                  "#text": "t, he will lose by a wide mar"
                },
                "#text": "gi"
              },
              {
                "-id": "0-24-18",
                "#text": "n.,M"
              },
              {
                "-id": "0-24-19",
                "span": {
                  "-class": "negative",
                  "#text": "r. Sanders surged as he consolidated the liberal voters who represent the natural opposition to Mrs. Clin"
                },
                "#text": "to"
              },
              {
                "-id": "0-24-20",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "n. A socialist senator from Vermont, he was always well positioned to be the vehi"
                  },
                  {
                    "-class": "negative",
                    "#text": "of their skepticism of Mrs. Clinton's policies on Wall Street and foreign intervent"
                  }
                ],
                "#text": [
                  "cle ",
                  "io"
                ]
              },
              {
                "-id": "0-24-21",
                "span": {
                  "-class": "negative",
                  "#text": "n.,But he is unlikely to beat her by a wide margin among liberal vot"
                },
                "#text": "er"
              },
              {
                "-id": "0-24-22",
                "#text": "s. Even in 2008, Mr. Obama defeated Mrs. Clinton among liberal voters by just one percentage point nationwid"
              },
              {
                "-id": "0-24-23",
                "span": {
                  "-class": "negative",
                  "#text": "e. He lost liberals by one point in New Hampsh"
                },
                "#text": "ir"
              },
              {
                "-id": "0-24-24",
                "#text": "e, and won them by 13 points in Iow"
              },
              {
                "-id": "0-24-25",
                "#text": "a.,M"
              },
              {
                "-id": "0-24-26",
                "#text": "r. Sanders is nearing those tallie"
              },
              {
                "-id": "0-24-27",
                "#text": "s. On average, polls in Iowa and New Hampshire over the last month show Mrs. Clinton and Mr. Sanders tied among self-identified liberal"
              },
              {
                "-id": "0-24-28",
                "#text": "s. Last week, a Quinnipiac poll in Iowa showed him leading Mrs. Clinton amon"
              },
              {
                "-id": "0-24-29",
                "#text": "g \"very libera"
              },
              {
                "-id": "0-24-30",
                "#text": "l\"?voters, 47 to 43 percen"
              },
              {
                "-id": "0-24-31",
                "#text": "t.,M"
              },
              {
                "-id": "0-24-32",
                "#text": [
                  "r. Sanders could hope to do ev",
                  "als, but realistically there are limit"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "en better than Mr. Obama among liber"
                }
              },
              {
                "-id": "0-24-33",
                "#text": "s. Mrs. Clinton is a liberal Democrat by any measur"
              },
              {
                "-id": "0-24-34",
                "#text": "e. Her favorability ratings amon"
              },
              {
                "-id": "0-24-35",
                "#text": "g \"very libera"
              },
              {
                "-id": "0-24-36",
                "span": {
                  "-class": "positive",
                  "#text": "l\"?voters remain very g"
                },
                "#text": "oo"
              },
              {
                "-id": "0-24-37",
                "#text": [
                  "d; the Quinnipiac poll, for instance, put them at 88 perce",
                  "ble and 8 perce",
                  "bl"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "nt favora"
                  },
                  {
                    "-class": "negative",
                    "#text": "nt unfavora"
                  }
                ]
              },
              {
                "-id": "0-24-38",
                "span": {
                  "-class": "positive",
                  "#text": "e. Her advantage among women also he"
                },
                "#text": "lp"
              },
              {
                "-id": "0-24-39",
                "span": {
                  "-class": "positive",
                  "#text": "s. And this is leaving aside any of the other plausible reas"
                },
                "#text": "ons"
              },
              {
                "-id": "0-24-40",
                "#text": " \"?electability, experience"
              },
              {
                "-id": "0-24-41",
                "#text": " \"?for preferring Mrs. Clinto"
              },
              {
                "-id": "0-24-42",
                "#text": [
                  "n.,To close the gap with Mrs. Clinto",
                  "er"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "n, Mr. Sanders will need to make big gains among less liberal Democratic primary vot"
                }
              },
              {
                "-id": "0-24-43",
                "span": {
                  "-class": "positive",
                  "#text": "s. Nearly half of the Democratic primary electorate is moderate or even conservat"
                },
                "#text": "iv"
              },
              {
                "-id": "0-24-44",
                "#text": "e.,This might seem surprising if you live in a liberal enclave like Madison, Wis"
              },
              {
                "-id": "0-24-45",
                "#text": "., or in places along the coasts, like Marin County, Calif"
              },
              {
                "-id": "0-24-46",
                "#text": "., or Montclair,"
              },
              {
                "-id": "0-24-47",
                "#text": " N.J"
              },
              {
                "-id": "0-24-48",
                "#text": "., where the Democratic Party seems uniformly libera"
              },
              {
                "-id": "0-24-49",
                "#text": "l, where someone's Facebook newsfeed could be mistaken for a , advertisemen"
              },
              {
                "-id": "0-24-50",
                "#text": "t, and where both Bill and , struggled in the 1992 and 2008 Democratic primarie"
              },
              {
                "-id": "0-24-51",
                "#text": "s.,But the Democratic primary electorate is nothing like Madison or Burlington, V"
              },
              {
                "-id": "0-24-52",
                "span": {
                  "-class": "negative",
                  "#text": "t. It's not even much like New Hampshire or I"
                },
                "#text": "owa, where a liberal Democratic primary candidate can compe"
              },
              {
                "-id": "0-24-53",
                "#text": "te or even wi"
              },
              {
                "-id": "0-24-54",
                "span": {
                  "-class": "negative",
                  "#text": "n. Elsewhere, the party includes a large number of less educated, more religi"
                },
                "#text": "ous"
              },
              {
                "-id": "0-24-55",
                "#text": " \"?often older, Southern or nonwhite"
              },
              {
                "-id": "0-24-56",
                "#text": " \"?voters who are far from uniformly libera"
              },
              {
                "-id": "0-24-57",
                "#text": "l. That's true whether judged by ideological self-identification or by their actual policy view"
              },
              {
                "-id": "0-24-58",
                "#text": "s.,M"
              },
              {
                "-id": "0-24-59",
                "span": {
                  "-class": "positive",
                  "#text": "r. Obama beat Mrs. Clinton in 2008 in large p"
                },
                "#text": "a"
              },
              {
                "-id": "0-24-60",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "rt because he prevented "
                  },
                  {
                    "-class": "positive",
                    "#text": "om running up the score among modera"
                  }
                ],
                "#text": [
                  "her fr",
                  "te"
                ]
              },
              {
                "-id": "0-24-61",
                "#text": "s, who voted for her by 5 percentage point"
              },
              {
                "-id": "0-24-62",
                "span": {
                  "-class": "positive",
                  "#text": "s.,There were two types of these voters who allowed "
                },
                "#text": "Mr. Obama to stay so close to Mrs. Clinto"
              },
              {
                "-id": "0-24-63",
                "span": {
                  "-class": "positive",
                  "#text": "n, and Mr. Sanders doesn't naturally appeal to either "
                },
                "#text": "on"
              },
              {
                "-id": "0-24-64",
                "span": {
                  "-class": "positive",
                  "#text": "e.,First, Mr. Obama did well among moderates in affluent and well-educated areas, often with the help of self-described independents and Republic"
                },
                "#text": "an"
              },
              {
                "-id": "0-24-65",
                "#text": "s. Nationally, Mr. Obama won independents by 12 points and Republicans by 8 point"
              },
              {
                "-id": "0-24-66",
                "span": {
                  "-class": "positive",
                  "#text": "s. Second, he won more than 80 percent of black voters, perhaps the least liberal demographic group in the Democratic Pa"
                },
                "#text": "rt"
              },
              {
                "-id": "0-24-67",
                "#text": "y.,In Iowa and New Hampshire, where Mr. Obama fought Mrs. Clinton to a draw among moderate"
              },
              {
                "-id": "0-24-68",
                "span": {
                  "-class": "positive",
                  "#text": "s, Mr. Sanders still trails among moderates by an aver"
                },
                "#text": "age of 27 points, her 50 percent to his 23 percen"
              },
              {
                "-id": "0-24-69",
                "#text": "t.,M"
              },
              {
                "-id": "0-24-70",
                "span": {
                  "-class": "positive",
                  "#text": "r. Sanders could make some further gains among modera"
                },
                "#text": "te"
              },
              {
                "-id": "0-24-71",
                "span": {
                  "-class": "negative",
                  "#text": "s. The rank and file of the party is less tuned into politics than the more activ"
                },
                "#text": "is"
              },
              {
                "-id": "0-24-72",
                "#text": "t, liberal voters assembling behind Mr. Sander"
              },
              {
                "-id": "0-24-73",
                "#text": "s. Many rank-and-file Democrats haven't even heard of Mr. Sanders ye"
              },
              {
                "-id": "0-24-74",
                "span": {
                  "-class": "positive",
                  "#text": "t: In the Quinnipiac poll, 38 percent of moderate Democr"
                },
                "#text": "ats hadn't heard enough about Mr. Sanders to formulate an opinio"
              },
              {
                "-id": "0-24-75",
                "#text": "n, compared with 15 percent of very liberal Democrat"
              },
              {
                "-id": "0-24-76",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "s.,But Mr. Sanders's problem r"
                  },
                  {
                    "-class": "positive",
                    "#text": "ot deeper than name recognit"
                  }
                ],
                "#text": [
                  "uns a l",
                  "io"
                ]
              },
              {
                "-id": "0-24-77",
                "#text": "n. A lot of these Democrats just aren't consistently liberal, as the polling data suggest"
              },
              {
                "-id": "0-24-78",
                "span": {
                  "-class": "negative",
                  "#text": "s. It is not at all clear that a self-described socialist would fare well in the afflu"
                },
                "#text": "en"
              },
              {
                "-id": "0-24-79",
                "span": {
                  "-class": "positive",
                  "#text": "t, well-educated, socially liberal but fiscally moderate communities where Mr. Obama and even Bill Bradley, in 2"
                },
                "#text": "00"
              },
              {
                "-id": "0-24-80",
                "span": {
                  "-class": "positive",
                  "#text": "0, excel"
                },
                "#text": "le"
              },
              {
                "-id": "0-24-81",
                "span": {
                  "-class": "negative",
                  "#text": "d.,It is even harder to imagine how Mr. Sanders could replicate the strength among black voters that was essential to Mr. Obama's succ"
                },
                "#text": "ess."
              },
              {
                "-id": "0-24-82",
                "#text": " , to inch out of the single digits among nonwhite voters in national survey"
              },
              {
                "-id": "0-24-83",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "s.,As a result, there has been plenty of comment"
                  },
                  {
                    "-class": "negative",
                    "#text": "ut Mr. Sanders's challenge among nonwhite vot"
                  }
                ],
                "#text": [
                  "ary abo",
                  "er"
                ]
              },
              {
                "-id": "0-24-84",
                "span": {
                  "-class": "negative",
                  "#text": "s.,But his problem with nonwhite voters is not properly understood as simply a problem of r"
                },
                "#text": "ac"
              },
              {
                "-id": "0-24-85",
                "span": {
                  "-class": "negative",
                  "#text": "e. It's primarily a problem with moderate and less educated Democrats, regardless of race, which happ"
                },
                "#text": "ens "
              },
              {
                "-id": "0-24-86",
                "#text": ",.,If black voters had voted like demographically similar nonblack voters in the 2008 primary, Mr. Obama would have been crushe"
              },
              {
                "-id": "0-24-87",
                "span": {
                  "-class": "positive",
                  "#text": "d. He would have probably lost by at least 20 points in the overall popular v"
                },
                "#text": "ot"
              },
              {
                "-id": "0-24-88",
                "#text": "e, winning primaries in only six state"
              },
              {
                "-id": "0-24-89",
                "span": {
                  "-class": "positive",
                  "#text": "s. Wisconsin's Dane County, home to Madison, the state capital and a college town, might have been Mr. Obama's best county with more than 30,000 vo"
                },
                "#text": "te"
              },
              {
                "-id": "0-24-90",
                "#text": "s.,A candidate who could mobilize libera"
              },
              {
                "-id": "0-24-91",
                "span": {
                  "-class": "positive",
                  "#text": "ls and progressives would have a real chance of winning Iowa or New Hampsh"
                },
                "#text": "ir"
              },
              {
                "-id": "0-24-92",
                "span": {
                  "-class": "negative",
                  "#text": "e. But the only candidates who could threaten Mrs. Clinton's path to the nomination would be ones who could break her grip on the party's moderate w"
                },
                "#text": "in"
              },
              {
                "-id": "0-24-93",
                "span": {
                  "-class": "positive",
                  "#text": "g.,That's why John Edwards, a liberal Southerner who appealed to progressive activists and white conservati"
                },
                "#text": "ve"
              },
              {
                "-id": "0-24-94",
                "#text": "s, and Mr. Obama, the first black candidate with a serious chance of winning the nominatio"
              },
              {
                "-id": "0-24-95",
                "span": {
                  "-class": "negative",
                  "#text": "n, posed such serious threats to her in 2"
                },
                "#text": "00"
              },
              {
                "-id": "0-24-96",
                "#text": "8. So far, Mr. Sanders does not."
              }
            ]
          },
          {
            "a": {
              "-id": "0-25-0",
              "#text": "1436338800273"
            }
          },
          {
            "a": [
              {
                "-id": "0-26-0",
                "#text": "WASHINGTON \"? , "
              },
              {
                "-id": "0-26-1",
                "#text": "told reporters last month that the , "
              },
              {
                "-id": "0-26-2",
                "#text": "she received while secretary of state from Sidney Blumenthal, a longtime adviser whom the Obama administration had barred her from hiring, "
              },
              {
                "-id": "0-26-3",
                "#text": "had been \""
              },
              {
                "-id": "0-26-4",
                "#text": "unsolicited.\""
              },
              {
                "-id": "0-26-5",
                "#text": [
                  "But email records that Mrs. Clinton, according to officials briefed on the matter, ",
                  " to turn over to the State Department last fall show that she repeatedly encouraged Mr. Blumenthal to \""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "apparently failed"
                }
              },
              {
                "-id": "0-26-6",
                "#text": "keep 'em coming,\"?"
              },
              {
                "-id": "0-26-7",
                "#text": "as she said in an August 2012 reply to a memo from him, "
              },
              {
                "-id": "0-26-8",
                "#text": "which she called \""
              },
              {
                "-id": "0-26-9",
                "#text": "another keeper.\""
              },
              {
                "-id": "0-26-10",
                "span": {
                  "-class": "negative",
                  "#text": "All or part of , she sent to Mr. Blumenthal were missing from the trove of 30,000 that Mrs. Clinton provided to the State Department last year"
                },
                "#text": ", "
              },
              {
                "-id": "0-26-11",
                "#text": "as well as from the 847 that the department in turn provided in February to the House committee investigating the , ,. "
              },
              {
                "-id": "0-26-12",
                "#text": "The emails were reviewed by a reporter.,"
              },
              {
                "-id": "0-26-13",
                "#text": "The department had asked Mrs. Clinton last year for copies of all of the work-related emails she sent or received on the personal email account she exclusively used "
              },
              {
                "-id": "0-26-14",
                "#text": "when she was secretary of state from 2009 to 2013. ("
              },
              {
                "-id": "0-26-15",
                "span": {
                  "-class": "positive",
                  "#text": "She has said that she wiped the server clean thereafter"
                },
                "#text": ", deleting the emails that she had not turned over to the department, "
              },
              {
                "-id": "0-26-16",
                "#text": "which she said were personal.),"
              },
              {
                "-id": "0-26-17",
                "#text": "In sifting through and producing such a large number of emails, it stands to reason that some would be missed. "
              },
              {
                "-id": "0-26-18",
                "span": {
                  "-class": "negative",
                  "#text": "But the fact that some of the missing correspondence contained expressions of gratitude and encouragement to Mr. Blumenthal is being seized on by Republicans"
                },
                "#text": ", "
              },
              {
                "-id": "0-26-19",
                "span": {
                  "-class": "negative",
                  "#text": "who plan to use the apparent contradiction, and the missing emails"
                },
                "#text": ", to raise new questions about Mrs. Clinton's credibility.,"
              },
              {
                "-id": "0-26-20",
                "span": {
                  "-class": "negative",
                  "#text": "The missing email records"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-26-21",
                "span": {
                  "-class": "positive",
                  "#text": "nine complete messages and parts of six others"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-26-22",
                "span": {
                  "-class": "negative",
                  "#text": "were discovered after Mr. Blumenthal turned over to the House committee investigating the Benghazi attacks his own batch of"
                },
                "#text": " ,-"
              },
              {
                "-id": "0-26-23",
                "#text": "related email correspondence with Mrs. Clinton.,"
              },
              {
                "-id": "0-26-24",
                "#text": "Angered that the State Department had not already provided it with some of those emails, "
              },
              {
                "-id": "0-26-25",
                "#text": "the committee asked the department whether it had received them from Mrs. Clinton. "
              },
              {
                "-id": "0-26-26",
                "#text": "The department determined that it had not received all or part of 15 emails.,"
              },
              {
                "-id": "0-26-27",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "On Thursday, the State Department acknowledged the missing correspondence"
                  },
                  {
                    "-class": "positive",
                    "#text": "not specifically say which parts of those emails were missing"
                  }
                ],
                "#text": [
                  ", but it did ",
                  ".,"
                ]
              },
              {
                "-id": "0-26-28",
                "#text": [
                  "According to officials briefed on the matter, among the emails the ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "State Department could not find were those in which Mrs. Clinton encouraged Mr."
                  },
                  {
                    "-class": "positive",
                    "#text": "Blumenthal to keep sending memos or in which she asked additional questions about their contents"
                  }
                ]
              },
              {
                "-id": "0-26-29",
                "span": {
                  "-class": "positive",
                  "#text": "In response to an intelligence memo Mr. Blumenthal sent Mrs. Clinton in July 2012"
                },
                "#text": ", "
              },
              {
                "-id": "0-26-30",
                "#text": "she said: \""
              },
              {
                "-id": "0-26-31",
                "#text": "Greetings from Kabul! "
              },
              {
                "-id": "0-26-32",
                "span": {
                  "-class": "positive",
                  "#text": "And thanks for keeping this stuff coming"
                },
                "#text": "!\""
              },
              {
                "-id": "0-26-33",
                "#text": "And, responding to a March 2012 memo, she wrote: \""
              },
              {
                "-id": "0-26-34",
                "span": {
                  "-class": "negative",
                  "#text": "This strains credulity based on what I know"
                },
                "#text": ". "
              },
              {
                "-id": "0-26-35",
                "#text": "Any more info about it?\""
              },
              {
                "-id": "0-26-36",
                "#text": "Mr. "
              },
              {
                "-id": "0-26-37",
                "#text": "Blumenthal replied, \"Will seek more intel.\""
              },
              {
                "-id": "0-26-38",
                "#text": "A spokesman for Mrs. Clinton, Nick Merrill, said, \"The idea "
              },
              {
                "-id": "0-26-39",
                "#text": "that this runs counter to the assertion that the emails were unsolicited is a leap.\"\""
              },
              {
                "-id": "0-26-40",
                "#text": "Mr. "
              },
              {
                "-id": "0-26-41",
                "#text": "Blumenthal began emailing of his own accord,\"?Mr. "
              },
              {
                "-id": "0-26-42",
                "#text": "Merrill said. \""
              },
              {
                "-id": "0-26-43",
                "span": {
                  "-class": "positive",
                  "#text": "Polite acknowledgments are not tantamount to solicitation"
                },
                "#text": ". "
              },
              {
                "-id": "0-26-44",
                "span": {
                  "-class": "positive",
                  "#text": "And I think that any reasonable person who has ever had an email exchange would agree"
                },
                "#text": ".\""
              },
              {
                "-id": "0-26-45",
                "#text": "Mrs. "
              },
              {
                "-id": "0-26-46",
                "#text": "Clinton, who is running for the Democratic Party's presidential nomination, "
              },
              {
                "-id": "0-26-47",
                "#text": "has maintained that she properly complied with the State Department's request and with federal record-keeping regulations.,"
              },
              {
                "-id": "0-26-48",
                "#text": "The State Department has provided the House committee in recent days with at least 10 pages of emails between Mrs. Clinton and Mr. Blumenthal that it had not turned over in February. "
              },
              {
                "-id": "0-26-49",
                "span": {
                  "-class": "positive",
                  "#text": "These appear to show that Mrs. Clinton and her advisers took the memos and other advice from Mr. Blumenthal fairly seriously"
                },
                "#text": ".,"
              },
              {
                "-id": "0-26-50",
                "#text": "One also appears to suggest "
              },
              {
                "-id": "0-26-51",
                "#text": "that Mrs. Clinton may have wanted to conceal Mr. Blumenthal's authorship of a memo to her from someone else.,"
              },
              {
                "-id": "0-26-52",
                "#text": "In March 2011, Mr. Blumenthal sent Mrs. Clinton a memo with the subject line, \"H: "
              },
              {
                "-id": "0-26-53",
                "span": {
                  "-class": "negative",
                  "#text": "Serious problems for Libyan Rebels"
                },
                "#text": ". "
              },
              {
                "-id": "0-26-54",
                "#text": "Sid.\"?"
              },
              {
                "-id": "0-26-55",
                "#text": "As she often did, Mrs. Clinton forwarded this one to her longtime aide, Huma Abedin, "
              },
              {
                "-id": "0-26-56",
                "#text": "asking her to print it. "
              },
              {
                "-id": "0-26-57",
                "#text": "But in this case, Mrs. Clinton asked Ms. Abedin, \"Can you print for me w/o any identifiers?\"\""
              },
              {
                "-id": "0-26-58",
                "#text": "Yes,\"?Ms. "
              },
              {
                "-id": "0-26-59",
                "#text": "Abedin replied.,"
              },
              {
                "-id": "0-26-60",
                "#text": "Another email chain recently turned over by the State Department shows how Mrs. Clinton took under consideration Mr. Blumenthal's public relations advice to her in anticipation of the fall of Col. "
              },
              {
                "-id": "0-26-61",
                "#text": "Muammar el-Qaddafi.,\""
              },
              {
                "-id": "0-26-62",
                "#text": "First, brava! "
              },
              {
                "-id": "0-26-63",
                "span": {
                  "-class": "positive",
                  "#text": "This is a historic moment"
                }
              },
              {
                "-id": "0-26-64",
                "#text": "and you will be credited for realizing it,\"?Mr. "
              },
              {
                "-id": "0-26-65",
                "#text": "Blumenthal said in an Aug. "
              },
              {
                "-id": "0-26-66",
                "#text": "22, 2011, memo to Mrs. Clinton with the subject line \""
              },
              {
                "-id": "0-26-67",
                "#text": "Your statement post-Q.\"\""
              },
              {
                "-id": "0-26-68",
                "#text": "When Qaddafi himself is finally removed, "
              },
              {
                "-id": "0-26-69",
                "#text": "you should of course make a public statement before the cameras wherever you are, even in the driveway of your vacation home,\"?"
              },
              {
                "-id": "0-26-70",
                "#text": "Mr. "
              },
              {
                "-id": "0-26-71",
                "#text": "Blumenthal wrote. \""
              },
              {
                "-id": "0-26-72",
                "#text": "You must go on camera. "
              },
              {
                "-id": "0-26-73",
                "#text": "You must establish yourself in the historical record at this moment.\""
              },
              {
                "-id": "0-26-74",
                "#text": "He added: \""
              },
              {
                "-id": "0-26-75",
                "#text": "The most important phrase is: \""
              },
              {
                "-id": "0-26-76",
                "span": {
                  "-class": "positive",
                  "#text": "successful strategy"
                },
                "#text": ".' \","
              },
              {
                "-id": "0-26-77",
                "#text": "Mrs. "
              },
              {
                "-id": "0-26-78",
                "#text": "Clinton forwarded the advice to one of her closest aides at the State Department, Jake Sullivan.,\""
              },
              {
                "-id": "0-26-79",
                "#text": "Pls read below,\"?"
              },
              {
                "-id": "0-26-80",
                "#text": "she wrote. \""
              },
              {
                "-id": "0-26-81",
                "span": {
                  "-class": "positive",
                  "#text": "Sid makes a good case for what"
                },
                "#text": " I should say, but it's premised on being said after Q goes, "
              },
              {
                "-id": "0-26-82",
                "#text": "which will make it more dramatic. "
              },
              {
                "-id": "0-26-83",
                "span": {
                  "-class": "negative",
                  "#text": "That's my hesitancy, since I'm not sure"
                }
              },
              {
                "-id": "0-26-84",
                "#text": "how many chances I'll get.\""
              },
              {
                "-id": "0-26-85",
                "#text": "Mr. "
              },
              {
                "-id": "0-26-86",
                "#text": "Sullivan responded that he and another senior State Department official \""
              },
              {
                "-id": "0-26-87",
                "#text": "thought it might make sense for you to do an op-ed to run right after he falls, "
              },
              {
                "-id": "0-26-88",
                "#text": "making this point,\"?and that a draft was already being written.,\""
              },
              {
                "-id": "0-26-89",
                "span": {
                  "-class": "positive",
                  "#text": "You can reinforce the op-ed in all your appearances, but it makes sense to lay down something definitive"
                },
                "#text": ", "
              },
              {
                "-id": "0-26-90",
                "span": {
                  "-class": "positive",
                  "#text": "almost like the Clinton Doctrine,\"?Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-26-91",
                "#text": "Sullivan said.,"
              },
              {
                "-id": "0-26-92",
                "#text": "That same day, though, "
              },
              {
                "-id": "0-26-93",
                "#text": "it was a White House aide who credited the administration's strategy, and President Obama who , "
              },
              {
                "-id": "0-26-94",
                "#text": "that Libya's future was \""
              },
              {
                "-id": "0-26-95",
                "#text": "in the hands of its people.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-27-0",
              "#text": "1435561200187"
            }
          },
          {
            "a": [
              {
                "-id": "0-28-0",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The ample crowds"
                  },
                  {
                    "-class": "negative",
                    "#text": "unexpectedly strong showing"
                  },
                  {
                    "-class": "negative",
                    "#text": "worry among advisers and allies"
                  }
                ],
                "#text": [
                  " and ",
                  " garnered by Senator , are setting off ",
                  " of ,, "
                ]
              },
              {
                "-id": "0-28-1",
                "#text": [
                  "who believe the Vermont senator could overtake her in Iowa polls by the fall and ",
                  " in the nation's first nominating contest there.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "even defeat her"
                }
              },
              {
                "-id": "0-28-2",
                "span": {
                  "-class": "positive",
                  "#text": "The enthusiasm that Mr. Sanders has generated"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-28-3",
                "#text": "including a rally attended by 2,500 people in Council Bluffs, Iowa, on Friday \"?"
              },
              {
                "-id": "0-28-4",
                "span": {
                  "-class": "positive",
                  "#text": "has called into question Mrs. Clinton's early strategy of focusing on a listening tour of small groups and wooing big donors in private settings"
                },
                "#text": ". "
              },
              {
                "-id": "0-28-5",
                "#text": "In May, Mrs. Clinton led with 60 percent support to Mr. Sanders's 15 percent in a Quinnipiac poll. "
              },
              {
                "-id": "0-28-6",
                "#text": "Last week the same poll showed Mrs. Clinton at 52 percent to Mr. Sanders's 33 percent.,\""
              },
              {
                "-id": "0-28-7",
                "span": {
                  "-class": "negative",
                  "#text": "We are worried about him"
                },
                "#text": ", "
              },
              {
                "-id": "0-28-8",
                "#text": "sure. "
              },
              {
                "-id": "0-28-9",
                "#text": "He will be a serious force for the campaign, "
              },
              {
                "-id": "0-28-10",
                "#text": "and I don't think that will diminish,\"?Jennifer Palmieri, the Clinton campaign's communications director, "
              },
              {
                "-id": "0-28-11",
                "#text": "said Monday in an interview on MSNBC's \""
              },
              {
                "-id": "0-28-12",
                "#text": "Morning Joe.\""
              },
              {
                "-id": "0-28-13",
                "#text": "Some of Mrs. Clinton's advisers acknowledged that they were surprised by Mr. Sanders's momentum and said there were enough liberal voters in Iowa, "
              },
              {
                "-id": "0-28-14",
                "#text": "including many who supported Barack Obama or John Edwards in 2008, to create problems for her there.,\""
              },
              {
                "-id": "0-28-15",
                "span": {
                  "-class": "negative",
                  "#text": "I think we underestimated that Sanders would quickly attract so many Democrats in Iowa"
                },
                "#text": " who weren't likely to support Hillary,\"?"
              },
              {
                "-id": "0-28-16",
                "#text": "said one Clinton adviser, "
              },
              {
                "-id": "0-28-17",
                "span": {
                  "-class": "positive",
                  "#text": "who like several others spoke on the condition"
                },
                "#text": " of anonymity to candidly share views about the race. \""
              },
              {
                "-id": "0-28-18",
                "span": {
                  "-class": "negative",
                  "#text": "It's too early to change strategy because no one knows"
                },
                "#text": " if Sanders will be able to hold on to these voters in the months ahead. "
              },
              {
                "-id": "0-28-19",
                "#text": [
                  "We're working ",
                  " over, but, yeah, it's a real competition there.\""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "hard to win them"
                }
              },
              {
                "-id": "0-28-20",
                "span": {
                  "-class": "positive",
                  "#text": "Asked on Friday about the crowds Mr. Sanders was drawing, Mrs. Clinton seemed to walk a careful line with her answer"
                },
                "#text": ". \""
              },
              {
                "-id": "0-28-21",
                "#text": "Well, we each run our own campaigns, "
              },
              {
                "-id": "0-28-22",
                "span": {
                  "-class": "positive",
                  "#text": "and I always knew this was going to be competitive"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-28-23",
                "#text": "she told reporters at an ice cream stand in Lebanon, N."
              },
              {
                "-id": "0-28-24",
                "#text": "H.,"
              },
              {
                "-id": "0-28-25",
                "#text": [
                  "Those who see Mrs. Clinton as being at ",
                  " positioned to win the nomination than Mr. Sanders, "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "risk in Iowa"
                  },
                  {
                    "-class": "positive",
                    "#text": "say she is still far better"
                  }
                ]
              },
              {
                "-id": "0-28-26",
                "#text": "who lags by double digits in Iowa polling. "
              },
              {
                "-id": "0-28-27",
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Sanders is an untested national candidate who has far less money than she does"
                },
                "#text": ", "
              },
              {
                "-id": "0-28-28",
                "#text": "and his self-announced \""
              },
              {
                "-id": "0-28-29",
                "#text": "democratic socialist\"?"
              },
              {
                "-id": "0-28-30",
                "#text": "leanings are anathema to many Americans. "
              },
              {
                "-id": "0-28-31",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Mrs. Clinton's advisers, meanwhile, have deep experience pulling off upsets"
                  },
                  {
                    "-class": "positive",
                    "#text": "comeback"
                  },
                  {
                    "-class": "positive",
                    "#text": "political victories"
                  }
                ],
                "#text": [
                  " and ",
                  ", "
                ]
              },
              {
                "-id": "0-28-32",
                "span": {
                  "-class": "positive",
                  "#text": "and Mrs. Clinton often performs best"
                }
              },
              {
                "-id": "0-28-33",
                "#text": "when she is under pressure from rivals.,"
              },
              {
                "-id": "0-28-34",
                "span": {
                  "-class": "negative",
                  "#text": "But a loss in an early state like Iowa would signal a vulnerability for Mrs. Clinton at a time"
                }
              },
              {
                "-id": "0-28-35",
                "#text": "when she has sought to unite the Democratic Party behind her candidacy, and especially to demonstrate to its restless liberal wing that she can represent their interests. "
              },
              {
                "-id": "0-28-36",
                "span": {
                  "-class": "positive",
                  "#text": "A Sanders victory could also further energize his fund-raising base"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-28-37",
                "span": {
                  "-class": "negative",
                  "#text": "Certainly she could lose Iowa"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-28-38",
                "#text": "said , "
              },
              {
                "-id": "0-28-39",
                "#text": "who managed Howard Dean's 2004 campaign. "
              },
              {
                "-id": "0-28-40",
                "#text": "If that happened, Mr. Trippi said, \""
              },
              {
                "-id": "0-28-41",
                "#text": "mostly they'd just have to ride out the punditry and people with their hair on fire\"?"
              },
              {
                "-id": "0-28-42",
                "span": {
                  "-class": "negative",
                  "#text": "and go on to capture the nomination"
                },
                "#text": ".,"
              },
              {
                "-id": "0-28-43",
                "#text": "Mr. "
              },
              {
                "-id": "0-28-44",
                "span": {
                  "-class": "positive",
                  "#text": "Sanders's rising fortunes pose a bind for the Clinton team"
                },
                "#text": ". "
              },
              {
                "-id": "0-28-45",
                "span": {
                  "-class": "negative",
                  "#text": "Directly challenging the senator on his policies"
                }
              },
              {
                "-id": "0-28-46",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "and record could elevate his candidacy"
                  },
                  {
                    "-class": "negative",
                    "#text": "alienate"
                  },
                  {
                    "-class": "negative",
                    "#text": "Democrats and make Mrs. Clinton look anxious"
                  }
                ],
                "#text": [
                  ", ",
                  " some liberal ",
                  ". "
                ]
              },
              {
                "-id": "0-28-47",
                "#text": "Yet continuing the current strategy \"?"
              },
              {
                "-id": "0-28-48",
                "span": {
                  "-class": "positive",
                  "#text": "vigorously courting voters"
                },
                "#text": " while hoping they conclude that Mr. Sanders is unelectable \"?"
              },
              {
                "-id": "0-28-49",
                "span": {
                  "-class": "positive",
                  "#text": "requires Mrs. Clinton to put faith in an Iowa electorate"
                },
                "#text": " that ,, choosing Mr. Obama and Mr. Edwards over her.,"
              },
              {
                "-id": "0-28-50",
                "#text": "Whatever the outcome in Iowa, the Clinton campaign, which raised $45 million in its first three months, "
              },
              {
                "-id": "0-28-51",
                "#text": "already is building a national infrastructure, with one or more organizers, at least temporarily, in each state.,"
              },
              {
                "-id": "0-28-52",
                "#text": "Carter Eskew, a Democratic political consultant, said the strength of the Sanders candidacy should stop further talk of a \""
              },
              {
                "-id": "0-28-53",
                "#text": "coronation\"?"
              },
              {
                "-id": "0-28-54",
                "#text": "of Mrs. Clinton as the Democratic nominee. \""
              },
              {
                "-id": "0-28-55",
                "span": {
                  "-class": "negative",
                  "#text": "From the Clinton perspective, Sanders has gone from an annoyance to a threat"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-28-56",
                "#text": "he said. \""
              },
              {
                "-id": "0-28-57",
                "#text": "One consolation, "
              },
              {
                "-id": "0-28-58",
                "#text": "Sanders won't creep up on anybody anymore. "
              },
              {
                "-id": "0-28-59",
                "#text": "The Clinton camp has time to adjust expectations, "
              },
              {
                "-id": "0-28-60",
                "#text": "if not strategy.\""
              },
              {
                "-id": "0-28-61",
                "#text": "Mrs. "
              },
              {
                "-id": "0-28-62",
                "#text": "Clinton has also spent so much time at fund-raisers, most of which bring in more than $27,000, "
              },
              {
                "-id": "0-28-63",
                "span": {
                  "-class": "negative",
                  "#text": "according to campaign reports, that she has not made as many stops in Iowa as her opponent"
                },
                "#text": ". "
              },
              {
                "-id": "0-28-64",
                "#text": "On Tuesday, she will hold events in Iowa City (where Mr. Sanders , in late May) and Ottumwa. "
              },
              {
                "-id": "0-28-65",
                "#text": "In the coming weeks, she is expected to make more frequent visits to the state and hold larger events, "
              },
              {
                "-id": "0-28-66",
                "#text": "delivering her message of lifting the middle class.,"
              },
              {
                "-id": "0-28-67",
                "span": {
                  "-class": "negative",
                  "#text": "Hours after her loss there"
                },
                "#text": " in 2008, Mrs. Clinton's aides played down Iowa's importance, "
              },
              {
                "-id": "0-28-68",
                "#text": "with one aide comparing the caucuses to \",.\""
              },
              {
                "-id": "0-28-69",
                "span": {
                  "-class": "positive",
                  "#text": "Her current team has been careful not to diminish the state's importance"
                }
              },
              {
                "-id": "0-28-70",
                "#text": "and has been pouring in money and staffing. "
              },
              {
                "-id": "0-28-71",
                "#text": "She has dozens of paid staff members there compared with about 20 for Mr. Sanders. \""
              },
              {
                "-id": "0-28-72",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The caucus is about working hard"
                  },
                  {
                    "-class": "positive",
                    "#text": "humility, to engage Iowans"
                  }
                ],
                "#text": [
                  ", with ",
                  "\"?"
                ]
              },
              {
                "-id": "0-28-73",
                "#text": "said Matt Paul, Mrs. Clinton's state director for Iowa. "
              },
              {
                "-id": "0-28-74",
                "#text": "To that end, the campaign has recruited volunteers to caucus for Mrs. Clinton in each of the state's 1,682 precincts.,\""
              },
              {
                "-id": "0-28-75",
                "span": {
                  "-class": "negative",
                  "#text": "We take nothing for granted in Iowa because the caucuses are always such a tough proving ground"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-28-76",
                "#text": "said Robby Mook, Mrs. Clinton's campaign manager. \""
              },
              {
                "-id": "0-28-77",
                "#text": [
                  "But ,'s regular travel to the state and the organization ",
                  "his "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "we have established on the ground show how committed we are to prevailing there.\"?(A Vermont native, Mr. Mook has known Mr. Sanders and "
                }
              },
              {
                "-id": "0-28-78",
                "#text": "organizing playbook since the 1990s and has been warning the campaign about his potential ris"
              },
              {
                "-id": "0-28-79",
                "span": {
                  "-class": "negative",
                  "#text": "e.),Advisers to Mr. Sanders said voters flocked to his eve"
                },
                "#text": "nts"
              },
              {
                "-id": "0-28-80",
                "#text": " because he offers ambitious proposals to major problems, "
              },
              {
                "-id": "0-28-81",
                "#text": [
                  "such as his plans ",
                  "es, to reduce student debt and to spend $1 trillion on public"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "to eliminate tuition at public colleg"
                }
              },
              {
                "-id": "0-28-82",
                "#text": " works programs to crea"
              },
              {
                "-id": "0-28-83",
                "#text": [
                  "te more jobs, though he proposed paying for them with",
                  "se"
                ],
                "span": {
                  "-class": "positive",
                  "#text": " huge tax increa"
                }
              },
              {
                "-id": "0-28-84",
                "#text": "s. His advisers also argued that voters viewed him as willin"
              },
              {
                "-id": "0-28-85",
                "span": {
                  "-class": "negative",
                  "#text": "g to go further in championing significant tax increases for wealthy Americans to support programs to benefit low- and middle-income Americans.,\"I've been struck by the large numbers of people who ar"
                },
                "#text": "e s"
              },
              {
                "-id": "0-28-86",
                "span": {
                  "-class": "negative",
                  "#text": "aying they want to sign on the dotted line and support his cam"
                },
                "#text": "paign, organize their community, help in any way they can,\"?said"
              },
              {
                "-id": "0-28-87",
                "#text": [
                  " ,, a veteran Iowa operati",
                  "ho is overseeing the Sanders campaign there.,His advisers dismissed any notion from Mrs. Clinton's all"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "ve w"
                }
              },
              {
                "-id": "0-28-88",
                "span": {
                  "-class": "positive",
                  "#text": "ies that she was anything but the clear front-runner in Iowa.,\"That's just political chatter and the usual tactics,\"?"
                },
                "#text": "sai"
              },
              {
                "-id": "0-28-89",
                "#text": "d Jeff Weaver, the senator's campaign manager. \"What's important is what we saw at Bernie's recent event "
              },
              {
                "-id": "0-28-90",
                "#text": "in Wisconsin \"?a candidate speaking to the issues facing Americans, and "
              },
              {
                "-id": "0-28-91",
                "#text": "10,000 people coming out for it.\"While Mr. Sanders's crowds make for powerful images, Mrs."
              },
              {
                "-id": "0-28-92",
                "span": {
                  "-class": "positive",
                  "#text": " Clinton's allies pointed out that his largest rall"
                },
                "#text": "ies had been in handpicked locations like Madison, Wis., and Iowa City, where there are many college-educate"
              },
              {
                "-id": "0-28-93",
                "#text": "d whit"
              },
              {
                "-id": "0-28-94",
                "#text": "e liberals, a demographic that represents his base. Mrs. Clinton draws stronger support from African-American"
              },
              {
                "-id": "0-28-95",
                "span": {
                  "-class": "positive",
                  "#text": "s, Latino voters and moderate voters.,Regardless, big crowds mean more cash for Mr. Sanders, "
                },
                "#text": "wh"
              },
              {
                "-id": "0-28-96",
                "#text": "o said his campaign had raised $15 million since April 30.,And Mrs. Clinton's Internet fund-raising has room to grow"
              },
              {
                "-id": "0-28-97",
                "#text": " as the campaign seeks to build its database of small-dollar donors, a tough proposition without big rallies. Of the roughly t"
              },
              {
                "-id": "0-28-98",
                "span": {
                  "-class": "negative",
                  "#text": "wo million supporters from 2008, the ca"
                },
                "#text": "mp"
              },
              {
                "-id": "0-28-99",
                "#text": "aign said, it has only about 100,000 active email accounts.,Jan Baue"
              },
              {
                "-id": "0-28-100",
                "span": {
                  "-class": "positive",
                  "#text": "r, the Democratic chairwoman of Story County, c"
                },
                "#text": "om"
              },
              {
                "-id": "0-28-101",
                "#text": "pared Mr. Sanders to Mr. Dean, also of Vermont, whose antiwar liberalism took Iowa by storm in 2004 befor"
              },
              {
                "-id": "0-28-102",
                "span": {
                  "-class": "negative",
                  "#text": "e , in the final days before the caucuses and later captured the nomination.,\"You don't know what's going to happen until you get to"
                },
                "#text": " th"
              },
              {
                "-id": "0-28-103",
                "#text": "ose last two we"
              },
              {
                "-id": "0-28-104",
                "#text": "eks,\"?Ms. Bauer said."
              },
              { "-id": "0-28-105" }
            ]
          },
          {
            "a": {
              "-id": "0-29-0",
              "#text": "1436166000192"
            }
          },
          {
            "a": [
              {
                "-id": "0-30-0",
                "#text": "TORRANCE, Calif. \"? "
              },
              {
                "-id": "0-30-1",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "At the height of Roger Clinton's fame"
                  },
                  {
                    "-class": "negative",
                    "#text": "accused of taking cash"
                  },
                  {
                    "-class": "positive",
                    "#text": "gold"
                  },
                  {
                    "-class": "negative",
                    "#text": "lobby for pardons as his half brother Bill Clinton's presidency was ending"
                  }
                ],
                "#text": [
                  ", the struggling rock singer stood ",
                  " and a ",
                  " Rolex to ",
                  ".,"
                ]
              },
              {
                "-id": "0-30-2",
                "#text": "Fifteen years later, with Hillary Rodham Clinton seeking to navigate a return to the White House, "
              },
              {
                "-id": "0-30-3",
                "#text": "the self-described \""
              },
              {
                "-id": "0-30-4",
                "#text": "first brother\"?"
              },
              {
                "-id": "0-30-5",
                "#text": "is keeping a lower profile. "
              },
              {
                "-id": "0-30-6",
                "span": {
                  "-class": "positive",
                  "#text": "He lives quietly in this seaside suburb of Los Angeles with his dog, Copper, spending time with his college-age son and pursuing an idea for a television music talent show"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-7",
                "span": {
                  "-class": "positive",
                  "#text": "Yet Roger Clinton remains largely dependent on his more famous family members"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-30-8",
                "span": {
                  "-class": "negative",
                  "#text": "a relationship that poses the risk of new, if familiar, headaches"
                },
                "#text": ". ("
              },
              {
                "-id": "0-30-9",
                "span": {
                  "-class": "negative",
                  "#text": "Headache"
                },
                "#text": ", in fact, was the code name given Roger by the Secret Service during President Clinton's two terms.),"
              },
              {
                "-id": "0-30-10",
                "span": {
                  "-class": "negative",
                  "#text": "His own lawyer said last year that Roger Clinton had no money"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-11",
                "#text": [
                  "Even the $857,000 house he lives in was provided by Bill Clinton, ",
                  ", "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "bought using a limited liability company at a time when Roger Clinton owed more than $100,000 in back taxes"
                }
              },
              {
                "-id": "0-30-12",
                "#text": "according to interviews and public records.,"
              },
              {
                "-id": "0-30-13",
                "#text": "More recently, Roger Clinton parlayed his family ties into a consulting arrangement with a group of builders hoping to sell houses in Haiti, "
              },
              {
                "-id": "0-30-14",
                "#text": "where Bill Clinton's private foundation and Mrs. Clinton's State Department helped direct recovery efforts after the 2010 earthquake. "
              },
              {
                "-id": "0-30-15",
                "span": {
                  "-class": "positive",
                  "#text": "Roger Clinton's intended role, previously unreported, was to use his connections to help win approvals"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-16",
                "#text": "said Wayne Coleman, a Houston businessman involved in the project, "
              },
              {
                "-id": "0-30-17",
                "#text": "which ultimately went nowhere.,\""
              },
              {
                "-id": "0-30-18",
                "#text": "I paid Roger $100,000,\"?Mr. "
              },
              {
                "-id": "0-30-19",
                "#text": "Coleman said. \""
              },
              {
                "-id": "0-30-20",
                "#text": "Basically, "
              },
              {
                "-id": "0-30-21",
                "#text": "he promised to get us a contract through the Clinton Foundation for a project over there. "
              },
              {
                "-id": "0-30-22",
                "#text": "What he was really trying to do was sell the influence of his brother.\""
              },
              {
                "-id": "0-30-23",
                "#text": "A recent visit to his ranch-style home not far from the beach found Roger Clinton, 58, "
              },
              {
                "-id": "0-30-24",
                "span": {
                  "-class": "positive",
                  "#text": "heading out to get an oil change with Copper, a big friendly shepherd he said he had gotten from a local police officer"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-25",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "A vintage sky-blue Mustang sat in the driveway"
                  },
                  {
                    "-class": "negative",
                    "#text": "it did not appear to have been driven"
                  }
                ],
                "#text": [
                  ", but ",
                  " in a while; "
                ]
              },
              {
                "-id": "0-30-26",
                "span": {
                  "-class": "negative",
                  "#text": "he was using a truck parked at the curb"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-27",
                "span": {
                  "-class": "negative",
                  "#text": "Standing in his doorway, looking casual in a backward ball cap and college sweatshirt, he was alternately wary and chatty"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-28",
                "#text": "twice asking if the interview was being recorded \"?"
              },
              {
                "-id": "0-30-29",
                "#text": "it was not \"?"
              },
              {
                "-id": "0-30-30",
                "span": {
                  "-class": "negative",
                  "#text": "while expounding on the challenges"
                },
                "#text": " of living in the shadow of the man he calls \""
              },
              {
                "-id": "0-30-31",
                "#text": "Big Brother.\"\""
              },
              {
                "-id": "0-30-32",
                "#text": "I don't have a choice of being first brother,\"?Mr. "
              },
              {
                "-id": "0-30-33",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-30-34",
                "span": {
                  "-class": "negative",
                  "#text": "It's not like I've been given the option of doing it"
                }
              },
              {
                "-id": "0-30-35",
                "#text": "and I could turn it down. "
              },
              {
                "-id": "0-30-36",
                "#text": "There are times when it's hard.\""
              },
              {
                "-id": "0-30-37",
                "#text": "He said his family connections work against him \""
              },
              {
                "-id": "0-30-38",
                "#text": "seven out of 10 times,\"?and he cited the Haiti project as an example. "
              },
              {
                "-id": "0-30-39",
                "#text": "He suggested that \"advisers and lawyers\"?"
              },
              {
                "-id": "0-30-40",
                "span": {
                  "-class": "positive",
                  "#text": "around the former president had kept it from being approved, even though"
                },
                "#text": " \""
              },
              {
                "-id": "0-30-41",
                "span": {
                  "-class": "positive",
                  "#text": "Big Brother loved it"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-30-42",
                "span": {
                  "-class": "positive",
                  "#text": "You had all this government grant money, and all this money Bill was raising from around the world for reconstruction"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-30-43",
                "#text": "he said. \""
              },
              {
                "-id": "0-30-44",
                "#text": "But we just couldn't make it happen. "
              },
              {
                "-id": "0-30-45",
                "#text": "It's like, come on, "
              },
              {
                "-id": "0-30-46",
                "#text": "man, can't you just throw me a bone?\""
              },
              {
                "-id": "0-30-47",
                "span": {
                  "-class": "negative",
                  "#text": "Roger is not the only member of the Clinton extended family to have attracted unwanted attention"
                },
                "#text": ": "
              },
              {
                "-id": "0-30-48",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton's brothers, Tony and Hugh Rodham, also surfaced in various attempts to obtain pardons"
                },
                "#text": " from the Clinton White House and, in the case of Tony, "
              },
              {
                "-id": "0-30-49",
                "span": {
                  "-class": "negative",
                  "#text": "an unsuccessful bid for his own housing deal in Haiti through the Clinton Foundation"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-50",
                "span": {
                  "-class": "negative",
                  "#text": "Representatives of the Clintons declined"
                },
                "#text": " to answer written questions for this article. "
              },
              {
                "-id": "0-30-51",
                "#text": "Lanny Davis, a special counsel in the Clinton White House who sometimes speaks for the family, "
              },
              {
                "-id": "0-30-52",
                "#text": "issued a statement saying the \""
              },
              {
                "-id": "0-30-53",
                "#text": "brothers live their own lives\"?"
              },
              {
                "-id": "0-30-54",
                "span": {
                  "-class": "positive",
                  "#text": "and expressing hope that \"their desire for privacy is understood by both the Republicans and the media"
                },
                "#text": ".\""
              },
              {
                "-id": "0-30-55",
                "span": {
                  "-class": "positive",
                  "#text": "In the 1990s, Roger Clinton chased the limelight as an aspiring singer with a rock band called Politics and , in movies like"
                },
                "#text": " \""
              },
              {
                "-id": "0-30-56",
                "#text": "Pumpkin Head II\"?"
              },
              {
                "-id": "0-30-57",
                "#text": "and \""
              },
              {
                "-id": "0-30-58",
                "span": {
                  "-class": "negative",
                  "#text": "Spy Hard"
                },
                "#text": ".\"?"
              },
              {
                "-id": "0-30-59",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "But he was known as much for his prison stint"
                  },
                  {
                    "-class": "positive",
                    "#text": "cocaine conviction"
                  },
                  {
                    "-class": "positive",
                    "#text": "his artistic talents"
                  }
                ],
                "#text": [
                  " for a 1985 ",
                  " as for ",
                  ", "
                ]
              },
              {
                "-id": "0-30-60",
                "#text": "viewed as something of a sideshow, popping up , and singing in North Korea.,"
              },
              {
                "-id": "0-30-61",
                "#text": "Congressional investigators in 2001 found that he had tried to \""
              },
              {
                "-id": "0-30-62",
                "#text": "cash in\"?"
              },
              {
                "-id": "0-30-63",
                "span": {
                  "-class": "negative",
                  "#text": "on his White House connections ,, consulting contracts and money from unexplained foreign sources"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-64",
                "span": {
                  "-class": "negative",
                  "#text": "House Republicans, whose final report on the pardon inquiry accused him of"
                },
                "#text": " \""
              },
              {
                "-id": "0-30-65",
                "span": {
                  "-class": "negative",
                  "#text": "serious and reckless misconduct,\"?expressed frustration that reaction seemed muted by generally low expectations for his behavior"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-66",
                "#text": "Today, he is mostly off the public radar \"?"
              },
              {
                "-id": "0-30-67",
                "#text": "if also coping with the occasional tabloid cameo, as "
              },
              {
                "-id": "0-30-68",
                "#text": "when he was sued, unsuccessfully, over fights between women at his home. "
              },
              {
                "-id": "0-30-69",
                "span": {
                  "-class": "negative",
                  "#text": "It is unclear exactly"
                }
              },
              {
                "-id": "0-30-70",
                "#text": "how he supports himself, although Bill Clinton appears to play an important role.,"
              },
              {
                "-id": "0-30-71",
                "#text": "When Bill Clinton was an adviser and partner in some of Ronald W. "
              },
              {
                "-id": "0-30-72",
                "#text": "Burkle's Yucaipa investment funds in the mid-2000s, Roger Clinton occasionally appeared at Yucaipa offices to pick up a check, "
              },
              {
                "-id": "0-30-73",
                "#text": "a former Yucaipa employee said. "
              },
              {
                "-id": "0-30-74",
                "#text": "An adult daughter of Roger Clinton said Bill Clinton paid for her cosmetology schooling in Tennessee in recent years. "
              },
              {
                "-id": "0-30-75",
                "span": {
                  "-class": "positive",
                  "#text": "And a lawyer defending Roger Clinton in a lawsuit in December floated the possibility that the former president could help with a settlement"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-76",
                "#text": "according to emails related to the case that were reviewed by The New York Times.,"
              },
              {
                "-id": "0-30-77",
                "#text": "The lawyer, Walter Wiggins Jr., said in one of those emails that his client \""
              },
              {
                "-id": "0-30-78",
                "#text": "has no money himself, "
              },
              {
                "-id": "0-30-79",
                "span": {
                  "-class": "positive",
                  "#text": "but he might be able to borrow some from his brother"
                },
                "#text": " if the situation warrants it.\"?"
              },
              {
                "-id": "0-30-80",
                "span": {
                  "-class": "negative",
                  "#text": "The plaintiff, Nadeze Connelly, maintained that Roger Clinton was liable for an assault on her by another woman at his home in 2011"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-81",
                "span": {
                  "-class": "negative",
                  "#text": "No settlement occurred, and Ms. Connelly lost in court"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-82",
                "#text": "Mr. "
              },
              {
                "-id": "0-30-83",
                "#text": "Wiggins, who has represented Roger Clinton in various legal matters for at least a dozen years, "
              },
              {
                "-id": "0-30-84",
                "span": {
                  "-class": "negative",
                  "#text": "declined to comment"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-85",
                "span": {
                  "-class": "negative",
                  "#text": "Bill Clinton's role in providing his brother with a house is not readily apparent from the public record"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-86",
                "#text": "which shows that the property was bought in June 2009 for $857,000 by Calle Mayor L."
              },
              {
                "-id": "0-30-87",
                "#text": "L."
              },
              {
                "-id": "0-30-88",
                "#text": "C. "
              },
              {
                "-id": "0-30-89",
                "span": {
                  "-class": "negative",
                  "#text": "But the limited liability company shares a postal box with Bill and Hillary Clinton"
                }
              },
              {
                "-id": "0-30-90",
                "#text": "where they live in Chappaqua, N."
              },
              {
                "-id": "0-30-91",
                "#text": "Y. "
              },
              {
                "-id": "0-30-92",
                "#text": "And the company's contact person is Justin Cooper, "
              },
              {
                "-id": "0-30-93",
                "#text": "who was a longtime aide to the former president. ("
              },
              {
                "-id": "0-30-94",
                "#text": "Separately, Mr. Cooper's name surfaced recently with the disclosure of Mrs. Clinton's home email server; "
              },
              {
                "-id": "0-30-95",
                "#text": "records showed he was listed as the contact for the , domain registration.),"
              },
              {
                "-id": "0-30-96",
                "#text": "The house was bought during the early part of Mrs. Clinton's tenure as secretary of state. "
              },
              {
                "-id": "0-30-97",
                "#text": "She did not cite it specifically on her financial disclosure reports, but listed an unidentified parcel of California real estate owned by her husband. "
              },
              {
                "-id": "0-30-98",
                "#text": "Her 2012 filing indicated the property was transferred to an undisclosed party on Christmas Eve that year, "
              },
              {
                "-id": "0-30-99",
                "#text": "and it does not show up at all in her most recent filing, for 2014. "
              },
              {
                "-id": "0-30-100",
                "#text": "On the public record, Calle Mayor L."
              },
              {
                "-id": "0-30-101",
                "#text": "L."
              },
              {
                "-id": "0-30-102",
                "#text": "C. "
              },
              {
                "-id": "0-30-103",
                "span": {
                  "-class": "negative",
                  "#text": "continues to hold the property, but changes to the company's ownership structure would not need to be disclosed"
                },
                "#text": ".,"
              },
              {
                "-id": "0-30-104",
                "#text": "Further muddying the ownership picture were comments Roger Clinton made in the interview. "
              },
              {
                "-id": "0-30-105",
                "#text": "Asked about Bill Clinton's purchase of the house, he said he shared ownership of it \""
              },
              {
                "-id": "0-30-106",
                "#text": "50-50 with Big Brother.\"\""
              },
              {
                "-id": "0-30-107",
                "#text": "I put 50 percent of the money into it,\"?Roger Clinton said.,"
              },
              {
                "-id": "0-30-108",
                "#text": "He did not elaborate on "
              },
              {
                "-id": "0-30-109",
                "#text": "when he had bought a share or "
              },
              {
                "-id": "0-30-110",
                "#text": "where he had obtained the money to do so. "
              },
              {
                "-id": "0-30-111",
                "span": {
                  "-class": "negative",
                  "#text": "Depending on the circumstances, such a purchase could have been problematic because of his tax debts"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-112",
                "#text": "according to tax lawyers. "
              },
              {
                "-id": "0-30-113",
                "#text": "When Calle Mayor bought the house in 2009, the Internal Revenue Service had a lien on all of Roger Clinton's assets because of $57,762 in unpaid taxes, "
              },
              {
                "-id": "0-30-114",
                "#text": "and California had a lien for $57,827, laying claim to \""
              },
              {
                "-id": "0-30-115",
                "#text": "property now owned or later acquired\"?"
              },
              {
                "-id": "0-30-116",
                "#text": "by him. "
              },
              {
                "-id": "0-30-117",
                "#text": "The liens were lifted in 2010 and 2011.,"
              },
              {
                "-id": "0-30-118",
                "#text": "David Holtz, a former I."
              },
              {
                "-id": "0-30-119",
                "#text": "R."
              },
              {
                "-id": "0-30-120",
                "#text": "S. "
              },
              {
                "-id": "0-30-121",
                "span": {
                  "-class": "negative",
                  "#text": "litigator in Los Angeles, said it could be considered tax evasion"
                },
                "#text": " if someone concealed ownership of property with the intent of not paying a tax debt. "
              },
              {
                "-id": "0-30-122",
                "#text": "On the other hand, he said, "
              },
              {
                "-id": "0-30-123",
                "#text": "if the debtor was in a repayment plan and not trying to be deceptive, "
              },
              {
                "-id": "0-30-124",
                "#text": "or if someone else bought the house and let the debtor live there, \""
              },
              {
                "-id": "0-30-125",
                "span": {
                  "-class": "positive",
                  "#text": "that would be no problem at all"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-30-126",
                "#text": "If I was still working at the I."
              },
              {
                "-id": "0-30-127",
                "#text": "R."
              },
              {
                "-id": "0-30-128",
                "#text": "S. "
              },
              {
                "-id": "0-30-129",
                "#text": "and someone came to me with this, "
              },
              {
                "-id": "0-30-130",
                "#text": "it would raise eyebrows and trigger me to dig further to find out what exactly was going on,\"?"
              },
              {
                "-id": "0-30-131",
                "#text": "Mr. "
              },
              {
                "-id": "0-30-132",
                "#text": "Holtz said.,"
              },
              {
                "-id": "0-30-133",
                "span": {
                  "-class": "positive",
                  "#text": "A person familiar with the Clinton family said the former president decided to make the purchase to help provide a stable living environment for Roger Clinton and his son"
                },
                "#text": ", "
              },
              {
                "-id": "0-30-134",
                "#text": "who was a teenager at the time. "
              },
              {
                "-id": "0-30-135",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The use of a limited liability company"
                  },
                  {
                    "-class": "positive",
                    "#text": "provide some financial protection for the former president"
                  }
                ],
                "#text": [
                  " was to ",
                  ", "
                ]
              },
              {
                "-id": "0-30-136",
                "#text": "as he was not going to be living in the home, according to this person, "
              },
              {
                "-id": "0-30-137",
                "#text": "who requested anonymity to speak about private matters involving the family.,"
              },
              {
                "-id": "0-30-138",
                "#text": "Roger Clinton did come into some money over the next couple of years, "
              },
              {
                "-id": "0-30-139",
                "span": {
                  "-class": "positive",
                  "#text": "after he was approached about helping the Houston builders win a Haiti reconstruction contract"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-140",
                "#text": "Mr. Coleman, one of the builders, said a mutual friend had introduced them to Roger, "
              },
              {
                "-id": "0-30-141",
                "#text": "who \""
              },
              {
                "-id": "0-30-142",
                "span": {
                  "-class": "positive",
                  "#text": "kept assuring us he could get something done"
                },
                "#text": ".\""
              },
              {
                "-id": "0-30-143",
                "#text": [
                  "The builders, whose proposal was called Living Modular and ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "involved low-cost concrete homes for Haitians"
                  },
                  {
                    "-class": "negative",
                    "#text": "displaced by the earthquake"
                  }
                ]
              },
              {
                "-id": "0-30-144",
                "#text": "paid Roger Clinton $5,000 a month, Mr. Coleman said. "
              },
              {
                "-id": "0-30-145",
                "#text": "Theirs was one of many in an expo in Haiti that showcased various housing plans; "
              },
              {
                "-id": "0-30-146",
                "#text": "Mr. Coleman said Bill Clinton had toured the builders' demonstration home, along with others, none of which were chosen in the end.,"
              },
              {
                "-id": "0-30-147",
                "#text": "Mr. "
              },
              {
                "-id": "0-30-148",
                "#text": "Coleman said Mr. Wiggins, Roger Clinton's lawyer, "
              },
              {
                "-id": "0-30-149",
                "#text": "had gotten involved in the effort as well, giving the builders hope the project might move forward, "
              },
              {
                "-id": "0-30-150",
                "#text": "to no avail.,\""
              },
              {
                "-id": "0-30-151",
                "#text": "He was basically trying to help Roger, because Roger was kind of a screwball, "
              },
              {
                "-id": "0-30-152",
                "#text": "you could never pin him down on anything,\"?"
              },
              {
                "-id": "0-30-153",
                "#text": "he said. \""
              },
              {
                "-id": "0-30-154",
                "span": {
                  "-class": "negative",
                  "#text": "I probably lost about half a million dollars over all on the whole thing"
                },
                "#text": ".\""
              },
              {
                "-id": "0-30-155",
                "#text": "Roger Clinton acknowledged that his former partners \""
              },
              {
                "-id": "0-30-156",
                "span": {
                  "-class": "negative",
                  "#text": "might be feeling a little burned"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-30-157",
                "span": {
                  "-class": "positive",
                  "#text": "but he said he had spent thousands of dollars of his own money as well and tried his best"
                },
                "#text": ". "
              },
              {
                "-id": "0-30-158",
                "#text": "He said his decision to get involved with a project that his brother could have some sway over was \""
              },
              {
                "-id": "0-30-159",
                "#text": "completely above board.\"\""
              },
              {
                "-id": "0-30-160",
                "span": {
                  "-class": "positive",
                  "#text": "I don't usually do it, but this time I really felt like I could do some good"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-30-161",
                "#text": "he said. \""
              },
              {
                "-id": "0-30-162",
                "#text": "Would I have made money out of it? "
              },
              {
                "-id": "0-30-163",
                "#text": "Sure, at least I hoped so. "
              },
              {
                "-id": "0-30-164",
                "#text": "I could have kept half and given half to charity. "
              },
              {
                "-id": "0-30-165",
                "#text": "I could be a philanthropist, too.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-31-0",
              "#text": "1436166000317"
            }
          },
          {
            "a": [
              {
                "-id": "0-32-0",
                "#text": "WASHINGTON \"? "
              },
              {
                "-id": "0-32-1",
                "#text": "The State Department released a trove of email messages on Tuesday night from ,'s first year as secretary of state amid deep curiosity in both parties about what they will show as she mounts her second campaign for the White House.,"
              },
              {
                "-id": "0-32-2",
                "span": {
                  "-class": "negative",
                  "#text": "Many of the messages concern"
                },
                "#text": " simple logistics and scheduling, with Mrs. Clinton confirming meetings at the White House or seeking to rearrange her calendar to accommodate various demands. "
              },
              {
                "-id": "0-32-3",
                "#text": [
                  "Others are messages from aides or other administration ",
                  " her public performances or checking to see "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "officials praising"
                }
              },
              {
                "-id": "0-32-4",
                "#text": "if she minded her email address being given out.,"
              },
              {
                "-id": "0-32-5",
                "span": {
                  "-class": "negative",
                  "#text": "Unlike , of emails released since Mrs. Clinton turned over messages to the State Department, these did not concern the terrorist attack in Benghazi"
                },
                "#text": ", "
              },
              {
                "-id": "0-32-6",
                "#text": "Libya, that has been the subject of a Republican-led congressional inquiry. "
              },
              {
                "-id": "0-32-7",
                "span": {
                  "-class": "negative",
                  "#text": "Instead, they cover a range of everyday events as well as matters like the war in Afghanistan"
                },
                "#text": ", "
              },
              {
                "-id": "0-32-8",
                "span": {
                  "-class": "negative",
                  "#text": "women's issues and the dispute between Turkey and Armenia"
                },
                "#text": " in 2009, three years before the ,.,"
              },
              {
                "-id": "0-32-9",
                "#text": "The cache of emails has been the subject of intense interest for months. "
              },
              {
                "-id": "0-32-10",
                "#text": "Although the State Department initially wanted to release the messages \"?"
              },
              {
                "-id": "0-32-11",
                "#text": "more than 55,000 pages \"?"
              },
              {
                "-id": "0-32-12",
                "#text": "all at once next January after reviewing them for sensitive material, a judge ordered the department to release them on a monthly basis. "
              },
              {
                "-id": "0-32-13",
                "#text": "The messages released on Tuesday night cover about 3,000 pages.,"
              },
              {
                "-id": "0-32-14",
                "#text": "The State Department said late\" "
              },
              {
                "-id": "0-32-15",
                "#text": "Tuesday\" "
              },
              {
                "-id": "0-32-16",
                "#text": "that portions of two dozen emails from this tranche had been redacted "
              },
              {
                "-id": "0-32-17",
                "#text": "because they were upgraded to \""
              },
              {
                "-id": "0-32-18",
                "#text": "classified status.\" "
              },
              {
                "-id": "0-32-19",
                "span": {
                  "-class": "negative",
                  "#text": "The emails were sent in 2009, and their contents were apparently not sensitive enough to national security at the time to have required a higher classification status"
                },
                "#text": ". "
              },
              {
                "-id": "0-32-20",
                "#text": "The State Department described the move \""
              },
              {
                "-id": "0-32-21",
                "#text": "routine\"?"
              },
              {
                "-id": "0-32-22",
                "#text": "when the government discloses documents to the public.,"
              },
              {
                "-id": "0-32-23",
                "#text": [
                  "It may take a day or so before the messages are thoroughly scrutinized, but a ",
                  " of state navigating a ",
                  " as part of an administration led by a president who defeated her for their party's nomination the year before. "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "quick examination on Tuesday night showed a secretary"
                  },
                  {
                    "-class": "negative",
                    "#text": "difficult political environment"
                  }
                ]
              },
              {
                "-id": "0-32-24",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "On several occasions, Mrs. Clinton clearly appeared"
                  },
                  {
                    "-class": "negative",
                    "#text": "concerned about possible disconnect with the White House"
                  }
                ],
                "#text": ".,\""
              },
              {
                "-id": "0-32-25",
                "#text": "I heard on the radio that there is a Cabinet mtg this am,\"?"
              },
              {
                "-id": "0-32-26",
                "#text": "she wrote aides on June 8, "
              },
              {
                "-id": "0-32-27",
                "#text": "2009. \""
              },
              {
                "-id": "0-32-28",
                "#text": "Is there? "
              },
              {
                "-id": "0-32-29",
                "#text": "Can I go? "
              },
              {
                "-id": "0-32-30",
                "#text": "If not, "
              },
              {
                "-id": "0-32-31",
                "#text": "who are we sending?\"?("
              },
              {
                "-id": "0-32-32",
                "#text": "It turned out it was not a cabinet meeting but one for lower-level officials.),"
              },
              {
                "-id": "0-32-33",
                "#text": "Four days later, she emailed aides after showing up for a 10:45 a.m. meeting at the White House only to be told it was canceled. \""
              },
              {
                "-id": "0-32-34",
                "#text": "This is the second time this has happened,\"?"
              },
              {
                "-id": "0-32-35",
                "#text": "she wrote. \""
              },
              {
                "-id": "0-32-36",
                "#text": "What's up???\""
              },
              {
                "-id": "0-32-37",
                "#text": "The same month, she expressed curiosity at a decision by the administration to not participate in a meeting of the United States Conference of Mayors. \""
              },
              {
                "-id": "0-32-38",
                "#text": "Maybe they don't want to be associated w big cities?\"?"
              },
              {
                "-id": "0-32-39",
                "#text": "she wrote. \""
              },
              {
                "-id": "0-32-40",
                "#text": "I had a lot of support from the Conf and the mayors so I hope that's not it.\""
              },
              {
                "-id": "0-32-41",
                "span": {
                  "-class": "positive",
                  "#text": "But aides to President Obama clearly were intent on keeping her in the fold, at least with flattering messages"
                },
                "#text": ". "
              },
              {
                "-id": "0-32-42",
                "span": {
                  "-class": "negative",
                  "#text": "After she injured her elbow in a fall, David Axelrod, the president's senior adviser"
                },
                "#text": ", "
              },
              {
                "-id": "0-32-43",
                "#text": "sent her a message with the subject line \""
              },
              {
                "-id": "0-32-44",
                "span": {
                  "-class": "negative",
                  "#text": "So sorry"
                },
                "#text": "!\"?"
              },
              {
                "-id": "0-32-45",
                "span": {
                  "-class": "positive",
                  "#text": "expressing hope that she get better soon"
                },
                "#text": ". \""
              },
              {
                "-id": "0-32-46",
                "#text": "You are an all-star player, "
              },
              {
                "-id": "0-32-47",
                "#text": "and we need you for the long run!\"?"
              },
              {
                "-id": "0-32-48",
                "#text": "he wrote.,"
              },
              {
                "-id": "0-32-49",
                "span": {
                  "-class": "negative",
                  "#text": "Still, the suspicion ran deep"
                },
                "#text": ". "
              },
              {
                "-id": "0-32-50",
                "#text": "Before Mr. Axelrod sent her the message, "
              },
              {
                "-id": "0-32-51",
                "#text": "he had to ask her aides for her address, and the aides checked with her first about whether it was O."
              },
              {
                "-id": "0-32-52",
                "#text": "K. "
              },
              {
                "-id": "0-32-53",
                "#text": "to give to him. "
              },
              {
                "-id": "0-32-54",
                "#text": "They similarly asked whether it was all right to give her address to Rahm Emanuel, "
              },
              {
                "-id": "0-32-55",
                "#text": "then the White House chief of staff.,"
              },
              {
                "-id": "0-32-56",
                "#text": "Her policy priorities come through in the messages as well. "
              },
              {
                "-id": "0-32-57",
                "#text": "In July 2009, when an aide forwarded Mrs. Clinton a message about treatment of gays and lesbians in Iraq, "
              },
              {
                "-id": "0-32-58",
                "#text": "both before and after the reign of Saddam Hussein, she wrote back quickly: \""
              },
              {
                "-id": "0-32-59",
                "span": {
                  "-class": "negative",
                  "#text": "So sad and terrible"
                },
                "#text": ". "
              },
              {
                "-id": "0-32-60",
                "#text": "We should ask Chris Hill,\"?the American ambassador, \"to raise w govt.\""
              },
              {
                "-id": "0-32-61",
                "#text": "Mrs. "
              },
              {
                "-id": "0-32-62",
                "#text": "Clinton's husband, former President Bill Clinton, is known for not using email, "
              },
              {
                "-id": "0-32-63",
                "#text": "but he makes cameo appearances in messages from others. "
              },
              {
                "-id": "0-32-64",
                "#text": "At times, it seems, the Clintons communicated with each other through their aides.,"
              },
              {
                "-id": "0-32-65",
                "#text": "In May 2009, Doug Band, the former president's adviser, wrote to Cheryl Mills, the secretary's chief of staff, "
              },
              {
                "-id": "0-32-66",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "to inform her that Mr. Clinton had accepted the role of United Nations"
                  },
                  {
                    "-class": "positive",
                    "#text": "special envoy to Haiti"
                  }
                ],
                "#text": " and that the news had begun to leak. \""
              },
              {
                "-id": "0-32-67",
                "#text": "WJC said he was going to call HRC "
              },
              {
                "-id": "0-32-68",
                "#text": "but hasn't had time,\"?Mr. "
              },
              {
                "-id": "0-32-69",
                "#text": "Band wrote, using initials for the couple. "
              },
              {
                "-id": "0-32-70",
                "#text": "Ms. Mills forwarded the email to another aide and said, \"You need to walk this to HRC "
              },
              {
                "-id": "0-32-71",
                "#text": "if she is not gone.\""
              },
              {
                "-id": "0-32-72",
                "#text": [
                  "While an ostensibly nonpartisan figure as secretary, ",
                  " $23 million campaign debt from 2008. \""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton clearly still worried about retiring her"
                }
              },
              {
                "-id": "0-32-73",
                "span": {
                  "-class": "positive",
                  "#text": "Thank you so very much"
                },
                "#text": "!!!\"?"
              },
              {
                "-id": "0-32-74",
                "#text": "her chief of protocol, Capricia Marshall, wrote to Paul Begala, a longtime Clinton friend and Democratic strategist, "
              },
              {
                "-id": "0-32-75",
                "#text": "in April 2009. \""
              },
              {
                "-id": "0-32-76",
                "#text": "We raised 500K from the email contest!! "
              },
              {
                "-id": "0-32-77",
                "span": {
                  "-class": "positive",
                  "#text": "You are all amazing"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-32-78",
                "span": {
                  "-class": "positive",
                  "#text": "the world adores you"
                },
                "#text": "!\"?"
              },
              {
                "-id": "0-32-79",
                "#text": "She added, \""
              },
              {
                "-id": "0-32-80",
                "span": {
                  "-class": "negative",
                  "#text": "You put a serious hole in HRC debt"
                },
                "#text": "!\""
              },
              {
                "-id": "0-32-81",
                "#text": "Mr. "
              },
              {
                "-id": "0-32-82",
                "#text": "Begala responded by asking for talking points before he went on CNN to rate Mrs. Clinton's early performance. "
              },
              {
                "-id": "0-32-83",
                "#text": "Ms. Marshall referred him to several State Department aides. "
              },
              {
                "-id": "0-32-84",
                "#text": "After his appearance, Mr. Begala emailed back: \""
              },
              {
                "-id": "0-32-85",
                "#text": "I gave Sec. "
              },
              {
                "-id": "0-32-86",
                "#text": "Clinton an A+ in our dopey CNN report card last night.\"?"
              },
              {
                "-id": "0-32-87",
                "#text": "Ms. "
              },
              {
                "-id": "0-32-88",
                "#text": "Mills forwarded that to Mrs. Clinton with an \""
              },
              {
                "-id": "0-32-89",
                "#text": "FYI.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-33-0",
              "#text": "1435647600368"
            }
          },
          {
            "a": [
              {
                "-id": "0-34-0",
                "#text": [
                  "w",
                  ",D"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "ill seek out donors to her presidential campaign from a Democratic fund-raising landscape vastly altered since her first presidential bid and far more ideologically aligned with the party's liberal activists."
                }
              },
              {
                "-id": "0-34-1",
                "span": {
                  "-class": "positive",
                  "#text": "emocrats now get far less money from Wall Street, military contractors, health care companies and other industries that for decades ladled out cash more evenly to both parties,"
                },
                "#text": " a"
              },
              {
                "-id": "0-34-2",
                "span": {
                  "-class": "positive",
                  "#text": "ccording to a New York Times analysis of data collected by the Center for Responsive Politics,"
                },
                "#text": " a"
              },
              {
                "-id": "0-34-3",
                "#text": " watchdog group. A"
              },
              {
                "-id": "0-34-4",
                "span": {
                  "-class": "positive",
                  "#text": "nd the party now relies far more on constituencies that have achieved new clout in the era of "
                },
                "#text": "\",\"?a"
              },
              {
                "-id": "0-34-5",
                "#text": "nd carefully targeted digital fund-raising.,A"
              },
              {
                "-id": "0-34-6",
                "span": {
                  "-class": "positive",
                  "#text": "s many as one-fifth of elite Democratic "
                },
                "#text": "\"b"
              },
              {
                "-id": "0-34-7",
                "#text": "undlers\"?\"?v"
              },
              {
                "-id": "0-34-8",
                "span": {
                  "-class": "positive",
                  "#text": "olunteers who raise money from friends and business associates "
                },
                "#text": "\"?a"
              },
              {
                "-id": "0-34-9",
                "span": {
                  "-class": "positive",
                  "#text": "re active in gay-rights causes or are themselves gay or lesbian."
                },
                "#text": " O"
              },
              {
                "-id": "0-34-10",
                "span": {
                  "-class": "positive",
                  "#text": "utside Democratic groups rely heavily on wealthy environmentalists, such as the billionaires Tom Steyer and Michael R."
                },
                "#text": " B"
              },
              {
                "-id": "0-34-11",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "loomberg, and on labor unions, whose financial might has been magnified by the Supreme Court's Citizens United decision "
                  },
                  {
                    "-class": "negative",
                    "#text": "heir membership rolls decline."
                  }
                ],
                "#text": [
                  "in 2010 even as t",
                  ",F"
                ]
              },
              {
                "-id": "0-34-12",
                "#text": "emale donors a"
              },
              {
                "-id": "0-34-13",
                "#text": "nd bundlers have become both a bigger source of funding and a more organized financial force in party affairs: E"
              },
              {
                "-id": "0-34-14",
                "#text": "mily's List, a political group dedicated to electing female Democrats, now has five times as many members and twice as many donors as it did when Mrs. Clinton ran for president in 2008. A"
              },
              {
                "-id": "0-34-15",
                "#text": "nd Democrats now rely far more on grass-roots donors to be financially competitive with Republicans. , c"
              },
              {
                "-id": "0-34-16",
                "#text": "ommittees raised $200 million from donors giving $200 or less in 2014, according to Federal Election Commission records, t"
              },
              {
                "-id": "0-34-17",
                "#text": "wice as much as in 2008.,T"
              },
              {
                "-id": "0-34-18",
                "span": {
                  "-class": "positive",
                  "#text": "he shift in the party's donor base is being driven,"
                },
                "#text": " in part, by the same polarizing demographic a"
              },
              {
                "-id": "0-34-19",
                "#text": "nd political trends that have made the Democratic Party more ideologically liberal and have aligned business more closely with Republicans.,\"H"
              },
              {
                "-id": "0-34-20",
                "span": {
                  "-class": "positive",
                  "#text": "istorically, business was very pragmatic "
                },
                "#text": "and played both sides,\"?said Simon Rosenberg, president of NDN, a"
              },
              {
                "-id": "0-34-21",
                "#text": " left-leaning think tank with ties to business leaders in Washington. \"N"
              },
              {
                "-id": "0-34-22",
                "#text": "ow, business had thrown its lot in with the Republicans. I"
              },
              {
                "-id": "0-34-23",
                "span": {
                  "-class": "negative",
                  "#text": "t means that the traditional arguments of business are losing their grip on Democrats, in part "
                },
                "#text": "b"
              },
              {
                "-id": "0-34-24",
                "#text": "ecause business isn't any longer investing in Democrats.\"T"
              },
              {
                "-id": "0-34-25",
                "#text": "he transformation is already reflected in Mrs. Clinton's campaign and speeches. S"
              },
              {
                "-id": "0-34-26",
                "span": {
                  "-class": "negative",
                  "#text": "he sided with House Democrats and labor unions during the intraparty battle over a new Pacific trade deal,"
                },
                "#text": " ,. A"
              },
              {
                "-id": "0-34-27",
                "span": {
                  "-class": "negative",
                  "#text": "nd she criticized "
                },
                "#text": "\"h"
              },
              {
                "-id": "0-34-28",
                "#text": "edge fund managers\"?i"
              },
              {
                "-id": "0-34-29",
                "span": {
                  "-class": "negative",
                  "#text": "n her , in New York City, the sort of rhetorical flourish she carefully avoided in the past."
                },
                "#text": ",H"
              },
              {
                "-id": "0-34-30",
                "span": {
                  "-class": "negative",
                  "#text": "er stump speech sharply attacks Republicans on issues that, Democratic strategists have learned,"
                },
                "#text": " c"
              },
              {
                "-id": "0-34-31",
                "#text": "an loosen floods of money from grass-roots donors, such as reproductive rights, gay rights and equal pay for women.,\"S"
              },
              {
                "-id": "0-34-32",
                "#text": "he was always talking about these issues, but not with the same rhetoric,\"?said Howard Dean, t"
              },
              {
                "-id": "0-34-33",
                "#text": "he former Democratic Party chairman and governor of Vermont. \"A"
              },
              {
                "-id": "0-34-34",
                "#text": "nd that's because her base has moved left and the country has moved the left. I"
              },
              {
                "-id": "0-34-35",
                "#text": " think she can be more of who she is.\"M"
              },
              {
                "-id": "0-34-36",
                "#text": "rs. C"
              },
              {
                "-id": "0-34-37",
                "#text": "linton's rivals for the nomination are already benefiting from the shift. B"
              },
              {
                "-id": "0-34-38",
                "span": {
                  "-class": "positive",
                  "#text": "ernie Sanders, the Vermont socialist running for the Democratic nomination, is not yet the favored candidate of deep-pocketed Democratic donors."
                },
                "#text": " B"
              },
              {
                "-id": "0-34-39",
                "span": {
                  "-class": "positive",
                  "#text": "ut he has already raised at least $8.3 million in online contributions through "
                },
                "#text": ",, a fund-raising committee that serves as a conduit for Democratic campaigns.,A"
              },
              {
                "-id": "0-34-40",
                "span": {
                  "-class": "positive",
                  "#text": "t the same time, industries that wooed Democrats with a significant share of their political donations "
                },
                "#text": "have steadily shifted more of their giving to Republicans, r"
              },
              {
                "-id": "0-34-41",
                "span": {
                  "-class": "positive",
                  "#text": "eflecting not only the country's broader polarization but also years of bruising battles with the Obama administration and Democrats over issues like "
                },
                "#text": ",, t"
              },
              {
                "-id": "0-34-42",
                "#text": "he , oil pipeline and nutrition guidelines.,A"
              },
              {
                "-id": "0-34-43",
                "#text": "gribusiness and mining and oil interests, along with the financial services and health care industries, h"
              },
              {
                "-id": "0-34-44",
                "#text": "ave shifted substantially more money to Republicans over the last three two-year election cycles, according to the Times analysis.,T"
              },
              {
                "-id": "0-34-45",
                "#text": [
                  "hat shift was exacerbated, some longtime Democratic fund-raisers said, by Mr. Obama's decision n",
                  " W"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "ot to accept contributions to his presidential campaigns from political action committees."
                }
              },
              {
                "-id": "0-34-46",
                "#text": "hile PACs account for a relatively small slice of money in presidential campaigns, their fund-raising historically acted as a bridge between Democratic politicians or lobbyists and businesses that were more Republican in outlook.,\"T"
              },
              {
                "-id": "0-34-47",
                "#text": "he fund-raising world in 2015 has changed dramatically from the fund-raising world in 2012 \"?w"
              },
              {
                "-id": "0-34-48",
                "#text": "hich was a dramatic change from 2008,\"?said Representative Steve Israel, a New York Democrat and the former head of the Democratic Congressional Campaign Committee, w"
              },
              {
                "-id": "0-34-49",
                "#text": "hich now raises half its cash from small donors online. \"I"
              },
              {
                "-id": "0-34-50",
                "#text": "t's new rules, it's new tools, it's new technologies, and it's new donors.\"A"
              },
              {
                "-id": "0-34-51",
                "#text": "t the same time, older constituencies have become bigger players in Democratic fund-raising. M"
              },
              {
                "-id": "0-34-52",
                "#text": "ore grass-roots fund-raising and bundling by groups like Emily's List, for example, have created a financial constituency for issues such as equal pay.,\"W"
              },
              {
                "-id": "0-34-53",
                "#text": "e're not the full funders of any candidate,\"?said ,, the president of Emily's List and a close ally of Mrs. Clinton's. \"B"
              },
              {
                "-id": "0-34-54",
                "#text": "ut we're the extra bit that allows them more time to do what they need to do and the ability to speak on behalf of all women and families.\"S"
              },
              {
                "-id": "0-34-55",
                "span": {
                  "-class": "negative",
                  "#text": "tung by the defeat of Mr. Obama's climate-change legislation "
                },
                "#text": "in 2009, environmental groups have set up new bundler networks to raise \"g"
              },
              {
                "-id": "0-34-56",
                "#text": "reen-branded\"?d"
              },
              {
                "-id": "0-34-57",
                "#text": "ollars for candidates. T"
              },
              {
                "-id": "0-34-58",
                "#text": "hey have also emerged as big spenders on election-themed political advertising. I"
              },
              {
                "-id": "0-34-59",
                "span": {
                  "-class": "positive",
                  "#text": "n 2014, the League of Conservation Voters and Mr. Steyer's NextGen Climate Action, a super PAC,"
                },
                "#text": " s"
              },
              {
                "-id": "0-34-60",
                "#text": "pent more on independent election advertising than any other Democratic-aligned issue groups., i"
              },
              {
                "-id": "0-34-61",
                "span": {
                  "-class": "positive",
                  "#text": "s also a top issue among the party's super PAC donors, particularly Mr. Steyer."
                },
                "#text": " T"
              },
              {
                "-id": "0-34-62",
                "span": {
                  "-class": "positive",
                  "#text": "his month, Mr. Steyer issued a statement pointedly praising one of Mrs. Clinton's Democratic rivals,"
                },
                "#text": " ,, f"
              },
              {
                "-id": "0-34-63",
                "#text": "or \"p"
              },
              {
                "-id": "0-34-64",
                "span": {
                  "-class": "positive",
                  "#text": "resenting real, concrete solutions to climate change."
                },
                "#text": "\"F"
              },
              {
                "-id": "0-34-65",
                "span": {
                  "-class": "positive",
                  "#text": "or Mrs. Clinton, the party's shifting financial fortunes may be a double-edged sword."
                },
                "#text": " T"
              },
              {
                "-id": "0-34-66",
                "span": {
                  "-class": "positive",
                  "#text": "hey could liberate her to more forcefully or directly address issues that are important to the party's base,"
                },
                "#text": " e"
              },
              {
                "-id": "0-34-67",
                "span": {
                  "-class": "negative",
                  "#text": "specially on issues of wealth inequality, taxation and regulation."
                },
                "#text": ",\"W"
              },
              {
                "-id": "0-34-68",
                "#text": "hat it does allow \"?a"
              },
              {
                "-id": "0-34-69",
                "span": {
                  "-class": "positive",
                  "#text": "nd I think this is a particularly good thing in this year,"
                },
                "#text": " w"
              },
              {
                "-id": "0-34-70",
                "#text": "hen the biggest issue is fairness for working people \"?i"
              },
              {
                "-id": "0-34-71",
                "#text": "t does allow people to vote their consciences more easily,\"?Mr. D"
              },
              {
                "-id": "0-34-72",
                "#text": "ean said.,H"
              },
              {
                "-id": "0-34-73",
                "#text": "e added: \"T"
              },
              {
                "-id": "0-34-74",
                "#text": "here's no particular reason why Democrats even have to think about people on Wall Street. A"
              },
              {
                "-id": "0-34-75",
                "#text": "nd they won't.\"B"
              },
              {
                "-id": "0-34-76",
                "span": {
                  "-class": "negative",
                  "#text": "ut Mrs. Clinton's campaign is particularly sensitive to criticisms that she is moving left or tailoring her message to the party's liberal base."
                },
                "#text": " (A"
              },
              {
                "-id": "0-34-77",
                "#text": " spokesman declined to comment for this article.) A"
              },
              {
                "-id": "0-34-78",
                "#text": [
                  "nd there are signs that Mrs. Clinton, whose husband, former President Bill Clinton, became a s",
                  "by rebranding the Democrats as business-friendly, w"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "uccessful fund-raiser "
                }
              },
              {
                "-id": "0-34-79",
                "#text": "ill seek more of an equilibrium.,U"
              },
              {
                "-id": "0-34-80",
                "span": {
                  "-class": "positive",
                  "#text": "nlike Mr. Obama, her campaign is aggressively raising money from business PACs, according to two Clinton fund-raisers."
                },
                "#text": " A"
              },
              {
                "-id": "0-34-81",
                "#text": "nd Mrs. Clinton, like the Republicans who wish to run against her, h"
              },
              {
                "-id": "0-34-82",
                "#text": "as not yet pledged to voluntarily disclose the names of her bundlers.,M"
              },
              {
                "-id": "0-34-83",
                "#text": "rs. C"
              },
              {
                "-id": "0-34-84",
                "span": {
                  "-class": "positive",
                  "#text": "linton's most delicate dance may be with Wall Street."
                },
                "#text": " I"
              },
              {
                "-id": "0-34-85",
                "span": {
                  "-class": "positive",
                  "#text": "nvestment banks like Goldman Sachs have for years been a source of personal, political and philanthropic wealth for the Clinton family."
                },
                "#text": " B"
              },
              {
                "-id": "0-34-86",
                "#text": "ut the industry is now closely allied with Speaker John A. B"
              },
              {
                "-id": "0-34-87",
                "span": {
                  "-class": "positive",
                  "#text": "oehner and congressional Republicans seeking to roll back or repeal elements of the Dodd-Frank financial reforms."
                },
                "#text": ",A"
              },
              {
                "-id": "0-34-88",
                "#text": "lmost two-thirds of money from investment banks and three-quarters of donations from credit card companies and lenders now flow to Republicans, a"
              },
              {
                "-id": "0-34-89",
                "span": {
                  "-class": "positive",
                  "#text": "nd donations from hedge fund and private equity executives were a significant source of cash for Republican super PACs during the 2012 election cycle."
                },
                "#text": ",M"
              },
              {
                "-id": "0-34-90",
                "#text": "rs. C"
              },
              {
                "-id": "0-34-91",
                "span": {
                  "-class": "positive",
                  "#text": "linton backed the Dodd-Frank bill and other financial reforms, including elimination of the "
                },
                "#text": "\"c"
              },
              {
                "-id": "0-34-92",
                "#text": "arried interest\"?l"
              },
              {
                "-id": "0-34-93",
                "span": {
                  "-class": "negative",
                  "#text": "oophole "
                },
                "#text": "used by private equity executives to lower their tax rate. B"
              },
              {
                "-id": "0-34-94",
                "span": {
                  "-class": "positive",
                  "#text": "ut several Democratic donors and bundlers with Wall Street ties said they believed shewould be well positioned to repair "
                },
                "#text": "that relationship; m"
              },
              {
                "-id": "0-34-95",
                "span": {
                  "-class": "negative",
                  "#text": "any financial executives, they said, viewed her more barbed language in recent weeks as necessary posturing."
                },
                "#text": ",\"T"
              },
              {
                "-id": "0-34-96",
                "span": {
                  "-class": "positive",
                  "#text": "he Clinton operation would like "
                },
                "#text": "to have everybody in, and everybody giving,\"?said one longtime Clinton fund-raiser, w"
              },
              {
                "-id": "0-34-97",
                "#text": [
                  "ho asked for anonymity so as n",
                  " \"T"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "ot to damage his relationship with Mrs. Clinton's team."
                }
              },
              {
                "-id": "0-34-98",
                "#text": "hey usually try to find a way to have everyone on board.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-35-0",
              "#text": "1435561200535"
            }
          },
          {
            "a": [
              {
                "-id": "0-36-0",
                "#text": "WASHINGTON \"? "
              },
              {
                "-id": "0-36-1",
                "#text": "The State Department said on Thursday that 15 emails sent or received by , "
              },
              {
                "-id": "0-36-2",
                "span": {
                  "-class": "negative",
                  "#text": "were missing from records"
                },
                "#text": " that she has turned over, raising new questions about "
              },
              {
                "-id": "0-36-3",
                "#text": "whether she deleted work-related emails from the private account she used exclusively while in office.,"
              },
              {
                "-id": "0-36-4",
                "#text": "The disclosure appeared to open the door for Republicans on Capitol Hill to get more deeply involved in the issue. "
              },
              {
                "-id": "0-36-5",
                "#text": "Senator Lindsey Graham, Republican of South Carolina, who is running for president, "
              },
              {
                "-id": "0-36-6",
                "#text": [
                  "said he planned to send a series of questions to the State Department about the ",
                  " and about why it allowed her to use the personal account.,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "missing emails"
                }
              },
              {
                "-id": "0-36-7",
                "#text": "Republicans said that the State Department's statement was likely to increase pressure on the House speaker, "
              },
              {
                "-id": "0-36-8",
                "#text": "John A. "
              },
              {
                "-id": "0-36-9",
                "#text": "Boehner of Ohio, to subpoena the server in Mrs. Clinton's home that housed the account.,"
              },
              {
                "-id": "0-36-10",
                "#text": "Mrs. "
              },
              {
                "-id": "0-36-11",
                "#text": "Clinton has said that she gave the State Department about 50,000 pages of emails that she deemed to be related to her work as secretary of state and deleted roughly the same number. "
              },
              {
                "-id": "0-36-12",
                "#text": "She said the messages she deleted were personal, relating to topics like yoga, family vacations and her mother's funeral.,"
              },
              {
                "-id": "0-36-13",
                "span": {
                  "-class": "negative",
                  "#text": "Her longtime confidant and adviser Sidney Blumenthal, responding two weeks ago to a subpoena from the House committee investigating the 2012 attacks in Benghazi"
                },
                "#text": ", "
              },
              {
                "-id": "0-36-14",
                "#text": "Libya, gave it dozens of emails he had exchanged with Mrs. Clinton "
              },
              {
                "-id": "0-36-15",
                "#text": "when she was in office. "
              },
              {
                "-id": "0-36-16",
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Blumenthal did not work at the State Department at the time"
                },
                "#text": ", "
              },
              {
                "-id": "0-36-17",
                "#text": [
                  "but he routinely provided her with ",
                  ", some with ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "intelligence memos about Libya"
                  },
                  {
                    "-class": "negative",
                    "#text": "dubious information"
                  }
                ]
              },
              {
                "-id": "0-36-18",
                "#text": "which Mrs. Clinton circulated to her deputies.,"
              },
              {
                "-id": "0-36-19",
                "#text": "State Department officials then crosschecked the emails from Mr. Blumenthal with the ones Mrs. Clinton had handed over and discovered that she had not provided nine of them and portions of six others.,"
              },
              {
                "-id": "0-36-20",
                "#text": "Nick Merrill, a spokesman for Mrs. Clinton, who is running for president, "
              },
              {
                "-id": "0-36-21",
                "#text": "said that she had given the State Department \""
              },
              {
                "-id": "0-36-22",
                "#text": "over 55,000 pages of materials,\"?including \""
              },
              {
                "-id": "0-36-23",
                "#text": "all emails in her possession from Mr. Blumenthal.\""
              },
              {
                "-id": "0-36-24",
                "#text": "The chairman of the House committee, Trey Gowdy, Republican of South Carolina, said that many of the emails that Mrs. Clinton had not handed over showed that \"she was soliciting and regularly corresponding with Sidney Blumenthal, "
              },
              {
                "-id": "0-36-25",
                "span": {
                  "-class": "positive",
                  "#text": "who was passing unvetted intelligence information about Libya from a source with a financial interest in the country"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-36-26",
                "span": {
                  "-class": "negative",
                  "#text": "It just so happens these emails directly contradict her public statement that the messages from Blumenthal were unsolicited"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-36-27",
                "#text": "he said. "
              },
              {
                "-id": "0-36-28",
                "#text": "Mr. Blumenthal identified the source of his information as Tyler Drumheller, a former high-ranking C."
              },
              {
                "-id": "0-36-29",
                "#text": "I."
              },
              {
                "-id": "0-36-30",
                "#text": "A. "
              },
              {
                "-id": "0-36-31",
                "#text": "official, according to a person with knowledge of his testimony to the Benghazi panel. "
              },
              {
                "-id": "0-36-32",
                "#text": "Mr. Drumheller was part of a group that sought to do business in Libya.,"
              },
              {
                "-id": "0-36-33",
                "span": {
                  "-class": "negative",
                  "#text": "Supporters of Mrs. Clinton have argued"
                },
                "#text": " that the committee's mission has crept far beyond its original scope: "
              },
              {
                "-id": "0-36-34",
                "span": {
                  "-class": "negative",
                  "#text": "to investigate the Benghazi attacks"
                },
                "#text": ", "
              },
              {
                "-id": "0-36-35",
                "#text": "which killed four Americans, including Ambassador J. "
              },
              {
                "-id": "0-36-36",
                "#text": "Christopher Stevens. "
              },
              {
                "-id": "0-36-37",
                "#text": "Republican committee members have said that they are within their right to look into her email use because the resolution that created the panel directed them to examine how the administration complied with previous inquiries into the attacks. "
              },
              {
                "-id": "0-36-38",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton's emails relating to the attacks"
                },
                "#text": " were not handed over to any of the panels conducting those inquiries.,"
              },
              {
                "-id": "0-36-39",
                "#text": "Other panels in Congress may consider investigating the matter. "
              },
              {
                "-id": "0-36-40",
                "#text": "Mr. Graham, who oversees a Senate subcommittee with sway over the State Department's budget, "
              },
              {
                "-id": "0-36-41",
                "#text": "said that the department \""
              },
              {
                "-id": "0-36-42",
                "span": {
                  "-class": "negative",
                  "#text": "seems to have a system that is not working very well"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-36-43",
                "#text": "in regards to its production of documents to Congress.,\""
              },
              {
                "-id": "0-36-44",
                "#text": "I'm going to ask them "
              },
              {
                "-id": "0-36-45",
                "#text": "whether they think Mrs. Clinton has handed over everything she should and what they are going to do about it,\"?"
              },
              {
                "-id": "0-36-46",
                "#text": "he said. \""
              },
              {
                "-id": "0-36-47",
                "#text": "And "
              },
              {
                "-id": "0-36-48",
                "#text": "if they give me runaround responses, "
              },
              {
                "-id": "0-36-49",
                "#text": "we'll drag them up on Capitol Hill and make them answer these questions in public.\""
              },
              {
                "-id": "0-36-50",
                "#text": "While the State Department acknowledged that it did not have several of Mrs. Clinton's emails, "
              },
              {
                "-id": "0-36-51",
                "#text": "it also told the Benghazi committee that it had not turned over other messages of hers. "
              },
              {
                "-id": "0-36-52",
                "span": {
                  "-class": "negative",
                  "#text": "The department said that it had not done so because the contents of those messages fell outside the requests made by the committee"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-36-53",
                "span": {
                  "-class": "positive",
                  "#text": "The State Department is working diligently"
                },
                "#text": " to review and publish the 55,000 pages of emails we received from former Secretary Clinton,\"?"
              },
              {
                "-id": "0-36-54",
                "#text": "it said in a statement.,"
              },
              {
                "-id": "0-36-55",
                "span": {
                  "-class": "negative",
                  "#text": "That statement is unlikely to satisfy the committee"
                },
                "#text": ", "
              },
              {
                "-id": "0-36-56",
                "span": {
                  "-class": "positive",
                  "#text": "which believes it has been clear in its requests"
                },
                "#text": ". "
              },
              {
                "-id": "0-36-57",
                "span": {
                  "-class": "negative",
                  "#text": "Members of the panel have contended that the State Department has withheld documents to protect Mrs. Clinton and grind the investigation to a halt"
                },
                "#text": ". "
              },
              {
                "-id": "0-36-58",
                "#text": [
                  "State Department officials have said that one of the reasons it has taken ",
                  ". "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "so long to produce documents is that the department's record-keeping system is cumbersome"
                }
              },
              {
                "-id": "0-36-59",
                "#text": "They have also said that the committee has not been specific enough in its requests."
              }
            ]
          },
          {
            "a": {
              "-id": "0-37-0",
              "#text": "1435215600429"
            }
          },
          {
            "a": [
              {
                "-id": "0-38-0",
                "#text": "When Jesse Lehrich heard he might have a chance to work on ,'s presidential campaign, "
              },
              {
                "-id": "0-38-1",
                "#text": "he did what most young staffers did. "
              },
              {
                "-id": "0-38-2",
                "#text": "He moved to New York as an unpaid volunteer until Mrs. Clinton officially announced her candidacy and opened her headquarters in Downtown Brooklyn.,"
              },
              {
                "-id": "0-38-3",
                "#text": [
                  "First, he stayed with his brother in a one-bedroom in Carroll Gardens, ,, until his ",
                  ".,\""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "eight boxes of clothes in the living room started to become annoying"
                }
              },
              {
                "-id": "0-38-4",
                "#text": "He said: \""
              },
              {
                "-id": "0-38-5",
                "#text": "I hope this isn't a long-term solution, "
              },
              {
                "-id": "0-38-6",
                "#text": "but I won't let you sleep on the street,'\"??Mr. "
              },
              {
                "-id": "0-38-7",
                "#text": "Lehrich, who turns 26 this weekend, said of his older brother.,"
              },
              {
                "-id": "0-38-8",
                "span": {
                  "-class": "positive",
                  "#text": "Eventually, he found a room in an East Village apartment just above the glowing red silhouette of a rooster that marks the famed gay bar the Cock"
                },
                "#text": ".,"
              },
              {
                "-id": "0-38-9",
                "#text": "Mr. "
              },
              {
                "-id": "0-38-10",
                "#text": "Lehrich has three roommates and his room does not have windows, but at $1,700 a month (partly paid for with his saved-up bar mitzvah money), "
              },
              {
                "-id": "0-38-11",
                "#text": "the price was right. \""
              },
              {
                "-id": "0-38-12",
                "#text": "All I'll be doing is working and sleeping,\"?"
              },
              {
                "-id": "0-38-13",
                "#text": "he said, \""
              },
              {
                "-id": "0-38-14",
                "#text": "so who needs windows?\""
              },
              {
                "-id": "0-38-15",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "For decades, idealistic twenty-somethings have shunned higher-paying"
                  },
                  {
                    "-class": "negative",
                    "#text": "working to get a candidate to the White House"
                  }
                ],
                "#text": [
                  " and more permanent jobs for the altruism and adrenaline rush of ",
                  ". "
                ]
              },
              {
                "-id": "0-38-16",
                "span": {
                  "-class": "negative",
                  "#text": "But the staffers who have signed up for the Clinton campaign face a daunting obstacle"
                },
                "#text": ": "
              },
              {
                "-id": "0-38-17",
                "#text": "the , real estate market.,"
              },
              {
                "-id": "0-38-18",
                "#text": "In Iowa and ,, \"supporter housing,\"?the practice of locals hosting the army of young volunteers who descend on the state each election cycle, "
              },
              {
                "-id": "0-38-19",
                "span": {
                  "-class": "positive",
                  "#text": "is a time-honored tradition"
                },
                "#text": ". "
              },
              {
                "-id": "0-38-20",
                "#text": "Every political organizer has tales of talking about the days of F."
              },
              {
                "-id": "0-38-21",
                "#text": "D."
              },
              {
                "-id": "0-38-22",
                "#text": "R. "
              },
              {
                "-id": "0-38-23",
                "span": {
                  "-class": "negative",
                  "#text": "with an old lady in Waterloo or sharing a bunk bed with the son of a union organizer in Manchester"
                },
                "#text": ". "
              },
              {
                "-id": "0-38-24",
                "span": {
                  "-class": "negative",
                  "#text": "But in New York, the situation is not so straightforward"
                },
                "#text": ". "
              },
              {
                "-id": "0-38-25",
                "#text": "Few New Yorkers have the extra space of, say, a farmhouse in Iowa. "
              },
              {
                "-id": "0-38-26",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The wealthy donors who contribute to Mrs. Clinton's campaign"
                  },
                  {
                    "-class": "positive",
                    "#text": "proved more comfortable cutting"
                  },
                  {
                    "-class": "negative",
                    "#text": "townhouses to strangers"
                  }
                ],
                "#text": [
                  " have ",
                  " a check than opening their TriBeCa lofts and Upper East Side ",
                  ". "
                ]
              },
              {
                "-id": "0-38-27",
                "span": {
                  "-class": "positive",
                  "#text": "And Mrs. Clinton's campaign prides itself"
                },
                "#text": " on living on the cheap and keeping salaries low, "
              },
              {
                "-id": "0-38-28",
                "#text": [
                  "which is good for its own bottom line, but ",
                  ".,"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "difficult for those who need to pay New York City rents"
                }
              },
              {
                "-id": "0-38-29",
                "#text": [
                  "The ",
                  " of ",
                  " to play a Craigslist-like role in finding staffers a place to sleep, "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "lack"
                  },
                  {
                    "-class": "negative",
                    "#text": "affordable housing has put an added burden on the Clinton campaign"
                  }
                ]
              },
              {
                "-id": "0-38-30",
                "#text": "whether it's pairing them with roommates or pleading with supporters for a spare room.,"
              },
              {
                "-id": "0-38-31",
                "span": {
                  "-class": "positive",
                  "#text": "Jasmin Harris, a 22-year-old Clinton campaign worker, had been matched with a middle-age couple who agreed to"
                },
                "#text": " host her in their Brooklyn Heights apartment. "
              },
              {
                "-id": "0-38-32",
                "#text": "They even did her laundry. "
              },
              {
                "-id": "0-38-33",
                "#text": "But after six weeks, they had out-of-town family coming to visit and needed the spare room back, "
              },
              {
                "-id": "0-38-34",
                "span": {
                  "-class": "negative",
                  "#text": "and Ms. Harris was waiting on a recent afternoon for the campaign to pair her"
                },
                "#text": " with another supporter. \""
              },
              {
                "-id": "0-38-35",
                "#text": "I don't know exactly "
              },
              {
                "-id": "0-38-36",
                "#text": "where I'm going, "
              },
              {
                "-id": "0-38-37",
                "#text": "but I'll be somewhere else tonight,\"?"
              },
              {
                "-id": "0-38-38",
                "#text": "she said. \""
              },
              {
                "-id": "0-38-39",
                "span": {
                  "-class": "negative",
                  "#text": "I have my bags packed and am waiting for an email"
                },
                "#text": ".\""
              },
              {
                "-id": "0-38-40",
                "#text": "A recent email from the campaign pleaded with donors to provide staffers with \""
              },
              {
                "-id": "0-38-41",
                "#text": "a spare room \"?"
              },
              {
                "-id": "0-38-42",
                "#text": "or just a spare couch!\"?"
              },
              {
                "-id": "0-38-43",
                "#text": "because \""
              },
              {
                "-id": "0-38-44",
                "#text": "you "
              },
              {
                "-id": "0-38-45",
                "#text": "and I both know "
              },
              {
                "-id": "0-38-46",
                "#text": "that finding a place to live in New York can take longer than an afternoon of apartment hunting.\""
              },
              {
                "-id": "0-38-47",
                "#text": "Marc Lasry, a hedge fund manager, a major Democratic donor and a friend of the Clintons, "
              },
              {
                "-id": "0-38-48",
                "#text": "let the campaign's communications director, Jennifer Palmieri, stay in his family's Manhattan home, "
              },
              {
                "-id": "0-38-49",
                "#text": "a penthouse on Central Park West, for a handful of nights early on. "
              },
              {
                "-id": "0-38-50",
                "#text": "The city, he said, \""
              },
              {
                "-id": "0-38-51",
                "span": {
                  "-class": "negative",
                  "#text": "is expensive, particularly for young people"
                },
                "#text": ". "
              },
              {
                "-id": "0-38-52",
                "#text": "We have five children, "
              },
              {
                "-id": "0-38-53",
                "#text": "so we are used to having a lot of people around, "
              },
              {
                "-id": "0-38-54",
                "span": {
                  "-class": "positive",
                  "#text": "and we're happy to put up folks from the campaign"
                },
                "#text": ".\""
              },
              {
                "-id": "0-38-55",
                "#text": "Mr. "
              },
              {
                "-id": "0-38-56",
                "#text": "Lasry is not the norm. "
              },
              {
                "-id": "0-38-57",
                "#text": "When the campaign's finance director, Dennis Cheng, reached out to New York donors, some of them seemed concerned with the prospective maze of campaign finance laws and with how providing upscale housing in New York City might be interpreted. "
              },
              {
                "-id": "0-38-58",
                "#text": "Several of the hedge fund managers and finance titans who support Mrs. Clinton hosted would-be aides before the campaign's start in April, "
              },
              {
                "-id": "0-38-59",
                "#text": "but ended the practice once a formal campaign existed. ("
              },
              {
                "-id": "0-38-60",
                "#text": "A campaign finance lawyer, Kenneth A. "
              },
              {
                "-id": "0-38-61",
                "span": {
                  "-class": "negative",
                  "#text": "Gross of Skadden, Arps, said"
                },
                "#text": ", "
              },
              {
                "-id": "0-38-62",
                "#text": "however, "
              },
              {
                "-id": "0-38-63",
                "#text": "that hosting campaign workers would not be considered an in-kind donation.),"
              },
              {
                "-id": "0-38-64",
                "#text": "Scott Murphy, a former congressman representing the area outside Albany, hosted Josh Schwerin, 29, a press aide on the campaign who previously worked for Mr. Murphy, "
              },
              {
                "-id": "0-38-65",
                "#text": "in his Upper West Side co-op before the campaign started.,"
              },
              {
                "-id": "0-38-66",
                "#text": "Mr. "
              },
              {
                "-id": "0-38-67",
                "#text": "Schwerin got what used to serve as a maid's room. \""
              },
              {
                "-id": "0-38-68",
                "#text": "You could touch both walls if you were on the air mattress, and the bathroom was through the kitchen, "
              },
              {
                "-id": "0-38-69",
                "#text": "so he didn't have a lot of privacy,\"?Mr. "
              },
              {
                "-id": "0-38-70",
                "#text": "Murphy said. \""
              },
              {
                "-id": "0-38-71",
                "#text": "But,\"?"
              },
              {
                "-id": "0-38-72",
                "#text": "he added, \""
              },
              {
                "-id": "0-38-73",
                "#text": "it was in line with what he paid for it.\"?("
              },
              {
                "-id": "0-38-74",
                "#text": "Which was, of course, nothing.) "
              },
              {
                "-id": "0-38-75",
                "#text": "Mr. Schwerin later found an apartment near Fort Greene Park, a 12-minute walk to the office.,"
              },
              {
                "-id": "0-38-76",
                "#text": [
                  "Many of the campaign workers who moved to Brooklyn from ",
                  " \""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "across the country were unfamiliar with the borough and thought it would offer"
                  },
                  {
                    "-class": "positive",
                    "#text": "cheaper prices than"
                  }
                ]
              },
              {
                "-id": "0-38-77",
                "#text": "the city\"?("
              },
              {
                "-id": "0-38-78",
                "#text": "read: "
              },
              {
                "-id": "0-38-79",
                "#text": "Manhattan). "
              },
              {
                "-id": "0-38-80",
                "#text": "But in the past year, average rents in Brooklyn have risen by 4.3 percent, nearly twice the increase of those in Manhattan, "
              },
              {
                "-id": "0-38-81",
                "#text": "to $3,252 a month. "
              },
              {
                "-id": "0-38-82",
                "#text": "Rents in Brooklyn Heights, a neighborhood adjacent to campaign headquarters, are the highest in the borough, "
              },
              {
                "-id": "0-38-83",
                "#text": "according to Jonathan J. "
              },
              {
                "-id": "0-38-84",
                "#text": "Miller, the president of the appraisal firm Miller Samuel.,"
              },
              {
                "-id": "0-38-85",
                "#text": [
                  "The campaign has worked with the , for ",
                  "ed"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "guidance on where staffers could find housing. The chamber suggested Clinton Hill, B"
                }
              },
              {
                "-id": "0-38-86",
                "span": {
                  "-class": "negative",
                  "#text": "ford-Stuyvesant, Bensonhurst and Dyker Heights, but has not made much progress in convincing staffers to consider these less gentrified neighborhoods, said Carlo A. Scissura, the president"
                },
                "#text": " a"
              },
              {
                "-id": "0-38-87",
                "#text": "nd chief execu"
              },
              {
                "-id": "0-38-88",
                "#text": "tive of the chamber.,\"These folks are coming from all parts o"
              },
              {
                "-id": "0-38-89",
                "#text": "f the country to work for Hillary, and the broker says, \"I want 15 percent of annual rent,' and "
              },
              {
                "-id": "0-38-90",
                "#text": "they're like \"What are you talking "
              },
              {
                "-id": "0-38-91",
                "#text": "about?'\"said ,, th"
              },
              {
                "-id": "0-38-92",
                "#text": "e founder of ,, a real estate"
              },
              {
                "-id": "0-38-93",
                "#text": " brokerage specializing in Brooklyn.,Some have had luck at a rental building"
              },
              {
                "-id": "0-38-94",
                "span": {
                  "-class": "positive",
                  "#text": " on the edge of Downtown Brooklyn, Avalon Fort Greene, where at least six Clinton aides have"
                },
                "#text": " t"
              },
              {
                "-id": "0-38-95",
                "#text": "aken up residence, prompting some campaign staffers to affectionately call it \"the dorm,\" a reference to their small q"
              },
              {
                "-id": "0-38-96",
                "#text": "uarters and proximity to one another.,Adrienne Elrod, 39, a campaign spokeswo"
              },
              {
                "-id": "0-38-97",
                "#text": "man, is originally from Arkansas but moved to Brooklyn from Washington with her corgi-terrier mix, Bernie (not named after Mrs. Clinton's "
              },
              {
                "-id": "0-38-98",
                "span": {
                  "-class": "positive",
                  "#text": "Primary opponent Senator Bernie Sanders). If she stretches her arms far enough"
                },
                "#text": " in"
              },
              {
                "-id": "0-38-99",
                "#text": " her tidy studio in \"the dorm,\"?she can almost touch the foo"
              },
              {
                "-id": "0-38-100",
                "#text": "t of her bed and her kitchen countertop at the same time.,An exercise aficionado, Ms. Elrod has a"
              },
              {
                "-id": "0-38-101",
                "#text": " bike resting against a patch of bare wall. Her refrigerator is adorned with a few "
              },
              {
                "-id": "0-38-102",
                "#text": "stickers, including the \"H\"?logo with an arrow that symbolizes H"
              },
              {
                "-id": "0-38-103",
                "#text": "ill"
              },
              {
                "-id": "0-38-104",
                "#text": "ary for America.,\"It's a 10-minute walk from the office,\""
              },
              {
                "-id": "0-38-105",
                "#text": " Ms. Elrod said. \"It's easy to come home in the middle of"
              },
              {
                "-id": "0-38-106",
                "span": {
                  "-class": "positive",
                  "#text": " the day to walk the dog.\"Marlon Mar"
                },
                "#text": "shall, 35, a veteran organize"
              },
              {
                "-id": "0-38-107",
                "#text": "r who is now the director of state campaigns and political engagement for the Clinton campaign, crashed in the spring with the pollster"
              },
              {
                "-id": "0-38-108",
                "span": {
                  "-class": "negative",
                  "#text": " Joel Benenson in his Upper East Side co-op.,Mr. Benenson recalled sleeping on a f"
                },
                "#text": "ri"
              },
              {
                "-id": "0-38-109",
                "#text": "end'"
              },
              {
                "-id": "0-38-110",
                "#text": "s couch in New York City during Mario Cuomo's campaign for governor in 1994, when his family was living in Albany. A"
              },
              {
                "-id": "0-38-111",
                "#text": "nd in 2008, during the Obama campaign,"
              },
              {
                "-id": "0-38-112",
                "#text": " when Mr. Benenson still lived in ,, he and his wife, Lisa, played host to four young organiz"
              },
              {
                "-id": "0-38-113",
                "#text": "ers.,\"We refer to them as our Obama kids,\"?he"
              },
              {
                "-id": "0-38-114",
                "#text": " said. So when he was asked to house "
              },
              {
                "-id": "0-38-115",
                "#text": "campaign "
              },
              {
                "-id": "0-38-116",
                "#text": "sta"
              },
              {
                "-id": "0-38-117",
                "#text": "ffers this time, he didn't hesitate. \"We hardly ever saw"
              },
              {
                "-id": "0-38-118",
                "span": {
                  "-class": "positive",
                  "#text": " Marlon,\"?he said "
                },
                "#text": "of "
              },
              {
                "-id": "0-38-119",
                "#text": "Mr. Marshall, who primarily "
              },
              {
                "-id": "0-38-120",
                "#text": "used the place to sleep f"
              },
              {
                "-id": "0-38-121",
                "#text": "or a few hours before going back to work.,Mr. Marshall, who had never lived in Ne"
              },
              {
                "-id": "0-38-122",
                "#text": "w Yo"
              },
              {
                "-id": "0-38-123",
                "#text": "rk before, ended up renting a friend's two-bedroom apartment in a Fort Greene co-op, an eight-minute walk from the campaign'"
              },
              {
                "-id": "0-38-124",
                "#text": "s headquarters.,He now hosts a rotating cast of staffer"
              },
              {
                "-id": "0-38-125",
                "span": {
                  "-class": "positive",
                  "#text": "s in his spare bedroom and in his free time explores the borough. \"I have been to the ,, and it is the "
                },
                "#text": "gre"
              },
              {
                "-id": "0-38-126",
                "span": {
                  "-class": "positive",
                  "#text": "atest thing in my life,\"?Mr. Marshall said of the borough's popula"
                },
                "#text": "r "
              },
              {
                "-id": "0-38-127",
                "span": {
                  "-class": "positive",
                  "#text": "weekly food festival."
                }
              }
            ]
          },
          {
            "a": {
              "-id": "0-39-0",
              "#text": "1435302000732"
            }
          },
          {
            "a": [
              {
                "-id": "0-40-0",
                "#text": "Senator , of Vermont is climbing in the polls in Iowa and New Hampshire, "
              },
              {
                "-id": "0-40-1",
                "#text": "and he has drawn thousands of people to rallies for his presidential campaign recently in Denver and Minneapolis. "
              },
              {
                "-id": "0-40-2",
                "span": {
                  "-class": "negative",
                  "#text": "But the ,, has highlighted a daunting obstacle he faces in the Democratic primary contest"
                },
                "#text": ": "
              },
              {
                "-id": "0-40-3",
                "span": {
                  "-class": "positive",
                  "#text": "Black voters have shown little interest in him"
                },
                "#text": ".,"
              },
              {
                "-id": "0-40-4",
                "span": {
                  "-class": "positive",
                  "#text": "Even his own campaign advisers acknowledge that Mr. Sanders is virtually unknown to many African-Americans"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-5",
                "span": {
                  "-class": "positive",
                  "#text": "an enormously important Democratic constituency"
                },
                "#text": ".,"
              },
              {
                "-id": "0-40-6",
                "span": {
                  "-class": "positive",
                  "#text": "Though he led sit-ins as a civil rights activist in the 1960s, helped the Rev"
                },
                "#text": ". "
              },
              {
                "-id": "0-40-7",
                "#text": "Jesse L. "
              },
              {
                "-id": "0-40-8",
                "span": {
                  "-class": "positive",
                  "#text": "Jackson Sr. pull off a surprising campaign victory in Vermont in 1988, and espouses liberal policy ideas broadly popular with many Democrats"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-9",
                "#text": "Mr. Sanders has had little direct experience with black voters as a politician in a state that is 95 percent white. "
              },
              {
                "-id": "0-40-10",
                "#text": "And they have been largely absent from his campaign events so far.,"
              },
              {
                "-id": "0-40-11",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-12",
                "#text": "Sanders, 73, had planned to start introducing himself to larger numbers of African-Americans last Sunday at a large gathering in Charleston, "
              },
              {
                "-id": "0-40-13",
                "span": {
                  "-class": "positive",
                  "#text": "but he quickly postponed the event after the church killings"
                },
                "#text": ". "
              },
              {
                "-id": "0-40-14",
                "span": {
                  "-class": "negative",
                  "#text": "The massacre also revived debate over a highly charged issue on which Mr. Sanders has a mixed record"
                },
                "#text": ": "
              },
              {
                "-id": "0-40-15",
                "#text": "gun control., "
              },
              {
                "-id": "0-40-16",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "is working assiduously"
                  },
                  {
                    "-class": "positive",
                    "#text": "cement her support among black voters"
                  }
                ],
                "#text": [
                  " to ",
                  ". "
                ]
              },
              {
                "-id": "0-40-17",
                "#text": "In , this week, 95 percent of nonwhite Democratic voters said they could see themselves supporting Mrs. Clinton for the nomination in the primary. "
              },
              {
                "-id": "0-40-18",
                "#text": "Only about one-quarter of respondents said they could see themselves voting for Mr. Sanders.,"
              },
              {
                "-id": "0-40-19",
                "#text": "And Mrs. Clinton is hardly sitting still: "
              },
              {
                "-id": "0-40-20",
                "#text": "She has spoken out assertively on race relations "
              },
              {
                "-id": "0-40-21",
                "#text": "and gun control over the past week, "
              },
              {
                "-id": "0-40-22",
                "#text": "and she , on Tuesday near Ferguson, "
              },
              {
                "-id": "0-40-23",
                "#text": "Mo., "
              },
              {
                "-id": "0-40-24",
                "#text": "where the killing of an unarmed black man by a white police officer in August ignited protests.,"
              },
              {
                "-id": "0-40-25",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-26",
                "span": {
                  "-class": "negative",
                  "#text": "Sanders has lamented"
                },
                "#text": " \""
              },
              {
                "-id": "0-40-27",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "the ugly stain of racism that still taints our nation"
                  },
                  {
                    "-class": "negative",
                    "#text": "forceful way"
                  }
                ],
                "#text": [
                  ",\"?but he has yet to take the subject on in a ",
                  ".,"
                ]
              },
              {
                "-id": "0-40-28",
                "span": {
                  "-class": "positive",
                  "#text": "Given the makeup of the Democratic primary electorate, Mr. Sanders's capacity to win support among blacks represents a test of his relevance"
                },
                "#text": ": "
              },
              {
                "-id": "0-40-29",
                "span": {
                  "-class": "positive",
                  "#text": "It will help determine"
                }
              },
              {
                "-id": "0-40-30",
                "#text": "whether he can drain many votes from Mrs. Clinton or is bound to be merely a nuisance candidate with a following among the most ideologically driven liberal whites.,"
              },
              {
                "-id": "0-40-31",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-32",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Sanders's advisers concede"
                  },
                  {
                    "-class": "positive",
                    "#text": "popular among black Democrats"
                  }
                ],
                "#text": [
                  " that Mrs. Clinton is more familiar and ",
                  ", "
                ]
              },
              {
                "-id": "0-40-33",
                "#text": "but they say his background "
              },
              {
                "-id": "0-40-34",
                "#text": [
                  "and views will allow him to speak credibly to African-Americans in places like Charleston, Ferguson and ",
                  ". "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "elsewhere"
                }
              },
              {
                "-id": "0-40-35",
                "span": {
                  "-class": "negative",
                  "#text": "His struggle, they say"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-36",
                "span": {
                  "-class": "positive",
                  "#text": "is to introduce himself swiftly and on a broad scale so his remarks resonate and have an effect"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-40-37",
                "#text": "We're reaching out, but it's no secret that Bernie represents a state that is heavily Caucasian, "
              },
              {
                "-id": "0-40-38",
                "#text": "and his decades of work on issues of importance to African-Americans aren't known amid the national conversation on race that is underway,\"?"
              },
              {
                "-id": "0-40-39",
                "#text": "said Jeff Weaver, Mr. Sanders's campaign manager. \""
              },
              {
                "-id": "0-40-40",
                "span": {
                  "-class": "positive",
                  "#text": "I don't think it's presumptuous of him"
                },
                "#text": " to speak out on these issues. "
              },
              {
                "-id": "0-40-41",
                "#text": "And his message \"?"
              },
              {
                "-id": "0-40-42",
                "#text": "the need for more good-paying jobs, and opening up higher education regardless of wealth and family background \"?"
              },
              {
                "-id": "0-40-43",
                "span": {
                  "-class": "positive",
                  "#text": "will have strong appeal with African-Americans and many other voters"
                },
                "#text": ".\""
              },
              {
                "-id": "0-40-44",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The challenge facing Mr. Sanders"
                  },
                  {
                    "-class": "positive",
                    "#text": "on vivid display last month in Burlington"
                  }
                ],
                "#text": [
                  " as a Ben & Jerry's candidate seeking the nomination of President Obama's party was ",
                  ", "
                ]
              },
              {
                "-id": "0-40-45",
                "#text": "Vt., "
              },
              {
                "-id": "0-40-46",
                "#text": "at his ,.,Nearly all the speakers who preceded him \"?"
              },
              {
                "-id": "0-40-47",
                "#text": "including the two ice cream entrepreneurs \"?"
              },
              {
                "-id": "0-40-48",
                "#text": "were white, "
              },
              {
                "-id": "0-40-49",
                "#text": "as were nearly all the supporters, many of them in tie-dyed clothes, "
              },
              {
                "-id": "0-40-50",
                "#text": "who packed a park on the shores of Lake Champlain. "
              },
              {
                "-id": "0-40-51",
                "span": {
                  "-class": "positive",
                  "#text": "His jeremiads about campaign-finance overhaul and climate change inspired cheers and ovations"
                },
                "#text": ". "
              },
              {
                "-id": "0-40-52",
                "span": {
                  "-class": "positive",
                  "#text": "But he made no mention of problems of deep concern to many African-Americans, like policing"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-53",
                "span": {
                  "-class": "negative",
                  "#text": "gun control, racial inequities or the high numbers of black men in prison"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-40-54",
                "span": {
                  "-class": "positive",
                  "#text": "The , voter is still a Volvo-driving, financially comfortable liberal who is pretty much white,\"?said Paul Maslin"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-55",
                "#text": "a pollster who worked for the 2004 presidential campaign of Vermont's last Democratic contender, "
              },
              {
                "-id": "0-40-56",
                "#text": "Howard Dean. \""
              },
              {
                "-id": "0-40-57",
                "span": {
                  "-class": "negative",
                  "#text": "I don't see"
                }
              },
              {
                "-id": "0-40-58",
                "#text": "how Bernie takes large numbers of black voters away from ,, "
              },
              {
                "-id": "0-40-59",
                "#text": "and he needs to "
              },
              {
                "-id": "0-40-60",
                "#text": "if he wants any shot at the nomination.\""
              },
              {
                "-id": "0-40-61",
                "span": {
                  "-class": "negative",
                  "#text": "David Axelrod, formerly Mr. Obama's chief strategist, noted that insurgent Democrats like Gary Hart and Mr. Dean who were able to win over many white voters fell short"
                }
              },
              {
                "-id": "0-40-62",
                "#text": "because they could not attract blacks.,\""
              },
              {
                "-id": "0-40-63",
                "span": {
                  "-class": "positive",
                  "#text": "There's no doubt she understands coalition politics"
                }
              },
              {
                "-id": "0-40-64",
                "#text": "and she is burnishing her coalition,\"?Mr. "
              },
              {
                "-id": "0-40-65",
                "#text": "Axelrod said of Mrs. Clinton. \""
              },
              {
                "-id": "0-40-66",
                "#text": "You have to have a track record and some roots in these communities, "
              },
              {
                "-id": "0-40-67",
                "#text": "and she does.\""
              },
              {
                "-id": "0-40-68",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-69",
                "#text": "Sanders, in a recent interview, said he believed his call for a \""
              },
              {
                "-id": "0-40-70",
                "span": {
                  "-class": "positive",
                  "#text": "political revolution"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-40-71",
                "#text": "to change an array of policies, such as ending tuition at public colleges, could win over black voters in the months ahead.,"
              },
              {
                "-id": "0-40-72",
                "#text": "Indeed, when he visited New England College in Concord, N."
              },
              {
                "-id": "0-40-73",
                "#text": "H., "
              },
              {
                "-id": "0-40-74",
                "#text": "last month, a few black and white undergraduates described how their ,, ranging from $10,000 to $16,000, "
              },
              {
                "-id": "0-40-75",
                "span": {
                  "-class": "negative",
                  "#text": "made them anxious about the future"
                },
                "#text": ". "
              },
              {
                "-id": "0-40-76",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Mr. Sanders responded with empathy but also with a fiery intensity that evoked his"
                  },
                  {
                    "-class": "positive",
                    "#text": "student activist"
                  }
                ],
                "#text": [
                  " own days as a ",
                  ", "
                ]
              },
              {
                "-id": "0-40-77",
                "#text": "when he protested segregated campus housing at the University of Chicago and participated in the 1963 March on Washington.,"
              },
              {
                "-id": "0-40-78",
                "span": {
                  "-class": "positive",
                  "#text": "Since then, though, his politics have been characterized by a focus on class-based solidarity and uplift"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-79",
                "#text": "reflecting his style of democratic socialism. "
              },
              {
                "-id": "0-40-80",
                "span": {
                  "-class": "positive",
                  "#text": "While Mr. Sanders endorsed the 1988 campaign of Mr. Jackson"
                },
                "#text": ", who won the Vermont caucus that year, "
              },
              {
                "-id": "0-40-81",
                "#text": "he also said at the time that he disagreed with Mr. Jackson about \""
              },
              {
                "-id": "0-40-82",
                "#text": "whether the , can be the real vehicle for social change,\"?"
              },
              {
                "-id": "0-40-83",
                "#text": "and said a third party was necessary. ("
              },
              {
                "-id": "0-40-84",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-85",
                "#text": "Jackson did not return messages seeking comment.),"
              },
              {
                "-id": "0-40-86",
                "span": {
                  "-class": "negative",
                  "#text": "Tad Devine, a senior adviser to the Sanders campaign, predicted that Mr. Sanders's battles for equal rights and against income inequality would"
                },
                "#text": " \""
              },
              {
                "-id": "0-40-87",
                "#text": "resonate powerfully with African-American voters.\""
              },
              {
                "-id": "0-40-88",
                "#text": "He continued, \""
              },
              {
                "-id": "0-40-89",
                "span": {
                  "-class": "positive",
                  "#text": "And we also believe that the way to win support from African-American voters in the primaries is to demonstrate that he is a viable candidate with a real chance to succeed by doing well in the early contests"
                },
                "#text": ".\""
              },
              {
                "-id": "0-40-90",
                "#text": "One of those is the South Carolina primary, "
              },
              {
                "-id": "0-40-91",
                "#text": "where Mr. Sanders's challenge has been crystallized. "
              },
              {
                "-id": "0-40-92",
                "span": {
                  "-class": "negative",
                  "#text": "The church massacre last week and the murder of a black man, ,, by a white police officer in April have thrust racial discrimination and gun access to the center of the campaign"
                },
                "#text": ", "
              },
              {
                "-id": "0-40-93",
                "#text": "in a state where blacks can represent a majority of primary voters.,"
              },
              {
                "-id": "0-40-94",
                "span": {
                  "-class": "negative",
                  "#text": "Complicating matters for Mr. Sanders"
                },
                "#text": ", the one issue on which he is not unambiguously to the left of Mrs. Clinton \"?"
              },
              {
                "-id": "0-40-95",
                "#text": "gun control \"?"
              },
              {
                "-id": "0-40-96",
                "#text": "is emerging as a critical litmus test. "
              },
              {
                "-id": "0-40-97",
                "span": {
                  "-class": "positive",
                  "#text": "Representing a rural state with a rich hunting tradition, Mr. Sanders has a mixed record on guns"
                },
                "#text": ". "
              },
              {
                "-id": "0-40-98",
                "#text": "He first won a House seat in part because the incumbent Republican he defeated had supported an assault-weapons ban. ("
              },
              {
                "-id": "0-40-99",
                "#text": "Mr. "
              },
              {
                "-id": "0-40-100",
                "#text": "Sanders also supported the ban but opposed the Brady bill, which President Bill Clinton signed into law.),"
              },
              {
                "-id": "0-40-101",
                "#text": [
                  "By contrast, Mrs. Clinton has moved aggressively to ",
                  " since the Charleston shootings, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "emphasize her support for gun restrictions"
                }
              },
              {
                "-id": "0-40-102",
                "#text": "saying in an interview last week, \"Let's just cut to the chase: "
              },
              {
                "-id": "0-40-103",
                "#text": "It's guns.\""
              },
              {
                "-id": "0-40-104",
                "#text": "Mrs. "
              },
              {
                "-id": "0-40-105",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton, mindful of the biracial coalition Mr. Obama built in South Carolina in 2008"
                }
              },
              {
                "-id": "0-40-106",
                "#text": "when he handed her a stinging loss, "
              },
              {
                "-id": "0-40-107",
                "#text": "has already visited its African-American population centers twice. "
              },
              {
                "-id": "0-40-108",
                "#text": "Mr. Sanders has yet to make his first trip.,\""
              },
              {
                "-id": "0-40-109",
                "#text": "She's talking about the issues we care about,\"?said Bakari Sellers, a former South Carolina state representative who is black and is supporting Mrs. Clinton. \""
              },
              {
                "-id": "0-40-110",
                "#text": "Whether it's voting rights or police reform, Hillary is attacking them head-on.\""
              },
              {
                "-id": "0-40-111",
                "#text": "As for Mr. Sanders, he said, \""
              },
              {
                "-id": "0-40-112",
                "#text": "I'm not hearing Bernie Sanders's name at the barbershops.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-41-0",
              "#text": "1435129200855"
            }
          },
          {
            "a": [
              {
                "-id": "0-42-0",
                "#text": [
                  "delivered on Saturday her boldest remarks yet on race and ",
                  ", ",
                  " and ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "gun violence"
                  },
                  {
                    "-class": "positive",
                    "#text": "topics that have quickly become some of the most prominent"
                  },
                  {
                    "-class": "negative",
                    "#text": "divisive in the presidential campaign"
                  }
                ]
              },
              {
                "-id": "0-42-1",
                "#text": "particularly after Wednesday's mass shooting in Charleston, S."
              },
              {
                "-id": "0-42-2",
                "#text": "C.,\""
              },
              {
                "-id": "0-42-3",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "It's tempting to dismiss a tragedy like this"
                  },
                  {
                    "-class": "negative",
                    "#text": "isolated incident"
                  }
                ],
                "#text": [
                  " as an ",
                  ", to believe that in today's America bigotry is largely behind us, "
                ]
              },
              {
                "-id": "0-42-4",
                "span": {
                  "-class": "negative",
                  "#text": "that institutionalized racism no longer exists,\"?Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-5",
                "#text": "Clinton said in a speech in San Francisco. \""
              },
              {
                "-id": "0-42-6",
                "#text": [
                  "But despite ",
                  ", ",
                  ".\""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "our best efforts and our highest hopes"
                  },
                  {
                    "-class": "negative",
                    "#text": "America's long struggle with race is far from finished"
                  }
                ]
              },
              {
                "-id": "0-42-7",
                "#text": "Invoking President Obama at times, Mrs. Clinton called for a \""
              },
              {
                "-id": "0-42-8",
                "#text": "common sense\"?"
              },
              {
                "-id": "0-42-9",
                "span": {
                  "-class": "positive",
                  "#text": "approach to gun laws, pledging to take swift action if elected"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-10",
                "#text": "She did not, "
              },
              {
                "-id": "0-42-11",
                "span": {
                  "-class": "positive",
                  "#text": "however, make clear"
                }
              },
              {
                "-id": "0-42-12",
                "#text": "how she would navigate the divide in Congress that has undercut Mr. Obama's own efforts to pass gun laws.,\""
              },
              {
                "-id": "0-42-13",
                "#text": "The president is right. "
              },
              {
                "-id": "0-42-14",
                "#text": "The politics on this issue have been poisoned,\"?Mrs. "
              },
              {
                "-id": "0-42-15",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-42-16",
                "#text": "But we can't give up. "
              },
              {
                "-id": "0-42-17",
                "span": {
                  "-class": "negative",
                  "#text": "The stakes are too high"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-18",
                "span": {
                  "-class": "positive",
                  "#text": "The costs are too dear"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-19",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "And I am not and will not be afraid"
                  },
                  {
                    "-class": "negative",
                    "#text": "keep fighting for common sense reforms"
                  }
                ],
                "#text": [
                  " to ",
                  ".\""
                ]
              },
              {
                "-id": "0-42-20",
                "#text": "Mrs. "
              },
              {
                "-id": "0-42-21",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's strongly worded stance on the issue could help her make a contrast with Senator Bernie Sanders"
                },
                "#text": ", "
              },
              {
                "-id": "0-42-22",
                "#text": "who has been drawing large crowds in early voting states, "
              },
              {
                "-id": "0-42-23",
                "#text": "where recent polls show him narrowing the gap with Mrs. Clinton. "
              },
              {
                "-id": "0-42-24",
                "#text": "Mr. Sanders, a socialist from Vermont also seeking the Democratic nomination, has a decidedly mixed record on gun control, "
              },
              {
                "-id": "0-42-25",
                "span": {
                  "-class": "negative",
                  "#text": "which may pose problems for his campaign as it seeks"
                },
                "#text": " to bill itself as a more liberal alternative to Mrs. Clinton.,"
              },
              {
                "-id": "0-42-26",
                "#text": "Saturday was not the first time that Mrs. Clinton's Democratic campaign, still in its infancy, "
              },
              {
                "-id": "0-42-27",
                "#text": [
                  "had found itself having to address race and ",
                  " in the ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "racism"
                  },
                  {
                    "-class": "negative",
                    "#text": "wake of violence"
                  }
                ]
              },
              {
                "-id": "0-42-28",
                "span": {
                  "-class": "negative",
                  "#text": "Her first major campaign speech, at Columbia University in April, coincided with widespread unrest in Baltimore after the death of a black man"
                },
                "#text": ", "
              },
              {
                "-id": "0-42-29",
                "#text": "Freddie Gray, who had been injured in police custody. "
              },
              {
                "-id": "0-42-30",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton used that occasion to advocate an overhaul of the ,, saying it was"
                },
                "#text": " \""
              },
              {
                "-id": "0-42-31",
                "span": {
                  "-class": "positive",
                  "#text": "time for honesty about race and justice in America"
                },
                "#text": ".\""
              },
              {
                "-id": "0-42-32",
                "#text": "She echoed that sentiment on Saturday at the annual meeting of the United States Conference of Mayors, "
              },
              {
                "-id": "0-42-33",
                "span": {
                  "-class": "positive",
                  "#text": "pressing for a candid"
                },
                "#text": " national conversation on what she called a \""
              },
              {
                "-id": "0-42-34",
                "span": {
                  "-class": "negative",
                  "#text": "difficult topic"
                },
                "#text": ".\""
              },
              {
                "-id": "0-42-35",
                "#text": "Race, Mrs. Clinton said, remains \""
              },
              {
                "-id": "0-42-36",
                "span": {
                  "-class": "negative",
                  "#text": "a deep fault line in America"
                },
                "#text": ",\"?despite the election of Mr. Obama, the country's first black president. "
              },
              {
                "-id": "0-42-37",
                "span": {
                  "-class": "negative",
                  "#text": "She also cited several statistics that suggest widespread inequality between black and white Americans"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-42-38",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Our problem"
                  },
                  {
                    "-class": "positive",
                    "#text": "not all kooks and Klansmen"
                  }
                ],
                "#text": [
                  " is ",
                  ". "
                ]
              },
              {
                "-id": "0-42-39",
                "span": {
                  "-class": "negative",
                  "#text": "It's also the cruel joke that goes unchallenged"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-40",
                "#text": "It's the offhand comment about not wanting those people in the neighborhood,\"?Mrs. "
              },
              {
                "-id": "0-42-41",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-42-42",
                "#text": [
                  "Let's be ",
                  ", for a lot of well meaning, ",
                  ", the ",
                  ".\""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "honest"
                  },
                  {
                    "-class": "positive",
                    "#text": "open-minded white people"
                  },
                  {
                    "-class": "negative",
                    "#text": "sight of a young black man in a hoodie still evokes a twinge of fear"
                  }
                ]
              },
              {
                "-id": "0-42-43",
                "#text": "Mrs. "
              },
              {
                "-id": "0-42-44",
                "#text": "Clinton, who attended a fund-raiser Wednesday in Charleston just blocks from where the shooting took place later that night, "
              },
              {
                "-id": "0-42-45",
                "#text": [
                  "also called Senator Lindsey Graham of South Carolina on ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "Saturday to offer her support to him and his constituents"
                }
              },
              {
                "-id": "0-42-46",
                "#text": "Mr. Graham said. "
              },
              {
                "-id": "0-42-47",
                "#text": "Race and gun violence quickly reasserted themselves as topics of conversation on the campaign trail after Wednesday's deadly shooting, "
              },
              {
                "-id": "0-42-48",
                "#text": "which took the lives of nine people gathered for Bible study at Emanuel A."
              },
              {
                "-id": "0-42-49",
                "#text": "M."
              },
              {
                "-id": "0-42-50",
                "#text": "E. "
              },
              {
                "-id": "0-42-51",
                "#text": "Church in Charleston. "
              },
              {
                "-id": "0-42-52",
                "#text": "Both Republicans "
              },
              {
                "-id": "0-42-53",
                "span": {
                  "-class": "positive",
                  "#text": "and Democrats have scrambled to pay respects to the victims"
                },
                "#text": ", but also to take a stance that may attract voters.,"
              },
              {
                "-id": "0-42-54",
                "#text": "Mitt Romney, the Republican Party's 2012 presidential nominee, took to Twitter on Saturday , flying near its state capitol.,"
              },
              {
                "-id": "0-42-55",
                "#text": "On the Democratic side, Martin O'Malley spoke out for gun control on Friday, sending a , "
              },
              {
                "-id": "0-42-56",
                "span": {
                  "-class": "negative",
                  "#text": "to supporters calling for a federal assault weapons ban, stricter background checks and measures to tamp down straw-buying"
                },
                "#text": ". "
              },
              {
                "-id": "0-42-57",
                "#text": "In 2013, when he was governor of Maryland, Mr. O'Malley signed similar measures into law, "
              },
              {
                "-id": "0-42-58",
                "#text": "making his state one of the most tightly controlled in the country.,"
              },
              {
                "-id": "0-42-59",
                "#text": "Mrs. "
              },
              {
                "-id": "0-42-60",
                "#text": "Clinton and her Democratic challengers will need to persuade minority voters, an important Democratic constituency that put its vote behind Mr. Obama in 2008, "
              },
              {
                "-id": "0-42-61",
                "#text": "to support them in large numbers to win in 2016."
              }
            ]
          },
          {
            "a": {
              "-id": "0-43-0",
              "#text": "1434783600172"
            }
          },
          {
            "a": [
              {
                "-id": "0-44-0",
                "#text": "For the past several summers, Bill and , have done what New York City's moneyed residents have done for decades: "
              },
              {
                "-id": "0-44-1",
                "#text": "They spent their vacation amid the prime beachside real estate of Long Island.,"
              },
              {
                "-id": "0-44-2",
                "#text": "In 2011 and 2012, there was the eight-bedroom, 12,000-square-foot East Hampton rental with a heated pool that the couple took for part of August, "
              },
              {
                "-id": "0-44-3",
                "#text": "the kind of house that typically goes for $200,000 per month, according to local real estate listings.,"
              },
              {
                "-id": "0-44-4",
                "span": {
                  "-class": "negative",
                  "#text": "Then, in 2013, they opted for an equally pricey six-bedroom mansion"
                },
                "#text": " in Sagaponack with a private pathway to the beach. ("
              },
              {
                "-id": "0-44-5",
                "#text": "Mrs. "
              },
              {
                "-id": "0-44-6",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton worked on her memoir, \",,\"?from a sunny office with an ocean view"
                },
                "#text": ".),"
              },
              {
                "-id": "0-44-7",
                "#text": "Last year, when speculation about Mrs. Clinton's presidential run reached a fever pitch, the former first couple chose the comparatively lower-key town of Amagansett, "
              },
              {
                "-id": "0-44-8",
                "#text": "just up Montauk Highway from the lobster shacks and fishermen at the end of Long Island. "
              },
              {
                "-id": "0-44-9",
                "span": {
                  "-class": "positive",
                  "#text": "The seven-bedroom bluffside estate with sweeping views of Gardiners Bay"
                },
                "#text": ", the kind of house in that area that rents for $100,000 for the month of August, "
              },
              {
                "-id": "0-44-10",
                "#text": "was next door to the home of the Clinton friend and donor Harvey Weinstein.,"
              },
              {
                "-id": "0-44-11",
                "span": {
                  "-class": "negative",
                  "#text": "But the Clintons' go-to vacation spot for the last several summers now seems problematic, as Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-12",
                "span": {
                  "-class": "positive",
                  "#text": "who is seeking the Democratic nomination for president, delivers a populist economic message that the deck is stacked in favor of the wealthiest Americans and that she plans to"
                },
                "#text": " \""
              },
              {
                "-id": "0-44-13",
                "#text": "reshuffle the cards.\""
              },
              {
                "-id": "0-44-14",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Thus, it may not be ideal for Mr. and Mrs. Clinton to be photographed mingling at summer cocktail parties"
                  },
                  {
                    "-class": "positive",
                    "#text": "likes of Jerry Seinfeld"
                  }
                ],
                "#text": [
                  " with the ",
                  ", "
                ]
              },
              {
                "-id": "0-44-15",
                "span": {
                  "-class": "positive",
                  "#text": "Alec Baldwin, Steven Spielberg and other wealthy Hamptons regulars"
                },
                "#text": ".,"
              },
              {
                "-id": "0-44-16",
                "#text": "The Clintons looked into renting another home in the Hamptons, but they have hesitated to sign a lease, "
              },
              {
                "-id": "0-44-17",
                "#text": "said several real estate agents in the Hamptons, "
              },
              {
                "-id": "0-44-18",
                "span": {
                  "-class": "negative",
                  "#text": "who could discuss the Clintons only on condition of anonymity for fear of jeopardizing their client list"
                },
                "#text": ".,"
              },
              {
                "-id": "0-44-19",
                "#text": "Campaign aides have said Mrs. Clinton will take a vacation in August, "
              },
              {
                "-id": "0-44-20",
                "span": {
                  "-class": "negative",
                  "#text": "but they declined"
                },
                "#text": " to comment on the specifics of when or where.,Whether they rent there or not, "
              },
              {
                "-id": "0-44-21",
                "#text": "the couple are expected to spend much of their vacation on the shores of Long Island, "
              },
              {
                "-id": "0-44-22",
                "#text": "where their circle of New York friends and donors own luxe houses.,"
              },
              {
                "-id": "0-44-23",
                "span": {
                  "-class": "negative",
                  "#text": "The Clintons will also spend at least one weekend in their old vacation haunt of Martha's Vineyard"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-24",
                "span": {
                  "-class": "positive",
                  "#text": "likely alongside President and Michelle Obama, to celebrate the 80th"
                },
                "#text": ", birthday of their friend Vernon E. "
              },
              {
                "-id": "0-44-25",
                "#text": "Jordan Jr. (Mr. "
              },
              {
                "-id": "0-44-26",
                "span": {
                  "-class": "negative",
                  "#text": "Jordan and other friends lured Mr."
                },
                "#text": " Clinton to the island in the early years of his presidency, "
              },
              {
                "-id": "0-44-27",
                "span": {
                  "-class": "positive",
                  "#text": "and it quickly trumped his previous leisure spot in Arkansas"
                },
                "#text": ". "
              },
              {
                "-id": "0-44-28",
                "#text": [
                  "A White House spokesman said it was ",
                  " to confirm Mr. Obama's August plans.),"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "too early"
                }
              },
              {
                "-id": "0-44-29",
                "#text": "Another presidential candidate, former Gov. "
              },
              {
                "-id": "0-44-30",
                "#text": "Jeb Bush of Florida, who on Monday declared that he was seeking the Republican nomination, "
              },
              {
                "-id": "0-44-31",
                "span": {
                  "-class": "negative",
                  "#text": "has already drawn criticism for his summer vacations in Maine"
                },
                "#text": ". , "
              },
              {
                "-id": "0-44-32",
                "#text": "that Mr. Bush is getting his own four-bedroom, 3,000-square-foot cottage on the Bush family oceanside compound in Kennebunkport.,"
              },
              {
                "-id": "0-44-33",
                "#text": [
                  "Donors who did not want to ",
                  " not renting a Hamptons home again, "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "talk on the record offering Mrs. Clinton unsolicited advice said they hoped she could avoid the inevitable claims of elitism by"
                }
              },
              {
                "-id": "0-44-34",
                "#text": "given the optics of a presidential campaign and the still-sluggish economy. ("
              },
              {
                "-id": "0-44-35",
                "span": {
                  "-class": "negative",
                  "#text": "One donor advised she should at least opt for the less-flashy Sag Harbor"
                },
                "#text": ".),"
              },
              {
                "-id": "0-44-36",
                "#text": [
                  "At the same time, Mrs. Clinton and her allies, under ",
                  " and ,, a ",
                  " her bid, "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "intense pressure to raise money for both her campaign"
                  },
                  {
                    "-class": "positive",
                    "#text": "super PAC supporting"
                  }
                ]
              },
              {
                "-id": "0-44-37",
                "#text": "will need to woo the country's wealthiest Democrats this summer, wherever the 0.001 percent happen to be. \""
              },
              {
                "-id": "0-44-38",
                "#text": "There is only going to be one fund-raiser for Hillary in the Hamptons this summer: "
              },
              {
                "-id": "0-44-39",
                "#text": "it starts on Memorial Day and ends on ,,\"?said Robert Zimmerman, a fund-raiser for Mrs. Clinton with a home in Southampton.,"
              },
              {
                "-id": "0-44-40",
                "#text": "With , and a week of campaigning in early nominating states behind her, Mrs. Clinton will dive into a breakneck schedule of fund-raisers across the country.,\""
              },
              {
                "-id": "0-44-41",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The fund-raising for Hillary has been easier than other fund-raising"
                  },
                  {
                    "-class": "negative",
                    "#text": "it's never easy"
                  }
                ],
                "#text": [
                  ", but ",
                  ",\"?"
                ]
              },
              {
                "-id": "0-44-42",
                "#text": "said Jay Jacobs, a Nassau County Democrat and longtime Clinton friend.,"
              },
              {
                "-id": "0-44-43",
                "span": {
                  "-class": "positive",
                  "#text": "Many of Mrs. Clinton's most devoted backers, including the Washington lobbyist Liz Robbins and Alan Patricof"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-44",
                "span": {
                  "-class": "positive",
                  "#text": "a New York-based investor, have homes in the Hamptons and have hosted fund-raisers for the Clintons' various charitable and political causes in the past"
                },
                "#text": ".,"
              },
              {
                "-id": "0-44-45",
                "#text": "The hyperkinetic Clintons tend to work on their vacations, squeezing in fund-raisers for the ,. In 2013, "
              },
              {
                "-id": "0-44-46",
                "#text": "Mr. Patricof hosted a high-dollar gala at the Topping Rose House in Bridgehampton. "
              },
              {
                "-id": "0-44-47",
                "#text": "Guests included Mortimer B. "
              },
              {
                "-id": "0-44-48",
                "#text": "Zuckerman, the publisher of The Daily News, and the real estate executive Peter S. "
              },
              {
                "-id": "0-44-49",
                "#text": "Kalikow, who each donated $25,000.,\""
              },
              {
                "-id": "0-44-50",
                "span": {
                  "-class": "negative",
                  "#text": "Some of us will go into catastrophic withdrawal"
                }
              },
              {
                "-id": "0-44-51",
                "#text": "if we're not tapped to raise money for one of the Clintons,\"?said Ken Sunshine, "
              },
              {
                "-id": "0-44-52",
                "span": {
                  "-class": "positive",
                  "#text": "a veteran Democratic activist and public relations executive with a home in Remsenburg"
                },
                "#text": ".,"
              },
              {
                "-id": "0-44-53",
                "#text": "But this year, it's not so simple.,"
              },
              {
                "-id": "0-44-54",
                "#text": [
                  "As she mounts a campaign built on lifting the middle class and ",
                  " and ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "alleviating the growing gap between rich"
                  },
                  {
                    "-class": "negative",
                    "#text": "poor"
                  }
                ]
              },
              {
                "-id": "0-44-55",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton has come under criticism for ,.,Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-44-56",
                "#text": "and Mrs. Clinton have earned more than $125 million in paid speech income since leaving the White House in 2001, "
              },
              {
                "-id": "0-44-57",
                "#text": "according to financial disclosures. "
              },
              {
                "-id": "0-44-58",
                "#text": "That level of income \""
              },
              {
                "-id": "0-44-59",
                "#text": "shows how out of touch they've truly become,\"?said Reince Priebus, chairman of the Republican National Committee.,"
              },
              {
                "-id": "0-44-60",
                "span": {
                  "-class": "negative",
                  "#text": "The attack appears to have made inroads"
                },
                "#text": ".,"
              },
              {
                "-id": "0-44-61",
                "#text": "A , showed that , believed Mrs. Clinton \""
              },
              {
                "-id": "0-44-62",
                "#text": "cares about people like you,\"?down from 53 percent last July.,"
              },
              {
                "-id": "0-44-63",
                "#text": "Mrs. "
              },
              {
                "-id": "0-44-64",
                "#text": "Clinton's allies said the issue was less about perception and more about practicality. "
              },
              {
                "-id": "0-44-65",
                "span": {
                  "-class": "negative",
                  "#text": "The excruciating pace of a presidential campaign, even in its infancy, doesn't allow for two consecutive weeks of downtime"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-66",
                "#text": [
                  "much less the long walks on the beach and clambakes the Clintons have come to ",
                  " in previous years. \""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "enjoy"
                }
              },
              {
                "-id": "0-44-67",
                "#text": "They probably won't have the time to spend out there, "
              },
              {
                "-id": "0-44-68",
                "#text": "so why spend the money?\"?"
              },
              {
                "-id": "0-44-69",
                "#text": "Mr. "
              },
              {
                "-id": "0-44-70",
                "#text": "Patricof said.,"
              },
              {
                "-id": "0-44-71",
                "#text": "But it could pay for Mrs. Clinton to have a presence in the Hamptons. "
              },
              {
                "-id": "0-44-72",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Already, some of the women who move to vacation homes for the season and are active in charitable causes"
                  },
                  {
                    "-class": "positive",
                    "#text": "luncheons to raise money for Mrs. Clinton"
                  }
                ],
                "#text": [
                  " have inquired about hosting fund-raisers and ",
                  ", "
                ]
              },
              {
                "-id": "0-44-73",
                "#text": "said Alison Brod, a public relations executive and Hamptons hostess.,\""
              },
              {
                "-id": "0-44-74",
                "#text": "It's a time for people to show their allegiance and show off their houses at the same time,\"?"
              },
              {
                "-id": "0-44-75",
                "#text": "Ms. "
              },
              {
                "-id": "0-44-76",
                "#text": "Brod added.,"
              },
              {
                "-id": "0-44-77",
                "#text": "The parties won't exactly feature the poolside glamour the area is known for. "
              },
              {
                "-id": "0-44-78",
                "#text": "Campaign finance rules dictate that a married couple may spend $2,000 on expenses like cocktails and appetizers. "
              },
              {
                "-id": "0-44-79",
                "#text": "That doesn't go far in an enclave where a party tent can cost tens of thousands of dollars, "
              },
              {
                "-id": "0-44-80",
                "#text": "not including the band, passed hors d'oeuvres and Veuve Clicquot that go in it.,\""
              },
              {
                "-id": "0-44-81",
                "#text": "Let's face it, none of the people coming to my event on Monday are coming for the coconut shrimp,\"?"
              },
              {
                "-id": "0-44-82",
                "#text": "Mr. "
              },
              {
                "-id": "0-44-83",
                "span": {
                  "-class": "negative",
                  "#text": "Jacobs said ahead of the June 1 fund-raiser at his family home in Laurel Hollow"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-84",
                "#text": "N."
              },
              {
                "-id": "0-44-85",
                "#text": "Y., "
              },
              {
                "-id": "0-44-86",
                "span": {
                  "-class": "positive",
                  "#text": "a Long Island enclave with a very distinct vibe from the Hamptons"
                },
                "#text": ". \""
              },
              {
                "-id": "0-44-87",
                "#text": "They're coming to see Hillary.\""
              },
              {
                "-id": "0-44-88",
                "span": {
                  "-class": "positive",
                  "#text": "Republican presidential hopefuls will also find ripe fund-raising ground in the Long Island hamlets"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-89",
                "#text": "where conservative, deep-pocketed donors will open their wallets, and their beach houses, in droves.,"
              },
              {
                "-id": "0-44-90",
                "#text": "In 2012, the Republican nominee, Mitt Romney, , in the Hamptons, with back-to-back events at the sprawling East End estates of Ronald O. "
              },
              {
                "-id": "0-44-91",
                "#text": "Perelman, the Revlon chairman; "
              },
              {
                "-id": "0-44-92",
                "#text": "David H. "
              },
              {
                "-id": "0-44-93",
                "#text": "Koch, the billionaire conservative; "
              },
              {
                "-id": "0-44-94",
                "#text": "and Clifford M. "
              },
              {
                "-id": "0-44-95",
                "#text": "Sobel, a donor and ambassador for George W. "
              },
              {
                "-id": "0-44-96",
                "#text": "Bush. ("
              },
              {
                "-id": "0-44-97",
                "span": {
                  "-class": "positive",
                  "#text": "The Obama campaign used the weekend blitz to reinforce its charge that Mr. Romney was out of touch"
                },
                "#text": ", "
              },
              {
                "-id": "0-44-98",
                "#text": "despite Mr. Obama's own Hamptons fund-raising.),\""
              },
              {
                "-id": "0-44-99",
                "span": {
                  "-class": "positive",
                  "#text": "There's such a great amount of wealth here,\"?said Samantha Yanks, editor in chief of Hamptons Magazine"
                },
                "#text": ". "
              },
              {
                "-id": "0-44-100",
                "span": {
                  "-class": "negative",
                  "#text": "But, she added, \"It's tricky for politicians to be associated with that for too long"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-44-101",
                "#text": "It's a place you come, you visit and fund-raise, but, as a politician, "
              },
              {
                "-id": "0-44-102",
                "#text": "you don't necessarily want to be living in,\"?"
              },
              {
                "-id": "0-44-103",
                "#text": "she said.,"
              },
              {
                "-id": "0-44-104",
                "span": {
                  "-class": "negative",
                  "#text": "The Clintons' summer vacation plans have always jelled at the last minute and been wrought with political symbolism"
                },
                "#text": ". "
              },
              {
                "-id": "0-44-105",
                "#text": "In 1999, when Mrs. Clinton was close to running to be a senator from New York, "
              },
              {
                "-id": "0-44-106",
                "#text": "the Clintons tacked on five days in the Finger Lakes region upstate, in addition to time on Martha's Vineyard and fund-raising in East Hampton.,"
              },
              {
                "-id": "0-44-107",
                "#text": "Indeed, for the last several summers, the Clintons have been a part of the fabric of the Hamptons. "
              },
              {
                "-id": "0-44-108",
                "#text": "Mr. Clinton takes his young niece and nephew for miniature golf and his 9-year-old arthritic chocolate Labrador, "
              },
              {
                "-id": "0-44-109",
                "#text": "Seamus, for walks on the beach.,"
              },
              {
                "-id": "0-44-110",
                "#text": "The family dines at Babette's, a casual French bistro with an outdoor patio, "
              },
              {
                "-id": "0-44-111",
                "#text": "and Almond, the Bridgehampton restaurant partly owned by Jason Weiner, the brother-in-law of Mrs. Clinton's close aide Huma Abedin. "
              },
              {
                "-id": "0-44-112",
                "span": {
                  "-class": "positive",
                  "#text": "Mr. Clinton celebrated his 67th"
                },
                "#text": ", birthday in the Hamptons at a dinner party that included Paul McCartney and Jimmy Buffett as guests.,"
              },
              {
                "-id": "0-44-113",
                "#text": [
                  "Some Hamptons-based donors said it was ",
                  " to tell whether Mrs. Clinton's Secret Service detail would become a mainstay on the narrow farm roads near Long Island Sound.,\""
                ],
                "span": {
                  "-class": "negative",
                  "#text": "too early"
                }
              },
              {
                "-id": "0-44-114",
                "#text": "Summer starts after July Four,th,\"?Mr. "
              },
              {
                "-id": "0-44-115",
                "#text": "Patricof said."
              }
            ]
          },
          {
            "a": {
              "-id": "0-45-0",
              "#text": "1434697200181"
            }
          },
          {
            "a": [
              {
                "-id": "0-46-0",
                "#text": "WASHINGTON \"? ,'"
              },
              {
                "-id": "0-46-1",
                "#text": "s longtime adviser Sidney Blumenthal testified before a congressional committee on Tuesday that dozens of memos he sent her "
              },
              {
                "-id": "0-46-2",
                "#text": "when she was secretary of state were written by a longtime high-ranking , official.,"
              },
              {
                "-id": "0-46-3",
                "span": {
                  "-class": "negative",
                  "#text": "During a seven-and-a-half-hour deposition behind closed doors before the House committee investigating the 2012 attacks in Benghazi"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-4",
                "#text": "Libya, Mr. Blumenthal identified the official as Tyler Drumheller, according to a person with knowledge of his testimony.,"
              },
              {
                "-id": "0-46-5",
                "#text": "Mr. "
              },
              {
                "-id": "0-46-6",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Drumheller was part of a group of former American intelligence and military"
                  },
                  {
                    "-class": "positive",
                    "#text": "officials seeking to do business in Libya"
                  }
                ],
                "#text": " as the government of Col. "
              },
              {
                "-id": "0-46-7",
                "span": {
                  "-class": "negative",
                  "#text": "Muammar el-Qaddafi fell in 2011 and was replaced by a coalition of rebel forces"
                },
                "#text": ".,"
              },
              {
                "-id": "0-46-8",
                "#text": "Speaking to reporters after the deposition, the committee chairman, Trey Gowdy, Republican of South Carolina, "
              },
              {
                "-id": "0-46-9",
                "#text": "raised questions about the credibility of the official because of his financial interests. \""
              },
              {
                "-id": "0-46-10",
                "#text": "It means that one of the folks providing her with the largest volume of information was simply and merely a conduit\"?"
              },
              {
                "-id": "0-46-11",
                "span": {
                  "-class": "positive",
                  "#text": "of someone who \"may very well have had business interests in Libya,\"?Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-46-12",
                "#text": "Gowdy said.,"
              },
              {
                "-id": "0-46-13",
                "#text": "Mr. "
              },
              {
                "-id": "0-46-14",
                "span": {
                  "-class": "positive",
                  "#text": "Blumenthal and Mr. Gowdy, making short statements to reporters, did not identify Mr. Drumheller"
                },
                "#text": ". "
              },
              {
                "-id": "0-46-15",
                "#text": "But Mr. Blumenthal said the author of the emailed memos was a \""
              },
              {
                "-id": "0-46-16",
                "#text": "respected\"?"
              },
              {
                "-id": "0-46-17",
                "#text": "official. "
              },
              {
                "-id": "0-46-18",
                "#text": "He added that he had told Mrs. Clinton that he was not writing the memos and that she could use the information \""
              },
              {
                "-id": "0-46-19",
                "#text": "as she saw fit.\""
              },
              {
                "-id": "0-46-20",
                "#text": "Around the time last month when the State Department released a trove of Mrs. Clinton's emails about Libya, "
              },
              {
                "-id": "0-46-21",
                "#text": "Mr. Gowdy subpoenaed Mr. Blumenthal to appear before the committee. "
              },
              {
                "-id": "0-46-22",
                "#text": [
                  "Among the roughly 900 pages of emails that were made public, ",
                  " that Mr. Blumenthal had sent to Mrs. Clinton about Libya in 2011 and 2012. "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "about a third were intelligence memos"
                }
              },
              {
                "-id": "0-46-23",
                "#text": "On Friday, Mr. Blumenthal turned over to the panel 120 pages of emails he had exchanged with her.,"
              },
              {
                "-id": "0-46-24",
                "span": {
                  "-class": "negative",
                  "#text": "But Mr. Gowdy on Tuesday cast doubt on the reliability of the information in the memos"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-25",
                "#text": "saying that it had not been vetted. "
              },
              {
                "-id": "0-46-26",
                "#text": [
                  "The memos, which Mrs. Clinton circulated widely, ",
                  " contrast ",
                  ".,\""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "stand in stark"
                  },
                  {
                    "-class": "positive",
                    "#text": "to the intelligence reports prepared for senior American"
                  },
                  {
                    "-class": "negative",
                    "#text": "officials through a rigorous interagency process"
                  }
                ]
              },
              {
                "-id": "0-46-27",
                "span": {
                  "-class": "positive",
                  "#text": "I am interested in the reliability of the information being presented to our top diplomat"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-28",
                "#text": "and the reality is, "
              },
              {
                "-id": "0-46-29",
                "#text": "having been in the room all day, "
              },
              {
                "-id": "0-46-30",
                "#text": "he has absolutely no idea "
              },
              {
                "-id": "0-46-31",
                "#text": "whether the information is credible or not,\"?Mr. "
              },
              {
                "-id": "0-46-32",
                "#text": "Gowdy said.,"
              },
              {
                "-id": "0-46-33",
                "#text": "Mr. "
              },
              {
                "-id": "0-46-34",
                "#text": "Drumheller, a career C."
              },
              {
                "-id": "0-46-35",
                "#text": "I."
              },
              {
                "-id": "0-46-36",
                "#text": "A. "
              },
              {
                "-id": "0-46-37",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "clandestine officer, gained notice for his public accusations"
                  },
                  {
                    "-class": "negative",
                    "#text": "Bush administration ignored"
                  },
                  {
                    "-class": "negative",
                    "#text": "warnings from spies"
                  }
                ],
                "#text": [
                  " that the ",
                  " that the White House was overstating claims about Iraq's chemical and biological weapons program before the Iraq invasion in 2003.,"
                ]
              },
              {
                "-id": "0-46-38",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "In particular, Mr. Drumheller said that he had tried unsuccessfully"
                  },
                  {
                    "-class": "positive",
                    "#text": "United Nations in January 2003"
                  }
                ],
                "#text": [
                  " to get assertions that Saddam Hussein had developed mobile biological weapons laboratories removed from Secretary of State Colin Powell's speech to the ",
                  ". "
                ]
              },
              {
                "-id": "0-46-39",
                "span": {
                  "-class": "negative",
                  "#text": "The claims about the biological labs were shown to be fabrications from an Iraqi defector"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-40",
                "#text": "code-named Curveball.,"
              },
              {
                "-id": "0-46-41",
                "span": {
                  "-class": "negative",
                  "#text": "As for Libya, Mr. Drumheller has declined"
                },
                "#text": " requests from reporters to describe his precise role there. "
              },
              {
                "-id": "0-46-42",
                "#text": "But he did advise David Grange, a former Army general, "
              },
              {
                "-id": "0-46-43",
                "#text": "who was seeking to provide humanitarian services, transitional housing and police training to the new Libyan government.,"
              },
              {
                "-id": "0-46-44",
                "span": {
                  "-class": "negative",
                  "#text": "Months after Mr. Grange's deals fell"
                },
                "#text": " apart, Mr. Drumheller appears to have continued looking for a foothold in Libya. "
              },
              {
                "-id": "0-46-45",
                "span": {
                  "-class": "negative",
                  "#text": "A message on Mr. Drumheller's letterhead, dated February 2013 and stolen from Mr. Blumenthal's email account by a Romanian hacker"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-46",
                "#text": "indicates that he offered to advise the new government on relationships with American business leaders and the United States government.,"
              },
              {
                "-id": "0-46-47",
                "#text": "Officials for Mrs. Clinton's presidential campaign have said that she did not solicit the emails. "
              },
              {
                "-id": "0-46-48",
                "#text": "But Mr. Gowdy said that she had told Mr. Blumenthal in the emails to continue sending them.,"
              },
              {
                "-id": "0-46-49",
                "#text": "Mr. "
              },
              {
                "-id": "0-46-50",
                "span": {
                  "-class": "negative",
                  "#text": "Blumenthal called the deposition a stunt by Republicans aimed at drawing negative attention to Mrs. Clinton rather than offering insight into the attacks"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-51",
                "#text": "which killed four Americans.,"
              },
              {
                "-id": "0-46-52",
                "span": {
                  "-class": "negative",
                  "#text": "In one of the more dramatic moments in the hallway outside the hearing room, Mr. Gowdy argued with Representative Darrell Issa"
                },
                "#text": ", "
              },
              {
                "-id": "0-46-53",
                "#text": "Republican of California, telling him that he could not come into the room "
              },
              {
                "-id": "0-46-54",
                "#text": "because he was not a member of the Benghazi committee. "
              },
              {
                "-id": "0-46-55",
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Issa then stormed off and appeared to throw a soda can"
                },
                "#text": ".,"
              },
              {
                "-id": "0-46-56",
                "#text": "Mr. "
              },
              {
                "-id": "0-46-57",
                "#text": "Blumenthal handed over the emails to the committee on Friday in response to a subpoena. "
              },
              {
                "-id": "0-46-58",
                "#text": "Dozens had never been provided to the panel, raising questions about whether the State Department and Mrs. Clinton had complied with its requests.,\""
              },
              {
                "-id": "0-46-59",
                "#text": "As some of you know, "
              },
              {
                "-id": "0-46-60",
                "#text": "this has been an ongoing issue; "
              },
              {
                "-id": "0-46-61",
                "span": {
                  "-class": "positive",
                  "#text": "I want the documents, not the drama,\"?Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-46-62",
                "#text": "Gowdy said."
              }
            ]
          },
          {
            "a": {
              "-id": "0-47-0",
              "#text": "1434524400261"
            }
          },
          {
            "a": [
              {
                "-id": "0-48-0",
                "#text": "WASHINGTON \"?"
              },
              {
                "-id": "0-48-1",
                "span": {
                  "-class": "negative",
                  "#text": "Emails that a longtime confidant to , recently handed over to the House committee investigating the 2012 attacks in Benghazi"
                },
                "#text": ", "
              },
              {
                "-id": "0-48-2",
                "#text": [
                  "Libya, ",
                  " new questions about whether the State Department and Mrs. Clinton have complied with a series of requests from the panel.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "raise"
                }
              },
              {
                "-id": "0-48-3",
                "#text": [
                  "The emails, provided by Sidney Blumenthal, a close adviser to Mrs. Clinton, include information about weapons that were circulating in Libya and about the ",
                  " and a ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "security situation in Benghazi in the year"
                  },
                  {
                    "-class": "negative",
                    "#text": "half before the attacks"
                  }
                ]
              },
              {
                "-id": "0-48-4",
                "#text": "The committee has asked the State Department and Mrs. Clinton several times in the past year for emails from her and other department officials about \""
              },
              {
                "-id": "0-48-5",
                "#text": "weapons located or found in\"?"
              },
              {
                "-id": "0-48-6",
                "span": {
                  "-class": "positive",
                  "#text": "Libya and about the decision to open and maintain a diplomatic mission in Benghazi"
                },
                "#text": ".,"
              },
              {
                "-id": "0-48-7",
                "span": {
                  "-class": "negative",
                  "#text": "The emails from Mr. Blumenthal have widened a rift between the State Department and the committee"
                },
                "#text": ". "
              },
              {
                "-id": "0-48-8",
                "span": {
                  "-class": "negative",
                  "#text": "State Department officials said that they had complied only with requests and subpoenas related directly to the attacks because the committee's demands were too broad"
                },
                "#text": ". "
              },
              {
                "-id": "0-48-9",
                "#text": "The department has \""
              },
              {
                "-id": "0-48-10",
                "#text": "provided the committee with a subset of documents that matched its request "
              },
              {
                "-id": "0-48-11",
                "#text": "and will continue to work with them going forward,\"?said a spokesman, Alec Gerlach.,"
              },
              {
                "-id": "0-48-12",
                "#text": [
                  "But the panel has called that an ",
                  " and to ",
                  " the ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "excuse to protect Mrs. Clinton"
                  },
                  {
                    "-class": "negative",
                    "#text": "slow"
                  },
                  {
                    "-class": "negative",
                    "#text": "investigation of the attacks"
                  }
                ]
              },
              {
                "-id": "0-48-13",
                "#text": "which occurred on Sept. "
              },
              {
                "-id": "0-48-14",
                "span": {
                  "-class": "negative",
                  "#text": "11, 2012, and resulted in the deaths of four Americans, including Ambassador J"
                },
                "#text": ". "
              },
              {
                "-id": "0-48-15",
                "#text": "Christopher Stevens.,"
              },
              {
                "-id": "0-48-16",
                "span": {
                  "-class": "negative",
                  "#text": "It is not clear"
                },
                "#text": " whether the State Department possesses the emails between Mrs. Clinton and Mr. Blumenthal and did not hand them over. "
              },
              {
                "-id": "0-48-17",
                "#text": "It is also possible that Mrs. Clinton never provided them to the department and deleted them off the server that housed the personal account she used exclusively "
              },
              {
                "-id": "0-48-18",
                "#text": "when she was secretary of state.,"
              },
              {
                "-id": "0-48-19",
                "#text": "Mr. "
              },
              {
                "-id": "0-48-20",
                "#text": "Gerlach said that the committee had not told the department which emails Mr. Blumenthal handed over and that it would take some time for officials to determine whether the department had the emails.,"
              },
              {
                "-id": "0-48-21",
                "#text": "In response to a subpoena from the committee, Mr. Blumenthal on Friday handed over dozens of pages of emails between him and Mrs. Clinton. "
              },
              {
                "-id": "0-48-22",
                "#text": "The emails are similar to others between Mr. Blumenthal and Mrs. Clinton that were provided to the committee by the State Department in February.,"
              },
              {
                "-id": "0-48-23",
                "#text": "Those included dozens of memos about Libya that Mr. Blumenthal sent to Mrs. Clinton. "
              },
              {
                "-id": "0-48-24",
                "#text": "She forwarded many of them to her deputies to seek feedback. "
              },
              {
                "-id": "0-48-25",
                "span": {
                  "-class": "negative",
                  "#text": "The deputies often said that Mr. Blumenthal's information was false or misleading"
                },
                "#text": ".,"
              },
              {
                "-id": "0-48-26",
                "#text": "Mr. "
              },
              {
                "-id": "0-48-27",
                "#text": "Blumenthal, a former aide to President Bill Clinton, is scheduled to be deposed by the committee on Tuesday. "
              },
              {
                "-id": "0-48-28",
                "#text": "Its chairman, Trey Gowdy, Republican of South Carolina, wants to question him about "
              },
              {
                "-id": "0-48-29",
                "#text": "where he was getting his information and why he was writing intelligence memos for Mrs. Clinton. "
              },
              {
                "-id": "0-48-30",
                "#text": "At the time, Mr. Blumenthal was being paid by the Clinton Foundation.,"
              },
              {
                "-id": "0-48-31",
                "#text": "In the emails he gave to the committee, "
              },
              {
                "-id": "0-48-32",
                "#text": "there are several references to weapons in Libya. "
              },
              {
                "-id": "0-48-33",
                "#text": "One describes how a Libyan opposition leader feared that the United States did not want to provide weapons to opposition groups because the arms could fall into the hands of Al Qaeda or other radical Islamist groups. "
              },
              {
                "-id": "0-48-34",
                "#text": "Another email included a list of weapons said to be possessed by the government of Col. "
              },
              {
                "-id": "0-48-35",
                "#text": "Muammar el-Qaddafi.,"
              },
              {
                "-id": "0-48-36",
                "#text": "Last year, the State Department asked Mrs. Clinton for any documents she had that may be government records. "
              },
              {
                "-id": "0-48-37",
                "#text": "In response, she gave the department about 30,000 emails that she said related to her work. "
              },
              {
                "-id": "0-48-38",
                "#text": "The State Department in February provided the committee with about 900 pages of Mrs. Clinton's emails that the department said were handed over in response to the panel's requests, "
              },
              {
                "-id": "0-48-39",
                "#text": "which included a subpoena that the committee had sent to Mrs. Clinton. "
              },
              {
                "-id": "0-48-40",
                "#text": "Mrs. Clinton has said that she deleted about 30,000 other emails from the account that were personal. "
              },
              {
                "-id": "0-48-41",
                "span": {
                  "-class": "positive",
                  "#text": "Republicans have contended that this gave Mrs. Clinton an opportunity to cherry-pick the documents that would be considered government records"
                },
                "#text": ".,"
              },
              {
                "-id": "0-48-42",
                "#text": "After The New York Times first reported in March that she had exclusively used the personal email account, "
              },
              {
                "-id": "0-48-43",
                "#text": "she said that she had asked the State Department to make her emails public. "
              },
              {
                "-id": "0-48-44",
                "#text": "That process is likely to take months, "
              },
              {
                "-id": "0-48-45",
                "#text": "if not years.,\""
              },
              {
                "-id": "0-48-46",
                "span": {
                  "-class": "positive",
                  "#text": "The department is working diligently to publish to its public website all of the emails received from former Secretary Clinton through the FOIA process"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-48-47",
                "#text": "Mr. "
              },
              {
                "-id": "0-48-48",
                "span": {
                  "-class": "positive",
                  "#text": "Gerlach said, referring to the Freedom of Information Act"
                },
                "#text": "."
              }
            ]
          },
          {
            "a": {
              "-id": "0-49-0",
              "#text": "1434351600138"
            }
          },
          {
            "a": [
              {
                "-id": "0-50-0",
                "#text": [
                  "As lawmakers across the South spoke ",
                  " and the nation's largest retailers pulled items with its image from their shelves, , "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "out against the Confederate battle flag"
                }
              },
              {
                "-id": "0-50-1",
                "#text": "on Tuesday called the flag \""
              },
              {
                "-id": "0-50-2",
                "span": {
                  "-class": "negative",
                  "#text": "a symbol of our nation's racist past"
                },
                "#text": ".\""
              },
              {
                "-id": "0-50-3",
                "#text": "Speaking at an African-American church just outside Ferguson, Mo., "
              },
              {
                "-id": "0-50-4",
                "span": {
                  "-class": "negative",
                  "#text": "an impoverished black community"
                },
                "#text": " where protests against a mostly white police force erupted in violence last summer, "
              },
              {
                "-id": "0-50-5",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton made a forceful plea to remove the Confederate flag wherever it flew"
                },
                "#text": ". "
              },
              {
                "-id": "0-50-6",
                "span": {
                  "-class": "positive",
                  "#text": "And she encouraged other retailers to follow Amazon, Walmart, eBay and Sears"
                },
                "#text": " in discontinuing sales of items that display the flag.,\""
              },
              {
                "-id": "0-50-7",
                "#text": "It shouldn't fly there. "
              },
              {
                "-id": "0-50-8",
                "#text": "It shouldn't fly anywhere,\"?Mrs. "
              },
              {
                "-id": "0-50-9",
                "#text": "Clinton said of South Carolina, "
              },
              {
                "-id": "0-50-10",
                "#text": "where a white gunman killed nine African-Americans last Wednesday during a Bible study session at Emanuel African Methodist Episcopal Church in Charleston.,\""
              },
              {
                "-id": "0-50-11",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "That night, word of the killings struck"
                  },
                  {
                    "-class": "negative",
                    "#text": "blow to the soul,\"?she said"
                  }
                ],
                "#text": [
                  " like a ",
                  ". \""
                ]
              },
              {
                "-id": "0-50-12",
                "#text": "How do we make sense of such an evil act \"?"
              },
              {
                "-id": "0-50-13",
                "span": {
                  "-class": "negative",
                  "#text": "an act of racist terrorism perpetrated in a house of God"
                },
                "#text": "?\""
              },
              {
                "-id": "0-50-14",
                "#text": "Mrs. "
              },
              {
                "-id": "0-50-15",
                "#text": "Clinton, a Democratic candidate for president, spoke a day after Gov. "
              },
              {
                "-id": "0-50-16",
                "#text": "Nikki R. "
              },
              {
                "-id": "0-50-17",
                "#text": "Haley of South Carolina called for the Confederate flag to be removed from the grounds of the State House in Columbia. "
              },
              {
                "-id": "0-50-18",
                "#text": "Ms. Haley, a Republican, called the flag a \""
              },
              {
                "-id": "0-50-19",
                "span": {
                  "-class": "negative",
                  "#text": "deeply offensive symbol of a brutally oppressive past"
                },
                "#text": ".\""
              },
              {
                "-id": "0-50-20",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The Charleston attack forced"
                  },
                  {
                    "-class": "positive",
                    "#text": "wide field of presidential candidates to wade"
                  },
                  {
                    "-class": "negative",
                    "#text": "issues of racism"
                  }
                ],
                "#text": [
                  " the ",
                  " into ",
                  ", "
                ]
              },
              {
                "-id": "0-50-21",
                "span": {
                  "-class": "negative",
                  "#text": "injustice, and fierce debates in the South over the meaning and misuses of Confederate symbolism"
                },
                "#text": ". "
              },
              {
                "-id": "0-50-22",
                "span": {
                  "-class": "negative",
                  "#text": "The suspect in the murders, Dylann Roof, 21, had brandished the flag on social media and posted deeply racist tirades"
                },
                "#text": ".,"
              },
              {
                "-id": "0-50-23",
                "#text": [
                  "Until Ms. Haley called for the Confederate flag's removal, several Republican ",
                  " had ",
                  " or said the matter was a state issue that should be left to South Carolina. "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "presidential hopefuls"
                  },
                  {
                    "-class": "negative",
                    "#text": "issued vague statements"
                  }
                ]
              },
              {
                "-id": "0-50-24",
                "#text": "One Republican candidate, Ben Carson, who is black, , on Monday for not calling \""
              },
              {
                "-id": "0-50-25",
                "span": {
                  "-class": "negative",
                  "#text": "this tragedy an act of racism"
                },
                "#text": ".\""
              },
              {
                "-id": "0-50-26",
                "#text": "Mrs. "
              },
              {
                "-id": "0-50-27",
                "#text": "Clinton spoke out against the Confederate flag in 2007 "
              },
              {
                "-id": "0-50-28",
                "#text": "when she told The Associated Press while campaigning in South Carolina that she \""
              },
              {
                "-id": "0-50-29",
                "#text": "would like to see it removed\"?"
              },
              {
                "-id": "0-50-30",
                "#text": "from the State House grounds. "
              },
              {
                "-id": "0-50-31",
                "span": {
                  "-class": "positive",
                  "#text": "But until Tuesday, she had not commented on the current debate"
                },
                "#text": ".,"
              },
              {
                "-id": "0-50-32",
                "span": {
                  "-class": "positive",
                  "#text": "In her discussion Tuesday with community leaders at Christ the King United Church of Christ in Florissant"
                },
                "#text": ", "
              },
              {
                "-id": "0-50-33",
                "#text": "Mo., "
              },
              {
                "-id": "0-50-34",
                "#text": "Mrs. Clinton said the flag's removal would be \""
              },
              {
                "-id": "0-50-35",
                "#text": "just the beginning of what we have to do\"?"
              },
              {
                "-id": "0-50-36",
                "span": {
                  "-class": "negative",
                  "#text": "to combat racism"
                },
                "#text": ".,"
              },
              {
                "-id": "0-50-37",
                "#text": "She proceeded to list statistics about the economic disparities between black and white Americans, saying schools are more segregated today than they were in the 1960s, "
              },
              {
                "-id": "0-50-38",
                "#text": "with 23 percent of black students in the South attending majority white schools in 2011, "
              },
              {
                "-id": "0-50-39",
                "#text": "slightly lower than the percentage in 1968, according to her campaign.,"
              },
              {
                "-id": "0-50-40",
                "span": {
                  "-class": "positive",
                  "#text": "It was no accident that Mrs. Clinton chose a town"
                },
                "#text": " near Ferguson to hold the campaign event, "
              },
              {
                "-id": "0-50-41",
                "#text": "one of only a handful of public appearances on her schedule in the coming weeks. "
              },
              {
                "-id": "0-50-42",
                "span": {
                  "-class": "positive",
                  "#text": "The early months of her presidential campaign have been marked by sweeping speeches about race relations and issues like criminal justice reform and voting rights that may particularly resonate with African-American voters"
                },
                "#text": ".,"
              },
              {
                "-id": "0-50-43",
                "#text": "Mrs. "
              },
              {
                "-id": "0-50-44",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Clinton's emphasis on race has been largely motivated by current events"
                  },
                  {
                    "-class": "negative",
                    "#text": "Baltimore this spring after the death of a black man who had been in police custody and, more immediately"
                  }
                ],
                "#text": [
                  ", with her campaign unfolding against the backdrop of riots in ",
                  ", "
                ]
              },
              {
                "-id": "0-50-45",
                "span": {
                  "-class": "negative",
                  "#text": "the slaughter in Charleston"
                },
                "#text": ".,"
              },
              {
                "-id": "0-50-46",
                "#text": "Mrs. "
              },
              {
                "-id": "0-50-47",
                "#text": [
                  "Clinton's approach also distinguishes her ",
                  " mostly only ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "from her potential Republican rivals who have"
                  },
                  {
                    "-class": "negative",
                    "#text": "dipped a cautious toe into issues of racism"
                  }
                ]
              },
              {
                "-id": "0-50-48",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Candid talks like the one in Florissant could help Mrs. Clinton shore up support"
                  },
                  {
                    "-class": "negative",
                    "#text": "failed 2008 presidential campaign"
                  }
                ],
                "#text": [
                  " among the Democratic Party's base who overwhelmingly supported Barack Obama during her ",
                  ".,"
                ]
              },
              {
                "-id": "0-50-49",
                "span": {
                  "-class": "positive",
                  "#text": "Throughout the event, Mrs. Clinton spoke frequently about her own Methodist faith and her regular Bible study classes and churchgoing"
                },
                "#text": ". "
              },
              {
                "-id": "0-50-50",
                "#text": "The Florissant church's pastor, the Rev. "
              },
              {
                "-id": "0-50-51",
                "#text": "Traci Blackmon, ended the day's discussion with a prayer, asking the Lord to make sure Mrs. Clinton listens to the people she hopes to represent.,\""
              },
              {
                "-id": "0-50-52",
                "span": {
                  "-class": "negative",
                  "#text": "There are those who are still suffering from injustice,\"?Ms"
                },
                "#text": ". "
              },
              {
                "-id": "0-50-53",
                "#text": "Blackmon said. \""
              },
              {
                "-id": "0-50-54",
                "span": {
                  "-class": "negative",
                  "#text": "There are those who we still walk by every day and forget"
                },
                "#text": ".\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-51-0",
              "#text": "1435042800509"
            }
          },
          {
            "a": [
              {
                "-id": "0-52-0",
                "span": {
                  "-class": "negative",
                  "#text": "In one of the most striking speeches of his 2008 presidential campaign, , spoke about his candidacy as evidence that the country could transcend its racially divisive roots"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-52-1",
                "#text": "I have never been so naÃ¯ve as to believe that we can get beyond our racial divisions in a single election cycle, "
              },
              {
                "-id": "0-52-2",
                "#text": "or with a single candidacy,\"?, at the National Constitution Center in Philadelphia. "
              },
              {
                "-id": "0-52-3",
                "#text": "But, he said, "
              },
              {
                "-id": "0-52-4",
                "#text": "he believed that \"working together, "
              },
              {
                "-id": "0-52-5",
                "span": {
                  "-class": "negative",
                  "#text": "we can move beyond some of our old racial wounds"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-6",
                "#text": "and that in fact we have no choice "
              },
              {
                "-id": "0-52-7",
                "#text": "if we are to continue on the path of a more perfect union.\""
              },
              {
                "-id": "0-52-8",
                "span": {
                  "-class": "negative",
                  "#text": "As Mr. Obama spoke, his opponent in the Democratic nominating contest"
                },
                "#text": ", ,, addressed an almost entirely white crowd nearby in Philadelphia. \""
              },
              {
                "-id": "0-52-9",
                "#text": "Race "
              },
              {
                "-id": "0-52-10",
                "span": {
                  "-class": "negative",
                  "#text": "and gender are difficult issues"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-52-11",
                "#text": "she told reporters asking about Mr. Obama's address. \""
              },
              {
                "-id": "0-52-12",
                "#text": "And, therefore, we need to have more discussion.\""
              },
              {
                "-id": "0-52-13",
                "#text": "Seven years later, in a twist of current events and politics, Mrs. Clinton has become the presidential candidate at the forefront of that discussion. "
              },
              {
                "-id": "0-52-14",
                "span": {
                  "-class": "negative",
                  "#text": "And the way that racial issues have shaped her early campaign has emerged as the most striking difference between her 2016 campaign and the failed bid of 2008"
                },
                "#text": ".,"
              },
              {
                "-id": "0-52-15",
                "span": {
                  "-class": "negative",
                  "#text": "Back then, as she wrestled uncomfortably"
                },
                "#text": " in competing against the man who would become the first black president, "
              },
              {
                "-id": "0-52-16",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton appeared reluctant to make race"
                },
                "#text": " a central issue. "
              },
              {
                "-id": "0-52-17",
                "span": {
                  "-class": "negative",
                  "#text": "And her husband, former President Bill Clinton, angered many African-American leaders with off-the-cuff comments that seemed to diminish Mr. Obama's stature"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-18",
                "#text": "including calling his antiwar position \""
              },
              {
                "-id": "0-52-19",
                "#text": "the biggest fairy tale I've ever seen.\""
              },
              {
                "-id": "0-52-20",
                "span": {
                  "-class": "positive",
                  "#text": "Now, Mrs. Clinton is offering sweeping and passionate speeches on race"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-21",
                "span": {
                  "-class": "positive",
                  "#text": "which was one of the subjects that first drove her interest in politics in the 1960s and '70s"
                },
                "#text": ".,"
              },
              {
                "-id": "0-52-22",
                "#text": "On Tuesday, she will hold a community meeting at a black church in Florissant, Mo., "
              },
              {
                "-id": "0-52-23",
                "#text": "near Ferguson, where clashes between black protesters and police officers erupted last summer after an unarmed African-American teenager was killed by a white police officer. "
              },
              {
                "-id": "0-52-24",
                "#text": "At the meeting, she plans to discuss the massacre of nine people last week at a black church in Charleston, "
              },
              {
                "-id": "0-52-25",
                "#text": "S."
              },
              {
                "-id": "0-52-26",
                "#text": "C., "
              },
              {
                "-id": "0-52-27",
                "#text": "and \""
              },
              {
                "-id": "0-52-28",
                "span": {
                  "-class": "negative",
                  "#text": "broader issues"
                },
                "#text": " around strengthening communities,\"?her campaign said.,"
              },
              {
                "-id": "0-52-29",
                "#text": "On , on Monday, Mrs. Clinton restated her belief that South Carolina should stop flying the Confederate flag on the grounds of its State House.,"
              },
              {
                "-id": "0-52-30",
                "span": {
                  "-class": "negative",
                  "#text": "In April, as Baltimore became engulfed in protests over the death of a black man who died of injuries suffered while in police custody"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-31",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton called for criminal justice reform and said it was"
                },
                "#text": " \""
              },
              {
                "-id": "0-52-32",
                "span": {
                  "-class": "positive",
                  "#text": "a time for honesty about race and justice in America"
                },
                "#text": ".\""
              },
              {
                "-id": "0-52-33",
                "#text": "In Houston earlier this month, speaking to an almost entirely black crowd at Texas Southern University, "
              },
              {
                "-id": "0-52-34",
                "#text": "once known as the Houston Colored Junior College, Mrs. Clinton evoked the legacy of Barbara Jordan, "
              },
              {
                "-id": "0-52-35",
                "#text": [
                  "an alumna who served in the House of Representatives in the 1970s, and ",
                  " for the ",
                  " affected by new state voting laws.,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "delivered an impassioned plea to make voting easier"
                  },
                  {
                    "-class": "negative",
                    "#text": "poor and African-Americans"
                  }
                ]
              },
              {
                "-id": "0-52-36",
                "#text": "And on Saturday, as Republican presidential candidates calibrated their responses to South Carolina's display of the Confederate flag, "
              },
              {
                "-id": "0-52-37",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton declared that \"America's long struggle with race is far from finished"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-52-38",
                "#text": "despite \""
              },
              {
                "-id": "0-52-39",
                "#text": "electing our first black president.\""
              },
              {
                "-id": "0-52-40",
                "#text": "She talked about the Rev. "
              },
              {
                "-id": "0-52-41",
                "#text": "Dr. Martin Luther King Jr. and Nelson Mandela and Rosa Parks. "
              },
              {
                "-id": "0-52-42",
                "#text": "She called for gun-control measures, "
              },
              {
                "-id": "0-52-43",
                "span": {
                  "-class": "negative",
                  "#text": "and she cited stark statistics, pointing out that black Americans are nearly three times as likely as whites to be denied a mortgage"
                },
                "#text": ".,"
              },
              {
                "-id": "0-52-44",
                "#text": "In 2013, the median wealth of black families, Mrs. Clinton said, "
              },
              {
                "-id": "0-52-45",
                "#text": "was around $11,000, compared with more than $134,000 for white families. \""
              },
              {
                "-id": "0-52-46",
                "#text": "How can it be true that black children are 500 percent more likely to die from asthma than white kids?\"?"
              },
              {
                "-id": "0-52-47",
                "#text": "she said, growing visibly angrier with each data point. \""
              },
              {
                "-id": "0-52-48",
                "#text": "Five hundred percent!\""
              },
              {
                "-id": "0-52-49",
                "#text": "In perhaps the boldest line of that address, which was delivered in San Francisco at a conference for mayors, "
              },
              {
                "-id": "0-52-50",
                "#text": "Mrs. Clinton pointed to the so-called micro-aggressions of subtle racism \"?"
              },
              {
                "-id": "0-52-51",
                "#text": "without explicitly using that term \"?"
              },
              {
                "-id": "0-52-52",
                "#text": "that permeate college campuses, workplaces and communities.,\""
              },
              {
                "-id": "0-52-53",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Our problem"
                  },
                  {
                    "-class": "positive",
                    "#text": "not all kooks and Klansmen,\"?Mrs"
                  }
                ],
                "#text": [
                  " is ",
                  ". "
                ]
              },
              {
                "-id": "0-52-54",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-52-55",
                "span": {
                  "-class": "negative",
                  "#text": "It's also the cruel joke that goes unchallenged"
                },
                "#text": ".\""
              },
              {
                "-id": "0-52-56",
                "span": {
                  "-class": "negative",
                  "#text": "Making the issue broader than a Southern state grappling with racism and its Confederate roots carries some risk for Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-57",
                "span": {
                  "-class": "positive",
                  "#text": "who relied heavily on the support of white working-class voters in 2008 in critical states like Ohio and Pennsylvania"
                },
                "#text": ". "
              },
              {
                "-id": "0-52-58",
                "span": {
                  "-class": "negative",
                  "#text": "In that nominating race, in addition to her husband's remarks that set off anger among African-Americans"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-59",
                "#text": "an important supporter of hers, Gov. "
              },
              {
                "-id": "0-52-60",
                "#text": "Edward G. "
              },
              {
                "-id": "0-52-61",
                "#text": "Rendell of Pennsylvania, said he believed many of his state's \""
              },
              {
                "-id": "0-52-62",
                "#text": "conservative whites\"?"
              },
              {
                "-id": "0-52-63",
                "#text": "were \""
              },
              {
                "-id": "0-52-64",
                "span": {
                  "-class": "negative",
                  "#text": "probably not ready to vote for an African-American candidate"
                },
                "#text": ".\""
              },
              {
                "-id": "0-52-65",
                "span": {
                  "-class": "positive",
                  "#text": "But Mrs. Clinton appears not to have suffered any lingering resentment among black voters"
                },
                "#text": ". "
              },
              {
                "-id": "0-52-66",
                "span": {
                  "-class": "positive",
                  "#text": "In fact, some of her strongest support now comes from African-Americans"
                },
                "#text": ". "
              },
              {
                "-id": "0-52-67",
                "span": {
                  "-class": "positive",
                  "#text": "About 57 percent of black respondents said they had a favorable opinion of Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-68",
                "#text": "compared with 30 percent of whites, according to a New York Times-CBS News poll conducted April 30 to May 3.,"
              },
              {
                "-id": "0-52-69",
                "#text": "Mrs. "
              },
              {
                "-id": "0-52-70",
                "#text": "Clinton, who since leaving the White House has been surrounded by a cadre of African-American female aides, "
              },
              {
                "-id": "0-52-71",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "has showed comfort and fervor"
                  },
                  {
                    "-class": "negative",
                    "#text": "discussing racism"
                  }
                ],
                "#text": [
                  " in ",
                  ". "
                ]
              },
              {
                "-id": "0-52-72",
                "#text": "She still talks about the time in 1962 when her youth minister took her and a childhood friend to see Dr. King speak in Chicago. "
              },
              {
                "-id": "0-52-73",
                "#text": "The experience, she often says, opened her eyes.,"
              },
              {
                "-id": "0-52-74",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "In 1972, while working for the Children's Defense Fund"
                  },
                  {
                    "-class": "positive",
                    "#text": "Mrs. Clinton helped investigate private schools in the South that had been formed to avoid the integration of public schools"
                  }
                ],
                "#text": [
                  ", ",
                  ". "
                ]
              },
              {
                "-id": "0-52-75",
                "span": {
                  "-class": "negative",
                  "#text": "She pretended to be a mother enrolling a child at a private school in Alabama"
                },
                "#text": ", "
              },
              {
                "-id": "0-52-76",
                "#text": "where she was \""
              },
              {
                "-id": "0-52-77",
                "span": {
                  "-class": "positive",
                  "#text": "assured no black students would be enrolled"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-52-78",
                "#text": "she wrote in her memoir \""
              },
              {
                "-id": "0-52-79",
                "#text": "Living History.\"\""
              },
              {
                "-id": "0-52-80",
                "span": {
                  "-class": "positive",
                  "#text": "The environment in which she is in is allowing her to give voice to something she feels deeply about"
                }
              },
              {
                "-id": "0-52-81",
                "#text": "and has felt deeply about for at least the 20 years I've known her, "
              },
              {
                "-id": "0-52-82",
                "#text": "and probably 20 years before that,\"?said Minyon Moore, a Democratic strategist and longtime adviser to Mrs. Clinton.,"
              },
              {
                "-id": "0-52-83",
                "span": {
                  "-class": "positive",
                  "#text": "Black leaders seem to be encouraged by what they have heard so far from Mrs. Clinton"
                },
                "#text": ". "
              },
              {
                "-id": "0-52-84",
                "#text": "But, given the congressional impasses that Mr. Obama has faced on gun control and other measures, "
              },
              {
                "-id": "0-52-85",
                "span": {
                  "-class": "positive",
                  "#text": "some seem eager to"
                },
                "#text": " see "
              },
              {
                "-id": "0-52-86",
                "#text": "what she could actually do, "
              },
              {
                "-id": "0-52-87",
                "#text": "if elected.,\""
              },
              {
                "-id": "0-52-88",
                "#text": "The rhetoric is great, "
              },
              {
                "-id": "0-52-89",
                "#text": "and that's all you can do when you're not in office, "
              },
              {
                "-id": "0-52-90",
                "#text": "is talk,\"?Representative James E. "
              },
              {
                "-id": "0-52-91",
                "#text": "Clyburn, a Democrat of South Carolina, has said. \""
              },
              {
                "-id": "0-52-92",
                "#text": "It takes getting elected to get something done.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-53-0",
              "#text": "1434956400202"
            }
          },
          {
            "a": [
              {
                "-id": "0-54-0",
                "span": {
                  "-class": "positive",
                  "#text": "Hillary Rodham Clinton made many promises in her campaign"
                },
                "#text": " , last weekend, including a vow to \""
              },
              {
                "-id": "0-54-1",
                "#text": "make the economy work for everyday Americans, not just those at the top.\"?"
              },
              {
                "-id": "0-54-2",
                "#text": [
                  "Unlike many politicians who cast the income-and-wealth gap as a ",
                  ", Mrs. ",
                  " from \""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "result of impersonal forces"
                  },
                  {
                    "-class": "positive",
                    "#text": "Clinton rightly noted that"
                  },
                  {
                    "-class": "negative",
                    "#text": "growing inequality also comes"
                  }
                ]
              },
              {
                "-id": "0-54-3",
                "#text": "choices we've made as a nation, leaders and citizens.\""
              },
              {
                "-id": "0-54-4",
                "#text": "Mrs. "
              },
              {
                "-id": "0-54-5",
                "#text": "Clinton did not flesh out the choices she would make, "
              },
              {
                "-id": "0-54-6",
                "#text": "saying she would do so in coming weeks. "
              },
              {
                "-id": "0-54-7",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "While voters wait"
                  },
                  {
                    "-class": "positive",
                    "#text": "some of the promises Mrs. Clinton made and policies that would back them up"
                  }
                ],
                "#text": [
                  ", here are ",
                  ":,\""
                ]
              },
              {
                "-id": "0-54-8",
                "span": {
                  "-class": "negative",
                  "#text": "I will rewrite the tax code so it rewards hard work and investments here at home"
                },
                "#text": ", "
              },
              {
                "-id": "0-54-9",
                "span": {
                  "-class": "negative",
                  "#text": "not quick trades or stashing profits overseas"
                },
                "#text": ".\""
              },
              {
                "-id": "0-54-10",
                "span": {
                  "-class": "negative",
                  "#text": "With countless financial transactions occurring daily, some lasting a nanosecond, even a minuscule per-trade tax would restrain speculation"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-11",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Closing the tax loophole that lets multinational corporations indefinitely defer taxes on foreign-held profits would deter the most common form of corporate tax avoidance"
                  },
                  {
                    "-class": "positive",
                    "#text": "encourage"
                  },
                  {
                    "-class": "positive",
                    "#text": "timely investment of available funds"
                  }
                ],
                "#text": [
                  " and ",
                  ".,\""
                ]
              },
              {
                "-id": "0-54-12",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "We will unleash a new generation of entrepreneurs and small business owners"
                  },
                  {
                    "-class": "positive",
                    "#text": "providing tax relief"
                  }
                ],
                "#text": [
                  " by ",
                  ", "
                ]
              },
              {
                "-id": "0-54-13",
                "span": {
                  "-class": "positive",
                  "#text": "cutting red tape and making it easier to get"
                },
                "#text": " a small-business loan.\""
              },
              {
                "-id": "0-54-14",
                "span": {
                  "-class": "positive",
                  "#text": "Tax cuts, regulatory relief and better loan terms are perennial issues for small businesses"
                },
                "#text": ", championed by all candidates and all administrations. "
              },
              {
                "-id": "0-54-15",
                "span": {
                  "-class": "positive",
                  "#text": "To truly give small businesses a shot at success, however, big business needs reforming"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-16",
                "#text": [
                  "In recent decades, changes in antitrust and ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "contract law have allowed ever bigger corporations to dominate major industries"
                }
              },
              {
                "-id": "0-54-17",
                "span": {
                  "-class": "negative",
                  "#text": "making it harder for new entrants to compete"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-18",
                "#text": [
                  "It also makes smaller suppliers of goods and ",
                  ". "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "services more reliant on a handful of big customers who are increasingly able to dictate prices"
                }
              },
              {
                "-id": "0-54-19",
                "span": {
                  "-class": "positive",
                  "#text": "A president who champions small business must support a regulatory approach that strongly values competition and poses reasonably high hurdles to mergers"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-54-20",
                "span": {
                  "-class": "positive",
                  "#text": "We will restore America to the cutting edge of innovation, science and research by increasing both public and private investments"
                },
                "#text": ".\""
              },
              {
                "-id": "0-54-21",
                "#text": "Scientific research "
              },
              {
                "-id": "0-54-22",
                "span": {
                  "-class": "positive",
                  "#text": "that leads to commercial breakthroughs is vital to the long-term wealth of the nation"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-23",
                "span": {
                  "-class": "positive",
                  "#text": "But more public spending on science should include ways to ensure that the public shares in profits that result from federally financed research"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-24",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Mrs. Clinton could either support corporate tax increases in tandem"
                  },
                  {
                    "-class": "positive",
                    "#text": "fair share"
                  }
                ],
                "#text": [
                  " with greater research spending or promote nontax ways to give the public a ",
                  ". "
                ]
              },
              {
                "-id": "0-54-25",
                "#text": "One possibility would be to require recipients of federal grants to pay a portion of subsequent profits to the government. "
              },
              {
                "-id": "0-54-26",
                "span": {
                  "-class": "positive",
                  "#text": "Another would be to establish a federally backed innovation fund that gives the government"
                },
                "#text": " an equity stake in companies that use the fund.,\""
              },
              {
                "-id": "0-54-27",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "I will give new incentives to companies that give their employees a fair share of the profits"
                  },
                  {
                    "-class": "negative",
                    "#text": "their hard work earns"
                  }
                ],
                "#text": ".\""
              },
              {
                "-id": "0-54-28",
                "span": {
                  "-class": "negative",
                  "#text": "As a way to raise workers' pay, profit-sharing is too narrow"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-29",
                "span": {
                  "-class": "positive",
                  "#text": "As part of her pledge to strengthen families, Mrs. Clinton also called for a higher minimum wage"
                },
                "#text": ", "
              },
              {
                "-id": "0-54-30",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "paid sick days"
                  },
                  {
                    "-class": "positive",
                    "#text": "fair scheduling"
                  }
                ],
                "#text": [
                  ", paid family leave and ",
                  ", "
                ]
              },
              {
                "-id": "0-54-31",
                "span": {
                  "-class": "positive",
                  "#text": "which would boost pay and increase job security"
                },
                "#text": ". "
              },
              {
                "-id": "0-54-32",
                "#text": "She needs to specify how high the new minimum should be, presumably higher than the proposal in Congress for $12 an hour by 2020 that has been eclipsed by higher ,. "
              },
              {
                "-id": "0-54-33",
                "span": {
                  "-class": "negative",
                  "#text": "Her plan will not be complete without explicit support for union organizing"
                },
                "#text": ". , "
              },
              {
                "-id": "0-54-34",
                "span": {
                  "-class": "negative",
                  "#text": "that the demise in collective bargaining is the largest factor suppressing wage growth for middle-wage workers in recent decades"
                },
                "#text": ", "
              },
              {
                "-id": "0-54-35",
                "#text": "because union pay scales used to set the standard for union as well as nonunion employees. "
              },
              {
                "-id": "0-54-36",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Mrs. Clinton's plan should include support for new laws and procedures to make it easier to organize and increased penalties"
                  },
                  {
                    "-class": "negative",
                    "#text": "corporations that violate laws"
                  }
                ],
                "#text": [
                  " for ",
                  " intended to protect organizing efforts.,"
                ]
              },
              {
                "-id": "0-54-37",
                "#text": "Mrs. "
              },
              {
                "-id": "0-54-38",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Clinton also promised to create new jobs by developing clean energy and financing projects"
                  },
                  {
                    "-class": "positive",
                    "#text": "to improve the nation's roads"
                  }
                ],
                "#text": ", "
              },
              {
                "-id": "0-54-39",
                "#text": [
                  "railways, bridges, airports, ports and broadband system, although they would require a Congress ",
                  " to help. "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "willing"
                }
              },
              {
                "-id": "0-54-40",
                "#text": "If Mrs. Clinton's policy statements, when they come, "
              },
              {
                "-id": "0-54-41",
                "span": {
                  "-class": "positive",
                  "#text": "are as powerful as her promises"
                },
                "#text": ", "
              },
              {
                "-id": "0-54-42",
                "span": {
                  "-class": "positive",
                  "#text": "they would amount to a meaningful economic agenda"
                },
                "#text": "."
              }
            ]
          },
          {
            "a": {
              "-id": "0-55-0",
              "#text": "1434524400100"
            }
          },
          {
            "a": [
              {
                "-id": "0-56-0",
                "#text": "WASHINGTON \"? "
              },
              {
                "-id": "0-56-1",
                "#text": "If there was one moment recently in which , could have used ,'s help, "
              },
              {
                "-id": "0-56-2",
                "#text": "it was on Sunday as the president scrambled to salvage his trade deal, "
              },
              {
                "-id": "0-56-3",
                "#text": "which had been halted by congressional Democrats.,"
              },
              {
                "-id": "0-56-4",
                "#text": "Instead, Mrs. Clinton, now running to replace Mr. Obama, all but wagged a finger at her former boss. "
              },
              {
                "-id": "0-56-5",
                "span": {
                  "-class": "positive",
                  "#text": "Though she had once hailed the agreement as the gold standard for"
                },
                "#text": " \""
              },
              {
                "-id": "0-56-6",
                "span": {
                  "-class": "positive",
                  "#text": "free, transparent, fair trade"
                },
                "#text": ",\"?she bluntly suggested that the president should \""
              },
              {
                "-id": "0-56-7",
                "#text": "listen to and work with\"?"
              },
              {
                "-id": "0-56-8",
                "span": {
                  "-class": "positive",
                  "#text": "Democrats to improve the deal and ensure better protections for American workers"
                },
                "#text": ".,"
              },
              {
                "-id": "0-56-9",
                "#text": "If that cannot be done, Mrs. Clinton said, \""
              },
              {
                "-id": "0-56-10",
                "#text": "there should be no deal.\""
              },
              {
                "-id": "0-56-11",
                "span": {
                  "-class": "negative",
                  "#text": "Her comments irked some White House aides, who were still stung by the setback on Capitol Hill and frustrated that Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-12",
                "#text": "who once championed the president's trade agenda, was now distancing herself from it. "
              },
              {
                "-id": "0-56-13",
                "span": {
                  "-class": "positive",
                  "#text": "Over the weekend, one report on CNN documented 45 times when Mrs. Clinton had expressed robust support for the trade pact"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-14",
                "span": {
                  "-class": "positive",
                  "#text": "which the president is eager to see passed as part of his foreign policy legacy"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-56-15",
                "#text": "The fact is, "
              },
              {
                "-id": "0-56-16",
                "#text": "she was there when this thing was launched "
              },
              {
                "-id": "0-56-17",
                "span": {
                  "-class": "positive",
                  "#text": "and she was extolling it"
                }
              },
              {
                "-id": "0-56-18",
                "#text": "when she left,\"?David Axelrod, a former senior adviser to Mr. Obama, said Tuesday. \""
              },
              {
                "-id": "0-56-19",
                "#text": "She's in an obvious vise, between the work that she endorsed and was part of and the exigencies of a campaign. "
              },
              {
                "-id": "0-56-20",
                "span": {
                  "-class": "negative",
                  "#text": "Obviously, her comments plainly weren't helpful to moving this forward"
                },
                "#text": ".\""
              },
              {
                "-id": "0-56-21",
                "#text": [
                  "Senior White House aides, in their calmer moments, ",
                  " need to ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "say they understand Mrs. Clinton's"
                  },
                  {
                    "-class": "negative",
                    "#text": "occasionally disagree with the president"
                  }
                ]
              },
              {
                "-id": "0-56-22",
                "#text": "They noted that Mr. Obama and his onetime secretary of state remain closely aligned on many issues. "
              },
              {
                "-id": "0-56-23",
                "#text": "Even on the trade pact, Mrs. Clinton did not say she flatly opposes the trade deal, "
              },
              {
                "-id": "0-56-24",
                "span": {
                  "-class": "positive",
                  "#text": "leaving herself room to endorse it later"
                },
                "#text": ".,"
              },
              {
                "-id": "0-56-25",
                "span": {
                  "-class": "negative",
                  "#text": "But as she pursues the Democratic presidential nomination, Mrs. Clinton is confronting a stark reality"
                },
                "#text": ": "
              },
              {
                "-id": "0-56-26",
                "span": {
                  "-class": "positive",
                  "#text": "Building support for her candidacy must sometimes come at the expense of Mr. Obama"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-27",
                "#text": "and sometimes even at the expense of the policies they had both pursued in the White House.,\""
              },
              {
                "-id": "0-56-28",
                "span": {
                  "-class": "negative",
                  "#text": "The tension here is her moving from having been a spokesperson on behalf of this administration"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-29",
                "span": {
                  "-class": "positive",
                  "#text": "a loyal lieutenant"
                },
                "#text": ", to a presidential candidate,\"?said Anita Dunn, a Democratic operative who served as Mr. Obama's communications director in his first term. \""
              },
              {
                "-id": "0-56-30",
                "span": {
                  "-class": "negative",
                  "#text": "That is a recipe for tension, misunderstanding and sometimes disgruntled feelings"
                },
                "#text": ".\""
              },
              {
                "-id": "0-56-31",
                "#text": "Mrs. "
              },
              {
                "-id": "0-56-32",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton still praises the president under whom she served and is working assiduously to reach out to his coalition of African-American and young voters"
                },
                "#text": ".,"
              },
              {
                "-id": "0-56-33",
                "span": {
                  "-class": "positive",
                  "#text": "The major policy addresses of her early campaign included speeches on civil rights and voting rights"
                },
                "#text": ". "
              },
              {
                "-id": "0-56-34",
                "span": {
                  "-class": "negative",
                  "#text": "And in her speech in New York on Saturday, Mrs. Clinton praised Mr. Obama for pulling the country back from the brink of a depression"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-35",
                "span": {
                  "-class": "negative",
                  "#text": "saving the auto industry and passing ,.,But while placing most of the blame on Republicans"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-36",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "and not criticizing Mr. Obama directly"
                  },
                  {
                    "-class": "negative",
                    "#text": "she also painted a bleak picture of America during the president's tenure"
                  }
                ],
                "#text": [
                  ", ",
                  ". "
                ]
              },
              {
                "-id": "0-56-37",
                "#text": "It remains a place, she said, of \""
              },
              {
                "-id": "0-56-38",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "displaced jobs and undercut wages"
                  },
                  {
                    "-class": "negative",
                    "#text": "too little investments in new businesses, jobs"
                  },
                  {
                    "-class": "positive",
                    "#text": "fair compensation"
                  }
                ],
                "#text": [
                  ",\"?\"",
                  " and ",
                  ",\"?"
                ]
              },
              {
                "-id": "0-56-39",
                "#text": "and a political system that is \""
              },
              {
                "-id": "0-56-40",
                "span": {
                  "-class": "negative",
                  "#text": "paralyzed by gridlock and dysfunction"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-56-41",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "We can't stand by while inequality increases"
                  },
                  {
                    "-class": "negative",
                    "#text": "wages stagnate"
                  },
                  {
                    "-class": "positive",
                    "#text": "promise of America dims"
                  }
                ],
                "#text": [
                  ", ",
                  " and the ",
                  ",\"?"
                ]
              },
              {
                "-id": "0-56-42",
                "#text": "she said.,"
              },
              {
                "-id": "0-56-43",
                "span": {
                  "-class": "positive",
                  "#text": "Those comments are somewhat less stark than those Senator John McCain of Arizona sometimes made in 2008 about President George W"
                },
                "#text": ". "
              },
              {
                "-id": "0-56-44",
                "span": {
                  "-class": "positive",
                  "#text": "Bush, the fellow Republican he was running to succeed"
                },
                "#text": ". "
              },
              {
                "-id": "0-56-45",
                "span": {
                  "-class": "negative",
                  "#text": "After securing his party's nomination in the summer of that year, Mr. McCain ran a television commercial that bluntly said that \"we're worse off than we were four years ago"
                },
                "#text": ".\""
              },
              {
                "-id": "0-56-46",
                "#text": "Mrs. "
              },
              {
                "-id": "0-56-47",
                "#text": "Clinton's comments on trade echo a similar moment for her in the 2008 Democratic primary, "
              },
              {
                "-id": "0-56-48",
                "#text": "when she was challenged by Mr. Obama about her early support for the North American Free Trade Agreement. "
              },
              {
                "-id": "0-56-49",
                "#text": "Her husband, President Bill Clinton, signed that agreement into law in 1993, but Democratic interest groups had soured on it.,\""
              },
              {
                "-id": "0-56-50",
                "#text": "The fact is, "
              },
              {
                "-id": "0-56-51",
                "span": {
                  "-class": "positive",
                  "#text": "she was saying great things about Nafta until she started running for president,\"?Mr"
                },
                "#text": ". "
              },
              {
                "-id": "0-56-52",
                "span": {
                  "-class": "negative",
                  "#text": "Obama said about Mrs. Clinton during their fight for the nomination"
                },
                "#text": ".,"
              },
              {
                "-id": "0-56-53",
                "span": {
                  "-class": "negative",
                  "#text": "In this campaign, Mrs. Clinton's aides concluded that attempts to criticize the administration could backfire"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-54",
                "#text": "given that Mrs. Clinton spent four years as Mr. Obama's secretary of state. "
              },
              {
                "-id": "0-56-55",
                "span": {
                  "-class": "positive",
                  "#text": "But they also decided she must not fall victim to the attack being made by Republicans"
                },
                "#text": ": "
              },
              {
                "-id": "0-56-56",
                "#text": "that electing her would usher in a third Obama term.,"
              },
              {
                "-id": "0-56-57",
                "#text": "The aides knew the day would come when Mrs. Clinton would have to irritate Mr. Obama in order to appease Democratic voters. "
              },
              {
                "-id": "0-56-58",
                "#text": "They just did not think it would come quite so soon.,"
              },
              {
                "-id": "0-56-59",
                "#text": "After her speech at an outdoor rally on Saturday, Mrs. Clinton headed to Iowa to campaign. "
              },
              {
                "-id": "0-56-60",
                "#text": "She had consulted with aides about how to address the president's setback a day earlier on trade, "
              },
              {
                "-id": "0-56-61",
                "#text": "a development that was dominating headlines in Washington.,"
              },
              {
                "-id": "0-56-62",
                "#text": "Senior campaign officials for Mrs. Clinton, many of whom have ties to Mr. Obama, "
              },
              {
                "-id": "0-56-63",
                "#text": "had let the White House know "
              },
              {
                "-id": "0-56-64",
                "#text": "that their candidate would be offering her views on the Trans-Pacific Partnership and on the proposal to give the president the authority to present the measure for an up-or-down vote in Congress. "
              },
              {
                "-id": "0-56-65",
                "span": {
                  "-class": "negative",
                  "#text": "But the tone of her comments still struck some Obama supporters as lecturing"
                },
                "#text": ".,"
              },
              {
                "-id": "0-56-66",
                "span": {
                  "-class": "positive",
                  "#text": "Underscoring the trickiness of the issue, Mrs. Clinton's stance also did little to placate the liberal wing"
                },
                "#text": " of the ,, "
              },
              {
                "-id": "0-56-67",
                "#text": "which has pushed her to come out against the trade pact and oppose efforts to give Mr. Obama the so-called fast-track authority.,"
              },
              {
                "-id": "0-56-68",
                "#text": "In New Hampshire on Monday, after Mrs. Clinton played down her comments about trade by referring to that authority as merely a \""
              },
              {
                "-id": "0-56-69",
                "span": {
                  "-class": "negative",
                  "#text": "process issue,\"?one of her Democratic opponents, Martin O'Malley, fired back"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-56-70",
                "#text": "For the thousands of American workers whose jobs are on the line with TPP, "
              },
              {
                "-id": "0-56-71",
                "span": {
                  "-class": "positive",
                  "#text": "fast track is not a"
                },
                "#text": " \""
              },
              {
                "-id": "0-56-72",
                "span": {
                  "-class": "positive",
                  "#text": "process' issue, it's a straightforward vote on their future and their livelihood,\"?said Lis Smith"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-73",
                "#text": "Mr. O'Malley's deputy campaign manager.,"
              },
              {
                "-id": "0-56-74",
                "span": {
                  "-class": "negative",
                  "#text": "Aides reject criticism that Mrs. Clinton has avoided taking a firm position on the Trans-Pacific Partnership in particular"
                },
                "#text": ", "
              },
              {
                "-id": "0-56-75",
                "#text": "or on trade in general. "
              },
              {
                "-id": "0-56-76",
                "#text": "And White House officials say they believe Mr. Obama and Mrs. Clinton remain in sync on overall trade goals.,\""
              },
              {
                "-id": "0-56-77",
                "span": {
                  "-class": "positive",
                  "#text": "She has actually been very clear about"
                }
              },
              {
                "-id": "0-56-78",
                "#text": "where she stands on trade,\"?John D. "
              },
              {
                "-id": "0-56-79",
                "#text": "Podesta, the campaign chairman, told NBC's \""
              },
              {
                "-id": "0-56-80",
                "#text": "Meet the Press.\"?\""
              },
              {
                "-id": "0-56-81",
                "#text": "First, how does it grow jobs, grow wages and protect American workers, and second, "
              },
              {
                "-id": "0-56-82",
                "span": {
                  "-class": "positive",
                  "#text": "does it protect our national security"
                },
                "#text": "?\""
              },
              {
                "-id": "0-56-83",
                "#text": "But few people expect them to remain in sync for the next 17 months.,\""
              },
              {
                "-id": "0-56-84",
                "span": {
                  "-class": "positive",
                  "#text": "This is a wide-open family feud,\"?said Representative Gerald E"
                },
                "#text": ". "
              },
              {
                "-id": "0-56-85",
                "#text": "Connolly of Virginia, a rare Democrat who supports Mr. Obama's trade agenda. \""
              },
              {
                "-id": "0-56-86",
                "#text": "She's running for president. "
              },
              {
                "-id": "0-56-87",
                "#text": "She has to do what she has to do.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-57-0",
              "#text": "1434524400661"
            }
          },
          {
            "a": [
              {
                "-id": "0-58-0",
                "#text": "WASHINGTON \"?"
              },
              {
                "-id": "0-58-1",
                "span": {
                  "-class": "negative",
                  "#text": "IT'S hard being Elizabeth Warren"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-2",
                "#text": "Especially when you're not Elizabeth Warren.,"
              },
              {
                "-id": "0-58-3",
                "span": {
                  "-class": "negative",
                  "#text": "Hillary Clinton had an awkward collision last week"
                },
                "#text": " juggling her past role as President Obama's secretary of state, "
              },
              {
                "-id": "0-58-4",
                "#text": "her current role as Democratic front-runner and her coveted future role as president.,"
              },
              {
                "-id": "0-58-5",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "As secretary of state, she helped Obama push the Trans-Pacific Partnership"
                  },
                  {
                    "-class": "negative",
                    "#text": "center of the current trade fight"
                  }
                ],
                "#text": [
                  " that is at the ",
                  ". "
                ]
              },
              {
                "-id": "0-58-6",
                "span": {
                  "-class": "positive",
                  "#text": "In Australia in 2012, she was effusive, , \"sets the gold standard in trade agreements to open free"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-7",
                "span": {
                  "-class": "positive",
                  "#text": "transparent, fair trade"
                },
                "#text": ", the kind of environment that has the rule of law and a level playing field. "
              },
              {
                "-id": "0-58-8",
                "#text": "And when negotiated, this agreement will cover 40 percent of the world's total trade and build in strong protections for workers and the environment.\""
              },
              {
                "-id": "0-58-9",
                "span": {
                  "-class": "negative",
                  "#text": "Now Hillary says she is unsure"
                },
                "#text": " about the pact and would likely oppose giving President Obama the special authority to negotiate trade deals for an up-or-down vote in Congress. "
              },
              {
                "-id": "0-58-10",
                "span": {
                  "-class": "negative",
                  "#text": "As a future president, of course, she would want the same authority to negotiate trade deals that Obama is seeking in the messy Capitol Hill donnybrook"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-11",
                "span": {
                  "-class": "positive",
                  "#text": "But as a candidate pressured by progressives like Warren and Bernie Sanders and by labor unions"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-12",
                "span": {
                  "-class": "negative",
                  "#text": "she turned to Jell-O, shimmying around an issue she had once owned and offering an unpleasant reminder of why \"Clintonian"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-58-13",
                "span": {
                  "-class": "positive",
                  "#text": "became a synonym for skirting the truth"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-14",
                "#text": "It depends on what your definition of trade is \"?"
              },
              {
                "-id": "0-58-15",
                "#text": "and trade-off.,"
              },
              {
                "-id": "0-58-16",
                "span": {
                  "-class": "positive",
                  "#text": "Hillary has vowed to be more straightforward this time"
                },
                "#text": " about running as a woman, her position on immigration and her relations with the press (which are still imperious). "
              },
              {
                "-id": "0-58-17",
                "span": {
                  "-class": "negative",
                  "#text": "The heartbreaking mass shooting in a black church in Charleston, S"
                },
                "#text": "."
              },
              {
                "-id": "0-58-18",
                "#text": "C., ,, "
              },
              {
                "-id": "0-58-19",
                "#text": "should force the country to face up to \""
              },
              {
                "-id": "0-58-20",
                "span": {
                  "-class": "positive",
                  "#text": "hard truths"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-58-21",
                "span": {
                  "-class": "negative",
                  "#text": "about race, violence and guns"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-22",
                "span": {
                  "-class": "positive",
                  "#text": "But even after all her seasoning as a senator and secretary of state, even after all her enthusiastic suasion on the president's trade bill"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-23",
                "span": {
                  "-class": "positive",
                  "#text": "she can't face up to hard truths on trade"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-24",
                "span": {
                  "-class": "negative",
                  "#text": "And we have to play this silly game with her"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-25",
                "span": {
                  "-class": "negative",
                  "#text": "as she dances and ducks, undermining President Obama"
                },
                "#text": " by siding with Nancy Pelosi after Pelosi filleted the trade deal on the House floor.,\""
              },
              {
                "-id": "0-58-26",
                "#text": "The president should listen to and work with his allies in Congress, starting with Nancy Pelosi,\"?,, "
              },
              {
                "-id": "0-58-27",
                "span": {
                  "-class": "negative",
                  "#text": "torpedoing White House efforts to lure Democrats back on board"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-28",
                "span": {
                  "-class": "positive",
                  "#text": "In ,, Hillary slid around her previous support of the Pacific trade pact and said that"
                }
              },
              {
                "-id": "0-58-29",
                "#text": "if she were still in the Senate, "
              },
              {
                "-id": "0-58-30",
                "#text": "she would \""
              },
              {
                "-id": "0-58-31",
                "#text": "probably\"?"
              },
              {
                "-id": "0-58-32",
                "#text": "vote no on the trade promotion authority bill.,"
              },
              {
                "-id": "0-58-33",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Obama loyalists were quick to note the irony that Hillary did not help Obama"
                  },
                  {
                    "-class": "positive",
                    "#text": "spawned by the North American Free Trade Agreement that President Bill Clinton signed"
                  }
                ],
                "#text": [
                  ", even though he is working to combat the deep Democratic resistance ",
                  ".,"
                ]
              },
              {
                "-id": "0-58-34",
                "span": {
                  "-class": "negative",
                  "#text": "The White House is certainly irritated with Hillary"
                },
                "#text": ". "
              },
              {
                "-id": "0-58-35",
                "span": {
                  "-class": "positive",
                  "#text": "Perhaps it will spur Obama to wonder"
                }
              },
              {
                "-id": "0-58-36",
                "span": {
                  "-class": "negative",
                  "#text": "why he pulled the rug out from under poor old Joe, his own vice president"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-37",
                "#text": "to lay out the red carpet for his former rival.,: \""
              },
              {
                "-id": "0-58-38",
                "#text": "The fact is, "
              },
              {
                "-id": "0-58-39",
                "#text": "she was there when this thing was launched "
              },
              {
                "-id": "0-58-40",
                "span": {
                  "-class": "positive",
                  "#text": "and she was extolling it"
                }
              },
              {
                "-id": "0-58-41",
                "#text": "when she left. "
              },
              {
                "-id": "0-58-42",
                "#text": "She's in an obvious vise, between the work that she endorsed and was part of and the exigencies of a campaign. "
              },
              {
                "-id": "0-58-43",
                "span": {
                  "-class": "negative",
                  "#text": "Obviously, her comments plainly weren't helpful to moving this forward"
                },
                "#text": ".\" "
              },
              {
                "-id": "0-58-44",
                "#text": "that Hillary had enthusiastically promoted the trade pact 45 times as secretary of state.,"
              },
              {
                "-id": "0-58-45",
                "#text": [
                  "Aside from the fact that Hillary should be able to take a deep ",
                  " for, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "breath and stick with something she's already argued"
                }
              },
              {
                "-id": "0-58-46",
                "span": {
                  "-class": "negative",
                  "#text": "it plays into voters' doubts about her trustworthiness"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-47",
                "#text": "If you want to be president and you shape your principles to suit the shifting winds \"?"
              },
              {
                "-id": "0-58-48",
                "#text": "as Hillary did "
              },
              {
                "-id": "0-58-49",
                "#text": "when she voted to authorize W.'"
              },
              {
                "-id": "0-58-50",
                "#text": "s Iraq invasion \"?"
              },
              {
                "-id": "0-58-51",
                "#text": "then how can people on either side of an issue trust you?,"
              },
              {
                "-id": "0-58-52",
                "span": {
                  "-class": "negative",
                  "#text": "Since she hasn't sparked much passion herself yet"
                },
                "#text": ", "
              },
              {
                "-id": "0-58-53",
                "span": {
                  "-class": "negative",
                  "#text": "she may be frightened by the passionate acolytes of Warren and Sanders"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-58-54",
                "#text": "whose uncombed authenticity is buoying him in New Hampshire.,"
              },
              {
                "-id": "0-58-55",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "And, given her own unseemly"
                  },
                  {
                    "-class": "negative",
                    "#text": "she may not be willing to push back"
                  },
                  {
                    "-class": "positive",
                    "#text": "primal forces swirling around the trade issue"
                  },
                  {
                    "-class": "positive",
                    "#text": "unbridled corporatism in an era of stagnant wages"
                  }
                ],
                "#text": [
                  " money grabs, ",
                  " on ",
                  " about ",
                  ".,"
                ]
              },
              {
                "-id": "0-58-56",
                "span": {
                  "-class": "negative",
                  "#text": "But the greater danger for her is in looking disingenuous"
                },
                "#text": ".,"
              },
              {
                "-id": "0-58-57",
                "#text": "At the end of the day, leaders have to sometimes step up on some issues that are not 80 percent issues. "
              },
              {
                "-id": "0-58-58",
                "#text": "Unfortunately for her, Hillary is not as artful a dodger as her husband.,"
              },
              {
                "-id": "0-58-59",
                "span": {
                  "-class": "negative",
                  "#text": "Trade is a sticky wicket for her"
                },
                "#text": ". "
              },
              {
                "-id": "0-58-60",
                "span": {
                  "-class": "negative",
                  "#text": "But the path to the presidency is full of sticky wickets"
                },
                "#text": ". "
              },
              {
                "-id": "0-58-61",
                "span": {
                  "-class": "negative",
                  "#text": "And being president is full of sticky wickets"
                },
                "#text": ". "
              },
              {
                "-id": "0-58-62",
                "#text": "So you have to try to say what's true and what you actually believe, "
              },
              {
                "-id": "0-58-63",
                "#text": "not just what's tactical.,"
              },
              {
                "-id": "0-58-64",
                "#text": "Surprisingly, I received a fund-raising letter recently. "
              },
              {
                "-id": "0-58-65",
                "#text": "Hillary Rodham Clinton was in large letters on the upper lefthand side of the envelope and above my address was the typed message: \""
              },
              {
                "-id": "0-58-66",
                "#text": "Maureen, this is our moment . . . "
              },
              {
                "-id": "0-58-67",
                "#text": "are you with me?\""
              },
              {
                "-id": "0-58-68",
                "#text": "Not at the moment."
              }
            ]
          },
          {
            "a": {
              "-id": "0-59-0",
              "#text": "1434783600217"
            }
          },
          {
            "a": [
              {
                "-id": "0-60-0",
                "span": {
                  "-class": "negative",
                  "#text": "On Friday, House Democrats shocked almost everyone by rejecting key provisions needed to complete the Trans-Pacific Partnership"
                },
                "#text": ", "
              },
              {
                "-id": "0-60-1",
                "#text": "an agreement the White House wants but much of the party doesn't. "
              },
              {
                "-id": "0-60-2",
                "#text": "On Saturday Hillary Clinton formally began her campaign for president, and surprised most observers with an unapologetically liberal and populist speech.,"
              },
              {
                "-id": "0-60-3",
                "#text": "These are, of course, related events. "
              },
              {
                "-id": "0-60-4",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The Democratic Party is becoming more assertive about its traditional values"
                  },
                  {
                    "-class": "positive",
                    "#text": "point driven home by Mrs. Clinton's decision to speak"
                  }
                ],
                "#text": [
                  ", a ",
                  " on Roosevelt Island. "
                ]
              },
              {
                "-id": "0-60-5",
                "#text": "You could say that Democrats are moving left. "
              },
              {
                "-id": "0-60-6",
                "span": {
                  "-class": "negative",
                  "#text": "But the story is more complicated and interesting than this simple statement can convey"
                },
                "#text": ".,"
              },
              {
                "-id": "0-60-7",
                "#text": "You see, ever since Ronald Reagan's election in 1980, "
              },
              {
                "-id": "0-60-8",
                "span": {
                  "-class": "negative",
                  "#text": "Democrats have been on the ideological defensive"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-9",
                "#text": "Even "
              },
              {
                "-id": "0-60-10",
                "#text": "when they won elections they seemed afraid to endorse clearly progressive positions, eager to demonstrate their centrism by supporting policies like cuts to Social Security that their base hated. "
              },
              {
                "-id": "0-60-11",
                "#text": "But that era appears to be over. "
              },
              {
                "-id": "0-60-12",
                "#text": "Why?,"
              },
              {
                "-id": "0-60-13",
                "span": {
                  "-class": "negative",
                  "#text": "Part of the answer is that Democrats, despite defeats in midterm elections, believe"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-60-14",
                "span": {
                  "-class": "negative",
                  "#text": "rightly or wrongly"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-60-15",
                "#text": "that the political wind is at their backs. "
              },
              {
                "-id": "0-60-16",
                "#text": "Growing ethnic diversity is producing what should be a more favorable electorate; "
              },
              {
                "-id": "0-60-17",
                "span": {
                  "-class": "positive",
                  "#text": "growing tolerance is turning social issues, once a source of Republican strength, into a Democratic advantage instead"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-18",
                "#text": [
                  "Reagan was elected by a nation in which half the public still disapproved of ,; Mrs. Clinton is running to lead a nation in which 60 ",
                  " ,.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "percent support"
                }
              },
              {
                "-id": "0-60-19",
                "#text": "At the same time, Democrats seem finally to have taken on board something political scientists have been telling us for years: "
              },
              {
                "-id": "0-60-20",
                "#text": "adopting \""
              },
              {
                "-id": "0-60-21",
                "#text": "centrist\"?"
              },
              {
                "-id": "0-60-22",
                "span": {
                  "-class": "negative",
                  "#text": "positions in an attempt to attract , is a mug's game, because such voters don't exist"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-23",
                "#text": "Most supposed independents are in fact strongly aligned with one party or the other, and the handful who aren't are mainly just confused. "
              },
              {
                "-id": "0-60-24",
                "#text": "So you might as well take a stand for what you believe in.,"
              },
              {
                "-id": "0-60-25",
                "#text": "But the party's change isn't just about politics, it's also about policy.,"
              },
              {
                "-id": "0-60-26",
                "span": {
                  "-class": "positive",
                  "#text": "On one side, the success of Obamacare and related policies"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-60-27",
                "#text": "millions covered for substantially less than expected, surprisingly effective cost control for Medicare \"?"
              },
              {
                "-id": "0-60-28",
                "#text": "have helped to inoculate the party against blanket assertions that government programs never work. "
              },
              {
                "-id": "0-60-29",
                "span": {
                  "-class": "negative",
                  "#text": "And on the other side, the Davos Democrats who used to be a powerful force arguing against progressive policies have lost much of their credibility"
                },
                "#text": ".,"
              },
              {
                "-id": "0-60-30",
                "#text": "I'm referring to the kind of people \"?"
              },
              {
                "-id": "0-60-31",
                "#text": "many, though not all, from Wall Street \"?"
              },
              {
                "-id": "0-60-32",
                "#text": "who go to lots of international meetings "
              },
              {
                "-id": "0-60-33",
                "#text": "where they assure each other that prosperity is all about competing in the global economy, "
              },
              {
                "-id": "0-60-34",
                "#text": "and that this means supporting trade agreements and cutting social spending. "
              },
              {
                "-id": "0-60-35",
                "#text": [
                  "Such people have influence in part because of ",
                  ", but also because of the belief that they really know how the world works.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "their campaign contributions"
                }
              },
              {
                "-id": "0-60-36",
                "#text": "As it turns out, however, they don't. "
              },
              {
                "-id": "0-60-37",
                "span": {
                  "-class": "negative",
                  "#text": "In the 1990s the purported wise men blithely assured us that we had nothing to fear from financial deregulation"
                },
                "#text": "; "
              },
              {
                "-id": "0-60-38",
                "#text": "we did. "
              },
              {
                "-id": "0-60-39",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "After crisis struck"
                  },
                  {
                    "-class": "positive",
                    "#text": "thanks in large part to that very deregulation"
                  }
                ],
                "#text": [
                  ", ",
                  ", "
                ]
              },
              {
                "-id": "0-60-40",
                "span": {
                  "-class": "negative",
                  "#text": "they warned us that we should be very afraid of bond investors"
                },
                "#text": ", "
              },
              {
                "-id": "0-60-41",
                "#text": "who would punish America for its budget deficits; "
              },
              {
                "-id": "0-60-42",
                "#text": "they didn't. "
              },
              {
                "-id": "0-60-43",
                "#text": "So why believe them "
              },
              {
                "-id": "0-60-44",
                "#text": "when they insist that we must approve an unpopular trade deal?,"
              },
              {
                "-id": "0-60-45",
                "span": {
                  "-class": "negative",
                  "#text": "And this loss of credibility means that if Mrs. Clinton makes it to the White House she'll govern very differently from the way her husband did in the 1990s"
                },
                "#text": ".,"
              },
              {
                "-id": "0-60-46",
                "#text": "As I said, "
              },
              {
                "-id": "0-60-47",
                "span": {
                  "-class": "positive",
                  "#text": "you can describe all of this as a move to the left, but there's more to it than that \"?and it's not at all symmetric to the Republican move right"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-48",
                "span": {
                  "-class": "negative",
                  "#text": "Democrats are adopting ideas that work and rejecting ideas that don't, whereas Republicans are doing the opposite"
                },
                "#text": ".,"
              },
              {
                "-id": "0-60-49",
                "span": {
                  "-class": "positive",
                  "#text": "And no, I'm not being unfair"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-50",
                "#text": "Obamacare, which was once a conservative idea, "
              },
              {
                "-id": "0-60-51",
                "#text": "is working better than even supporters expected; "
              },
              {
                "-id": "0-60-52",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "so Democrats are committed to defending its achievements"
                  },
                  {
                    "-class": "positive",
                    "#text": "Republicans are more fanatical than ever in their efforts to destroy it"
                  }
                ],
                "#text": [
                  ", while ",
                  ". "
                ]
              },
              {
                "-id": "0-60-53",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Modestly higher taxes on the wealthy haven't hurt the economy"
                  },
                  {
                    "-class": "positive",
                    "#text": "promises that tax cuts"
                  },
                  {
                    "-class": "negative",
                    "#text": "will have magical effects have proved disastrously wrong"
                  }
                ],
                "#text": [
                  ", while ",
                  "; "
                ]
              },
              {
                "-id": "0-60-54",
                "span": {
                  "-class": "positive",
                  "#text": "so Democrats have become more comfortable with a modest tax-and-spend agenda, while Republicans are more firmly in the grip of tax-cutting cranks than ever"
                },
                "#text": ". "
              },
              {
                "-id": "0-60-55",
                "#text": "And so on down the line.,"
              },
              {
                "-id": "0-60-56",
                "#text": "Of course, changes in ideology matter only to the extent that they can influence policy. "
              },
              {
                "-id": "0-60-57",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "And while the electoral odds probably"
                  },
                  {
                    "-class": "positive",
                    "#text": "favor Mrs. Clinton, and Democrats could retake the Senate"
                  }
                ],
                "#text": ", "
              },
              {
                "-id": "0-60-58",
                "#text": "they have very little chance of retaking the House. "
              },
              {
                "-id": "0-60-59",
                "#text": "So changes in the Democratic Party may take a while to change America as a whole. "
              },
              {
                "-id": "0-60-60",
                "span": {
                  "-class": "positive",
                  "#text": "But something important is happening, and in the long run it will matter a great deal"
                },
                "#text": "."
              }
            ]
          },
          {
            "a": {
              "-id": "0-61-0",
              "#text": "1434351600412"
            }
          },
          {
            "a": [
              {
                "-id": "0-62-0",
                "#text": "IF you want to support Senator , for president but worry that he doesn't have a shot against , "
              },
              {
                "-id": "0-62-1",
                "span": {
                  "-class": "positive",
                  "#text": "for the Democratic nomination, take heart from the , \"Fun Home"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-62-2",
                "span": {
                  "-class": "positive",
                  "#text": "which won the Tony Award for best musical last week"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-62-3",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-4",
                "span": {
                  "-class": "negative",
                  "#text": "was the decided underdog"
                },
                "#text": ": "
              },
              {
                "-id": "0-62-5",
                "span": {
                  "-class": "positive",
                  "#text": "a nominee with little money, bold themes, no frills and a small team on the payroll"
                },
                "#text": ". ("
              },
              {
                "-id": "0-62-6",
                "#text": "Sound familiar, Sanders-ites?) "
              },
              {
                "-id": "0-62-7",
                "span": {
                  "-class": "positive",
                  "#text": "The story of a lesbian cartoonist and her relationship with her closeted gay father, \"Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-8",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "is about facing difficult truths"
                  },
                  {
                    "-class": "negative",
                    "#text": "tragic consequences"
                  }
                ],
                "#text": " and the "
              },
              {
                "-id": "0-62-9",
                "#text": "when we don't \"?"
              },
              {
                "-id": "0-62-10",
                "#text": "the very message, as it happens, "
              },
              {
                "-id": "0-62-11",
                "#text": [
                  "that the Sanders campaign is offering to ",
                  ". "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "America about income inequality and climate change"
                }
              },
              {
                "-id": "0-62-12",
                "span": {
                  "-class": "positive",
                  "#text": "Compared with the flashy big-budget musical"
                },
                "#text": " \""
              },
              {
                "-id": "0-62-13",
                "#text": [
                  "An American in Paris,\"?which was the safe bet to win the Tony, \"",
                  "\"?"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                }
              },
              {
                "-id": "0-62-14",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "looked like a fringe contender"
                  },
                  {
                    "-class": "positive",
                    "#text": "not unlike certain politicians who are easily dismissed"
                  }
                ],
                "#text": [
                  ", too dark and offbeat to have wide appeal, ",
                  " as quixotic nonfactors.,"
                ]
              },
              {
                "-id": "0-62-15",
                "span": {
                  "-class": "positive",
                  "#text": "In other words, \"Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-16",
                "#text": "isn't the sort of musical you imagine on Broadway \"?"
              },
              {
                "-id": "0-62-17",
                "#text": "just as Mr. Sanders isn't the sort of politician you imagine in the White House. ("
              },
              {
                "-id": "0-62-18",
                "#text": "He would be the first socialist president, after all.),"
              },
              {
                "-id": "0-62-19",
                "#text": "What does it take for an underdog to succeed? "
              },
              {
                "-id": "0-62-20",
                "#text": "In politics and on Broadway, two worlds I've covered as a reporter, some of the factors are similar. "
              },
              {
                "-id": "0-62-21",
                "#text": "Message "
              },
              {
                "-id": "0-62-22",
                "span": {
                  "-class": "positive",
                  "#text": "and perseverance are crucial"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-23",
                "#text": "Money \"?"
              },
              {
                "-id": "0-62-24",
                "span": {
                  "-class": "negative",
                  "#text": "not a fortune, but at least enough"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-62-25",
                "span": {
                  "-class": "positive",
                  "#text": "is essential"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-26",
                "#text": "And authenticity matters most of all.,"
              },
              {
                "-id": "0-62-27",
                "span": {
                  "-class": "negative",
                  "#text": "Underdog candidates like Harry S"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-28",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Truman in 1948 and Barack Obama in the 2008 primary contest struck many voters"
                  },
                  {
                    "-class": "positive",
                    "#text": "authentic leaders who were willing to speak truth to power"
                  }
                ],
                "#text": [
                  " as ",
                  " (Truman railing against a \""
                ]
              },
              {
                "-id": "0-62-29",
                "#text": "do-nothing Congress,\"?Mr. "
              },
              {
                "-id": "0-62-30",
                "#text": "Obama opposing the American invasion of Iraq) "
              },
              {
                "-id": "0-62-31",
                "#text": "and who did not try to be all things to all voters. "
              },
              {
                "-id": "0-62-32",
                "#text": [
                  "Truman was quintessentially Midwestern and didn't ",
                  ", no matter what ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "shy away from his roots"
                  },
                  {
                    "-class": "positive",
                    "#text": "coastal elites thought of him"
                  }
                ]
              },
              {
                "-id": "0-62-33",
                "span": {
                  "-class": "negative",
                  "#text": "Mr. Obama was the first black presidential nominee and didn't shy away from his race"
                },
                "#text": ", "
              },
              {
                "-id": "0-62-34",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "giving an eloquent speech in the face"
                  },
                  {
                    "-class": "negative",
                    "#text": "controversy over his Chicago pastor"
                  }
                ],
                "#text": [
                  " of ",
                  ". "
                ]
              },
              {
                "-id": "0-62-35",
                "#text": "Many Americans came to see both men as the real deal.,\""
              },
              {
                "-id": "0-62-36",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Underdogs"
                  },
                  {
                    "-class": "positive",
                    "#text": "succeed when the voters are in a certain zone"
                  }
                ],
                "#text": " \"?"
              },
              {
                "-id": "0-62-37",
                "#text": "I call it \""
              },
              {
                "-id": "0-62-38",
                "#text": "the voter zone' \"?"
              },
              {
                "-id": "0-62-39",
                "#text": "where they are looking for something, and the underdog candidate taps into that something,\"?said Tad Devine, "
              },
              {
                "-id": "0-62-40",
                "#text": "a veteran Democratic consultant who is advising Mr. Sanders. \""
              },
              {
                "-id": "0-62-41",
                "#text": "It can be a set of issues, attitudes or beliefs that voters feel are being overlooked by the front-running candidates. "
              },
              {
                "-id": "0-62-42",
                "#text": "If the underdog can get into the voter zone with the voters by themselves, "
              },
              {
                "-id": "0-62-43",
                "#text": "and "
              },
              {
                "-id": "0-62-44",
                "#text": "if they are credible, "
              },
              {
                "-id": "0-62-45",
                "span": {
                  "-class": "negative",
                  "#text": "they can win despite the odds"
                },
                "#text": ".\""
              },
              {
                "-id": "0-62-46",
                "#text": "Both \""
              },
              {
                "-id": "0-62-47",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-48",
                "#text": "and \""
              },
              {
                "-id": "0-62-49",
                "#text": "An American in Paris\"?"
              },
              {
                "-id": "0-62-50",
                "span": {
                  "-class": "positive",
                  "#text": "had plenty of credibility in the run-up to the"
                },
                "#text": " ,: "
              },
              {
                "-id": "0-62-51",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "They were winning over critics and filling seats"
                  },
                  {
                    "-class": "positive",
                    "#text": "two meaningful measures in the eyes"
                  },
                  {
                    "-class": "positive",
                    "#text": "eligible to cast ballots for best musical"
                  }
                ],
                "#text": [
                  " with paying customers, ",
                  " of the 844 Tony voters ",
                  ". "
                ]
              },
              {
                "-id": "0-62-52",
                "#text": "But \""
              },
              {
                "-id": "0-62-53",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-54",
                "span": {
                  "-class": "positive",
                  "#text": "had a freshness that appealed to many liberals among the Tony electorate"
                },
                "#text": ": "
              },
              {
                "-id": "0-62-55",
                "#text": "Shows about lesbians are rare on Broadway. "
              },
              {
                "-id": "0-62-56",
                "span": {
                  "-class": "positive",
                  "#text": "Its producers, meanwhile, had shown perseverance by developing the musical for years and raising enough money ($5.2 million) to transfer it from the Public Theater"
                },
                "#text": ", "
              },
              {
                "-id": "0-62-57",
                "#text": "Off Broadway, to Broadway.,"
              },
              {
                "-id": "0-62-58",
                "span": {
                  "-class": "negative",
                  "#text": "And unlike the beautiful people and plot contrivances of"
                },
                "#text": " \""
              },
              {
                "-id": "0-62-59",
                "#text": "An American in Paris,\"?the relationships and emotions in \""
              },
              {
                "-id": "0-62-60",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-61",
                "span": {
                  "-class": "positive",
                  "#text": "felt deeply authentic"
                },
                "#text": ": "
              },
              {
                "-id": "0-62-62",
                "#text": "a family of normal-looking people where love and loyalty mixed with resentments and rancor. ("
              },
              {
                "-id": "0-62-63",
                "#text": [
                  "Come to think of it, the ",
                  ".),\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "father's bad haircut brings to mind Mr. Sanders's messy mop"
                }
              },
              {
                "-id": "0-62-64",
                "span": {
                  "-class": "positive",
                  "#text": "A lot of people loved"
                },
                "#text": " \""
              },
              {
                "-id": "0-62-65",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": ",' but they also believed in what it was about and wanted to see it win,\"?"
              },
              {
                "-id": "0-62-66",
                "#text": "said Scott Sanders, a veteran Broadway producer (who is not related to the senator).,"
              },
              {
                "-id": "0-62-67",
                "span": {
                  "-class": "negative",
                  "#text": "Underdog victories can be fleeting, of course"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-68",
                "#text": "The musical \""
              },
              {
                "-id": "0-62-69",
                "#text": "Nine\"?"
              },
              {
                "-id": "0-62-70",
                "span": {
                  "-class": "positive",
                  "#text": "beat"
                },
                "#text": " \""
              },
              {
                "-id": "0-62-71",
                "#text": "Dreamgirls\"?"
              },
              {
                "-id": "0-62-72",
                "#text": "for the Tony in 1982, but \"Dreamgirls\"?"
              },
              {
                "-id": "0-62-73",
                "span": {
                  "-class": "positive",
                  "#text": "has become the more cherished title"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-74",
                "span": {
                  "-class": "negative",
                  "#text": "Another upset win came in 2004 when \"Avenue Q"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-75",
                "#text": "triumphed over \""
              },
              {
                "-id": "0-62-76",
                "span": {
                  "-class": "negative",
                  "#text": "Wicked"
                },
                "#text": "\"?\"?"
              },
              {
                "-id": "0-62-77",
                "#text": "yet \""
              },
              {
                "-id": "0-62-78",
                "span": {
                  "-class": "negative",
                  "#text": "Wicked"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-79",
                "#text": "is the one about to hit $4 billion in global ticket sales. "
              },
              {
                "-id": "0-62-80",
                "#text": "In politics, former Gov. "
              },
              {
                "-id": "0-62-81",
                "#text": "Howard Dean of Vermont \"?"
              },
              {
                "-id": "0-62-82",
                "#text": "also Mr. Sanders's home state \"?"
              },
              {
                "-id": "0-62-83",
                "#text": "had the antiwar message and political authenticity (\""
              },
              {
                "-id": "0-62-84",
                "#text": "I'm here to represent the Democratic wing of the Democratic Party\"? "
              },
              {
                "-id": "0-62-85",
                "#text": "that pleased many party members in the 2004 presidential primaries, but came up short to the establishment candidate, "
              },
              {
                "-id": "0-62-86",
                "#text": "Senator John Kerry. "
              },
              {
                "-id": "0-62-87",
                "#text": "And Senator Sanders may be attracting attention to his message by drawing large crowds, like the thousand people who turned out for him this month in Keene, "
              },
              {
                "-id": "0-62-88",
                "#text": "N."
              },
              {
                "-id": "0-62-89",
                "#text": "H., "
              },
              {
                "-id": "0-62-90",
                "#text": "but Mrs. Clinton is sure to attract a sea of fans to her rallies on Roosevelt Island on Saturday and in Des Moines on Sunday.,\""
              },
              {
                "-id": "0-62-91",
                "#text": [
                  "Like Eugene McCarthy in 1968, ",
                  " in a primary against Hillary Clinton, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "Sanders will offer a way to cast a protest vote"
                }
              },
              {
                "-id": "0-62-92",
                "#text": "but I don't expect him to register much support beyond that,\"?said Douglas E. "
              },
              {
                "-id": "0-62-93",
                "#text": "Schoen, a Democratic strategist who was an adviser to President Bill Clinton.,"
              },
              {
                "-id": "0-62-94",
                "span": {
                  "-class": "negative",
                  "#text": "Dare to dream, the underdogs reply"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-95",
                "span": {
                  "-class": "negative",
                  "#text": "Take the fight for"
                },
                "#text": " ,: "
              },
              {
                "-id": "0-62-96",
                "#text": [
                  "It was a long-shot movement for years, but ",
                  " (through legal and ",
                  " (the ",
                  ") ",
                  ".,\""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "perseverance"
                  },
                  {
                    "-class": "negative",
                    "#text": "political fights) and authenticity"
                  },
                  {
                    "-class": "positive",
                    "#text": "love and commitment of same-sex couples"
                  },
                  {
                    "-class": "positive",
                    "#text": "have helped changed policies and attitudes across the country"
                  }
                ]
              },
              {
                "-id": "0-62-97",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "It's the underdogs who dare"
                  },
                  {
                    "-class": "negative",
                    "#text": "take risks"
                  }
                ],
                "#text": [
                  " to push the envelope, who dare to ",
                  ", "
                ]
              },
              {
                "-id": "0-62-98",
                "#text": "and who dare to be different,\"?said Chad Griffin, president of the Human Rights Campaign, "
              },
              {
                "-id": "0-62-99",
                "#text": "a gay rights group. \""
              },
              {
                "-id": "0-62-100",
                "span": {
                  "-class": "negative",
                  "#text": "In doing so, it's the underdogs who prove the pessimists wrong and push the world forward"
                },
                "#text": ".\""
              },
              {
                "-id": "0-62-101",
                "#text": "Among those rooting for Senator Sanders is Alison Bechdel, "
              },
              {
                "-id": "0-62-102",
                "#text": "who wrote the graphic memoir \""
              },
              {
                "-id": "0-62-103",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home,\"?which was adapted into the musical"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-104",
                "#text": "Like Mr. Sanders, Ms. Bechdel lives near Burlington, Vt., "
              },
              {
                "-id": "0-62-105",
                "#text": "and she has been a political supporter of his for years. "
              },
              {
                "-id": "0-62-106",
                "#text": "And if an underdog like \""
              },
              {
                "-id": "0-62-107",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-62-108",
                "#text": "can win, "
              },
              {
                "-id": "0-62-109",
                "#text": "she said, "
              },
              {
                "-id": "0-62-110",
                "#text": "maybe he can surprise people, too.,\""
              },
              {
                "-id": "0-62-111",
                "#text": [
                  "People kept saying that we were too small and ",
                  " something big and ",
                  " \""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "challenging to"
                  },
                  {
                    "-class": "positive",
                    "#text": "beat"
                  },
                  {
                    "-class": "positive",
                    "#text": "comforting like"
                  }
                ]
              },
              {
                "-id": "0-62-112",
                "#text": "American in Paris,' '' Ms. Bechdel said. \""
              },
              {
                "-id": "0-62-113",
                "#text": "This is where the analogy between \""
              },
              {
                "-id": "0-62-114",
                "span": {
                  "-class": "positive",
                  "#text": "Fun Home' and presidential politics is interesting"
                },
                "#text": ". "
              },
              {
                "-id": "0-62-115",
                "#text": "People say they won't support a candidate who they think is unelectable. "
              },
              {
                "-id": "0-62-116",
                "#text": "But if enough people vote for the candidate, what happens? "
              },
              {
                "-id": "0-62-117",
                "#text": "They will get elected. "
              },
              {
                "-id": "0-62-118",
                "#text": "You just need enough voters to go with their heart.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-63-0",
              "#text": "1434178800985"
            }
          },
          {
            "a": [
              {
                "-id": "0-64-0",
                "#text": "In a roughly 45-minute speech on Saturday, , made 14 references to herself as a fighter.,"
              },
              {
                "-id": "0-64-1",
                "#text": "She said she would \""
              },
              {
                "-id": "0-64-2",
                "span": {
                  "-class": "negative",
                  "#text": "fight"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-3",
                "span": {
                  "-class": "negative",
                  "#text": "back against Republicans, \"fight"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-4",
                "span": {
                  "-class": "negative",
                  "#text": "climate change, \"fight"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-5",
                "#text": "to \""
              },
              {
                "-id": "0-64-6",
                "#text": "strengthen America's families\"?"
              },
              {
                "-id": "0-64-7",
                "#text": "and \""
              },
              {
                "-id": "0-64-8",
                "span": {
                  "-class": "negative",
                  "#text": "fight"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-9",
                "#text": "to \""
              },
              {
                "-id": "0-64-10",
                "#text": "harness all of America's power.\"?"
              },
              {
                "-id": "0-64-11",
                "#text": "She used the verb in many of the same ways at her first major rally in Des Moines on Sunday, "
              },
              {
                "-id": "0-64-12",
                "#text": "adding that she would \""
              },
              {
                "-id": "0-64-13",
                "span": {
                  "-class": "negative",
                  "#text": "fight"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-14",
                "span": {
                  "-class": "positive",
                  "#text": "for Midwestern values"
                },
                "#text": ".,"
              },
              {
                "-id": "0-64-15",
                "#text": "The presidential campaign's effort to define Mrs. Clinton as a fighter is, on the surface, "
              },
              {
                "-id": "0-64-16",
                "#text": "a way to persuade middle-class voters that she is on their side. "
              },
              {
                "-id": "0-64-17",
                "span": {
                  "-class": "positive",
                  "#text": "But it is also helping to convey a more subtle message"
                },
                "#text": ": "
              },
              {
                "-id": "0-64-18",
                "#text": "When it comes to political combat and perseverance, Mrs. Clinton is not President Obama.,"
              },
              {
                "-id": "0-64-19",
                "#text": "The theme is emerging just as Mr. Obama has ,, "
              },
              {
                "-id": "0-64-20",
                "#text": [
                  "one that many in Congress say ",
                  ", namely his standoffishness and ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "reflects his weaknesses"
                  },
                  {
                    "-class": "negative",
                    "#text": "his inability to forge coalitions for an agenda"
                  }
                ]
              },
              {
                "-id": "0-64-21",
                "#text": "During her campaign swing in Iowa on Sunday, Mrs. Clinton said no one would be a \""
              },
              {
                "-id": "0-64-22",
                "#text": "tougher negotiator\"?"
              },
              {
                "-id": "0-64-23",
                "#text": "on trade than she would. "
              },
              {
                "-id": "0-64-24",
                "#text": [
                  "She offered her most explicit remarks yet on the president's handling of the issue, ",
                  " of California, the minority leader, and other congressional Democrats ",
                  ".,\""
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "challenging him to work with Representative Nancy Pelosi"
                  },
                  {
                    "-class": "positive",
                    "#text": "to improve the Trans-Pacific Partnership trade deal"
                  }
                ]
              },
              {
                "-id": "0-64-25",
                "#text": "My view is the White House should call Nancy and a few other of the Democrats to say, \""
              },
              {
                "-id": "0-64-26",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "What would it take to get an agreement that would be better and not"
                  },
                  {
                    "-class": "positive",
                    "#text": "worse for American workers"
                  }
                ],
                "#text": "?'\"?"
              },
              {
                "-id": "0-64-27",
                "#text": "Mrs. "
              },
              {
                "-id": "0-64-28",
                "#text": "Clinton said.,"
              },
              {
                "-id": "0-64-29",
                "#text": "She added: \""
              },
              {
                "-id": "0-64-30",
                "#text": "What I want to see is a concerted effort to see "
              },
              {
                "-id": "0-64-31",
                "#text": "how far we can push the agreement.\""
              },
              {
                "-id": "0-64-32",
                "#text": "In the early months of her campaign, Mrs. Clinton has worked to highlight her connection to, "
              },
              {
                "-id": "0-64-33",
                "span": {
                  "-class": "positive",
                  "#text": "and respect for"
                },
                "#text": ", the president she served for four years as secretary of state. "
              },
              {
                "-id": "0-64-34",
                "span": {
                  "-class": "positive",
                  "#text": "She has appealed to Mr. Obama's coalition of young and African-American voters with , and civil rights"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-35",
                "#text": "And even as liberal Democrats urged her to speak out against Mr. Obama's troubled trade deal,,.,"
              },
              {
                "-id": "0-64-36",
                "span": {
                  "-class": "negative",
                  "#text": "But now that Democrats in Congress have rebuffed Mr. Obama"
                },
                "#text": " ,, Mrs. Clinton faces heightened pressure to present herself to voters as a different kind of leader, "
              },
              {
                "-id": "0-64-37",
                "#text": "in style if not in substance.,"
              },
              {
                "-id": "0-64-38",
                "#text": "At the same time, Clinton aides believe that "
              },
              {
                "-id": "0-64-39",
                "#text": "if they can make the \""
              },
              {
                "-id": "0-64-40",
                "span": {
                  "-class": "positive",
                  "#text": "tenacious fighter"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-64-41",
                "#text": "image stick with voters, \"ultimately she will win this election,\"?the campaign manager, Robby Mook, "
              },
              {
                "-id": "0-64-42",
                "#text": "said Friday at a question-and-answer session hosted by Politico., "
              },
              {
                "-id": "0-64-43",
                "#text": "from the campaign, titled \""
              },
              {
                "-id": "0-64-44",
                "#text": "Fighter,\"?opens with a silhouette of Mrs. Clinton as a voice says: \""
              },
              {
                "-id": "0-64-45",
                "#text": "What is a fighter? "
              },
              {
                "-id": "0-64-46",
                "#text": "To me, a fighter is someone who won't give up.\""
              },
              {
                "-id": "0-64-47",
                "#text": "Persistence is another emphasis. "
              },
              {
                "-id": "0-64-48",
                "span": {
                  "-class": "negative",
                  "#text": "In the video and on the stump, Mrs. Clinton talks about her unsuccessful attempt to overhaul the health care system as first lady and"
                }
              },
              {
                "-id": "0-64-49",
                "#text": "how she continued to work "
              },
              {
                "-id": "0-64-50",
                "#text": "and eventually got the Children's Health Insurance Program passed.,"
              },
              {
                "-id": "0-64-51",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The inevitable contrast with Mr. Obama's leadership style"
                  },
                  {
                    "-class": "positive",
                    "#text": "language draws is not lost on Democrats in early nominating states"
                  }
                ],
                "#text": [
                  " that such ",
                  ".,\""
                ]
              },
              {
                "-id": "0-64-52",
                "span": {
                  "-class": "negative",
                  "#text": "Her years in Arkansas, as first lady, as a losing candidate in 2008 and as secretary of state"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-64-53",
                "#text": "all of that taught her to be tough "
              },
              {
                "-id": "0-64-54",
                "#text": "and to keep on going,\"?said Marti Anderson, an Iowa state representative who has a 2008 Obama campaign sticker on the front door of her Des Moines home.,\""
              },
              {
                "-id": "0-64-55",
                "span": {
                  "-class": "positive",
                  "#text": "Obama's quiet, a studious person, a wonk, a constitutional lawyer"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-56",
                "span": {
                  "-class": "positive",
                  "#text": "Hillary is more of an activist,\"?Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-57",
                "#text": "Anderson said. \""
              },
              {
                "-id": "0-64-58",
                "span": {
                  "-class": "negative",
                  "#text": "And you need an activist"
                },
                "#text": " when you have, for instance, a Congress that puts obstacles in your way. "
              },
              {
                "-id": "0-64-59",
                "span": {
                  "-class": "positive",
                  "#text": "An activist doesn't stop trying"
                },
                "#text": ".\""
              },
              {
                "-id": "0-64-60",
                "#text": "Mrs. "
              },
              {
                "-id": "0-64-61",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's efforts to draw a contrast must be subtle"
                },
                "#text": ", "
              },
              {
                "-id": "0-64-62",
                "span": {
                  "-class": "negative",
                  "#text": "lest she alienate the Democratic base of voters who supported Mr. Obama"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-63",
                "#text": "When asked whether the positioning of Mrs. Clinton is a strategy to distance her from Mr. Obama, "
              },
              {
                "-id": "0-64-64",
                "#text": "a campaign spokesman reiterated that she is a \""
              },
              {
                "-id": "0-64-65",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "tenacious"
                  },
                  {
                    "-class": "negative",
                    "#text": "dogged fighter"
                  }
                ],
                "#text": [
                  ", ",
                  "\"?"
                ]
              },
              {
                "-id": "0-64-66",
                "#text": "and that the description would be \""
              },
              {
                "-id": "0-64-67",
                "#text": "front and center\"?"
              },
              {
                "-id": "0-64-68",
                "#text": "in the campaign.,"
              },
              {
                "-id": "0-64-69",
                "span": {
                  "-class": "positive",
                  "#text": "It helps"
                },
                "#text": " that she has also earned a public image of not giving up, said Kiki McLean, "
              },
              {
                "-id": "0-64-70",
                "#text": "a former aide to Mrs. Clinton.,\""
              },
              {
                "-id": "0-64-71",
                "#text": "It's her Methodist Midwestern stick-to-itiveness,\"?Ms. "
              },
              {
                "-id": "0-64-72",
                "#text": "McLean said. \""
              },
              {
                "-id": "0-64-73",
                "#text": "I don't think it's a strategic adoption\"?"
              },
              {
                "-id": "0-64-74",
                "#text": "to contrast her with Mr. Obama, she added, \""
              },
              {
                "-id": "0-64-75",
                "span": {
                  "-class": "positive",
                  "#text": "but they are definitely different personalities"
                },
                "#text": ".\""
              },
              {
                "-id": "0-64-76",
                "#text": "At her speech in New York on Saturday, the biggest rally of her presidential campaign, "
              },
              {
                "-id": "0-64-77",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton said she was devoting her candidacy to"
                },
                "#text": " \""
              },
              {
                "-id": "0-64-78",
                "#text": "everyone who's ever been knocked down but refused to be knocked out.\"?"
              },
              {
                "-id": "0-64-79",
                "#text": "Kelly Clarkson's \""
              },
              {
                "-id": "0-64-80",
                "span": {
                  "-class": "positive",
                  "#text": "Stronger (What Doesn't Kill You"
                },
                "#text": ")\"?"
              },
              {
                "-id": "0-64-81",
                "#text": "blared from the outdoor speakers.,"
              },
              {
                "-id": "0-64-82",
                "span": {
                  "-class": "positive",
                  "#text": "After the speech, supporters seemed happy"
                },
                "#text": " to have seen Mrs. Clinton showcase her own temperament and style. "
              },
              {
                "-id": "0-64-83",
                "span": {
                  "-class": "negative",
                  "#text": "They could not help"
                },
                "#text": " but compare them with those of the sitting president.,\""
              },
              {
                "-id": "0-64-84",
                "span": {
                  "-class": "positive",
                  "#text": "What you can see today and what you can see all the time is that Hillary loves people"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-64-85",
                "span": {
                  "-class": "positive",
                  "#text": "Lynn Forester de Rothschild, a prominent backer of Democrats and Mrs. Clinton, said"
                },
                "#text": ". \""
              },
              {
                "-id": "0-64-86",
                "#text": "And even people who really like Barack Obama have said to me that is not the case with him.\""
              },
              {
                "-id": "0-64-87",
                "span": {
                  "-class": "positive",
                  "#text": "Those differences were apparent to some of the Iowans who helped catapult Mr. Obama to victory in the 2008 caucuses"
                },
                "#text": ".,"
              },
              {
                "-id": "0-64-88",
                "#text": "On Saturday night, the Clinton campaign organized a house party at Mrs. Anderson's home in the Beaverdale neighborhood, "
              },
              {
                "-id": "0-64-89",
                "#text": "which some Democrats nicknamed \""
              },
              {
                "-id": "0-64-90",
                "#text": "Obamadale\"?"
              },
              {
                "-id": "0-64-91",
                "span": {
                  "-class": "positive",
                  "#text": "during the 2008 caucuses because of the strong support there for Mr. Obama"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-92",
                "span": {
                  "-class": "negative",
                  "#text": "Several attendees said they were attracted to Mrs. Clinton's doggedness after having been disappointed by Mr. Obama's occasional lack of gumption"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-64-93",
                "#text": "I think Hillary knows how to fight, "
              },
              {
                "-id": "0-64-94",
                "#text": "and she certainly saw how to deal with Republicans when Bill Clinton was in the White House,\"?"
              },
              {
                "-id": "0-64-95",
                "#text": "said Jay Peterson, a librarian for the State of Iowa who backed Mr. Obama in the 2008 caucuses.,"
              },
              {
                "-id": "0-64-96",
                "span": {
                  "-class": "negative",
                  "#text": "A spokesman for the White House declined"
                },
                "#text": " to comment, though Mr. Obama's supporters point out that he has been criticized for being too combative, "
              },
              {
                "-id": "0-64-97",
                "#text": "especially on issues like immigration and health care.,"
              },
              {
                "-id": "0-64-98",
                "#text": "The Clinton campaign decided early on not to distance itself from the Obama administration; "
              },
              {
                "-id": "0-64-99",
                "span": {
                  "-class": "positive",
                  "#text": "instead, Mrs. Clinton often praises the economic progress Mr. Obama has made"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-100",
                "#text": "On Saturday, she said Mr. Obama had brought the country \""
              },
              {
                "-id": "0-64-101",
                "span": {
                  "-class": "negative",
                  "#text": "back from the brink of depression,\"?but\"we face new challenges in our economy and our democracy"
                },
                "#text": ".\""
              },
              {
                "-id": "0-64-102",
                "span": {
                  "-class": "negative",
                  "#text": "At the same time, polls show a growing frustration"
                },
                "#text": " not just with Mr. Obama but also with Congress and Washington generally, "
              },
              {
                "-id": "0-64-103",
                "span": {
                  "-class": "positive",
                  "#text": "indicating that Mrs. Clinton must convince voters she can bring something fresh to the White House"
                },
                "#text": ".,"
              },
              {
                "-id": "0-64-104",
                "#text": "Just 32 percent of Americans said they would prefer a presidential candidate whose political experience was mostly in the government in Washington,,\""
              },
              {
                "-id": "0-64-105",
                "#text": "The issue isn't that Washington isn't fighting. "
              },
              {
                "-id": "0-64-106",
                "#text": "The issue is that people feel like there's no one in Washington fighting for them,\"?"
              },
              {
                "-id": "0-64-107",
                "#text": "said Guy Cecil, a co-chairman of Priorities USA Action, the pro-Clinton \",.\""
              },
              {
                "-id": "0-64-108",
                "#text": "Mrs. "
              },
              {
                "-id": "0-64-109",
                "#text": "Clinton's message adds to the heat felt by Mr. Obama at a time "
              },
              {
                "-id": "0-64-110",
                "#text": "when he is struggling to save his trade bill "
              },
              {
                "-id": "0-64-111",
                "span": {
                  "-class": "positive",
                  "#text": "and avoid being incapacitated by his lame-duck status"
                },
                "#text": ".,"
              },
              {
                "-id": "0-64-112",
                "span": {
                  "-class": "positive",
                  "#text": "Bob Meddaugh, an activist who supported Vice President Joseph R"
                },
                "#text": ". "
              },
              {
                "-id": "0-64-113",
                "#text": [
                  "Biden Jr. in the 2008 caucuses and then ",
                  ", ",
                  " that Mrs. Clinton can be more successful in building coalitions.,\""
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "embraced Mr. Obama"
                  },
                  {
                    "-class": "positive",
                    "#text": "is hopeful"
                  }
                ]
              },
              {
                "-id": "0-64-114",
                "#text": [
                  "I think she may be a little more direct and ",
                  ", compared to the way the president has been more standoffish with Republicans and even some Democrats,\"?"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "confrontational with individual people"
                }
              },
              {
                "-id": "0-64-115",
                "#text": "he said."
              }
            ]
          },
          {
            "a": {
              "-id": "0-65-0",
              "#text": "1434351600507"
            }
          },
          {
            "a": [
              {
                "-id": "0-66-0",
                "#text": [
                  ", ",
                  " and at times policy laden, delivered on Saturday a ",
                  " economic policies and a ",
                  " and ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "in a speech that was at times sweeping"
                  },
                  {
                    "-class": "negative",
                    "#text": "pointed repudiation of Republican"
                  },
                  {
                    "-class": "positive",
                    "#text": "populist promise to reverse the gaping gulf between the rich"
                  },
                  {
                    "-class": "negative",
                    "#text": "poor at her biggest campaign event to date"
                  }
                ]
              },
              {
                "-id": "0-66-1",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Under sunny skies and surrounded by flag-waving supporters"
                  },
                  {
                    "-class": "positive",
                    "#text": "run an inclusive campaign"
                  }
                ],
                "#text": " on Roosevelt Island in New York, Mrs. Clinton pledged to "
              },
              {
                "-id": "0-66-2",
                "span": {
                  "-class": "positive",
                  "#text": "and to create a more inclusive economy"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-3",
                "#text": "saying that even the new voices in the Republican Party continued to push \""
              },
              {
                "-id": "0-66-4",
                "span": {
                  "-class": "negative",
                  "#text": "the top-down economic policies that failed us before"
                },
                "#text": ".\"\""
              },
              {
                "-id": "0-66-5",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "These Republicans trip over themselves promising lower taxes for the wealthy and fewer rules"
                  },
                  {
                    "-class": "negative",
                    "#text": "without any regard on how that will make income inequality worse"
                  }
                ],
                "#text": [
                  " for the biggest corporations ",
                  ",\"?"
                ]
              },
              {
                "-id": "0-66-6",
                "#text": "she said before a crowd estimated at 5,500, according to the campaign.,\""
              },
              {
                "-id": "0-66-7",
                "#text": "I'm not running for some Americans, but for all Americans,\"?Mrs. "
              },
              {
                "-id": "0-66-8",
                "#text": "Clinton said. \""
              },
              {
                "-id": "0-66-9",
                "#text": "I'm running for all Americans.\""
              },
              {
                "-id": "0-66-10",
                "#text": "Offering her case for the presidency, she rested heavily on her biography. "
              },
              {
                "-id": "0-66-11",
                "#text": "Her candidacy, she said, "
              },
              {
                "-id": "0-66-12",
                "#text": "was in the name of \""
              },
              {
                "-id": "0-66-13",
                "#text": "everyone who has ever been knocked down but refused to be knocked out.\""
              },
              {
                "-id": "0-66-14",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-15",
                "#text": "Clinton portrayed herself as a fighter, sounding a theme her campaign had emphasized in recent days. \""
              },
              {
                "-id": "0-66-16",
                "#text": "I've been called many things by many people, "
              },
              {
                "-id": "0-66-17",
                "span": {
                  "-class": "negative",
                  "#text": "quitter is not one of them"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-66-18",
                "#text": "she said.,"
              },
              {
                "-id": "0-66-19",
                "#text": "Standing on a platform set in the middle of a grassy memorial to Franklin D. "
              },
              {
                "-id": "0-66-20",
                "#text": "Roosevelt on the East River island named after him, Mrs. Clinton invoked his legacy. "
              },
              {
                "-id": "0-66-21",
                "span": {
                  "-class": "negative",
                  "#text": "She also praised President Obama and her husband, former President Bill Clinton, but declared that \"we face new challenges"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-66-22",
                "span": {
                  "-class": "negative",
                  "#text": "in the aftermath of the economic crisis"
                },
                "#text": ".,"
              },
              {
                "-id": "0-66-23",
                "#text": "While some Republican detractors have tried to make an issue of Mrs. Clinton's age ("
              },
              {
                "-id": "0-66-24",
                "#text": "if she won she would be 69 "
              },
              {
                "-id": "0-66-25",
                "#text": "when she took office in January 2017), "
              },
              {
                "-id": "0-66-26",
                "#text": "she sought to embrace it and to rebut the notion that she cannot stand for change or modernity. "
              },
              {
                "-id": "0-66-27",
                "#text": "Offering her campaign contact information, she spoke about the lives of gay people, saying Republicans \""
              },
              {
                "-id": "0-66-28",
                "span": {
                  "-class": "positive",
                  "#text": "turn their backs on gay people who love each other"
                },
                "#text": ".\""
              },
              {
                "-id": "0-66-29",
                "#text": "In one of the biggest applause lines, she said: \""
              },
              {
                "-id": "0-66-30",
                "#text": "I may not be the youngest candidate in this race, "
              },
              {
                "-id": "0-66-31",
                "#text": "but I will be the youngest woman president in the history of the United States.\""
              },
              {
                "-id": "0-66-32",
                "#text": "Underscoring the point with a riff on an old Beatles song, Mrs. Clinton said: \""
              },
              {
                "-id": "0-66-33",
                "#text": "There may be some new voices in the presidential Republican choir. "
              },
              {
                "-id": "0-66-34",
                "#text": "But they're all singing the same old song.\"\""
              },
              {
                "-id": "0-66-35",
                "#text": "It's a song called \""
              },
              {
                "-id": "0-66-36",
                "#text": "Yesterday,'\"she continued. \""
              },
              {
                "-id": "0-66-37",
                "#text": "They believe in yesterday.\""
              },
              {
                "-id": "0-66-38",
                "#text": "Allison Moore, a spokeswoman for the Republican National Committee, called the speech \""
              },
              {
                "-id": "0-66-39",
                "span": {
                  "-class": "negative",
                  "#text": "chock-full of hypocritical attacks, partisan rhetoric and ideas from the past that led to a sluggish economy"
                },
                "#text": ".\""
              },
              {
                "-id": "0-66-40",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-41",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton specified policies she would push for, including universal prekindergarten, paid family leave, equal pay for women"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-42",
                "#text": "college affordability and incentives for companies that provide profit-sharing to employees. "
              },
              {
                "-id": "0-66-43",
                "#text": "She also spoke of rewriting the tax code \""
              },
              {
                "-id": "0-66-44",
                "span": {
                  "-class": "negative",
                  "#text": "so it rewards hard work at home"
                },
                "#text": "\"?"
              },
              {
                "-id": "0-66-45",
                "#text": "rather than corporations \""
              },
              {
                "-id": "0-66-46",
                "span": {
                  "-class": "positive",
                  "#text": "stashing profits overseas"
                },
                "#text": ".\"?"
              },
              {
                "-id": "0-66-47",
                "#text": "She did not detail "
              },
              {
                "-id": "0-66-48",
                "#text": "how she would achieve those policies or address their costs.,"
              },
              {
                "-id": "0-66-49",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-50",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton spoke to the criticism that her wealth makes her out of touch with middle-class Americans"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-51",
                "#text": "saying her candidacy is for \""
              },
              {
                "-id": "0-66-52",
                "#text": "factory workers and food servers who stand on their feet all day, for the nurses who work the night shift, "
              },
              {
                "-id": "0-66-53",
                "#text": "for the truckers who drive for hours.\""
              },
              {
                "-id": "0-66-54",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Uncomfortable with the fiery"
                  },
                  {
                    "-class": "negative",
                    "#text": "Mrs. Clinton offered some stark statistics to address the concerns"
                  },
                  {
                    "-class": "negative",
                    "#text": "Democratic Party's restless left"
                  }
                ],
                "#text": [
                  " rhetoric of Senator Elizabeth Warren, the Massachusetts Democrat, ",
                  " of the ",
                  ". \""
                ]
              },
              {
                "-id": "0-66-55",
                "#text": "The top 25 hedge fund managers make more than all of America's kindergarten teachers combined, "
              },
              {
                "-id": "0-66-56",
                "#text": "often paying a lower tax rate,\"?she said.,"
              },
              {
                "-id": "0-66-57",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-58",
                "#text": "Clinton said many Americans must be asking, \""
              },
              {
                "-id": "0-66-59",
                "#text": "When does ,"
              },
              {
                "-id": "0-66-60",
                "#text": "family get ahead?\"?"
              },
              {
                "-id": "0-66-61",
                "#text": "She added: \""
              },
              {
                "-id": "0-66-62",
                "#text": "When? "
              },
              {
                "-id": "0-66-63",
                "#text": "I say now.\""
              },
              {
                "-id": "0-66-64",
                "span": {
                  "-class": "negative",
                  "#text": "In a campaign in which Republicans have emphasized the growing threat of Islamic terrorism and an unstable Middle East"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-65",
                "#text": "Mrs. Clinton hardly mentioned foreign policy. "
              },
              {
                "-id": "0-66-66",
                "#text": "She did speak of her experience as a senator from New York after the Sept. "
              },
              {
                "-id": "0-66-67",
                "span": {
                  "-class": "negative",
                  "#text": "11, 2001, attacks"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-66-68",
                "#text": [
                  "As your president, I'll do whatever it takes to keep Americans ",
                  ",\"?"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "safe"
                }
              },
              {
                "-id": "0-66-69",
                "#text": "she said, weaving the skyline and a view of the newly built , into her remarks.,"
              },
              {
                "-id": "0-66-70",
                "#text": "For as much as the content of the speech mattered, the theater of it was equally important. "
              },
              {
                "-id": "0-66-71",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "For a campaign criticized for lacking passion"
                  },
                  {
                    "-class": "positive",
                    "#text": "excitement"
                  }
                ],
                "#text": [
                  ", the event gave Mrs. Clinton the ability to create a camera-ready tableau of ",
                  ".,"
                ]
              },
              {
                "-id": "0-66-72",
                "span": {
                  "-class": "negative",
                  "#text": "The Brooklyn Express Drumline revved up the crowd assembled on a narrow stretch at the southern tip of the island"
                },
                "#text": ". "
              },
              {
                "-id": "0-66-73",
                "span": {
                  "-class": "negative",
                  "#text": "And Marlon Marshall, the campaign's director of political engagement, rattled off statistics about the number of volunteers who have signed up and house parties held in the early nominating states"
                },
                "#text": ". "
              },
              {
                "-id": "0-66-74",
                "span": {
                  "-class": "negative",
                  "#text": "A section with giant screens set up for an overflow crowd stood nearly empty"
                },
                "#text": ".,"
              },
              {
                "-id": "0-66-75",
                "span": {
                  "-class": "positive",
                  "#text": "But a crowd of supporters and volunteers from the staunchly Democratic New York area"
                },
                "#text": " does not exactly represent the electorate writ large. "
              },
              {
                "-id": "0-66-76",
                "#text": "The real test for Mrs. Clinton and how the speech was perceived will be in Iowa, "
              },
              {
                "-id": "0-66-77",
                "#text": "where she was to travel on Saturday evening for several events. "
              },
              {
                "-id": "0-66-78",
                "span": {
                  "-class": "negative",
                  "#text": "Iowa, the first nominating state, shunned her the last time she sought the presidency, in 2008"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-66-79",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "I was disappointed"
                  },
                  {
                    "-class": "positive",
                    "#text": "didn't challenge Obama"
                  }
                ],
                "#text": [
                  " she ",
                  " four years ago,\"?said Dominique Pettinato, a 24-year-old parole officer who lives in Brooklyn.,"
                ]
              },
              {
                "-id": "0-66-80",
                "span": {
                  "-class": "negative",
                  "#text": "For some members of the skeptical liberal wing of the Democratic Party still concerned that Mrs. Clinton will embrace her husband's centrist approach"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-81",
                "span": {
                  "-class": "positive",
                  "#text": "the speech went only so far in convincing them otherwise"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-66-82",
                "#text": "This was mostly a typical Democratic speech \"?"
              },
              {
                "-id": "0-66-83",
                "span": {
                  "-class": "positive",
                  "#text": "much better than the direction Republicans offer America,\"?said Adam Green, a co-founder of Progressive Change Campaign Committee"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-84",
                "span": {
                  "-class": "positive",
                  "#text": "a liberal advocacy group"
                },
                "#text": ". "
              },
              {
                "-id": "0-66-85",
                "span": {
                  "-class": "negative",
                  "#text": "But he said the speech had not offered"
                },
                "#text": " \""
              },
              {
                "-id": "0-66-86",
                "#text": [
                  "the ",
                  " economic vision that most Americans want and need.\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "bold"
                }
              },
              {
                "-id": "0-66-87",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-88",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton did not broach one issue that liberals are increasingly frustrated by"
                },
                "#text": ": "
              },
              {
                "-id": "0-66-89",
                "#text": "trade. "
              },
              {
                "-id": "0-66-90",
                "#text": "On Thursday, Senator Bernie Sanders, a socialist from Vermont who is also seeking the Democratic nomination, "
              },
              {
                "-id": "0-66-91",
                "span": {
                  "-class": "negative",
                  "#text": "pointedly criticized Mrs. Clinton for not taking a position on a controversial trade bill Mr. Obama is pushing"
                },
                "#text": ", "
              },
              {
                "-id": "0-66-92",
                "span": {
                  "-class": "negative",
                  "#text": "as well as other contentious issues like the proposed"
                },
                "#text": " , XL oil pipeline and the renewal of the ,. \""
              },
              {
                "-id": "0-66-93",
                "#text": "What is the secretary's point of view on that?\"?Mr. "
              },
              {
                "-id": "0-66-94",
                "#text": "Sanders asked of the act, which he voted against.,"
              },
              {
                "-id": "0-66-95",
                "#text": "Mrs. "
              },
              {
                "-id": "0-66-96",
                "#text": "Clinton had hardly stopped speaking Saturday when Bill Hyers, a senior strategist for Martin O'Malley, "
              },
              {
                "-id": "0-66-97",
                "span": {
                  "-class": "negative",
                  "#text": "the former governor of Maryland, who is also seeking the Democratic presidential nomination, criticized her as vague on trade and other issues"
                },
                "#text": ". "
              },
              {
                "-id": "0-66-98",
                "#text": "Mr. O'Malley, he said, \""
              },
              {
                "-id": "0-66-99",
                "span": {
                  "-class": "positive",
                  "#text": "has been fearless and specific in the progressive agenda we need"
                },
                "#text": ".\""
              },
              {
                "-id": "0-66-100",
                "#text": "If there is one demographic Mrs. Clinton's campaign is hoping to excite it is young women. "
              },
              {
                "-id": "0-66-101",
                "#text": "It is an obvious connection that her 2008 campaign played down as it tried to present the former first lady as a strong commander in chief.,"
              },
              {
                "-id": "0-66-102",
                "span": {
                  "-class": "positive",
                  "#text": "But on Saturday it was clear that Mrs. Clinton will make gender more central to her campaign this time"
                },
                "#text": ". "
              },
              {
                "-id": "0-66-103",
                "#text": "In her closing remarks, she called for a country \""
              },
              {
                "-id": "0-66-104",
                "#text": "where a father can tell his daughter yes, "
              },
              {
                "-id": "0-66-105",
                "#text": "you can be anything you want to be, even president of the United States.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-67-0",
              "#text": "1434178800488"
            }
          },
          {
            "a": [
              {
                "-id": "0-68-0",
                "span": {
                  "-class": "positive",
                  "#text": "A quick roll call before ,'s campaign rally on Roosevelt Island on Saturday"
                },
                "#text": ":,"
              },
              {
                "-id": "0-68-1",
                "#text": "Local congresswoman? "
              },
              {
                "-id": "0-68-2",
                "#text": "Check. "
              },
              {
                "-id": "0-68-3",
                "#text": "Assemblywoman? "
              },
              {
                "-id": "0-68-4",
                "#text": "Present. "
              },
              {
                "-id": "0-68-5",
                "#text": "Councilman? "
              },
              {
                "-id": "0-68-6",
                "span": {
                  "-class": "positive",
                  "#text": "Affirmative"
                },
                "#text": ".,"
              },
              {
                "-id": "0-68-7",
                "#text": "And Mr. Mayor?,\""
              },
              {
                "-id": "0-68-8",
                "#text": "No,\"?Mayor , said earlier this week. \""
              },
              {
                "-id": "0-68-9",
                "span": {
                  "-class": "negative",
                  "#text": "I'm waiting"
                },
                "#text": " to hear, "
              },
              {
                "-id": "0-68-10",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "as I said, her larger vision"
                  },
                  {
                    "-class": "negative",
                    "#text": "addressing income inequality"
                  }
                ],
                "#text": [
                  " for ",
                  ", "
                ]
              },
              {
                "-id": "0-68-11",
                "span": {
                  "-class": "positive",
                  "#text": "and I look forward to"
                },
                "#text": " that.\"For weeks, Mr. de Blasio's , non-endorsement of Mrs. Clinton, "
              },
              {
                "-id": "0-68-12",
                "#text": "his former boss, has positioned him on a political island of sorts among New York's Democratic establishment.,"
              },
              {
                "-id": "0-68-13",
                "span": {
                  "-class": "negative",
                  "#text": "On Saturday, the symbolism will be hard to miss"
                },
                "#text": ". "
              },
              {
                "-id": "0-68-14",
                "#text": "As several elected officials join the throngs , "
              },
              {
                "-id": "0-68-15",
                "span": {
                  "-class": "negative",
                  "#text": "to hear Mrs. Clinton deliver a major address on her vision for the country"
                },
                "#text": ", Mr. de Blasio will be in Brooklyn on city business.,"
              },
              {
                "-id": "0-68-16",
                "#text": "According to his office, he will attend a ceremony in the morning to rename a street for a police officer, "
              },
              {
                "-id": "0-68-17",
                "#text": "Wenjian Liu, who was , in the line of duty. "
              },
              {
                "-id": "0-68-18",
                "span": {
                  "-class": "positive",
                  "#text": "Later, he is expected to march in a gay pride parade in Brooklyn"
                },
                "#text": ".,"
              },
              {
                "-id": "0-68-19",
                "#text": "The mayor's chief spokeswoman, Karen Hinton, said on Friday that Mr. de Blasio was indeed invited to attend by the Clinton campaign. "
              },
              {
                "-id": "0-68-20",
                "#text": "The campaign did not respond to questions about outreach to New York politicians.,"
              },
              {
                "-id": "0-68-21",
                "#text": "Allies of the mayor have suggested that foregoing a campaign rally for a presidential candidate that one has not endorsed is rarely considered a surprise.,"
              },
              {
                "-id": "0-68-22",
                "#text": "At an unrelated news conference on Wednesday, Mr. de Blasio praised Mrs. Clinton's recent remarks on voting rights, "
              },
              {
                "-id": "0-68-23",
                "#text": [
                  "criminal justice and immigration, but appeared in little hurry to ",
                  ".,\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "bless her campaign outright"
                }
              },
              {
                "-id": "0-68-24",
                "#text": "It's June. "
              },
              {
                "-id": "0-68-25",
                "#text": "The election is next year. "
              },
              {
                "-id": "0-68-26",
                "span": {
                  "-class": "positive",
                  "#text": "There's plenty of time,\"?he said"
                },
                "#text": ", "
              },
              {
                "-id": "0-68-27",
                "#text": "adding, \""
              },
              {
                "-id": "0-68-28",
                "span": {
                  "-class": "positive",
                  "#text": "I think it's best to"
                },
                "#text": " hear the ideas "
              },
              {
                "-id": "0-68-29",
                "#text": "and then make a decision.\""
              },
              {
                "-id": "0-68-30",
                "#text": "Mr. "
              },
              {
                "-id": "0-68-31",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "de Blasio spoke effusively of one"
                  },
                  {
                    "-class": "negative",
                    "#text": "Mrs. Clinton's opponents for the Democratic nomination"
                  }
                ],
                "#text": [
                  " of ",
                  ", "
                ]
              },
              {
                "-id": "0-68-32",
                "#text": "Senator , of Vermont, when asked about him.,"
              },
              {
                "-id": "0-68-33",
                "span": {
                  "-class": "positive",
                  "#text": "Among other local elected officials, enthusiasm for Saturday's event on the island named for"
                },
                "#text": " , "
              },
              {
                "-id": "0-68-34",
                "#text": "was keenly felt. "
              },
              {
                "-id": "0-68-35",
                "#text": "Assemblywoman ,, whose district includes Roosevelt Island, "
              },
              {
                "-id": "0-68-36",
                "span": {
                  "-class": "positive",
                  "#text": "said she was grateful that Mrs. Clinton"
                },
                "#text": " \""
              },
              {
                "-id": "0-68-37",
                "#text": "has chosen the 76th Assembly District.\""
              },
              {
                "-id": "0-68-38",
                "span": {
                  "-class": "positive",
                  "#text": "Representative , professed a similar pride"
                },
                "#text": ". \""
              },
              {
                "-id": "0-68-39",
                "#text": "She's announcing in my district!\"?"
              },
              {
                "-id": "0-68-40",
                "#text": "she said, before a question on the matter had been posed.,"
              },
              {
                "-id": "0-68-41",
                "#text": "Spokesmen for Gov. , "
              },
              {
                "-id": "0-68-42",
                "span": {
                  "-class": "positive",
                  "#text": "and Senator ,, who have both announced their support for Mrs. Clinton"
                },
                "#text": ", "
              },
              {
                "-id": "0-68-43",
                "#text": "did not respond to questions about their Saturday plans.,"
              },
              {
                "-id": "0-68-44",
                "span": {
                  "-class": "negative",
                  "#text": "A spokesman for Senator ,, Glen Caplin, said the senator was unable to attend, but added that she would do"
                },
                "#text": " \""
              },
              {
                "-id": "0-68-45",
                "#text": "literally anything she can\"?"
              },
              {
                "-id": "0-68-46",
                "span": {
                  "-class": "positive",
                  "#text": "to ensure Mrs. Clinton's election"
                },
                "#text": "."
              }
            ]
          },
          {
            "a": {
              "-id": "0-69-0",
              "#text": "1434092400595"
            }
          },
          {
            "a": [
              {
                "-id": "0-70-0",
                "#text": "In \",\"?("
              },
              {
                "-id": "0-70-1",
                "span": {
                  "-class": "positive",
                  "#text": "editorial, June 5), you are right to applaud Hillary Rodham Clinton in making voting reform a top priority"
                },
                "#text": ". "
              },
              {
                "-id": "0-70-2",
                "#text": "However, I firmly believe that this issue is not about Republican versus Democrat. "
              },
              {
                "-id": "0-70-3",
                "#text": "I believe that all Americans want the same thing: "
              },
              {
                "-id": "0-70-4",
                "#text": "a fraud-free election in which as many citizens vote as possible. "
              },
              {
                "-id": "0-70-5",
                "span": {
                  "-class": "negative",
                  "#text": "It is a disgrace that turnout in America ranks 138, out of 172 democracies around the world"
                },
                "#text": ".,"
              },
              {
                "-id": "0-70-6",
                "#text": "It is common sense that if you want to fill voting booths: "
              },
              {
                "-id": "0-70-7",
                "span": {
                  "-class": "negative",
                  "#text": "1) you don't hold elections on a single working day"
                },
                "#text": " when many people with two jobs and single working parents can't vote; "
              },
              {
                "-id": "0-70-8",
                "#text": [
                  "and 2) you make it as ",
                  " as possible for all citizens to register, and today that means electronically.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "easy"
                }
              },
              {
                "-id": "0-70-9",
                "span": {
                  "-class": "negative",
                  "#text": "I won't accept the notion that any of the candidates, Democrat or Republican"
                },
                "#text": ", "
              },
              {
                "-id": "0-70-10",
                "#text": [
                  "who hold themselves out as ",
                  " of leading our nation think otherwise. "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "capable"
                }
              },
              {
                "-id": "0-70-11",
                "#text": "For example, Senator Rand Paul has publicly asked, \""
              },
              {
                "-id": "0-70-12",
                "#text": "Why don't we be the party that's for people voting, for voting rights?\"?"
              },
              {
                "-id": "0-70-13",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "and has introduced a bill to restore voting"
                  },
                  {
                    "-class": "negative",
                    "#text": "rights for nonviolent felons in federal elections"
                  }
                ],
                "#text": ".,"
              },
              {
                "-id": "0-70-14",
                "#text": "So I call upon all candidates for president to follow in the steps of Mrs. Clinton and Mr. Paul by speaking up on ways to increase voter turnout.,"
              },
              {
                "-id": "0-70-15",
                "#text": "ANDREW YOUNG,"
              },
              {
                "-id": "0-70-16",
                "#text": "Atlanta,As \",\"?"
              },
              {
                "-id": "0-70-17",
                "span": {
                  "-class": "positive",
                  "#text": "pointed out, Hillary Rodham Clinton's proposals are a welcome"
                },
                "#text": " riposte to the steady erosion of voting rights led by Republican legislatures. "
              },
              {
                "-id": "0-70-18",
                "span": {
                  "-class": "negative",
                  "#text": "However, expanding early voting fails to address the criticism that late-breaking events might affect a voter's decision"
                },
                "#text": " \"?"
              },
              {
                "-id": "0-70-19",
                "#text": "after he "
              },
              {
                "-id": "0-70-20",
                "#text": "or she had already cast a ballot.,"
              },
              {
                "-id": "0-70-21",
                "span": {
                  "-class": "positive",
                  "#text": "A more effective fix would be to move voting to the weekend, expanding it to three days"
                },
                "#text": ". "
              },
              {
                "-id": "0-70-22",
                "#text": "It would work like this: "
              },
              {
                "-id": "0-70-23",
                "#text": "Polling places across the entire country would open at 5 p.m. Eastern time on Friday, "
              },
              {
                "-id": "0-70-24",
                "#text": "and close at 6 p.m. on Sunday. "
              },
              {
                "-id": "0-70-25",
                "#text": "States could then set voting hours on each of the three days (minimum of 16 hours total) to suit local conditions.,"
              },
              {
                "-id": "0-70-26",
                "span": {
                  "-class": "positive",
                  "#text": "This framework would provide voting flexibility and not conflict with most voters' work and/or child care schedules"
                },
                "#text": ". "
              },
              {
                "-id": "0-70-27",
                "#text": [
                  "Furthermore, folks in the Western time zones ",
                  " that a presidential election is all but decided before they even get to vote.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "will no longer have to hear"
                }
              },
              {
                "-id": "0-70-28",
                "#text": "RICK BLUM,Chelmsford, Mass.,"
              },
              {
                "-id": "0-70-29",
                "#text": "Re \",\"?("
              },
              {
                "-id": "0-70-30",
                "#text": "front page, June 4):,"
              },
              {
                "-id": "0-70-31",
                "#text": [
                  "It's about time that Democrats have begun to ",
                  " on that most important of American rights, "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "fight back"
                }
              },
              {
                "-id": "0-70-32",
                "#text": "the right to vote. "
              },
              {
                "-id": "0-70-33",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "For too long"
                  },
                  {
                    "-class": "positive",
                    "#text": "progressives"
                  },
                  {
                    "-class": "negative",
                    "#text": "more difficult for people to vote"
                  }
                ],
                "#text": [
                  ", ",
                  " have sat on the sidelines as Republicans have enacted laws making it ",
                  ", "
                ]
              },
              {
                "-id": "0-70-34",
                "span": {
                  "-class": "negative",
                  "#text": "laws that disproportionally affect minorities and the working poor"
                },
                "#text": ".,"
              },
              {
                "-id": "0-70-35",
                "#text": "Our political leaders should be finding ways to encourage our citizens to vote rather than setting up roadblocks. "
              },
              {
                "-id": "0-70-36",
                "#text": [
                  "Too many eligible voters are unable to vote because of voter ID laws, reduced voting times and ",
                  ". "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "other restrictive rules"
                }
              },
              {
                "-id": "0-70-37",
                "span": {
                  "-class": "negative",
                  "#text": "We should be appalled at these blatant attempts to make voting more challenging, suppressing the voices of our fellow citizens"
                },
                "#text": ".,"
              },
              {
                "-id": "0-70-38",
                "span": {
                  "-class": "positive",
                  "#text": "Surveys may show that the majority of people do not have a problem with voter ID laws"
                },
                "#text": ", "
              },
              {
                "-id": "0-70-39",
                "#text": "but the diminution of someone's rights should not be decided by a survey.,"
              },
              {
                "-id": "0-70-40",
                "#text": "EDWIN ANDREWS,Malden, Mass."
              }
            ]
          },
          {
            "a": {
              "-id": "0-71-0",
              "#text": "1434006000746"
            }
          },
          {
            "a": [
              {
                "-id": "0-72-0",
                "#text": "Every serious presidential candidate has to answer a fundamental strategic question: "
              },
              {
                "-id": "0-72-1",
                "#text": "Do I think I can win by expanding my party's reach, "
              },
              {
                "-id": "0-72-2",
                "#text": "or do I think I can win by mobilizing my party's base?,"
              },
              {
                "-id": "0-72-3",
                "#text": "Two of the leading Republicans have staked out opposing sides on this issue. "
              },
              {
                "-id": "0-72-4",
                "#text": "Scott Walker is trying to mobilize existing conservative voters. "
              },
              {
                "-id": "0-72-5",
                "#text": "Jeb Bush is trying to expand his party's reach.,"
              },
              {
                "-id": "0-72-6",
                "span": {
                  "-class": "positive",
                  "#text": "The Democratic Party has no debate on this issue"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-7",
                "#text": "Hillary Clinton has apparently decided to run as the Democratic Scott Walker. "
              },
              {
                "-id": "0-72-8",
                "#text": "As The Times's Jonathan Martin and Maggie Haberman reported this week, Clinton strategists have decided that, even in the general election, "
              },
              {
                "-id": "0-72-9",
                "span": {
                  "-class": "positive",
                  "#text": "firing up certain Democratic supporters is easier than persuading moderates"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-10",
                "#text": [
                  "Clinton will adopt left-leaning policy positions carefully designed to ",
                  " \"?"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "energize the Obama coalition"
                }
              },
              {
                "-id": "0-72-11",
                "span": {
                  "-class": "positive",
                  "#text": "African-Americans, Latinos, single women and highly educated progressives"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-12",
                "span": {
                  "-class": "positive",
                  "#text": "This means dispensing with a broad persuasion campaign"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-13",
                "#text": "As the Democratic strategist David Plouffe told Martin and Haberman, \""
              },
              {
                "-id": "0-72-14",
                "#text": "If you run a campaign trying to appeal to 60 to 70 percent of the electorate, "
              },
              {
                "-id": "0-72-15",
                "span": {
                  "-class": "negative",
                  "#text": "you're not going to run a very compelling campaign for the voters you need"
                },
                "#text": ".\""
              },
              {
                "-id": "0-72-16",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "The Clinton advisers are smart"
                  },
                  {
                    "-class": "positive",
                    "#text": "many of them helped President Obama win"
                  },
                  {
                    "-class": "negative",
                    "#text": "last war"
                  }
                ],
                "#text": [
                  ", and ",
                  " the ",
                  ", "
                ]
              },
              {
                "-id": "0-72-17",
                "span": {
                  "-class": "negative",
                  "#text": "but this sort of a campaign is a mistake"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-18",
                "span": {
                  "-class": "negative",
                  "#text": "This strategy is bad, first, for the country"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-19",
                "span": {
                  "-class": "negative",
                  "#text": "America has always had tough partisan politics"
                },
                "#text": ", but for most of its history, the system worked "
              },
              {
                "-id": "0-72-20",
                "span": {
                  "-class": "negative",
                  "#text": "because it had leaders who could reframe debates, reorganize coalitions, build center-out alliances and reach compromises"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-21",
                "span": {
                  "-class": "negative",
                  "#text": "Politics is broken today because those sorts of leaders have been replaced by highly polarizing"
                },
                "#text": ", "
              },
              {
                "-id": "0-72-22",
                "#text": [
                  "base-mobilizing politicians who hew to party orthodoxy, ",
                  " as ",
                  " and ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "ignore the 38 percent of voters who identify"
                  },
                  {
                    "-class": "positive",
                    "#text": "moderates"
                  },
                  {
                    "-class": "negative",
                    "#text": "exacerbate partisanship and gridlock"
                  }
                ]
              },
              {
                "-id": "0-72-23",
                "#text": "If Clinton decides to be just another unimaginative base-mobilizing politician, "
              },
              {
                "-id": "0-72-24",
                "span": {
                  "-class": "negative",
                  "#text": "she will make our broken politics even worse"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-25",
                "span": {
                  "-class": "negative",
                  "#text": "Second, this base mobilization strategy is a legislative disaster"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-26",
                "#text": "If the next president hopes to pass any actual laws, he "
              },
              {
                "-id": "0-72-27",
                "#text": "or she will have to create a bipartisan governing majority. "
              },
              {
                "-id": "0-72-28",
                "span": {
                  "-class": "positive",
                  "#text": "That means building a center-out coalition, winning 60 reliable supporters in the Senate and some sort of majority in the House"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-29",
                "#text": "If Clinton runs on an orthodox left-leaning, paint-by-numbers strategy, "
              },
              {
                "-id": "0-72-30",
                "span": {
                  "-class": "negative",
                  "#text": "she'll never be able to do this"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-31",
                "#text": "She'll live in the White House again, "
              },
              {
                "-id": "0-72-32",
                "span": {
                  "-class": "negative",
                  "#text": "but she won't be able to do much once she lives there"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-33",
                "span": {
                  "-class": "negative",
                  "#text": "Third, the mobilization strategy corrodes every candidate's leadership image"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-34",
                "span": {
                  "-class": "positive",
                  "#text": "Voters tend to like politicians who lead from a place of conviction"
                },
                "#text": ", "
              },
              {
                "-id": "0-72-35",
                "#text": "who care more about a cause than winning a demographic. "
              },
              {
                "-id": "0-72-36",
                "#text": "If Clinton seems driven by demographics and microtargeting, "
              },
              {
                "-id": "0-72-37",
                "span": {
                  "-class": "positive",
                  "#text": "she will underline the image some have that she is overly calculating and shrewd"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-38",
                "span": {
                  "-class": "negative",
                  "#text": "Finally, the base mobilizing strategy isn't even very good politics"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-39",
                "span": {
                  "-class": "positive",
                  "#text": "It's worth noting, to start with"
                },
                "#text": ", "
              },
              {
                "-id": "0-72-40",
                "span": {
                  "-class": "negative",
                  "#text": "that no recent successful first-term presidential campaign has used this approach"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-41",
                "span": {
                  "-class": "positive",
                  "#text": "In 1992, Bill Clinton firmly grabbed the center"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-42",
                "#text": "In 2000, George Bush ran as a uniter, not a divider. "
              },
              {
                "-id": "0-72-43",
                "span": {
                  "-class": "negative",
                  "#text": "In 2008, Barack Obama ran as a One Nation candidate who vowed to transcend partisan divides"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-44",
                "#text": "The Clinton mobilization strategy is based on the idea "
              },
              {
                "-id": "0-72-45",
                "span": {
                  "-class": "positive",
                  "#text": "that she can generate Obama-level excitement among African-American and young voters"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-46",
                "#text": "But as Philip Klein documented in The Washington Examiner, Obama was in a league of his own when it came to generating turnout and support from those groups. "
              },
              {
                "-id": "0-72-47",
                "#text": "If Clinton returns to the John Kerry/Al Gore level of African-American and youth support, "
              },
              {
                "-id": "0-72-48",
                "#text": "or if Jeb Bush or Marco Rubio can make inroads into the Hispanic vote, then the whole strategy is in peril.,"
              },
              {
                "-id": "0-72-49",
                "span": {
                  "-class": "positive",
                  "#text": "The mobilization strategy over-reads the progressive shift in the electorate"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-50",
                "#text": "It's true that voters have drifted left on social issues. "
              },
              {
                "-id": "0-72-51",
                "span": {
                  "-class": "positive",
                  "#text": "But they have not drifted left on economic and fiscal issues, as the continued unpopularity of Obamacare makes clear"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-52",
                "#text": "If Clinton comes across as a stereotypical big-spending, big-government Democrat, "
              },
              {
                "-id": "0-72-53",
                "span": {
                  "-class": "negative",
                  "#text": "she will pay a huge cost in the Upper Midwest and the Sun Belt"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-54",
                "span": {
                  "-class": "negative",
                  "#text": "Furthermore, this strategy vastly exaggerates the supposed death of the swing voter"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-55",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The mobilizers argue"
                  },
                  {
                    "-class": "negative",
                    "#text": "foolish to"
                  }
                ],
                "#text": [
                  " that it's ",
                  " go after persuadable voters because in this polarized country there are none left. "
                ]
              },
              {
                "-id": "0-72-56",
                "#text": "It's true there are fewer persuadables, but according to the Pew Research Center, 24 percent of voters have a roughly equal number of conservative and liberal positions, "
              },
              {
                "-id": "0-72-57",
                "span": {
                  "-class": "positive",
                  "#text": "and according to a range of academic studies, about 23 percent of the electorate can be swayed by a compelling campaign"
                },
                "#text": ".,"
              },
              {
                "-id": "0-72-58",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Today's political consultants have a lot of great tools to turn"
                  },
                  {
                    "-class": "positive",
                    "#text": "reliable voters"
                  }
                ],
                "#text": [
                  " out ",
                  ". "
                ]
              },
              {
                "-id": "0-72-59",
                "span": {
                  "-class": "positive",
                  "#text": "They're capable of creating amazing power points"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-60",
                "span": {
                  "-class": "negative",
                  "#text": "But as everybody from Ed Miliband to Mark Udall can tell you, this approach has not succeeded at the ballot box"
                },
                "#text": ". "
              },
              {
                "-id": "0-72-61",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Voters want better politics"
                  },
                  {
                    "-class": "negative",
                    "#text": "not a continuation of the same old techniques"
                  }
                ],
                "#text": [
                  ", ",
                  ". "
                ]
              },
              {
                "-id": "0-72-62",
                "#text": "By adopting base mobilization, Clinton seems to have made the first big decision of her presidential campaign. "
              },
              {
                "-id": "0-72-63",
                "span": {
                  "-class": "negative",
                  "#text": "It's the wrong one"
                },
                "#text": ".\""
              }
            ]
          },
          {
            "a": {
              "-id": "0-73-0",
              "#text": "1433833200436"
            }
          },
          {
            "a": [
              {
                "-id": "0-74-0",
                "#text": "Dorothy Howell was 8 years old when her parents sent her away. "
              },
              {
                "-id": "0-74-1",
                "#text": "It was 1927. "
              },
              {
                "-id": "0-74-2",
                "#text": "Her mother and father, who fought violently in the Chicago boardinghouse where the family lived, "
              },
              {
                "-id": "0-74-3",
                "#text": "divorced. "
              },
              {
                "-id": "0-74-4",
                "#text": "Neither was willing to take care of Dorothy or her little sister.,"
              },
              {
                "-id": "0-74-5",
                "#text": "So they put the girls on a train to California to live with their grandparents. "
              },
              {
                "-id": "0-74-6",
                "#text": "It did not go well. "
              },
              {
                "-id": "0-74-7",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Her grandmother favored black Victorian dresses"
                  },
                  {
                    "-class": "negative",
                    "#text": "punished the girls for inexplicable infractions, like playing in the yard"
                  }
                ],
                "#text": [
                  " and ",
                  ". ("
                ]
              },
              {
                "-id": "0-74-8",
                "span": {
                  "-class": "negative",
                  "#text": "Dorothy was not allowed to leave her room for a year"
                },
                "#text": ", other than for school, "
              },
              {
                "-id": "0-74-9",
                "#text": "after she went trick-or-treating one Halloween.),"
              },
              {
                "-id": "0-74-10",
                "span": {
                  "-class": "negative",
                  "#text": "Unable to bear it"
                },
                "#text": ", Dorothy left her grandparents' home at 14, and became a housekeeper for $3 a week, "
              },
              {
                "-id": "0-74-11",
                "#text": "always hoping to return to Chicago and reconnect with her mother. "
              },
              {
                "-id": "0-74-12",
                "#text": "But "
              },
              {
                "-id": "0-74-13",
                "#text": "when she finally did, a few years later, her mother spurned her again.,"
              },
              {
                "-id": "0-74-14",
                "#text": [
                  "It took a long time for , to ",
                  " of ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "fully understand the story"
                  },
                  {
                    "-class": "negative",
                    "#text": "her mother's devastating childhood"
                  }
                ]
              },
              {
                "-id": "0-74-15",
                "span": {
                  "-class": "negative",
                  "#text": "But now, four years after her death, Dorothy's story is forming the emotional foundation of her daughter's campaign for president"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-16",
                "#text": "and will be a central theme in her big kickoff speech on Saturday.,"
              },
              {
                "-id": "0-74-17",
                "#text": "Sharing that story is a shift for Mrs. Clinton, "
              },
              {
                "-id": "0-74-18",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "who in her 2008 campaign was fiercely protective of her mother's privacy"
                  },
                  {
                    "-class": "positive",
                    "#text": "eager to project an image of strength as she sought"
                  }
                ],
                "#text": [
                  " and ",
                  " to become the first female commander in chief. "
                ]
              },
              {
                "-id": "0-74-19",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "And in this campaign, her mother's story may help address"
                  },
                  {
                    "-class": "negative",
                    "#text": "Mrs. Clinton's central challenges"
                  }
                ],
                "#text": [
                  " one of ",
                  ": "
                ]
              },
              {
                "-id": "0-74-20",
                "span": {
                  "-class": "positive",
                  "#text": "convincing voters who feel"
                },
                "#text": " they already know everything about her that there is, indeed, more to know, "
              },
              {
                "-id": "0-74-21",
                "#text": "and that she is motivated by more than ambition.,\""
              },
              {
                "-id": "0-74-22",
                "#text": "I think for Hillary it's about learning, and her mother's story is just one of the big motivators of who she is,\"?"
              },
              {
                "-id": "0-74-23",
                "#text": "said Ann Lewis, a former senior adviser to Mrs. Clinton. \""
              },
              {
                "-id": "0-74-24",
                "#text": "She couldn't go back and do more for her mother, "
              },
              {
                "-id": "0-74-25",
                "span": {
                  "-class": "negative",
                  "#text": "but she could do more for other children who need protection or who need a better chance"
                },
                "#text": ".\""
              },
              {
                "-id": "0-74-26",
                "#text": "At the rally on Saturday on Roosevelt Island in New York City, the biggest public event so far of her 2016 campaign, "
              },
              {
                "-id": "0-74-27",
                "#text": "Mrs. Clinton will explain how her mother's experience shaped her life and inspired her to be an advocate for children and families at the Children's Defense Fund, "
              },
              {
                "-id": "0-74-28",
                "#text": "and as a first lady, senator and secretary of state.,"
              },
              {
                "-id": "0-74-29",
                "span": {
                  "-class": "positive",
                  "#text": "Given the closeness of their relationship"
                },
                "#text": ", it is striking that Mrs. Rodham has been such a limited part of Mrs. Clinton's biography.,"
              },
              {
                "-id": "0-74-30",
                "#text": "Dorothy Rodham and her husband, Hugh, moved to Little Rock, Ark., "
              },
              {
                "-id": "0-74-31",
                "#text": "in 1987 to help Mrs. Clinton take care of Chelsea "
              },
              {
                "-id": "0-74-32",
                "#text": "when she was working full time as a lawyer at Rose Law Firm. "
              },
              {
                "-id": "0-74-33",
                "#text": "After Mr. Rodham died in 1993, Mrs. Rodham spent more time at the White House, "
              },
              {
                "-id": "0-74-34",
                "#text": "accompanying the first lady and Chelsea on trips to India, China, Paris and Hawaii. "
              },
              {
                "-id": "0-74-35",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "She avoided the spotlight"
                  },
                  {
                    "-class": "positive",
                    "#text": "enjoyed her time in Washington, with movie nights, trips to the zoo and margaritas at the Cactus Cantina"
                  }
                ],
                "#text": [
                  " but ",
                  ".,"
                ]
              },
              {
                "-id": "0-74-36",
                "span": {
                  "-class": "positive",
                  "#text": "At the 1996 convention, Mrs. Rodham vouched for her son-in-law, saying in a brief video"
                },
                "#text": ", \""
              },
              {
                "-id": "0-74-37",
                "span": {
                  "-class": "positive",
                  "#text": "Everybody knows there is only one person in the world who can really tell the truth about a man"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-38",
                "#text": "and that's his mother-in-law.\""
              },
              {
                "-id": "0-74-39",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "But she also berated Mr. Clinton in the midst"
                  },
                  {
                    "-class": "negative",
                    "#text": "scandal"
                  },
                  {
                    "-class": "positive",
                    "#text": "encouraged Mrs. Clinton to"
                  }
                ],
                "#text": [
                  " of the Monica Lewinsky ",
                  " and ",
                  " forge her own political career, "
                ]
              },
              {
                "-id": "0-74-40",
                "#text": "said several people who worked in the White House at the time.,"
              },
              {
                "-id": "0-74-41",
                "#text": "After Mrs. Clinton was elected to the Senate from New York in 2000, Mrs. Rodham moved to Washington to be closer to her daughter. "
              },
              {
                "-id": "0-74-42",
                "#text": [
                  "At one point, mother and daughter shared a two-bedroom apartment while the ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "Clintons' townhouse in Northwest Washington was being renovated to make a larger"
                }
              },
              {
                "-id": "0-74-43",
                "#text": "private space to accommodate Mrs. Rodham. \""
              },
              {
                "-id": "0-74-44",
                "#text": "Hillary would get home after a long day in the Senate "
              },
              {
                "-id": "0-74-45",
                "#text": "and they'd just sit there and talk about their days,\"?said Patti Solis Doyle, "
              },
              {
                "-id": "0-74-46",
                "#text": "who worked for Mrs. Clinton from 1991 until 2008 and was campaign manager for much of her first presidential run.,"
              },
              {
                "-id": "0-74-47",
                "#text": "When she was secretary of state, Mrs. Clinton would return from a trip and plop down on the couch with her mom to hear about the latest twist in \""
              },
              {
                "-id": "0-74-48",
                "span": {
                  "-class": "positive",
                  "#text": "Dancing With the Stars,\"?her mother's favorite television show"
                },
                "#text": ".,"
              },
              {
                "-id": "0-74-49",
                "#text": "Mrs. "
              },
              {
                "-id": "0-74-50",
                "#text": "Clinton plans to spend time talking about her mother in a series of campaign events in early nominating states next week. "
              },
              {
                "-id": "0-74-51",
                "#text": "She wants to highlight not only her mother's background, but also the people, like teachers, "
              },
              {
                "-id": "0-74-52",
                "#text": "who were kind to Dorothy as a child as a way to pivot to Mrs. Clinton's philosophy that government and communities need to do their part to lift the middle class.,"
              },
              {
                "-id": "0-74-53",
                "span": {
                  "-class": "negative",
                  "#text": "In her 2014 book, \"Hard Choices,\"?Mrs"
                },
                "#text": ". "
              },
              {
                "-id": "0-74-54",
                "#text": "Clinton described how one teacher in elementary school, realizing that Dorothy was too poor to buy milk at lunchtime, "
              },
              {
                "-id": "0-74-55",
                "#text": "would buy two cartons herself every day "
              },
              {
                "-id": "0-74-56",
                "#text": "and then say, \""
              },
              {
                "-id": "0-74-57",
                "#text": "Dorothy, "
              },
              {
                "-id": "0-74-58",
                "#text": "I can't drink this other carton of milk. "
              },
              {
                "-id": "0-74-59",
                "#text": "Would you like it?' \"?"
              },
              {
                "-id": "0-74-60",
                "span": {
                  "-class": "positive",
                  "#text": "The woman who hired her as a teenage housekeeper took an interest in her, urging her to finish high school and giving her clothes"
                },
                "#text": ". "
              },
              {
                "-id": "0-74-61",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton has said these seemingly small gestures showed her mother the presence of goodness in the world"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-62",
                "span": {
                  "-class": "positive",
                  "#text": "and later made her a caring mother and grandmother"
                },
                "#text": ".,"
              },
              {
                "-id": "0-74-63",
                "#text": "Talking so extensively about Mrs. Rodham signals an evolution for Mrs. Clinton, from a deeply private, "
              },
              {
                "-id": "0-74-64",
                "span": {
                  "-class": "negative",
                  "#text": "reluctant politician to a 67-year-old candidate"
                },
                "#text": " who, according to her friends and aides, is running the campaign she wants to run. "
              },
              {
                "-id": "0-74-65",
                "span": {
                  "-class": "positive",
                  "#text": "Mrs. Clinton has spent weeks writing Saturday's speech, with the help of Dan Schwerin"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-66",
                "#text": "a longtime aide and director of speechwriting for the campaign.,"
              },
              {
                "-id": "0-74-67",
                "span": {
                  "-class": "positive",
                  "#text": "A sympathetic tale of her mother's struggles could help Mrs. Clinton convince a struggling middle class that she understands their problems"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-68",
                "#text": "aides said. , "
              },
              {
                "-id": "0-74-69",
                "#text": "showed that 47 percent of voters thought "
              },
              {
                "-id": "0-74-70",
                "#text": "that Mrs. Clinton \""
              },
              {
                "-id": "0-74-71",
                "#text": "cares about people like you,\"?down from 53 percent last July. "
              },
              {
                "-id": "0-74-72",
                "span": {
                  "-class": "negative",
                  "#text": "Mrs. Clinton's campaign aides have publicly shrugged off such polls as evidence that voters distrust Washington and politics in general"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-73",
                "#text": "but privately they are strategizing about how to reframe the conversation.,"
              },
              {
                "-id": "0-74-74",
                "#text": "The idea of incorporating Mrs. Rodham's story was floated during the 2008 Democratic primaries, "
              },
              {
                "-id": "0-74-75",
                "#text": "when Mrs. Clinton's advisers tested how Dorothy Rodham resonated with focus groups in Iowa; "
              },
              {
                "-id": "0-74-76",
                "span": {
                  "-class": "positive",
                  "#text": "the response was overwhelmingly positive"
                },
                "#text": ". "
              },
              {
                "-id": "0-74-77",
                "span": {
                  "-class": "negative",
                  "#text": "But Mrs. Clinton was uneasy"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-74-78",
                "span": {
                  "-class": "negative",
                  "#text": "It would be uncomfortable for any of us to talk about the struggles of any of our family members in such a public way"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-79",
                "#text": "especially when your family members are living,\"?Ms. "
              },
              {
                "-id": "0-74-80",
                "#text": "Doyle said. \""
              },
              {
                "-id": "0-74-81",
                "#text": "And Dorothy was a very private person.\""
              },
              {
                "-id": "0-74-82",
                "#text": "Mrs. "
              },
              {
                "-id": "0-74-83",
                "#text": "Clinton was also fiercely private. "
              },
              {
                "-id": "0-74-84",
                "#text": "When her husband first ran for president in 1992, Mrs. Clinton vehemently shielded Chelsea and her parents from the spotlight.,"
              },
              {
                "-id": "0-74-85",
                "span": {
                  "-class": "positive",
                  "#text": "She lost her temper when aides proposed a video of Chelsea"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-86",
                "span": {
                  "-class": "positive",
                  "#text": "to show that Bill Clinton was a good family man"
                },
                "#text": ", "
              },
              {
                "-id": "0-74-87",
                "#text": "to be broadcast at the 1992 Democratic National Convention.,. "
              },
              {
                "-id": "0-74-88",
                "span": {
                  "-class": "negative",
                  "#text": "Her daughter has said that one of her mother's heartbreaks"
                },
                "#text": " was that she was never able to attend college.,"
              },
              {
                "-id": "0-74-89",
                "span": {
                  "-class": "negative",
                  "#text": "After she graduated from high school in California, her mother lured her back to Chicago with a promise that her new husband would pay for tuition"
                },
                "#text": ".,"
              },
              {
                "-id": "0-74-90",
                "#text": "Dorothy dreamed of attending Northwestern University. "
              },
              {
                "-id": "0-74-91",
                "#text": "But it turned out that her mother had lied, and actually wanted her back in Chicago only as a housekeeper. "
              },
              {
                "-id": "0-74-92",
                "#text": "Eventually she found secretarial work.,\""
              },
              {
                "-id": "0-74-93",
                "span": {
                  "-class": "positive",
                  "#text": "I'd hoped so hard that my mother would love me that I had to take the chance and find out"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-74-94",
                "#text": "Mrs. "
              },
              {
                "-id": "0-74-95",
                "#text": "Rodham once said. \""
              },
              {
                "-id": "0-74-96",
                "#text": "When she didn't, "
              },
              {
                "-id": "0-74-97",
                "#text": "I had nowhere else to go.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-75-0",
              "#text": "1434092400919"
            }
          },
          {
            "a": [
              {
                "-id": "0-76-0",
                "#text": [
                  ", ",
                  ", "
                ],
                "span": {
                  "-class": "positive",
                  "#text": "at a major outdoor rally planned for Saturday, will directly address concerns that have emerged in the early weeks of her candidacy"
                }
              },
              {
                "-id": "0-76-1",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "telling voters they can trust her"
                  },
                  {
                    "-class": "negative",
                    "#text": "fight for the middle class and stressing that she cares about their problems"
                  }
                ],
                "#text": [
                  " to ",
                  ", "
                ]
              },
              {
                "-id": "0-76-2",
                "#text": "several people briefed on her plans say.,"
              },
              {
                "-id": "0-76-3",
                "span": {
                  "-class": "positive",
                  "#text": "The speech, at an event shaping up to be the most ambitious public gathering undertaken by the campaign"
                },
                "#text": " since Mrs. Clinton began her quest for the White House in April, "
              },
              {
                "-id": "0-76-4",
                "#text": "will be shaped by symbolism as she seeks to make the case for why she should be president.,"
              },
              {
                "-id": "0-76-5",
                "#text": "It will be held in New York City on an island named for ,, in the shadow of diverse middle-class neighborhoods, "
              },
              {
                "-id": "0-76-6",
                "#text": [
                  "as Mrs. Clinton tries to evoke the legacy of the New Deal and lay ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "out her vision for a federal government substantially engaged in lifting American families that feel economically"
                  },
                  {
                    "-class": "negative",
                    "#text": "insecure and increasingly left behind"
                  }
                ]
              },
              {
                "-id": "0-76-7",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "And she will channel her personal hero"
                  },
                  {
                    "-class": "positive",
                    "#text": "civil rights"
                  }
                ],
                "#text": [
                  ", ,, in emphasizing women's and ",
                  " and her assertion that the Republican Party is out of touch with an increasingly diverse electorate. "
                ]
              },
              {
                "-id": "0-76-8",
                "#text": "Her plans were described by people briefed on the speech who were not authorized to discuss it for attribution before the campaign officially released details.,"
              },
              {
                "-id": "0-76-9",
                "#text": "Mrs. "
              },
              {
                "-id": "0-76-10",
                "#text": [
                  "Clinton has yet to put forth a ",
                  " since announcing in a brief online video that she would run for the Democratic nomination.,\""
                ],
                "span": {
                  "-class": "positive",
                  "#text": "clear rationale for her candidacy"
                }
              },
              {
                "-id": "0-76-11",
                "#text": [
                  "She has to ",
                  " an ",
                  ", ",
                  ", a ",
                  " own ambitions,\"?"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "articulate"
                  },
                  {
                    "-class": "positive",
                    "#text": "authentic"
                  },
                  {
                    "-class": "positive",
                    "#text": "compelling rationale for her candidacy"
                  },
                  {
                    "-class": "positive",
                    "#text": "cause and vision that is larger than her"
                  }
                ]
              },
              {
                "-id": "0-76-12",
                "#text": "said David Axelrod, a former senior adviser to President Obama.,"
              },
              {
                "-id": "0-76-13",
                "span": {
                  "-class": "positive",
                  "#text": "But the large outdoor event, complete with a marching band"
                },
                "#text": " and a space for an overflow crowd to watch the speech on giant monitors, "
              },
              {
                "-id": "0-76-14",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "must also counteract some signs of decline"
                  },
                  {
                    "-class": "positive",
                    "#text": "Mrs. Clinton's personal appeal"
                  },
                  {
                    "-class": "negative",
                    "#text": "growing number of Americans do not trust her"
                  },
                  {
                    "-class": "positive",
                    "#text": "think she understands their lives"
                  }
                ],
                "#text": [
                  " in ",
                  ", with polls showing that a ",
                  " or ",
                  "., "
                ]
              },
              {
                "-id": "0-76-15",
                "#text": "showed that 57 percent of Americans thought "
              },
              {
                "-id": "0-76-16",
                "span": {
                  "-class": "positive",
                  "#text": "that Mrs. Clinton was not honest and trustworthy, up from 49 percent in March"
                },
                "#text": ", "
              },
              {
                "-id": "0-76-17",
                "#text": "and that 47 percent of voters thought "
              },
              {
                "-id": "0-76-18",
                "#text": "that Mrs. Clinton \""
              },
              {
                "-id": "0-76-19",
                "#text": "cares about people like you,\"?down from 53 percent last July. "
              },
              {
                "-id": "0-76-20",
                "span": {
                  "-class": "negative",
                  "#text": "Publicly, Mrs. Clinton's campaign aides have shrugged off such polls as evidence that voters distrust Washington and politics in general"
                },
                "#text": ". "
              },
              {
                "-id": "0-76-21",
                "#text": "Privately, they are strategizing about how to reframe the conversation.,"
              },
              {
                "-id": "0-76-22",
                "span": {
                  "-class": "negative",
                  "#text": "Rather than defend attacks on Mrs. Clinton's trustworthiness regarding her use of a private email address"
                },
                "#text": " at the State Department while she was secretary of state or foreign donations to her family's philanthropy, "
              },
              {
                "-id": "0-76-23",
                "span": {
                  "-class": "positive",
                  "#text": "the campaign will seek to turn the trust issue on its head"
                },
                "#text": ". \""
              },
              {
                "-id": "0-76-24",
                "span": {
                  "-class": "positive",
                  "#text": "But who do you trust more to fight for you"
                }
              },
              {
                "-id": "0-76-25",
                "#text": "when they get in the Oval Office?\"?"
              },
              {
                "-id": "0-76-26",
                "#text": "the Democratic strategist, Steve Elmendorf, said, repeating a line often used by Mrs. Clinton's senior advisers.,"
              },
              {
                "-id": "0-76-27",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "The campaign will try to turn another one of Mrs. Clinton's challenges"
                  },
                  {
                    "-class": "negative",
                    "#text": "incite"
                  },
                  {
                    "-class": "negative",
                    "#text": "divisive reactions from people"
                  }
                ],
                "#text": [
                  ", her tendency to ",
                  " strong and ",
                  ", "
                ]
              },
              {
                "-id": "0-76-28",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "to her advantage"
                  },
                  {
                    "-class": "negative",
                    "#text": "emphasizing her perceived toughness"
                  }
                ],
                "#text": [
                  ", ",
                  ". "
                ]
              },
              {
                "-id": "0-76-29",
                "#text": "Her campaign chairman, John D. "
              },
              {
                "-id": "0-76-30",
                "#text": "Podesta, often refers to Mrs. Clinton as a \""
              },
              {
                "-id": "0-76-31",
                "span": {
                  "-class": "positive",
                  "#text": "tenacious fighter"
                },
                "#text": ",\"?a theme that will echo throughout the speech and her campaign.,"
              },
              {
                "-id": "0-76-32",
                "#text": "Mrs. "
              },
              {
                "-id": "0-76-33",
                "#text": "Clinton's husband, former President ,, and daughter, Chelsea, will appear with her at the rally, "
              },
              {
                "-id": "0-76-34",
                "#text": "the first time the family will make a joint campaign appearance since Mrs. Clinton became a candidate.,"
              },
              {
                "-id": "0-76-35",
                "#text": "Saturday's event will signal the end of the first phase of Mrs. Clinton's campaign, "
              },
              {
                "-id": "0-76-36",
                "#text": "which mainly featured the former first lady holding round-table discussions with small groups of voters. "
              },
              {
                "-id": "0-76-37",
                "#text": "Mrs. Clinton has said that she has learned a lot from those meetings, "
              },
              {
                "-id": "0-76-38",
                "span": {
                  "-class": "negative",
                  "#text": "but they could come across as scripted and lacking in energy, especially as one rival"
                },
                "#text": ", "
              },
              {
                "-id": "0-76-39",
                "#text": "Senator Bernie Sanders of Vermont, has already drawn large crowds. "
              },
              {
                "-id": "0-76-40",
                "#text": "In the coming weeks, Mrs. Clinton will present more specific policies, speak to larger audiences and appear at town hall gatherings.,"
              },
              {
                "-id": "0-76-41",
                "span": {
                  "-class": "positive",
                  "#text": "The staging of Saturday's event has been meticulous"
                },
                "#text": ". "
              },
              {
                "-id": "0-76-42",
                "#text": "Huma Abedin, a longtime aide to Mrs. Clinton and vice chairwoman of the campaign, "
              },
              {
                "-id": "0-76-43",
                "span": {
                  "-class": "positive",
                  "#text": "and Greg Hale"
                },
                "#text": ", an Arkansas-based consultant who has handled events for the Clintons for years, "
              },
              {
                "-id": "0-76-44",
                "#text": "have taken a lead on planning. "
              },
              {
                "-id": "0-76-45",
                "#text": "Jim Margolis, the news media consultant behind both of Mr. Obama's ,, and Mandy Grunwald, "
              },
              {
                "-id": "0-76-46",
                "span": {
                  "-class": "positive",
                  "#text": "the longtime Clinton adviser who helped choreograph"
                },
                "#text": " the appearance of Mr. Clinton and his family at the 1992 , "
              },
              {
                "-id": "0-76-47",
                "#text": "in New York, have also been involved.,"
              },
              {
                "-id": "0-76-48",
                "#text": "For weeks, aides weighed various locations. "
              },
              {
                "-id": "0-76-49",
                "#text": "Rather than choosing Iowa or New Hampshire, they settled on New York, "
              },
              {
                "-id": "0-76-50",
                "#text": "where Mrs. Clinton served as a senator and where a friendly crowd of supporters was simple enough to summon.,"
              },
              {
                "-id": "0-76-51",
                "#text": "Looking at a map of New York, aides in the campaign's Downtown Brooklyn headquarters settled on Roosevelt Island, "
              },
              {
                "-id": "0-76-52",
                "#text": "the 2-mile-by-800-foot strip of land on the East River between Manhattan and Queens. "
              },
              {
                "-id": "0-76-53",
                "#text": "The event is open to the public, and the campaign has received several thousand requests to attend, "
              },
              {
                "-id": "0-76-54",
                "#text": "though the forecast of scattered thunderstorms could affect turnout.,"
              },
              {
                "-id": "0-76-55",
                "span": {
                  "-class": "negative",
                  "#text": "The campaign angered some island residents after a community day for children had to be rescheduled"
                },
                "#text": ". "
              },
              {
                "-id": "0-76-56",
                "span": {
                  "-class": "negative",
                  "#text": "Others have grumbled"
                },
                "#text": " that the national news media has, in terms of accessibility, compared Roosevelt Island to the nearby jail complex of Rikers Island. ("
              },
              {
                "-id": "0-76-57",
                "#text": "Roosevelt Island is reachable via public transportation as well as a tram that has in the past stalled, "
              },
              {
                "-id": "0-76-58",
                "span": {
                  "-class": "negative",
                  "#text": "leaving passengers suspended over the murky brown waters of the East River"
                },
                "#text": ".),"
              },
              {
                "-id": "0-76-59",
                "span": {
                  "-class": "negative",
                  "#text": "But what the location lacks in logistical ease it makes up for in imagery"
                },
                "#text": ".,"
              },
              {
                "-id": "0-76-60",
                "#text": "Mrs. "
              },
              {
                "-id": "0-76-61",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton will deliver the speech at Four Freedoms Park, a memorial with a grassy tree-lined mall"
                },
                "#text": ", "
              },
              {
                "-id": "0-76-62",
                "span": {
                  "-class": "positive",
                  "#text": "named after the four tenets that Roosevelt presented in his 1941 ,: freedom of speech and worship"
                },
                "#text": ", "
              },
              {
                "-id": "0-76-63",
                "#text": [
                  "and ",
                  " from want and ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "freedom"
                  },
                  {
                    "-class": "negative",
                    "#text": "fear"
                  }
                ]
              },
              {
                "-id": "0-76-64",
                "#text": "She has defined her campaign as taking on \""
              },
              {
                "-id": "0-76-65",
                "#text": [
                  "four ",
                  ",\"?including strengthening the economy, ",
                  ", getting unaccountable money out of politics and ",
                  " from ",
                  ".,"
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "fights"
                  },
                  {
                    "-class": "positive",
                    "#text": "helping families and communities"
                  },
                  {
                    "-class": "positive",
                    "#text": "protecting the country"
                  },
                  {
                    "-class": "negative",
                    "#text": "foreign threats"
                  }
                ]
              },
              {
                "-id": "0-76-66",
                "#text": "She is expected to evoke Roosevelt's policies to reiterate her belief that government is needed to help lift wages, "
              },
              {
                "-id": "0-76-67",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "create jobs"
                  },
                  {
                    "-class": "positive",
                    "#text": "more affordable, and rebuild antiquated infrastructure.,\"It's important for the cam"
                  }
                ],
                "#text": [
                  ", make college and health care ",
                  "pai"
                ]
              },
              {
                "-id": "0-76-68",
                "#text": [
                  "gn to demonstrate the sense of energy and excitement,\"?the Democratic p",
                  "off Garin said. But what is more important, h"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "ollster Ge"
                }
              },
              {
                "-id": "0-76-69",
                "#text": "e added, \"is laying out an a"
              },
              {
                "-id": "0-76-70",
                "#text": "genda that "
              },
              {
                "-id": "0-76-71",
                "#text": "makes people feel that , will be a fighter for them.\"Mrs. Clinton's message will r"
              },
              {
                "-id": "0-76-72",
                "#text": "eflec"
              },
              {
                "-id": "0-76-73",
                "span": {
                  "-class": "positive",
                  "#text": "t the ,'s leftward shift and stand in sharp contrast to the new covenant of personal responsibility that Mr. Clinton preached when he announced his candid"
                },
                "#text": "a"
              },
              {
                "-id": "0-76-74",
                "#text": "cy in 1991 at the Old Statehouse in Little Rock, Ark.,\"Government's responsibility i"
              },
              {
                "-id": "0-76-75",
                "span": {
                  "-class": "positive",
                  "#text": "s to create more opportunity,\"?Mr. Clinton said in that speech"
                },
                "#text": ". "
              },
              {
                "-id": "0-76-76",
                "#text": "\"The people's responsibility i"
              },
              {
                "-id": "0-76-77",
                "#text": "s to make the most of it.\"Dan Schwerin, a policy advise"
              },
              {
                "-id": "0-76-78",
                "span": {
                  "-class": "positive",
                  "#text": "r to Mrs. Clinton, is among the aides who have helped her shape her speech. Mrs. Clinton has already te"
                },
                "#text": "st"
              },
              {
                "-id": "0-76-79",
                "#text": "ed many of the main themes, including a populist critique of Wall Street excesses. She has called for equal pay "
              },
              {
                "-id": "0-76-80",
                "span": {
                  "-class": "positive",
                  "#text": "for women, an overhaul of the criminal justice system and voting rights policies that would make the process easier for young people and minorities.,Framing all of this with th"
                },
                "#text": "e "
              },
              {
                "-id": "0-76-81",
                "#text": "pomp and celebration of an official announcement speech can serve not just as an introduction for a candidate (or in Mrs. Clinton's case, a reintroduction), but also a"
              },
              {
                "-id": "0-76-82",
                "#text": [
                  "s a crucial chance to counteract ",
                  "Go"
                ],
                "span": {
                  "-class": "negative",
                  "#text": "negative opinions more than a year before a general election.,In 2000, Vice President Al "
                }
              },
              {
                "-id": "0-76-83",
                "span": {
                  "-class": "positive",
                  "#text": "re's campaign tried to reposition his wooden and cerebral demeanor as an advantage against the more affable George W. Bush.,\"At the end of the da"
                },
                "#text": "y,"
              },
              {
                "-id": "0-76-84",
                "#text": " with c"
              },
              {
                "-id": "0-76-85",
                "span": {
                  "-class": "positive",
                  "#text": "ritical decisions impacting your family, do you want someone you know is smart or not?\"?was how Chris Lehane, an a"
                },
                "#text": "dvi"
              },
              {
                "-id": "0-76-86",
                "#text": "ser to Mr. Gore, summed up the strategy. Or, in shorthand: \"You date B"
              },
              {
                "-id": "0-76-87",
                "#text": "ush and marry Gore."
              },
              {
                "-id": "0-76-88",
                "#text": "\"With Chelsea nearby, Mrs. Cli"
              },
              {
                "-id": "0-76-89",
                "#text": "nton will remind voters about her years as a working mother, her experience working for th"
              },
              {
                "-id": "0-76-90",
                "span": {
                  "-class": "positive",
                  "#text": "e Children's Defense Fund in the 1970s and her record of as an advocate for women and children as a first lady, senator and secretary of st"
                },
                "#text": "at"
              },
              {
                "-id": "0-76-91",
                "#text": "e. The campaign also has a biogr"
              },
              {
                "-id": "0-76-92",
                "#text": "aphical video in the works.,\"You can become a caricature o"
              },
              {
                "-id": "0-76-93",
                "#text": "f how the press has determined who you are,\"?said Thomas R. Nides, a friend and adviser w"
              },
              {
                "-id": "0-76-94",
                "#text": "ho worked for Mrs. Clinton at the State Department. \"But the good news about Hilla"
              },
              {
                "-id": "0-76-95",
                "span": {
                  "-class": "positive",
                  "#text": "ry Clinton is that she has a long history of who she is and what she s"
                },
                "#text": "tands for.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-77-0",
              "#text": "1434006000667"
            }
          },
          {
            "a": [
              {
                "-id": "0-78-0",
                "#text": "WASHINGTON \"? , "
              },
              {
                "-id": "0-78-1",
                "#text": [
                  "appears to be dispensing with the nationwide electoral strategy that won her husband two terms in the White House and brought white working-class voters and ",
                  " of what is now red-state America back to Democrats.,"
                ],
                "span": {
                  "-class": "positive",
                  "#text": "great stretches"
                }
              },
              {
                "-id": "0-78-2",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "Instead, she is poised to retrace"
                  },
                  {
                    "-class": "positive",
                    "#text": "far narrower path to the presidency"
                  }
                ],
                "#text": [
                  " ,'s ",
                  ": "
                ]
              },
              {
                "-id": "0-78-3",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "a campaign focused more on mobilizing supporters in the Great Lakes states"
                  },
                  {
                    "-class": "negative",
                    "#text": "persuading undecided voters"
                  }
                ],
                "#text": [
                  " and in parts of the West and South than on ",
                  ".,"
                ]
              },
              {
                "-id": "0-78-4",
                "#text": "Mrs. "
              },
              {
                "-id": "0-78-5",
                "#text": "Clinton's aides say it is the only way to win in an era of heightened polarization, "
              },
              {
                "-id": "0-78-6",
                "#text": "when a declining pool of voters is truly up for grabs. "
              },
              {
                "-id": "0-78-7",
                "#text": "Her liberal policy positions, they say, "
              },
              {
                "-id": "0-78-8",
                "#text": [
                  "will fire up Democrats, a ",
                  " than ",
                  " in more ",
                  " \"?"
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "less difficult task"
                  },
                  {
                    "-class": "positive",
                    "#text": "trying to win over independents"
                  },
                  {
                    "-class": "negative",
                    "#text": "hostile territory"
                  }
                ]
              },
              {
                "-id": "0-78-9",
                "span": {
                  "-class": "positive",
                  "#text": "even though a broader strategy could help lift the party with her"
                },
                "#text": ".,"
              },
              {
                "-id": "0-78-10",
                "#text": "This early in the campaign, however, forgoing a determined outreach effort to all 50 states, "
              },
              {
                "-id": "0-78-11",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "or even most of them, could mean missing"
                  },
                  {
                    "-class": "positive",
                    "#text": "out on the kind of spirited conversation that can be a unifying feature of a presidential election"
                  }
                ],
                "#text": ". "
              },
              {
                "-id": "0-78-12",
                "#text": "And it could leave Mrs. Clinton, "
              },
              {
                "-id": "0-78-13",
                "#text": "if she wins, with the same difficulties Mr. Obama has faced in governing with a Republican-controlled Congress.,"
              },
              {
                "-id": "0-78-14",
                "span": {
                  "-class": "positive",
                  "#text": "Already, it is causing consternation among Democrats in conservative states that could be given short shrift by her campaign or bypassed altogether"
                },
                "#text": ".,"
              },
              {
                "-id": "0-78-15",
                "#text": "When Bill Clinton reclaimed the presidency for Democrats in 1992, his road to the White House ran through Southern and Southern-border states filled with what were then a precious commodity: "
              },
              {
                "-id": "0-78-16",
                "#text": "swing voters.,"
              },
              {
                "-id": "0-78-17",
                "span": {
                  "-class": "positive",
                  "#text": "Twenty years later, Mr. Obama convincingly won a second term without competing in states like Kentucky"
                },
                "#text": ", "
              },
              {
                "-id": "0-78-18",
                "#text": "Louisiana, Tennessee or West Virginia that powered Mr. Clinton. "
              },
              {
                "-id": "0-78-19",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "And because of his strong appeal among liberals"
                  },
                  {
                    "-class": "negative",
                    "#text": "losing among independent voters"
                  }
                ],
                "#text": [
                  ", Mr. Obama did so even while ",
                  ".,"
                ]
              },
              {
                "-id": "0-78-20",
                "span": {
                  "-class": "positive",
                  "#text": "As Mrs. Clinton intensifies her campaign for the Democratic nomination, it is clear from her left-leaning policy stances"
                },
                "#text": ", "
              },
              {
                "-id": "0-78-21",
                "#text": "her hiring and her focus on data-driven organizing that her strategy is modeled on Mr. Obama's, "
              },
              {
                "-id": "0-78-22",
                "#text": "not her husband's.,"
              },
              {
                "-id": "0-78-23",
                "#text": "If she won, "
              },
              {
                "-id": "0-78-24",
                "#text": "it would suggest "
              },
              {
                "-id": "0-78-25",
                "#text": "that the so-called Obama coalition of young, nonwhite and female voters is transferable to another Democrat. "
              },
              {
                "-id": "0-78-26",
                "#text": "And it would validate the idea "
              },
              {
                "-id": "0-78-27",
                "span": {
                  "-class": "negative",
                  "#text": "that energizing core supporters is more important in presidential contests than persuading those still undecided"
                },
                "#text": ".,"
              },
              {
                "-id": "0-78-28",
                "span": {
                  "-class": "negative",
                  "#text": "To the architects of the Obama strategy, Mrs. Clinton's approach is not mere homage"
                },
                "#text": ": "
              },
              {
                "-id": "0-78-29",
                "span": {
                  "-class": "negative",
                  "#text": "It is unavoidable"
                },
                "#text": ", "
              },
              {
                "-id": "0-78-30",
                "span": {
                  "-class": "positive",
                  "#text": "given that there are few genuine independents now and that technology increasingly lets campaigns pinpoint their most likely voters"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-78-31",
                "#text": "If you run a campaign trying to appeal to 60 to 70 percent of the electorate, "
              },
              {
                "-id": "0-78-32",
                "span": {
                  "-class": "negative",
                  "#text": "you're not going to run a very compelling campaign for the voters you need"
                },
                "#text": ",\"?"
              },
              {
                "-id": "0-78-33",
                "#text": "said David Plouffe, a top Obama strategist who has consulted informally with Mrs. Clinton.,"
              },
              {
                "-id": "0-78-34",
                "#text": "Mrs. "
              },
              {
                "-id": "0-78-35",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton has said repeatedly that she does not want a lonely victory in 2016"
                },
                "#text": "; "
              },
              {
                "-id": "0-78-36",
                "#text": "she wants to elect Democrats down the ballot. "
              },
              {
                "-id": "0-78-37",
                "#text": "A group of her senior aides met recently with officials at the Democratic House, Senate and governor campaign arms to brief them on the aides' research and plans for her message and organization. "
              },
              {
                "-id": "0-78-38",
                "span": {
                  "-class": "positive",
                  "#text": "And Senate Democrats are hopeful that she will lift their prospects, because there is considerable overlap in crucial states"
                },
                "#text": ": "
              },
              {
                "-id": "0-78-39",
                "#text": "The results in Colorado, Florida, Nevada, New Hampshire, North Carolina, Ohio "
              },
              {
                "-id": "0-78-40",
                "#text": "and Wisconsin will almost certainly determine both who wins the White House and which party controls the Senate.,"
              },
              {
                "-id": "0-78-41",
                "#text": [
                  "House Democrats, while ",
                  " about the ",
                  ", "
                ],
                "span": [
                  {
                    "-class": "positive",
                    "#text": "realistic"
                  },
                  {
                    "-class": "negative",
                    "#text": "difficulty of retaking control"
                  }
                ]
              },
              {
                "-id": "0-78-42",
                "#text": "are also counting on Mrs. Clinton to drive turnout for their candidates. "
              },
              {
                "-id": "0-78-43",
                "span": {
                  "-class": "positive",
                  "#text": "There will be contested races in some presidential swing states, but Democratic strategists say Mrs. Clinton could also help the party unseat House Republicans in deep-blue states like New York and California"
                },
                "#text": ".,"
              },
              {
                "-id": "0-78-44",
                "#text": "So to Democrats in states where Mrs. Clinton is unlikely to compete, her relying on Mr. Obama's map would be worrisome. "
              },
              {
                "-id": "0-78-45",
                "span": {
                  "-class": "negative",
                  "#text": "It would not only further diminish beleaguered state parties, but also leave Mrs. Clinton with a narrower margin for error"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-78-46",
                "#text": [
                  "Go ask Al Gore,\"?Senator Joe Manchin III, Democrat of West Virginia, ",
                  " of writing off states such as his, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "said about the risk"
                }
              },
              {
                "-id": "0-78-47",
                "#text": "where Democratic presidential candidates prospered until 2000. \""
              },
              {
                "-id": "0-78-48",
                "#text": "He'd be president with five electoral votes from West Virginia. "
              },
              {
                "-id": "0-78-49",
                "#text": "So it is big, and it can make a difference.\""
              },
              {
                "-id": "0-78-50",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "Centrist Democrats also worry"
                  },
                  {
                    "-class": "positive",
                    "#text": "could lead to a continuation of the problems Mr. Obama has faced with a Congress elected by a vastly different subset of the nation"
                  }
                ],
                "#text": [
                  " that focusing on liberal voters ",
                  ".,\""
                ]
              },
              {
                "-id": "0-78-51",
                "#text": "That's not good for the country,\"?Mr. "
              },
              {
                "-id": "0-78-52",
                "#text": "Manchin said, "
              },
              {
                "-id": "0-78-53",
                "#text": "adding that he hoped Mrs. Clinton would \""
              },
              {
                "-id": "0-78-54",
                "#text": "come to the middle\"?"
              },
              {
                "-id": "0-78-55",
                "#text": "if she became president.,"
              },
              {
                "-id": "0-78-56",
                "#text": "Of her campaign, he said, \""
              },
              {
                "-id": "0-78-57",
                "#text": "If they get her too far over, it's going to be more difficult to govern, "
              },
              {
                "-id": "0-78-58",
                "#text": "it truly is.\""
              },
              {
                "-id": "0-78-59",
                "#text": "Other rural-state Democrats are sending not-so-subtle messages.,\""
              },
              {
                "-id": "0-78-60",
                "#text": "I think that we always appreciate when people want to kind of talk to the whole country and listen to concerns, "
              },
              {
                "-id": "0-78-61",
                "#text": "and I think farm country is critically important,\"?said Senator Heidi Heitkamp, Democrat of North Dakota.,"
              },
              {
                "-id": "0-78-62",
                "span": [
                  {
                    "-class": "negative",
                    "#text": "A larger risk of a tailored strategy"
                  },
                  {
                    "-class": "positive",
                    "#text": "taking advantage of polarization"
                  },
                  {
                    "-class": "negative",
                    "#text": "candidate could lose some of the authority that comes from the civic exercise"
                  },
                  {
                    "-class": "positive",
                    "#text": "appealing to much of the nation"
                  }
                ],
                "#text": [
                  " is that by ",
                  ", a ",
                  " of ",
                  ".,\""
                ]
              },
              {
                "-id": "0-78-63",
                "#text": "The president is the one person who potentially could be the unifying figure in the country,\"?"
              },
              {
                "-id": "0-78-64",
                "#text": "said H. "
              },
              {
                "-id": "0-78-65",
                "#text": "W. "
              },
              {
                "-id": "0-78-66",
                "#text": "Brands, a historian at the University of Texas at Austin. \""
              },
              {
                "-id": "0-78-67",
                "#text": "And if the president or a presidential candidate basically writes off 40 states, "
              },
              {
                "-id": "0-78-68",
                "#text": "then how in the world do the people in those 40 states feel like they have a stake in that person or that election?\""
              },
              {
                "-id": "0-78-69",
                "#text": "Mrs. "
              },
              {
                "-id": "0-78-70",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton's strategists appear mostly unmoved"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-78-71",
                "span": {
                  "-class": "positive",
                  "#text": "I think everybody understands"
                },
                "#text": " how tough it's going to be next year "
              },
              {
                "-id": "0-78-72",
                "#text": "if we get through the primary,\"?Robby Mook, Mrs. Clinton's campaign manager, said. \""
              },
              {
                "-id": "0-78-73",
                "span": {
                  "-class": "positive",
                  "#text": "So I'm not concerned about hand-wringing on the strategy"
                },
                "#text": ".\""
              },
              {
                "-id": "0-78-74",
                "#text": "Aides acknowledged that Mrs. Clinton's map would closely resemble Mr. Obama's, with roughly the same eight or so key states as in the last two presidential elections, "
              },
              {
                "-id": "0-78-75",
                "#text": "and with the possibility of competing in historically Republican states like Arizona where the demographics increasingly favor Democrats.,"
              },
              {
                "-id": "0-78-76",
                "#text": "But given the Clintons' deep ties to party leaders, including in many red states, "
              },
              {
                "-id": "0-78-77",
                "#text": "and their instinct for building up party machinery, some Democrats wonder "
              },
              {
                "-id": "0-78-78",
                "#text": "whether Mrs. Clinton will be able to resist old friends who press her to at least test the waters in Republican-leaning areas.,"
              },
              {
                "-id": "0-78-79",
                "#text": "Gov. "
              },
              {
                "-id": "0-78-80",
                "#text": "Steven L. "
              },
              {
                "-id": "0-78-81",
                "#text": "Beshear of Kentucky said he had reminded Mr. Clinton this year that he carried Kentucky twice \"?"
              },
              {
                "-id": "0-78-82",
                "#text": "and said Mrs. Clinton could win it, too.,"
              },
              {
                "-id": "0-78-83",
                "#text": "Many in Mr. Obama's orbit are watching closely to see "
              },
              {
                "-id": "0-78-84",
                "#text": "which impulse wins out: "
              },
              {
                "-id": "0-78-85",
                "span": [
                  {
                    "-class": "positive",
                    "#text": "an Obama-style faith in the data"
                  },
                  {
                    "-class": "negative",
                    "#text": "temptation"
                  },
                  {
                    "-class": "positive",
                    "#text": "familiar"
                  }
                ],
                "#text": [
                  " or a ",
                  " to acquiesce to the ",
                  ". "
                ]
              },
              {
                "-id": "0-78-86",
                "#text": "So far, Mrs. Clinton is heeding her mostly new team of advisers.,\""
              },
              {
                "-id": "0-78-87",
                "span": {
                  "-class": "negative",
                  "#text": "One of the hardest things to do in politics is dispense with old behavior,\"?said Dan Pfeiffer"
                },
                "#text": ", "
              },
              {
                "-id": "0-78-88",
                "#text": "a former Obama adviser. \""
              },
              {
                "-id": "0-78-89",
                "#text": "That will be a challenge. "
              },
              {
                "-id": "0-78-90",
                "#text": [
                  "But they're setting themselves up to ",
                  " that.\"Mrs. "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "avoid"
                }
              },
              {
                "-id": "0-78-91",
                "span": {
                  "-class": "negative",
                  "#text": "Clinton and her husband expressed concern last year when Democratic turnout fell precipitously"
                },
                "#text": ". "
              },
              {
                "-id": "0-78-92",
                "#text": [
                  "Recognizing that Democrats had to be galvanized to show up at the polls, Mrs. Clinton's advisers used surveys and ",
                  " of ",
                  ". "
                ],
                "span": [
                  {
                    "-class": "negative",
                    "#text": "focus groups to assess the risks"
                  },
                  {
                    "-class": "positive",
                    "#text": "running a strongly liberal campaign"
                  }
                ]
              },
              {
                "-id": "0-78-93",
                "#text": "They concluded that there were few.,"
              },
              {
                "-id": "0-78-94",
                "span": {
                  "-class": "positive",
                  "#text": "So she is embracing the central lesson of the Obama school"
                },
                "#text": ": "
              },
              {
                "-id": "0-78-95",
                "#text": "that voters turn out "
              },
              {
                "-id": "0-78-96",
                "#text": "when they believe that an election makes a difference and that their party's standard-bearer is a champion on issues important to them.,"
              },
              {
                "-id": "0-78-97",
                "#text": "By emphatically staking out liberal positions on ,, ,, ,, , and pay equity for women, Mrs. Clinton is , "
              },
              {
                "-id": "0-78-98",
                "#text": "core Democratic constituencies that she intends to give them a reason to support her.,"
              },
              {
                "-id": "0-78-99",
                "#text": "The stoke-the-base approach is a hallmark of Mrs. Clinton's young campaign manager, Mr. Mook. "
              },
              {
                "-id": "0-78-100",
                "#text": "He , to lift Gov. "
              },
              {
                "-id": "0-78-101",
                "span": {
                  "-class": "positive",
                  "#text": "Terry McAuliffe of Virginia to victory"
                },
                "#text": " in 2013, in a race both Clintons watched closely.,"
              },
              {
                "-id": "0-78-102",
                "#text": [
                  "It is a ",
                  " different style from that of Mrs. Clinton's 2008 campaign, "
                ],
                "span": {
                  "-class": "negative",
                  "#text": "starkly"
                }
              },
              {
                "-id": "0-78-103",
                "#text": "when she was often concerned about being seen as too liberal to appeal to centrists.,"
              },
              {
                "-id": "0-78-104",
                "#text": "This time, Mr. Pfeiffer said, \""
              },
              {
                "-id": "0-78-105",
                "#text": "she hired people with a sense of where the electorate is now, "
              },
              {
                "-id": "0-78-106",
                "#text": "not where it was in 1992.\""
              },
              {
                "-id": "0-78-107",
                "#text": "Mrs. "
              },
              {
                "-id": "0-78-108",
                "span": {
                  "-class": "positive",
                  "#text": "Clinton's strategic intentions are also evident in her focus on organizing"
                },
                "#text": ". "
              },
              {
                "-id": "0-78-109",
                "span": {
                  "-class": "positive",
                  "#text": "Mr. Mook noted twice in an interview that her campaign already had supporters in all 50 states mustering volunteers to register voters and ensure Mrs. Clinton is on the ballot"
                },
                "#text": ". "
              },
              {
                "-id": "0-78-110",
                "#text": "That is partly why the campaign postponed her first rally: "
              },
              {
                "-id": "0-78-111",
                "#text": "so her team could have time to make it more of an organizing event.,"
              },
              {
                "-id": "0-78-112",
                "span": {
                  "-class": "positive",
                  "#text": "That kickoff in New York next Saturday will be an important test of enthusiasm for Mrs. Clinton's candidacy"
                },
                "#text": ", "
              },
              {
                "-id": "0-78-113",
                "#text": "and of her campaign's ability to use big events to build the machinery that will identify and turn out voters.,"
              },
              {
                "-id": "0-78-114",
                "#text": "What Mrs. Clinton says there will matter. "
              },
              {
                "-id": "0-78-115",
                "#text": "But the organizing around the rally, and around the events her campaign is holding that night to build a volunteer network, "
              },
              {
                "-id": "0-78-116",
                "#text": "will be just as consequential.,"
              },
              {
                "-id": "0-78-117",
                "span": {
                  "-class": "negative",
                  "#text": "It is a far cry from her husband's campaigns"
                },
                "#text": ".,\""
              },
              {
                "-id": "0-78-118",
                "#text": "The highest-premium voter in '92 was a voter who would vote for one party some and for another party some,\"?"
              },
              {
                "-id": "0-78-119",
                "#text": "said James Carville, Mr. Clinton's chief strategist in 1992. \""
              },
              {
                "-id": "0-78-120",
                "#text": "Now the highest-premium voter is somebody with a high probability to vote for you and low probability to turn out. "
              },
              {
                "-id": "0-78-121",
                "#text": "That's the golden list. "
              },
              {
                "-id": "0-78-122",
                "#text": "And that's a humongous change in basic strategic doctrine.\"?"
              }
            ]
          },
          {
            "a": {
              "-id": "0-79-0",
              "#text": "1433574000552"
            }
          },
          {
            "a": { "-id": "0-80-0" }
          }
        ]
      }
    }
  };
  fakeData = JSON.parse(JSON.stringify(fakeData).replace(/review-text/g,'reviewText').replace(/-id/g,'pid').replace(/#text/g,'ptext'));
  $scope.nytMedia.topics = fakeData.topictree;
  console.log($scope.nytMedia.topics);
});
