import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Download, Mail, ExternalLink, Play } from "lucide-react";

/* ==========================================================
   🖼️ Profile Slideshow
   ========================================================== */
function ProfileImage() {
  const images = ["/assets/dhruvi1.jpg", "/assets/dhruvi2.jpg"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <img
      src={images[index]}
      alt="Dhruvi Joshi"
      className="w-40 h-40 rounded-full object-cover shadow-md transition-all duration-700 ease-in-out"
    />
  );
}

/* ==========================================================
   🏠 Home Page (original layout preserved)
   ========================================================== */
function Home() {
  const featured = [
    {
      title: "Aerial Manipulator: Contact-Force Realization",
      role: "Master’s Thesis • INDUS Lab, IIT Bombay",
      badges: ["Modeling & Control", "VICON + XBee", "Force Regulation"],
      blurb:
        "Developed a single-link aerial passive manipulator capable of contact-force regulation using feedback-linearized trajectory generation and PID inner control.",
      link: "/aerial-manipulator",
    },
    {
      title: "Flexible Inverted Pendulum on Rotary Hub",
      role: "S.M. Lab • Prof. Prasanna Gandhi",
      badges: ["Buckled Beam", "Multi-Equilibria", "Validation"],
      blurb:
        "Explored static equilibria and bifurcations of a buckled flexible beam with tip mass on a rotating hub.",
      link: "/flexible-pendulum",
    },
    {
      title: "6-DoF Delta Cranial Exoskeleton",
      role: "BSBRL • Univ. of Minnesota",
      badges: ["Impedance Control", "Calibration", "IK/Jacobians"],
      blurb:
        "Upgraded a 3DoF delta exoskeleton robot to 6DoF for cranial motion tracking for neuroscience experiments",
      link: "/delta-exo",
    },
    {
      title: "Pendubot — Swing-up + LQR Stabilization",
      role: "Underactuated Robotics • IIT Bombay",
      badges: ["Swing-up", "LQR", "Hardware Prototype"],
      blurb:
        "Built and tested a 2-link underactuated manipulator performing swing-up and stabilization using LQR.",
      link: "/pendubot",
    },
  ];

  const gallery = [
    { type: "image", src: "/assets/hover_helical.png" },
    { type: "video", src: "/assets/loadcell_rig.mp4" },
    { type: "image", src: "/assets/hub_angle_map.jpg", caption: "Hub angle vs. equilibria map — multi-stability regions." },
    { type: "image", src: "/assets/welding_robot.png", caption: "Vision-guided welding path stabilization." },
  ];

  const cvUrl = "/assets/Dhruvi_Joshi_CV.pdf";
  const email = "dhruvijoshi@iitb.ac.in";

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-indigo-50 via-white to-gray-50">
      {/* ===== NAV ===== */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          <span className="font-semibold tracking-tight text-lg">Dhruvi Joshi</span>
          <div className="flex gap-4">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              <Download className="h-4 w-4" /> CV
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-[0.8fr_2.1fr_0.9fr] gap-12 items-center">          {/* ===== Left block: Photo + Research Interests ===== */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/dhruvi.jpg"
              alt="Dhruvi Joshi"
              className="w-70 h-80 rounded-full object-cover shadow-xl ring-4 ring-white/70"
            />
          </div>
          <div className="text-center md:text-center">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Dhruvi Joshi
            </h1>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-700 max-w-2xl text-center">
              Dual Degree (B.Tech + M.Tech) | Mechanical Engineering, IIT Bombay.  
              My research explores the intersection of <strong>robotics, controls, and
              compliant system design</strong> combining analytical modeling, simulation,
              and hands-on experimentation to develop intelligent, force-aware
              robotic platforms.
            </p>
              
          </div>
          

          {/* ===== Right block: Name + Introduction ===== */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
                Research Interests
              </h2>
              <p className="text-[15px] md:text-base text-gray-700 leading-relaxed max-w-sm mt-1">
                Manipulators • Compliant & soft mechanisms •
                Surgical & bio-inspired robotics •
                Wearable Devices •
                Aerial Robotics
              </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6">
              <Link to={f.link} className="text-xl font-medium text-blue-700 hover:underline">{f.title}</Link>
              <p className="text-sm text-gray-500 mt-1">{f.role}</p>
              <p className="mt-3 text-sm text-gray-700">{f.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {f.badges.map((b, bi) => (
                  <span key={bi} className="inline-block rounded-full text-xs px-3 py-1 border border-gray-300 bg-gray-50">{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Other Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((g, gi) => (
            <div key={gi}>
              {g.type === "video" ? (
                <video src={g.src} controls className="w-full rounded-xl shadow-md" />
              ) : (
                <img src={g.src} alt="gallery" className="w-full rounded-xl shadow-md" />
              )}
              <p className="mt-2 text-xs md:text-sm text-gray-700">{g.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DOCS & CONTACT ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Docs & Contact</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-medium mb-2">Curriculum Vitae</h3>
            <p className="text-sm text-gray-600 mb-3">Full academic and research details.</p>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50 text-sm">
              <Download className="h-4 w-4" /> View CV
            </a>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-medium mb-2">Contact</h3>
            <p className="text-sm text-gray-600 mb-3">Reach out for collaboration or PhD opportunities.</p>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white px-4 py-2 hover:bg-black text-sm">
              <Mail className="h-4 w-4" /> {email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ==========================================================
   📄 Individual Project Pages
   ========================================================== */
function ProjectPage({ title, description, report, media }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
        <h1 className="text-3xl font-semibold mt-4 mb-4">{title}</h1>
        <p className="text-gray-700 mb-6 max-w-3xl">{description}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {media.map((m, i) =>
            m.type === "video" ? (
              <video key={i} src={m.src} controls poster={m.poster} className="w-full rounded-xl shadow-md" />
            ) : (
              <img key={i} src={m.src} alt={title} className="rounded-xl shadow-md object-cover" />
            )
          )}
        </div>
        <a href={report} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
          <ExternalLink className="h-4 w-4" /> View Full Report
        </a>
      </div>
    </div>
  );
}

/* Project Pages */
const AerialManipulator = () => (
  <ProjectPage
    title="Aerial Manipulator: Contact-Force Realization"
    description="Demonstrates a single-link aerial manipulator performing contact-force control using feedback linearization and VICON feedback."
    report="https://drive.google.com/file/d/1tZmmJvrWWC2c5sxZVUUt6zjCYArHKdQQ/view?usp=sharing"
    media={[
      { type: "video", src: "/assets/drone.mp4", poster: "/assets/drone_img.jpg" },
      { type: "image", src: "/assets/quad_force_setup.jpg" },
      { type: "image", src: "/assets/quad_force_plot.jpg" },
    ]}
  />
);

const FlexiblePendulum = () => (
  <ProjectPage
    title="Flexible Inverted Pendulum on Rotary Hub"
    description="Analyzes multi-stability and buckling in flexible pendulums under hub rotation with static and dynamic validation."
    report="https://drive.google.com/your-pendulum-report"
    media={[
      { type: "image", src: "/assets/0_upright.png" },
      { type: "image", src: "/assets/FINAL_eta_equ.jpg" },
    ]}
  />
);

const DeltaExo = () => (
  <ProjectPage
    title="6-DoF Delta Cranial Exoskeleton"
    description="A head-centric impedance-controlled exoskeleton with precise multi-frame transformations and motion tracking."
    report="https://drive.google.com/your-exo-report"
    media={[
      { type: "image", src: "/assets/delta1.jpg" },
      { type: "image", src: "/assets/delta2.jpg" },
    ]}
  />
);

const Pendubot = () => (
  <ProjectPage
    title="Pendubot — Swing-up + LQR Stabilization"
    description="Implements swing-up and stabilization control using LQR on a custom 2-link underactuated robot arm."
    report="https://drive.google.com/your-pendubot-report"
    media={[
      { type: "video", src: "/assets/pendubot_swingup.mp4", poster: "/assets/pendubot_poster.jpg" },
      { type: "image", src: "/assets/pendubot_closeup.jpg" },
    ]}
  />
);

/* ==========================================================
   🧭 Main Router
   ========================================================== */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerial-manipulator" element={<AerialManipulator />} />
        <Route path="/flexible-pendulum" element={<FlexiblePendulum />} />
        <Route path="/delta-exo" element={<DeltaExo />} />
        <Route path="/pendubot" element={<Pendubot />} />
      </Routes>
    </Router>
  );
}
