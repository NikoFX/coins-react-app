import { create } from 'zustand'

const coinStore = create(set => ({
    coins: [],
    fetchCoins: (q = '', formState='') => {
        fetch(`https://coin-app-server-api.vercel.app/api/search?q=${q}&t=${formState?.type}&c=${formState?.country}&m=${formState?.metal}&qt=${formState?.quality}&pFrom=${formState?.priceFrom}&pTo=${formState?.priceTo}&yFrom=${formState?.yearFrom}&yTo=${formState?.yearTo}`)
            .then(res => res.json())
            .then(data => set({ coins: data }))
    }
}))

export default coinStore