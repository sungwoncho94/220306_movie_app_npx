import { useEffect, useState } from "react";

function CoinApp() {
    // 초기 loading...을 표시해줄 state
    const [loading, setLoading] = useState(false);
    // 1. coin들의 정보를 담을 리스트(coins), coins를 업데이트 해주기 위한 setCoins
    // 초기 값은 빈 array임
    const [coins, setCoins] = useState([]);

    // 브라우저가 실행될 때 최초 1번 코인 정보를 받아올 것. 최초 1번만 실행될 것이기 때문에, 표적 함수에 아무것도 넣지 않음
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
            .then((res) => res.json())
            .then((json) => {
                setTimeout(function(){
                    setCoins(json);
                    setLoading(true);
                }, 1000);
                }
            );
    }, []);

    return(
        <div>
            {loading ? <h1>Coins Ranking List</h1> : <h1>Loading...</h1>}
            <ul>
                {coins.map((coin, index) => 
                    <li key={coin.id}>{index+1}. {coin.name} - {Math.round(coin.quotes.USD.price) / 100}</li>
                )}
            </ul>
        </div>
    );
}

export default CoinApp;