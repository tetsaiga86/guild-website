export default function fetchLeaderdata(name, callback){
    var leaderUrl = `/api/character_info/${name}`;
    var legionRaids = [];
    var numberOfRaids = 3;
    $.getJSON(leaderUrl, (leaderJsonData) =>{
      var j = 0;
      for (var i = leaderJsonData.progression.raids.length-numberOfRaids; i < leaderJsonData.progression.raids.length; i++, j++) {
        legionRaids.push(leaderJsonData.progression.raids[i]);
        legionRaids[legionRaids.length-1].in = j == numberOfRaids-1;
      }

      callback(legionRaids);
    })
  }
