import SpaceModel from "../components/spaceModel";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="min-h-screen w-screen  bg-black text-center text-align-center font-sans px-6 py-5">
      <img
        src="assets/Logo.png"
        alt="Company Logo"
        className="h-32 mx-auto mb-6"
      />
      {/* <h1 
        className="text-[2.5rem] font-bold text-[#a45ac1] 
                     [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]"
      >
        WELCOME TO UNIVERSE & MD
      </h1> */}
      {/* <div className="inline-block px-6 py-4 bg-black/70 border-2 border-[#a45ac1] rounded-2xl shadow-lg">
        <h1
          className="text-[2.5rem] font-bold text-[#a45ac1] 
               [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]"
        >
          WELCOME TO UNIVERSE & MD
        </h1>
      </div> */}

      <h1
        className="text-[2.5rem] font-bold text-white 
             [text-shadow:0_0_5px_#a45ac1,0_0_10px_#c28dd7,0_0_20px_#c28dd7]"
      >
        WELCOME TO UNIVERSE & MD
      </h1>
      {/* ===================================================================== */}
      {/* <p className="text-lg text-[#c28dd7] mt-2 mb-10">
        Your one-stop destination for quality services — from beauty & wellness,
        to education & global opportunities.
      </p> */}
      <p className="text-lg text-[#c28dd7] mt-2 mb-10 drop-shadow-[0_0_6px_rgba(194,141,215,0.6)]">
        Your one-stop destination for quality services — from beauty & wellness,
        to education & global opportunities.
      </p>

      <SpaceModel />

      <div className="flex justify-center gap-6 flex-wrap mt-10">
        <div className="w-[250px] bg-white p-5 rounded-xl shadow-md text-left">
          <h2 className="font-semibold text-center text-lg">VENUS</h2>
          <p className="text-gray-700">
            Discover premium beauty products designed to enhance your natural
            glow.
          </p>
        </div>

        <a
          href="https://vmdconsultantskadawatha.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-[250px] bg-white p-5 rounded-xl shadow-md text-left hover:shadow-lg transition cursor-pointer">
            <h2 className="font-semibold text-center text-lg">
              VMD Consultants
            </h2>
            <p className="text-gray-700">
              Turn your dream of studying abroad into reality with our expert
              guidance.
            </p>
          </div>
        </a>

        <div className="w-[250px] bg-white p-5 rounded-xl shadow-md text-left">
          <h2 className="font-semibold text-center text-lg">
            Universal English Academy
          </h2>
          <p className="text-gray-700">
            Achieve your desired band score with our expert-led training
            programs.
          </p>
        </div>
      </div>

      <button className="mt-10 px-6 py-3 text-white text-base bg-[#4800ff] rounded-lg shadow hover:bg-[#3700cc] transition">
        Learn More
      </button>

      <Footer />
    </div>
  );
};

export default Home;

// import SpaceModel from "../components/spaceModel";
// import Footer from "../components/footer";

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>WELCOME TO UNIVERSE & MD</h1>
//       <p style={styles.subtitle}>
//         Your one-stop destination for quality services — from beauty & wellness,
//         to education & global opportunities.
//       </p>

//       <SpaceModel />

//       <div style={styles.services}>
//         <div style={styles.card}>
//           <h2>Cosmetic Brand</h2>
//           <p>
//             Discover premium beauty products designed to enhance your natural
//             glow.
//           </p>
//         </div>

//         <div style={styles.card}>
//           <h2>IELTS Classes</h2>
//           <p>
//             Achieve your desired band score with our expert-led training
//             programs.
//           </p>
//         </div>

//         <div style={styles.card}>
//           <h2>Student Visa Recruitment</h2>
//           <p>
//             Turn your dream of studying abroad into reality with our expert
//             guidance.
//           </p>
//         </div>
//       </div>

//       <button style={styles.button}>Learn More</button>
//       <Footer />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px",
//     fontFamily: "font-stretch",
//     // backgroundColor: '#470163ff'
//     backgroundColor: "#000000ff",
//   },
//   title: {
//     fontSize: "2.5rem",
//     color: "#a45ac1ff", // Fill color
//     WebkitTextStroke: "0.01px white", // Outline color and thickness
//     fontWeight: "bold", // Optional: make the text bolder
//     // fallback for non-webkit browsers (optional)
//     textShadow: `
//     -1px -1px 0 white,
//     1px -1px 0 white,
//     -1px 1px 0 white,
//     1px 1px 0 white
//   `,
//   },
//   // title: {
//   //   fontSize: '2.5rem',
//   //   color: '#67068eff',

//   // },
//   subtitle: {
//     fontSize: "1.2rem",
//     color: "#c28dd7ff",
//     marginTop: "10px",
//     marginBottom: "40px",
//   },
//   services: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   card: {
//     width: "250px",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
//     textAlign: "left",
//   },
//   button: {
//     marginTop: "40px",
//     padding: "10px 25px",
//     fontSize: "1rem",
//     backgroundColor: "#4800ffff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
// };

// export default Home;
