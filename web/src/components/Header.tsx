import marvel from "../assets/marvel-logo.webp"

export function Header() {
  return (
    <header className="h-20 min-h-20 w-full bg-primary flex justify-center">
      <div className="h-full max-w-5xl w-full flex items-center px-4">
        <img src={marvel} alt="" className="h-16" />
      </div>
    </header>
  )
}