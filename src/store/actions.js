//ToDo: Import vue and name it Vue
import Vue from 'vue'

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                var arr = []
                for (var field in data) {
                    arr.push(field)
                }
                var save = arr[arr.length - 1]

                // ToDo: Create const call stocks that is equal to data.stocks
                const stocks = data[save].stocks
                // ToDo: Create const call funds that is equal to data.funds
                const funds = data[save].funds
                // ToDo: Create const call stockPortfolio that is equal to data.stockPortfolio
                const stockPortfolio = data[save].stockPortfolio

                //ToDo: Create a const called portfolio that is a data object {}
                //ToDo: Inside portfolio add stockPortfolio and funds
                // eslint-disable-next-line no-console
                console.log(data)
                // eslint-disable-next-line no-console
                console.log(data[save])
                const portfolio = {
                    stockPortfolio,
                    funds
                }

                //ToDo: using vuex commit method pass 'SET_STOCKS' and stocks
                commit('SET_STOCKS', stocks)
                //ToDo: using vuex commit method pass 'SET_PORTFOLIO' and portfolio
                commit('SET_PORTFOLIO', portfolio)
            }
      });
};