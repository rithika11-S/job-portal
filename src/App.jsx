// import { useState } from "react";
// import Seeker from "./components/Seeker";
// import Home from "./components/Home";
// import Recommentation from "./components/Recommentation";
// import Header from "./components/Header";

// import jobsData from "./data/data.json";     // using your file name
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("Home");
//   const [jobs, setJobs] = useState(jobsData);
//   const [seekerdata, setSeekerdata] = useState();
//   const [bigText, setBigText] = useState(false);

//   function handleSeekerSubmit(data) {
//     setSeekerdata(data);
//     setPage("Recommentation");
//   }

//   return (
//     <div className={bigText ? "big-text" : ""}>
//       <Header setPage={setPage} setBigText={setBigText} />

//       {page === "Home" && <Home />}
//       {page === "Seeker" && <Seeker onSubmit={handleSeekerSubmit} />}
//       {page === "Recommentation" && (
//         <Recommentation seeker={seekerdata} jobs={jobs} />
//       )}
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import Seeker from "./components/Seeker";
// import Home from "./components/Home";
// import Recommentation from "./components/Recommentation";
// import Header from "./components/Header";
// import Employer from "./components/Employer";   

// import jobsData from "./data/data.json";    
// import "./App.css";

// function App() {
//   function speak(text) {
//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "en-US";
//     speech.rate = 1;
//     speech.pitch = 1;
//     window.speechSynthesis.speak(speech);
//   }

//   // Load jobs from localStorage or JSON as fallback
//   const [jobs, setJobs] = useState(() => {
//     const saved = localStorage.getItem("jobs");
//     return saved ? JSON.parse(saved) : jobsData;
//   });

//   const [page, setPage] = useState("Home");
//   const [seekerdata, setSeekerdata] = useState();
//   const [bigText, setBigText] = useState(false);

//   // Add job function — update localStorage
//   function addJob(job) {
//     setJobs((prev) => {
//       const updated = [...prev, job];
//       localStorage.setItem("jobs", JSON.stringify(updated)); // save persistently
//       return updated;
//     });
//     speak("Job added successfully!");
//   }

//   function handleSeekerSubmit(data) {
//     setSeekerdata(data);
//     speak("Form submitted successfully, showing recommended jobs");
//     setPage("Recommentation");
//   }

//   return (
//     <div className={bigText ? "big-text" : ""}>
//       <Header setPage={setPage} setBigText={setBigText} />

//       {page === "Home" && <Home />}
//       {page === "Seeker" && <Seeker onSubmit={handleSeekerSubmit} />}
//       {page === "Employer" && <Employer addJob={addJob} />} 
//       {page === "Recommentation" && (
//         <Recommentation seeker={seekerdata} jobs={jobs} />
//       )}
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import Seeker from "./components/Seeker";
// import Home from "./components/Home";
// import Recommentation from "./components/Recommentation";
// import Header from "./components/Header";
// import Employer from "./components/Employer";

// import jobsData from "./data/data.json";
// import "./App.css";

// function App() {

//   // Custom voice reader
//   function speak(text) {
//     window.speechSynthesis.cancel();  // stop overlapping voices
//     const speech = new SpeechSynthesisUtterance(text);
//     speech.lang = "en-US";
//     speech.rate = 1;
//     speech.pitch = 1;
//     window.speechSynthesis.speak(speech);
//   }

//   // Enable voice everywhere automatically
//   useEffect(() => {
//     document.addEventListener("focusin", (e) => {
//       if (e.target && e.target.getAttribute("aria-label")) {
//         speak(e.target.getAttribute("aria-label"));
//       } else if (e.target && e.target.innerText) {
//         speak(e.target.innerText);
//       }
//     });

//     document.addEventListener("mouseover", (e) => {
//       if (e.target && e.target.getAttribute("aria-label")) {
//         speak(e.target.getAttribute("aria-label"));
//       }
//     });
//   }, []);

//   // Load jobs from localStorage OR json file
//   const [jobs, setJobs] = useState(() => {
//     const saved = localStorage.getItem("jobs");
//     return saved ? JSON.parse(saved) : jobsData;
//   });

//   const [page, setPage] = useState("Home");
//   const [seekerdata, setSeekerdata] = useState();
//   const [bigText, setBigText] = useState(false);

//   function addJob(job) {
//     setJobs(prev => {
//       const updated = [...prev, job];
//       localStorage.setItem("jobs", JSON.stringify(updated));
//       return updated;
//     });
//     speak("Job added successfully");
//   }

//   function handleSeekerSubmit(data) {
//     setSeekerdata(data);
//     speak("Form submitted. Showing recommended jobs.");
//     setPage("Recommentation");
//   }

//   return (
//     <div className={bigText ? "big-text" : ""}>
//       <Header setPage={setPage} setBigText={setBigText} speak={speak} />

//       {page === "Home" && <Home speak={speak} />}
//       {page === "Seeker" && <Seeker onSubmit={handleSeekerSubmit} speak={speak} />}
//       {page === "Employer" && <Employer addJob={addJob} speak={speak} />}
//       {page === "Recommentation" && (
//         <Recommentation seeker={seekerdata} jobs={jobs} speak={speak} />
//       )}
//     </div>
//   );
// }

