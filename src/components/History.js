
import { BsPlusCircleFill } from 'react-icons/bs';
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className='content-container'>
  
      <div className='content-list'></div>
        
       
        <Post
          name='Doktor'
          text={`Zróbcie projekt z reacta. `}
        />
        <Post
          name='Patryk'
         
          text={`Szymon robimy razem?.`}
        />
        <Post
          name='Szymon'
          text={`Jasne. `}
        />
        <Post
          name='Visual studio code'
          text={`Powodzenia. ☺️ `}
        />
        <Post
          name='Craco'
          text={`Zapewnie wam 8h zabawy`}
        />
        <Post
          name='Tailwind'
          text={`Ja tylko 2 aczkolwiek też będzie fajnie`}
          
        />
         <Post
          name='Patryk'
      
          text={`Myślisz że zdążymy to zrobić?.`}></Post>
         <Post
          name='Szymon'
          text={`Oczywiście, że tak patrz i cyk Craco instalowane brute forcem. `}
        />  
         <Post
          name='Craco'
          text={`No i teraz to działam`}
        />
        <Post
          name='Visual studio code'
          text={`I projekcik powstał`}
        />
      
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='16'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;