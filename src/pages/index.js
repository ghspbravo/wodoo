import * as React from "react"
import Benefits from "../components/Benefits/Benefits"
import Catalogue from "../components/Catalogue/Catalogue"
import EntranceBanner from "../components/EntranceBanner/EntranceBanner"
import Reviews from "../components/Reviews/Reviews"
import MainLayout from "../components/_Layouts/MainLayout"

const IndexPage = () => {
  return (
    <MainLayout title="Wild Wodoo">
      <EntranceBanner />
      <Benefits />
      <Catalogue />
      <Reviews />
    </MainLayout>
  )
}

export default IndexPage
