
import { motion } from "framer-motion";
import ashok from "../../public/Speakers/ashok.png";
import BK from "../../public/Speakers/BK.png";
import deepak from "../../public/Speakers/deepak.png";
import hector from "../../public/Speakers/hector.png";
import jitender from "../../public/Speakers/jitender.png";
import kashyap from "../../public/Speakers/kashyap.png";
import manisha from "../../public/Speakers/manisha.png";
import manojkumar from "../../public/Speakers/manoj-kumar.png";
import manoj from "../../public/Speakers/manoj.png";
import meisam from "../../public/Speakers/meisam.png";
import namita from "../../public/Speakers/namita.png";
import nowsheen from "../../public/Speakers/nowsheen.png";
import onkar from "../../public/Speakers/onkar.png";
import raj from "../../public/Speakers/raj.png";
import ram from "../../public/Speakers/ram.png";
import renu from "../../public/Speakers/renu.png";
import rubina from "../../public/Speakers/rubina.png";
import sandeep from "../../public/Speakers/sandeep.png";
// import sanjeevjain from "../../public/Speakers/sanjeev-jain.png";
import saumya from "../../public/Speakers/saumya.png";
import shilpi from "../../public/Speakers/shilpi.png";
import tauseef from "../../public/Speakers/tauseef.png";
import umesh from "../../public/Speakers/umesh.png";
import vikas from "../../public/Speakers/vikas.png";
import vinay from "../../public/Speakers/vinay.png";
import vinodpu from "../../public/Speakers/vinod-pu.png";
import zabeer from "../../public/Speakers/zabeer-ahmad.png";
import asha from "../../public/Speakers/asha.jpeg";
import paul from "../../public/Speakers/paul.png";
import yusuf from "../../public/Speakers/yusuf.png";
import vipin from "../../public/Speakers/vipin.png";
import pravir from "../../public/Speakers/pravir.png";
import zainul from "../../public/Speakers/zainul.png";
import saurabh from "../../public/Speakers/saurabh.png";
import shelly from "../../public/Speakers/shelly.png";
import piyush_pandey from "../../public/Speakers/piyush_pandey.png";
import sumit from "../../public/Speakers/sumit.png";
import arshi from "../../public/Speakers/arshi.png";
import image_placeholder from "../../public/Speakers/image_place.jpg";
import mussarat from "../../public/Speakers/mussarat.jpg"
import poonam from "../../public/Speakers/poonam.jpg"
import deepak_bharadwaj from "../../public/Speakers/deepak.jpg"

