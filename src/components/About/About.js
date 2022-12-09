
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  if (!about.email) return null
  const {photo,name, role, description, resume,email } = about

  return (
    <div className='about center'>
      {photo && (
       <img height="200px" alt="Avatar placeholder" id='photo' src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

          {email && (
          <a href={`mailto:${about.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        )}

        {/* </div>

        <div className='about__contact center'> */}


      </div>
    </div>
  )
}

export default About
