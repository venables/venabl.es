import { render } from "@testing-library/react"

import Page from "./page"

test("the page renders the app title and tagline", () => {
  const { getByText } = render(<Page />)
  const main = getByText("StartKit")
  const subtitle = getByText(/A sane way to start/)

  expect(main).toBeInTheDocument()
  expect(subtitle).toBeInTheDocument()
})
