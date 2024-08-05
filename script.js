/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
var clearScript = document.getElementById("clearScript");
if(scriptBtn){ scriptBtn.addEventListener("click", generateScript);}
if(clearScript) { clearScript.addEventListener("click", startOver);}

 
function generateScript () {
  var time = document.getElementById("time").value;
  var contact =document.getElementById("contact").value;
  var name = document.getElementById("name").value;
  var concerns = document.getElementById("concerned").value;
 
  displayScript.innerHTML = "Good " + time + ", " + contact+ ". My name is "+ name + ". I am contacting you to encourage you to support any bills or acts that include efforts to remove chemicals such as PFAS from our water. I’m concerned about "+concerns+" Thank you for your time.";
}

function startOver () {
  displayScript.innerHTML = "";
}

//*Fact Generator*//

var factList = [
  "Water pollution is destroying freshwater when we need to be preserving it. According to the United Nations report in 2018, demand for freshwater will increase by one-third by 2050. (Source: https://unesdoc.unesco.org/ark:/48223/pf0000261424)",
  "In 2022, the EPA recorded that the United States released 196 million pounds chemicals listed by the Toxic Release Inventory Program. (Source: https://www.epa.gov/trinationalanalysis/water-releases-chemical-industry)",
  "PFAS [Per and Polyfluorinated Alkyl Substances] chemicals are known as “forever chemicals” because they don’t break down easily. (Source: https://www.consumerreports.org/health/food-contaminants/dangerous-pfas-chemicals-are-in-your-food-packaging-a3786252074/)",
  "According to a 2023 study by the U.S Geological Survey, at least 45% of the United States’s tap water has PFAS in it. In that study, the USGS only tested for the presence of 32 types of PFAS. (Source: https://www.usgs.gov/news/national-news-release/tap-water-study-detects-pfas-forever-chemicals-across-us)",
  "There are more than 12,000 types of PFAS. (Source: https://www.usgs.gov/news/national-news-release/tap-water-study-detects-pfas-forever-chemicals-across-us)",
  "Most PFAS chemicals cannot be detected by current tests. (Source: https://www.usgs.gov/news/national-news-release/tap-water-study-detects-pfas-forever-chemicals-across-us)",
  "Brita water filters are not designed to remove PFAS from water. (Source: https://www.epicwaterfilters.com/blogs/quick-drips/does-brita-filter-pfas#:~:text=Brita%20water%20filter%20pitchers%20use,like%20heavy%20metals%20and%20pesticides.)",
  "According to the National Institute of Environmental Sciences, 97% of people in the United States have PFAS chemicals in their body. (Source: https://www.niehs.nih.gov/health/topics/agents/pfc#:~:text=One%20report%20by%20the%20Centers,blood%20of%2097%25%20of%20Americans.)",
  "",
  ];

var fact = document.getElementById ("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML = factList[count];
  count++;
  //*Same as count = count+1*//
  if (count == factList.length) {   count = 0;
  }
  }
