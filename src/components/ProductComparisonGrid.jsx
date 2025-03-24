import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/solid';

const ProductComparisonGrid = ({ products, features }) => {
    const highlightIndex = Math.floor(products.length / 2); // Highlight middle product

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#1bb8d7]">Compare Our Products</h2>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-[#1bb8d7] text-white">
                        <tr>
                            <th className="text-left p-4">Features</th>
                            {products.map((product, index) => (
                                <th key={index} className={`text-center p-4 ${index === highlightIndex ? 'bg-[#139cb7]' : ''}`}>{product.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, rowIndex) => (
                            <tr key={rowIndex} className="border-t">
                                <td className="p-4 font-medium text-gray-700">
                                    <div className="relative group">
                                        {feature.label}
                                        <span className="absolute hidden group-hover:block text-xs text-white bg-gray-800 px-2 py-1 rounded-md -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10">
                                            {feature.tooltip}
                                        </span>
                                    </div>
                                </td>
                                {!feature.values ? (
                                  <td colSpan={products.length} className="text-center text-red-500">
                                    Missing values for: {feature.label}
                                  </td>
                                ) : (
                                  feature.values.map((val, colIndex) => (
                                    <td key={colIndex} className={`text-center p-4 ${colIndex === highlightIndex ? 'bg-gray-300' : ''}`}>
                                      {val ? (
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 mx-auto" />
                                      ) : (
                                        <XCircleIcon className="w-6 h-6 text-red-400 mx-auto" />
                                      )}
                                    </td>
                                  ))
                                )}
                            </tr>
                        ))}
                        <tr className="border-t">
                            <td></td>
                            {products.map((_, i) => (
                                <td key={i} className="text-center py-6">
                                    <button className="bg-[#1bb8d7] hover:bg-[#139cb7] text-black font-medium px-4 py-2 rounded">
                                        Contact Sales
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-8">
                {products.map((product, colIndex) => (
                    <div key={colIndex} className={`border rounded-lg shadow-md p-6 ${colIndex === highlightIndex ? 'border-[#1bb8d7]' : ''}`}>
                        <h3 className="text-xl font-bold text-center mb-4 text-[#1bb8d70]">{product.name}</h3>
                        <ul className="space-y-3">
                            {features.map((feature, rowIndex) => (
                                <li key={rowIndex} className="flex justify-between items-center border-b pb-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        {feature.label}
                                    </span>
                                    {feature.values[colIndex] ? (
                                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <XCircleIcon className="w-5 h-5 text-red-400" />
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center mt-6">
                            <button className="bg-[#1bb8d7] hover:bg-[#139cb7] text-white font-medium px-4 py-2 rounded">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductComparisonGrid