<script>
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  let showModal = false;
  let currentIndex = 0
  let items = [
    {
      title: 'Risk Disclosure',
      content: `
DayTraders.com provides educational resources and access to simulated trading environments. We do not facilitate the deposit or trading of actual funds. Participation in the futures markets involves significant risk, and it is essential that individuals fully understand these risks before engaging in trading activities elsewhere. Below are key points regarding the risks.

Educational Purpose Only: All content and resources provided by DayTraders.com, including simulated trading environments, are for educational purposes. We do not offer real-money trading accounts, and no actual funds are deposited with or traded through our platform.

High Risk of Loss in Actual Trading: While DayTraders.com offers simulated trading environments, actual futures and derivatives trading conducted through a brokerage firm involves significant risk. In real trading, substantial financial loss can occur. Participants should only trade with capital they can afford to lose.

Leverage and Margin Risks: In actual trading environments, using leverage or trading on margin can significantly magnify both gains and losses. Traders should be aware of these risks and fully understand the implications of margin before engaging in real-money trading outside DayTraders.com.

Market Volatility: The financial markets are subject to rapid and unpredictable changes. While the simulated environment on DayTraders.com may help users practice strategies, real market volatility can lead to substantial losses. This volatility can be influenced by economic data, geopolitical events, and other factors beyond anyone's control.

No Guarantees of Profit: DayTraders.com does not guarantee profit or success in actual trading. Past performance in our simulated environment, whether favorable or not, is not indicative of future results when trading real funds in the marketplace.

Technological and Operational Risks: While DayTraders.com provides a stable simulated environment for educational purposes, participants in actual trading may experience technical failures such as system errors, connection issues, or trade execution delays, which can result in losses.

Personal Responsibility: Individuals are responsible for their own trading decisions. Any use of educational content or simulated trading provided by DayTraders.com should not be considered financial advice or an endorsement of specific trading strategies. Participants should conduct thorough research and consult with professional financial advisors before engaging in actual trading.`
    },
    {
      title: 'Hypothetical Performance Disclosure',
      content: `
The performance results displayed on DayTraders.com are based on hypothetical or simulated trading activities and do not represent actual trading results. Below are important points to consider regarding the limitations of hypothetical performance results.

Simulated Trading Environment: All trading conducted on DayTraders.com is within a simulated, educational environment. No real funds are used, and all performance outcomes are hypothetical in nature. These results may differ significantly from real-world trading outcomes where actual capital is at risk.

Limitations of Hypothetical Results: Hypothetical results are based on controlled conditions and do not reflect real market conditions, such as slippage, order execution delays, or liquidity issues. As such, these results may not accurately represent the challenges of actual trading.

No Guarantee of Future Performance: Hypothetical performance, whether positive or negative, should not be interpreted as an indication of future success in real-money trading. Actual trading results are influenced by many unpredictable factors, including market conditions and individual decision-making.

Psychological Factors: Simulated trading does not account for the psychological pressures experienced when trading with real funds. In actual trading, emotions such as fear and greed can affect decision-making, which is not reflected in the hypothetical results from DayTraders.com's simulated environment.

Educational and Demonstration Purposes Only: All hypothetical performance results displayed on DayTraders.com are for educational and demonstration purposes. They do not constitute an endorsement of any particular trading strategy or financial product. Participants should assess any trading strategy based on their own financial situation and risk tolerance before engaging in real-world trading.

By using DayTraders.com, you acknowledge that all trading activities are simulated and that hypothetical performance results may not reflect actual future trading performance.
      `
    },
    {
      title: 'Available Instruments',
      content: `
DayTraders.com strictly limits the instruments available for trading to ensure consistency with our educational goals and supported platforms. Customers are permitted to trade only futures contracts listed on the following regulated exchanges: the Chicago Mercantile Exchange (CME), the Commodity Exchange (COMEX), the New York Mercantile Exchange (NYMEX), and the Chicago Board of Trade (CBOT). These exchanges offer a broad range of futures products, providing ample opportunities for traders to engage in diverse market sectors.

Please note that trading in other financial instruments, including but not limited to spot currencies (Forex), contracts for difference (CFDs), individual stocks, options, and cryptocurrencies, is strictly prohibited within the DayTraders.com ecosystem. Our programs, vendors, and platforms do not support or facilitate trading in these instruments, as they fall outside the scope of our futures-focused educational services and evaluation programs.

This restriction is in place to maintain a clear focus on futures trading, as well as to ensure compliance with the guidelines established by our service providers and the regulatory frameworks governing the markets we support. Engaging in trading activities outside these approved instruments is a violation of our policies and may result in account suspension or termination.
      `
    },
    {
      title: 'Evaluation Disclaimer',
      content: `
The pass rate for our evaluation program, conducted between January 1, 2024, and September 1, 2024, was 45% for participants who completed at least one evaluation and successfully qualified for a Pro Level Account during this period. This statistic reflects the rigorous nature of our program, which is designed to challenge traders and evaluate their ability to perform consistently under conditions that closely mirror real-world trading environments.

Our Evaluation and Pro Level Account programs are structured to simulate live market conditions as accurately as possible. This includes incorporating commissions, fees, and other relevant factors that traders would encounter in an actual trading environment. The primary purpose of the evaluation is to assess a trader's skill, discipline, and strategy in a realistic and controlled setting. It is important to emphasize that these programs are designed as comprehensive tests of trading competency, not as training platforms. Participants are expected to have a solid foundation in trading principles and risk management strategies before attempting the evaluation.

Passing the evaluation requires a high level of proficiency and is intentionally challenging, even for traders with significant experience. The evaluation is structured to measure a trader’s ability to adhere to risk management rules, execute trades effectively, and maintain consistency over time. Due to its demanding nature, this program is not recommended for individuals with little or no trading experience. Novice traders may find the evaluation process particularly difficult and are encouraged to seek further education and practice before considering participation.

We recommend that individuals carefully evaluate their level of trading knowledge, experience, and preparedness prior to enrolling in the evaluation program. While the evaluation can serve as a valuable benchmark for experienced traders, it is not intended as a learning tool for beginners. By participating, traders acknowledge the inherent challenges and accept full responsibility for their trading decisions and performance outcomes.
      `
    },
    {
      title: 'Customer Compensation Disclosure',
      content: `
All trading results and performance metrics displayed in relation to customer compensation should be considered hypothetical in nature and may not accurately represent outcomes that would be achieved in live trading environments. Pro Level Accounts referenced on this platform may consist of simulated, live, or mirrored trading accounts, and the results presented are intended for illustrative purposes only.

Please be aware that testimonials, account performances, and payout figures featured on this website are not necessarily indicative of the typical experiences of all customers. These testimonials are individual accounts and should not be relied upon as a predictor of future performance or success. Past performance is not a guarantee of future results, and trading involves inherent risks that may result in substantial financial loss.

We encourage all participants to carefully evaluate their own risk tolerance and trading objectives before engaging in any trading activities. The results showcased are not intended to provide assurances or expectations of specific outcomes for other customers.
      `
    }
  ]

 let currentTitle = ''
  let currentContent = ''

  function makeModal(i) {
    currentTitle = items[i].title
    currentContent = items[i].content
    showModal = true
  }
