import React from 'react'

function Qeydiyyat() {
    return (
<div className="register">
            <div className="container">
        <div className="qeydiyyat">Qeydiyyat</div>
<form action="#">
    <div className="istifadeci">
        <div className="input-box">
            <span className="ad">Ad və Soyad</span>
            <input type="text" placeholder="Adınızı daxil edin . . ." required />
        </div>
        <div className="input-box">
            <span className="ad">İstifadəçi adı</span>
            <input type="text" placeholder="İstifadəçi adı daxil edin . . ." required />
        </div>
        <div className="input-box">
            <span className="ad">Email</span>
            <input type="email" placeholder="Emailinizi daxil edin . . ." required />
        </div>
        <div className="input-box">
            <span className="ad">Mobil Nömrəniz</span>
            <input type="tel" placeholder="Nömrənizi daxil edin . . ." required />
        </div>
        <div className="input-box">
            <span className="ad">Parol</span>
            <input type="password" placeholder="Parolunuzu daxil edin . . ." required />
        </div>
        <div className="input-box">
            <span className="ad">Parolun Təsdiqi</span>
            <input type="password" placeholder="Parolunuzu təsdiq edin . . ." required />
        </div>
    </div>
    <div className="cins">
        <span className="cins-1">Cinsiniz</span>
        <ul className="kateqoriya">
            <li>
               <label htmlFor="kisi">
                   <input id="kisi" type="radio" name="gender" />
                   <span>Kişi</span>
               </label>
                
            </li>
            <li>
                <label htmlFor="qadin">
                    <input id="qadin" type="radio" name="gender" />
                    <span>Qadın</span>
                </label>   

            </li>
        </ul>
    </div>
    <div className="button">
        <input type="submit" value="Qeydiyyatdan keç"/>
    </div>
</form>



    </div>

</div>
        )
}

export default Qeydiyyat
