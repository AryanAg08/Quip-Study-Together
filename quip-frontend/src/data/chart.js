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
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        show: false,
        labels: {
          show: false,
          style: {
            colors: "#fff",
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
        color: "#fff",
        labels: {
          show: true,
          style: {
            colors: "#fff",
            fontSize: "12px",
            fontFamily: "Plus Jakarta Display",
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        colors: "#fff",
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