import React from 'react';


const Filters = ({ category, country, onCategoryChange, onCountryChange }) => {
  return (
    <div className="flex space-x-4 w-full flex-col lg:flex-row md:flex-row gap-4 lg:gap-0 md:gap-0">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300"
        required
      >
        <option value="">Select Category</option>
        <option value="general">General</option>
        <option value="world">World</option>
        <option value="nation">Nation</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option> 
      </select>
      <select
        value={country}
        onChange={(e) => onCountryChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300"
        required
      >
        <option value="">Select Country</option>
        <option value="au">Australia</option>
        <option value="br">Brazil</option>
        <option value="ca">Canada</option>
        <option value="cn">China</option>
        <option value="eg">Egypt</option>
        <option value="fr">France</option>
        <option value="de">Germany</option>
        <option value="gr">Greece</option>
        <option value="hk">Hong Kong</option>
        <option value="in">India</option>
        <option value="ie">Ireland</option>
        <option value="il">Israel</option>
        <option value="it">Italy</option>
        <option value="jp">Japan</option>
        <option value="nl">Netherlands</option>
        <option value="no">Norway</option>
        <option value="pk">Pakistan</option>
        <option value="pe">Peru</option>
        <option value="ph">Philippines</option>
        <option value="pt">Portugal</option>
        <option value="ro">Romania</option>
        <option value="ru">Russian Federation</option>
        <option value="sg">Singapore</option>
        <option value="se">Sweden</option>
        <option value="ch">Switzerland</option>
        <option value="tw">Taiwan</option>
        <option value="ua">Ukraine</option>
        <option value="gb">United Kingdom</option>
        <option value="us">United States</option>
      </select>
    </div>
  );
};

export default Filters;