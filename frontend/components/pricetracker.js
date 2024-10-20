import React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import Chart from 'chart.js/auto'
import './styles/pricetracker.css'

let CoinGeckoApi;

(function (CoinGeckoApi) {
  CoinGeckoApi.AllCoins = 'coins/markets?vs_currency=usd&page=1&per_page=30&sparkline=false'
  CoinGeckoApi.Base = 'https://api.coingecko.com/api/v3'
})(CoinGeckoApi || (CoinGeckoApi = {}))

let RequestStatus;

(function (RequestStatus) {
  RequestStatus.Error = 'Error'
  RequestStatus.Idle = 'Idle'
  RequestStatus.Loading = 'Loading'
  RequestStatus.Success = 'Success'
})(RequestStatus || (RequestStatus = {}))

let Color;
(function (Color) {
  Color.Green = '76, 175, 80'
  Color.Red = '198, 40, 40'
})(Color || (Color = {}))

const CryptoUtility = {
  formatPercent: (value) => {
    return (value / 100).toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 })
  },
  formatUSD: (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  },
  getByID: (id, cryptos) => {
    const match = cryptos.find((crypto) => crypto.id === id)
    return match || null
  },
  map: (data) => {
    return {
      change: data.price_change_percentage_24h,
      id: data.id,
      image: data.image,
      marketCap: CryptoUtility.formatUSD(data.market_cap),
      name: data.name,
      price: CryptoUtility.formatUSD(data.current_price),
      rank: data.market_cap_rank,
      supply: data.circulating_supply.toLocaleString(),
      symbol: data.symbol,
      volume: CryptoUtility.formatUSD(data.total_volume)
    }
  },
  mapAll: (data) => {
    return data.map((item) => CryptoUtility.map(item))
  }
}

const ChartUtility = {
  draw: (id, points, change) => {
    const canvas = document.getElementById(id)
    if (canvas !== null) {
      const context = canvas.getContext('2d')
      const chart = new Chart(context, {
        type: 'line',
        data: {
          datasets: [Object.assign({ data: points.map((point) => point.price) }, ChartUtility.getDatasetOptions(change))],
          labels: points.map((point) => point.timestamp)
        },
        options: ChartUtility.getOptions(points)
      })
      console.log(chart.data)
      return chart
    }
  },

  getDatasetOptions: (change) => {
    const color = change >= 0 ? Color.Green : Color.Red
    return {
      backgroundColor: 'rgba(' + color + ', 0.1)',
      borderColor: 'rgba(' + color + ', 0.5)',
      fill: true,
      tension: 0.2,
      pointRadius: 0
    }
  },

  getOptions: (points) => {
    const min = Math.min.apply(Math, points.map((point) => point.price)); const max = Math.max.apply(Math, points.map((point) => point.price))
    return {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        x: {
          display: false,
          gridLines: {
            display: false
          }
        },
        y: {
          display: false,
          gridLines: {
            display: false
          },
          suggestedMin: min * 0.98,
          suggestedMax: max * 1.02
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        }
      }
    }
  },

  getUrl: (id) => {
    return `${CoinGeckoApi.Base}/coins/${id}/market_chart?vs_currency=usd&days=1`
  },

  mapPoints: (data) => {
    return data.prices.map((price) => ({
      price: price[1],
      timestamp: price[0]
    }))
  },

  update: (chart, points, change) => {
    chart.options = ChartUtility.getOptions(points)
    const options = ChartUtility.getDatasetOptions(change)
    chart.data.datasets[0].data = points.map((point) => point.price)
    chart.data.datasets[0].backgroundColor = options.backgroundColor
    chart.data.datasets[0].borderColor = options.borderColor
    chart.data.datasets[0].pointRadius = options.pointRadius
    chart.data.labels = points.map((point) => point.timestamp)
    chart.update()
  }
}
/* ---------- Loading Component ---------- */
const LoadingSpinner = () => {
  return (React.createElement('div', { className: 'loading-spinner-wrapper' },
    React.createElement('div', { className: 'loading-spinner' },
      React.createElement('i', { className: 'fa-regular fa-spinner-third' }))))
}
/* ---------- Crypto List Component ---------- */
const CryptoListToggle = () => {
  const { state, toggleList } = React.useContext(AppContext)
  if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
    const classes = classNames('fa-regular', {
      'fa-bars': !state.listToggled,
      'fa-xmark': state.listToggled
    })
    return (React.createElement('button', { id: 'crypto-list-toggle-button', onClick: () => toggleList(!state.listToggled) },
      React.createElement('i', { className: classes })))
  }
  return null
}

