import React from "react";
import {areas} from "@/lib/constants/constants";

const AreaSelect = () => {
  return (
    <div className="text-white">
      <select name="areas" id="areas" className="bg-foreground border-2 border-white m-5 p-2">
        {areas.map((area) => (
          <option value={area}>{area}</option>
        ))}
      </select>
    </div>
  );
};

export default AreaSelect;
