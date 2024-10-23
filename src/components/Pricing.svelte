<script>
  // Change to $25k, $50k !important, $150k
  // Trade Instantly - New CTA
  // 
  import PricingCard from './PricingCard.svelte';
  let protection = 'trailing';
  let plans = [
    {
      name: 'Recruit',
      link: '#',
      description: 'Start funding your future.',
      popular: false,
      startingCapital: 50000,
      prices: [
        { protection: 'static', amount: 120 },
        { protection: 'trailing', amount: 190 }
      ],
      contracts: [
        {
          protection: 'static', amount: '1 [10 Micros]',
        },
        {
          protection: 'trailing', amount: '5 [50 Micros]',
        }
      ],
      targets: [
        {
          protection: 'static', amount: 1500,},
        {
          protection: 'trailing', amount: 3000,
        }
      ],
      thresholds: [
        {
          protection: 'static', amount: 0,},{
          protection: 'trailing', amount: 2500,
        }
      ],
      drawdowns: [
        {
          protection: 'static', amount: 360,},{
          protection: 'trailing', amount: 0,
        }
      ],
    },
    {
      name: 'Mover',
      link: '#',
      description: 'Shake up the market.',
      popular: true,
      startingCapital: 150000,
      prices: [
        { protection: 'static', amount: 150 },
        { protection: 'trailing', amount: 350 }
      ],
      contracts: [
        {
          protection: 'static', amount: '2 [20 Micros]',},{
          protection: 'trailing', amount: '12 [120 Micros]',
        }
      ],
      targets: [
        {
          protection: 'static', amount: 2700,},{
          protection: 'trailing', amount: 8500,
        }
      ],
      thresholds: [
        {
          protection: 'static', amount: 0,},{
          protection: 'trailing', amount: 4500,
        }
      ],
      drawdowns: [
        {
          protection: 'static', amount: 660,},{
          protection: 'trailing', amount: 0,
        }
      ],
    },
    {
      name: 'Titan',
      link: '#',
      description: 'Take your trading to the max.',
      popular: false,
      startingCapital: 300000,
      prices: [
        { protection: 'static', amount: 170 },
        { protection: 'trailing', amount: 525 }
      ],
      contracts: [
        {
          protection: 'static', amount: '2 [20 Micros]',},{
          protection: 'trailing', amount: '20 [200 Micros]',
        }
      ],
      targets: [
        {
          protection: 'static', amount: 3200,},{
          protection: 'trailing', amount: 15000,
        }
      ],
      thresholds: [
        {
          protection: 'static', amount: 0,},{
          protection: 'trailing', amount: 7000,
        }
      ],
      drawdowns: [
        {
          protection: 'static', amount: 740,},{
          protection: 'trailing', amount: 0,
        }
      ],
    },

  ]
</script>

<!-- <div class="mt-16 flex flex-col justify-center items-center">
  <fieldset aria-label="Risk protection">
    <div class="grid grid-cols-2 font-mono bg-white/5 text-center font-thin leading-5 text-white ring-1 ring-main">
      <label class="cursor-pointer px-2.5 py-1.5 {protection == 'static'? 'bg-main' : ' hover:bg-white/10'}">
        <input bind:group={protection} type="radio" name="protection" value="static" class="sr-only">
        <span>Static</span>
      </label>
      <label class="cursor-pointer px-2.5 py-1.5 {protection == 'trailing'? 'bg-main' : ' hover:bg-white/10'}">
        <input bind:group={protection} type="radio" name="protection" value="trailing" class="sr-only">
        <span>Trailing</span>
      </label>
    </div>
  </fieldset>
  <button class="text-main underline underline-offset-2 font-medium text-sm mt-2">What's the difference between Static and Trailing?</button>
</div> -->
<div class="isolate mx-auto mt-10 grid max-w-md w-full grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
  {#each plans as plan}
    <PricingCard
      name={plan.name}
      description={plan.description}
      startingCapital={plan.startingCapital}
      prices={plan.prices}
      contracts={plan.contracts}
      thresholds={plan.thresholds}
      targets={plan.targets}
      drawdowns={plan.drawdowns}
      popular={plan.popular}
      link={plan.link}
      {protection}
    />
  {/each}
</div>