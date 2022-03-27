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
            setCoins(json);
            setLoading(true);
        }
        )
    }, [])

    // 챌린지 : 선택한 코인을 비트코인 단위로 환산해보자
    // 선택된 코인의 가격
    const [slctPrice, setSlctPrice] = useState(1);
    // 선택된 코인 이름
    const [slctCoin, setSlctCoin] = useState('');
    // 비트코인 가격
    const [bitPrice, setBitPrice] = useState(1);
    
    function sltCoin(){
        // 선택한 코인 idx 뽑음
        var coinIdxNum = document.getElementById('coinSlctBx').value.split('.', 1).toString();
        var coinIdx = coinIdxNum - 1;
        var slctPrice = coins[coinIdx].quotes.USD.price;
        var slctCoin = coins[coinIdx].name;
        setSlctPrice(slctPrice);
        setSlctCoin(slctCoin);
        setBitPrice(coins[0].quotes.USD.price);
    }
    
    return(
        <div>
            {loading ? <h1>비트코인과 비교해보기</h1> : ''}
            {loading ?
            <select onChange={sltCoin} id='coinSlctBx'>
            {coins.map((coin, index) => 
                <option key={coin.id}>{index+1}. {coin.name}</option>
                )}
            </select>    
            : ''}
            {loading ? <span>1 BitCoin = {Math.round(bitPrice/slctPrice)} {slctCoin}</span> : ''}
            
            {loading ? <h1>전체 코인 리스트</h1> : <h1>Loading...</h1>}
            <ul>
                {coins.map((coin, index) => 
                    <li key={coin.id}>{index+1}. {coin.name} - {Math.round(coin.quotes.USD.price) / 100}</li>
                )}
            </ul>
        </div>
    );
}

export default CoinApp;