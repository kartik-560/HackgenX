

import React from 'react'
import { Trophy } from 'lucide-react'
function PrizePool() {
  return (
    
<section id="prizes" className="py-20 px-6 bg-slate-900">
<div className="max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-white text-center mb-16">Prize Pool</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
      <Trophy className="text-yellow-500 w-16 h-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">First Prize</h3>
      <p className="text-3xl font-bold text-purple-500 mb-4">₹75,000</p>
      <p className="text-gray-400">Internship opportunities & many more exciting prizes</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
      <Trophy className="text-gray-400 w-16 h-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Second Prize</h3>
      <p className="text-3xl font-bold text-purple-500 mb-4">₹50,000</p>
      <p className="text-gray-400">Internship opportunities & many more exciting prizes</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-1 transition-transform">
      <Trophy className="text-orange-500 w-16 h-16 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Third Prize</h3>
      <p className="text-3xl font-bold text-purple-500 mb-4">₹25,000</p>
      <p className="text-gray-400">Internship opportunities & many more exciting prizes</p>
    </div>
  </div>
</div>
</section>
  )
}

export default PrizePool