const Speakers = () => {
  const speakers = [
    // Directors
    // {
    //   name: "Prof Manoj Kumar Dhar",
    //   designation: "Director AcSIR, Former Vice Chancellor University of Jammu",
    //   photo: manojkumar,
    // },
    // {
    //   name: "Dr. Zabeer Ahmed",
    //   designation:
    //     "Director CSIR-Indian Institute of Integrated Medicine, Jammu",
    //   photo: zabeer,
    // },
    {
      name: "Prof. Umesh R. Desai",
      designation:
        "Chair Professor, Dept of Medicinal Chemistry, Virginia Commonwealth University, USA",
      photo: umesh,
    },
    {
      name: "Prof Pravir Kumar",
      designation:
        "Professor, Department of Biotechnology, Delhi Technological University, Delhi ",
      photo: pravir,
    },
    {
        name: "Prof Ashok Pandey",
        designation:
          "Executive Director, Centre for Energy and Environmental Sustainability, Lucknow",
        photo: ashok,
      },
      {
        name: "Prof Pau Loke Show",
        designation:
          "Professor of Biochemical Engineering, University of Nottingham, Malaysia",
        photo: paul,
      },

    // Professors
    
    
    // {
    //   name: "Prof. Ram B. Gupta",
    //   designation:
    //     "Professor, Chemical & Life Science Engineering, Virginia Commonwealth University, Richmond, USA",
    //   photo: ram,
    // },
    // {
    //   name: "Prof Héctor A. Ruiz",
    //   designation:
    //     "Professor, Biorefinery Group, Autonomous University of Coahuila, Mexico",
    //   photo: hector,
    // },
    // {
    //   name: "Prof. Meisam Tabatabaei",
    //   designation:
    //     "Professor, Environmental Biotechnology, Universiti Malaysia Terengganu, Malaysia",
    //   photo: meisam,
    // },
    {
      name: "Prof BK Bajaj",
      designation: "Former Head, School of Biotechnology, University of Jammu",
      photo: BK,
    },
    {
      name: "Prof Shilpi Sharma",
      designation:
        "Professor, Biochemical Engineering and Biotechnology, IIT Delhi",
      photo: shilpi,
    },
    {
      name: "Prof Piyush Pandey ",
      designation:
        "Professor, Dept. of Microbiology, Assam University, Silchar ",
      photo: piyush_pandey,
    },
    {
      name: "Prof. Sandeep Sharma",
      designation:
        "Professor of Clinical Microbiology, Lovely Professional University",
      photo: sandeep,
    },
    // {
    //   name: "Prof Namita Singh",
    //   designation:
    //     "Prof. Department of Bio & Nano Technology, Guru Jambheshwar University of Science & Technology",
    //   photo: namita,
    // },
    {
      name: "Prof Kashyap Kumar Dubey",
      designation: "School of Biotechnology, Jawahar Lal Nehru University",
      photo: kashyap,
    },
    
    // {
    //   name: "Prof. Jitender Sharma",
    //   designation:
    //     "Professor, Department of Biotechnology, Kurukshetra University",
    //   photo: jitender,
    // },
    // {
    //   name: "Prof(Dr.) Rubina Mirza",
    //   designation:
    //     "Professor, Department of Obstetrics and Gynaecology, GMC Jammu",
    //   photo: rubina,
    // },
    {
      name: "Prof. Vikas Sharma",
      designation: "Professor, Division of Biochemistry, SKUAST Jammu",
      photo: vikas,
    },
    {
      name: "Prof. Mussarat Amin",
      designation: "Professor, Department of Pharmacognosy, King Saud University, Saudi Arabia",
      photo: mussarat,
    },
    {
      name:"Dr. Poonam Singh Nigam",
      designation:"Professor, Biomedical Sciences Research Institute, Ulster University, Coleraine, Northern Ireland, United Kingdom",
      photo:poonam
    },


    // Principal Scientists
    {
      name: "Dr. Asha Chaubey",
      designation:
        "Sr. Principal Scientist, Fermentation and Microbial Biotechnology Division,CSIR-IIIM Jammu",
      photo: asha,
    },
    {
      name: "Dr. Sumit Gandhi",
      designation:
        "Senior Principal Scientist & Head, Infectious Diseases Division, CSIR – Indian Institute of Integrative Medicine",
      photo: sumit,
    },
    
    // {
    //   name: "Dr. Saumya Ray Chaudheri",
    //   designation: "Chief Scientist, IMTECH, Chandigarh",
    //   photo: saumya,
    // }, 
    // {
    //   name: "Dr. Onkar Nath Tiwari",
    //   designation:
    //     "Scientist `F&apos;, Bio-Wealth & Biosafety, Department of Biotechnology, GoI",
    //   photo: onkar,
    // },
    // {
    //   name: "Dr. Deepak Modi",
    //   designation:
    //     "Scientist G, National Institute for Research in Reproductive Health, Mumbai",
    //   photo: deepak,
    // },
   

    // Associate Professors
    // {
    //   name: "Dr. Vinod Kumar",
    //   designation:
    //     "Associate Professor, Department of Chemistry, Central University of Punjab",
    //   photo: vinodpu,
    // },
    // {
    //   name: "Dr. Renu Sharma",
    //   designation:
    //     "Associate Professor, Department of Obstetrics and Gynaecology, AIIMS, Jammu",
    //   photo: renu,
    // },
    {
      name: "Dr. Zainul Akmar Bin Zakaria",
      designation:
        "Associate Professor, Department of Bioprocess Engineering and Polymer, Faculty of Chemical and Energy Engineering, Universiti Teknologi Malaysia",
      photo: zainul,
    },
    {
      name: "Dr. Deepak Bhardwaj ",
      designation:
        "Associate Professor, Botany Department, Central University of Jammu",
      photo: deepak_bharadwaj,
    },
    {
      name: "Dr. Nowsheen Nazir",
      designation:
        "Associate Professor, Department of Fruit Science, SKUAST Kashmir",
      photo: nowsheen,
    },
    {
      name: "Dr. Manoj Kumar",
      designation: "Senior Scientist, Sidra Medicine, Qatar",
      photo: manoj,
    },
    
    // {
    //   name: "Dr. Vinay Kumar",
    //   designation:
    //     "Associate Professor, Department of Obstetrics and Gynaecology, GMC Jammu",
    //   photo: vinay,
    // },

    // Assistant Professors
    {
      name: "Dr. Raj Kamal",
      designation:
        "Assistant Professor, Department of Chemistry, Kurukshetra University",
      photo: raj,
    },

    // Other categories

    {
      name: "Dr. Touseef Amna",
      designation:
        "Department of Biology and Biotechnology, College of Science, Albaha University, Saudi Arabia",
      photo: tauseef,
    },
    {
      name: "Dr. Yusuf Akhtar",
      designation:
        "Assistant Professor, Department of Biotechnology Babasaheb Bhimrao Ambedkar University, Lucknow",
      photo: yusuf,
    },
    {
      name: "Dr. Vipin Sharma",
      designation:
        "Assistant Professor, Department of Pharmaceutical sciences, Gurukul Kangri, Deemed University, Haridwar",
      photo: vipin,
    },
    {
      name: "Dr. Saurabh Kumar Jha",
      designation:
        "Assistant Professor, Department of Zoology, Kalindi college, Delhi University",
      photo: saurabh,
    },
    {
      name: "Dr. Shelly Seghal ",
      designation:
        "Assistant Professor, Department of Molecular Biology, Central university of Jammu",
      photo: shelly,
    },
    {
      name: "Dr. Arshi Naim ",
      designation:
        "Sam Higginbottom Institute of Agriculture, Technology and Sciences, Deemed University, Allahabad ",
      photo: arshi,
    },
    

    // {
    //   name: "Dr. Manisha Bhagat",
    //   designation: "Gynaecologist & IVF Specialist, Indra IVF, Jammu",
    //   photo: manisha,
    // },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 md:px-16 py-10 justify-center items-center">
      {speakers.map((item, i) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border rounded-xl"
          key={i}
        >
          <div className="">
            <img
              className="rounded-t-xl w-full h-[350px] object-cover "
              loading="lazy"
              src={item.photo}
              alt={item.name}
            />
          </div>
          <div className="pb-5 max-h-max">
            <h1 className="text-xl text-orange-500 font-bold text-center">
              {item.name}
            </h1>
            <p className="text-lg text-center">{item.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Speakers;
