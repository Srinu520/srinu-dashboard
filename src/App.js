import './App.scss';
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
const data = {
  labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "colleges",
      data: [33, 20, 85, 41, 44, 65, 76, 33, 25, 35, 51, 54],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#5bc27f"
    },
    {
      label: "Univarsity",
      data: [45, 55, 53, 33, 25, 35, 51, 54, 76, 33, 25, 35],
      fill: false,
      borderColor: "#765bc2",
    },
    {
      label: "School",
      data: [23, 40, 13, 76, 33, 25, 35, 51, 54, 76, 33, 25],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#333f42"
    },
    {
      label: "Academy",
      data: [18, 45, 65, 76, 50, 50, 70, 28, 39, 45, 77, 32],
      fill: false,
      borderColor: "#34c0eb",
    }
  ]
}
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  },
  onClick: (e) => console.log(e),
  plugins: {
    legend: {
      position: 'bottom',
    },
  }
}
const cards = [
  {
    title: 'No. Of Schools',
    value: '13',
    category: ['CBSC', 'International']
  },
  {
    title: 'No. Of Colleges',
    value: '9',
    category: ['Engeneering', 'Medical']
  },
  {
    title: 'No. Of Universities',
    value: '11',
    category: ['Govt.', 'Deemed']
  },
  {
    title: 'No. Of Kindergartens',
    value: '7',
    category: ['CBSC', 'International']
  }
]
function App() {
  return (
    <div>
      <Navbar />
      <div className='main-container'>
        <LeftContainer />
        <RightContainer cards={cards} options={options} data={data} />
      </div>
    </div>
  );
}

export default App;
