import Image from 'next/image';
export function IntroImage(props: { src: string; alt: string }) {
  const { src, alt } = props;
  return (
    <div className="block h-[250px] w-[325px] md:h-[350px] md:w-[455px] overflow-hidden rounded-lg shadow-lg">
      <Image className="block leading-none" src={src} alt={alt} height={350} width={455} />
    </div>
  );
}
