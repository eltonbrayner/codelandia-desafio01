import Image from 'next/image';
import heartEmptyIcon from 'src/assets/icons/heart-outlined.svg';
import heartFillIcon from 'src/assets/icons/heart-fulled.svg';

export function HeartBtn({ favorite }) {
  return (
    <div>
      {favorite ? (
        <Image src={heartFillIcon} />
      ) : (
        <Image src={heartEmptyIcon} />
      )}
    </div>
  );
}