// export default App;

//  import { useState, useEffect } from "react";
// import Seeker from "./components/Seeker";
// import Home from "./components/Home";
// import Recommentation from "./components/Recommentation";
// import Header from "./components/Header";
// import Employer from "./components/Employer";

// import jobsData from "./data/data.json";
// import "./App.css";

// function App() {
//  // ============= SPEAK FUNCTION (CUSTOM NARRATOR) =============
//    function speak(text) {
// if (!text) return;
//      window.speechSynthesis.cancel();  // stop previous voice
//      const speech = new SpeechSynthesisUtterance(text);
//      speech.lang = "en-US";
//      speech.rate = 1;
//      speech.pitch = 1;
//     window.speechSynthesis.speak(speech);
//   }

//   // ============= GLOBAL LISTENERS FOR VOICE EVERYWHERE =============
//   useEffect(() => {
//     function handleSpeak(e) {
//       let text = "";

//       // Input / Select / Textarea
//       if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) {
//         text =
//           e.target.placeholder ||
//           e.target.ariaLabel ||
//           e.target.value ||
//           "Input field";
//       }
//       // Buttons
//       else if (e.target.tagName === "BUTTON") {
//         text = e.target.innerText || "Button";
//       }
//       // Other tags (p, h1, div, card, span)
//       else {
//         text = e.target.innerText;
//       }

//       if (text) speak(text);
//     }

//     document.addEventListener("focusin", handleSpeak);
//     document.addEventListener("mouseover", handleSpeak);

//     return () => {
//       document.removeEventListener("focusin", handleSpeak);
//       document.removeEventListener("mouseover", handleSpeak);
//     };
//   }, []);

//   // Load jobs (JSON + LocalStorage)
//   const [jobs, setJobs] = useState(() => {
//     const saved = localStorage.getItem("jobs");
//     return saved ? JSON.parse(saved) : jobsData;
//   });

//   const [page, setPage] = useState("Home");
//   const [seekerdata, setSeekerdata] = useState();
//   const [bigText, setBigText] = useState(false);

//   // Add job to localStorage
//   function addJob(job) {
//     setJobs((prev) => {
//       const updated = [...prev, job];
//       localStorage.setItem("jobs", JSON.stringify(updated));
//       return updated;
//     });
//     speak("Job added successfully");
//   }

//   function handleSeekerSubmit(data) {
//     setSeekerdata(data);
//     speak("Form submitted. Showing recommended jobs now.");
//     setPage("Recommentation");
//   }

//   return (
//     <div className={bigText ? "big-text" : ""}>
//       <Header setPage={setPage} setBigText={setBigText} />

//       {page === "Home" && <Home speak={speak} />}
//       {page === "Seeker" && <Seeker onSubmit={handleSeekerSubmit} speak={speak} />}
//       {page === "Employer" && <Employer addJob={addJob} speak={speak} />}
//       {page === "Recommentation" && (
//         <Recommentation seeker={seekerdata} jobs={jobs} speak={speak} />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Seeker from "./components/Seeker";
import Home from "./components/Home";
import Recommentation from "./components/Recommentation";
import Header from "./components/Header";
import Employer from "./components/Employer";

import jobsData from "./data/data.json";
import "./App.css";

function App() {

  
  function speak(text) {
    if (!text) return;
    window.speechSynthesis.cancel();  // stop previous voice
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }

  
  useEffect(() => {
    function handleSpeak(e) {
      let text = "";

      
      if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) {
        text =
          e.target.placeholder ||
          e.target.ariaLabel ||
          e.target.value ||
          "Input field";
      }
      // Buttons
      else if (e.target.tagName === "BUTTON") {
        text = e.target.innerText || "Button";
      }
      
      else {
        text = e.target.innerText;
      }

      if (text) speak(text);
    }

    document.addEventListener("focusin", handleSpeak);
    document.addEventListener("mouseover", handleSpeak);

    return () => {
      document.removeEventListener("focusin", handleSpeak);
      document.removeEventListener("mouseover", handleSpeak);
    };
  }, []);

  
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : jobsData;
  });

  const [page, setPage] = useState("Home");
  const [seekerdata, setSeekerdata] = useState();
  const [bigText, setBigText] = useState(false);

  // Add job to localStorage
  function addJob(job) {
    setJobs((prev) => {
      const updated = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(updated));
      return updated;
    });
    speak("Job added successfully");
  }

  function handleSeekerSubmit(data) {
    setSeekerdata(data);
    speak("Form submitted. Showing recommended jobs now.");
    setPage("Recommentation");
  }

  return (
    <div className={bigText ? "big-text" : ""}>
      <Header setPage={setPage} setBigText={setBigText} />

      {page === "Home" && <Home speak={speak} />}
      {page === "Seeker" && <Seeker onSubmit={handleSeekerSubmit} speak={speak} />}
      {page === "Employer" && <Employer addJob={addJob} speak={speak} />}
      {page === "Recommentation" && (
        <Recommentation seeker={seekerdata} jobs={jobs} speak={speak} />
      )}
    </div>
  );
}

export default App;
