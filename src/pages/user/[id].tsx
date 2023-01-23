import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '../../../public/avatar1.jpg'
const User = ({ user }: { user: any }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">FICHE Médicale +</a>

        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <Image className="masthead-avatar mb-5" style={{borderRadius: "100px"}} width={400} height={230} src={avatar} alt="photo de profil"/>
          <h1 className="masthead-heading text-uppercase mb-0">INFOS</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0"><b>Prénom : {user.firstName} <br /><br /> Nom : {user.lastName} </b>
            <br /><br />Adresse : {user.adress}
            <br /><br /> Contact 01 à prévenir en cas d&apos;urgence : {user.firstContactName}  {user.firstContact} 
            <br /> <br />Contact 02 à prévenir en cas d&apos;urgence : {user.secondContactName} {user.secondContact}
            <br /> <br />Date de naissance : {user.birthday}
            <br /> <br /> Allergies et réactions : {user.allergies}
  
            <br /><br /> Antécédents médicaux : {user.antecedent}
          </p>
        </div>
      </header>





      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; DIGI MENU 2022</small></div>
      </div>
    </>
  );
};

export default User;

export const getServerSideProps = async ({ params }: { params: any }) => {
  const res = await fetch(`http://localhost:5000/user/${params.id}`)
  const data = await res.json()
  console.log(data)
  return {
    props: {
      user: data.data
    }
  }
} 