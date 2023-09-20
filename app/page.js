import JOBS from "../data.json"
import Listings from "./components/Listings"
import Header from "./components/header"
import Attribution from "./components/attribution"

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