const CryptoListItem = (props) => {
  const { state, selectCrypto } = React.useContext(AppContext)
  const { crypto } = props
  const getClasses = () => {
    const selected = state.selectedCrypto && state.selectedCrypto.id === crypto.id
    return classNames('crypto-list-item', {
      selected
    })
  }
  return (React.createElement('button', { type: 'button', className: getClasses(), onClick: () => selectCrypto(crypto.id) },
    React.createElement('div', { className: 'crypto-list-item-background' },
      React.createElement('h1', { className: 'crypto-list-item-symbol' }, crypto.symbol),
      React.createElement('img', { className: 'crypto-list-item-background-image', src: crypto.image })),
    React.createElement('div', { className: 'crypto-list-item-content' },
      React.createElement('h1', { className: 'crypto-list-item-rank' }, crypto.rank),
      React.createElement('img', { className: 'crypto-list-item-image', src: crypto.image }),
      React.createElement('div', { className: 'crypto-list-item-details' },
        React.createElement('h1', { className: 'crypto-list-item-name' }, crypto.name),
        React.createElement('h1', { className: 'crypto-list-item-price' }, crypto.price)))))
}
const CryptoList = () => {
  const { state } = React.useContext(AppContext)
  if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
    const getItems = () => {
      return state.cryptos.map((crypto) => (React.createElement(CryptoListItem, { key: crypto.id, crypto })))
    }
    return (React.createElement('div', { id: 'crypto-list' }, getItems()))
  }
  return null
}
const CryptoPriceChart = () => {
  const { selectedCrypto: crypto } = React.useContext(AppContext).state
  const id = 'crypto-price-chart'

  const [state, setStateTo] = React.useState({
    chart: null,
    points: [],
    status: RequestStatus.Loading
  })

  const setStatusTo = (status) => {
    setStateTo({ ...state, status })
  }
  const setChartTo = (chart) => {
    setStateTo({ ...state, chart })
  }

  React.useEffect(() => {
    const fetch = async () => {
      try {
        setStatusTo(RequestStatus.Loading)
        const res = await axios.get(ChartUtility.getUrl(crypto.id))
        setStateTo(Object.assign(Object.assign({}, state), { points: ChartUtility.mapPoints(res.data), status: RequestStatus.Success }))
      } catch (err) {
        console.error(err)
        setStatusTo(RequestStatus.Error)
      }
    }
    fetch()
  }, [crypto])

  React.useEffect(() => {
    if (state.chart === null && state.status === RequestStatus.Success) {
      setChartTo(ChartUtility.draw(id, state.points, crypto.change))
    }
  }, [state.status])

  React.useEffect(() => {
    if (state.chart !== null) {
      const update = () => ChartUtility.update(state.chart, state.points, crypto.change)
      update()
    }
  }, [state.chart, state.points])

  const getLoadingSpinner = () => {
    if (state.status === RequestStatus.Loading) {
      return (React.createElement('div', { id: 'crypto-price-chart-loading-spinner' },
        React.createElement(LoadingSpinner, null)))
    }
  }

  return (React.createElement('div', { id: 'crypto-price-chart-wrapper' },
    React.createElement('canvas', { id: 'crypto-price-chart' }),
    getLoadingSpinner()))
}

const CryptoField = (props) => {
  return (React.createElement('div', { className: classNames('crypto-field', props.className) },
    React.createElement('h1', { className: 'crypto-field-value' }, props.value),
    React.createElement('h1', { className: 'crypto-field-label' }, props.label)))
}

