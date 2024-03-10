import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Favoritos } from "../pages/Favoritos"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"

export function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}