</script>
{#if showModal}
<div class="relative z-50 overscroll-y-contain" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div transition:fade class="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-stretch justify-center p-4 text-center sm:items-center sm:p-0">
      <div in:fly={{y: 20, easing: backOut, duration: 300}} out:fly={{y: 20, delay: 50, duration: 150}} class="relative transform overflow-hidden bg-black h-full text-left shadow-xl shadow-black/60 transition-all sm:my-8 sm:w-full sm:max-w-4xl">
        <div class="p-4 bg-zinc-950">
          <h2 class="font-thin uppercase text-2xl sm:text-3xl lg:text-2xl md:text-left w-full">{currentTitle}</h2>
        </div>
        <div class="sm:flex sm:items-start">
          <div class="max-h-[calc(100vh-12rem)] overflow-y-auto overscroll-contain px-6 pb-6 scroller">
            <p class="text-base text-zinc-400 whitespace-pre-wrap">{@html currentContent}</p>
          </div>
        </div>
        <div class="bg-zinc-950 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button on:click={()=> showModal = false} class="inline-flex w-full justify-center bg-main px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
{/if}

<div class="p-4 sm:p-8 relative">
  <p class="absolute top-0 left-0 font-thin text-white/20 uppercase tracking-widest">Disclosures</p>
  <div class="flex flex-wrap gap-4 justify-between">
    {#each items as { title, content }, i}
    <button on:click={()=> makeModal(i)} class="px-6 py-3 text-sm flex-1 bg-zinc-900 hover:bg-zinc-800 text-white whitespace-nowrap">{title}</button>
    {/each}
  </div>
</div>

<style>
.scroller::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.scroller::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: #09090b;
}

.scroller::-webkit-scrollbar-track:hover {
  background-color: #09090b;
}

.scroller::-webkit-scrollbar-track:active {
  background-color: #09090b;
}

.scroller::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #D63A3A;
}

.scroller::-webkit-scrollbar-thumb:hover {
  background-color: #D65546;
}

.scroller::-webkit-scrollbar-thumb:active {
  background-color: #CA3737;
}
</style>