import React from 'react'
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare,FaLinkedin, FaInstagramSquare} from 'react-icons/fa'

function Contacts() {
    return (
        <div className="contactUs">
       <div className="title">
           <h2>Bizimlə əlaqə saxlayın</h2>
       </div>
       <div className="box">
 <div className="contact form">
     <h2>Send a Message</h2>
     <form action="#">
         <div className="formBox">
             <div className="row50">
                 <div className="inputBox">
                     <span>Ad</span>
                     <input type="text" placeholder="Ferhad" />
                 </div>
                 <div className="inputBox">
                     <span>Soyad</span>
                     <input type="text" placeholder="Eyvazov" />
                 </div>
             </div>
             <div className="row50">
                 <div className="inputBox">
                     <span>Email</span>
                     <input type="mail" placeholder="eyvazov.ferhad1997@gmail.com" />
                 </div>
                 <div className="inputBox">
                     <span>Mobil</span>
                     <input type="number" placeholder="+994 55 563 9129" />
                 </div>
             </div>
            <div className="row100">
                <div className="inputBox">
                    <span>Mesaj</span>
                    <textarea placeholder="Mesajınızı bura yazın. . ." id="" cols="30" rows="10"></textarea>
                </div>
            </div>
                       <div className="row100">
                           <div className="inputBox">
                               <input type="submit" value="Göndər" />
                           </div>
                       </div>

                   </div>
                    </form>
                </div>
                <div className="contact info">
                    <h2>Contact Info</h2>
                    <div className="infobox">
                        <div>
                            <span><FaMapMarkerAlt/></span>
                            <p>AFF Mall 4-cu mertebe</p>
                        </div>
                        <div>
                            <span><FaEnvelope/></span>
                            <a href="mailto:eyvazov.ferhad1997@gmail.com">eyvazov.ferhad1997@gmail.com</a>
                        </div>
                        <div>
                            <span><FaPhoneAlt/></span>
                            <a href="tel:+994555639129">+994 55 563 9129</a>
                        </div>
                        <ul className="sci">
                            <li><a href="https://www.facebook.com/profile.php?id=100010205651055"><FaFacebookSquare/></a></li>
                            <li><a href="https://www.linkedin.com/in/ferhad-eyvazov-b90104108/"><FaLinkedin/></a></li>
                            <li><a href="https://www.instagram.com/ferhad_eyvazzov/"><FaInstagramSquare/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts