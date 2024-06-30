export const barChartDataDashboard = [
    {
        name: "Study Hours",
        data: [10, 12, 15, 16, 9, 18, 10],
    },
];

export const barChartOptionsDashboard = {
    chart: {
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: "Plus Jakarta Display",
        },
        onDatasetHover: {
          style: {
            fontSize: "12px",
            fontFamily: "Plus Jakarta Display",
          },
        },
        theme: "dark",
      },
      xaxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sun"],
        show: false,
        labels: {
          show: false,
          style: {
            colors: "#000",
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
        color: "#000",
        labels: {
          show: true,
          style: {
            colors: "#000",
            fontSize: "12px",
            fontFamily: "Plus Jakarta Display",
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        colors: "#000",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: "12px",
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 0,
              },
            },
          },
        },
      ],
    };