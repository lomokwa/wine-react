const gitHubLink = "https://github.com/lomokwa"
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>&copy;{currentYear}</p>
      <p><a href={gitHubLink} target="_blank" rel="noreferrer">GitHub Repository</a></p>
    </footer>
  )
}