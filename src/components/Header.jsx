// function Header({ setPage }) {
//   return (
//     <div style={{ 
//       display: "flex", 
//       gap: "15px", 
//       padding: "15px", 
//       backgroundColor: "#f1f1f1",
//       justifyContent: "center"
//     }}>
//       <button onClick={() => setPage("Home")}>Home</button>
//       <button onClick={() => setPage("Seeker")}>Job Seeker</button>
//       <button onClick={() => setPage("Employer")}>Employer</button>
//       <button onClick={() => setPage("Recommentation")}>Recommendations</button>
//     </div>
//   );
// }
// export default Header;
export default function Header({ setPage, setBigText }) {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      padding: "15px",
      backgroundColor: "#f1f1f1",
      justifyContent: "center",
      borderBottom: "2px solid #ccc"
  

    }}>

      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("Seeker")}>Job Seeker</button>
      <button onClick={() => setPage("Employer")}>Employer</button>
      <button onClick={() => setPage("Recommentation")}>Recommendations</button>
      <button onClick={() => setBigText(prev => !prev)}>A+</button>

    </div>
  );
}

