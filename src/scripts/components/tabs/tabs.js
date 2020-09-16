import React from "react";
import { useFetchData } from '../../utils/index';
import { useTabController } from './hooks';
import { LoadingSpinner } from '../../shared';

function Tabs() {
  const data = useFetchData('static/data.json');
  const haveData = !!data;
  const tabController = useTabController(0); // set default to the first tab

  return (
    <>
      { 
        /* 
          **TODO** Need to figure out exporting templates with Hooks
        */

        !!haveData ? 
        <section className="tabs">
          <div className="grid grid--col-four tabs__tabs">
            { data.map( (e,i) => {
                return (
                  <h4 
                    key={"tabs-title" + i} 
                    id={"tabs-title-" + i}
                    className={`button tabs__title ${i === tabController.currentTab ? 'active' : ''}`} 
                    data-tab-key={i} 
                    data-tab-elem="desktop-tab"
                    onClick={tabController.onClick}
                  >
                      {e.title}
                  </h4>
                )
              })}
          </div>
          <div className="tabs__body-container">
            { data.map( (e,i) => {
                return (
                  <div
                    key={"tabs-body-row-" + i} 
                    id={"tabs-body-" + i} 
                    className={`tabs__body ${i === tabController.currentTab ? 'active' : ''}`} 
                    data-tab-key={i}
                    data-tab-elem="body-tab"
                    onClick={tabController.onClick}
                  >
                    <h5 className="tabs__body-title">{e.title}</h5>
                    <div className="tabs__body-content" dangerouslySetInnerHTML={{__html: e.content}} />
                  </div>
                )
            })}
          </div>
        </section>
        :
        <LoadingSpinner />
      }
    </>
  );
}

export default Tabs;
