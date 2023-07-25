import Image from 'next/image'

const Avatar = () => {
  return (
    <div>
      <image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=''
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
