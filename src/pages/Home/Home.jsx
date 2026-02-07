import Hero from "../../components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />

      {/* ABOUT */}
      <section className="section about">
        <h2>About Ajay Binay Institute of Technology</h2>
        <p>
          Ajay Binay Institute of Technology (ABIT), Cuttack is a premier technical
          institution approved by AICTE and affiliated to BPUT, Odisha. The
          institute is committed to academic excellence, innovation, and holistic
          development of students.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="section programs">
        <h2>Academic Programs</h2>
        <div className="grid">
          <div className="card">B.Tech – CSE</div>
          <div className="card">B.Tech – ECE</div>
          <div className="card">B.Tech – EE</div>
          <div className="card">B.Tech – ME</div>
          <div className="card">MBA</div>
          <div className="card">Diploma Programs</div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section highlights">
        <h2>Why Choose ABIT</h2>
        <div className="grid">
          <div className="card">AICTE Approved</div>
          <div className="card">Experienced Faculty</div>
          <div className="card">Industry-Oriented Curriculum</div>
          <div className="card">Modern Laboratories</div>
        </div>
      </section>

      {/* NOTICES */}
      <section className="section notices">
        <h2>Notices & Announcements</h2>
        <ul>
          <li>📢 BPUT Semester Examination Notice</li>
          <li>📢 Admission Open for 2025–26</li>
          <li>📢 AICTE Mandatory Disclosure Updated</li>
        </ul>
      </section>

      {/* PLACEMENTS */}
      <section className="section placements">
        <h2>Placement Highlights</h2>
        <div className="stats">
          <div><strong>120+</strong><span>Companies</span></div>
          <div><strong>85%</strong><span>Placement Rate</span></div>
          <div><strong>₹6 LPA</strong><span>Highest Package</span></div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="section campus">
        <h2>Campus Life</h2>
        <p>
          ABIT offers a vibrant campus environment with technical clubs, cultural
          events, sports facilities, and innovation-driven student communities.
        </p>
      </section>

    </>
  );
};

export default Home;