const CryptoDetails = () => {
  const { selectedCrypto } = React.useContext(AppContext).state
  const [state, setStateTo] = React.useState({
    crypto: null,
    transitioning: true
  })
  const setTransitioningTo = (transitioning) => {
    setStateTo(Object.assign(Object.assign({}, state), { transitioning }))
  }
  const { crypto } = state
  React.useEffect(() => {
    if (selectedCrypto !== null) {
      setTransitioningTo(true)
      const timeout = setTimeout(() => {
        setStateTo({ crypto: selectedCrypto, transitioning: false })
      }, 500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [selectedCrypto])
  if (crypto !== null) {
    const sign = crypto.change >= 0 ? 'positive' : 'negative'
    return (React.createElement('div', { id: 'crypto-details', className: classNames(sign, { transitioning: state.transitioning }) },
      React.createElement('div', { id: 'crypto-details-content' },
        React.createElement('div', { id: 'crypto-fields' },
          React.createElement(CryptoField, { label: 'Rank', value: crypto.rank }),
          React.createElement(CryptoField, { label: 'Name', value: crypto.name }),
          React.createElement(CryptoField, { label: 'Price', value: crypto.price }),
          React.createElement(CryptoField, { label: 'Market Cap', value: crypto.marketCap }),
          React.createElement(CryptoField, { label: '24H Volume', value: crypto.volume }),
          React.createElement(CryptoField, { label: 'Circulating Supply', value: crypto.supply }),
          React.createElement(CryptoField, { className: sign, label: '24H Change', value: CryptoUtility.formatPercent(crypto.change) })),
        React.createElement(CryptoPriceChart, null),
        React.createElement('h1', { id: 'crypto-details-symbol' }, crypto.symbol))))
  }
  return null
}

const AppContext = React.createContext(null)

const App = () => {
  const [state, setStateTo] = React.useState({
    cryptos: [],
    listToggled: true,
    selectedCrypto: null,
    status: RequestStatus.Loading
  })
  const setStatusTo = (status) => {
    setStateTo(Object.assign(Object.assign({}, state), { status }))
  }
  const selectCrypto = (id) => {
    setStateTo(Object.assign(Object.assign({}, state), { listToggled: window.innerWidth > 800, selectedCrypto: CryptoUtility.getByID(id, state.cryptos) }))
  }
  const toggleList = (listToggled) => {
    setStateTo(Object.assign(Object.assign({}, state), { listToggled }))
  }
  React.useEffect(() => {
    const fetch = async () => {
      try {
        setStatusTo(RequestStatus.Loading)
        const res = await axios.get(`${CoinGeckoApi.Base}/${CoinGeckoApi.AllCoins}`)
        setStateTo(Object.assign(Object.assign({}, state), { cryptos: CryptoUtility.mapAll(res.data), status: RequestStatus.Success }))
      } catch (err) {
        console.error(err)
        setStatusTo(RequestStatus.Error)
      }
    }
    fetch()
  }, [])
  React.useEffect(() => {
    if (state.status === RequestStatus.Success && state.cryptos.length > 0) {
      selectCrypto(state.cryptos[0].id)
    }
  }, [state.status])
  const getLoadingSpinner = () => {
    if (state.status === RequestStatus.Loading) {
      return (React.createElement(LoadingSpinner, null))
    }
  }
  return (
    React.createElement(AppContext.Provider, { value: { state, selectCrypto, setStateTo, toggleList } },
      React.createElement('div', { className: 'base-back border-b-white' },
        React.createElement('h1', { className: 'text-4xl md:text-8xl font-black text-center pt-1' }, 'Buy Low Sell High',
          React.createElement('p', { className: 'text-xs md:text-sm text-white mt-1 md:mt-2 font-bold' }, 'The path to profits sounds easy; why should the setup and use of automated trading software be complex?',
            React.createElement('p', { className: 'text-lg md:text-2xl font-black text-center obitron text-white mt-1 md:mt-3' }, 'Automated Crypto Trading Simplified',
              React.createElement('p', { className: 'text-sm md:text-lg font-bold text-center obitron' }, 'Accessible and Powerful',
                React.createElement('div', { id: 'app', className: classNames({ 'list-toggled': state.listToggled }) },
                  React.createElement(CryptoList, null),
                  React.createElement(CryptoDetails, null),
                  React.createElement(CryptoListToggle, null),
                  getLoadingSpinner()))))))))
}

export default function Pricetracker () {
  return React.createElement(App, null)
}
