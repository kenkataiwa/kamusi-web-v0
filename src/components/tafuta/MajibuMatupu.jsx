import React from "react";

export default function MajibuMatupu(props) {
  if (props.maneno.length !== 0 || props.nahau.length !== 0)
    return <React.Fragment />;

  return (
      <div className="no-results">
        Samahani, neno au nahau uliyotafuta haipo kwenye kumbukumbu zetu.
      </div>
  );
}
