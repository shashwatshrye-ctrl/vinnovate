const ctx = document.getElementById("statsChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Race Wins per Season",
      data: [3, 2, 10, 15, 19],
      borderColor: "#ff1e00",
      backgroundColor: "rgba(255,30,0,0.3)",
      fill: true
    }]
  }
});
