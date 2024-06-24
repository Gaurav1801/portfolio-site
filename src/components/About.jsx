import React from 'react'

export default function About() {
  return (
    <div>
      <section id='About' className="container bg-gradient-to-b from-blue-900 to-blue-400 h-96">
        <h1 className="text-4xl text-center from-neutral-700 to-slate-500 font-serif font-bold pt-14">About</h1>
        <div className="mt-12 grid grid-rows-2 gap-4">
            <div className="row-span-1">k</div>
            <div className="row-span-1">6</div>

            {/* <strong className='text-2xl px-28'> ** schooling </strong>
            <p className='text-2xl'>Bhaktaashram Ashramshala Eng. Med. School </p>
            <p className='text-2xl'>HSC - 70%</p>
            <p className='text-2xl'>SSC - 83%</p> */}
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">01</div>
  <div class="col-span-2 ...">02</div>
  <div class="row-span-2 col-span-2 ...">03</div>
</div>
      </section>
    </div>
  )
}
