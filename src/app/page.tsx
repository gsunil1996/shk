import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import MenuItemsList from "@/components/menuitemslist/MenuItemsList";

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ marginTop: "4rem" }}>
        <MenuItemsList />
      </div>
    </>
  );
}
