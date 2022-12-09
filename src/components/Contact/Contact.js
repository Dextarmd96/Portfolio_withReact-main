import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsappIcon from '@material-ui/icons/WhatsApp'
import FacebookIcon from '@material-ui/icons/Facebook'

import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {

  const social  =  contact




  return (
    <div className='about center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <div className='about__contact center'>
        {social && (
          <>
            {contact.social.github && (
              <a
                href={contact.social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

              {contact.social.facebook && (
              <a
                href={contact.social.facebook}
                aria-label='facebook'
                className='link link--icon'
              >
                <FacebookIcon />
              </a>
            )}

              {contact.social.instagram && (
              <a
                href={contact.social.instagram}
                aria-label='instagram'
                className='link link--icon'
              >
                <InstagramIcon />
              </a>
            )}

                {contact.social.whatsapp && (
              <a
                href={contact.social.whatsapp}
                aria-label='whatsapp'
                className='link link--icon'
              >
                <WhatsappIcon />
              </a>
            )}

            {contact.social.linkedin && (
              <a
                href={contact.social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
                    {contact.social.twitter && (
              <a
                href={contact.social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}

            
          </>
        )}

        </div>
    </div>
  )










}

export default Contact
