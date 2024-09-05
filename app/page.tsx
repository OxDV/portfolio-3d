import dynamic from 'next/dynamic';
import '../styles/styles.css'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul id='navigation-buttons'>
            <li>Logo</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Write to Email</li>
          </ul>
        </nav>
      </header>
      <main>
        <h3 id='title-section1'>Absolute Web Studio</h3>
        <Scene/>
      </main>
    </div>
  );
}
