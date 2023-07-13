const https = require("https");
const fs = require("fs");

function fetchData() {
  const options = {
    hostname: "api.dashboard-yes.bet",
    path: "/sports/featured",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        saveDataToFile(jsonData);
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    });
  });

  req.on("error", (error) => {
    console.error("HTTP 요청 실패:", error);
  });

  req.end();
}

function saveDataToFile(data) {
  const jsonFile = JSON.stringify(data, null, 2);

  fs.writeFile("featured.json", jsonFile, (err) => {
    if (err) {
      console.error("파일 저장 실패:", err);
    } else {
      console.log("데이터를 data.json 파일로 저장하였습니다.");
    }
  });
}

setInterval(fetchData, 1000); // 설정 ms마다 fetchData 함수 실행 1000ms = 1초
