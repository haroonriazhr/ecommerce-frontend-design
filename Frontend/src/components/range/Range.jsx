import React, { useState } from 'react';
const Range = () => {
    const [minPrice, setMinPrice] = useState(300);
    const [maxPrice, setMaxPrice] = useState(700);
    const rangeMin = 100;
    const maxRange = 1000;

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        let min = name === 'min' ? parseInt(value) : minPrice;
        let max = name === 'max' ? parseInt(value) : maxPrice;

        if (max - min >= rangeMin) {
            if (name === 'min') {
                setMinPrice(min);
            } else {
                setMaxPrice(max);
            }
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-lg mx-auto p-6">
            <div className="relative w-full h-2 bg-gray-300 rounded">
                <div className="absolute bg-blue-500 h-2 rounded"
                     style={{
                         left: `${(minPrice / maxRange) * 100}%`,
                         right: `${100 - (maxPrice / maxRange) * 100}%`
                     }}>
                </div>
                <input
                    type="range"
                    className="absolute w-full h-2 opacity-0 pointer-events-none"
                    name="min"
                    min="0"
                    max={maxRange}
                    value={minPrice}
                    onChange={handleRangeChange}
                />
                <input
                    type="range"
                    className="absolute w-full h-2 opacity-0 pointer-events-none"
                    name="max"
                    min="0"
                    max={maxRange}
                    value={maxPrice}
                    onChange={handleRangeChange}
                />
            </div>

            <div className="flex justify-between w-full mt-6">
                <div className="flex items-center">
                    <label className="mr-2">Min</label>
                    <input
                        type="number"
                        className="border p-2 rounded w-24"
                        name="min"
                        value={minPrice}
                        onChange={handleRangeChange}
                    />
                </div>
                <div className="flex items-center">
                    <label className="mr-2">Max</label>
                    <input
                        type="number"
                        className="border p-2 rounded w-24"
                        name="max"
                        value={maxPrice}
                        onChange={handleRangeChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Range;
