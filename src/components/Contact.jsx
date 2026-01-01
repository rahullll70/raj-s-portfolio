import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Contact = () => {
  useGSAP(() => {
    const textsplit = new SplitText('.split-text', { type: 'words,chars' });

    textsplit.words.forEach((word) => {
      word.style.overflow = 'hidden';
      word.style.display = 'inline-block';
      word.style.position = 'relative';
      word.style.padding = '4px 12px';
      
      // Create background element
      const bg = document.createElement('span');
      bg.style.position = 'absolute';
      bg.style.top = '0';
      bg.style.left = '0';
      bg.style.width = '100%';
      bg.style.height = '100%';
      bg.style.backgroundColor = '#b90e0a';
      bg.style.zIndex = '-1';
      bg.style.transformOrigin = 'bottom';
      bg.style.transform = 'scaleY(0)';
      word.style.zIndex = '1';
      word.insertBefore(bg, word.firstChild);
      
      // Wrap text content
      const textContent = Array.from(word.childNodes)
        .filter(node => node !== bg);
      const textWrapper = document.createElement('span');
      textWrapper.style.display = 'inline-block';
      textWrapper.style.position = 'relative';
      textContent.forEach(node => textWrapper.appendChild(node));
      word.appendChild(textWrapper);
      
      word.addEventListener('mouseenter', () => {
        const tl = gsap.timeline();
        
        // Background slides up and stays
        tl.to(bg, {
          scaleY: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
        // Text goes up
        .to(textWrapper, {
          y: '-100%',
          duration: 0.3,
          ease: 'power2.in'
        }, '-=0.1')
        // Reset text position
        .set(textWrapper, { y: '100%' })
        // Text comes back
        .to(textWrapper, {
          y: '0%',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      word.addEventListener('mouseleave', () => {
        // Background slides down
        gsap.to(bg, {
          scaleY: 0,
          duration: 0.3,
          ease: 'power2.in'
        });
      });
    });
  });


  return (
    <main className='flex flex-col w-screen min-h-screen overflow-x-hidden text-white'>
      <div className='px-8 mt-20 md:flex md:items-start md:justify-between font-cartographCF md:px-40 md:mt-40'>
        <div className='gap-2 mb-8 md:grid md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>
            contact
          </h1>
          <a
            className='pt-5 transition-opacity opacity-50 split-text hover:opacity-100'
            href='mailto:youremail@gmail.com'
          >
            shytanimo@gmail.com
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>
            explore
          </h1>
          <a
            className='pt-5 transition-opacity opacity-50 split-text hover:opacity-100 text-md'
            href='/'
          >
            Home
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='/about'
          >
            AboutMe
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='/projects'
          >
            Projects
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>
            hire
          </h1>
          <a
            className='pt-5 transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://upwork.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Upwork
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://fiverr.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Fiverr
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://freelancer.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Freelancer
          </a>
        </div>
        <div className='grid grid-cols-1 gap-2 mb-8 md:mb-0'>
          <h1 className='text-xl uppercase font-monumentExtended md:text-3xl'>
            socials
          </h1>
          <a
            className='pt-5 transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://instagram.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://pinterest.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pinterest
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
          <a
            className='transition-opacity opacity-50 split-text hover:opacity-100'
            href='https://dribbble.com/yourhandle'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dribbble
          </a>
        </div>
      </div>
      <div className='mt-auto text-center '>
        <h1 className='text-5xl md:text-[9rem] lg:text-[13rem] font-monumentExtended'>
          ShytAnimo
        </h1>
      </div>
    </main>
  );
};

export default Contact;
