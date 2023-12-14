import Content from "./components/Content";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

export default function App() {
  return (
    <main className="flex flex-row">
      <LeftSideBar/>

      <section className="main-container">

        <div className="w-full bg-[#f5f6fa] max-w-6xl">

          <Content/>

        </div>

      </section>
      <RightSideBar/>

    </main>
  )
}