import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/pp.jpg'
          alt='An image of Nick'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nick</h1>
      <p>This is a blog about learning languages!</p>
    </section>
  )
}

export default Hero
