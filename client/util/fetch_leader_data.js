export default function fetchLeaderdata(callback){
    var officerUrl = `/api/officer_info`;
    $.getJSON(officerUrl, (leaderJsonData) =>{
      for (var i = 0; i < leaderJsonData.length; i++) {
        if (i==leaderJsonData.length-1) {
          leaderJsonData[i].in=true;
        }else{
          leaderJsonData[i].in=false;
        }
      }
      callback(leaderJsonData);
    })
  }
