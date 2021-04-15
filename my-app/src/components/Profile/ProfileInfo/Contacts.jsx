import React from 'react';
import style from './ProfileInfo.module.css';
import facebook from './../../../assets/images/facebook.png';
import github from './../../../assets/images/github.png';
import instagram from './../../../assets/images/instagram.png';
import twitter from './../../../assets/images/twitter.png';
import vk from './../../../assets/images/vk.png';
import website from './../../../assets/images/website.png';
import youtube from './../../../assets/images/youtube.png';


const icons = { facebook, github, instagram, twitter, vk, website, youtube }

const Contacts = ({ contacts }) => {


  let contact = Object.entries(contacts).map(([socialNetwork, url]) => {
    if (!url) {
      return <div></div>
    }
    return <div>
      <a href={url} target='blank'>
        <img src={icons[socialNetwork]}  />
      </a>
      </div>
  });

  return (

    <div> 
      <div className={style.contactBloc}>
        {contact}
      </div>
    </div>
  )
}
export default Contacts;