import React from 'react';
import CustomizedAccordions from '../components/CustomizedAccordions';

const AboutMe = () => {
  return (
    <div className='max-h-screen w-screen text-white overflow-x-hidden'>
      <div className='text-center my-10'>
        <h1 className='text-4xl font-starlightRune'>ShytAnimo</h1>
      </div>
      <div className='bg-secondary flex-col items-center justify-center mx-50 my-10 rounded-xl p-10'>
        <h1 className='font-monumentExtended text-3xl'>
          I’m Raj, a graphic designer working professionally as ShytAnimo{' '}
        </h1>
        <p className='font-cartographCF opacity-50'>
          I create modern, minimal and aesthetic posters, editorial designs,
          social media visuals, magazine covers, and product packaging.
        </p>

        <div className='py-20'>
          <img className='rounded-md' src='/images/About-Me-banner.png' alt='' />
        </div>
        <div>
          <p className='font-cartographCF opacity-50'>
            My name is Raj, and I create visual work under the name ShytAnimo. I
            am a graphic designer who focuses on modern, minimal, and expressive
            design. My work includes posters, typography-led compositions,
            editorial layouts, social media graphics, and product-based visuals.
            I enjoy exploring the space between simplicity and striking detail,
            shaping each project with intention and a strong visual voice.
            Design, for me, is a blend of clarity, emotion, and structure.{' '}
            <br /> <br /> I pay close attention to composition, color, texture,
            and storytelling so that every visual feels balanced and meaningful.
            Whether I am designing a character-focused poster, a clean editorial
            layout, or an aesthetic typographic piece, I approach each project
            with care and the desire to create something memorable. I work
            mainly with Photoshop and Illustrator, building each design through
            iteration, experimentation, and a clear artistic direction. Over the
            past couple of years, I have developed my style through client work,
            personal exploration, and continuous practice. <br /> <br /> I enjoy
            collaborating with brands, creators, and individuals who value
            thoughtful, distinctive visuals. ShytAnimo represents my identity as
            a designer. It is not a studio or a team, but a personal creative
            space where I refine my craft and build visuals that reflect a
            strong aesthetic sense. I always aim to grow, learn, and create work
            that feels fresh, engaging, and visually intentional. You can
            explore more of my work on Instagram, Pinterest, and Dribbble, where
            I share my latest designs and creative experiments. You can also
            connect with me on LinkedIn and other social platforms if you would
            like to collaborate or learn more about what I do. I am always open
            to new ideas, conversations, and projects.
          </p>
        </div>
        <div className='border-t mt-25 py-10 border-accent'></div>
        <div className=' mt-10 '>
          <h1 className='font-monumentExtended text-3xl'>FAQ</h1>
          <p className='font-cartographCF opacity-50'>
            Whether it's a conversation about all things design or thinking
            about a potential project or opportunity, get in touch.
          </p>
        </div>
        <div className='py-10'>
          <CustomizedAccordions  />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
