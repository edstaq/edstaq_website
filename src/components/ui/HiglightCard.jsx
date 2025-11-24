import React from 'react'

function HiglightCard({title ,sub ,desc}) {
  return (
		<div className="bg-white p-8 lg:p-7 md:p-5 sm:p-3 shadow-sm rounded-2xl md:rounded-xl sm:rounded-lg flex flex-col items-center justify-center max-w-64 aspect-square">
			<h5 className="text-xl sm:text-lg font-[500]">{title}</h5>
			<p className="text-sm font-[500] uppercase mb-6 lg:mb-5 md:mb-4 sm:mb-3">
				{sub}
			</p>
			<span className="text-xs text-wrap text-center text-gray-400">
				{desc}
			</span>
		</div>
  );
}

export default HiglightCard