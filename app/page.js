import JOBS from "../data.json"
import Listings from "./components/Listings"
import Header from "./components/Header"
import Attribution from "./components/Attribution"

export default function Home() {
  return (
    <main>
      <Header />
      {JOBS.map((job) => (
        <Listings key={job.id} {...job} />
      ))}
      <Attribution />
    </main>
  )
}
