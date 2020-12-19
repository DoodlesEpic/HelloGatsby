import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Container>
  )
}
