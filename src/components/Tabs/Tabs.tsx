import React from "react";
import cn from "classnames";

import styles from "./Tabs.module.css";
import TabItem from "./TabsItem";

export interface Tab {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface TabsProps {
  activeTab: Tab["value"];
  tabs: Tab[];
  onTabClick: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, tabs, onTabClick }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <TabItem
            key={tab.label}
            tab={tab}
            onTabClick={onTabClick}
            className={cn({ [styles.active]: activeTab === tab.value })}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
