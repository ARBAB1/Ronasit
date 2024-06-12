"use client";
import React, {useState} from "react";
import styles from "./Faq.module.css";
import { FaM, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import 'animate.css';



const Faq = () => {
  const [First, setFirst] = useState(false);
  const [Second, setSecond] = useState(false);
  const [Third, setThird] = useState(false);
  const [Fourth, setFourth] = useState(false);
  const [Fifth, setFifth] = useState(false);
  const [Sixth, setSixth] = useState(false);
  const [Seventh, setSeventh] = useState(false);
  const [Eighth, setEighth] = useState(false);

  const HandleFirst = () => {
    setFirst(!First);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
    setSeventh(false);
  }
  const HandleSecond = () => {
    setSecond(!Second);
    setFirst(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
    setSeventh(false);
  }
  const HandleThird = () => {
    setThird(!Third);
    setFirst(false);
    setSecond(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
    setSeventh(false);
  }
  const HandleFourth = () => {
    setFourth(!Fourth);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFifth(false);
    setSixth(false);
    setSeventh(false);
  }
  const HandleFifth = () => {
    setFifth(!Fifth);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setSixth(false);
    setSeventh(false);
  }

  const HandleSixth = () => {
    setSixth(!Sixth);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSeventh(false);
  }

  const HandleSeventh = () => {
    setSeventh(!Seventh);
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
  } 
   return (
    <div className={`container ${styles.container}`}>
      <div className={`grid grid-cols-12 gap-4 ${styles.SubContainer}`}>
        <div className={`col-span-2 p-4 animate__animated animate__fadeInUp ${styles.HeadinSide}`}>
            <h1 className={styles.FaqText}>FAQ</h1>
        </div>
        <div className={`col-span-5 p-4 animate__animated animate__fadeInUp ${styles.middleSide}`}>
        <div className={styles.BoxSide} onClick={HandleFirst}>
              {
                  First ? 
                  <FaMinus size={92}  className={First ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {First ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            <div className={styles.BoxSide} onClick={HandleSecond}>
              {
                  Second ? 
                  <FaMinus size={92}  className={Second ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Second ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            <div className={styles.BoxSide} onClick={HandleThird}>
              {
                  Third ? 
                  <FaMinus size={92}  className={Third ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Third ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            <div className={styles.BoxSide} onClick={HandleFourth}>
              {
                  Fourth ? 
                  <FaMinus size={92}  className={Fourth ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Fourth ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            
        </div>
        <div className={`col-span-5  ${styles.middleSide}`}>
        <div className={styles.BoxSide} onClick={HandleFifth}>
              {
                  Fifth ? 
                  <FaMinus size={92}  className={Fifth ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Fifth ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            <div className={styles.BoxSide} onClick={HandleSixth}>
              {
                  Sixth ? 
                  <FaMinus size={92}  className={Sixth ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Sixth ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            <div className={styles.BoxSide} onClick={HandleSeventh}>
              {
                  Seventh ? 
                  <FaMinus size={92}  className={Seventh ? styles.Iconm : styles.Icon }/>
                  :
                  <FaPlus size={92}  className={styles.Iconm}/>
            }
             <div className={styles.ContentBox}>
                 <h1>How long does the logo design process usually take?</h1>
                 {Seventh ? 
                   <p>The duration of the logo design process can vary, but typically it falls within a 2 to 5-day timeframe. To ensure high-quality results, we dedicate no less than 16 hours to crafting and revising each individual logo.</p>
                 :""
                }
                
             </div>
            </div>
            
            
        </div>
        
       
        
      </div>
    </div>
  );
};

export default Faq;
