import { SideBar } from "@/widgets/sidebar/lib/sidebar-data";
import styles from "../styles/sidebar.module.scss";
const SidebarItem = ({ item }: { item: SideBar }) => {
  return (
    <div className={styles.root}>
      {item.icon}
      <p className={styles.text}>{item.title}</p>
    </div>
  );
};

export default SidebarItem;
