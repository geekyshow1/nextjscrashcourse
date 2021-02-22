import Link from 'next/link'
export default function Navbar() {
 return (
  <nav>
   <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
    <li><Link href="/contact"><a>Contact</a></Link></li>
   </ul>
  </nav>
 )
}