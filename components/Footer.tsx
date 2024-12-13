// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-background-secondary py-6 text-center text-text-secondary">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Aritra Adhikary. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  