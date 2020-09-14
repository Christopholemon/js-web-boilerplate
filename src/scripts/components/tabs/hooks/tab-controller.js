// On clicking tab, change state and show/hide different

import { useState } from "react";

export default function useTabController(initial) {
  const [currentTab, setCurrentTab] = useState(initial || 0); // default to showing first tab

  function handleClick(click) {
    let tempValue = parseInt(click.currentTarget.dataset.tabKey),
        elem = click.currentTarget.dataset.tabElem;

    // check if desktop tab or accordion tab for close on click currently open tab
    if (currentTab === tempValue && elem !== 'desktop-tab') tempValue = null;

    setCurrentTab(tempValue);
  };

  return {
    currentTab, 
    onClick: handleClick
  }
}