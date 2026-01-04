import React from 'react';
import CustomizedAccordions from '../components/CustomizedAccordions';

const AboutMe = () => {
  return (
    <div className='w-screen min-h-screen text-white ovscerflow-x-hidden'>
      {/* Header */}
      <div className='flex items-center justify-center gap-6 pt-5 md:flex-row md:gap-8'>
          <img src="/images/logo_bar.png" alt="" className='w-5xl'/>
        </div>

      {/* Main Content Container */}
      <div className='flex-col items-center justify-center p-6 mx-4 my-6 bg-secondary sm:mx-8 md:mx-20 lg:mx-50 md:my-10 rounded-xl md:p-10'>
        {/* Intro Text */}
        <div>
          <h1 className='text-xl leading-tight font-monumentExtended sm:text-2xl md:text-3xl '>
            I'm <span className='underline '>Raj</span> , a graphic designer
            working professionally as{' '}
            <span className='underline '>ShytAnimo</span>
          </h1>

          <p className='mt-4 text-sm text-black font-cartographCF md:text-base bg-special'>
            I create modern, minimal and aesthetic posters, editorial designs,
            social media visuals, magazine covers, and product packaging.
          </p>
        </div>

        {/* Banner Image */}
        <div className='py-10 md:py-20'>
          <img
            className='w-full h-auto rounded-md'
            src='/images/About-Me-banner.png'
            alt='About Me Banner'
          />
        </div>

        {/* Long Description */}
        <div>
          <p className='text-sm leading-relaxed opacity-50 font-cartographCF md:text-base'>
            My name is Raj, and I create visual work under the name ShytAnimo. I
            am a graphic designer who focuses on modern, minimal, and expressive
            design. My work includes posters, typography-led compositions,
            editorial layouts, social media graphics, and product-based visuals.
            I enjoy exploring the space between simplicity and striking detail,
            shaping each project with intention and a strong visual voice.
            Design, for me, is a blend of clarity, emotion, and structure.
            <br />
            <br />
            I pay close attention to composition, color, texture, and
            storytelling so that every visual feels balanced and meaningful.
            Whether I am designing a character-focused poster, a clean editorial
            layout, or an aesthetic typographic piece, I approach each project
            with care and the desire to create something memorable. I work
            mainly with Photoshop and Illustrator, building each design through
            iteration, experimentation, and a clear artistic direction. Over the
            past couple of years, I have developed my style through client work,
            personal exploration, and continuous practice.
            <br />
            <br />I enjoy collaborating with brands, creators, and individuals
            who value thoughtful, distinctive visuals. ShytAnimo represents my
            identity as a designer. It is not a studio or a team, but a personal
            creative space where I refine my craft and build visuals that
            reflect a strong aesthetic sense. I always aim to grow, learn, and
            create work that feels fresh, engaging, and visually intentional.
            You can explore more of my work on Instagram, Pinterest, and
            Dribbble, where I share my latest designs and creative experiments.
            You can also connect with me on LinkedIn and other social platforms
            if you would like to collaborate or learn more about what I do. I am
            always open to new ideas, conversations, and projects.
          </p>
        </div>

        {/* Divider */}
        <div className='py-6 mt-10 border-t md:mt-16 lg:mt-25 md:py-10 border-accent'></div>

        {/* FAQ Section */}
        <div className='mt-6 md:mt-10'>
          <h1 className='text-xl font-monumentExtended sm:text-2xl md:text-3xl'>
            FAQ
          </h1>
          <p className='mt-4 text-sm opacity-50 font-cartographCF md:text-base'>
            Whether it's a conversation about all things design or thinking
            about a potential project or opportunity, get in touch.
          </p>
        </div>

        {/* Accordion Component */}
        <div className='py-6 md:py-10'>
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
