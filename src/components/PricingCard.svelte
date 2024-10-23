<script>
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  export let protection

  export let name, description, startingCapital, prices = [], contracts = [], thresholds = [], targets = [], drawdowns = [], popular = false, link = '#'

  let curr = {style: 'currency', currency: 'USD', trailingZeroDisplay: 'stripIfInteger'}

  function showCurr(amount) {
    if (amount === 0) return 'NONE'
    return new Intl.NumberFormat('en-US', curr).format(amount)
  }

  
  const priceTweened = tweened(0, { duration: 400, easing: cubicOut })
  
  $: protectionIndex = protection == 'static' ? 0 : 1
  $: protection, priceTweened.set(prices[protectionIndex].amount)
</script>

<div class="p-4 w-full flex-1 ring-1 {popular? 'ring-main bg-zinc-900' : 'ring-white/10 bg-black/50 backdrop-blur-sm'} xl:p-8 relative">
  <div class="flex items-center justify-between gap-x-4">
    <h3 id="tier-{name.toLowerCase()}" class="text-white uppercase text-2xl sm:text-3xl lg:text-2xl">{name}</h3>
    {#if popular}
      <p class="rounded-full bg-main px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
    {/if}
  </div>
  <p class="inline font-mono text-zinc-400">{description}</p>
  <p class="mt-6 flex items-baseline gap-x-1">
    <span class="text-4xl font-semibold tracking-tight text-white font-mono w-20">${$priceTweened.toFixed(0)}</span>
    <span class="text-sm font-semibold leading-6 text-zinc-300">/one-time fee</span>
  </p>
  <a href={link} aria-describedby="tier-{name.toLowerCase()}" class="mt-6 transition-all duraiton-300 tracking-wider block px-3 py-2 text-center font-semibold leading-6 text-white ring-1 {popular? 'bg-main shadow-xl ring-main hover:ring-4 focus-visible:outline-main' : 'bg-white/10 hover:bg-black ring-white/30 hover:ring-main focus-visible:outline-white'}  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Start Trading</a>
  <ul role="list" class="mt-8 text-sm lg:text-base leading-6 text-zinc-400 xl:mt-10 divide-y divide-zinc-400">
    <li class="flex gap-x-3 justify-between text-lg text-white">
      <span>Starting capital <b>{showCurr(startingCapital)}</b></span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="font-mono">Contracts:</span>
      <span class="font-bold text-white">{contracts[protectionIndex].amount}</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="font-mono">Earnings Target:</span>
      <span class="font-bold text-white">{showCurr(targets[protectionIndex].amount)}</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="font-mono">Trailing Threshold:</span>
      <span class="font-bold text-white">{showCurr(thresholds[protectionIndex].amount)}</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="font-mono">{protectionIndex == 1? 'Daily' : 'Total'} Drawdown:</span>
      <span class="font-bold text-white">{showCurr(drawdowns[protectionIndex].amount)}</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="font-mono">Scaling:</span>
      <span class="font-bold text-white">NONE</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="flex flex-col items-start">
        <span class="font-mono">Real-Time Data Fees:</span>
        <span class="text-xs inline bg-green-400 px-1 py-px font-bold text-black">($55 Value)</span>
      </span>
      <span class="font-bold text-white">INCLUDED</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="flex flex-col items-start">
        <span class="font-mono">Quantower License:</span>
        <span class="text-xs inline bg-green-400 px-1 py-px font-bold text-black">($70 Value)</span>
      </span>
      <span class="font-bold text-white">INCLUDED</span>
    </li>
    <li class="flex items-center py-1.5 gap-x-3 justify-between">
      <span class="flex flex-col items-start">
        <span class="font-mono">MotionWave License:</span>
        <span class="text-xs inline bg-green-400 px-1 py-px font-bold text-black">($49 Value)</span>
      </span>
      <span class="font-bold text-white">INCLUDED</span>
    </li>

  </ul>
</div>