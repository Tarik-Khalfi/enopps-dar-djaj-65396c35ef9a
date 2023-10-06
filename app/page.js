import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import SpecialDish from "./components/SpecialDish";
import Video from "./components/Video";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Main />
      <Menu />
      <SpecialDish />
      <Video />
    </main>
  );
}
