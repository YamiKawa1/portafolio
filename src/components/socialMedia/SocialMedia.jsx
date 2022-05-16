import React from 'react'
import "./SocialMedia.css"

function SocialMedia() {
  return (
    <div className='media'>
        <small>Redes</small>
        <ul>
            <li className='github'>
                <a target="_blank" rel='noreferrer' href="https://www.github.com/YamiKawa1" ><img src="files/github.svg" alt="github" /></a>
            </li>
            <li className='linkedin'>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jehan-veracierta" ><img src="files/linkedin.svg" alt="linkedin" /></a>
            </li>
            <li className='facebook'>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/jehan.veracierta.5" ><img src="files/facebook.svg" alt="facebook" /></a>
            </li>
        </ul>
        
    </div>
  )
}

export default SocialMedia